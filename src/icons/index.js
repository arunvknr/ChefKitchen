import i1 from "../assets/img2.svg"
import i2 from "../assets/img3.svg"
import i3 from "../assets/img4.svg"
import i4 from "../assets/img5.svg"
import i5 from "../assets/img6.svg"
import i6 from "../assets/img7.svg"
import i7 from "../assets/img8.svg"
import i8 from "../assets/img9.svg"
import i9 from "../assets/img10.svg"
export const tabs = [
  { id: "today", label: "Today Special" },
  { id: "our", label: "Our Special" },
  { id: "south", label: "South Indian Special" },
];

export const dishes = [
  {
    img: i1,
    name: "Healthy noodle with spanish leaf",
    basePrice: 3.29,
    bowls: "22 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["dine-in"],
    category:"our",
   
  },
  {
    img: i2,
    name: "Hot spicy fried rice with omelet",
    basePrice: 3.29,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["delivery", "dine-in"],
    category:"today",
  },
  {
    img: i3,
    name: "Spicy noodle with special omelete",
    basePrice: 3.29,
    bowls: "17 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["dine-in"],
    category:"our",

  },
  {
    img: i4,
    name: "Healthy noodle with spinach leaf",
    basePrice: 25,
    bowls: "22 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["take-away", "dine-in"],
    category:"today"
  },
  {
    img: i5,
    name: "Hot spicy fried rice with omelett",
    basePrice: 25,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["dine-in"],
    category:"our",
  },
  {
    img: i6,
    name: "Spicy noodle with special omelette",
    basePrice: 25,
    bowls: "17 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["delivery", "dine-in"],
    category:"today"
  },

  {
    img: i7,
    name: "Spicy seasoned seafood noodles",
    basePrice: 25,
    bowls: "16 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["delivery", "dine-in"],
    category:"south",
  },
  {
    img: i8,
    name: "Salted Pasta with mushroom sauce",
    basePrice: 25,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["take-away", "dine-in"],
    category:"our",
  },
  {
    img: i9,
    name: "Beef dumplinggit hot and sour soup",
    basePrice: 25,
    bowls: "20 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["dine-in", "take-away"],
    category:"south",
  },
];
