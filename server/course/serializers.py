from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Course, Module, Content, Task, Solution, Schedule, ImageUpload


class MentorSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('id', 'first_name', 'last_name')


class CourseSerializer(serializers.ModelSerializer):
    mentor = MentorSerializer()
    assistant = MentorSerializer()

    class Meta:
        model = Course
        fields = ('id', 'title', 'description', 'photo', 'start_month', 'end_month', 'days_of_week',
                  'start_time', 'end_time', 'mentor', 'assistant', 'students', 'is_completed', 'created')


class ModuleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Module
        fields = '__all__'


class ContentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Content
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class SolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solution
        fields = '__all__'


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'


class ScoreSerializer(serializers.Serializer):
    tasks = serializers.ListField(child=serializers.CharField())
    students = serializers.ListField(child=serializers.DictField())


class ImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageUpload
        fields = ('id', 'image')
