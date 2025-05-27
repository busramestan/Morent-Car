'use client'
import React, { useState } from 'react'
import styles from './Date.module.scss'


const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function DatePicker({ onSelectedDate }) {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()) 
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()) 

  
  const handleDayClick = (day) => {
    const date = `${day}/${selectedMonth + 1}/${selectedYear}` 
    onSelectedDate(date) 
  }

 
  const generateDays = () => {
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1)
    const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0)
    const daysInMonth = lastDayOfMonth.getDate()
    const startDay = firstDayOfMonth.getDay()
    const days = []

   
    for (let i = 0; i < startDay; i++) {
      days.push(null)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }


 const handleDescreaseYearOrMonth = () => {
    if(selectedMonth === 0){
      setSelectedMonth(11)
      setSelectedYear(selectedYear -1)
    }else{
      setSelectedMonth(selectedMonth - 1);
    }
  }

 const handleIncreaseYearOrMonth = () => {
  if(selectedMonth === 11){
    setSelectedMonth(0)
    setSelectedYear(selectedYear +1)
  }else{
    setSelectedMonth(selectedMonth + 1);
  }
 }

  return (
    <div className={styles.datePickerDropdown}>
      <div className={styles.datePickerHeader}>
        <button onClick={handleDescreaseYearOrMonth} className={styles.btn}>
          &lt;
        </button>
        <span>{months[selectedMonth]} {selectedYear}</span>
        <button onClick={handleIncreaseYearOrMonth} className={styles.btn}>
          &gt;
        </button>
      </div>

      <div className={styles.datePickerDays}>
        {daysOfWeek.map((day, id) => (
          <div key={id} className={styles.dayOfWeek}>
            {day}
          </div>
        ))}

        {generateDays().map((day, i) => (
          <div
            key={i}
            className={`${styles.dateDay} ${day ? '' : styles.emptyDay}`}
            onClick={() => day && handleDayClick(day)}
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  )
}
