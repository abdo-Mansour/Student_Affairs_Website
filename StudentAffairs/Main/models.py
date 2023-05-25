from django.db import models

# Create your models here.

class Student(models.Model):
    id = models.CharField(max_length=8, primary_key=True)
    name = models.CharField(max_length=64)
    dateOfBirth = models.DateTimeField()
    email = models.CharField(max_length=64)
    gpa = models.CharField(max_length=4)
    level = models.CharField(max_length=1)
    status = models.CharField(max_length=64)
    phone = models.CharField(max_length=12)
    department = models.CharField(max_length=2)
    gender = models.CharField(max_length=6)

    def __str__(self):
        return f"{self.id}: {self.name}"