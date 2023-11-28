from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import User, ProfileStudent, Attendance, ProjectStudent


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


class ProfileStudentSerializer(serializers.ModelSerializer):
    rank = serializers.IntegerField()

    class Meta:
        model = ProfileStudent
        fields = ('id', 'user', 'course', 'awards', 'points', 'rank', 'updated', 'created')


class AttendanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Attendance
        fields = '__all__'


class ListAttendanceSerializer(serializers.ModelSerializer):
    date = serializers.SerializerMethodField()

    class Meta:
        model = Attendance
        fields = ('date', 'is_present')

    def get_date(self, obj):
        schedule = obj.schedule
        if schedule:
            return schedule.date.strftime('%d.%m')
        return ''


class ProjectStudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProjectStudent
        fields = '__all__'
