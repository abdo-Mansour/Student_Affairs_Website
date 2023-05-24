from django.urls import path
from . import views

urlpatterns = [
    path('index', views.index, name='index'),
    path('home', views.main, name='main'),
    path('edit-student', views.edit, name='edit'),
]
