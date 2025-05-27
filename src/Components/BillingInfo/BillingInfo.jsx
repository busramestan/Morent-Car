"use client";

import React, { useState } from "react";
import styles from "./BillingInfo.module.scss";
import InputComponent from "../Paymentmethod/PaymentComponent/InputComponent/Input";

const Billingİnfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (name) => {
    if (!formData[name]) {
      setErrors({
        ...errors,
        [name]: `${name} It is mandatory to fill this field`,
      });
    }
  };

  return (
    <div className={styles.BillingInfo}>
      <h2 className={styles["billing-heading"]}>Billing Info</h2>
      <p className={styles["billing-paragraph"]}>
        Please enter your biling info
      </p>
      <div className={styles.formStep}>Step 1 of 4</div>

      <div className={styles.formGroup}>
        <InputComponent
          label="Name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur("name")}
          errorMessage={errors.name}
          newInput={styles.newInput}
        />
        <InputComponent
          label="Phone Number"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          onBlur={() => handleBlur("phone")}
          errorMessage={errors.phone}
          newInput={styles.newInput}
        />
        <InputComponent
          label="Address"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          onBlur={() => handleBlur("address")}
          errorMessage={errors.address}
          newInput={styles.newInput}
        />
        <InputComponent
          label="Town/City"
          name="city"
          placeholder="Town or City"
          value={formData.city}
          onChange={handleChange}
          onBlur={() => handleBlur("city")}
          errorMessage={errors.city}
          newInput={styles.newInput}
        />
      </div>
    </div>
  );
};

export default Billingİnfo;
