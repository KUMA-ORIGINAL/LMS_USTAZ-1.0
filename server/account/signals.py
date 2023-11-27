from django.db.models.signals import post_save
from django.dispatch import receiver

from account.models import User, ProfileStudent


@receiver(post_save, sender=User)
def create_profile_student(sender, instance, created, **kwargs):
    if created:
        ProfileStudent.objects.create(user=instance, course=None)
