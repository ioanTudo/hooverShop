import prod6Img from "./images/NZ801UKT_01.webp";
import prod5Img from "./images/NV602UK_01.webp";
import prod4Img from "./images/AZ3900UKT_02.webp";
import prod3Img from "./images/AZ3000UKT_01.webp";
import prod2Img from "./images/AZ3002_01.webp";
import prod1Img from "./images/NZ691UKT_01.webp";

export const PRODUCTS = [
  {
    id: 1,
    name: "NZ691UKT",
    info: "Powerful vacuum cleaner with advanced technology",
    price: 199,
    image: prod1Img,
  },
  {
    id: 2,
    name: "AZ3002UK",
    info: "High-performance vacuum for deep cleaning",
    price: 299,
    image: prod2Img,
  },
  {
    id: 3,
    name: "AZ3000UKT",
    info: "Compact vacuum with multiple attachments",
    price: 399,
    image: prod3Img,
  },
  {
    id: 4,
    name: "AZ3900UKT",
    info: "Lightweight and powerful vacuum",
    price: 159,
    image: prod4Img,
  },
  {
    id: 5,
    name: "NV602UK",
    info: "Versatile vacuum with HEPA filter",
    price: 259,
    image: prod5Img,
  },
  {
    id: 6,
    name: "NZ810UKT",
    info: "Affordable vacuum for everyday cleaning",
    price: 99,
    image: prod6Img,
  },
];

export const NAVList = [
  {
    id: 0,
    name: "home",
    pathLink: "/",
  },
  {
    id: 1,
    name: "products",
    submenu: [
      {
        id: 0,
        name: "corded",
        pathLink: "/corded-hoovers",
      },
      {
        id: 1,
        name: "cordless",
        pathLink: "/cordless-hoovers",
      },
      {
        id: 2,
        name: "cordless",
        pathLink: "/cordless-hoovers",
      },
      {
        id: 3,
        name: "cordless",
        pathLink: "/cordless-hoovers",
      },
    ],
  },
  { id: 2, name: "sign in", pathLink: "/signIn-page" },
  { id: 3, name: "log in", pathLink: "/logIn-page" },
];
