from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'role', 'position', 'patronymic', 'birth_date', 'age', 'phone_number', 'profile_picture']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        user = self.context['request'].user
        if user.role == 'student':
            data.pop('position')
        return data


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Добавьте необходимые дополнительные поля в токен, если это необходимо
        token['id'] = user.id
        token['email'] = user.email
        return token