import prod6Img from "./images/NZ801UKT_01.webp";
import prod5Img from "./images/NV602UK_01.webp";
import prod4Img from "./images/AZ3000UKT_01.webp";
import prod3Img from "./images/AZ3900UKT_01.webp";
import prod2Img from "./images/AZ3002_01.webp";
import prod1Img from "./images/NZ691UKT_01.webp";

import prodInfoCordedImg6 from "./images/NZ801UKT_prodINFO.webp";

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
    info: "Powerful upright vacuum cleaner with advanced technology for allergen control.",
    price: 199,
    image: prod1Img,
    prodPageInfo: "/zIdNZ691UKT",
    prodInfoImg: prod1Img,
    weight: "5kg",
    technology: "Anti-Allergen Complete Seal + DuoClean Technology",
    whatsIncluded: ["Vacuum cleaner", "Upholstery tool", "Dusting brush"],
  },
  {
    id: 2,
    name: "AZ3002UK",
    info: "High-performance vacuum cleaner designed for deep carpet cleaning.",
    price: 299,
    image: prod2Img,
    prodPageInfo: "/zIdAZ3002UK",
    prodInfoImg: prod2Img,
    weight: "5kg",
    technology: "DuoClean + Self-Cleaning Brushroll",
    whatsIncluded: ["Vacuum cleaner", "Crevice tool", "Pet power brush"],
  },
  {
    id: 3,
    name: "AZ3000UKT",
    info: "Compact vacuum cleaner with versatile attachments for every cleaning need.",
    price: 399,
    image: prod3Img,
    prodPageInfo: "/zIdAZ3000UKT",
    prodInfoImg: prod3Img,
    technology: "Lift-Away Technology",
    whatsIncluded: ["Vacuum cleaner", "Multi-surface tool", "Dusting brush"],
  },
  {
    id: 4,
    name: "AZ3900UKT",
    info: "Lightweight and powerful vacuum for effortless cleaning.",
    price: 159,
    image: prod4Img,
    prodPageInfo: "/zIdAZ3900UKT",
    prodInfoImg: prod4Img,
    technology: "Anti-Hair Wrap Technology",
    whatsIncluded: ["Vacuum cleaner", "Floor nozzle", "Detailing kit"],
  },
  {
    id: 5,
    name: "NV602UK",
    info: "Versatile vacuum cleaner equipped with a HEPA filter for allergen reduction.",
    price: 259,
    image: prod5Img,
    prodPageInfo: "/zIdNV602UK",
    prodInfoImg: prod5Img,
    technology: "HEPA Filtration + Anti-Allergen Seal",
    whatsIncluded: ["Vacuum cleaner", "Pet tool", "Extension wand"],
  },
  {
    id: 6,
    name: "NZ810UKT",
    info: "Affordable vacuum cleaner ideal for everyday cleaning tasks.",
    price: 99,
    image: prod6Img,
    prodPageInfo: "/zIdNZ810UKT",
    prodInfoImg: prodInfoCordedImg6,
    technology: "Cyclonic Technology",
    whatsIncluded: ["Vacuum cleaner", "Crevice tool", "Brush roll"],
  },
];

export const PRODUCTS_CORDLESS = [
  {
    id: 7,
    name: "IP1251UKT",
    info: "Lightweight cordless vacuum cleaner with advanced suction technology.",
    price: 300,
    image: prod1cordless,
    prodPageInfo: "/zIdIP1251UKT",
    prodInfoImg: prodInfoCordedImg6,
    technology: "PowerFins Technology",
    whatsIncluded: ["Cordless vacuum", "Charger", "Pet multi-tool"],
  },
  {
    id: 8,
    name: "IZ202UKT",
    info: "Cordless vacuum with superior performance for pet hair removal.",
    price: 250,
    image: prod2cordless,
    prodPageInfo: "/zIdIZ202UKT",
    prodInfoImg: prodInfoCordedImg6,
    technology: "Flexology + Anti-Hair Wrap",
    whatsIncluded: ["Cordless vacuum", "Pet tool", "Wall mount"],
  },
  {
    id: 9,
    name: "IZ202UKTDB",
    info: "Premium cordless vacuum with extended battery life and dual brushrolls.",
    price: 500,
    image: prod3cordless,
    prodPageInfo: "/zIdIZ202UKTDB",
    prodInfoImg: prodInfoCordedImg6,
    technology: "DuoClean PowerFins",
    whatsIncluded: ["Cordless vacuum", "Extra battery", "Multi-surface tool"],
  },
  {
    id: 10,
    name: "IZ400UKT",
    info: "Advanced cordless vacuum designed for all-floor cleaning.",
    price: 130,
    image: prod4cordless,
    prodPageInfo: "/zIdIZ400UKT",
    prodInfoImg: prodInfoCordedImg6,
    technology: "Anti-Hair Wrap + Flexology",
    whatsIncluded: ["Cordless vacuum", "Car cleaning kit", "Upholstery tool"],
  },
  {
    id: 11,
    name: "IZ202UK",
    info: "Compact and efficient cordless vacuum with versatile cleaning capabilities.",
    price: 299,
    image: prod5cordless,
    prodPageInfo: "/zIdIZ202UK",
    prodInfoImg: prodInfoCordedImg6,
    technology: "Cyclonic Suction Technology",
    whatsIncluded: ["Cordless vacuum", "Dusting brush", "Charger"],
  },
  {
    id: 12,
    name: "IZ420UKTDB",
    info: "Powerful cordless vacuum with large dust capacity for extended use.",
    price: 399,
    image: prod6cordless,
    prodPageInfo: "/zIdIZ420UKTDB",
    prodInfoImg: prodInfoCordedImg6,
    technology: "HyperVelocity Suction",
    whatsIncluded: ["Cordless vacuum", "Floor nozzle", "Spare filters"],
  },
];

export const PRODUCTS_AIRPURIFIERS = [
  {
    id: 13,
    name: "hp300uk",
    info: "Compact air purifier for small to medium-sized rooms.",
    price: 100,
    image: prod1AirPur,
    prodPageInfo: "/zIdhp300uk",
    prodInfoImg: prodInfoCordedImg6,
    technology: "HEPA Filtration",
    whatsIncluded: ["Air purifier", "Replacement filter", "User manual"],
  },
  {
    id: 14,
    name: "hp150uk",
    info: "Efficient air purifier with odor-neutralizing technology.",
    price: 150,
    image: prod2AirPur,
    prodPageInfo: "/zIdhp150uk",
    prodInfoImg: prodInfoCordedImg6,
    technology: "Odor-Eliminating HEPA Filter",
    whatsIncluded: ["Air purifier", "Filter set", "Power cord"],
  },
  {
    id: 15,
    name: "hc450",
    info: "Advanced air purifier for large spaces with smart controls.",
    price: 300,
    image: prod3AirPur,
    prodPageInfo: "/zIdhc450",
    prodInfoImg: prodInfoCordedImg6,
    technology: "Smart HEPA Filtration + Air Quality Monitor",
    whatsIncluded: ["Air purifier", "Remote control", "Filter set"],
  },
];

export const PRODUCTS_HAIRDRY = [
  {
    id: 16,
    name: "hd731uk",
    info: "High-performance hair dryer with ionic technology for smooth results.",
    price: 209,
    image: prod1HairDry,
    prodPageInfo: "/zIdhd731uk",
    prodInfoImg: prodInfoCordedImg6,
    technology: "Ionic Technology",
    whatsIncluded: ["Hair dryer", "Concentrator nozzle", "Diffuser"],
  },
  {
    id: 17,
    name: "hd752uk",
    info: "Professional-grade hair dryer with customizable heat settings.",
    price: 299,
    image: prod2HairDry,
    prodPageInfo: "/zIdhd752uk",
    prodInfoImg: prodInfoCordedImg6,
    technology: "Ceramic Ionic Technology",
    whatsIncluded: ["Hair dryer", "Styling attachments", "Travel bag"],
  },
  {
    id: 18,
    name: "hd731202uk",
    info: "Lightweight hair dryer with fast-drying capabilities.",
    price: 199,
    image: prod3HairDry,
    prodPageInfo: "/zIdhd731202uk",
    prodInfoImg: prodInfoCordedImg6,
    technology: "Turbo Ionic Technology",
    whatsIncluded: ["Hair dryer", "Comb attachment", "User guide"],
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
