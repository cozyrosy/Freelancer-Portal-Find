from django.db import models
from base.models import *

# Create your models here.
class Skills(models.Model):
    user     = models.ForeignKey(Account, on_delete = models.CASCADE, null=True)
    skill    = models.CharField(max_length=20)