from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView

from account.views import UserView, ProfileStudentView, UserLoginAPIView

router = routers.DefaultRouter()
router.register(r'profile-student', ProfileStudentView, basename='profile-student')
router.register('', UserView, basename='user')

urlpatterns = [
    path("login/", UserLoginAPIView.as_view(), name="login-user"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path('', include(router.urls))
]
