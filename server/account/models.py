from datetime import date

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
from phonenumber_field.modelfields import PhoneNumberField

from course.models import Course


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
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
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    position = models.CharField(max_length=50, choices=POSITION_CHOICES, blank=True, null=True)
    birth_date = models.DateField(default=date.today)
    age = models.PositiveIntegerField(blank=True, null=True)
    phone_number = PhoneNumberField()
    profile_picture = models.ImageField(upload_to='profile_pictures/%Y/%m/%d', blank=True, null=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f'{self.email} | {self.first_name} | {self.last_name}'

    def save(self, *args, **kwargs):
        if self.password:
            self.password = make_password(self.password)

        is_new = self._state.adding

        super(User, self).save(*args, **kwargs)

        if is_new and self.role == 'student':
            ProfileStudent.objects.create(student=self, course=None)


def calculate_age(birth_date):
    today = date.today()
    age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
    return age


@receiver(pre_save, sender=User)
def update_age(sender, instance, **kwargs):
    if instance.birth_date:
        instance.age = calculate_age(instance.birth_date)


class Award(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)


class ProfileStudent(models.Model):
    student = models.OneToOneField(User, on_delete=models.CASCADE, limit_choices_to={'role': 'student'})
    course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True, null=True, )
    points = models.PositiveIntegerField(
        default=0,
        validators=[
            MinValueValidator(0, message="Баллы должны быть не меньше 0."),
            MaxValueValidator(25, message="Баллы должны быть не больше 25."),
        ]
    )
    awards = models.ManyToManyField(Award, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)


@receiver(pre_save, sender=ProfileStudent)
def update_points(sender, instance, **kwargs):
    if instance.pk is not None:
        original_instance = sender.objects.get(pk=instance.pk)
        if instance.points != original_instance.points:
            instance.points = instance.points + original_instance.points
