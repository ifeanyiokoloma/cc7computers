import { v4 as uuidv4 } from "uuid";

export const home = {
  heading: "Your Computer Support Center",
  paragraph:
    "CC7 Computers offers everything computer related: Computer Sales, Repair, Maintenance, Training, and Website Development.",
  btns: [
    { item: "Computers", key: uuidv4(), link: "/computers" },
    { item: "Accessories", key: uuidv4(), link: "/accessories" },
  ],
};

export const about = {
  heading: "About Us",
  paragraph:
    "CC7 Computers was founded by an experienced CompTIA professional who has a mandate in computer repairs and maintenance, powered by a team of fellow professionals.",
};

export const contact = {
  heading: "Contact Us",
  paragraph:
    "Head Office: \n 142 Zik's Avenue, First Floor, Opposite Market 3, \n Eke Awka, Awka, \n Anambra State",
};

export const services = {
  heading: "Services",
  paragraph:
    "Different local and online shops offer computer services. We don't just offer computer services, we offer them with a difference. We assembled a group of elite professionals who are experienced in computer operations and tasked them with your satisfaction.",
};

export const payment = {
  heading: "Payment",
  paragraph: "Choose A Payment Method",
  btns: [{ item: "Transfer", key: uuidv4(), link: "/transfer" }],
};
