import React from "react";
import styles from './Footer.module.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <h2 className={styles.brandName}>MORENT</h2>
          <p className={styles.brandDescription}>
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>About</h3>
            <ul>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Community</h3>
            <ul>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Socials</h3>
            <ul>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.footerText}>©2022 MORENT. All rights reserved</p>
        <div className={styles.footerLinks}>
          <span className={styles.linkItem}>Privacy & Policy</span>
          <span className={styles.linkItem}>Terms & Condition</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
