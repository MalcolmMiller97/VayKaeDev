from django.conf.urls import url
from django.contrib import admin
from vaykae.controllers import site

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', site.home, name='site'),
]
