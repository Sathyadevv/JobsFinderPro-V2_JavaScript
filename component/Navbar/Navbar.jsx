// import React from 'react'
// import style from '../../styles/Home.module.css'
// function Navbar() {
//   return (
//     <div>
//       <div >
//         <nav>
//           <div>
//             <h2>Logo</h2>
//             <div className='nav-links'>
//               <li>Log-in</li>
//               <li>Register</li>
//               <li>Post job</li>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <p className={styles.mainLOgo}>LOGO</p>
        <div className={styles.navLinks}>
          <Link href={"/dashboard/postjob"}>
          <p className={styles.login}>Login</p>
          </Link>
          <Link href={"/account/signup"}>
          <p className={styles.login}>Register</p>
          </Link>
          <div className={styles.postJobBtn}>
            <Link href={"/dashboard"}>
              <p className={styles.postJob}>Post Job</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
