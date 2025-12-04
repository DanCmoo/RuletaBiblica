import { useState, useEffect } from 'react';
import styles from '../styles/Wheel.module.css';

const Wheel = ({ isSpinning, onSpinComplete, selectedProverbId }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isSpinning) {
      const randomRotation = Math.floor(Math.random() * 360) + 720;
      setRotation(randomRotation);

      const timer = setTimeout(() => {
        onSpinComplete();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSpinning, onSpinComplete]);

  return (
    <div className={styles.wheelContainer}>
      <div className={styles.wheelWrapper}>
        <div className={styles.indicator}>▼</div>
        <div
          className={`${styles.wheel} ${isSpinning ? styles.spinning : ''}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
        </div>
        <div className={styles.centerText}>GIRA</div>
      </div>
    </div>
  );
};

export default Wheel;
