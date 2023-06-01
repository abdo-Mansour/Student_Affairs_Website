from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from Main.models import Student
from django import forms
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json


# username: abdo
# password: admin2003

def search(request):
    return render(request, "search/search_student.html")

@csrf_exempt
def searchQuery(request):
     
    query = request.GET.get('query')
    method = request.GET.get('method')
    print("query is: ", query)
    print("method is: ", method)
    if method == 'name':
        print ("priiiiiiiiiiiiiiiiiiiiiiiiintinggggggggg")
        students = Student.objects.filter(name__icontains=query , status = 'Active').values()
        return JsonResponse(list(students), safe=False)
        # return students

    elif method == 'department':
        students = Student.objects.filter(department__icontains=query , status = 'Active').values()
        return JsonResponse(list(students), safe=False)        # return students

@csrf_exempt
def delete(request):
    #i think it should be a DELETE request
    data = json.loads(request.body)
    idToDelete = data['id']
    print("id to delete is: ", idToDelete)
    print("hellllllllllllllllllllllllllllllllllo")
    # data = json.loads(request.body)
    # idToDelete = data['id']
    studentToDelete = Student.objects.get(id=idToDelete)
    studentToDelete.delete()
    return HttpResponse("Deleted Successfully")