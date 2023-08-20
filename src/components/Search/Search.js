import React from 'react'
import styles from './search.module.css'
import {LuSearch} from 'react-icons/lu'

export default function Search() {
  return (
    <div className={styles.search}>
        <div className={styles.searchBar}>

        <LuSearch className={styles.searchIcon}/>
        <input type='search' placeholder='Search all products here...' className={styles.input}/>
        </div>
    </div>
  )
}
