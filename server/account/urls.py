from django.urls import path, include
from rest_framework import routers

from account.views import UserView

router = routers.DefaultRouter()
router.register(r'user', UserView, basename='user')

urlpatterns = [
    path('', include(router.urls))
]
