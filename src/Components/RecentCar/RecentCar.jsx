'use client';
import React, { useState, useRef } from 'react';
import styles from './RecentCar.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import carsData from '@/utils/carsDataRecentCar';

export default function RecentCar() {
    const [showAll, setShowAll] = useState(false);
    const scrollRef = useRef(null);

    const displayedCars = showAll ? carsData : carsData.slice(0, 6);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            if (direction === 'left') {
                current.scrollLeft -= 300; // Sol buton tıklaması
            } else {
                current.scrollLeft += 300; // Sağ buton tıklaması
            }
        }
    };

    return (
        <div className={styles.recentCar}>
            <div className={styles.header}>
                <h2>Recent Car</h2>
                <button onClick={() => setShowAll(!showAll)} className={styles.viewAll}>
                    {showAll ? 'Show Less' : 'View All'}
                </button>
            </div>
            <div className={styles.carouselWrapper}>
                <button
                    className={`${styles.scrollButton} ${styles.left}`}
                    onClick={() => scroll('left')}
                >
                    &#10094;
                </button>
                <div className={styles.cardsContainer} ref={scrollRef}>
                    {displayedCars.map((car) => (
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
                        />
                    ))}
                </div>
                <button
                    className={`${styles.scrollButton} ${styles.right}`}
                    onClick={() => scroll('right')}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
}