"use client";
import React, { useState } from "react";
import PaymentComponent from "./PaymentComponent/PaymentComponent";
import styles from "./Paymentmethod.module.scss";
import visamc from "../../../public/paymentMethod/visamc.svg";
import payPal from "../../../public/paymentMethod/payPal.svg";
import bitcoin from "../../../public/paymentMethod/bitcoin.svg";

export default function PaymentMethod() {
  const [selectPayment, setSelectPayment] = useState(null);

  const onChangePayment = (paymentType) => {
    setSelectPayment(paymentType);
  };

  return (
    <div className={styles.paymentSelection}>
      <h1 className={styles.paymentHeader}>Payment Method</h1>
      <div className={styles.paymentDefinitionLayout}>
        <h2 className={styles.paymentDefinition}>
          Please enter your payment method
        </h2>
        <h2 className={styles.paymentDefinition}>Step 3 of 4</h2>
      </div>
      <PaymentComponent
        paymentType="CreditCard"
        paymentTypeImg={visamc}
        altName="Visa/MasterCard"
        isSelected={selectPayment === "CreditCard"}
        changeSelect={() => onChangePayment("CreditCard")}
      />
      <PaymentComponent
        paymentType="PayPal"
        paymentTypeImg={payPal}
        altName="PayPal"
        isSelected={selectPayment === "PayPal"}
        changeSelect={() => onChangePayment("PayPal")}
      />
      <PaymentComponent
        paymentType="Bitcoin"
        paymentTypeImg={bitcoin}
        altName="Bitcoin"
        isSelected={selectPayment === "Bitcoin"}
        changeSelect={() => onChangePayment("Bitcoin")}
      />
    </div>
  );
}
