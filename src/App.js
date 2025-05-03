import React from 'react';
import './App.css';
import JSConfetti from 'js-confetti';

function App() {
  const [fading, setFading] = React.useState(false);
  const jsConfettiRef = React.useRef(null);
  const [visibleSection, setVisibleSection] = React.useState(0);
  const [cardPassword, setCardPassword] = React.useState("");
  const [cardPasswordInput, setCardPasswordInput] = React.useState("");
  const [cardPasswordError, setCardPasswordError] = React.useState("");
  const [cardUnlocked, setCardUnlocked] = React.useState(false);
  const [showFirstClue, setShowFirstClue] = React.useState(false);
  // TODO: Set your secret password here
  const SECRET_CARD_PASSWORD = "UMA";

  React.useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
  }, []);

  const handleConfettiAndRedirect = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti();
    }
    setFading(true);
    setTimeout(() => {
      window.location.href =
        'https://www.canva.com/design/DAGlMLpTYJA/NBmfaCtxQjwVvs7QMKbUbw/edit?utm_content=DAGlMLpTYJA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';
    }, 1200); // 1.2s fade duration
  };

  const handleStart = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti();
    }
    setVisibleSection(2); // Reveal the voice note section
  };

  const handleRevealCard = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti();
    }
    setVisibleSection(3);
  };

  const handleRevealVoice = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti();
    }
    setVisibleSection(4);
  };

  const handleRevealPuzzle = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti();
    }
    setVisibleSection(5);
  };

  return (
    <div className="autumn-bg">
      <div className="main-content">
        <header className="header">
          <h1>Feliz Cumpleaños Joanna!</h1>
          <span></span>
          <p className="subtitle">Te deseo un muy feliz cumpleaños y un día hermoso, mi osito parde 🎉🎂🎈❤️🍂</p>
        </header>
        <main>
        <div className="spotify-embed-container">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/15BTRqeJFl5ITrvZxQVtuA?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
              ></iframe>
            </div>
          <section className={`section card-section${visibleSection >= 0 ? ' fade-in' : ' hidden'}`}>
            <h2>Your Birthday Card</h2>
            <p>Enter the password to unlock your card:</p>
            
            {!cardUnlocked && (
              <>
                <div className="card-password-container">
                  <input
                    className="card-password-input"
                    type="password"
                    placeholder="Enter password to unlock..."
                    value={cardPasswordInput}
                    onChange={e => setCardPasswordInput(e.target.value)}
                  />
                  <button className="card-password-btn" onClick={() => {
                    if (cardPasswordInput === SECRET_CARD_PASSWORD) {
                      setCardPasswordError("");
                      let confettiCount = 0;
                      const fireConfetti = () => {
                        if (jsConfettiRef.current) jsConfettiRef.current.addConfetti();
                        confettiCount++;
                        if (confettiCount < 3) {
                          setTimeout(fireConfetti, 600);
                        } else {
                          setCardUnlocked(true);
                        }
                      };
                      fireConfetti();
                    } else {
                      setCardPasswordError("Incorrect password. Try again!");
                    }
                  }}>Unlock</button>
                  {cardPasswordError && <div className="card-password-error">{cardPasswordError}</div>}
                </div>
                <div className="start-hint-es">
                  <p>Presiona "Start" para revelar la siguiente sección (nota de voz).</p>
                </div>
                <div className="start-btn-container">
                  <button className="start-btn" onClick={handleStart}>Start</button>
                </div>
              </>
            )}
            {cardUnlocked && (
              <div className={`card-link-container${fading ? ' fade-out' : ''}`}>
                <button className="card-link" onClick={handleConfettiAndRedirect}>Open PDF Card</button>
              </div>
            )}
            
          </section>
          <section className={`section start-section${visibleSection >= 1 ? ' fade-in' : ' hidden'}`}>
            <h2>Click the button to start</h2>
            <div className="start-btn-container">
              <button className="start-btn" onClick={handleStart}>Reveal Next Section</button>
            </div>
          </section>
          <section className={`section card-section${visibleSection >= 2 ? ' fade-in' : ' hidden'}`}>
            {cardUnlocked && (
              <div className={`card-link-container${fading ? ' fade-out' : ''}`}>
                <button className="card-link" onClick={handleRevealCard}>Reveal More</button>
              </div>
            )}
          </section>
          <section className={`section voice-section${visibleSection >= 3 ? ' fade-in' : ' hidden'}`}>
            <h2>Voice Notes</h2>
            <audio controls src="#">
              Your browser does not support the audio element.
            </audio>
            <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <button className="card-link" onClick={handleRevealVoice}>Reveal More</button>
            </div>
          </section>
          <section className={`section puzzle-section${visibleSection >= 4 ? ' fade-in' : ' hidden'}`}>
            <h2>Puzzle Challenge</h2>
            <p>Solve the puzzle to reveal your code:</p>
            <div className="puzzle-embed-container">
              {/* PuzzleMe Embed Start */}
              <div style={{position: 'relative', textAlign: 'center'}}>
                <div className="pm-embed-div" data-id="45ed7d13" data-set="0c862dae7883570b7d30ed2cda8fa66d90c218858acc2bbbebd6be4f51e3f30c" data-puzzletype="crossword" data-height="700px" data-mobilemargin="10px"></div>
                <div className="pm-attribution-div" style={{fontFamily: 'sans-serif', fontSize: 12, color: '#666', position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, 0px)', paddingTop: 5, width: '100%'}}>
                  <a href="https://amuselabs.com/" target="_blank" style={{color: '#666', textDecoration: 'underline'}}></a> 
                </div>
              </div>
              {/* PuzzleMe Embed End */}
            </div>
            <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <button className="card-link" onClick={handleRevealPuzzle}>Reveal More</button>
            </div>
          </section>
          <section className={`section message-section${visibleSection >= 5 ? ' fade-in' : ' hidden'}`}>
            <h2>Personal Message</h2>
            <p className="personal-message">[Your message will appear here]</p>
          </section>
          <section className={`section card-final-section${visibleSection >= 6 ? ' fade-in' : ' hidden'}`}>
            <h2>Your Birthday Card</h2>
            <p>Click below to view your special card:</p>
            <div className={`card-link-container${fading ? ' fade-out' : ''}`}>
              <button className="card-link" onClick={handleConfettiAndRedirect}>Reveal Card</button>
            </div>
          </section>
        </main>
      </div>
      <footer className="footer">
        <p>Hecho con amor infinito, Jordan xxx</p>
      </footer>
    </div>
  );
}

export default App;
