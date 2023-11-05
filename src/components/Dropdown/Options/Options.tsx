import { useDropdown } from '../../../store';
import styles from './Options.module.css';

const Options = () => {
  const { onToggleIcons, onToggleMultiselect, showIcons, multiselectEnabled } =
    useDropdown();
  return (
    <div className={styles.Options}>
      <span className={styles.optionsTitle}>Опции:</span>
      <label htmlFor="multiselect">Мультиселект</label>
      <input
        className={styles.optionsInput}
        type="checkbox"
        id="multiselect"
        name="mode"
        onChange={onToggleMultiselect}
        checked={multiselectEnabled}
      />
      <label htmlFor="icons">Иконки</label>
      <input
        className={styles.optionsInput}
        type="checkbox"
        id="icons"
        name="mode"
        onChange={onToggleIcons}
        checked={showIcons}
      />
    </div>
  );
};

export { Options };
