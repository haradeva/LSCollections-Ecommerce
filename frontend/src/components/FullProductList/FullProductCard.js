import React from "react";
import "./FullProductCard.css";
import { useNavigate } from "react-router-dom";

const FullProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product?._id}`)}
      className="full-product-card w-[15rem] m-3 transition-all cursor-pointer shadow"
    >
      <div className="h-[20rem]">
        <img
          className="w-full h-full object-cover object-left-top"
          src={product.imageUrl || "https://via.placeholder.com/150"}
          alt="product"
        />
      </div>
      <div className="text-part bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPercent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullProductCard;
