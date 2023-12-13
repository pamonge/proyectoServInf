from django.db import models

# Create your models here.

class Producto (models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    precio = models.FloatField(default=0.0)
    image = models.ImageField(upload_to='prod')
    
    def __str__(self):
        return self.nombre