import Head from 'next/head'
import Image from 'next/image'
import Add from '../component/Home/GoogleAdd/Add'
import Hero from '../component/Home/Hero/Hero'
import JobSeeker from '../component/Home/Job-seeker/JobSeeker'
import Recruiter from '../component/Home/Recruiter/Recruiter'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Hero />
        <Add />
        <JobSeeker />
        <Recruiter />
      </div>
    </div>
  )
}
