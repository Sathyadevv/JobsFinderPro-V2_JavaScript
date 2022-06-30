import React from 'react'
import PostJob from '../../../component/dashBoard-components/postjob/PostJob'
import Aside from '../../../component/dashBoard-components/aside/Aside'

import TopBar from '../../../component/dashBoard-components/topbar/TopBar'
import styles from "./dash-postjob.module.scss"

function DashBoard() {
  return (
    <div className={styles.dashBoard}>
        <Aside />
        <TopBar />
        <PostJob />
    </div>
  )
}

export default DashBoard