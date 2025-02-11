import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../state/stateCart/Action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?._id,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    console.log("Item ID: ", item._id);
    dispatch(removeCartItem(item._id));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md my-8">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl || "https://via.placeholder.com/150"}
            alt={item?.product?.title || "Product Image"}
          />
        </div>
        <div className="ml-5 space-y-1">
          <h2 className="text-xl font-semibold">{item?.product?.title}</h2>
          <p className="opacity-70">
            Size: {item?.size}, {item?.product?.color}
          </p>
          <p className="opacity-70 mt-2">{item?.product?.brand}</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹{item?.discountedPrice}</p>
            <p className="line-through opacity-50">₹{item?.price}</p>
            <p className="text-green-600 font-semibold">80% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton
            onClick={() => handleUpdateCartItem(1)}
            sx={{ color: "#9155fd" }}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button onClick={handleRemoveCartItem} sx={{ color: "#9155fd" }}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
