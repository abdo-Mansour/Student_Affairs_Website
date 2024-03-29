from django.urls import path
from .views import main
from .views import search

urlpatterns = [
    path('', main.index, name='index'),
    path('home', main.home, name='home'),
    path('help', main.help, name='help'),
    path('edit-student', main.edit, name='edit'),
    path('add-student', main.addStudent, name='add'),
    path('save', main.formSubmission, name='save'),
    path('search/', search.search, name='search'),
    path('search/search-query', search.searchQuery, name='searchQuery'),
    path('search-delete', search.delete, name='delete'),
    path('view-student', main.view, name='view'),
    path('all_students.html/',main.all, name='all'),
    path('all_students.html/post_request',main.post_request, name='post_request'),
    path('edit-department', main.editDepartment, name='editDepartment'),
    path('departmentSave', main.editStudentDep, name='saveDepartment'),
]
