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

  const SECRET_CARD_PASSWORD = "hojasninaumainefableocéanokoala";

  React.useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
  }, []);

  React.useEffect(() => {
    function setBackground() {
      const isMobile = window.innerWidth <= 800;
      const bg = isMobile ? '/Mobilebg.png' : '/joanna-dogs-bg.png';
      document.querySelector('.autumn-bg').style.backgroundImage = `url('${process.env.PUBLIC_URL + bg}')`;
    }
    setBackground();
    window.addEventListener('resize', setBackground);
    return () => window.removeEventListener('resize', setBackground);
  }, []);

  React.useEffect(() => {
    // Always scroll to top on initial load and prevent browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    // Extra: handle late browser scroll restoration
    
    // Debug: log scroll events to see what causes scrolling

  }, []);

  const handleConfettiAndRedirect = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti();
    }
    setFading(true);
    setTimeout(() => {
      window.location.href =
      process.env.PUBLIC_URL + '/Joanna Cumpleaños.pdf';
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
    setVisibleSection(3);
  };

  const handleRevealPuzzle = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti();
    }
    setVisibleSection(4);
  };

  const handleRevealFinal = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti();
    }
    setVisibleSection(5);
  };

  const handleRevealUltimate = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti();
    }
    setVisibleSection(6);
  };

  // Responsive mobile detection
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 800);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Overlay countdown state
  const [showCountdown, setShowCountdown] = React.useState(false);
  const [countdown, setCountdown] = React.useState(0);

  React.useEffect(() => {
    // Target: 10/05/2025 00:00:00 local time
    const target = new Date(2025, 4, 10, 0, 0, 0); // Month is 0-indexed
    const now = new Date();
    if (now < target) {
      setShowCountdown(true);
      setCountdown(Math.floor((target - now) / 1000));
      const interval = setInterval(() => {
        const now2 = new Date();
        const diff = Math.floor((target - now2) / 1000);
        setCountdown(diff);
        if (diff <= 0) {
          setShowCountdown(false);
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  // Countdown formatting helper
  function formatCountdown(seconds) {
    if (seconds <= 0) return "00:00:00";
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  return (
    <div className="autumn-bg">
      {showCountdown && (
        <div className="countdown-overlay">
          <div className="countdown-box">
            <h2>¡Feliz Cumpleaños, Joanna!</h2>
            <p>¡Llegaste un poquito temprano!</p>
            <div className="countdown-timer">{formatCountdown(countdown)}</div>
            <div className="countdown-label">Tiempo restante</div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="hero-mobile">
          <img src={process.env.PUBLIC_URL + '/Mobilebg.png'} alt="Hero" className="hero-mobile-img" />
          <div className="hero-mobile-h1-row">
            <h1 className="mobile-h1">¡Feliz Cumpleaños Joanna!</h1>
          </div>
        </div>
      )}
      <div className="main-content" style={isMobile ? {marginTop: '-2.5rem', paddingTop: 0} : {}}>
        {isMobile && (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem'}}>
            <img src={process.env.PUBLIC_URL + '/Joanna.jpeg'} alt="Joanna" className="joanna-photo" />
            <p className="subtitle" style={{marginTop: '1.2rem'}}>
              Feliz cumpleaños, mi osito pardo. Ojalá este día sea tan hermoso y lleno de luz como vos. Este es un pequeño rincón de la internet hecho solo para vos. 🎉🎂🎈❤️🍂
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
                  <p>Otra pista: Esta palabra eres vos, inolvidable, raro, único e increíble. Un anagrama de la misma es "benafiel" 💖</p>
                </div>
              )}
            </p>
          </div>
        )}
        {!isMobile && (
          <header className="header">
            <h1 className="desktop-h1">¡Feliz Cumpleaños Joanna!</h1>
            <img src={process.env.PUBLIC_URL + '/Joanna.jpeg'} alt="Joanna" className="joanna-photo" />
            <span></span>
            <p className="subtitle">
              Feliz cumpleaños, mi osito pardo. Ojalá este día sea tan hermoso y lleno de luz como vos. Este es un pequeño rincón de la internet hecho solo para vos. 🎉🎂🎈❤️🍂
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
                  <p>Otra pista: Esta palabra eres vos, inolvidable, raro, único e increíble. Un anagrama de la misma es "benafiel" 💖</p>
                </div>
              )}
            </p>
          </header>
        )}
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
                  <button className="card-password-btn pulse-btn" onClick={() => {
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
                <div className="start-btn-container" style={{textAlign: 'center', marginTop: '1.5rem'}}>
                  <button className="start-btn"  onClick={handleStart}>Iniciar</button>
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
            <h2>Pista 2: Notas de Voz</h2>
            <audio controls src={process.env.PUBLIC_URL + '/Clue1.mp4'}>
              Tu navegador no soporta el elemento de audio.
            </audio>
            <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <button className="card-link" onClick={handleRevealVoice}>Revelar Más</button>
            </div>
          </section>
          <section className={`section puzzle-section${visibleSection >= 3 ? ' fade-in' : ' hidden'}`}>
            <h2> Pista 3: Puzzle Todo Sobre Ti</h2>
            <p>¡Resolvé el puzzle para descubrir tu palabra!</p>
            <div className="puzzle-embed-container">
              {visibleSection >= 3 && (
                <iframe
                  height="700px"
                  width="100%"
                  allow="web-share; fullscreen"
                  style={{ border: 'none', width: '100% !important', position: 'static', display: 'block !important', margin: '0 !important' }}
                  src="https://puzzleme.amuselabs.com/pmm/crossword?id=45ed7d13&set=0c862dae7883570b7d30ed2cda8fa66d90c218858acc2bbbebd6be4f51e3f30c&embed=1"
                  aria-label="Juego Puzzle Me"
                  title="Juego Puzzle Me"
                ></iframe>
              )}
            </div>
            <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <button className="card-link" onClick={handleRevealPuzzle}>Revelar Más</button>
            </div>
          </section>
          <section className={`section message-section${visibleSection >= 4 ? ' fade-in' : ' hidden'}`}>
            <h2>Pista 4</h2>
            <p className="personal-message">Vas a encontrar esta pista escondida detrás de un objeto inflado que flota en algún lugar de esta página. Hacé clic para hacerlo explotar.</p>
            <div className="reveal-btn-container" style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <button className="card-link" onClick={handleRevealFinal}>Revelar Más</button>
            </div>
          </section>
          <section className={`section clue5-section${visibleSection >= 5 ? ' fade-in' : ' hidden'}`}>
            <h2>Pista 5</h2>
            <p>Esta se esconde en un lugar donde no esperarías encontrarlo. Ahí vas a descubrir la palabra.</p>
            <div className="reveal-btn-container" style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <button className="card-link" onClick={handleRevealUltimate}>Revelar pista final</button>
            </div>
          </section>
          <section className={`section ultimate-section${visibleSection >= 6 ? ' fade-in' : ' hidden'}`}>
            <h2>Pista Final</h2>
            <p>¡Feliz cumpleaños, preciosa! Significás todo para mí… el mundo, su sol y cada una de sus estrellas. Gracias por ser tan especial. me hacés feliz a cada paso y estoy inmensamente orgulloso de todo lo que hacés
               <br></br>Esta última pista te va a llegar de la misma forma que la primera, así que escribime para encontrarla. 🤗😘😘</p>
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
