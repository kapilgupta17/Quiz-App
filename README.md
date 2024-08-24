# Quiz-app

## Description

**Quiz-app** is a trivia quiz application built with React and Django. It allows users to test their knowledge by answering multiple-choice questions fetched from an external trivia API. The app provides immediate feedback on each answer and tracks the user's score, which can be submitted to the backend for storage.

## Features

- Interactive quiz with multiple-choice questions.
- Immediate feedback on user answers.
- Score tracking and submission.
- Responsive design for various devices.

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Django, Django REST Framework
- **API**: Open Trivia Database

## Installation and Setup

### Frontend

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/quiz-app.git
2. **Navigate to Frontend Directory**:
   ```bash
   cd quiz-app/frontend
3. **Install Dependencies**:
   ```bash
   npm install
4. **Start the development server**:
   ```bash
   npm run start

### Backend

1. **Navigate to Backend Directory**:
   ```bash
   cd quiz-app/backend
2. **Apply Migrations**:
   ```bash
   python manage.py migrate
3. **Start the Django server**:
   ```bash
   python manage.py runserver

## Usage

1. Start the frontend and backend servers.
2. Open your browser and navigate to http://localhost:3000 to access the Quiz-app.
3. Take the quiz, view feedback on your answers, and submit your score at the end.

