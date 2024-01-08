from django.urls import path, include
from rest_framework import routers

from course import views

router = routers.DefaultRouter()
router.register(r'module', views.ModuleView, basename='module')
router.register(r'content', views.ContentView, basename='content')
router.register(r'task', views.TaskView, basename='task')
router.register(r'solution', views.SolutionView, basename='solution')
router.register(r'schedule', views.ScheduleView, basename='schedule')
router.register(r'attendance', views.AttendanceView, basename='attendance')
router.register(r'grade', views.GradeView, basename='score')
router.register('', views.CourseView, basename='course')

urlpatterns = [
    path('image-upload/', views.ImageUploadView.as_view(), name='image-upload'),
    path('', include(router.urls)),
]

