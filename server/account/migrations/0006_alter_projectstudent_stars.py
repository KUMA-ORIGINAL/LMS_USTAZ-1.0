# Generated by Django 4.2.5 on 2023-12-02 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_alter_projectstudent_stars_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectstudent',
            name='stars',
            field=models.IntegerField(blank=True, choices=[(1, '1 звезд'), (2, '2 звезд'), (3, '3 звезд'), (4, '4 звезд'), (5, '5 звезд')], null=True),
        ),
    ]
