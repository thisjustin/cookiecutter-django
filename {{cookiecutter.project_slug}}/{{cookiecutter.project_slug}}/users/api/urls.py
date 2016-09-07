from django.conf.urls import url

from {{ cookiecutter.project_slug }}.users.api.views import(
    UserDetailView
)

urlpatterns = [
    url(
        regex=r'^(?P<user_id>\d+)/$',
        view=UserDetailView.as_view(),
        name='user-detail'
    ),
]