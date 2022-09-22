import { v4 as uuidv4 } from "uuid";
import { RiComputerLine } from "react-icons/ri";
import { BsKeyboardFill } from "react-icons/bs";
import { GiScrewdriver } from "react-icons/gi";
import React from "react";

export const mainLinks = [
  {
    name: "computers",
    link: "computers",
    icon: <RiComputerLine />,
    id: uuidv4(),
  },
  {
    name: "accessories",
    link: "accessories",
    icon: <BsKeyboardFill />,
    id: uuidv4(),
  },
  {
    name: "services",
    link: "services",
    icon: <GiScrewdriver />,
    id: uuidv4(),
  },
];

export const business = [
  {
    name: "Computers",
    link: "computers",
    id: uuidv4(),
  },
  {
    name: "Accessories",
    link: "accessories",
    id: uuidv4(),
  },
  {
    name: "Services",
    link: "services",
    id: uuidv4(),
  },
];

export const company = [
  {
    name: "Contact Us",
    link: "contact",
    id: uuidv4(),
  },
  {
    name: "About Us",
    link: "about",
    id: uuidv4(),
  },
  {
    name: "Our Team",
    link: "team",
    id: uuidv4(),
  },
];
