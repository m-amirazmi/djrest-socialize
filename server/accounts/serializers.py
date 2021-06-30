from rest_framework import serializers
from django.contrib.auth.models import User
from accounts.models import Person


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['owner', 'phone', 'bio', 'gender', 'image_cover', 'image_profile', 'timestamp_created', 'timestamp_updated']
