from rest_framework.generics import ListAPIView
from .models import Type
from .serializers.common import TypeSerializer

# Path: /types/
# Method: GET
class TypeListView(ListAPIView):
  queryset = Type.objects.all()
  serializer_class = TypeSerializer