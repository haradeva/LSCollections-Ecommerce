import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";

const OrderCard = () => {
  return (
    <div>
      <div className="p-5 shadow-md hover:shadow-2xl cursor-pointer">
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={6}>
            <div className="flex cursor-pointer">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://via.placeholder.com/150"
                alt="Hello"
              />

              <div className="ml-5 space-y-2">
                <p className="">Product Title</p>
                <p className="opacity-50 text-xs font-semibold">Size: L</p>
                <p className="opacity-50 text-xs font-semibold">Color: White</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <p>₹1099</p>
          </Grid>
          <Grid item xs={4}>
            {true && (
              <div>
                <p>
                  <AdjustIcon
                    sx={{ width: "15px", height: "15px" }}
                    className="text-green-600 mr-2 text-sm"
                  />
                  <span>Delivered on Feb 10</span>
                </p>
                <p className="text-xs">Your item has been Delivered</p>
              </div>
            )}
            {false && (
              <p>
                <span>Expected Delivery on Feb 10</span>
              </p>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OrderCard;
