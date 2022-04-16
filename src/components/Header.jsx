import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>Feedback UI</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Hello from Default Props",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};
Header.prototype = {
  text: PropTypes.string,
};

export default Header;
