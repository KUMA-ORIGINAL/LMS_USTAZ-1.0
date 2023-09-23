from django.contrib import admin

from .models import User, Rating


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'role')
    list_filter = ('role',)


@admin.register(Rating)
class Rating(admin.ModelAdmin):
    list_display = ('student', 'points')
