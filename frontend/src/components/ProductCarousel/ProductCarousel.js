import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import ProductCard from "../ProductCard/ProductCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const ProductCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item, index) => (
    <div key={index} className="flex justify-center">
      <ProductCard product={item} />
    </div>
  ));

  return (
    <div className="relative border mx-auto w-full">
      <div className="relative p-5 w-full">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
      </div>
      {activeIndex !== items.length - 5 && (
        <Button
          onClick={slideNext}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="Next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      )}

      {activeIndex !== 0 && (
        <Button
          onClick={slidePrev}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="Next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>
      )}
    </div>
  );
};

export default ProductCarousel;
