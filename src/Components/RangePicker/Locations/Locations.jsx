import React from 'react';
import citiesOfTurkey from './Locations.datas'
import styles from './Locations.module.scss';

export default function LocationPicker({onSelectedCity}) {
  return (
    <div className={styles.locationPicker}>
      <ul className={styles.dropDown}>
        {citiesOfTurkey.map((city) => (
          <li key={city.id} className={styles.cityNames} onClick={() => onSelectedCity(city.name)}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}
