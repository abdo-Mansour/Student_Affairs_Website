from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "index/index.html") 

def edit(request):
    return render(request, 'editStudent/Edit_Student.html')

def main(request):
    return render(request, 'home/home.html')