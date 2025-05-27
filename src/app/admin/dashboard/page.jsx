import React from "react";
import AdminSidebar from "@/Components/AdminSidebar/AdminSidebar";
import TopCarRental from '@/Components/AdminPanelTopsCarRental/TopCarRental';
import AdminRentalDetails from '@/Components/AdminRentalDetails/AdminRentalDetails';
import rental_mapImage from '../../../../public/AdminRentalDetails/rental_map.png'
import rental_carImage from '../../../../public/AdminRentalDetails/rental_car.png'
import pageStyles from './page.module.scss'
import RecentTransactions from '@/Components/Transaction/RecentTransaction';

function admin() {
  const carRentalDetail = {
    mapImage: rental_mapImage,
    carName: "Nissan GT-R",
    carModel: "Sport Car",
    carImage: rental_carImage,
    orderId: 9756,
    totalPrice: 80.0,
    pickup: {
      location: "Ankara",
      date: "12/12/2024",
      time: "15:00",
    },
    dropoff: {
      location: "Bursa",
      date: "22/12/2024",
      time: "17:00",
    },
  };

  return (
    <div className={pageStyles.card}>
      <div>
        <AdminSidebar />
      </div>
      <div className={pageStyles.content}>
        <div className={pageStyles.left}>
          <AdminRentalDetails carRentalDetail={carRentalDetail} />
        </div>
        <div className={pageStyles.right}>
          <TopCarRental />
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
}

export default admin;
