"use client";
import React, { useState } from "react";
import styles from "./PopularCars.module.scss";
import carsData from "./PopularCarsData";
import ProductCard from "../ProductCard/ProductCard";

const PopularCars = () => {
  const [showAll, setShowAll] = useState(false);

  const likedCardIds = [1, 3, 6, 8, 10, 12];

  const visibleCars = showAll ? carsData : carsData.slice(0, 4);

  return (
    <div className={styles.popularCars}>
      <div className={styles.header}>
        <h2 className={styles.title}>Popular Cars</h2>
        <button
          className={styles.viewAllButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
      <div className={styles.cardContainer}>
        {visibleCars.map((car) => (
          <ProductCard
            key={car.id}
            id={car.id}
            carName={car.name}
            carsType={car.type}
            carImage={car.image}
            gas={car.fuel}
            gear={car.transmission}
            user={car.capacity}
            price={car.price}
            discount={car.discount}
            isInitiallyLiked={likedCardIds.includes(car.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
