import React from 'react';
import './App.css';

function App() {
  return (
    <div className="autumn-bg">
      <div className="main-content">
        <header className="header">
          <h1>Feliz Cumpleaños Joanna!</h1>
          <span></span>
          <p className="subtitle">Te deseo un muy feliz cumpleaños y un día hermoso, mi osito parde 🎉🎂🎈❤️🍂</p>
        </header>
        <main>
          <section className="section card-section">
            <h2>Your Birthday Card</h2>
            <p>Click below to view your special card:</p>
            <div className="card-link-container">
            <a className="card-link" href="#" target="_blank" rel="noopener noreferrer">Open PDF Card</a>
            </div>
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
          <p>Made with love, Jordan xxx</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
