'use client';
import React from 'react';
import AdminSidebar from '@/components/AdminSidebar/AdminSidebar';

const InsightPage = () => {
  return (
    <div style={{display:'flex'}}>
      <AdminSidebar section="insight" />
      <h1>Insight Section</h1>
    </div>
  );
};

export default InsightPage;
