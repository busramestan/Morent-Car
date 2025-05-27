'use client';
import React, { useState, useEffect } from "react";
import styles from './FilterSidebar.module.scss';

const FilterSidebar = ({ onFilter, products }) => {
  
  const getDynamicCounts = (key) => {
    const counts = products.reduce((acc, product) => {
      const label = product[key];
      acc[label] = (acc[label] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts).map(label => ({ label, count: counts[label] }));
  };

  
  const types = getDynamicCounts('type');
  const capacities = getDynamicCounts('capacity');

 
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCapacities, setSelectedCapacities] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);

  
  useEffect(() => {
    onFilter({ selectedTypes, selectedCapacities, maxPrice });
  }, [selectedTypes, selectedCapacities, maxPrice]);

  
  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  
  const handleCapacityChange = (capacity) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity) ? prev.filter(c => c !== capacity) : [...prev, capacity]
    );
  };

  
  const handlePriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.filterGroup}>
        <h3>Type</h3>
        {types.map((type) => (
          <label key={type.label} className={styles.filterItem}>
            <input
              type="checkbox"
              checked={selectedTypes.includes(type.label)}
              onChange={() => handleTypeChange(type.label)}
            />
            {type.label} <span>({type.count})</span>
          </label>
        ))}
      </div>

      <div className={styles.filterGroup}>
        <h3>Capacity</h3>
        {capacities.map((capacity) => (
          <label key={capacity.label} className={styles.filterItem}>
            <input
              type="checkbox"
              checked={selectedCapacities.includes(capacity.label)}
              onChange={() => handleCapacityChange(capacity.label)}
            />
            {capacity.label} <span>({capacity.count})</span>
          </label>
        ))}
      </div>

      <div className={styles.filterGroup}>
        <h3>Price</h3>
        <div className={styles.priceRangeWrapper}>
          <input
            type="range"
            min="0"
            max="200"
            value={maxPrice}
            onChange={handlePriceChange}
            className={styles.priceRange}
          />
          <div className={styles.priceInfo}>Max. ${maxPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar; 