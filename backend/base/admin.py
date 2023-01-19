from django.contrib import admin
from .models import *
# Register your models here.


admin.site.register(Account)
admin.site.register(ClientProfile)
admin.site.register(FreelancerProfile)
admin.site.register(FreelancerExperience)

