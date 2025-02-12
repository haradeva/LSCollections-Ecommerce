import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../state/stateOrder/Action";
import { useLocation } from "react-router-dom";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // Correctly access the order from Redux state
  const { order } = useSelector((store) => store.order);

  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId, dispatch]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order?.shippingAddress} />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order?.orderItems?.length > 0 ? (
              order.orderItems.map((item) => (
                <CartItem key={item._id} item={item} />
              ))
            ) : (
              <p>No items in this order.</p>
            )}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />

              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className="text-green-600">-₹{order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ₹{order?.totalPrice - order?.discount}
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
