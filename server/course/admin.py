from django.contrib import admin

from course.models import Course, Module, Content


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'duration', 'is_completed', 'created')
    list_filter = ('is_completed', 'name')
    search_fields = ('name',)


@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'course', 'created')
    list_filter = ('created', 'course')


@admin.register(Content)
class ContentAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'module')
    list_filter = ('created', 'module')
