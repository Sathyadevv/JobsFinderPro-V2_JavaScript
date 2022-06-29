import React from 'react'
import Aside from '../../component/dashBoard-components/aside/Aside'
import PrimaryProfile from '../../component/dashBoard-components/profileprimary/PrimaryProfile'
import SecondaryProfile from '../../component/dashBoard-components/profilesecondary/SecondaryProfile'
import RecentJobs from '../../component/dashBoard-components/recentjobs/RecentJobs'
import TopBar from '../../component/dashBoard-components/topbar/TopBar'
import styles from "./dashboard.module.scss"

function DashBoard() {
  return (
    <div className={styles.dashBoard}>
        <Aside />
        <TopBar />
        <PrimaryProfile />
        <SecondaryProfile />
        <RecentJobs />
    </div>
  )
}

export default DashBoard