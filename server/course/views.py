from django_filters.rest_framework import DjangoFilterBackend
from drf_spectacular.utils import extend_schema, extend_schema_view, OpenApiExample, OpenApiParameter
from rest_framework import viewsets, generics, status, mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from account.permissions import IsAdminOrMentorOrReadPermission
from .models import Course, Module, Content, Task, Solution, Schedule, ImageUpload, Attendance, Grade
from .serializers import CourseSerializer, ModuleSerializer, ContentSerializer, TaskSerializer, SolutionSerializer, \
    ScheduleSerializer, ImageUploadSerializer, AttendanceSerializer, ListGradeSerializer


@extend_schema(tags=['Courses'])
@extend_schema_view(
    create=extend_schema(
        summary='Создание нового курса'
    ),
    list=extend_schema(
        summary='Получение курсов'
    ),
    update=extend_schema(
        summary='Обновление существующего курса'
    ),
    partial_update=extend_schema(
        summary='Частичное обновление существующего курса'
    ),
    retrieve=extend_schema(
        summary='Детальная информация о курсе'
    ),
    destroy=extend_schema(
        summary='Удаление курса'
    )
)
class CourseView(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('subject_id',)


@extend_schema(tags=['Modules'])
@extend_schema_view(
    create=extend_schema(
        summary='Создание нового модуля для курса'
    ),
    list=extend_schema(
        summary='Получение модуля для курса'
    ),
    update=extend_schema(
        summary='Обновление существующего модуля'
    ),
    partial_update=extend_schema(
        summary='Частичное обновление существующего модуля'
    ),
    retrieve=extend_schema(
        summary='Детальная информация о модуле'
    ),
    destroy=extend_schema(
        summary='Удаление модуля'
    )
)
class ModuleView(viewsets.ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('course_id',)


@extend_schema(tags=['Contents'])
@extend_schema_view(
    create=extend_schema(
        summary='Создание нового контента для модуля'
    ),
    list=extend_schema(
        summary='Получение контентов для модуля'
    ),
    update=extend_schema(
        summary='Обновление существующего контента'
    ),
    partial_update=extend_schema(
        summary='Частичное обновление существующего контента'
    ),
    retrieve=extend_schema(
        summary='Детальная информация о контенте'
    ),
    destroy=extend_schema(
        summary='Удаление контента'
    )
)
class ContentView(viewsets.ModelViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('module_id',)


@extend_schema(tags=['Tasks'])
@extend_schema_view(
    create=extend_schema(
        summary='Создание задания для модуля'
    ),
    list=extend_schema(
        summary='Получение задания для модуля'
    ),
    update=extend_schema(
        summary='Обновление существующего задания'
    ),
    partial_update=extend_schema(
        summary='Частичное обновление существующего задания'
    ),
    retrieve=extend_schema(
        summary='Детальная информация о задании'
    ),
    destroy=extend_schema(
        summary='Удаление задания'
    )
)
class TaskView(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('module_id',)


@extend_schema(tags=['Solutions'],
               description='Фильтрация по заданиям и по пользователям')
@extend_schema_view(
    create=extend_schema(
        summary='Создание решения для задания'
    ),
    list=extend_schema(
        summary='Получение решения для задания'
    ),
    update=extend_schema(
        summary='Обновление существующего решения'
    ),
    partial_update=extend_schema(
        summary='Частичное обновление существующего решения'
    ),
    retrieve=extend_schema(
        summary='Детальная информация о решении'
    ),
    destroy=extend_schema(
        summary='Удаление решения'
    )
)
class SolutionView(viewsets.ModelViewSet):
    queryset = Solution.objects.all()
    serializer_class = SolutionSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('task_id', 'user_id')


@extend_schema(tags=['Schedules'],
               description='Фильтрация по курсу')
@extend_schema_view(
    create=extend_schema(
        summary='Создание расписания для курса'
    ),
    list=extend_schema(
        summary='Получение расписания для курса'
    ),
    update=extend_schema(
        summary='Обновление существующего расписания'
    ),
    partial_update=extend_schema(
        summary='Частичное обновление существующего расписания'
    ),
    retrieve=extend_schema(
        summary='Детальная информация о расписании'
    ),
    destroy=extend_schema(
        summary='Удаление расписания'
    )
)
class ScheduleView(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [IsAdminOrMentorOrReadPermission]
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('course_id',)


@extend_schema(tags=['Grades'],
               description='Оценки студентов по курсу')
@extend_schema_view(
    list=extend_schema(
        summary='Получение оценок для курса',
        responses={
            status.HTTP_200_OK: ListGradeSerializer,
        },
        examples=[
            OpenApiExample(
                "Grade example",
                description="Test example for the grade",
                value={
                    'tasks': ['Тема 1', 'Тема 2', 'Тема 3'],
                    'students_grade': [
                        {'id': 1,
                         'name': 'Иванов Иван',
                         'grade': [
                            {'task': 'Тема 1', 'grade': 3},
                            {'task': 'Тема 2', 'grade': 7},
                            {'task': 'Тема 3', 'grade': 4},
                         ]}
                    ]
                },
                status_codes=[str(status.HTTP_200_OK)],
            ),
        ],
        parameters=[
            OpenApiParameter(
                name='course_id',
                location=OpenApiParameter.QUERY,
                description='Фильтрация по курсу',
                required=True,
                type=int
            ),
        ]
    )
)
class GradeView(viewsets.GenericViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        # tasks = [],
        # students_score: [
        #     {id: 1,
        #     name: 'Иванов Иван',
        #     scores: [
        #         {lesson: 'Тема 1', score: 3},
        #         {lesson: 'Тема 2', score: 7},
        #         {lesson: 'Тема 3', score: 4},
        #     ],
        # }]
        course_id = self.request.query_params.get('course_id')
        try:
            students = Course.objects.get(pk=course_id).students.all()
            tasks = Task.objects.filter(module__course_id=course_id)
            grades = Grade.objects.filter(course_id=course_id)
            grades_mapping = {(grade.task_id, grade.user_id): grade.grade for grade in grades}
            students_score = []
            for student in students:
                student_pk = student.pk
                student_score = {
                    'id': student_pk,
                    'name': f'{student.first_name} {student.last_name}',
                    'scores': []
                }
                for task in tasks:
                    student_score['scores'].append(
                        {'task': task.title,
                         'grade': grades_mapping.get((task.pk, student_pk))}
                    )
                students_score.append(student_score)
            result = {
                'tasks': tasks.values_list('title', flat=True),
                'students': students_score
            }
            serializer = ListGradeSerializer(result)
            return Response(serializer.data)
        except Course.DoesNotExist:
            return Response({'error': 'Course not found'}, status=status.HTTP_404_NOT_FOUND)


@extend_schema(tags=['Attendances'],
               description='Посещение студентов по курсу')
@extend_schema_view(
    list=extend_schema(
        summary='Получение посещений студентов по курсу',
        examples=[
            OpenApiExample(
                "Attendance example",
                description="Test example for the attendance",
                value={
                    'id': 1,
                    'name': 'Иванов Иван',
                    'visits': [
                        {'date': "02.11", 'status': False},
                        {'date': "04.11", 'status': False},
                        {'date': "06.11", 'status': False},
                    ]
                },
                status_codes=[str(status.HTTP_200_OK)],
            ),
        ],
        parameters=[
            OpenApiParameter(
                name='course_id',
                location=OpenApiParameter.QUERY,
                description='Фильтрация по курсу',
                required=True,
                type=int
            ),
        ]
    ),
    create=extend_schema(
        summary='Создание посещения для студента'
    )
)
class AttendanceView(viewsets.GenericViewSet,
                     mixins.CreateModelMixin):
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


@extend_schema(tags=['Image Upload'])
@extend_schema_view(
    post=extend_schema(
        summary='Загрузка картинки для контента'
    )
)
class ImageUploadView(generics.CreateAPIView):
    serializer_class = ImageUploadSerializer
    queryset = ImageUpload.objects.all()
    permission_classes = [IsAuthenticated]
