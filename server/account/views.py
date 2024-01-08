from django_filters.rest_framework import DjangoFilterBackend
from drf_spectacular.utils import extend_schema_view, extend_schema
from rest_framework import viewsets, status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from course.models import Course
from .filters import ProgressStudentFilter
from .models import User, ProjectStudent, ProgressStudent
from .permissions import IsAdminOrMentorOrReadPermission
from .serializers import UserSerializer, UserLoginSerializer, \
    ProjectStudentSerializer, ProgressStudentSerializer


@extend_schema(tags=['Auth'])
@extend_schema_view(
    post=extend_schema(
        summary='Логин'
    )
)
class UserLoginAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        serializer = UserSerializer(user, context={'request': request})
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


@extend_schema(tags=['Auth'])
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


@extend_schema(tags=['User'])
class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('role',)


@extend_schema(tags=['Progress students'])
class ProgressStudentView(viewsets.ModelViewSet):
    queryset = ProgressStudent.objects.all()
    serializer_class = ProgressStudentSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ProgressStudentFilter

    # def get_queryset(self):
    #     course_id = self.request.query_params.get('course_id')
    #     min_points = self.request.query_params.get('min_points')
    #     max_points = self.request.query_params.get('max_points')
    #
    #     queryset = ProfileStudent.objects.all()
    #     if course_id is not None:
    #         queryset = queryset.filter(course_id=course_id)
    #     if min_points is not None:
    #         queryset = queryset.filter(points__gte=min_points)
    #     if max_points is not None:
    #         queryset = queryset.filter(points__lte=max_points)
    #     queryset = queryset.annotate(rank=Window(expression=Rank(), order_by=F('points').desc()))
    #
    #     return queryset


@extend_schema(tags=['Project Students'])
@extend_schema_view(
    create=extend_schema(
        summary='Создание проекта для студента'
    ),
    list=extend_schema(
        summary='получение проектов студента'
    ),
    update=extend_schema(
        summary='Изменение существующего проекта'
    ),
    partial_update=extend_schema(
        summary='частичное изменение существующего проекта'
    ),
    retrieve=extend_schema(
        summary='Детальная информация о проекте'
    ),
    destroy=extend_schema(
        summary='Удаление проекта'
    )

)
class ProjectStudentView(viewsets.ModelViewSet):
    queryset = ProjectStudent.objects.all()
    serializer_class = ProjectStudentSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('user_id', 'course_id')
