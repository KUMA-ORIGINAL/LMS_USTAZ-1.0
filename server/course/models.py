from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class Course(models.Model):
    name = models.CharField(max_length=255)
    duration = models.PositiveIntegerField(verbose_name='Длительность (месяцы)',
                                           help_text='Длительность курса в месяцах',)
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
        return self.name


class Module(models.Model):
    course = models.ForeignKey(Course,
                               related_name='modules',
                               on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Content(models.Model):
    module = models.ForeignKey(Module,
                               related_name='contents',
                               on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    html_code = models.TextField()
    created = models.DateTimeField(auto_now_add=True)


class Exam(models.Model):
    ORDER_CHOICES = (
        ('1', '1'),
        ('2', '2'),
        ('3', '3')
    )
    course = models.ManyToManyField(Course, related_name='exam_course')
    order = models.CharField(max_length=1, choices=ORDER_CHOICES)
    points = models.PositiveIntegerField(
        default=0,
        validators=[
            MinValueValidator(1, message="Баллы должны быть не меньше 1."),
            MaxValueValidator(100, message="Баллы должны быть не больше 100."),
        ]
    )
    created = models.DateTimeField(auto_now_add=True)
