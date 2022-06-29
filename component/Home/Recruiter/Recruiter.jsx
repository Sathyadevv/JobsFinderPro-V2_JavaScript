import React from "react";
import styles from "./recruiter.module.scss";

const Recruiter = () => {
  return (
    <div className={styles.section1}>
      <p className={styles.sectionHeading}>For Recruiters</p>
      <div className={styles.flexWrapperOne}>
        <div className={styles.flexWrapperTwo}>
          <p className={styles.getAJobYouWantIn3SimpleSteps}>
          Pick a Right Candidate For your Firm
          </p>
          <div className={styles.jobSeekerRegister}>
            <img
              alt=""
              className={styles.bxupload}
              src="https://static.overlay-tech.com/assets/6da4d876-5a14-46c2-8e0e-0c6dae07a307.svg"
            />
            <div className={styles.relativeWrapperOne}>
              {/* <div className={styles.frame28} /> */}
              <p className={styles.register}>Post Job</p>
            </div>
          </div>
        </div>
        <div className={styles.flexWrapperThree}>
          <p className={styles.num1CreateAccount}>1.POST A JOB</p>
          <img
            alt=""
            className={styles.image3}
            src="https://static.overlay-tech.com/assets/d10b14dc-f2ea-4f88-a639-3138ac53b6a8.png"
          />
          <p className={styles.num2UploadDetails}>2.TRANSPARENT SEARCH</p>
          <img
            alt=""
            className={styles.image4}
            src="https://static.overlay-tech.com/assets/49a89ab2-7382-488f-859b-ec63f80755fd.png"
          />
          <p className={styles.num3GetYourDreamJob}>3.RESUMES DEVERSITY</p>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;
