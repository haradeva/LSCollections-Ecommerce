export const color = [
  "White",
  "Black",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Pink",
  "Purple",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "red", label: "Red" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "orange", label: "Orange" },
      { value: "pink", label: "Pink" },
      { value: "purple", label: "Purple" },
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "500-1000", label: "₹500-1000" },
      { value: "1000-1500", label: "₹1000-1500" },
      { value: "1500-2000", label: "₹1500-2000" },
      { value: "2000-2500", label: "₹2000-2500" },
      { value: "2500-3000", label: "₹2500-3000" },
      { value: "3000-3500", label: "₹3000-3500" },
      { value: "3500-4000", label: "₹3500-4000" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% and Above" },
      { value: "20", label: "20% and Above" },
      { value: "30", label: "30% and Above" },
      { value: "40", label: "40% and Above" },
      { value: "50", label: "50% and Above" },
      { value: "60", label: "60% and Above" },
      { value: "70", label: "70% and Above" },
      { value: "80", label: "80% and Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "inStock", label: "In Stock" },
      { value: "outOfStock", label: "Out of Stock" },
    ],
  },
];

export const sortOptions = [
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
