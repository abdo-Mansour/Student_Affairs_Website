from django.urls import path
from . import views

urlpatterns = [
    path('testApp/', views.testApp, name='testApp'),
]