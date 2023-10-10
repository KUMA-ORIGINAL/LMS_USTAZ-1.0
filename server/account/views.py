from rest_framework import viewsets

from account.models import User, RatingStudent
from account.permissions import IsAdminOrMentorPermission
from account.serializers import UserSerializer, RatingStudentSerializer


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


class RatingStudentView(viewsets.ModelViewSet):
    queryset = RatingStudent.objects.all()
    serializer_class = RatingStudentSerializer
    permission_classes = [IsAdminOrMentorPermission]

    def get_queryset(self):
        course_id = self.kwargs.get('course_id')
        min_points = self.request.query_params.get('min_points')
        max_points = self.request.query_params.get('max_points')

        queryset = RatingStudent.filter(course_id=course_id)

        if min_points is not None:
            queryset = queryset.filter(points__gte=min_points)
        if max_points is not None:
            queryset = queryset.filter(points__lte=max_points)
