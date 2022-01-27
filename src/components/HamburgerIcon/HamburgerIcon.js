const HamburgerIcon = ({ isMenu, setMenu, bgColor }) => {
  const toggleMenu = () => setMenu(!isMenu);

  const hamburgerStyles = {
    container: { cursor: "pointer" },
    bar1: {
      transform: isMenu && "rotate(-45deg) translate(-9px, 6px)",
      backgroundColor: bgColor,
      width: "35px",
      height: "5px",
      margin: "6px 0",
      transition: "0.4s",
    },
    bar2: {
      opacity: isMenu && 0,
      backgroundColor: bgColor,
      width: "35px",
      height: "5px",
      margin: "6px 0",
      transition: "0.4s",
    },
    bar3: {
      transform: isMenu && "rotate(45deg) translate(-8px, -8px)",
      backgroundColor: bgColor,
      width: "35px",
      height: "5px",
      margin: "6px 0",
      transition: "0.4s",
    },
  };

  const { container, bar1, bar2, bar3 } = hamburgerStyles;

  return (
    <div style={container} onClick={toggleMenu}>
      <div style={bar1}></div>
      <div style={bar2}></div>
      <div style={bar3}></div>
    </div>
  );
};

export default HamburgerIcon;