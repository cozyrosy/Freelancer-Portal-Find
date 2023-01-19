from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager 
from distutils.command.upload import upload
# Create your models here.


class MyAccountManager(BaseUserManager):
    def create_user(self, first_name, last_name, username, email, password=None):
        if not email:
            raise ValueError('User must have an e-mail address')
        
        if not username:
            raise ValueError('User must have an Username')

        user = self.model(
            email       = self.normalize_email(email),
            username    = username,
            first_name  = first_name,
            last_name   = last_name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    
    def create_superuser(self, first_name, last_name, username, email, password):
        user = self.create_user(
            email      = self.normalize_email(email),
            username   = username,
            password   = password,
            first_name = first_name,
            last_name  = last_name
        )
        user.is_admin   = True
        user.is_active  = True
        user.is_staff   = True
        user.is_superadmin  = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    username        = models.CharField(max_length=50, unique=True)
    email           = models.EmailField(max_length=100, unique=True)
    phone_number    = models.CharField(max_length=50,null=True)
    company_name    = models.CharField(max_length=50, null=True)
    #Required fields

    date_joined     = models.DateTimeField(auto_now_add=True)  
    last_login      = models.DateTimeField(auto_now_add=True)  
    is_admin        = models.BooleanField(default=False)
    is_staff        = models.BooleanField(default=False)
    is_active       = models.BooleanField(default=True)
    is_superadmin   = models.BooleanField(default=False)


    USERNAME_FIELD      = 'username'
    REQUIRED_FIELDS     = ['email', 'phone_number']

    objects = MyAccountManager()


    def _str_(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, add_label):
        return True




class ClientProfile(models.Model):
    user     = models.ForeignKey(Account, on_delete = models.CASCADE, null=True)
    country  = models.CharField(max_length=50)
    state    = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    image    = models.ImageField(upload_to='images', null=True, blank=False)
    summary  = models.CharField(max_length=500, null=True)


class FreelancerExperience(models.Model):
    user                = models.ForeignKey(Account, on_delete = models.CASCADE, null=True)
    job_title           = models.CharField(max_length=50)
    description         = models.CharField(max_length=500)
    years_of_experience = models.IntegerField()

class FreelancerProfile(models.Model):
    user            = models.ForeignKey(Account, on_delete = models.CASCADE, null=True)
    experience      = models.ForeignKey(FreelancerExperience, on_delete = models.CASCADE, null=True)
    country         = models.CharField(max_length=50)
    state           = models.CharField(max_length=50)
    district        = models.CharField(max_length=50)
    job_role        = models.CharField(max_length=60)
    image           = models.ImageField(upload_to='images', null=True, blank=False)