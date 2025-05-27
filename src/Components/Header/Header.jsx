"use client";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Search from "../Search/Search";

function Header({ isDashboard }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 690);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (!isDesktop) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <header
      className={`${styles.header} ${
        isDashboard ? styles.dashboardHeader : ""
      }`}
    >
      <div
        className={`${styles.logoWrapper} ${
          isDashboard ? styles.dashboardLogo : ""
        }`}
      >
        <h1 className={styles.logo}>
          <a href="/">MORENT</a>
        </h1>
      </div>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <div className={styles.headerRight}>
        <button className={styles.iconButton}>
          <i className="fas fa-heart"></i>
        </button>
        <button className={styles.iconButton}>
          <i className="fas fa-bell"></i>
          <span className={styles.notification}></span>
        </button>
        <button
          className={styles.iconButton}
          onClick={() => (window.location.href = "/admin/dashboard")}
        >
          <i className="fas fa-cog"></i>
        </button>
        <div className={styles.profileImageWrapper} onClick={toggleMenu}>
          <img
            src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995e13_66236537d4f46682e079b6ce_Casual%2520Portrait.webp"
            alt="Profile"
            className={styles.profileImage}
          />
          {isMenuOpen && (
            <div className={styles.menu}>
              <button className={styles.menuItem}>
                <i className="fas fa-heart"></i>
              </button>
              <button className={styles.menuItem}>
                <i className="fas fa-bell"></i>
              </button>
              <button className={styles.menuItem}>
                <i className="fas fa-cog"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
