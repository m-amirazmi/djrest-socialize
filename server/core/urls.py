from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/auth/', include('rest_framework.urls')),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/register/', include('dj_rest_auth.registration.urls')),
    path('api/posts/', include('posts.urls')),
    path('api/accounts/', include('accounts.urls'))
]
