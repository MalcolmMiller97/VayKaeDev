from django.db import models
from django.contrib.auth.models import AbstractBaseUser


class Reviews(models.Model):
    test = models.CharField(max_length=255)

    class Meta:
        db_table = "reviews"