import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
      image:"https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    _id: uuid(),
    categoryName: "women",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image:"https://media.istockphoto.com/photos/jacket-picture-id518177270?b=1&k=20&m=518177270&s=170667a&w=0&h=MJ5MuBZMKjXN8x4jAbxLhIaGQSqi1CPEWpRd3zxtpoo="
  },
  {
    _id: uuid(),
    categoryName: "kids",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image:"https://media.istockphoto.com/photos/childrens-winter-jacket-stylish-silver-gray-warm-winter-jacket-for-picture-id1302415024?b=1&k=20&m=1302415024&s=170667a&w=0&h=OmraXtt2bYFIYAJsS6e2t9kMh-hKhQ4ZmjBa2k8Ziw4="
  },
];
