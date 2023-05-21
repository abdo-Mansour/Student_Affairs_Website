from django.db import models

class Student(models.Model):
  name = models.CharField(max_length=255)
  id = models.IntegerField(primary_key=True)
  date_of_birth = models.DateField()
  email = models.EmailField()
  gender = models.CharField(max_length=255)
  gpa = models.DecimalField(max_digits=3, decimal_places=2)
  level = models.IntegerField()
  status = models.CharField(max_length=255)
  depart = models.CharField(max_length=255)
  phone = models.CharField(max_length=255)

