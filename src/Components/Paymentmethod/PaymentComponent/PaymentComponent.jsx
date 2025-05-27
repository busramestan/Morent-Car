'use client';
import React, { useState } from 'react';
import InputComponent from './InputComponent/Input';
import Image from 'next/image';
import styles from './PaymentComponent.module.scss';

export default function PaymentComponent({
  paymentType,
  paymentTypeImg,
  altName,
  isSelected,
  changeSelect,
  onReset,
}) {
  const [inputValues, setInputValues] = useState({});
  const [inputErrors, setInputErrors] = useState({});

  const inputsConfig = {
    CreditCard: [
      {
        name: 'Card Number',
        placeholder: 'Card Number',
        type: 'text',
        maxLength: 16,
        validation: /^[0-9]{16}$/,
        errorMessage: 'Card Number must be 16 digits.',
      },
      {
        name: 'Expiration Date',
        placeholder: 'MM/YY',
        type: 'text',
        maxLength: 5,
        validation: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
        validateOnBlur: true,
        errorMessage: 'Expiration Date must be in MM/YY format.',
      },
      {
        name: 'Card Holder',
        placeholder: 'Card Holder',
        type: 'text',
        maxLength: 50,
        validation: /^[a-zA-Z\s]*$/,
        errorMessage: 'Card Holder name can only contain letters and spaces.',
      },
      {
        name: 'CVC',
        placeholder: 'CVC',
        type: 'text',
        maxLength: 3,
        validation: /^[0-9]{3}$/,
        errorMessage: 'CVC must be 3 digits.',
      },
    ],
    PayPal: [
      {
        name: 'PayPal Email',
        placeholder: 'Enter PayPal Email',
        type: 'email',
        validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        validateOnBlur: true,
        errorMessage: 'Please enter a valid email address.',
      },
      {
        name: 'Reference Number',
        placeholder: 'Reference Number',
        type: 'text',
        validation: /^[a-zA-Z0-9]*$/,
        errorMessage: 'Reference Number can only contain letters and numbers.',
      },
      {
        name: 'PayPal Transaction ID',
        placeholder: 'Transaction ID',
        type: 'text',
        maxLength: 20,
        validation: /^[a-zA-Z0-9]*$/,
        errorMessage: 'Transaction ID can only contain letters and numbers.',
      },
    ],
    Bitcoin: [
      {
        name: 'Bitcoin Wallet',
        placeholder: 'Wallet Address',
        type: 'text',
        maxLength: 50,
        validation: /^[a-zA-Z0-9]*$/,
        errorMessage: 'Bitcoin Wallet address can only contain letters and numbers.',
      },
      {
        name: 'Confirm Wallet',
        placeholder: 'Confirm Wallet',
        type: 'text',
        maxLength: 50,
        validation: /^[a-zA-Z0-9]*$/,
        errorMessage: 'Confirm Wallet address must match the wallet address.',
      },
    ],
  };

  React.useEffect(() => {
    if (!isSelected) {
      setInputValues({});
      if (onReset) onReset();
    }
  }, [isSelected, onReset]);

  const handleInputChange = (name, value, validation, validateOnBlur, customErrorMessage) => {
    if (!validateOnBlur && validation && !validation.test(value)) {
      setInputErrors((prev) => ({ ...prev, [name]: customErrorMessage }));
    } else {
      setInputErrors((prev) => ({ ...prev, [name]: '' }));
    }
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputBlur = (name, value, validation, customErrorMessage) => {
    if (validation && !validation.test(value)) {
      setInputErrors((prev) => ({ ...prev, [name]: customErrorMessage }));
    } else {
      setInputErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const inputs = inputsConfig[paymentType] || [];

  return (
    <div className={styles.paymentOptionDiv}>
      <div className={styles.labelDiv}>
        <div>
          <input type="radio" onChange={() => changeSelect(paymentType)} checked={isSelected} />
          <label className={styles.label}>{paymentType}</label>
        </div>
        <Image src={paymentTypeImg} alt={altName} />
      </div>
      {isSelected && (
        <div className={`${styles.paymentInputContainer} ${styles[paymentType]}`}>
          {inputs.map((input, index) => (
            <InputComponent
              key={index}
              label={input.name}
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
              maxLength={input.maxLength}
              value={inputValues[input.name] || ''}
              onChange={(value) =>
                handleInputChange(
                  input.name,
                  value,
                  input.validation,
                  input.validateOnBlur,
                  input.errorMessage
                )
              }
              onBlur={() =>
                input.validateOnBlur &&
                handleInputBlur(input.name, inputValues[input.name], input.validation, input.errorMessage)
              }
              errorMessage={inputErrors[input.name]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
