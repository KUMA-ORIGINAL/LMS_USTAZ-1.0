from django.db.models import Window, F
from django.db.models.functions import Rank
from rest_framework import viewsets, status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from course.models import Course, Schedule
from course.serializers import CourseSerializer
from .models import User, ProfileStudent, Attendance, ProjectStudent
from .permissions import IsAdminOrMentorOrReadPermission
from .serializers import UserSerializer, ProfileStudentSerializer, UserLoginSerializer, AttendanceSerializer, \
    ProjectStudentSerializer


class UserLoginAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        serializer = UserSerializer(user)
        token = RefreshToken.for_user(user)
        data = serializer.data
        match data['role']:
            case 'student':
                student_courses = Course.objects.filter(students=user)
                student_course_serializer = CourseSerializer(student_courses, many=True)
                data["student_courses"] = student_course_serializer.data
            case 'mentor':
                mentor_courses = Course.objects.filter(mentor=user)
                mentor_course_serializer = CourseSerializer(mentor_courses, many=True)
                data['mentor_courses'] = mentor_course_serializer.data
            case 'assistant':
                assistant_courses = Course.objects.filter(assistant=user)
                assistant_course_serializer = CourseSerializer(assistant_courses, many=True)
                data["assistant_courses"] = assistant_course_serializer.data
        data["tokens"] = {"refresh": str(token), "access": str(token.access_token)}
        return Response(data, status=status.HTTP_200_OK)


class UserLogoutAPIView(GenericAPIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        role = self.request.query_params.get('role')

        queryset = User.objects.all()
        if role is not None:
            queryset = queryset.filter(role=role)
        return queryset


class ProfileStudentView(viewsets.ModelViewSet):
    queryset = ProfileStudent.objects.all()
    serializer_class = ProfileStudentSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]

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


class AttendanceView(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]

    def get(self, request, *args, **kwargs):
        schedules = Schedule.objects.all()  # Получаем все расписания
        students_data = []

        for schedule in schedules:
            # Получаем все посещения для данного расписания
            attendances = Attendance.objects.filter(schedule=schedule)
            students_attendance = StudentAttendanceSerializer(attendances, many=True).data

            # Добавляем информацию о студентах и их посещаемости в общий список
            students_data.extend(students_attendance)

        return Response({'students': students_data})


class ProjectStudentView(viewsets.ModelViewSet):
    serializer_class = ProjectStudentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_id = self.request.query_params.get('user_id')

        queryset = ProjectStudent.objects.all()
        if user_id is not None:
            queryset = queryset.filter(user_id=user_id)
        return queryset
