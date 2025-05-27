'use client';
import React from 'react';
import AdminSidebar from '@/components/AdminSidebar/AdminSidebar';

const InboxPage = () => {
  return (
    <div style={{display:'flex'}}>
      <AdminSidebar section="inbox" />
      <h1>Inbox Section</h1>
    </div>
  );
};

export default InboxPage;
