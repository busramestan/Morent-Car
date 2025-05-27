import React from 'react'
import RangeSection from '../RangeSection/RangeSection'
import RentalDetailsStyles from './AdminRentalDetails.module.scss'
import Image from 'next/image';

export default function AdminRentalDetails({ carRentalDetail }) {

  const pickUp = carRentalDetail.pickup

  const dropOff = carRentalDetail.dropoff

  return (
    <div className={RentalDetailsStyles.card}>

      <h2 className={RentalDetailsStyles.title}>Details Rental</h2>
      <Image src={carRentalDetail.mapImage} className={RentalDetailsStyles.mapImage}/>

      <div className={RentalDetailsStyles.carDiv}>
        <div className={RentalDetailsStyles.carContent}>
            <Image src={carRentalDetail.carImage}/>
            <div className={RentalDetailsStyles.carTitles}>
              <h3>{carRentalDetail.carName}</h3>
              <p>{carRentalDetail.carModel}</p>
            </div>
        </div>
        <div>
          <p className={RentalDetailsStyles.orderId}>#{carRentalDetail.orderId}</p>
        </div>
      </div>
    
      <RangeSection 
        isSwappable={false}
        defaultValues={{pickUp, dropOff}} 
        newRangePickerDiv={RentalDetailsStyles.newRangeDiv} 
        newPickerDiv={RentalDetailsStyles.newPickerDiv} 
        newChooseDiv={RentalDetailsStyles.newChooseDiv}
      /> 
      <hr className={RentalDetailsStyles.color}/>
      <div className={RentalDetailsStyles.subContent}>
        <div>
          <h3 className={RentalDetailsStyles.subTitle}>Total Rental Price</h3>
          <p className={RentalDetailsStyles.subDesc}>Overall price and includes rental discount</p>
        </div>
        <div>
          <p className={RentalDetailsStyles.price}>${carRentalDetail.totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
