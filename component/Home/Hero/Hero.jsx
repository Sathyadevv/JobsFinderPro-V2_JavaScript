import React from "react";
import styles from "./hero.module.scss";
import SearchBar from "./SearchBar/SearchBar";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heroHeading}>
          Find the job of <br />
          your <strong className={styles.colorText}>Dreams</strong>
        </h1>
        <p className={styles.heroDescription}>
          Search by Job Title, Skills in Any Industry. One-click apply.
        </p>
        <SearchBar />
      </div>
      <img
        alt=""
        className={styles.heroImage}
        src="https://static.overlay-tech.com/assets/1482c2cf-dbeb-4327-b73d-208aa6830c26.svg"
      />
    </div>
  );
};

export default Hero;
