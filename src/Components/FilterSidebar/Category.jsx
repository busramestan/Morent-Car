'use client';

import React, { useState, useEffect } from "react";
import FilterSidebar from "@/Components/FilterSidebar/FİlterSidebar";
import ProductCard from "@/Components/ProductCard/ProductCard";
import Image from "next/image";
import products from "@/Components/FilterSidebar/FilterSidebardata"; 
import styles from './Category.module.scss';
const Category = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  const filterProducts = (selectedTypes = [], selectedCapacities = [], maxPrice = 100) => {
    const filtered = products.filter(product =>
      (selectedTypes.length === 0 || selectedTypes.includes(product.type)) &&
      (selectedCapacities.length === 0 || selectedCapacities.includes(product.capacity)) &&
      product.price <= maxPrice
    );

    if (filtered.length === 0) {
      const suggestions = products.filter(product =>
        (selectedTypes.length > 0 && selectedTypes.includes(product.type)) ||
        (selectedCapacities.length > 0 && selectedCapacities.includes(product.capacity))
      );
      setSuggestedProducts(suggestions);
    } else {
      setSuggestedProducts([]);
    }

    return filtered;
  };

  const handleFilter = ({ selectedTypes = [], selectedCapacities = [], maxPrice = 100 }) => {
    const filtered = filterProducts(selectedTypes, selectedCapacities, maxPrice);
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const filtered = filterProducts([], [], 100);
    setFilteredProducts(filtered);
  }, []);

  return (
    <div className={styles.categoryContainer}>
      <FilterSidebar onFilter={handleFilter} products={products} />

      <div className={styles.productsWrapper}>
        {filteredProducts.length === 0 ? (
          <div className={styles.productCardWrapper}>
            <p className="noResults">Aradığınız kriterlere uygun araç bulunamadı</p>
            {suggestedProducts.length > 0 && (
              <div className={styles.suggestedContainer}>
                <h3 className={styles.suggestedTitle}>Önerilen Araçlar</h3>
                <div className={styles.suggestedProductsWrapper}>
                  {suggestedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      carName={product.carName}
                      carsType={product.type}
                      carImage={product.carImage}
                      gas={product.gas}
                      gear={product.gear}
                      user={product.user}
                      price={product.price}
                      discount={product.discount}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              carName={product.carName}
              carsType={product.type}
              carImage={product.carImage}
              gas={product.gas}
              gear={product.gear}
              user={product.user}
              price={product.price}
              discount={product.discount}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Category;
