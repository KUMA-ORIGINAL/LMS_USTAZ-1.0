# Generated by Django 4.2.5 on 2024-01-07 16:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0007_rename_profilestudent_progressstudent'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Attendance',
        ),
    ]
