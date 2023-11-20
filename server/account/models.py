from datetime import date

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models import Sum
from django.template.defaultfilters import slugify
from phonenumber_field.modelfields import PhoneNumberField

from course.models import Course, Schedule, Solution


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)


def get_image_filename(instance, filename):
    name = instance.product.name
    slug = slugify(name)
    return f"profile_photos/{slug}-{filename}"


class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Администратор'),
        ('mentor', 'Ментор'),
        ('student', 'Студент'),
    )
    POSITION_CHOICES = (
        ('backend', 'backend'),
        ('frontend', 'frontend')
    )

    username = None
    email = models.EmailField(unique=True)
    phone_number = PhoneNumberField()
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    position = models.CharField(max_length=50, choices=POSITION_CHOICES, blank=True, null=True)
    birth_date = models.DateField(default=date.today)
    profile_photo = models.ImageField(upload_to=get_image_filename, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    def save(self, *args, **kwargs):
        """Хэширует пароль и сохраняет его в базе данных"""
        if self.password:
            self.password = make_password(self.password)
            print("set_password")
        super().save(*args, **kwargs)


class Award(models.Model):
    """ Моделька наград для студентов """

    name = models.CharField(max_length=255)
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)


class ProfileStudent(models.Model):
    """ Моделька профиля студента """

    student = models.OneToOneField(User, on_delete=models.CASCADE, limit_choices_to={'role': 'student'})
    awards = models.ManyToManyField(Award, blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True, null=True, )
    points = models.PositiveIntegerField(default=0)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def calculate_points(self):
        total_points = Solution.objects.filter(student=self.student, is_accepted=True).aggregate(
            total_points=Sum('score'))['total_points']

        self.points = total_points if total_points is not None else 0
        print('asdasd')
        self.save()

    def get_scores(self):
        pass

    def __str__(self):
        return f'{self.student}'


class Attendance(models.Model):
    """ Моделька для отметки студентов """

    student = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'student'})
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    is_present = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.student} - {self.schedule} ({'Present' if self.is_present else 'Absent'})"
