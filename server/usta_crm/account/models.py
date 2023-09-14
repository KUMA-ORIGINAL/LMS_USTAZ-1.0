from datetime import date

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver


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

    username = None
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    position = models.CharField(max_length=50, blank=True, null=True)
    birth_date = models.DateField(default=date.today)
    age = models.PositiveIntegerField(blank=True, null=True)
    phone_number = models.CharField(max_length=10)
    profile_picture = models.ImageField(upload_to='profile_pictures/%Y/%m/%d', blank=True, null=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f'{self.email} | {self.first_name} | {self.last_name}'


def calculate_age(birth_date):
    today = date.today()
    age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
    return age


@receiver(pre_save, sender=User)
def update_age(sender, instance, **kwargs):
    if instance.birth_date:
        instance.age = calculate_age(instance.birth_date)


# class UserProgress(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     courses_completed = models.PositiveIntegerField(default=0)
#     total_courses = models.PositiveIntegerField(default=0)
#
#
# class UserCourse(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     course = models.ForeignKey(Course, on_delete=models.CASCADE)
#
#     def __str__(self):
#         return f'{self.user} | {self.course}'
