import React from "react";

const Header = ({ header, header2, title, title2, className }) => {
  return (
    <header
      className={className}
      style={{
        textAlign: "center",
        margin: 0,
        padding: 0,
      }}
    >
      {header === "h1" && <h1>{title}</h1>}
      {header === "h2" && <h2>{title}</h2>}
      {header === "h3" && <h3>{title}</h3>}
      {header === "h4" && <h4>{title}</h4>}
      {header === "h5" && <h5>{title}</h5>}
      {header === "h6" && <h6>{title}</h6>}
      {header2 === "h1" && <h1>{title2}</h1>}
      {header2 === "h2" && <h2>{title2}</h2>}
      {header2 === "h3" && <h3>{title2}</h3>}
      {header2 === "h4" && <h4>{title2}</h4>}
      {header2 === "h5" && <h5>{title2}</h5>}
      {header2 === "h6" && <h6>{title2}</h6>}
    </header>
  );
  //   switch (header) {
  //     case "h1":
  //       return (
  //         <header>
  //           <h1>{title}</h1>
  //         </header>
  //       );
  //     case "h2":
  //       return (
  //         <header>
  //           <h2>{title}</h2>
  //         </header>
  //       );
  //     case "h3":
  //       return (
  //         <header>
  //           <h3>{title}</h3>
  //         </header>
  //       );
  //     case "h4":
  //       return (
  //         <header>
  //           <h4>{title}</h4>
  //         </header>
  //       );
  //     case "h5":
  //       return (
  //         <header>
  //           <h5>{title}</h5>
  //         </header>
  //       );
  //     case "h6":
  //       return (
  //         <header>
  //           <h6>{title}</h6>
  //         </header>
  //       );
  //   }
};

export default Header;
