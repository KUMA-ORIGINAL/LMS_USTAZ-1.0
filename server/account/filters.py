from django_filters import rest_framework as filters

from account.models import User, ProgressStudent


class ProgressStudentFilter(filters.FilterSet):
    min_points = filters.NumberFilter(field_name='points', lookup_expr='gte')
    max_points = filters.NumberFilter(field_name='points', lookup_expr='lte')

    class Meta:
        model = ProgressStudent
        fields = ['course_id']
