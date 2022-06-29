import React from 'react'
import styles from "./topbar.module.scss"

function TopBar() {
  return (
    <div className={styles.topBar}>
        <h2 className={styles.heading}>Dashboard</h2>
        <div className={styles.searchContainer}>
            <input type="text" placeholder="Search for Jobs"/>
            <button>Search</button>
        </div>
    </div>
  )
}

export default TopBar