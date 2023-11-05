import styles from './DropdownHeader.module.css';
import { HeaderItem } from './HeaderItem';
import Arrow from '../../../assets/arrowTop.svg?react';
import { useDropdown } from './../../../store';

const DropdownHeader = () => {
  const { selectedLanguages, isOpen, onToggleDropDown } = useDropdown();
  return (
    <div>
      <h4 className={styles.title}>Язык</h4>
      <div className={styles.toggleField}>
        {selectedLanguages.length === 0 && (
          <p className={styles.chooseLangText}>Выберите язык</p>
        )}
        {selectedLanguages.length > 0 &&
          selectedLanguages.map((lang) => (
            <HeaderItem text={lang} key={lang} />
          ))}
        <div
          className={`${styles.arrowContainer} ${!isOpen && styles.hide}`}
          onClick={onToggleDropDown}
        >
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export { DropdownHeader };
