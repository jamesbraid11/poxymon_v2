from rest_framework.generics import RetrieveUpdateDestroyAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response
from .models import Poxymon
from .serializers.common import PoxymonSerializer
from .serializers.populated import PoxymonListSerializer
from lib.views import CreatorListCreateView
from lib.permissions import IsCreatorOrReadOnly


# Path: /poxymon/
# Methods: GET, POST
class PoxymonListCreateView(CreatorListCreateView):
  queryset = Poxymon.objects.all()
  serializer_class = PoxymonSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return PoxymonListSerializer
    return PoxymonSerializer
  
# Path: /poxymon/:pk/
# Methods: GET, PUT, PATCH, DELETE
class PoxymonDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Poxymon.objects.all()
  permission_classes = [IsCreatorOrReadOnly]
  
  def get_serializer_class(self):
    if self.request.method == 'GET':
      return PoxymonListSerializer
    else:
      return PoxymonSerializer

# Path: /poxymon/:pk/like/
# Method: PUT, PATCH (only using PATCH)
class PoxymonLikeView(UpdateAPIView):
  queryset = Poxymon.objects.all()
  serializer_class = PoxymonSerializer
  permission_classes = [IsAuthenticated]

  # Overiding the PATCH method from generic view
  def patch(self, request, *args, **kwargs):
    poxymon = self.get_object()
    if request.user in poxymon.likes.all():
      # User has liked poxymon
      poxymon.likes.remove(request.user)
      poxymon.save()
      return Response(status=204)
    else:
      # User has not liked poxymon
      poxymon.likes.add(request.user)
      poxymon.save()
      return Response(status=201)