'use client';
import React from 'react';
import AdminSidebar from '@/components/AdminSidebar/AdminSidebar';

const CalendarPage = () => {
  return (
    <div style={{display:'flex'}}>
      <AdminSidebar section="calendar" />
      <h1>Calendar Section</h1>
    </div>
  );
};

export default CalendarPage;
