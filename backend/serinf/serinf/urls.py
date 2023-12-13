"""
URL configuration for serinf project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from tienda import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('alcance/', views.alcance, name='alcance'),
    path('contacto/', views.contacto, name='contacto'),
    path('politicas-de-privacidad/', views.politicas_de_privacidad, name='politicas-de-privacidad'),
    path('acerca-de-nosotros/', views.acerca_de_nosotros, name='acerca-de-nosotros'),
    path('terminos-de-servicio/', views.terminos_de_servicio, name='terminos-de-servicio'),
    path('productos/', views.productos, name='productos'),
    path('servicios/', views.servicios, name='servicios'),
    path('signup/', views.signup, name='signup'),
    path('store/', views.store, name='store'),
    path('soporte/', views.soporte, name='soporte'),
    path('signin/', views.signin, name='signin'),
    path('logout/', views.signout, name='logout'),
    path('producto/', include('inventario.urls')),  # Inventario API
]
