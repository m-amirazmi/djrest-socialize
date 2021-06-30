from django.urls import path
from posts.views import PostList

urlpatterns = [
    path('', PostList.as_view(), name='posts'),
    # path('<str:pk>/', PostDetail.as_view(), name='post')
]
