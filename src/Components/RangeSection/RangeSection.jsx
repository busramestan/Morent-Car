'use client'
import React, { useState } from 'react'
import RangePicker from '../RangePicker/RangePicker'
import RangeButton from './RangeButton/RangeButton'
import styles from './RangeSection.module.scss'

export default function RangeSection({isSwappable = true,
  defaultValues = {
    pickUp: { location: '', date: '', time: '' },
    dropOff: { location: '', date: '', time: '' },
  },
  newRangePickerDiv = styles.rangePickerDiv,
  newChooseDiv = styles.chooseDiv,
  hrDisabled= true,
  newLabelDiv= styles.labelDiv,
  newPickerDiv,
}) {
    const [activePicker, setActivePicker] = useState(null);
    const [pickUpLocation, setPickUpLocation] = useState('');
    const [dropOffLocation, setDropOffLocation] = useState('');
    const [pickUpDate, setPickUpDate] = useState('');
    const [dropOffDate, setDropOffDate] = useState('');
    const [pickUpTime, setPickUpTime] = useState('');
    const [dropOffTime, setDropOffTime] = useState('');


    const locationPick = pickUpLocation || defaultValues.pickUp.location;
    const datePick = pickUpDate || defaultValues.pickUp.date;
    const timePick = pickUpTime || defaultValues.pickUp.time;
    const locationDrop = dropOffLocation|| defaultValues.dropOff.location;
    const dateDrop = dropOffDate || defaultValues.dropOff.date;
    const timeDrop = dropOffTime || defaultValues.dropOff.time;
    
    const handleActivePicker = (picker) => {
        setActivePicker((prev) => (prev === picker ? prev : picker));
      };
    
      const swapLocations = () => {
        const tempLocation = pickUpLocation; 
        setPickUpLocation(dropOffLocation); 
        setDropOffLocation(tempLocation); 

        setActivePicker((prev) => {
          if (prev === 'Pick-Up') return 'Drop-Off';
          if (prev === 'Drop-Off') return 'Pick-Up';
          return prev;
      });
      };


 
    const isDisabled = (type) => {
    return defaultValues[type]?.location || defaultValues[type]?.date || defaultValues[type]?.time;
   }
    


  return (
    <div className={`${styles.rangePickerDiv} ${newRangePickerDiv}`}>
        <RangePicker pickOrDrop={'Pick-Up'} 
        isActive={activePicker === 'Pick-Up'}
        whichActivePicker={ () => handleActivePicker('Pick-Up')} 
        locationValue={locationPick}
        onLocationChange={setPickUpLocation}
        dateValue={datePick}
        onDateChange={setPickUpDate}
        timeValue={timePick}
        onTimeChange={setPickUpTime}
        disabled={isDisabled('pickUp')}
        newChooseDiv={newChooseDiv}
        hrDisabled= {hrDisabled}
        newLabelDiv= {newLabelDiv}
        newPickerDiv={newPickerDiv}
        />
        {isSwappable && <RangeButton onClick={swapLocations} />}
        <RangePicker pickOrDrop={'Drop-Off'} 
        isActive={activePicker === 'Drop-Off'} 
        whichActivePicker={() => handleActivePicker('Drop-Off')}
        locationValue={locationDrop}
        onLocationChange={setDropOffLocation}
        dateValue={dateDrop}
        onDateChange={setDropOffDate}
        timeValue={timeDrop}
        onTimeChange={setDropOffTime} 
        disabled={isDisabled('dropOff')}
        newChooseDiv={newChooseDiv}
        hrDisabled= {hrDisabled}
        newLabelDiv= {newLabelDiv}
        newPickerDiv={newPickerDiv}
        />
    </div>
  )
}
