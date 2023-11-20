from django.urls import path, include
from rest_framework import routers

from .views import CourseView, ModuleView, ContentView, TaskView, SolutionView, ScheduleView

router = routers.DefaultRouter()
router.register(r'module', ModuleView, basename='module')
router.register(r'content', ContentView, basename='content')
router.register(r'task', TaskView, basename='task')
router.register(r'solution', SolutionView, basename='solution')
router.register(r'schedule', ScheduleView, basename='schedule')
# router.register(r'exam', ExamView, basename='exam')
router.register('', CourseView, basename='course')

urlpatterns = [
    path('', include(router.urls))
]
