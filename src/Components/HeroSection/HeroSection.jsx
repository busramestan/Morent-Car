import React from "react";
import HeroSectionStyles from './HeroSection.module.scss';
import HeroPromoCard from "./HeroPromoCard/HeroPromoCard";
import right_bg from '../../../public/imgHero/right_bg.png'
import left_bg from '../../../public/imgHero/left_bg.png'
import car1 from '../../../public/imgHero/car1.png'
import car2 from '../../../public/imgHero/car2.png'

export function HeroSection() {
  let datas = [
    {
      id: 1,
      title: 'The Best Platform for Car Rental',
      desc: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
      button_text: 'Rental Car',
      button_color_class: HeroSectionStyles.btnBlue,
      img: left_bg,
      car_img: car1,
      bg_color: HeroSectionStyles.bgLightBlue,

    },
    {
      id: 2,
      title: 'Easy way to rent a car at a low price',
      desc: 'Providing cheap car rental services and safe and comfortable facilities.',
      button_text: 'Rental Car',
      button_color_class: HeroSectionStyles.btnLightBlue,
      img: right_bg,
      car_img: car2,
      bg_color: HeroSectionStyles.bgBlue
    },
  ];

  return (
    <div className={HeroSectionStyles.cardsContainer}>
      {datas.map(data => (
        <HeroPromoCard key={data.id} data={data} />
      ))}
    </div>
  );
}

export default HeroSection;