import React from "react";
import "./FullProductCard.css";

const FullProductCard = () => {
  return (
    <div className="full-product-card w-[15rem] m-3 transition-all cursor-pointer shadow">
      <div className="h-[20rem]">
        <img
          className="w-full h-full object-cover object-left-top"
          src="https://via.placeholder.com/150"
          alt="product"
        />
      </div>
      <div className="text-part bg-white p-3">
        <div>
          <p className="font-bold opacity-60">PRATHAM BLUE</p>
          <p>Embroidered Bollywood Georgette Saree</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹199</p>
          <p className="line-through opacity-50">₹1,999</p>
          <p className="text-green-600 font-semibold">70% off</p>
        </div>
      </div>
    </div>
  );
};

export default FullProductCard;
