import React from 'react';
import './App.css';
import NavBar from './NavBar';
import MovieScreen from './MovieScreen';
import FeedbackSection from './Feedback';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieScreen />
      <FeedbackSection />
    </div>
  );
}

export default App;