from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
from . models import *
from .serializers import *

# Create your views here.

class ApplicationForm(APIView):
    def post(self,request):
        # user = request.user
        application = ApplicationSerializer(data= request.data)
        data = {}
        
        if application.is_valid():
            application.save()
            data['response']='received'
        else:
            print(application.errors)
            data=application.errors
        return Response(data)