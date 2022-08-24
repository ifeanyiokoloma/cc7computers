import { motion } from "framer-motion";
import React from "react";
import {
  StyledBox1,
  StyledBox2,
  StyledBox3,
  StyledHamburger,
} from "./StyledHamburgerIcon";

const HamburgerIcon = ({ isMenu, setMenu, bgColor, className }) => {
  const toggleMenu = () => setMenu(!isMenu);

  const hamburgerStyles = {
    box1: {
      transform: isMenu && "rotate(-45deg) translate(-9px, 6px)",
    },
    box2: {
      opacity: isMenu && 0,
    },
    box3: {
      transform: isMenu && "rotate(45deg) translate(-8px, -8px)",
    },
  };

  const { box1, box2, box3 } = hamburgerStyles;

  return (
    <StyledHamburger onClick={toggleMenu} className={className}>
      <StyledBox1 sx={box1} bgcolor={bgColor}></StyledBox1>
      <StyledBox2 sx={box2} bgcolor={bgColor}></StyledBox2>
      <StyledBox3 sx={box3} bgcolor={bgColor}></StyledBox3>
    </StyledHamburger>
  );
};

export default HamburgerIcon;
