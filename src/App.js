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
  const [balloonPopped, setBalloonPopped] = React.useState(false);
  const [showBalloonClue, setShowBalloonClue] = React.useState(false);
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
          <h1>¡Feliz Cumpleaños Joanna!</h1>
          <span></span>
          <p className="subtitle">
            Te deseo un muy feliz cumpleaños y un día hermoso, mi osito pardo 🎉🎂🎈❤️🍂
            <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '0.5em' }}>
              {!balloonPopped && (
                <span
                  className={`balloon-inline${balloonPopped ? ' popped' : ''}`}
                  onMouseDown={e => e.preventDefault()}
                  onClick={e => {
                    e.preventDefault();
                    setBalloonPopped(true);
                    setTimeout(() => setShowBalloonClue(true), 600); // Wait for pop animation
                  }}
                  style={{ cursor: 'pointer' }}
                  tabIndex={0}
                  role="button"
                >
                  <span className="balloon-shape-inline">
                    <span className="balloon-shine-inline"></span>
                  </span>
                  <svg className="balloon-string-svg-inline" width="10" height="22" viewBox="0 0 10 22">
                    <path d="M5 0 Q2 7 5 11 Q8 15 5 22" stroke="#ff7eb3" strokeWidth="1.2" fill="none"/>
                  </svg>
                </span>
              )}
            </span>
            {balloonPopped && (
              <div className="clue-box">
                <p>Otra pista: Esta palabra eres vos, inolvidable, raro, único e increíble. Un anagrama de la misma es Traxendiorario 💖</p>
              </div>
            )}
          </p>
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
                title="Lista de Spotify"
              ></iframe>
            </div>
          <section className={`section card-section${visibleSection >= 0 ? ' fade-in' : ' hidden'}`}>
            <h2>Tu Tarjeta de Cumpleaños</h2>
            <p>Ingresá la contraseña para desbloquear tu tarjeta:</p>
            
            {!cardUnlocked && (
              <>
                <div className="card-password-container">
                  <input
                    className="card-password-input"
                    type="password"
                    placeholder="Ingresá la contraseña..."
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
                      setCardPasswordError("Contraseña incorrecta. ¡Intentá de nuevo!");
                    }
                  }}>Desbloquear</button>
                  {cardPasswordError && <div className="card-password-error">{cardPasswordError}</div>}
                </div>
            
                <div className="start-hint-es">
                  <p>Presioná "Iniciar" para revelar la siguiente sección.</p>
                </div>
                <div className="start-btn-container">
                  <button className="start-btn" onClick={handleStart}>Iniciar</button>
                </div>
              </>
            )}
            {cardUnlocked && (
              <div className={`card-link-container${fading ? ' fade-out' : ''}`}>
                <button className="card-link" onClick={handleConfettiAndRedirect}>Abrir Tarjeta PDF</button>
              </div>
            )}
            
          </section>

          <section className={`section voice-section${visibleSection >= 2 ? ' fade-in' : ' hidden'}`}>
            <h2>Notas de Voz</h2>
            <audio controls src=".\Clue1.m4a">
              Tu navegador no soporta el elemento de audio.
            </audio>
            <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <button className="card-link" onClick={handleRevealVoice}>Revelar Más</button>
            </div>
          </section>
          <section className={`section puzzle-section${visibleSection >= 4 ? ' fade-in' : ' hidden'}`}>
            <h2>Desafío de Puzzle</h2>
            <p>¡Resolvé el puzzle para descubrir tu código!</p>
            <div className="puzzle-embed-container">
              <iframe
                height="700px"
                width="100%"
                allow="web-share; fullscreen"
                style={{ border: 'none', width: '100% !important', position: 'static', display: 'block !important', margin: '0 !important' }}
                src="https://puzzleme.amuselabs.com/pmm/crossword?id=45ed7d13&set=0c862dae7883570b7d30ed2cda8fa66d90c218858acc2bbbebd6be4f51e3f30c&embed=1"
                aria-label="Juego Puzzle Me"
                title="Juego Puzzle Me"
              ></iframe>
            </div>
            <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <button className="card-link" onClick={handleRevealPuzzle}>Revelar Más</button>
            </div>
          </section>
          <section className={`section message-section${visibleSection >= 4 ? ' fade-in' : ' hidden'}`}>
            <h2>Mensaje Personal</h2>
            <p className="personal-message">[Tu mensaje aparecerá acá]</p>
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
