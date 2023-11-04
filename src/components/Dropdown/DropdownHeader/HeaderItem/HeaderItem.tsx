import styles from './HeaderItem.module.css';
import { HeaderItemProps } from './HeaderItem.types';
import CloseIcon from '../../../../assets/closeIcon.svg?react';

const HeaderItem = ({ text }: HeaderItemProps) => {
  return (
    <div className={styles.HeaderItem}>
      {text}
      <CloseIcon />
    </div>
  );
};

export { HeaderItem };
