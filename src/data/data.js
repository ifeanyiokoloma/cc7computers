import { v4 as uuidv4 } from "uuid";

export const computer = [
  { name: "brand", type: "text", id: uuidv4() },
  { name: "name", type: "text", id: uuidv4() },
  { name: "model", type: "text", id: uuidv4() },
  { name: "price", type: "number", id: uuidv4() },
  { name: "processor", type: "text", id: uuidv4() },
  { name: "ram", type: "text", id: uuidv4() },
  { name: "storage", type: "text", id: uuidv4() },
  { name: "graphics", type: "text", id: uuidv4() },
  { name: "os", type: "text", id: uuidv4() },
  { name: "quantity", type: "number", id: uuidv4() },
  { name: "image", type: "file", id: uuidv4() },
];

export const accessory = [
  { name: "name", type: "text", id: uuidv4() },
  { name: "brand", type: "text", id: uuidv4() },
  { name: "model", type: "text", id: uuidv4() },
  { name: "price", type: "number", id: uuidv4() },
  { name: "quantity", type: "number", id: uuidv4() },
  { name: "image", type: "file", id: uuidv4() },
];

export const employees = [
  { name: "names", type: "text", id: uuidv4() },
  { name: "skills", type: "text", id: uuidv4() },
  { name: "job", type: "text", id: uuidv4() },
  {
    name: "image",
    type: "file",
    accept: "image/png, image/jpeg",
    id: uuidv4(),
  },
];

export const login = [{}];


