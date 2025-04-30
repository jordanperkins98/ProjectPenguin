import React from 'react';
import './App.css';

function App() {
  return (
    <div className="autumn-bg">
      <div className="main-content">
        <header className="header">
          <h1>Happy Birthday Joanna!</h1>
          <p className="subtitle">An autumn surprise from Argentina 🍂🇦🇷</p>
        </header>
        <main>
          <section className="section card-section">
            <h2>Your Birthday Card</h2>
            <p>Click below to view your special card:</p>
            <a className="card-link" href="#" target="_blank" rel="noopener noreferrer">Open PDF Card</a>
          </section>
          <section className="section voice-section">
            <h2>Voice Notes</h2>
            <audio controls src="#">
              Your browser does not support the audio element.
            </audio>
          </section>
          <section className="section puzzle-section">
            <h2>Puzzle Challenge</h2>
            <p>Solve the puzzle to reveal your code:</p>
            <div className="puzzle-placeholder">[Puzzle will go here]</div>
            <div className="code-reveal">Code: <span className="hidden-code">•••••</span></div>
          </section>
          <section className="section message-section">
            <h2>Personal Message</h2>
            <p className="personal-message">[Your message will appear here]</p>
          </section>
        </main>
        <footer className="footer">
          <p>Made with love, autumn leaves, and Argentinian spirit.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
