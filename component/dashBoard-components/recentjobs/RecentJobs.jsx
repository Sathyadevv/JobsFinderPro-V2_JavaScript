import React from "react";
// import { BadgeTextSuccessLight } from "components";
import styles from "./recentjobs.module.scss";

const RecentJobs = () => {
  return (
    <div className={styles.recentJobs}>
      <div className={styles.component1}>
        <p className={styles.recentJobPosts}>Recent Job Posts</p>
        <div className={styles.group1}>
          <div className={styles.group7}>
            <p className={styles.jobTitle}>Job Title</p>
            <p className={styles.category}>Category</p>
            <p className={styles.openings}>Openings</p>
            <p className={styles.companyName}>Company Name</p>
            <p className={styles.status}>Status</p>
          </div>
          
        </div>
        <div className={styles.jobs}>
          <div className={styles.job}>
            <p className={styles.one}>Quality Engineer</p>
            <p className={styles.one}>Full Time</p>
            <p className={styles.one}>12</p>
            <p className={styles.one}>TVS Fastners Ltd</p>
            <button>See more</button>
          </div>
          <div className={styles.job}>
            <p className={styles.Two}>Assistant Engineer</p>
            <p className={styles.Two}>Full Time</p>
            <p className={styles.Two}>08</p>
            <p className={styles.Two}>Hybdaui Automatives</p>
            <button>See more</button>
          </div>
          <div className={styles.job}>
            <p className={styles.Three}>Assistant Manager</p>
            <p className={styles.wo}>Full Time</p>
            <p className={styles.Three}>12</p>
            <p className={styles.Three}>Honda Automatives </p>
            <button>See more</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecentJobs;





































{/* <div className={styles.group2}>
            <p className={styles.uiUxDesigner}>Quality Engineer</p>
            <p className={styles.fullTime}>Full Time</p>
            <p className={styles.num12}>12</p>
            <p className={styles.num5}>TVS Fastners</p>
            <BadgeTextSuccessLight
            className={styles.badgeTextSuccessLight}
          />
          </div>
          <div className={styles.group3}>
            <p className={styles.uiUxDesignerTwo}>Assistant Engineer</p>
            <p className={styles.fullTimeTwo}>Full Time</p>
            <p className={styles.num12Two}>08</p>
            <p className={styles.num5Two}>Hybdaui Automatives</p>
            <BadgeTextSuccessLight
            className={styles.badgeTextSuccessLight}
          />
          </div>
          <div className={styles.row4}>
            <p className={styles.uiUxDesignerThree}>Assistant Manager</p>
            <p className={styles.fullTimeTwo}>Full Time</p>
            <p className={styles.num12Three}>12</p>
            <p className={styles.num5Three}>Honda Automatives </p>
            <BadgeTextSuccessLight className={styles.badgeTextSuccessLight} />
          </div>
          <div className={styles.row03Two}>
            <p className={styles.uiUxDesignerFour}>CADD Engineer</p>
            <p className={styles.fullTimeTwo}>Full Time</p>
            <p className={styles.num12Four}>04</p>
            <p className={styles.num5Four}>NISSAIN Automatives</p>
            <BadgeTextSuccessLight
            className={styles.badgeTextSuccessLight}
          />
          </div>
          <div className={styles.row03Three}>
            <p className={styles.row4}>Store Incharge</p>
            <p className={styles.fullTimeTwo}>Full Time</p>
            <p className={styles.num12Five}>18</p>
            <p className={styles.num5Five}>Tubes INdia</p>
            <BadgeTextSuccessLight
            className={styles.badgeTextSuccessLight}
          />
          </div> */}