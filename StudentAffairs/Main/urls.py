from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home', views.home, name='home'),
    path('edit-student', views.edit, name='edit'),
    path('add-student', views.addStudent, name='add'),
    path('save', views.formSubmission, name='save'),
]
