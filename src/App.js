import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import logo from './assets/LOGO.webp';
import { ReactComponent as HamburgerButton } from './assets/hamburger-button.svg';
import { ImgTop } from './components/ImgTop';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Cambia el estado de false a true y viceversa para mostrar u ocultar el menú lateral en dispositivos pequeños
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
                    <NavLink exact to="/" activeClassName="active" className="nav-link">Inicio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/historia" activeClassName="active" className="nav-link">Historia</NavLink>
                  </li>
                  <li>
                    <NavLink to="/equipo" activeClassName="active" className="nav-link">Equipo</NavLink>
                  </li>
                  <li>
                    <NavLink to="/entrenamiento" activeClassName="active" className="nav-link">Entrenamiento</NavLink>
                  </li>
                  <li>
                    <NavLink to="/testimonios" activeClassName="active" className="nav-link">Testimonios</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contacto" activeClassName="active" className="nav-link">Contacto</NavLink>
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
                <NavLink exact to="/" activeClassName="active" className="nav-link" onClick={toggleMenu}>Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/historia" activeClassName="active" className="nav-link" onClick={toggleMenu}>Historia</NavLink>
              </li>
              <li>
                <NavLink to="/equipo" activeClassName="active" className="nav-link" onClick={toggleMenu}>Equipo</NavLink>
              </li>
              <li>
                <NavLink to="/entrenamiento" activeClassName="active" className="nav-link" onClick={toggleMenu}>Entrenamiento</NavLink>
              </li>
              <li>
                <NavLink to="/testimonios" activeClassName="active" className="nav-link" onClick={toggleMenu}>Testimonios</NavLink>
              </li>
              <li>
                <NavLink to="/contacto" activeClassName="active" className="nav-link" onClick={toggleMenu}>Contáctenos</NavLink>
              </li>
            </ul>
          </nav>
          <main>
            <section className='imgtop-section'>
              <ImgTop
              text='VEN A SER PARTE DE LOS MEJORES'
            />
            </section>
            
          </main>
        </div>
      </Router>
    </>
  );
};

export default App;

