import styles from './Options.module.css';

const Options = () => {
  return (
    <div className={styles.Options}>
      <span className={styles.optionsTitle}>Опции:</span>
      <label htmlFor="multiselect">Мультиселект</label>
      <input
        className={styles.optionsInput}
        type="checkbox"
        id="multiselect"
        name="mode"
      />
      <label htmlFor="icons">Иконки</label>
      <input
        className={styles.optionsInput}
        type="checkbox"
        id="icons"
        name="mode"
      />
    </div>
  );
};

export { Options };
