from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from ..serializer import AccountSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['is_admin'] = user.is_admin
        token['is_staff'] = user.is_staff

        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/token',
        'api/token/refresh',
    ]

    return Response(routes)


class Register(APIView):

    def post(self,request):
        account = AccountSerializer(data=request.data)
        print("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
        data = {}
        if account.is_valid():
            print("Ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
            account.save()
            
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(account.errors)

            print("[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]][[]]]]]]]]]]]]]]][][][[][[][][][][][][][][]")
            data = account.errors
            return Response(status=status.HTTP_400_BAD_REQUEST) 