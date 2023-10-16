from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User, RatingStudent


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['id'] = user.id
        token['email'] = user.email
        return token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'role', 'position', 'birth_date', 'age', 'phone_number', 'profile_picture']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        user = self.context['request'].user
        if user.role == 'student':
            data.pop('position')
        return data


class RatingStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RatingStudent
        fields = '__all__'
