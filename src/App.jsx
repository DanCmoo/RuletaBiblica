import { useState } from 'react';
import Wheel from './components/Wheel';
import ResultDisplay from './components/ResultDisplay';
import { proverbios_biblicos } from './data/proverbios-biblicos';
import styles from './styles/App.module.css';

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentProverb, setCurrentProverb] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);

  const getRandomProverb = () => {
    return proverbios_biblicos[Math.floor(Math.random() * proverbios_biblicos.length)];
  };

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    setShowResult(false);
    setHasSpun(true);
  };

  const handleSpinComplete = () => {
    setCurrentProverb(getRandomProverb());
    setShowResult(true);
    setIsSpinning(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>✨ Jóvenes Sobre La Roca ✨</h1>
        <p className={styles.subtitle}>Iglesia Nueva Nación</p>
      </header>

      <div className={styles.infoBox}>
        <strong>¿Cómo usar:</strong> Presiona el botón "Girar la Ruleta" para obtener un proverbio.
      </div>

      <Wheel
        isSpinning={isSpinning}
        onSpinComplete={handleSpinComplete}
        selectedProverbId={currentProverb?.id}
      />

      <div className={styles.buttonContainer}>
        <button
          onClick={spinWheel}
          disabled={isSpinning || hasSpun}
          className={styles.spinBtn}
        >
          🎡 Girar la Ruleta
        </button>
      </div>

      <ResultDisplay proverb={currentProverb} isVisible={showResult} />
    </div>
  );
}

export default App;
