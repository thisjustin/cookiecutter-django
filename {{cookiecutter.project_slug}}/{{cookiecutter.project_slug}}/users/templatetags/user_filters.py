from django import template
from {{ cookiecutter.project_slug }}.users.api.serializers import UserSerializer
import json

register = template.Library()

@register.filter()
def userify(user):
    '''
    Template filter for returning json serialized user instance to JS
    :param user:
    :return:
    '''
    user = UserSerializer(user)

    return json.dumps(user.data)