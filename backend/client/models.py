from django.db import models
from freelancer.models import *
# Create your models here.


APPLICATION_STATUS  =   (
    ("Received", "Received"),
    ("Approved", "Approved"),
    ("Declined", "Declined"),
    ("Pending", "Pending"),
    ("Ongoing", "Ongoing"),
    ("Completed", "Completed"),
)

class Application(models.Model):
    user                = models.ForeignKey(Account, on_delete = models.CASCADE, null=True)
    project_name        = models.CharField(max_length=30)
    project_type        = models.ForeignKey(Skills, on_delete = models.CASCADE, null=True)
    project_description = models.CharField(max_length=500)
    date_of_completion  = models.DateField()
    status              = models.CharField(max_length=20, choices=APPLICATION_STATUS, default='Received')
   