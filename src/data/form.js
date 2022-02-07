import { v4 as uuidv4 } from "uuid";

export const sendCode = [
  { name: "phone", type: "tel", placeholder: "phone number", id: uuidv4() },
];

export const verify = [
  {
    name: "verify",
    type: "number",
    placeholder: "verification code",
    id: uuidv4(),
  },
];

export const userName = [
  {
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    id: uuidv4(),
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    id: uuidv4(),
  },
];
