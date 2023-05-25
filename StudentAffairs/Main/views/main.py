from django.shortcuts import render
from django.http import HttpResponse
from Main.models import Student
from django import forms

genderChoices = [
    ('Male', 'Male'),
    ('Female', 'Female'),
]

levelChoices = [
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
]

statuses = [
    ('Active', 'Active'),
    ('Inactive', 'Inactive'),
]

departments = [
    ('CS', 'CS'),
    ('AI', 'AI'),
    ('IT', 'IT'),
    ('IS', 'IS'),
    ('DS', 'DS'),
]

class addStudentForm(forms.Form):
    name = forms.CharField(label='Name')
    id = forms.CharField(label='studentId')
    DOB = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}), label='DOB')
    email = forms.CharField(label='studentEmail')
    gpa = forms.CharField(label='studentGpa')
    level = forms.ChoiceField(label='studentLevel', choices=levelChoices)
    status = forms.ChoiceField(label='studentStatus', choices=statuses)
    phone = forms.CharField(label='studentPhone')
    department = forms.ChoiceField(label='studentDep', choices=departments)
    gender = forms.ChoiceField(label='studentGender', choices=genderChoices)

# Create your views here.
def index(request):
    return render(request, "index/index.html") 

def edit(request):
    instance = Student.objects.get(id = '20210089')#This should get the object student
    formData = {'name': instance.name, 'id': instance.id, 'gender': instance.gender,
                'gpa': instance.gpa, 'level': instance.level, 'status': instance.status,
                'DOB': instance.dateOfBirth, 'department': instance.department,
                'email' : instance.email, 'phone': instance.phone}
    form = addStudentForm(initial=formData)


    return render(request, 'editStudent/Edit_Student.html' , {
        'form': form
    })

def view(request):
    instance = Student.objects.get(id = '20210057')#This should get the object student
    formData = {'name': instance.name, 'id': instance.id, 'gender': instance.gender,
                'gpa': instance.gpa, 'level': instance.level, 'status': instance.status,
                'DOB': instance.dateOfBirth, 'department': instance.department,
                'email' : instance.email, 'phone': instance.phone}
    form = addStudentForm(initial=formData)
    
    #now we disable the input field.
    form.fields['name'].widget.attrs['disabled'] = True
    form.fields['id'].widget.attrs['disabled'] = True
    form.fields['gender'].widget.attrs['disabled'] = True
    form.fields['gpa'].widget.attrs['disabled'] = True
    form.fields['level'].widget.attrs['disabled'] = True
    form.fields['status'].widget.attrs['disabled'] = True
    form.fields['DOB'].widget.attrs['disabled'] = True
    form.fields['department'].widget.attrs['disabled'] = True
    form.fields['email'].widget.attrs['disabled'] = True
    form.fields['phone'].widget.attrs['disabled'] = True        

    return render(request, 'viewStudent/view_student.html', {
        'form' : form
    })

def home(request):
    return render(request, 'home/home.html')

def addStudent(request):
    return render(request, "addStudent/add_student.html",{
        'form': addStudentForm()
    })

def formSubmission(request):
    if request.method == 'POST':
        t_name = request.POST['name']
        t_gender = request.POST['gender']
        t_gpa = request.POST['gpa']
        t_id = request.POST['id']
        t_level = request.POST['level']
        t_status = request.POST['status']
        t_DOB = request.POST['DOB']
        t_dep = request.POST['department']
        t_email = request.POST['email']
        t_phone = request.POST['phone']
        temp = Student(name=t_name, gender=t_gender, gpa=t_gpa, id=t_id, level=t_level, status=t_status, dateOfBirth=t_DOB, 
                       department=t_dep, email=t_email, phone=t_phone)
        
        temp.save()
        return HttpResponse("Data saved!")
