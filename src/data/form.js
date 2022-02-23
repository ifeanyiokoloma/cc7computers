import { v4 as uuidv4 } from "uuid";

export const sendCode = [
  {
    name: "phoneNumber",
    type: "tel",
    placeholder: "phone number",
    id: uuidv4(),
    required: true,
  },
];

export const verify = [
  {
    name: "otp",
    type: "number",
    placeholder: "verification code",
    id: uuidv4(),
    required: true,
  },
];

export const userNameForm = [
  {
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    id: uuidv4(),
    required: true,
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    id: uuidv4(),
    required: true,
  },
];

export const emailForm = [
  {
    name: "email",
    type: "email",
    placeholder: "email",
    id: uuidv4(),
    required: true,
  },
];
