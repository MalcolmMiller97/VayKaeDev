from django.shortcuts import render
from vaykae.modules.base import get_base_url
from django.http import HttpResponseRedirect
from vaykae.modules.base import models_to_dict
from vaykae.models import Reviews

import json


def error_page(request):
    data = {
        'base_url': get_base_url()
    }

    return render(request, '404.html', data)


def server_error(request):
    data = {
        'base_url': get_base_url()
    }

    return render(request, '500.html', data)


def home(request):
    data = {
        'base_url': get_base_url(),
        'reviews': json.dumps(models_to_dict(Reviews.objects.all()))
    }

    return render(request, 'home.html', data)
