
import React from "react";
import HeroBanner from "./components/HeroBanner";
import Newsletter from "./components/Newsletter";
import FeaturedDeals from "./components/FeaturedDeals";
import HomeCategories from "./components/HomeCategories";
import HomeFeatures from "./components/HomeFeatures";
import HomeCategoryProducts from "./components/HomeCategoryProducts";


const MedicineEcommerce = () => {

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Features */}
        <HomeFeatures />

        {/* Categories Section */}
        <HomeCategories />

        {/* Featured Deals */}
        <FeaturedDeals />

        <HomeCategoryProducts/>

        {/* Newsletter Section */}
        <Newsletter />
      </main >
    </div >
  );
};

export default MedicineEcommerce;
