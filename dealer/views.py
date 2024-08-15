import json
from rest_framework.generics import ListAPIView
from django.http import HttpResponse
from .models import Dealer
from .serializers import DealerSerializer
from .paginations import CustomCursorPagination


class DealerView(ListAPIView):
    serializer_class = DealerSerializer
    pagination_class = CustomCursorPagination

    def get_queryset(self, *args, **kwargs):
        search: str = self.request.query_params.get("search")
        cities: str = self.request.query_params.get("cities")
        size = self.request.query_params.get("size")
        if size:
            self.pagination_class.page_size = int(size)
        else:
            self.pagination_class.page_size = 10
        queryset = Dealer.objects.filter(name__icontains=search.replace("+", " ") if search else "")
        if cities:
            queryset = queryset.filter(city__in=cities.replace("+", " ").split(","))
        return queryset


def city_view(request):
    cities = Dealer.objects.values_list("city", flat=True).distinct()
    response_data = {"cities": [
        {"name": city} for city in cities
    ]}
    return HttpResponse(content=json.dumps(response_data), content_type="application/json", status=200)
