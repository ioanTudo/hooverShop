import prod6Img from "./images/NZ801UKT_01.webp";
import prod5Img from "./images/NV602UK_01.webp";
import prod4Img from "./images/AZ3000UKT_01.webp";
import prod3Img from "./images/AZ3900UKT_01.webp";
import prod2Img from "./images/AZ3002_01.webp";
import prod1Img from "./images/NZ691UKT_01.webp";

import prod1cordless from "./images/IP1251UKT_02.webp";
import prod2cordless from "./images/IZ202UKT_02.webp";
import prod3cordless from "./images/IZ202UKTDB_02.webp";
import prod4cordless from "./images/IZ400UKT_02.webp";
import prod5cordless from "./images/IZ202UK_02.webp";
import prod6cordless from "./images/IZ420UKTDB_02.webp";

import prod1HairDry from "./images/HD731UK_02.webp";
import prod2HairDry from "./images/HD752UK_02.webp";
import prod3HairDry from "./images/HD731202UK_02.webp";

import prod1AirPur from "./images/HP300UK_01.webp";
import prod2AirPur from "./images/HP150UK_01.webp";
import prod3AirPur from "./images/HC450UK_01.webp";

export const PRODUCTS = [
  {
    id: 1,
    name: "NZ691UKT",
    info: "Powerful vacuum cleaner with advanced technology",
    price: 199,
    image: prod1Img,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 2,
    name: "AZ3002UK",
    info: "High-performance vacuum for deep cleaning",
    price: 299,
    image: prod2Img,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 3,
    name: "AZ3000UKT",
    info: "Compact vacuum with multiple attachments",
    price: 399,
    image: prod3Img,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 4,
    name: "AZ3900UKT",
    info: "Lightweight and powerful vacuum",
    price: 159,
    image: prod4Img,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 5,
    name: "NV602UK",
    info: "Versatile vacuum with HEPA filter",
    price: 259,
    image: prod5Img,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 6,
    name: "NZ810UKT",
    info: "Affordable vacuum for everyday cleaning",
    price: 99,
    image: prod6Img,
    prodPageInfo: "/zIdNZ691UKT",
  },
];

export const PRODUCTS_CORDLESS = [
  {
    id: 7,
    name: "IP1251UKT",
    info: "Powerful vacuum cleaner with advanced technology",
    price: 300,
    image: prod1cordless,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 8,
    name: "IZ202UKT",
    info: "Powerful vacuum cleaner with advanced technology",
    price: 250,
    image: prod2cordless,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 9,
    name: "IZ202UKTDB",
    info: "Powerful vacuum cleaner with advanced technology",
    price: 500,
    image: prod3cordless,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 10,
    name: "IZ400UKT",
    info: "Powerful vacuum cleaner with advanced technology",
    price: 130,
    image: prod4cordless,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 11,
    name: "IZ202UK",
    info: "Powerful vacuum cleaner with advanced technology",
    price: 299,
    image: prod5cordless,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 12,
    name: "IZ420UKTDB",
    info: "Powerful vacuum cleaner with advanced technology",
    price: 399,
    image: prod6cordless,

    prodPageInfo: "/zIdNZ691UKT",
  },
];
export const PRODUCTS_AIRPURIFIERS = [
  {
    id: 13,
    name: "hp300uk",
    info: "",
    price: 100,
    image: prod1AirPur,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 14,
    name: "hp150uk",
    info: "",
    price: 150,
    image: prod2AirPur,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 15,
    name: "hc450",
    info: "",
    price: 300,
    image: prod3AirPur,
    prodPageInfo: "/zIdNZ691UKT",
  },
];

export const PRODUCTS_HAIRDRY = [
  {
    id: 16,
    name: "hd731uk",
    info: "High-performance hair-dryer with advanced technology",
    price: 209,
    image: prod1HairDry,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 17,
    name: "hd752uk",
    info: "High-performance hair-dryer with advanced technology",
    price: 299,
    image: prod2HairDry,
    prodPageInfo: "/zIdNZ691UKT",
  },
  {
    id: 18,
    name: "hd731202uk",
    info: "High-performance hair-dryer with advanced technology",
    price: 199,
    image: prod3HairDry,
    prodPageInfo: "/zIdNZ691UKT",
  },
];

export const NAVList = [
  {
    id: 0,
    name: "offers",
    pathLink: "/offers",
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
        name: "hair dryers",
        pathLink: "/hairDry-page",
      },
      {
        id: 3,
        name: "air purifiers",
        pathLink: "/airPurifier-page",
      },
    ],
  },
  { id: 2, name: "sign in", pathLink: "/signIn-page" },
  { id: 3, name: "log in", pathLink: "/logIn-page" },
];

export const FOOTER_items = [
  {
    id: 0,
    name: "about our company",
    submenu: [
      {
        id: 0,
        name: "about us",
        pathLink: "/about-us",
      },
      {
        id: 1,
        name: "black friday",
        pathLink: "/black-friday",
      },
      {
        id: 2,
        name: "reviews",
        pathLink: "/reviews",
      },
      {
        id: 3,
        name: "cleaning tips and advice",
        pathLink: "/cleaning-tips",
      },
      {
        id: 4,
        name: "coming soon",
        pathLink: "/coming-soon",
      },
      {
        id: 5,
        name: "terms and conditions",
        pathLink: "/terms-and-conditions",
      },
    ],
  },
  {
    id: 1,
    name: "Technology",
    submenu: [
      {
        id: 0,
        name: "anti hair wrap",
        pathLink: "/about-us",
      },
      {
        id: 1,
        name: "duo clean",
        pathLink: "/black-friday",
      },
      {
        id: 2,
        name: "power fins",
        pathLink: "/reviews",
      },
      {
        id: 3,
        name: "anti-allergen",
        pathLink: "/cleaning-tips",
      },
      {
        id: 4,
        name: "flexology",
        pathLink: "/coming-soon",
      },
    ],
  },
  {
    id: 2,
    name: "Orders and payments",
    submenu: [
      {
        id: 0,
        name: "paypal",
      },
      {
        id: 1,
        name: "student discount",
      },
      {
        id: 2,
        name: "klarna",
      },
      {
        id: 3,
        name: "orders & payments",
      },
    ],
  },
  {
    id: 3,
    name: "Need Help?",
    submenu: [
      {
        id: 0,
        name: "contact us",
        pathLink: "/contact-us",
      },
      {
        id: 1,
        name: "customer care",
        pathLink: "/contact-us",
      },
      {
        id: 2,
        name: "parts and accesories",
        pathLink: "/contact-us",
      },
    ],
  },
  {
    id: 4,
    name: "join our mailing list",
  },
];
