from django.db.models import Window, F
from django.db.models.functions import Rank
from rest_framework import viewsets

from .models import User, ProfileStudent
from .permissions import IsAdminOrMentorPermission
from .serializers import UserSerializer, ProfileStudentSerializer


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminOrMentorPermission]

    def get_queryset(self):
        queryset = User.objects.all()
        role = self.request.query_params.get('role')
        if role is not None:
            queryset = queryset.filter(role=role)
        return queryset


class ProfileStudentView(viewsets.ModelViewSet):
    queryset = ProfileStudent.objects.all()
    serializer_class = ProfileStudentSerializer
    permission_classes = [IsAdminOrMentorPermission]

    def get_queryset(self):
        course_id = self.request.query_params.get('course_id')
        min_points = self.request.query_params.get('min_points')
        max_points = self.request.query_params.get('max_points')

        queryset = ProfileStudent.objects.all()

        if course_id is not None:
            queryset = queryset.filter(course_id=course_id)
        if min_points is not None:
            queryset = queryset.filter(points__gte=min_points)
        if max_points is not None:
            queryset = queryset.filter(points__lte=max_points)

        queryset = queryset.annotate(rank=Window(expression=Rank(), order_by=F('points').desc()))

        return queryset
