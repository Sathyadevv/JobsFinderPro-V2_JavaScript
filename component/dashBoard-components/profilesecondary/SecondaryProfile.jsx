// import React from 'react'

// function SecondaryProfile() {
//   return (
//     <div className={styles.secondaryProfile}></div>
//   )
// }

// export default SecondaryProfile

import React from "react";
import styles from "./secondaryprofile.module.scss";

const SecondaryProfile = () => {
  return (
    <div className={styles.secondaryProfile}>
      <div className={styles.component4}>
        <div className={styles.card}>
          <p className={styles.gender}>Gender</p>
          <p className={styles.male}>Male</p>
          <p className={styles.dateOfBirth}>Date of Birth</p>
          <p className={styles.num04061999}>04/06/1999</p>
        </div>
        <div className={styles.cardTwo}>
          <p className={styles.jobPosts}>Contact details</p>
          <p className={styles.num946758695}>946758695</p>
          <p className={styles.sghgCom}>sghg&#64;gmail.com</p>
        </div>
        <div className={styles.cardThree}>
          <p className={styles.educationQualification}>
            Education Qualification{" "}
          </p>
          <p className={styles.beMechanical74}>BE Mechanical (74%)</p>
          <p className={styles.experience}>Experience</p>
          <p className={styles.num3Years}>3 years</p>
        </div>
        <div className={styles.cardFour}>
          <p className={styles.technicalSkills}>Technical Skills </p>
          <p className={styles.qualityAnalysisQaInspectionCadAnd}>
            Quality Analysis, QA Inspection ,CAD And CAMM.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondaryProfile;
