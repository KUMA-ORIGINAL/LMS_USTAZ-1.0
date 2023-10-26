from django.urls import path, include
from rest_framework import routers

from account.views import UserView, ProfileStudentView

router = routers.DefaultRouter()
router.register(r'profile-student', ProfileStudentView, basename='profile-student')
router.register('', UserView, basename='user')

urlpatterns = [
    path('', include(router.urls))
]
