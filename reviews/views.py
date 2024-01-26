from rest_framework.generics import DestroyAPIView
from .serializers.common import ReviewSerializer
from .models import Review
from lib.views import CreatorListCreateView
from lib.permissions import IsCreatorOrReadOnly

# Path: /reviews/
# Methods: GET, POST
class ReviewCreateView(CreatorListCreateView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer

# Path: /reviews/:pk/
# Method: DELETE
class ReviewDestroyView(DestroyAPIView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer
  permission_classes = [IsCreatorOrReadOnly]