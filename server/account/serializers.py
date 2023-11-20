from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import User, ProfileStudent, Attendance


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
        fields = ['id', 'email', 'role', 'first_name', 'last_name', 'position', 'birth_date', 'phone_number',
                  'profile_photo']

    def to_representation(self, instance):
        data = super(UserSerializer, self).to_representation(instance)
        if instance.role == 'student':
            data.pop('position')
        return data


class ProfileStudentSerializer(serializers.ModelSerializer):
    rank = serializers.IntegerField()

    class Meta:
        model = ProfileStudent
        fields = ('id', 'points', 'updated', 'created', 'student', 'course', 'awards', 'rank')


class AttendanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Attendance
        fields = '__all__'
