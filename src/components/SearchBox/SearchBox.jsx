import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      className={styles.searchBox}
      value={filter}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;