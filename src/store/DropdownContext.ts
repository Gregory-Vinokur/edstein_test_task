import { createContext } from "react";
import { IDropdownContext } from "./DropdownContext.types";
import { languages } from "../constants";

const DropdownContext = createContext<IDropdownContext>({
  isOpen: false,
  showIcons: true,
  multiselectEnabled: true,
  selectedLanguages: [],
  langs: languages,
  onToggleDropDown: () => { },
  onToggleIcons: () => { },
  onToggleMultiselect: () => { },
  handleCheckboxChange: () => { },
  removeSelected: () => { },
  onSearch: () => { },
});

export default DropdownContext;