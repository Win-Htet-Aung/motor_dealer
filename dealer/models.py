from django.db import models
from django.db.models.signals import pre_delete
from django.dispatch import receiver


class Dealer(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    liscene_number = models.CharField(max_length=200)
    status = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='dealers/')
    email = models.EmailField()
    rating_score = models.DecimalField(max_digits=3, decimal_places=2)
    rating_count = models.IntegerField()
    popularity = models.IntegerField()
    city = models.CharField(max_length=200, db_index=True)


@receiver(pre_delete, sender=Dealer)
def remove_image(sender, instance, **kwargs):
    instance.logo.delete(save=False)
