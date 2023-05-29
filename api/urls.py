from django.urls import path, include
from rest_framework import routers
from api import views

routers=routers.DefaultRouter()
routers.register(r'reservas',views.ReservaViewSet)
routers.register(r'estacao',views.EstacaoViewSet)

urlpatterns = [
    path('', include(routers.urls))
]