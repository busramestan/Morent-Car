'use client';
import React, { useState, useEffect } from 'react';
import styles from './Time.module.scss';

export default function TimePicker({ onSelectedTime }) {
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinutes, setSelectedMinutes] = useState("00"); 
  const hours = [];
  const minutes = [];

  for (let i = 0; i < 24; i++) {
    hours.push(i.toString().padStart(2, "0"));
  }

  for (let i = 0; i < 60; i++) {
    minutes.push(i.toString().padStart(2, "0"));
  }


  const updateSelectedTime = () => {
    const formattedTime = `${selectedHour}:${selectedMinutes}`;
    if (onSelectedTime) {
      onSelectedTime(formattedTime);
    }
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  const handleMinuteClick = (minute) => {
    setSelectedMinutes(minute);
  };

  return (
    <div className={styles.timePickerContainer}>
      <div className={styles.timeSelectDiv}>
        <div className={styles.scrollContainer}>
         <h4 className={styles.timeLabel}>Saat</h4>
          <div className={styles.scroll}>
            {hours.map((hour) => (
              <div
                key={hour}
                className={`${styles.scrollItem} ${hour === selectedHour ? styles.selected : ''}`}
                onClick={() => handleHourClick(hour)}
              >
                {hour}
              </div>
            ))}
          </div>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.scrollContainer}>
        <h4 className={styles.timeLabel}>Dakika</h4>
          <div className={styles.scroll}>
            {minutes.map((minute) => (
              <div
                key={minute}
                className={`${styles.scrollItem} ${minute === selectedMinutes ? styles.selected : ''}`}
                onClick={() => handleMinuteClick(minute)}
              >
                {minute}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={updateSelectedTime} className={styles.okButton}>
          OK
        </button>
      </div>
    </div>
  );
}
