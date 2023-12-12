from django.urls import path, include
from rest_framework import routers
from tienda import views

router = routers.DefaultRouter()
router.register(r'tienda', views.ProductoView, 'tienda')

urlpatterns = [
    path('api/v1/', include(router.urls))
]
