from django.contrib import admin

from analytics.models import Expense, Income, SalesFunnel, FunnelStage


@admin.register(Income)
@admin.register(Expense)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('user', 'description', 'amount', 'created')
    list_filter = ('user', 'created')
    search_fields = ('description', 'user__username')


@admin.register(SalesFunnel)
class SalesFunnelAdmin(admin.ModelAdmin):
    list_display = ('name', 'created', 'updated')


@admin.register(FunnelStage)
class FunnelStageAdmin(admin.ModelAdmin):
    list_display = ('name', 'sales_funnel', 'order', 'created', 'updated')
    list_filter = ('sales_funnel', 'order')
