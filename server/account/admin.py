from django.contrib import admin

from .models import User, ProfileStudent, Award


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'first_name', 'last_name', 'role')
    list_filter = ('role',)


@admin.register(Award)
class AwardAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'description']


@admin.register(ProfileStudent)
class ProfileStudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'student', 'course', 'points']
