"use client";
import Button from "@/Components/FormElements/Button";
import propStyle from "./ProductProps.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";

export default function ProductProps({ productProps }) {
  let { car_name, description, car_props, discount, price, rating, review} = productProps;
  
  const [liked, setLiked] = useState(0);

  const discountPrice = discount ? (price * (100 + discount)) / 100 : null;
  
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating); // Tam yıldız sayısı
    const halfStar = rating % 1 >= 0.5; // Yarım yıldız kontrolü
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Boş yıldız sayısı

    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push(<i key={`full-${i}`} className="fa-solid fa-star"></i>);
    if (halfStar) stars.push(<i key="half" className="fa-solid fa-star-half-alt"></i>);
    for (let i = 0; i < emptyStars; i++) stars.push(<i key={`empty-${i}`} className="fa-regular fa-star"></i>);

    return stars;
  };

  return (
    <div className={propStyle.detailCardStyle}>
      <div className={propStyle.detailHeader}>
        <div className={propStyle.left}>
          <h1>{car_name}</h1>
          <div className={propStyle.rating}>
            {generateStars(rating)}
            <span>{review} Reviewer</span>
          </div>
        </div>
        <i
          className={`fa-${liked ? "solid" : "regular"} fa-heart`}
          onClick={() => setLiked(!liked)}
          style={{
            cursor: "pointer",
            color: liked ? "red" : "black",
            fontSize: "20px",
            marginTop: "10px",
            transition: "color 0.3s ease-in-out",
          }}
        ></i>
      </div>

      <div className={propStyle.detailContent}>
        <p className={propStyle.descStyle}>{description}</p>

        <div className={propStyle.propsContent}>
          {car_props &&
            car_props.map((prop, index) => (
              <div key={index}>
                <div className={propStyle.propsDivStyle}>
                  {prop.key}
                  <span>{prop.value}</span>
                </div>
              </div>
            ))}
        </div>

        <div className={propStyle.subContent}>
          <div className={propStyle.priceContent}>
            <span className={propStyle.price}>
              ${price.toFixed(2)}
              <span className={propStyle.delStyle}>/day</span>
            </span>

            { discountPrice && (
              <del className={propStyle.delStyle}>${discountPrice.toFixed(2)}</del>
            )}
          </div>

          <div className={propStyle.btnStyle} >
            <Button
              key={1}
              text={'Rent Now'}/>
          </div>
        </div>
        </div>
    </div>
  );
}
