import React from "react";

const HomeProductCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3  border">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="w-full h-full object-cover object-top"
          src={product.image}
          alt={product.title2}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title2}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
