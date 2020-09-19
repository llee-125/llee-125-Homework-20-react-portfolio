import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <Link to="/">
        <h1 className="title">Louise Lee</h1>
      </Link>
      <button id="portfolio">
        <Link to="/portfolio">
          <h3 className="portfolio">Portfolio</h3>
        </Link>
      </button>
    </header>
  );
}
