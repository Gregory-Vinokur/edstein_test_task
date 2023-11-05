import { useState } from 'react';
import DropdownContext from './DropdownContext';
import { Lang, LangKey } from '../types';
import { languages } from './../components/Dropdown/DropdownField/DropdownField.service';

const DropdownProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  const [multiselectEnabled, setMultiselectEnabled] = useState(true);
  const [langs, setLangs] = useState<Record<LangKey, Lang>>(languages);
  const [selectedLanguages, setSelectedLanguages] = useState<Lang[]>([]);

  const onToggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const onToggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const onToggleMultiselect = () => {
    setMultiselectEnabled(!multiselectEnabled);
  };

  const removeSelected = (language: Lang) => {
    setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
  };

  const onSearch = (text: string) => {
    const languageEntries = Object.entries(languages) as [LangKey, Lang][];

    const filteredLanguages = languageEntries.filter(([, value]) => {
      return value.toLowerCase().startsWith(text.toLowerCase());
    });

    const filteredLanguagesObject = Object.fromEntries(
      filteredLanguages
    ) as Record<LangKey, Lang>;
    setLangs(filteredLanguagesObject);
  };

  const handleCheckboxChange = (language: Lang) => {
    if (multiselectEnabled) {
      if (selectedLanguages.includes(language)) {
        removeSelected(language);
      } else {
        setSelectedLanguages([...selectedLanguages, language]);
      }
    } else {
      if (selectedLanguages.includes(language)) {
        removeSelected(language);
      } else {
        setSelectedLanguages([language]);
      }
    }
  };

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        showIcons,
        multiselectEnabled,
        selectedLanguages,
        langs,
        onToggleDropDown,
        onToggleIcons,
        onToggleMultiselect,
        handleCheckboxChange,
        removeSelected,
        onSearch,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export { DropdownProvider };
