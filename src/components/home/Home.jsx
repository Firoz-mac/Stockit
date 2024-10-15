import React from 'react'
import styles from './Home.module.css'
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../topbar/Topbar'
import Feed from '../feed/Feed'

function Home() {
  return (
    <section className={styles.home}>
        <div className={styles.left}>
            <Sidebar/>
            

        </div>
        <div className={styles.right}>
          <Topbar/>
          <Feed/>
        </div>

    </section>
  )
}

export default Home
