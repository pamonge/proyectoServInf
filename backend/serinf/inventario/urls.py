from django.urls import path, include
from rest_framework import routers
from inventario import views

router = routers.DefaultRouter()
router.register(r'inventario', views.ProductoView, 'inventario')

urlpatterns = [
    path('api/v1/', include(router.urls))
]
