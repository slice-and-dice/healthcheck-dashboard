import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <ul class="header">
    <li class="listItem">
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        Home
      </Link>
    </li>
    <li class="listItem">
      <Link style={{ color: "white", textDecoration: "none" }} to="/dev-status">
        Dev Status
      </Link>
    </li>
    <li class="listItem">
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/test-status"
      >
        Test Status
      </Link>
    </li>
    <li class="listItem">
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/staging-status"
      >
        Staging Status
      </Link>
    </li>
    <li class="listItem">
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/prod-status"
      >
        Prod Status
      </Link>
    </li>
  </ul>
);

export default Header;
