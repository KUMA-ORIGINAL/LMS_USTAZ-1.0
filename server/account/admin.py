from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.safestring import mark_safe

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import User, ProgressStudent, Award, ProjectStudent


class ProfileInline(admin.StackedInline):
    model = ProgressStudent
    can_delete = False
    verbose_name_plural = "Profile"


@admin.register(User)
class UserAdmin(UserAdmin):
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (
            "Permissions",
            {
                "fields": (
                    "is_staff",
                    "is_active",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        ("Dates", {"fields": ("last_login", "date_joined")}),
        ('required', {
                 'fields': ('phone_number', 'telegram', 'first_name', 'last_name', 'role', 'position',
                            'profile_photo', 'get_photo')})
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "password1",
                    "password2",
                ),
            },
        ),
    )
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm

    model = User

    ordering = ["email"]

    inlines = (ProfileInline,)

    list_display = ('id', 'email', 'first_name', 'last_name', 'role', 'telegram')
    list_display_links = ('id', 'email')
    list_filter = ('role',)
    readonly_fields = ('get_photo',)

    def get_photo(self, obj):
        return mark_safe(f'<img src={obj.profile_photo.url} width="100" height="110"')

    get_photo.short_description = "profile_photo"


@admin.register(Award)
class AwardAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')
    list_display_links = ('id', 'name')


@admin.register(ProgressStudent)
class ProfileStudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'course', 'points']
    list_display_links = ['id', 'user']


@admin.register(ProjectStudent)
class ProjectStudentAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'type_of_project', 'user', 'created')
    list_filter = ('type_of_project', 'user')
