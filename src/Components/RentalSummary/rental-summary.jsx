"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './rental-summary.module.scss';

const RentalSummary = ({ car }) => {

    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const couponList = {
        'KASIM10': 10,
        'YILSONU15': 15,
        'BLACKFRIDAY20': 20,
    };

    const handleApplyPromo = () => {
        if (!couponList[promoCode]) {
            setErrorMessage('Invalid coupon code!');
            setPromoCode('');
            setTimeout(() => {
                setErrorMessage('');
            }, 2000);
            return;
        }
    
        if (appliedCoupon) {
            setErrorMessage('You can enter maximum 1 coupon code.');
            setPromoCode('');
            setTimeout(() => {
                setErrorMessage('');
            }, 2000);
            return;
        }
    
        setDiscount(couponList[promoCode]);
        setAppliedCoupon(promoCode);
        setPromoCode('');
        setErrorMessage('');
    };
    
    

    const handleRemovePromo = () => {
        setDiscount(0);
        setAppliedCoupon(null);
    };

    const totalPrice = car.price + car.tax - discount;

    return (
        <div className={styles.rentalSummary}>
            <h2 className={styles.title}>Rental Summary</h2>
            <p className={styles.description}>
                Prices may change depending on the length of the rental and the price of your rental car.
            </p>
            <div className={styles.carInfo}>
                <div className={styles.carImageCard} >
                    <img src={car.image} alt={car.name} className={styles.carImage} />
                </div>
                <div className={styles.carDetails}>
                    <h3 className={styles.carName}>{car.name}</h3>
                    <div className={styles.rating}>
                        <span> {'★'.repeat(Math.floor(car.rating))}{'☆'.repeat(5 - Math.floor(car.rating))}</span>
                        <span className={styles.reviews}>{car.reviews}+ Reviewer</span>
                    </div>
                </div>
            </div>
            <div className={styles.priceDetails}>
                <div className={styles.priceRow}>
                    <span>Subtotal</span>
                    <span className={styles.priceRowData}>${car.price.toFixed(2)}</span>
                </div>
                <div className={styles.priceRow}>
                    <span>Tax</span>
                    <span className={styles.priceRowData}>${car.tax.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                    <div className={styles.priceRow}>
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                    </div>
                )}
            </div>
            {appliedCoupon && (
                <div className={styles.appliedCoupon}>
                    <span>"{appliedCoupon}" applied</span>
                    <button className={styles.removeButton} onClick={handleRemovePromo}>×</button>
                </div>
            )}
            {errorMessage && (
                <div className={styles.errorMessage}>
                    {errorMessage}
                </div>
            )}
            <div className={styles.promoCodeContainer}>
                <input
                    type="text"
                    placeholder="Apply promo code"
                    className={styles.promoInput}
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleApplyPromo();
                        }
                    }}
                />
                <button className={styles.promoButton} onClick={handleApplyPromo} disabled={!promoCode.trim()}>Apply now</button>
            </div>
            <div className={styles.priceRowTotal}>
                <div>
                    <span>Total Rental Price</span>
                    <p className={styles.totalNote}>Overall price and includes rental discount</p>
                </div>
                <span className={styles.priceRowTotalData}>${totalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default RentalSummary;
