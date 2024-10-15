import React from 'react'
import styles from "./Top.module.css"
import { getImageUrl } from '../../utils'

function Topbar() {
  return (
    <section className={styles.container}>
        <div className={styles.leftSide}>
            
            <div className={styles.inputField}>
                <img className={styles.searchIcon} src={getImageUrl("topBar/search.png")} alt="searchIcon" />
                <input className={styles.search} type="text" name="" id="" placeholder='Search Stockit' />
            </div>
            
        </div>
        <div className={styles.rightSide}>
            <div className={styles.iconSection}>
                <img className={styles.topBarIcon} src={getImageUrl("topBar/message.png")} alt="message" />
                <img className={styles.topBarIcon} src={getImageUrl("topBar/notification.png")} alt="notification" />
            </div>
            <div className={styles.profileSection}>
                <img className={styles.topBarIcon} src={getImageUrl("topBar/profile.png")} alt="message" />
                <p className={styles.profileName}>Macsframe</p>
            </div>
        </div>

    </section>
  )
}

export default Topbar
