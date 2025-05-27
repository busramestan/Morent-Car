"use client";
import React, { useState } from "react";
import styles from "./RecommendationCarSection.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import carsData from "@/utils/carsDataRecommendationCar";

const RecomendationCarSection = () => {
  const [showAll, setShowAll] = useState(false);

  const likedCardIds = [2, 4, 5, 7, 10, 12];

  const visibleCars = showAll ? carsData : carsData.slice(0, 8);

  return (
    <div className={styles.recommendationCars}>
      <div className={styles.title}>Recommendation Car</div>
      <div className={styles.cardContainer}>
        {visibleCars.map((car) => (
          <ProductCard
            key={car.id}
            id={car.id}
            carName={car.carName}
            carsType={car.carsType}
            carImage={car.carImage}
            gas={car.gas}
            gear={car.gear}
            user={car.user}
            price={car.price}
            discount={car.discount}
            isInitiallyLiked={likedCardIds.includes(car.id)}
          />
        ))}
      </div>
      <div className={styles.viewAllButton}>
          <button
            className={styles.btn}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More Car"}
          </button>
        </div>
    </div>
  );
};

export default RecomendationCarSection;
