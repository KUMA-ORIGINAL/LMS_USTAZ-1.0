from datetime import timedelta

from django.db.models.signals import post_save
from django.dispatch import receiver

from course.models import Course, Schedule, Solution, Attendance, Grade


@receiver(post_save, sender=Course)
def create_schedule(sender, instance, created, **kwargs):
    if created:
        start_date = instance.start_month
        end_date = instance.end_month
        days_of_week = list(map(int, instance.days_of_week.split(',')))
        # Список выбранных дней недели (например, [1, 3, 5] для пн, ср, пт)

        while start_date <= end_date:
            if start_date.weekday() in days_of_week:
                # Создайте событие расписания для выбранного дня
                Schedule.objects.create(
                    title=instance.title,
                    description=instance.description,
                    date=start_date,
                    start_time=instance.start_time,
                    end_time=instance.end_time,
                    course=instance,
                )
            start_date += timedelta(days=1)


@receiver(post_save, sender=Solution)
def recalculate_student_points(sender, instance, **kwargs):
    if instance.is_accepted:
        user = instance.user
        task = instance.task
        grade = instance.grade
        course = user.progressstudent.course
        user.progressstudent.calculate_points()
        if not Grade.objects.filter(user=user, task=task).exists():
            Grade.objects.create(
                user=user,
                course=course,
                task=task,
                grade=grade
            )
