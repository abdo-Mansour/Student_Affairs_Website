from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from Main.models import Student
from django import forms


# username: abdo
# password: admin2003

def search(request):
    return render(request, "search/search_student.html")


def searchQuery(request):
     
    query = request.GET.get('name')
    method = request.GET.get('Search_by')
    if method == 'Name':
        students = Student.objects.filter(name__icontains=query , status = 'Active').values()
        return render(request, "search/search_student.html", {'students': students})
    
    elif method == 'Department':
        students = Student.objects.filter(department__icontains=query , status = 'Active').values()
        return render(request, "search/search_student.html", {'students': students})


def delete(request):
    #i think it should be a DELETE request
    idToDelete = request.POST.get('selected_student')
    
    studentToDelete = Student.objects.get(id=idToDelete)
    studentToDelete.delete()
    return render(request, "search/search_student.html")