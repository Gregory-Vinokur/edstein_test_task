import { Lang, LangKey } from "../types";

export interface IDropdownContext {
  isOpen: boolean;
  showIcons: boolean,
  multiselectEnabled: boolean,
  selectedLanguages: Lang[];
  langs: Record<LangKey, Lang>;
  onToggleDropDown: () => void;
  onToggleIcons: () => void;
  onToggleMultiselect: () => void;
  handleCheckboxChange: (language: Lang) => void;
  removeSelected: (language: Lang) => void;
  onSearch: (text: string) => void;
}