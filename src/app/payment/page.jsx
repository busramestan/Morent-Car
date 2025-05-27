import RentalInfo from "@/Components/RentalInfo/RentalInfo";
import RentalSummary from "@/Components/RentalSummary/rental-summary";
import BackgroundImg from "../../../public/RentalSummary/bg.png";
import React from "react";
import styles from "../payment/paymentPage.module.scss";
import Confirmation from "@/Components/Confirmation/Confirmation";
import PaymentMethod from "@/Components/Paymentmethod/Paymentmethod";
import BillingInfo from "@/Components/BillingInfo/BillingInfo";

export default function Payment() {
  return (
    <div className={styles.paymentSection}>
      <div className={styles.paymentDiv}>
        <BillingInfo />
        <RentalInfo />
        <PaymentMethod />
        <Confirmation />
      </div>
      <div className={styles.rentalInfoDiv}>
        <RentalSummary
          car={{
            name: "Nissan GT-R",
            price: 80.0,
            tax: 0,
            rating: 4,
            reviews: 440,
            backgroundImage: BackgroundImg,
            image: "/common/cars/nissan.svg",
          }}
        />
      </div>
    </div>
  );
}
