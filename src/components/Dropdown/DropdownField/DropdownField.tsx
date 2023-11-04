import styles from './DropdownField.module.css';
import { languages, languagesIcons } from './DropdownField.service';
import { LangKey } from './DropdownField.types';
import { SearchBar } from './SearchBar';
import { SelectItem } from './SelectItem';

const DropdownField = () => {
  return (
    <div className={styles.DropdownField}>
      <SearchBar />
      {Object.entries(languages).map(([langKey, language]) => (
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
