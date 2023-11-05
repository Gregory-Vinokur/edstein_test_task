import { useContext } from 'react';
import DropdownContext from './DropdownContext';

export { DropdownProvider } from './DropdownProvider';

export function useDropdown() {
  return useContext(DropdownContext);
}
