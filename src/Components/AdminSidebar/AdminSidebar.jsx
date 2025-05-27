'use client';
import React, { useState } from "react";
import Link from "next/link";
import styles from "./AdminSidebar.module.scss";
import {
  FaHome,
  FaCar,
  FaChartBar,
  FaWallet,
  FaInbox,
  FaCalendarAlt,
  FaCog,
  FaQuestionCircle,
  FaSun,
  FaMoon,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

function AdminSidebar({ section }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.mainMenu}>
          <h3 className={styles.menuTitle}>MAIN MENU</h3>
          <ul className={styles.menuList}>
            <li className={(!section || section === "") ? styles.active : ""}>
              <Link href="/admin/dashboard">
                <FaHome className={styles.menuIcon} /> Dashboard
              </Link>
            </li>
            <li className={section === "car-rent" ? styles.active : ""}>
              <Link href="/admin/car-rent">
                <FaCar className={styles.menuIcon} /> Car Rent
              </Link>
            </li>
            <li className={section === "insight" ? styles.active : ""}>
              <Link href="/admin/insight">
                <FaChartBar className={styles.menuIcon} /> Insight
              </Link>
            </li>
            <li className={section === "reimburse" ? styles.active : ""}>
              <Link href="/admin/reimburse">
                <FaWallet className={styles.menuIcon} /> Reimburse
              </Link>
            </li>
            <li className={section === "inbox" ? styles.active : ""}>
              <Link href="/admin/inbox">
                <FaInbox className={styles.menuIcon} /> Inbox
              </Link>
            </li>
            <li className={section === "calendar" ? styles.active : ""}>
              <Link href="/admin/calendar">
                <FaCalendarAlt className={styles.menuIcon} /> Calendar
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.preferences}>
          <h3 className={styles.menuTitle}>PREFERENCES</h3>
          <ul className={styles.menuList}>
            <li className={section === "settings" ? styles.active : ""}>
              <Link href="/admin/settings">
                <FaCog className={styles.menuIcon} /> Settings
              </Link>
            </li>
            <li className={section === "help-center" ? styles.active : ""}>
              <Link href="/admin/help-center">
                <FaQuestionCircle className={styles.menuIcon} /> Help & Center
              </Link>
            </li>
            <li className={styles.darkMode}>
              <FaMoon className={styles.menuIcon} /> Dark Mode
              <div className={styles.switch}>
                <input
                  type="checkbox"
                  id="dark-mode-toggle"
                  className={styles.toggleInput}
                />
                <label htmlFor="dark-mode-toggle" className={styles.toggleLabel}>
                  <FaMoon className={styles.moon} />
                  <FaSun className={styles.sun} />
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.logout}>
          <FaSignOutAlt className={styles.logoutIcon} /> Log Out
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
