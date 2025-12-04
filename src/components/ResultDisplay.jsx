import styles from '../styles/ResultDisplay.module.css';

const ResultDisplay = ({ proverb, isVisible }) => {
  if (!isVisible || !proverb) {
    return null;
  }

  return (
    <div className={`${styles.resultContainer} ${isVisible ? styles.show : ''}`}>
      <div className={styles.resultTitle}>{proverb.referencia}</div>
      <div className={styles.resultText}>{proverb.texto}</div>
      <div className={styles.resultDescription}>{proverb.explicacion}</div>
    </div>
  );
};

export default ResultDisplay;
