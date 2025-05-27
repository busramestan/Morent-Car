'use client';
import React from 'react';
import AdminSidebar from '@/components/AdminSidebar/AdminSidebar';

const ReimbursePage = () => {
  return (
    <div style={{display:'flex'}}>
      <AdminSidebar section="reimburse" />
      <h1>Reimburse Section</h1>
    </div>
  );
};

export default ReimbursePage;
