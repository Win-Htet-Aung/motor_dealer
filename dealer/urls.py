from django.urls import path
from .views import DealerView, city_view


urlpatterns = [
    path("", DealerView.as_view()),
    path("/cities", city_view),
]
