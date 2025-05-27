import React from "react";
import Button from "../../FormElements/Button";
import cardstyles from "./HeroPromoCard.module.scss"

const HeroPromoCard = ({ data }) => {

  let { title, id, desc, button_text, button_color_class, img, car_img, bg_color} = data

    return (
      <div className= {`${cardstyles.card} ${cardstyles.bgImg} ${bg_color}`} 
      style={{
        backgroundImage: `url(${img.src})`,
      }}
      >
        <div className={cardstyles.content}>
          <h1 className= {`${cardstyles.title} ${cardstyles.textBreak}`}>{title}</h1>
          <p className= {`${cardstyles.desc} ${cardstyles.textBreak}`}>{desc}</p>
          <Button
            key={id}
            classes={button_color_class}
            text={button_text}
          />
        </div>
        <img src={car_img.src} alt="car model" className={cardstyles.carModel} />
      </div>
    );
  };

export default HeroPromoCard;

