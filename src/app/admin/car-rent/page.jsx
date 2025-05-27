'use client';
import React from 'react';
import AdminSidebar from '@/components/AdminSidebar/AdminSidebar';

const CarRentPage = () => {
  return (
    <div style={{display:'flex'}}>
      <AdminSidebar section="car-rent" />
      <h1>Car Rent Section</h1>
    </div>
  );
};

export default CarRentPage;
