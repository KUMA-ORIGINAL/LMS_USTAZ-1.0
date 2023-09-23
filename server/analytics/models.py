from django.db import models

from account.models import User


class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=255)
    created = models.DateField()

    class Meta:
        abstract = True
        ordering = ['-created']

    def __str__(self):
        return self.description


class Expense(Transaction):
    pass


class Income(Transaction):
    pass
