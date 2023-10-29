from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import User, ProfileStudent, Award


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'first_name', 'last_name', 'role')
    list_display_links = ('id', 'email')
    list_filter = ('role',)
    fieldsets = (
        ('None', {
            'fields': ('last_login', 'is_superuser', 'is_staff', 'is_active', 'date_joined')
        }),
        ('required', {
            'fields': ('email', 'password', 'phone_number', 'first_name', 'last_name', 'role', 'position',
                       'birth_date', 'age', 'profile_photo', 'get_photo')
        }),
    )
    readonly_fields = ('get_photo',)

    def get_photo(self, obj):
        return mark_safe(f'<img src={obj.profile_photo.url} width="100" height="110"')

    get_photo.short_description = "profile_photo"


@admin.register(Award)
class AwardAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')
    list_display_links = ('id', 'name')


@admin.register(ProfileStudent)
class ProfileStudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'student', 'course', 'points']
    list_display_links = ['id', 'student']
