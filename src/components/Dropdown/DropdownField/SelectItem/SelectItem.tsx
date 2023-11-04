import styles from './SelectItem.module.css';
import { SelectItemProps } from './SelectItem.types';

const SelectItem = ({ icon, language }: SelectItemProps) => {
  return (
    <div className={styles.SelectItem}>
      {icon({})}
      <div className={styles.checkboxWrapper}>
        <p className={styles.checkboxText}>{language}</p>
        <div className={styles.checkbox}>
          <input
            className={styles.checkboxInput}
            hidden
            type="checkbox"
            id={language}
          />
          <label className={styles.checkboxLabel} htmlFor={language}></label>
        </div>
      </div>
    </div>
  );
};

export { SelectItem };
