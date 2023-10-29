from django.contrib import admin
from django.utils.safestring import mark_safe

from course.models import Course, Module, Content, Subject


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'duration', 'is_completed', 'created')
    list_display_links = ('id', 'name')
    list_filter = ('is_completed', 'name')
    search_fields = ('name',)
    readonly_fields = ('get_photo',)

    def get_photo(self, obj):
        return mark_safe(f'<img src={obj.photo.url} width="100" height="110"')

    get_photo.short_description = "course_photo"


@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'course', 'order', 'created')
    list_display_links = ('id', 'name')
    list_filter = ('created', 'course')


@admin.register(Content)
class ContentAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'module', 'order')
    list_display_links = ('id', 'name')
    list_filter = ('created', 'module')
