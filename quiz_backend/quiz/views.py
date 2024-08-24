from django.shortcuts import render
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

# Endpoint 1: Fetch questions from Open Trivia Database
@api_view(['GET'])
def get_questions(request):
    response = requests.get('https://opentdb.com/api.php?amount=10&type=multiple')
    data = response.json()
    return Response(data)

# Endpoint 2: Save user score
@api_view(['POST'])
def save_score(request):
    username = request.data.get('username')
    score = request.data.get('score')
    # Save the score to the database (assuming a Score model)
    # Example without a database connection
    return Response({'message': 'Score saved successfully', 'username': username, 'score': score})
