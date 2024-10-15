import React from 'react'
import styles from './Sidebar.module.css'
import { getImageUrl } from '../../utils'

function Sidebar() {
  return (
    <section className={styles.sidebar}>
        <div className={styles.logoSection}>
            <img className={styles.logoImg} src={getImageUrl("logo/logo.png")} alt="logo" />
            <p className={styles.name}>Stockit</p>
        </div>
        <div className={styles.ltotalInvestment}>
            <div className={styles.ltotalInvestmentCard}>
              <p className={styles.cardText}>Total Investment</p>
              <p className={styles.cardTextAmt}>$0</p>
            </div>
        </div>
        <div className={styles.menuSection}>

          <div className={styles.topMenu}>
            <div className={styles.menuItemSection}>
              <img className={styles.menuItemImg} src={getImageUrl("menuicons/home.png")} alt="home" />
              <p className={styles.menuItemText}>Home</p>
            </div>
            <div className={styles.menuItemSection}>
              <img className={styles.menuItemImg} src={getImageUrl("menuicons/dashboards.png")} alt="dashboard" />
              <p className={styles.menuItemText}>Dashboard</p>
            </div>
            <div className={styles.menuItemSection}>
              <img className={styles.menuItemImg} src={getImageUrl("menuicons/wallet.png")} alt="wallet" />
              <p className={styles.menuItemText}>Wallet</p>
            </div>
            <div className={styles.menuItemSection}>
              <img className={styles.menuItemImg} src={getImageUrl("menuicons/news.png")} alt="news" />
              <p className={styles.menuItemText}>News</p>
            </div>

          </div>
          <div className={styles.bottomMenu}>
              <div className={styles.menuItemSection}>
                <img className={styles.menuItemImg} src={getImageUrl("menuicons/community.png")} alt="community" />
                <p className={styles.menuItemText}>Community</p>
              </div>
              <div className={styles.menuItemSection}>
                <img className={styles.menuItemImg} src={getImageUrl("menuicons/settings.png")} alt="settings" />
                <p className={styles.menuItemText}>Settings</p>
              </div>
              <div className={styles.menuItemSection}>
                <img className={styles.menuItemImg} src={getImageUrl("menuicons/telephone.png")} alt="contact" />
                <p className={styles.menuItemText}>Contact us</p>
              </div>

          </div>

        </div>
        

    </section>
  )
}

export default Sidebar
