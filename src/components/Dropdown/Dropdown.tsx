import { Options } from './Options';
import { DropdownHeader } from './DropdownHeader';
import { DropdownField } from './DropdownField';
import styles from './Dropdown.module.css';

const Dropdown = () => {
  return (
    <div className={styles.Dropdown}>
      <Options />
      <DropdownHeader />
      <DropdownField />
    </div>
  );
};

export { Dropdown };
