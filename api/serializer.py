from rest_framework import serializers
from .models import Reserva, Estacao

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = '__all__'

class EstacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estacao
        fields = '__all__'