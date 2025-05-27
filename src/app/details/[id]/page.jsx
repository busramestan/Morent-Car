import React from "react";
import ProductDetailView from "@/Components/ProductDetailView/ProductDetailView";
import RecommendationCar from "@/Components/RecommendationCar/RecommendationCar";
import RecentCar from "@/Components/RecentCar/RecentCar";
import ReviewContainer from "@/Components/Review/ReviewContainer";

async function Page({ params }) {
  const { id } = await params;
  return (
    <>
      <ProductDetailView id={id} />
      <ReviewContainer />
      <RecentCar />
      <RecommendationCar />
    </>
  );
}

export default Page;
