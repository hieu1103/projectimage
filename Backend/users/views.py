from django.contrib.auth import authenticate
from django.contrib.auth.models import AnonymousUser
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import UserBase
from .serializers import RegistrationSerializer, UserSerializer, UserLoginSerializer,LogoutSerializer, changePasswordSerializer
from .token import account_activation_token
from users import serializers


# Create your views here.
class RegisterView(APIView):
    def post(self, request):
        email =  request.data['email'].lower()
        exist = UserBase.objects.filter(email= email)
        if (exist) : 
            return Response({'msg': 'Your email already exist, please try another' , 'status' :'404'},
                             status=status.HTTP_200_OK)
        user_name =  request.data['user_name']
        exist = UserBase.objects.filter(user_name=user_name)
        if (exist) : 
            return Response({'msg': 'Your user name already exist, please try another   ' , 'status' : '404'},
                             status=status.HTTP_200_OK)
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            account = serializer.save()
            # data['response'] = "Sucessfully register new user"
            # data['email'] = account.email
            # data['user_name'] = account.user_name

            # current_site = get_current_site(request)
            # subject = 'Active your account'
            # message = {
            #     'Account': account,
            #     'domain': current_site.domain,
            #     'uidb64': urlsafe_base64_encode(force_bytes(account.pk)),
            #     'token': account_activation_token.make_token(account)}

            # url = f'http://{current_site.domain}/api/v1/user/activate/{message["uidb64"]}/{message["token"]}/'
            # account.email_user(subject=subject, message=url)
            return Response({ 
                             'msg': 'Register successfull !!, press Continue to login',
                             'status':'200'}, status = status.HTTP_200_OK )
        else:
            return Response({"err": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        return Response(data)

    # def get(self, request, uidb64, token):
    #     try:
    #         uid = force_text(urlsafe_base64_decode(uidb64))
    #         user = UserBase.objects.get(pk=uid)
    #     except(Exception):
    #         pass
    #     if user is not None and account_activation_token.check_token(user, token):
    #         user.is_active = True
    #         user.save()
    #         token = Token.objects.create(user=user)
    #         return Response({'message': 'Your account has been active'})
    #     else:
    #         return Response({'message': 'Your account has not active'})


class UserView(APIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):

        user = request.user
        userSerializer = UserSerializer(user)
        return Response({"User": userSerializer.data}, status=status.HTTP_200_OK)

    def put(self, request):
        serializer = changePasswordSerializer(data=request.data)
        if (serializer.is_valid()):
            user = request.user
            if not (user.check_password(serializer.validated_data['old_password'])):
                return Response({"err": "Invalid password !! , please try again"},
                                status=status.HTTP_400_BAD_REQUEST)
            if (serializer.validated_data['new_password'] != serializer.validated_data['new_password2']):
                return Response({"err": "New password is not match , please try again"},
                                status=status.HTTP_400_BAD_REQUEST)
            user.set_password(serializer.validated_data["new_password"])
            user.save()
            return Response({"success": "Update password success"}, status=status.HTTP_200_OK)
        else:
            return Response({"err": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        if (serializer.is_valid()):
            response = serializer.login(request)
            return response
        else:
            return Response({"msg": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView): 
    serializer_class= LogoutSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer= self.serializer_class(data= request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()

        return Response(status= status.HTTP_204_NO_CONTENT)


class ChangePasswordView(APIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)
    def post(self, request): 
        user= request.user
        data = request.data
        serializer =  changePasswordSerializer(data= data)
        if (serializer.is_valid()):
            response = serializer.changePassword(request)
            return response
        else : 
            return Response({"msg":serializer.errors}, status=status.HTTP_200_OK)
