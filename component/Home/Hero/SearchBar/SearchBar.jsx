import React from "react";
import styles from "./searchBar.module.scss";

function SearchBar() {
  return (
    <div>
      <div className={styles.wrapperTwo}>
        <div className={styles.searchComponent}>
          <div className={styles.jobSearchInput}>
            <img
              alt=""
              className={styles.vector}
              src="https://static.overlay-tech.com/assets/411cc2d1-8b92-4aef-930e-1361807aeda7.svg"
            />
            <input
              className={styles.jobTitleOrKeyword}
              placeholder="Job title or keyword"
            />
          </div>
          <div className={styles.line1} />
          <div className={styles.lOcationSeachInput}>
              <img
                alt=""
                className={styles.group}
                src="https://static.overlay-tech.com/assets/e16b1efd-2803-4de2-a66c-8dd06b5cc979.svg"
              />
            <input
              className={styles.location}
              placeholder="Chennai ,Tamil nadu"
            />
          </div>
          <div className={styles.searchBtn}>
            <p className={styles.search}>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
