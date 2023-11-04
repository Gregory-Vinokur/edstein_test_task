import styles from './DropdownHeader.module.css';
import { HeaderItem } from './HeaderItem';
import Arrow from '../../../assets/arrowTop.svg?react';
import { useState } from 'react';

const DropdownHeader = () => {
  const [isArrowHidden, setArrowHidden] = useState(false);

  const onToggleArrow = () => {
    setArrowHidden(!isArrowHidden);
  };

  return (
    <div>
      <h4 className={styles.title}>Язык</h4>
      <div className={styles.toggleFiled}>
        <HeaderItem text="Английский" />
        <HeaderItem text="Немецкий" />
        <div
          className={`${styles.arrowContainer} ${
            isArrowHidden ? styles.hide : ''
          }`}
          onClick={onToggleArrow}
        >
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export { DropdownHeader };
