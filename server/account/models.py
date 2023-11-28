from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models import Sum
from phonenumber_field.modelfields import PhoneNumberField

from course.models import Course, Schedule, Solution


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)


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
    telegram = models.URLField()
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    position = models.CharField(max_length=50, choices=POSITION_CHOICES, blank=True, null=True)
    profile_photo = models.ImageField(upload_to='profile_photos', blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Award(models.Model):
    """ Моделька наград для студентов """

    name = models.CharField(max_length=255)
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)


class ProfileStudent(models.Model):
    """ Моделька профиля студента """

    user = models.OneToOneField(User, on_delete=models.CASCADE, limit_choices_to={'role': 'student'})
    awards = models.ManyToManyField(Award, blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True, null=True, )
    points = models.PositiveIntegerField(default=0)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def calculate_points(self):
        total_points = Solution.objects.filter(student=self.student, is_accepted=True).aggregate(
            total_points=Sum('score'))['total_points']

        self.points = total_points if total_points is not None else 0
        self.save()

    def get_scores(self):
        pass

    def __str__(self):
        return f'{self.user}'


class Attendance(models.Model):
    """ Моделька для отметки студентов """

    user = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'student'}, null=True)
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    is_present = models.BooleanField(null=True)

    def __str__(self):
        return f"{self.user} - {self.schedule} ({'Present' if self.is_present else 'Absent'})"


class ProjectStudent(models.Model):
    TYPE_OF_PROJECT_CHOICES = (
        ('practical_work', 'Практическая работа'),
        ('independent work', 'Cамостоятельная работа'),
        ('Project', 'Проект')
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'student'})
    type_of_project = models.CharField(max_length=100, choices=TYPE_OF_PROJECT_CHOICES)
    title = models.CharField(max_length=100)
    content_html = models.TextField()
    photo = models.ImageField(upload_to='project_photos/', blank=True)
    created = models.DateTimeField(auto_now_add=True)
