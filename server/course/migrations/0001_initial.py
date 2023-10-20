# Generated by Django 4.2.5 on 2023-09-23 20:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('duration', models.DurationField()),
                ('is_completed', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('assistant', models.ForeignKey(blank=True, limit_choices_to={'role': 'mentor'}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='courses_assisting', to=settings.AUTH_USER_MODEL)),
                ('mentor', models.ForeignKey(limit_choices_to={'role': 'mentor'}, on_delete=django.db.models.deletion.CASCADE, related_name='courses_mentor', to=settings.AUTH_USER_MODEL)),
                ('students', models.ManyToManyField(limit_choices_to={'role': 'student'}, related_name='courses_enrolled', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created'],
            },
        ),
        migrations.CreateModel(
            name='Module',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='modules', to='course.course')),
            ],
        ),
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('html_code', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contents', to='course.module')),
            ],
        ),
    ]