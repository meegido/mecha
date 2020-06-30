import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import "./header.css";
import Nav from "./nav";

import Mecha from "../images/fire.svg";

const Header = () => (
  <header className="header">
    <Link to="/">
      <Mecha className="mo-fire" />
    </Link>

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
