import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavSidebar.css'; // Importiere die CSS-Datei für die Navigation

const NavSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Culinarium <span>Atmosphera</span></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={{ color: 'white' }}><Link to="menu" smooth={true} offset={-70}>Menü</Link></li>
            <li className="nav-item" style={{ color: 'white' }}><Link to="reservation" smooth={true} offset={-70}>Reservierung</Link></li>
            <li className="nav-item" style={{ color: 'white' }}><Link to="chefs" smooth={true} offset={-70}>Küchenchefs</Link></li>
            <li className="nav-item" style={{ color: 'white' }}><Link to="contact" smooth={true} offset={-70}>Kontakt</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavSidebar;
