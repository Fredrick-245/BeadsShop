import React from 'react'
import styles from './footer.module.css'
import {BsInstagram} from 'react-icons/bs'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footerLinks}>
            <a className={styles.footerLink} href='https://www.instagram.com/beadsbyannu/' target='_blank'>
                <BsInstagram className={styles.footerIcon}/>
            </a>
        </div>
        <p className={styles.footerDescription}>Having issues with your order calls us on: &nbsp; <a href='tel:+254741954679' >0741954679</a></p>

      <p className={styles.copyRights}>You can pick up your ordered products from Philadelphia house or use pickupmtaani.</p>
      <p className={styles.copyRights}>All rights are reserved &copy;:&nbsp;Developed by <a href='https://www.linkedin.com/in/fred-ndemo-1b0807241/' target="_self">Fredrick Ndemo</a></p>
    </div>
  )
}
