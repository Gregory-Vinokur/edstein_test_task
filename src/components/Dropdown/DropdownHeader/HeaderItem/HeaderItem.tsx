import styles from './HeaderItem.module.css';
import { HeaderItemProps } from './HeaderItem.types';
import CloseIcon from '../../../../assets/closeIcon.svg?react';
import { useDropdown } from '../../../../store';

const HeaderItem = ({ text }: HeaderItemProps) => {
  const { removeSelected } = useDropdown();
  return (
    <div className={styles.HeaderItem}>
      {text}
      <CloseIcon
        className={styles.CloseIcon}
        onClick={() => removeSelected(text)}
      />
    </div>
  );
};

export { HeaderItem };
