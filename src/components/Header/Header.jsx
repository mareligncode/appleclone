import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/icons/logo-sm.png";
import search from "../../assets/images/icons/search-icon-sm.png";
import cart from "../../assets/images/icons/cart-sm.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu after click
    }
  };

  return (
    <header>
      <nav className="navbar fixed-top navbar-light bg-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="navbar-brand"
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("home")}
          />

          {/* Desktop Links */}
          <ul className="navbar-nav d-none d-lg-flex flex-row align-items-center">
            {["mac", "iphone", "ipad", "watch", "tv", "music"].map((section) => (
              <li className="nav-item mx-2" key={section}>
                <button
                  className="nav-link btn"
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
            <li className="nav-item mx-2">
              <img
                src={search}
                alt="Search"
                style={{ cursor: "pointer", width: "24px", height: "24px" }}
                onClick={() => scrollToSection("home")}
              />
            </li>
            <li className="nav-item mx-2">
              <img
                src={cart}
                alt="Cart"
                style={{ cursor: "pointer", width: "24px", height: "24px" }}
                onClick={() => scrollToSection("tv")}
              />
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Mobile Overlay Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <ul className="mobile-nav">
            {["mac", "iphone", "ipad", "watch", "tv", "music"].map((section) => (
              <li key={section}>
                <button
                  className="mobile-link"
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <img
                src={search}
                alt="Search"
                className="mobile-icon"
                onClick={() => scrollToSection("home")}
              />
            </li>
            <li>
              <img
                src={cart}
                alt="Cart"
                className="mobile-icon"
                onClick={() => scrollToSection("tv")}
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
