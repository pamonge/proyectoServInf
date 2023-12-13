from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProductosSerializer
from .models import Producto

# Create your views here.

def store (request):
    productos = Producto.objects.all()
    return render(request, 'inventario/store.html', {'productos': productos })


class ProductoView (viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
    queryset = Producto.objects.all()
