from rest_framework import viewsets

from account.permissions import IsAdminOrMentorOrReadPermission
from .models import Course, Module, Content, Exam
from .serializers import CourseSerializer, ModuleSerializer, ContentSerializer


class CourseView(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]


class ModuleView(viewsets.ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]


class ContentView(viewsets.ModelViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]


class ExamView(viewsets.ModelViewSet):
    queryset = Exam.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]
