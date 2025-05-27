"use client"
import React, { useEffect, useState } from 'react';
import ProductImages from './ProductImages/ProductImages';
import ProductDetailStyles from './ProductDetailView.module.scss';
import ProductProps from './ProductProps/ProductProps';
import carDetails from '@/constant/carDetails';

export default function ProductDetailView({ id }) {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ürünü ID'ye göre bulma
  useEffect(() => {
    const foundCarDetail = carDetails.find((carDetail) => carDetail.id === parseInt(id));
    if (foundCarDetail) {
        setCar(foundCarDetail);
    } else {
      console.error('Ürün bulunamadı!');
    }
    setLoading(false);
  }, [id]);

  // Eğer ürün yükleniyorsa
  if(loading) {
    return (
    <div className={ProductDetailStyles.loaderContainer}>
      <div className={ProductDetailStyles.loader}></div>
    </div>
    )
  }
  
  // Eğer ürün bulunamazsa
  if (!car) {
    return <p>Ürün Bulunamadı..</p>;
  }

  const { car_images, board_title, board_desc, car_props, ...otherProps } = car;

  return (
    <div className={ProductDetailStyles.mainDetailContent}>
      <ProductImages
        carImage={car_images}
        board_title={board_title}
        board_desc={board_desc}
      />
      <ProductProps productProps={{ ...otherProps, car_props }} />
    </div>
  );
}
