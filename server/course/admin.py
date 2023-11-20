from django.contrib import admin
from django.utils.safestring import mark_safe

from course.models import Course, Module, Content, Subject, Task, Solution, Schedule


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')
    list_display_links = ('id', 'title')


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'start_month', 'end_month', 'is_completed', 'created')
    list_display_links = ('id', 'title')
    list_filter = ('is_completed', 'title')
    search_fields = ('title',)
    readonly_fields = ('get_photo',)

    def get_photo(self, obj):
        return mark_safe(f'<img src={obj.photo.url} width="100" height="110"')

    get_photo.short_description = "course_photo"


@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'course', 'order', 'created')
    list_display_links = ('id', 'title')
    list_filter = ('created', 'course')


@admin.register(Content)
class ContentAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'module', 'order')
    list_display_links = ('id', 'title')
    list_filter = ('created', 'module')


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'module', 'due_date', 'max_score')
    list_filter = ('module',)
    search_fields = ('title', 'module__title')


@admin.register(Solution)
class SolutionAdmin(admin.ModelAdmin):
    list_display = ('task', 'student', 'order', 'created', 'is_accepted', 'score')
    list_filter = ('task__module', 'student')
    search_fields = ('task__title', 'student__username')


@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'start_time', 'end_time', 'course')
    list_filter = ('course', 'date')
    search_fields = ('title', 'course__title')
    date_hierarchy = 'date'
    ordering = ('date', 'start_time')
