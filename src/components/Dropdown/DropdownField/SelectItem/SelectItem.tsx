import { useDropdown } from '../../../../store';
import styles from './SelectItem.module.css';
import { SelectItemProps } from './SelectItem.types';

const SelectItem = ({ icon, language }: SelectItemProps) => {
  const { handleCheckboxChange, selectedLanguages, showIcons } = useDropdown();

  return (
    <div className={styles.SelectItem}>
      {showIcons && icon({})}
      <div className={styles.checkboxWrapper}>
        <p className={styles.checkboxText}>{language}</p>
        <div className={styles.checkbox}>
          <input
            className={styles.checkboxInput}
            hidden
            type="checkbox"
            id={language}
            onChange={() => handleCheckboxChange(language)}
            checked={selectedLanguages.includes(language)}
          />
          <label className={styles.checkboxLabel} htmlFor={language}></label>
        </div>
      </div>
    </div>
  );
};

export { SelectItem };
