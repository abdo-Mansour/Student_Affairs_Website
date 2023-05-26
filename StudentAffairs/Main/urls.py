from django.urls import path
from .views import main
from .views import search

urlpatterns = [
    path('', main.index, name='index'),
    path('home', main.home, name='home'),
    path('edit-student', main.edit, name='edit'),
    path('add-student', main.addStudent, name='add'),
    path('save', main.formSubmission, name='save'),
    path('view-student', main.view, name='view'),#here I chose the same edit function becauase both load data
    #search urls
    path('search', search.search, name='search'),
    path('search-query', search.searchQuery, name='searchQuery'),
    path('search-delete', search.delete, name='delete'),
]
