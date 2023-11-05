import styles from './SearchBar.module.css';
import SearchIcon from '../../../../assets/searchIcon.svg?react';
import { useDropdown } from '../../../../store';
import { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const { onSearch } = useDropdown();

  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchText);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const onlyLettersText = text.replace(/[^A-Za-zА-Яа-я]/g, '');
    setSearchText(onlyLettersText);
    onSearch(onlyLettersText);
  };

  return (
    <form className={styles.SearchBar} onSubmit={handleSearch}>
      <SearchIcon />
      <input
        id="search"
        className={styles.searchInput}
        type="text"
        placeholder="Поиск"
        value={searchText}
        onChange={handleInputChange}
      />
    </form>
  );
};

export { SearchBar };
