from rest_framework import serializers

from .models import Course, Module, Content, Task, Solution, Schedule


class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = '__all__'


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



# class ExamSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = Exam
#         fields = '__all__'
