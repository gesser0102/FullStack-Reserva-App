from rest_framework import viewsets
from .serializer import ReservaSerializer, EstacaoSerializer
from .models import Reserva, Estacao

# Create your views here.
class ReservaViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer


class EstacaoViewSet(viewsets.ModelViewSet):
    queryset = Estacao.objects.all()
    serializer_class = EstacaoSerializer
    