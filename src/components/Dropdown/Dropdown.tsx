import { Options } from './Options';
import { DropdownHeader } from './DropdownHeader';
import { DropdownField } from './DropdownField';
import styles from './Dropdown.module.css';
import { DropdownProvider } from '../../store';

const Dropdown = () => {
  return (
    <DropdownProvider>
      <div className={styles.Dropdown}>
        <Options />
        <DropdownHeader />
        <DropdownField />
      </div>
    </DropdownProvider>
  );
};

export { Dropdown };
