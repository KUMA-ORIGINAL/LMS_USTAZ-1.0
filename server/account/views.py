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
    ProjectStudentSerializer, ListAttendanceSerializer


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
                student_courses = Course.objects.filter(students=user).values_list('id', flat=True)
                data["student_courses"] = student_courses
            case 'mentor':
                mentor_courses = Course.objects.filter(mentor=user).values_list('id', flat=True)
                data['mentor_courses'] = mentor_courses
            case 'assistant':
                assistant_courses = Course.objects.filter(assistant=user).values_list('id', flat=True)
                data["assistant_courses"] = assistant_courses
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

    def list(self, request, *args, **kwargs):
        course_id = request.query_params.get('course_id')
        try:
            schedules = Schedule.objects.filter(course_id=course_id)
            students = Course.objects.get(pk=course_id).students.all()
            attendance = Attendance.objects.filter(schedule__in=schedules, user__in=students)
            attendance_mapping = {(a.schedule_id, a.user_id): True for a in attendance}
            print(attendance_mapping)

            students_attendance = []
            for student in students:
                student_attendance = {
                    'id': student.pk,
                    'name': f'{student.first_name} {student.last_name}',
                    'visits': []
                }
                for schedule in schedules:
                    date = schedule.date.strftime('%d.%m')
                    student_attendance['visits'].append({
                        'date': date,
                        'status': attendance_mapping.get((schedule.pk, student.pk), False)
                    })
                students_attendance.append(student_attendance)
            return Response(students_attendance)
        except Course.DoesNotExist:
            return Response({'error': 'Course not found'}, status=status.HTTP_404_NOT_FOUND)


class ProjectStudentView(viewsets.ModelViewSet):
    serializer_class = ProjectStudentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_id = self.request.query_params.get('user_id')

        queryset = ProjectStudent.objects.all()
        if user_id is not None:
            queryset = queryset.filter(user_id=user_id)
        return queryset
