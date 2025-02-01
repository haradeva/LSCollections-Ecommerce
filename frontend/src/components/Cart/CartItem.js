import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md my-8">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://via.placeholder.com/150 "
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <h2 className="text-xl font-semibold">Product Name</h2>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">Type 2 varient</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹789</p>
            <p className="line-through opacity-50">₹3,999</p>
            <p className="text-green-600 font-semibold">80% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "#9155fd" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "#9155fd" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
