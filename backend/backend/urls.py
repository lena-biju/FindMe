"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core.views import front,PostView,fronts, match
urlpatterns = [
    path('',front,name="front"),
    path("case/<int:id>",fronts,name="front"),
    path('register_case/',front,name="front"),
    path('match_cases/',front,name="front"),
    path('match/',match,name="match"),
    path('register_case/<pk>', PostView.as_view(), name= 'posts_list'),
]
