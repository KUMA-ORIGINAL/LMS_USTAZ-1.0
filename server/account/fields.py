from django.db import models


class SummablePositiveIntegerField(models.PositiveIntegerField):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def update_sum(self, instance):
        total = instance.__class__.objects.aggregate(models.Sum(self.name))['%s__sum' % self.name]
        setattr(instance, self.name, total)
