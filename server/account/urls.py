from django.urls import path, include
from rest_framework import routers

<<<<<<< HEAD
from account.views import UserView, ProfileStudentView, UserLoginAPIView, UserLogoutAPIView
=======
from account.views import UserView, ProfileStudentView
>>>>>>> 5e0f25ba9036106475ee7bd0a0af3044111cf72b

router = routers.DefaultRouter()
router.register(r'profile-student', ProfileStudentView, basename='profile-student')
router.register('', UserView, basename='user')

urlpatterns = [
<<<<<<< HEAD
    path("login/", UserLoginAPIView.as_view(), name="login-user"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("logout/", UserLogoutAPIView.as_view(), name="logout-user"),
=======
>>>>>>> 5e0f25ba9036106475ee7bd0a0af3044111cf72b
    path('', include(router.urls))
]
