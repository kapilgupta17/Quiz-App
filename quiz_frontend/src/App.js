import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Quiz from './components/Quiz'
import Score from './components/Score';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </Router>
  );
}
function Home() {
  return (
    <div className='home'>
      <h1>Welcome to the Trivia Quiz App</h1>
      <p>Click on the button below to start the quiz</p>
      <Link to="/quiz"><button>START QUIZ</button></Link>
    </div>
  );
}


export default App;