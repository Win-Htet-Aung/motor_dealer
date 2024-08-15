from django.contrib import admin
from .models import Dealer


@admin.register(Dealer)
class DealerAdmin(admin.ModelAdmin):
    list_display = ('name', 'liscene_number', 'status', 'rating_score', 'rating_count', 'popularity', 'city')
