'use client'
import React, { useState } from 'react'
import imgStyles from './ProductImages.module.scss'

export default function ProductImages({carImage ,board_title, board_desc}) {
  
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className={imgStyles.imageGallery}>

      <div>
        <img className={imgStyles.bigImg} src={carImage[currentIndex].path.src} alt='car' />
      </div>
      
      {currentIndex === 0 && (
        <div className={imgStyles.overlayText}>
          <h2 className={imgStyles.boardTitle}>{board_title}</h2>
          <p className={imgStyles.boardDesc}>{board_desc}</p>
        </div>
      )
      }

    <div className={imgStyles.subImg}>
        {carImage && carImage.map((img, index) => (
      <img className={`${imgStyles.miniImg} ${index === currentIndex ? imgStyles.active : ''}` } key={index} src={img.path.src} alt='car' onClick={() => setCurrentIndex(index)}/>
    ))}
    </div>

  </div>

  )
}
