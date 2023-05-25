from django.urls import path
from .views import main

urlpatterns = [
    path('', main.index, name='index'),
    path('home', main.home, name='home'),
    path('edit-student', main.edit, name='edit'),
    path('add-student', main.addStudent, name='add'),
    path('save', main.formSubmission, name='save'),
]
