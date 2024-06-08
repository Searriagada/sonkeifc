import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/ButtonContactUs.css'

export function ContactUsButton() {
    return (
      <>
        <NavLink to="/contacto" className={({ isActive }) => isActive ? "contact-button active" : "contact-button"}>
          Inscribete aquí
        </NavLink>

        <Routes>
            {/* <Route path="/contacto" element={<Contact />} /> */}
        </Routes>
      </>
    );
  }