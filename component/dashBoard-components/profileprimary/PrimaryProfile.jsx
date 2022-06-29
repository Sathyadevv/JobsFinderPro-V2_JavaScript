import React from 'react'
import styles from './primaryprofile.module.scss'
import Image from 'next/image'

function PrimaryProfile() {
  return (
    <div className={styles.profile}>
        <div>
         <Image src='/assets/dashboardIcons/profileicon.png' height='92px'width='92px' />
        </div>
        <div>
            <h2>Sathya Raj</h2>
            <h3>Quality Manager</h3>
            <h4>Chennai,Tamil</h4>
        </div>
        <img className={styles.styleImage} src='https://static.overlay-tech.com/assets/bce75d0a-285f-4fb0-83e6-e06bbacd9aec.svg'/>

    </div>
  )
}

export default PrimaryProfile