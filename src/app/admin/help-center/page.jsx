'use client';
import React from 'react';
import AdminSidebar from '@/components/AdminSidebar/AdminSidebar';

const HelpCenterPage = () => {
  return (
    <div style={{display:'flex'}}>
      <AdminSidebar section="help-center" />
      <h1>Help Center</h1>
    </div>
  );
};

export default HelpCenterPage;
