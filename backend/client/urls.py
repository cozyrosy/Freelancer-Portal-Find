from django.urls import path
from . import views


urlpatterns = [
    path('application/', views.ApplicationForm.as_view(), name='application'),
]