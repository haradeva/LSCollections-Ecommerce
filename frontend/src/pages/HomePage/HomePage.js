import React from "react";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import ProductCarousel from "../../components/HomeProductCarousel/HomeProductCarousel";
import { sareeDummyData } from "../../data/sareeDummyData";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <ProductCarousel data={sareeDummyData} sectionName={"New Arrivals"} />
        <ProductCarousel data={sareeDummyData} sectionName={"Best Sellers"} />
        <ProductCarousel data={sareeDummyData} sectionName={"Offers"} />
      </div>
    </div>
  );
};

export default HomePage;
