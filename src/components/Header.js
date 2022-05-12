import PropTypes from "prop-types";
import React from "react";

const Header = ({
  element,
  element2,
  title,
  title2,
  textAlign,
  boxClass,
  key,
  txtColor,
  textClass,
  txtSize,
}) => {
  const textStyle = {
    fontSize: txtSize,
  };
  return (
    <header
      key={key}
      className={boxClass}
      style={{
        margin: 0,
        padding: 0,
        color: txtColor,
        textAlign: { textAlign },
      }}
    >
      {title && element === "h1" && (
        <h1 style={textStyle} className={textClass}>
          {title}
        </h1>
      )}
      {title && element === "h2" && (
        <h2 style={textStyle} className={textClass}>
          {title}
        </h2>
      )}
      {title && element === "h3" && (
        <h3 style={textStyle} className={textClass}>
          {title}
        </h3>
      )}
      {title && element === "h4" && (
        <h4 style={textStyle} className={textClass}>
          {title}
        </h4>
      )}
      {title && element === "h5" && (
        <h5 style={textStyle} className={textClass}>
          {title}
        </h5>
      )}
      {title && element === "h6" && (
        <h6 style={textStyle} className={textClass}>
          {title}
        </h6>
      )}
      {title2 && element2 === "h1" && (
        <h1 style={textStyle} className={textClass}>
          {title2}
        </h1>
      )}
      {title2 && element2 === "h2" && (
        <h2 style={textStyle} className={textClass}>
          {title2}
        </h2>
      )}
      {title2 && element2 === "h3" && (
        <h3 style={textStyle} className={textClass}>
          {title2}
        </h3>
      )}
      {title2 && element2 === "h4" && (
        <h4 style={textStyle} className={textClass}>
          {title2}
        </h4>
      )}
      {title2 && element2 === "h5" && (
        <h5 style={textStyle} className={textClass}>
          {title2}
        </h5>
      )}
      {title2 && element2 === "h6" && (
        <h6 style={textStyle} className={textClass}>
          {title2}
        </h6>
      )}
    </header>
  );
};

Header.propTypes = {
  textAlign: PropTypes.string,
};

Header.defaultProps = {
  textAlign: "center",
};

export default Header;
