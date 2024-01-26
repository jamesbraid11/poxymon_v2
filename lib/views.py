from rest_framework.generics import ListCreateAPIView

class CreatorListCreateView(ListCreateAPIView):

  def perform_create(self, serializer):
    serializer.save(creator=self.request.user)