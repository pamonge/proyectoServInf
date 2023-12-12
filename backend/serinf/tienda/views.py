from django.shortcuts import render, redirect
# Signup 
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.db import IntegrityError
# Vista de Productos
from rest_framework import viewsets
from .serializer import ProductosSerializer
from .models import Producto

# Create your views here.

# Vistas de ByteCrafters

def home(request):
    return render(request, 'home.html')

def acerca_de_nosotros (request):
    return render (request, 'acerca-de-nosotros.html')

def alcance (request):
    return render (request, 'alcance.html')

def contacto (request):
    return render (request, 'contacto.html')

def signin (request):        #==> fusionar con login.html
    if request.method == 'GET':
        return render (request, 'signin.html', {
            'form': AuthenticationForm })
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render (request, 'signin.html', {
                'form': AuthenticationForm, 
                'error': 'Usuario o contraseña incorrectos'
                })
        else:
            login(request, user)
            return redirect('store')

def politicas_de_privacidad (request):
    return render (request, 'politicas-de-privacidad.html')

def productos (request):
    return render (request, 'productos.html')

def signup(request):       #==> fusionar con register.html
    if request.method == 'GET':
        return render (request, 'signup.html', {
            'form': UserCreationForm
        })
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                #registro usuario
                user = User.objects.create_user(username = request.POST['username'], password= request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('store')
            except IntegrityError:
                return render(request, 'signup.html', {
                    'form': UserCreationForm,
                    "error": 'El usuario ya se encuentra registrado'
                })
        return render (request, 'signup.html', {
            'form': UserCreationForm,
            "error": 'Las Contraseñas no coinciden'
        })

def servicios (request):
    return render (request, 'servicios.html')

def soporte (request):
    return render (request, 'soporte.html')

def terminos_de_servicio (request):
    return render (request, 'terminos-de-servicio.html')

def store(request):        #==> fusionar con tienda.html
    return render(request, 'store.html')

def signout (request):
    logout (request)
    return redirect('home')

# Vista de Productos

class ProductoView (viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
    queryset = Producto.objects.all()