from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
from . models import *
from .serializer import *
# Create your views here.


class ViewClientList(APIView):
    def get(self,request):
        clientlist = Account.objects.filter(is_staff = False)
        clientlistserializer = ClientViewSerializer(clientlist, many=True)
        return Response(clientlistserializer.data, status=status.HTTP_200_OK)


class ViewFreelancerList(APIView):
    def get(self,request):
        freelancerlist = Account.objects.filter(is_staff = True)
        freelancerlistserializer = ClientViewSerializer(freelancerlist, many=True)
        return Response(freelancerlistserializer.data, status=status.HTTP_200_OK)

# Client side views

class UserProfile(APIView):
    def get(self,request):
        user = request.user
        profile_info = ClientProfile.objects.all()
        profile_info_serializer = ClientProfileSerializer(profile_info, many=True)
        return Response(profile_info_serializer.data, status=status.HTTP_200_OK )

class ViewFreelancers(APIView):
    def get(self, request):
        freelancers_profile_info = FreelancerProfile.objects.all()
        freelancers_profile_info_serializer = FreelancerViewSerializer(freelancers_profile_info, many=True)
        return Response(freelancers_profile_info_serializer.data, status=status.HTTP_200_OK)
