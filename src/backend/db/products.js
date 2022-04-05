import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Urban ranger charcoal solid Jacket",
    author: "Shiv Khera",
    price: "849",
    categoryName: "men",
    image:"https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpantaloons.imgix.net%2Fimg%2Fapp%2Fproduct%2F6%2F650793-6559986.jpg%3Fw%3D295%26q%3D75%26exp%3D1&w=1920&q=75"
  },
  {
    _id: uuid(),
    name: "Roadster Men Black Solid Tailored Jacket",
    author: "Junaid Qureshi",
    price: "899",
    categoryName: "men",
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/6411326/2018/11/26/e4f10827-5349-4ea1-ba24-033b91ce52c01543209814290-Roadster-Men-Black-Solid-Tailored-Jacket-2741543209814165-3.jpg"
  },
  {
    _id: uuid(),
    name: "HONEY Sage Green Solid Jacket",
    author: "Junaid Qureshi",
    price: "1349",
    categoryName: "women",
    image:"https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpantaloons.imgix.net%2Fimg%2Fapp%2Fproduct%2F6%2F647282-6508439.jpg%3Fw%3D295%26q%3D75%26exp%3D1&w=1920&q=75"
  },
  {
    _id: uuid(),
    name: "Highlander Men English Green Denim Jacket",
    author: "Shiv Khera",
    price: "840",
    categoryName: "men",
    image:"https://getketchadmin.getketch.com/product/8905040996561/660/HLJK000552_1.jpg"
  },
  {
    _id: uuid(),
    name: "BARE DENIM Tan Solid Jacket",
    author: "Junaid Qureshi",
    price: "1799",
    categoryName: "men",
    image:"https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpantaloons.imgix.net%2Fimg%2Fapp%2Fproduct%2F6%2F644598-6463608.jpg%3Fw%3D295%26q%3D75%26exp%3D1&w=1920&q=75"
  },
];
