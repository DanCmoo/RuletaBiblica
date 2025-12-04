import { useState } from 'react';
import Wheel from './components/Wheel';
import ResultDisplay from './components/ResultDisplay';
import { proverbios_biblicos } from './data/proverbios-biblicos';
import styles from './styles/App.module.css';

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentProverb, setCurrentProverb] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [usedProverbs, setUsedProverbs] = useState([]);

  const getRandomProverb = () => {
    const availableProverbs = proverbios_biblicos.filter(
      proverb => !usedProverbs.includes(proverb.id)
    );
    
    if (availableProverbs.length === 0) {
      // Si no hay más proverbios disponibles, reinicia la lista
      setUsedProverbs([]);
      return proverbios_biblicos[Math.floor(Math.random() * proverbios_biblicos.length)];
    }
    
    return availableProverbs[Math.floor(Math.random() * availableProverbs.length)];
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowResult(false);
  };

  const handleSpinComplete = () => {
    const selectedProverb = getRandomProverb();
    setCurrentProverb(selectedProverb);
    setUsedProverbs([...usedProverbs, selectedProverb.id]);
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
          disabled={isSpinning}
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
