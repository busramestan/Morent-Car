import React from 'react'
import button from '../FormElements/Button.module.scss'
import Link from 'next/link';

const Button = ({ text , url="#", classes}) => {
  const classNames = getClassNames(classes)

  return (
    <div>
      <Link href={url} className={`${button.btn} ${classNames}`} >
        {text}
      </Link>
    </div>
  );
};

export default Button

// Bu fonksiyonun amacı: Birden fazla class geldi mi gelmedi mi şeklinde bakıp onları yan yana yazdırmak

const getClassNames = (classes) => {
  if (Array.isArray(classes)) {
    return classes.filter(Boolean).join(' '); 
  }

  if (typeof classes === 'string') {
    return classes;
  }

  if (typeof classes === 'object' && classes !== null) {
    return Object.values(classes).filter(Boolean).join(' '); 
  }

  return ''; // Geçerli bir tür yoksa boş string döndür
};