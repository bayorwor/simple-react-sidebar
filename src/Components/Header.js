import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  return (
    <header>
      <section className="navheader">
        <div className="brand">
          <h1>AMS</h1>
        </div>
        <div className="headerlinks">
          <Link className="headerlink" to="/">
            sign in
          </Link>
          <Link className="headerlink" to="/">
            Register
          </Link>
          <Link className="headerlink" to="/">
            <VscAccount />
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
