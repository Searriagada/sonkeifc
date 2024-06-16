import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { ReactComponent as HamburgerButton } from './assets/hamburger-button.svg';
import './App.css';
import logo from './assets/LOGO.webp';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  /**
   * Cambia el estado de false a true y viceversa para mostrar u ocultar el menú lateral en dispositivos pequeños
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  /**
   * Función para lograr que menú inicio regrese al inicio
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Router>
        <div className="container">
          <header className="header">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <HamburgerButton className='hamburger' onClick={toggleMenu} />
            {/* Nav para el menu de pantallas grandes*/}
            <div className='nav-wrapper'>
              <nav className="navigation">
                <ul>
                  <li>
                    <NavLink exact to="/" onClick={scrollToTop} >Inicio</NavLink>
                  </li>
                  <li>
                    <a href="#historia" activeClassName="active" >Historia</a>
                  </li>
                  <li>
                    <a href="#equipo" activeClassName="active" >Equipo</a>
                  </li>
                  <li>
                    <a href="#entrenamiento" activeClassName="active" >Entrenamiento</a>
                  </li>
                  <li>
                    <a href="#testimonio" activeClassName="active" >Testimonios</a>
                  </li>
                  <li>
                    <a href="#contacto" activeClassName="active" >Contacto</a>
                  </li>
                </ul>
              </nav>
            </div>

          </header>

          {/* Side menu para dispositivos de pantallas pequeñas */}
          <div className={`overlay-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
          <nav className={`side-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <NavLink exact to="/" onClick={scrollToTop} >Inicio</NavLink>
              </li>
              <li>
                <a href="#historia" activeClassName="active" onClick={toggleMenu}>Historia</a>
              </li>
              <li>
                <a href="#equipo" activeClassName="active" onClick={toggleMenu}>Equipo</a>
              </li>
              <li>
                <a href="#entrenamiento" activeClassName="active" onClick={toggleMenu}>Entrenamiento</a>
              </li>
              <li>
                <a href="#testimonio" activeClassName="active" onClick={toggleMenu}>Testimonios</a>
              </li>
              <li>
                <a href="#contacto" activeClassName="active" onClick={toggleMenu}>Contáctenos</a>
              </li>
            </ul>
          </nav>
          <main>
            <Routes>
              <Route exact path ="/" element={<Home />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </>
  );
};

export default App;

