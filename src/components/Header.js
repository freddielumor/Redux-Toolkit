import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        Home
      </Link>
      <Link className="header__link" to="/users">
        Users
      </Link>
      <Link className="header__link" to="/posts">
        Posts
      </Link>
    </div>
  );
};

export default Header;
