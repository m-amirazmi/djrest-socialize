# from django.shortcuts import render
from accounts.serializers import PersonSerializer, UserSerializer
from rest_framework import generics, permissions
from accounts.models import Person
from django.contrib.auth.models import User


class AccountList(generics.ListCreateAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class UserList(generics.ListCreateAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer

# class SnippetDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Snippet.objects.all()
#     serializer_class = SnippetSerializer
