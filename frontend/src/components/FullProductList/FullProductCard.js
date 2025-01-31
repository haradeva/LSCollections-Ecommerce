import React from "react";
import "./FullProductCard.css";

const FullProductCard = ({ product }) => {
  return (
    <div className="full-product-card w-[15rem] m-3 transition-all cursor-pointer shadow">
      <div className="h-[20rem]">
        <img
          className="w-full h-full object-cover object-left-top"
          src={product.image}
          alt="product"
        />
      </div>
      <div className="text-part bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.title}</p>
          <p>{product.title2}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.selling_price}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold">{product.disscount}</p>
        </div>
      </div>
    </div>
  );
};

export default FullProductCard;
