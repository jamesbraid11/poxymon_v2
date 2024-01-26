from django.urls import path
from .views import PoxymonListCreateView, PoxymonDetailView, PoxymonLikeView

urlpatterns = [
  path('', PoxymonListCreateView.as_view()),
  path('<int:pk>/', PoxymonDetailView.as_view()),
  path('<int:pk>/like/', PoxymonLikeView.as_view())
]