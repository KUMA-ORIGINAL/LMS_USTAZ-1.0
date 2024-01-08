from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import User, ProjectStudent, ProgressStudent


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'role', 'first_name', 'last_name', 'position', 'phone_number', 'telegram',
                  'profile_photo']

    def to_representation(self, instance):
        data = super(UserSerializer, self).to_representation(instance)
        if instance.role == 'student':
            data.pop('position')
        return data


class ProgressStudentSerializer(serializers.ModelSerializer):
    rank = serializers.IntegerField()

    class Meta:
        model = ProgressStudent
        fields = ('id', 'user', 'course', 'awards', 'points', 'rank', 'updated', 'created')


class ProjectStudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProjectStudent
        fields = '__all__'
