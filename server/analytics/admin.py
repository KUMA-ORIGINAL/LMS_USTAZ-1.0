from django.contrib import admin

from analytics.models import Expense, Income


@admin.register(Income)
@admin.register(Expense)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('user', 'description', 'amount', 'created')
    list_filter = ('user', 'created')
    search_fields = ('description', 'user__username')
