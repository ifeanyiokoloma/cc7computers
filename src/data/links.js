import { v4 as uuidv4 } from "uuid";

export const mainLinks = [
  {
    name: "shop",
    link: "#",
    id: uuidv4(),
    child: [
      { name: "computers", id: uuidv4() },
      { name: "accessories", id: uuidv4() },
    ],
  },
  {
    name: "services",
    link: "services",
    id: uuidv4(),
  },
  {
    name: "contact",
    link: "contact",
    id: uuidv4(),
  },
  {
    name: "about",
    link: "about",
    id: uuidv4(),
  },
];
