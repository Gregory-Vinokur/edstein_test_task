import styles from './DropdownField.module.css';
import { languagesIcons } from './DropdownField.service';
import { LangKey } from '../../../types';
import { SearchBar } from './SearchBar';
import { SelectItem } from './SelectItem';
import { useDropdown } from '../../../store';

const DropdownField = () => {
  const { isOpen, langs } = useDropdown();
  return (
    <div className={`${styles.DropdownField} ${isOpen && styles.open}`}>
      <SearchBar />
      {Object.entries(langs).map(([langKey, language]) => (
        <SelectItem
          key={langKey as LangKey}
          icon={languagesIcons[langKey as LangKey]}
          language={language}
        />
      ))}
    </div>
  );
};

export { DropdownField };
