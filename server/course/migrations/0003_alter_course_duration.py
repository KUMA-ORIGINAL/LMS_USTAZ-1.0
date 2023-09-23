# Generated by Django 4.2.5 on 2023-09-23 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0002_alter_course_duration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='duration',
            field=models.PositiveIntegerField(help_text='Длительность курса в месяцах', verbose_name='Длительность (месяцы)'),
        ),
    ]
