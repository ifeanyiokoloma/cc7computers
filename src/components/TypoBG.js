import React from "react";

const TypoBG = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        background:
          "linear-gradient(rgba(0, 0, 0,.9), rgba(0, 0, 0,.9)), url('./images/bg/typo.jpg') fixed center/cover",
        // color: "white",
        paddingBottom: "1rem",
      }}
    >
      {children}
    </div>
  );
};

export default TypoBG;
