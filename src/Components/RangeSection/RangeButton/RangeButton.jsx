'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Swap from '../../../../public/Picker/Swap.svg'
import styles from '../RangeButton/RangeButton.module.scss'

export default function RangeButton({onClick}) {

  return (
    <button className={styles.buttonDiv} onClick={onClick}>
        <Image src={Swap} alt='SwapImg'/>
    </button>
  )
}

