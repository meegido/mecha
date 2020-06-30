import PropTypes from "prop-types";
import React from "react";
import Nav from "./nav";
import "./header.css";

import Mecha from "../images/fire.svg";

const Header = () => (
  <header className="header">
    <Mecha className="mo-fire" />
    <Nav />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
