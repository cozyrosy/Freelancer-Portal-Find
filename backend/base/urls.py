from django.urls import path
from . import views



urlpatterns = [
    path('clientlist/',views.ViewClientList.as_view(),name='client-list'),
    path('freelancerlist/', views.ViewFreelancerList.as_view(), name='view-freelancer-list'),

    #ClientSideURLs
    path('userProfile/', views.UserProfile.as_view(), name='user-profile'),
    path('viewFreelancer/', views.ViewFreelancers.as_view(), name='freelancer-view'),
]