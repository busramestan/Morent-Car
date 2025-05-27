'use client';
import React from 'react';
import AdminSidebar from '@/components/AdminSidebar/AdminSidebar';

const SettingsPage = () => {
  return (
    <div style={{display:'flex'}}>
      <AdminSidebar section="settings" />
      <h1>Settings</h1>
    </div>
  );
};

export default SettingsPage;
