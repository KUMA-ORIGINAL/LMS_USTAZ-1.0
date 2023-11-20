from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from account.permissions import IsAdminOrMentorOrReadPermission
from .models import Course, Module, Content, Task, Solution, Schedule
from .serializers import CourseSerializer, ModuleSerializer, ContentSerializer, TaskSerializer, SolutionSerializer, \
    ScheduleSerializer, ScoreSerializer


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


class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]

    def get_queryset(self):
        module_id = self.request.query_params.get('module_id')

        queryset = Task.objects.all()
        if module_id is not None:
            queryset = queryset.filter(module_id=module_id)

        return queryset


class SolutionView(viewsets.ModelViewSet):
    serializer_class = SolutionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        task_id = self.request.query_params.get('task_id')

        queryset = Solution.objects.all()
        if task_id is not None:
            queryset = queryset.filter(task_id=task_id)

        return queryset


class ScoreView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        tasks = Task.objects.value_list('title', flat=True)
        students = [
            {"id": 1, "name": "Студент 1", "scores": [90, 85, 78, 92, 88]},
            {"id": 2, "name": "Студент 2", "scores": [88, 76, 82, 90, 85]}
        ]

        data = {
            "tasks": tasks,
            "students": students
        }

        serializer = ScoreSerializer(data)
        return Response(serializer.data)


class ScheduleView(viewsets.ModelViewSet):
    serializer_class = ScheduleSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]

    def get_queryset(self):
        course_id = self.request.query_params.get('course_id')

        queryset = Schedule.objects.all()
        if course_id is not None:
            queryset = queryset.filter(course_id=course_id)

        return queryset


# class ExamView(viewsets.ModelViewSet):
#     queryset = Exam.objects.all()
#     serializer_class = ContentSerializer
#     permission_classes = [IsAdminOrMentorOrReadPermission]
