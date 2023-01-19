from rest_framework import serializers
from . models import *


class AccountSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input':'password'},write_only = True)

    class Meta:
        model = Account
        fields = ['email','company_name','username','phone_number','password','password2', 'is_staff']

        extra_kwargs = {'password':{'write_only':True}}

    def save(self):

        register = Account(
            username        = self.validated_data['username'],
            company_name  = self.validated_data['company_name'],
            email           = self.validated_data['email'],
            phone_number    = self.validated_data['phone_number'],
        )   
        password = self.validated_data['password']
        password2 = self.validated_data['password2'] 

        if password != password2:
            raise serializers.ValidationError({'password':'Password does not match'})
        
        register.set_password(password)
        register.save()
        return register

# Client side serializers
class ClientViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'


class ClientProfileSerializer(serializers.ModelSerializer):
    user = AccountSerializer()
    class Meta:
        model = ClientProfile
        fields = '__all__' 
        # depth = 1


class FreelancerExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelancerExperience
        fields = "__all__"

class FreelancerViewSerializer(serializers.ModelSerializer):
    user = AccountSerializer()
    experience = FreelancerExperienceSerializer()
    class Meta:
        model = FreelancerProfile
        fields = '__all__'    


