# Generated by Django 4.2.5 on 2023-09-23 20:28

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_alter_user_managers_remove_user_patronymic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='position',
            field=models.CharField(blank=True, choices=[('backend', 'backend'), ('frontend', 'frontend')], max_length=50, null=True),
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('points', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1, message='Баллы должны быть не меньше 1.'), django.core.validators.MaxValueValidator(25, message='Баллы должны быть не больше 25.')])),
                ('updated', models.DateTimeField(auto_now=True)),
                ('student', models.ForeignKey(limit_choices_to={'role': 'student'}, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]