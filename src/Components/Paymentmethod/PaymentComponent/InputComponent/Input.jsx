import React from "react";
import styles from "./Input.module.scss";

export default function InputComponent({
  label,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  type,
  maxLength,
  errorMessage,
  newInput = styles.newInput,
}) {
  return (
    <div className={styles.inputField}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`${styles.newInput} ${newInput}`}
      />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
}
