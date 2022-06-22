import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    discountPercent: "64",
    prevPrice:2440,
    brand: "CAMPUS SUTRA",
    isInStock: true,
    name: "Zip-Front Bomber Jacket with Insert Pockets",
    rating: 3.5 ,
    price: 599,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20220303/Gqic/62205725f997dd03e2fe3cb7/campus_sutra_blue_zip-front_bomber_jacket_with_insert_pockets.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "55",
    prevPrice:899,
    brand: "PERFORMAX",
    isInStock: true,
    name: "Textured Zip-Front Jacket with Raglan Sleeves",
    rating: 4.5 ,
    price: 405,
    categoryName: "kids",
    image:"https://assets.ajio.com/medias/sys_master/root/20220211/8Xsk/620658d3f997dd03e2cb686e/performax_navy_blue_textured_zip-front_jacket_with_raglan_sleeves.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "64",
    prevPrice:2260,
    brand: "ALLEN SOLLY",
    isInStock: false,
    name: "Zip-Front Jacket with Insert Pockets",
    rating: 4.3 ,
    price: 599,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20211101/VLmQ/617fdd4df997ddf8f1f50a4f/campus_sutra_brown_zip-front_jacket_with_insert_pockets.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "64",
    prevPrice:2260,
    brand: "CAMPUS SUTRA",
    isInStock: true,
    name: "Zip-Front Bomber Jacket with Insert Pockets",
    rating: 4.3 ,
    price: 599,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20220303/QS6C/62205632aeb26921afc49f95/-473Wx593H-463599656-brown-MODEL7.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "50",
    prevPrice:1899,
    brand: "FORT COLLINS",
    isInStock: true,
    name: "Colourblock Zip-Front Hoodie",
    rating: 4.5 ,
    price: 950,
    categoryName: "kids",
    image:"https://assets.ajio.com/medias/sys_master/root/20211111/arpZ/618c1b00f997ddf8f10183a7/fort_collins_olive_green_colourblock_zip-front_hoodie.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "64",
    prevPrice:2499,
    brand: "ALLEN SOLLY",
    isInStock: false,
    name: "Solid Full-length Jacket",
    rating: 2.8 ,
    price: 900,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20211030/W8l2/617c6106aeb2690110b2a3de/campus_sutra_black_textured_jacket_with_insert_pockets.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "55",
    prevPrice:1999,
    brand: "CAMPUS SUTRA",
    isInStock: true,
    name: "Colourblock Biker Jacket with Zip Closure",
    rating: 3.9 ,
    price: 900,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20211109/ThRd/618aa4a5aeb2690110be440d/campus_sutra_black_colourblock_zip-front_jacket.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "55",
    prevPrice:5799,
    brand: "BELLE FILLE",
    isInStock: true,
    name: "Textured Jacket with Insert Pockets",
    rating: 3.2 ,
    price: 2610,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20211223/C8Bx/61c36f2faeb269011017877e/u.s._polo_assn._black_textured_jacket_with_insert_pockets.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "27",
    prevPrice:5999,
    brand: "SUPERDRY",
    isInStock: false,
    name: "Glacier Padded Puffer Hooded Jacket with Faux Fur",
    rating: 4.5 ,
    price: 2489,
    categoryName: "women",
    image:"https://assets.ajio.com/medias/sys_master/root/20210721/tHtQ/60f844fbf997ddb3123029bc/superdry__glacier_padded_puffer_hooded_jacket_with_faux_fur.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "65",
    prevPrice:2899,
    brand: "INDIAN TERRAIN BOYS",
    isInStock: true,
    name: "Colourblock Quilted Hooded Jacket",
    rating: 4.5 ,
    price: 1015,
    categoryName: "kids",
    image:"https://assets.ajio.com/medias/sys_master/root/20210831/XYNU/612e20fff997ddce89b4917b/indian_terrain_boys_grey_%26_navy_blue_colourblock_quilted_hooded_jacket.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "27",
    prevPrice:5999,
    brand: "SUPERDRY",
    isInStock: true,
    name: "Everest Zip-Front Puffer Jacket",
    rating: 4.5 ,
    price: 2219,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20210714/mr74/60eddec0aeb269a9e3423851/superdry_navy_blue_everest_zip-front_puffer_jacket.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "39",
    prevPrice:7499,
    brand: "SUPERDRY",
    isInStock: true,
    name: "Expedition Down Windbreaker Quilted Hooded Jacket",
    rating: 2.5 ,
    price: 2649,
    categoryName: "women",
    image:"https://assets.ajio.com/medias/sys_master/root/20211119/a7vE/6196cd63aeb2690110cd2d37/superdry_olive_green_expedition_down_windbreaker_quilted_hooded_jacket.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "45",
    prevPrice:2650,
    brand: "BELLE FILLE",
    isInStock: true,
    name: "Hooded Zip-Front Bomber Jacket",
    rating: 4.5 ,
    price: 1458,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20211208/K8SJ/61aff667aeb269011002dc1e/fort_collins_coffee_brown_hooded_zip-front_bomber_jacket.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "17",
    prevPrice:2999,
    brand: "FORT COLLINS",
    isInStock: true,
    name: "Quilted Puffer Hooded Jacket",
    rating: 1.8 ,
    price: 2550,
    categoryName: "women",
    image:"https://assets.ajio.com/medias/sys_master/root/20211214/cBT3/61b8b721f997ddf8f150a610/fort_collins_black_quilted_puffer_hooded_jacket.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "55",
    prevPrice:899,
    brand: "PERFORMAX",
    isInStock: true,
    name: "Textured Zip-Front Jacket with Raglan Sleeves",
    rating: 4.8 ,
    price: 405,
    categoryName: "kids",
    image:"https://assets.ajio.com/medias/sys_master/root/20220125/W8pV/61eef04bf997dd662337dbb3/performax_black_textured_zip-front_jacket_with_raglan_sleeves.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "40",
    prevPrice:1699,
    brand: "BELLE FILLE",
    isInStock: true,
    name: "Washed Jacket with Insert Pockets",
    rating: 4.2 ,
    price: 1019,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20220104/2V2z/61d35315f997dd66230f628c/fort_collins_sky_blue_washed_jacket_with_insert_pockets.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "40",
    prevPrice:1119,
    brand: "FORT COLLINS",
    isInStock: true,
    name: "Puffer Zip-Front Hooded Bomber Jacket",
    rating: 3.2 ,
    price: 1019,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20211207/Kcf3/61ae8f2ff997ddf8f13c3d29/fort_collins_mustard_yellow_puffer_zip-front_hooded_bomber_jacket.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "60",
    prevPrice:2199,
    brand: "BELLE FILLE",
    isInStock: true,
    name: "Puffer Zip-Front Hooded Bomber Jacket",
    rating: 2.8 ,
    price: 880,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20211005/keWw/615c18b3aeb2692b85ad7e88/fort_collins_olive_green_zip-front_jacket_with_contrast_taping.jpg"
  },
  {
    _id: uuid(),
    discountPercent: "60",
    prevPrice:2899,
    brand: "FORT COLLINS",
    isInStock: true,
    name: "Zip-Front Hooded Puffer Jacket",
    rating: 4.5 ,
    price: 1160,
    categoryName: "men",
    image:"https://assets.ajio.com/medias/sys_master/root/20201127/0tcP/5fbffc07f997dd8c83ac4846/fort_collins_brown_zip-front_hooded_puffer_jacket.jpg"
  },
];
