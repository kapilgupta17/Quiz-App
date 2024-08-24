from django.urls import path
from .views import get_questions, save_score

urlpatterns = [
    path('questions/', get_questions, name='get_questions'),
    path('save-score/', save_score, name='save_score'),
    
]