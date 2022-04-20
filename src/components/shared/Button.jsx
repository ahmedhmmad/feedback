import React from "react";

import PropTypes from "prop-types";

function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  type: "submit",
  version: "primary",
  isDisabled: false,
};

Button.propTypes = {
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
