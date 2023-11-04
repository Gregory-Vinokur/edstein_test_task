import styles from './SearchBar.module.css';
import SearchIcon from '../../../../assets/searchIcon.svg?react';

const SearchBar = () => {
  return (
    <form className={styles.SearchBar}>
      <SearchIcon />
      <input
        id="search"
        className={styles.searchInput}
        type="text"
        placeholder="Поиск"
      />
    </form>
  );
};

export { SearchBar };
