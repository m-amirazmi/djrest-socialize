from posts.models import Post
from posts.serializers import PostSerializer
from rest_framework import generics, permissions


class PostList(generics.ListCreateAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def post(self, request, *args, **kwargs):
        self.permissions_classes = [permissions.IsAuthenticated]
        return self.create(request, *args, **kwargs)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# self.context['request'].user
