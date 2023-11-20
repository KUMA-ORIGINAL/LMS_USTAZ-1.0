from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

from server.settings import AUTH_USER_MODEL
from .fields import OrderField

User = AUTH_USER_MODEL


class Subject(models.Model):
    """ Моделька предмета """

    title = models.CharField(max_length=200)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title


class Course(models.Model):
    """ Моделька курса """

    title = models.CharField(max_length=255)
    description = models.TextField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='course/%Y/%m/%d')
    start_month = models.DateField()
    end_month = models.DateField()
    days_of_week = models.CharField(max_length=14)
    start_time = models.TimeField()
    end_time = models.TimeField()
    mentor = models.ForeignKey(settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE,
                               related_name='courses_mentor',
                               limit_choices_to={'role': 'mentor'})
    assistant = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL,
                                  null=True, blank=True,
                                  related_name='courses_assisting',
                                  limit_choices_to={'role': 'mentor'})
    students = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='courses_enrolled',
                                      limit_choices_to={'role': 'student'})
    is_completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.title


class Module(models.Model):
    """ Моделька модуля внутри курса """

    course = models.ForeignKey(Course,
                               related_name='modules',
                               on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    order = OrderField(blank=True, for_fields=['course'])
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f'{self.order}.{self.title}'


class Content(models.Model):
    """ Моделька контента внутри модуля """

    module = models.ForeignKey(Module,
                               related_name='contents',
                               on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    order = OrderField(blank=True, for_fields=['module'])
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']


class Task(models.Model):
    """ Моделька задания внутри модуля """

    module = models.ForeignKey(Module,
                               related_name='tasks',
                               on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()
    max_score = models.PositiveIntegerField()
    description = models.TextField()

    def __str__(self):
        return self.title


class Solution(models.Model):
    """ Моделька решение внутри задания """

    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'student'})
    is_accepted = models.BooleanField(default=False)
    order = OrderField(blank=True, for_fields=['task', 'student'])
    score = models.PositiveIntegerField(null=True, blank=True,
                                        validators=[
                                            MinValueValidator(1, message="Баллы должны быть не меньше 1."),
                                            MaxValueValidator(100, message="Баллы должны быть не больше 100."),
                                        ])
    attachment = models.FileField(upload_to='solutions/%Y/%m/%d')
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Solution for {self.task.title} by {self.student}"


class Schedule(models.Model):
    """ Моделька расписания """

    course = models.ForeignKey('Course', on_delete=models.CASCADE, related_name='schedules')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return f'{self.title} | {self.date}'
