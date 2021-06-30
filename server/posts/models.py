from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.TextField(blank=True)
    image = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    timestamp_created = models.DateTimeField(auto_now_add=True)
    timestamp_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.post
