from django.urls import path
from accounts.views import AccountList, UserList

urlpatterns = [
    path('', AccountList.as_view(), name='accounts'),
    path('users/', UserList.as_view())
    # path('<str:pk>/', PostDetail.as_view(), name='post')
]
