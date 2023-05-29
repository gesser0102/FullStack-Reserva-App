from django.db import models

# Create your models here.
class Reserva(models.Model):
    nome = models.CharField(max_length=100)
    estacao = models.CharField(max_length=100)
    periodo = models.CharField(max_length=100)
    data = models.DateField(auto_now_add=False)

    def __str__(self):
        return self.nome

class Estacao(models.Model):
    nome = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nome