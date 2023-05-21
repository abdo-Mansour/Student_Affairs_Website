from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Student
# Create your views here.
mylist = Student.objects.all().values()
template = loader.get_template('test.html')

context ={
'mylist':mylist,
}

def testApp(request):
    return HttpResponse(template.render(context,request))