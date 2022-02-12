import { v4 as uuidv4 } from "uuid";

export const sendCode = [
  { name: "phoneNumber", type: "tel", placeholder: "phone number", id: uuidv4() },
];

export const verify = [
  {
    name: "otp",
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
