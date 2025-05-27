import React from 'react'
import RangeSection from '../RangeSection/RangeSection'
import styles from './RentalInfo.module.scss'

export default function RentalInfo() {
  return (
    <div className={styles.rentalDiv}>
        <h4 className={styles.rentalInfoHeader}>Rental Info</h4>
        <div className={styles.rentalInfoDiv}>
            <h5 className={styles.infoSubtitle}>Please select your rental date</h5>
            <h5 className={styles.infoSubtitle}>Step 2 of 4</h5>
        </div>
        <RangeSection
            defaultValues={{
              pickUp: {
                location: 'Ankara',
                date: '20.12.2024',
                time: '20.30'
              },
              dropOff: {
                location:'Bursa',
                date: '25.12.2024',
                time: '12.30'
              } 
            }}
            isSwappable={false}
            newRangePickerDiv={styles.newRangePicker}
            hrDisabled={false}
            newChooseDiv={styles.newChooseDiv}
            newLabelDiv={styles.newLabelDiv}
            newPickerDiv={styles.newPickerDiv}
        />
    </div>
  )
}
