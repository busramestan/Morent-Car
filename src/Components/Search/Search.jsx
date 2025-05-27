"use client";
import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";

function Search() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 520);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 520);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <div className={styles.searchBarLeft}>
          <button className={styles.searchIcon}>
            <i className="fas fa-search"></i>
          </button>
          <input type="text" placeholder="Search something here" />
        </div>
        {!isMobileView && (
          <button className={styles.filterIcon}>
            <i className="fas fa-sliders-h"></i>
          </button>
        )}
      </div>
      {isMobileView && (
        <button className={styles.filterIconMobile}>
          <i className="fas fa-sliders-h"></i>
        </button>
      )}
    </div>
  );
}

export default Search;
