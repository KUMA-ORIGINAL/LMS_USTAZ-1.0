from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView

from .views import UserView, ProgressStudentView, UserLoginAPIView, UserLogoutAPIView, \
    ProjectStudentView

router = routers.DefaultRouter()
router.register(r'profile-student', ProgressStudentView, basename='profile-student')
router.register(r'project-student', ProjectStudentView, basename='project-student')
router.register('', UserView, basename='user')

urlpatterns = [
    path("login/", UserLoginAPIView.as_view(), name="login-user"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("logout/", UserLogoutAPIView.as_view(), name="logout-user"),
    path('', include(router.urls))
]
