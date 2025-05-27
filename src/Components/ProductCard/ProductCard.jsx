"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heartIcon from "../../../public/common/heart.svg";
import fullHeartIcon from "../../../public/common/full-heart.svg";
import gass from "../../../public/productCard/gas-station.svg";
import carType from "../../../public/productCard/type.svg";
import userr from "../../../public/productCard/user.svg";
import styles from "./ProductCard.module.scss";
import Btn from "../FormElements/Button";
import BtnStyle from "../FormElements/Button.module.scss";

export default function ProductCard({ id, carName, carsType, carImage, gas, gear, user, price, discount = 0, isInitiallyLiked}) {
    const [isLiked, setisLiked] = useState(isInitiallyLiked);

  const handleClick = () => {
    setisLiked(!isLiked);
  };

  const discountPrice = discount ? price - discount : price;

  return (
    <Link href={`details/${id}`}>
      <div className={styles.cardDiv}>
        <div className={styles.carsNameTypeDiv}>
          <div className={styles.cardNameDiv}>
            <h1 className={styles.carsName}>{carName}</h1>
            <button className={styles.likeButton} onClick={handleClick}>
              <Image
                src={isLiked ? fullHeartIcon : heartIcon}
                alt="heart"
                key={id}
              />
            </button>
          </div>
          <h5 className={styles.carsType}>{carsType}</h5>
        </div>
        <div className={styles.carInfoDiv}>
          <div className={styles.carsImageWrapper}>
            <Image fill src={carImage} alt="car" className={styles.carsImage} />
            <div className={styles.blurBackground}></div>
          </div>
          <div className={styles.infoDiv}>
            <div className={styles.infoDirection}>
              <Image src={gass} alt="gas" />
              <h4 className={styles.info}>{gas}L</h4>
            </div>
            <div className={styles.infoDirection}>
              <Image src={carType} alt="type" />
              <h4 className={styles.info}>{gear}</h4>
            </div>
            <div className={styles.infoDirection}>
              <Image src={userr} alt="user" />
              <h4 className={styles.info}>{user} People</h4>
            </div>
          </div>
        </div>
        <div className={styles.priceDiv}>
          <div>
            <h1 className={styles.price}>
              ${discountPrice}.00/<span className={styles.priceSpan}>day</span>
            </h1>
            {discount > 0 && <h1 className={styles.discount}>${price}.00</h1>}
          </div>
          <Btn
            text={"Rent Now"}
            classes={[BtnStyle.secondary, styles.btnStyle]}
            url={"/payment"}
          />
        </div>
      </div>
    </Link>
  );
}
