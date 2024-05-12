import React from "react";
import PropTypes from "prop-types";
import "./globalStyle.scss";
import "react-toastify/dist/ReactToastify.css";

function GlobalStyles({ children }) {
  return React.Children.only(children);
}
GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GlobalStyles;
