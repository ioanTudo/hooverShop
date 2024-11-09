import prod6Img from "./images/NZ801UKT_01.webp";
import prod5Img from "./images/NV602UK_01.webp";
import prod4Img from "./images/AZ3900UKT_02.webp";
import prod3Img from "./images/AZ3000UKT_01.webp";
import prod2Img from "./images/AZ3002_01.webp";
import prod1Img from "./images/NZ691UKT_01.webp";

export const PRODUCTS = [
  {
    id: 1,
    name: "nz691ukt",
    info: "info - nz691",
    price: 199,
    prodImg: prod1Img,
    isAddedToCart: false,
  },
  {
    id: 2,
    name: "az3002uk",
    info: "info - az3002",
    price: 299,
    prodImg: prod2Img,
    isAddedToCart: false,
  },
  {
    id: 3,
    name: "az3000ukt",
    info: "info - az3000ukt",
    price: 399,
    prodImg: prod3Img,
    isAddedToCart: false,
  },
  {
    id: 4,
    name: "az3900ukt",
    info: "info - az3900ukt",
    price: 159,
    prodImg: prod4Img,
    isAddedToCart: false,
  },
  {
    id: 5,
    name: "az3900ukt",
    info: "info - NV602UK",
    price: 259,
    prodImg: prod5Img,
    isAddedToCart: false,
  },
  {
    id: 6,
    name: "az3900ukt",
    info: "info - nz810ukt",
    price: 99,
    prodImg: prod6Img,
    isAddedToCart: false,
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
    pathLink: "/products-page",
  },
  {
    id: 2,
    name: "sign in",
    pathLink: "/signIn-page",
  },
  {
    id: 3,
    name: "log in",
    pathLink: "/logIn-page",
  },
];
