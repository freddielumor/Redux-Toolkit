import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/users">Users</Link>
      <Link to="/posts">Posts</Link>
    </>
  );
};

export default Header;
