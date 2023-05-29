from django.shortcuts import render, redirect
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
    idToEdit = request.POST.get('selected_student')
    instance = Student.objects.get(id = idToEdit )#This should get the object student
    formData = {'name': instance.name, 'id': instance.id, 'gender': instance.gender,
                'gpa': instance.gpa, 'level': instance.level, 'status': instance.status,
                'DOB': instance.dateOfBirth, 'department': instance.department,
                'email' : instance.email, 'phone': instance.phone}
    form = addStudentForm(initial=formData)


    return render(request, 'editStudent/Edit_Student.html' , {
        'form': form
    })

def view(request):
    idToView = request.POST.get('selected_student')
    instance = Student.objects.get(id = idToView)#This should get the object student
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
        form = addStudentForm(request.POST)
        if form.is_valid():
            t_name = form.cleaned_data['name']
            t_gender = form.cleaned_data['gender']
            t_gpa = form.cleaned_data['gpa']
            t_id = form.cleaned_data['id']
            t_level = form.cleaned_data['level']
            t_status = form.cleaned_data['status']
            t_DOB = form.cleaned_data['DOB']
            t_dep = form.cleaned_data['department']
            t_email = form.cleaned_data['email']
            t_phone = form.cleaned_data['phone']
        
        temp = Student(
            name = t_name,
            gender = t_gender,
            gpa = t_gpa,
            id = t_id,
            level = t_level,
            status = t_status,
            dateOfBirth = t_DOB,
            department = t_dep,
            email = t_email,
            phone = t_phone
        )
        
        temp.save()
        return redirect('/search')
    else:
        form = addStudentForm()

    return render(request, 'add-student', {'form': form})