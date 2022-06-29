// import React from 'react'

// function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer


import React from "react";
// import { IconFacebook, IconLinkedin } from "components";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoBox}>
          <p className={styles.footerLogo}>LOGO</p>
          <p className={styles.footerDesc}>
            Job finder PRO is the largest job platform for career development
            and recruitment.
          </p>
        </div>
        <div className={styles.flexWrapperOne}>
          <div className={styles.addressComponent}>
            <p className={styles.addressBox}>Address</p>

            <p className={styles.email}>hello&#64;jobfinderpro.com</p>
            <p className={styles.address}>
              No 4 , Chennai, Tamil nadu ,<br />
              India.
            </p>
          </div>
          <div className={styles.policyComponent}>
            <p className={styles.policy}>Policy</p>

            <p className={styles.aboutUs}>About Us</p>
            <p className={styles.termsOfUse}>
              Terms of <br />
              Use
            </p>
            <p className={styles.aboutUs}>Privacy Policy</p>
          </div>
        </div>
      </div>
      <p className={styles.copyrightText}>
        © 2022 JOBFINDERPRO.org - All rights reserved.
      </p>
      {/* <div className={styles.socialIconComponent}>
        <img
          alt=""
          className={styles.iconInstagram}
          src="https://static.overlay-tech.com/assets/6e676cbc-60af-4670-af89-b74e31ed3ad5.svg"
        />
         <img
          alt=""
          className={styles.iconInstagram}
          src="https://static.overlay-tech.com/assets/6e676cbc-60af-4670-af89-b74e31ed3ad5.svg"
        />
         <img
          alt=""
          className={styles.iconInstagram}
          src="https://static.overlay-tech.com/assets/6e676cbc-60af-4670-af89-b74e31ed3ad5.svg"
        />
        <IconFacebook className={styles.iconFacebook} />
        <IconLinkedin className={styles.iconFacebook} />
      </div> */}
    </div>
  );
};

export default Footer;
