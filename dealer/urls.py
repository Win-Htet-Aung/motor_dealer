from django.urls import path
from .views import DealerView


urlpatterns = [
    path("", DealerView.as_view()),
]
