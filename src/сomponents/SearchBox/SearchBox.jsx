import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;