from rest_framework import viewsets

from account.permissions import IsAdminOrMentorOrReadPermission
from .models import Course, Module, Content, Exam
from .serializers import CourseSerializer, ModuleSerializer, ContentSerializer


class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]

    def get_queryset(self):
        subject_id = self.request.query_params.get('subject_id')

        queryset = Course.objects.all()
        if subject_id is not None:
            queryset = queryset.filter(subject_id=subject_id)

        return queryset


class ModuleView(viewsets.ModelViewSet):
    serializer_class = ModuleSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]

    def get_queryset(self):
        course_id = self.request.query_params.get('course_id')

        queryset = Module.objects.all()
        if course_id is not None:
            queryset = queryset.filter(course_id=course_id)

        return queryset


class ContentView(viewsets.ModelViewSet):
    serializer_class = ContentSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]

    def get_queryset(self):
        module_id = self.request.query_params.get('module_id')

        queryset = Content.objects.all()
        if module_id is not None:
            queryset = queryset.filter(module_id=module_id)

        return queryset


class ExamView(viewsets.ModelViewSet):
    queryset = Exam.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]
