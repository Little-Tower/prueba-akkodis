import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.searchBarMain}>
      <input placeholder='Filter podcasts...'/>
      <p>100</p>
    </div>
  )
}

export default SearchBar