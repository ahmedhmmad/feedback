import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <div className="container">
        <h2>Feedback UI</h2>
        <h3>{props.text}</h3>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Hello from Default Props",
};
Header.prototype = {
  text: PropTypes.string,
};

export default Header;
