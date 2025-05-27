'use client'
import React, {useState, useEffect} from 'react'
import Picker from './Picker/Picker'
import styles from '../RangePicker/RangePicker.module.scss';

export default function RangePicker({
  pickOrDrop, 
  isActive, 
  whichActivePicker, 
  locationValue,
  onLocationChange,
  dateValue,
  onDateChange,
  timeValue,
  onTimeChange,
  newChooseDiv = styles.chooseDiv,
  hrDisabled= false,
  newLabelDiv= styles.labelDiv,
  newPickerDiv= styles.pickerDiv,
  disabled=true,
}) {
  const [activePicker, setActivePicker] = useState(null);
 
  const handleActivePicker =(pickerType) => {
    setActivePicker((current) => (current === pickerType ? null : pickerType));
  }
  
  useEffect(() => {
    if (!isActive) {
      setActivePicker(null);
    }
  }, [isActive]);
;

  return (
    <div className={`${styles.pickerDiv} ${newPickerDiv}`} onClick={whichActivePicker}>
        <div className={styles.dotDiv}>
        <div className={`${styles.dot} ${isActive ? styles.active : " "}`}></div>
        <h1 className={styles.chooseHeader}>{pickOrDrop}</h1>
        </div>
        <div className={`${styles.chooseDiv} ${newChooseDiv}`}>
            <Picker pickerType={'Locations'} 
            isOpen={activePicker === 'Locations'} 
            onToggle={() => {handleActivePicker('Locations')}} 
            value={locationValue}
            onChange={onLocationChange}
            newLabelDiv={newLabelDiv}
            disabled={disabled}
            />
             {hrDisabled && <hr />}
            <Picker pickerType={'Date'} 
            isOpen={activePicker === 'Date'} 
            onToggle={() => {
            handleActivePicker('Date')}} 
            value={dateValue}
            onChange={onDateChange}
            newLabelDiv={newLabelDiv}
            disabled={disabled}
              />
             {hrDisabled && <hr />}
            <Picker pickerType={'Time'} 
            isOpen={activePicker === 'Time'} 
            onToggle={() => {handleActivePicker('Time')}}
            value={timeValue}
            onChange={onTimeChange}
            newLabelDiv={newLabelDiv} 
            disabled={disabled}
            />
        </div>
    </div>
  )
}
