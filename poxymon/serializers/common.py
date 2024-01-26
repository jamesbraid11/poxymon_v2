from rest_framework.serializers import ModelSerializer
from ..models import Poxymon

class PoxymonSerializer(ModelSerializer):
  class Meta:
    model = Poxymon
    fields = '__all__'