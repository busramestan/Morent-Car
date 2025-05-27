"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from './Confirmation.module.scss';

const Confirmation = () => {
  const router = useRouter();
  const [isMarketingChecked, setMarketingChecked] = useState(false);
  const [isTermsChecked, setTermsChecked] = useState(false);

  const handleMarketingChange = () => setMarketingChecked(!isMarketingChecked);
  const handleTermsChange = () => setTermsChecked(!isTermsChecked);

  const handleRentClick = () => {
    alert('Vehicle Successfully Rented!');
    router.push('/'); 
  };

  return (
    <div className={styles.confirmationContainer}>
      <h3>Confirmation</h3>
      <p>We are getting to the end. Just a few clicks and your rental is ready!</p>
      <p className={styles.step}>Step 4 of 4</p>

      <div className={styles.checkboxContainer}>
        <label>
          <input
            type="checkbox"
            checked={isMarketingChecked}
            onChange={handleMarketingChange}
          />
          I agree with sending marketing and newsletter emails. No spam, promised!
        </label>
      </div>

      <div className={styles.checkboxContainer}>
        <label>
          <input
            type="checkbox"
            checked={isTermsChecked}
            onChange={handleTermsChange}
          />
          I agree with our terms and conditions and privacy policy.
        </label>
      </div>

      <button
        className={styles.rentButton}
        onClick={handleRentClick}
        disabled={!isTermsChecked}
      >
        Rent Now
      </button>

      <div className={styles.securityInfo}>
        <img className={styles.securityIcon} src="/Confirmation/ic-security-safety.svg" alt="safe" /> 
        <p>All your data are safe</p>
        <p>We are using the most advanced security to provide you the best experience ever.</p>
      </div>
    </div>
  );
};

export default Confirmation;
