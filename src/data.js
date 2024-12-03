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
    prodPagePath: "/zIdNZ691UKT",
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
    prodPagePath: "/zIdAZ3002UK",
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
    prodPagePath: "/zIdAZ3000UKT",
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
    prodPagePath: "/zIdAZ3900UKT",
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
    prodPagePath: "/zIdNV602UK",
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
    prodPagePath: "/zIdNZ810UKT",
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
    prodPagePath: "/zIdIP1251UKT",
    prodInfoImg: prod1cordless,
    technology: "PowerFins Technology",
    whatsIncluded: ["Cordless vacuum", "Charger", "Pet multi-tool"],
  },
  {
    id: 8,
    name: "IZ202UKT",
    info: "Cordless vacuum with superior performance for pet hair removal.",
    price: 250,
    image: prod2cordless,
    prodPagePath: "/zIdIZ202UKT",
    prodInfoImg: prod2cordless,
    technology: "Flexology + Anti-Hair Wrap",
    whatsIncluded: ["Cordless vacuum", "Pet tool", "Wall mount"],
  },
  {
    id: 9,
    name: "IZ202UKTDB",
    info: "Premium cordless vacuum with extended battery life and dual brushrolls.",
    price: 500,
    image: prod3cordless,
    prodPagePath: "/zIdIZ202UKTDB",
    prodInfoImg: prod3cordless,
    technology: "DuoClean PowerFins",
    whatsIncluded: ["Cordless vacuum", "Extra battery", "Multi-surface tool"],
  },
  {
    id: 10,
    name: "IZ400UKT",
    info: "Advanced cordless vacuum designed for all-floor cleaning.",
    price: 130,
    image: prod4cordless,
    prodPagePath: "/zIdIZ400UKT",
    prodInfoImg: prod4cordless,
    technology: "Anti-Hair Wrap + Flexology",
    whatsIncluded: ["Cordless vacuum", "Car cleaning kit", "Upholstery tool"],
  },
  {
    id: 11,
    name: "IZ202UK",
    info: "Compact and efficient cordless vacuum with versatile cleaning capabilities.",
    price: 299,
    image: prod5cordless,
    prodPagePath: "/zIdIZ202UK",
    prodInfoImg: prod5cordless,
    technology: "Cyclonic Suction Technology",
    whatsIncluded: ["Cordless vacuum", "Dusting brush", "Charger"],
  },
  {
    id: 12,
    name: "IZ420UKTDB",
    info: "Powerful cordless vacuum with large dust capacity for extended use.",
    price: 399,
    image: prod6cordless,
    prodPagePath: "/zIdIZ420UKTDB",
    prodInfoImg: prod6cordless,
    technology: "HyperVelocity Suction",
    whatsIncluded: ["Cordless vacuum", "Floor nozzle", "Spare filters"],
  },
];

export const PRODUCTS_AIRPURIFIERS = [
  {
    id: 13,
    name: "HP300UK",
    info: "Compact air purifier for small to medium-sized rooms.",
    price: 100,
    image: prod1AirPur,
    prodPagePath: "/zIdHP300UK",
    prodInfoImg: prod1AirPur,
    technology: "HEPA Filtration",
    whatsIncluded: ["Air purifier", "Replacement filter", "User manual"],
  },
  {
    id: 14,
    name: "HP150UK",
    info: "Efficient air purifier with odor-neutralizing technology.",
    price: 150,
    image: prod2AirPur,
    prodPagePath: "/zIdHP150UK",
    prodInfoImg: prod2AirPur,
    technology: "Odor-Eliminating HEPA Filter",
    whatsIncluded: ["Air purifier", "Filter set", "Power cord"],
  },
  {
    id: 15,
    name: "HC450",
    info: "Advanced air purifier for large spaces with smart controls.",
    price: 300,
    image: prod3AirPur,
    prodPagePath: "/zIdHC450",
    prodInfoImg: prod3AirPur,
    technology: "Smart HEPA Filtration + Air Quality Monitor",
    whatsIncluded: ["Air purifier", "Remote control", "Filter set"],
  },
];

export const PRODUCTS_HAIRDRY = [
  {
    id: 16,
    name: "HD731UK",
    info: "High-performance hair dryer with ionic technology for smooth results.",
    price: 209,
    image: prod1HairDry,
    prodPagePath: "/zIdHD731UK",
    prodInfoImg: prod1HairDry,
    technology: "Ionic Technology",
    whatsIncluded: ["Hair dryer", "Concentrator nozzle", "Diffuser"],
  },
  {
    id: 17,
    name: "HD752UK",
    info: "Professional-grade hair dryer with customizable heat settings.",
    price: 299,
    image: prod2HairDry,
    prodPagePath: "/zIdHD752UK",
    prodInfoImg: prod2HairDry,
    technology: "Ceramic Ionic Technology",
    whatsIncluded: ["Hair dryer", "Styling attachments", "Travel bag"],
  },
  {
    id: 18,
    name: "HD731202UK",
    info: "Lightweight hair dryer with fast-drying capabilities.",
    price: 199,
    image: prod3HairDry,
    prodPagePath: "/zIdHD731202UK",
    prodInfoImg: prod3HairDry,
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

export const PRODUCTS_CATEGORY = [
  {
    id: 0,
    name: "corded hoovers",
    pathLink: "/corded-hoovers",
    title: "Powerful Corded Hoovers",
    info: "Explore our range of corded hoovers designed for high-performance cleaning with long-lasting power.",
  },
  {
    id: 1,
    name: "cordless hoovers",
    pathLink: "/cordless-hoovers",
    title: "Versatile Cordless Hoovers",
    info: "Discover lightweight and convenient cordless hoovers for hassle-free cleaning anywhere in your home.",
  },
  {
    id: 2,
    name: "hair dryers",
    pathLink: "/hairDry-page",
    title: "Professional Hair Dryers",
    info: "Check out our range of hair dryers engineered for fast drying and salon-quality results at home.",
  },
  {
    id: 3,
    name: "air purifiers",
    pathLink: "/airPurifier-page",
    title: "Efficient Air Purifiers",
    info: "Breathe clean air with our air purifiers, designed to remove dust, allergens, and other impurities.",
  },
];
