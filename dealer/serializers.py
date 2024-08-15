from rest_framework import serializers
from .models import Dealer


class DealerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dealer
        fields = [
            "id",
            "name",
            "liscene_number",
            "status",
            "logo",
            "email",
            "rating_score",
            "rating_count",
            "popularity",
            "city",
        ]
