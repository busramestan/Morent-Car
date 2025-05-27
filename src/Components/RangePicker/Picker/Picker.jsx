'use client'
import React, {useState} from 'react'
import styles from '../Picker/Picker.module.scss'
import Image from 'next/image'
import arrowDown from '../../../../public/Picker/arrow-down.svg'
import LocationPicker from '../Locations/Locations'
import DatePicker from '../Date/Date';
import TimePicker from '../Time/Time';

export default function Picker({pickerType, isOpen, onToggle,value, onChange, newLabelDiv=styles.labelDiv, disabled=false}) {
 
  const handleSelected = (selectedValue) => {
    if (onChange) {
      onChange(selectedValue); 
    }
    onToggle(); 
  };

  return (
    <div className={styles.pickerDiv}>
        <button className={`${styles.btnImage} ${disabled ? styles.disabled : ''}`} onClick={!disabled ? onToggle : undefined} disabled={disabled}>
        <h1 className={styles.pickerHeader}>{pickerType}</h1>
        <div className={`${styles.labelDiv} ${newLabelDiv}`}>
        <h2 className={styles.pickerLabel}>
        {value ||
        ( pickerType === 'Date'
              ? 'Select your date'
              : pickerType === 'Time'
              ? 'Select your time'
              : `Select your city`
        )}
          </h2>
           <Image src={arrowDown} alt='Arrow Down Image' className={`${styles.arrowDown} ${isOpen ? styles.open : ''}`}/>
          </div>
        </button>
        {
          isOpen && !disabled && (
            <div>
               {pickerType === 'Locations' ? (
                     <LocationPicker onSelectedCity={(location) => handleSelected(location)} />
                 ) : pickerType === 'Date' ? (
                       <DatePicker onSelectedDate={(date) => (handleSelected(date))} />
                 ) : pickerType === 'Time' ? (
                       <TimePicker onSelectedTime={(time) => (handleSelected(time))}/>
                 ) : null}
            </div>
          )
        }
    </div>
  )
}
