from django.core.management.base import BaseCommand
from faker import Faker
from dealer.models import Dealer
import random


fake = Faker()


class Command(BaseCommand):
    help = "Create dump data for dealers"

    def add_arguments(self, parser):
        parser.add_argument(
            "--count",
            type=int,
            help="The number of dealers to be created",
            default=50,
            nargs="?",
        )

    def handle(self, *args, **kwargs):
        count: int = kwargs["count"]
        images = [
            "astrazeneca.png",
            "atandt.png",
            "huawei.png",
            "hubspot.png",
            "microsoft-edge.png",
            "microsoft-explorer.png",
            "sketch.png",
            "unity.png",
            "vimeo.png",
        ]
        cities = [fake.city() for i in range(10)]
        for i in range(count):
            Dealer.objects.create(
                name=fake.company(),
                liscene_number=fake.bothify(text="????-####"),
                status=fake.word(),
                logo="dealers/" + random.choice(images),
                email=fake.email(),
                rating_score=random.uniform(4.0, 9.9),
                rating_count=fake.numerify(text="%##"),
                popularity=random.randint(500, 2000),
                city=random.choice(cities),
            )
