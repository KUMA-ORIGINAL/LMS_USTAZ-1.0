from django.contrib import admin

from .models import User, RatingStudent


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'role')
    list_filter = ('role',)


@admin.register(RatingStudent)
class Rating(admin.ModelAdmin):
    list_display = ('student', 'course', 'points')
