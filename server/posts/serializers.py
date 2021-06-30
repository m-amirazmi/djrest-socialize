from accounts.serializers import UserSerializer
from rest_framework import serializers
from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['owner', 'post', 'image', 'id', 'timestamp_created', 'timestamp_updated']
