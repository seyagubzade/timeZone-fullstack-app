import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="d-flex p-4 justify-content-between">
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp"
              alt="logo"
            />
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/wishlist"}>Wishlist</Link>
              </li>
              <li>
                <Link to={"/basket"}>Basket</Link>
              </li>
              <li>
                <Link to={"/add"}>Add new</Link>
              </li>
            </ul>
          </div>
          <div className="icons">
            <button className="btn">
              <i className="fas fa-search"></i>
            </button>
            <button className="btn">
              <i className="fas fa-user"></i>
            </button>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
          <button
            className="btn btn-light toggle-menu"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {toggleMenu && (
          <div className="toggle-menu-content">
            <div className="links">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/wishlist"}>Wishlist</Link>
                </li>
                <li>
                  <Link to={"/basket"}>Basket</Link>
                </li>
                <li>
                  <Link to={"/add"}>Add new</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        
      </div>
    </header>
  );
};

export default Header;
