from rest_framework.permissions import BasePermission


class IsAdminOrMentorOrReadPermission(BasePermission):
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        if request.user.role in ('admin', 'mentor'):
            return True
        return request.method == 'GET'
