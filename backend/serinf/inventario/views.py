from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProductosSerializer
from .models import Producto

# Create your views here.
class ProductoView (viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
    queryset = Producto.objects.all()