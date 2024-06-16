import React from "react";
import logo from '../assets/LOGO.webp';
import logoInst from '../assets/instagramIcon.svg';
import logoFace from '../assets/facebookIcon.svg';
import logoTiktok from '../assets/tiktokIcon.svg';
import '../styles/Footer.css';

export function Footer() {
    return (
        <footer>
            <div class="container__footer">
                <div class="box__footer">
                    <div class="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <div class="box__footer">
                    <h2>Nosotros</h2>
                    <p>Av. América #670, San Bernardo, Santiago de Chile</p>
                    <p>info@sonkei.cl</p>
                    <a href="https://wa.me/+56997584316?text=Hola,%20¿te%20gustaría%20compartir%20tu%20poder%20económico?">+56 9 9758 4316</a>
                </div>

                <div class="box__footer">
                    <h2>Redes Sociales</h2>
                    <a href="https://www.instagram.com/colocolooficial"><img src={logoInst} alt="Instagram" />Instagram</a>
                    <a href="https://www.facebook.com/cruzados.cl"><img src={logoFace} alt="Facebook" />Facebook</a>
                    <a href="https://www.tiktok.com/@udechile"><img src={logoTiktok} alt="TikTok" />Tiktok</a>
                </div>

            </div>

            <div class="box__copyright">
                <p>Todos los derechos reservados © 2024 <b>SonkeiFC</b></p>
            </div>
        </footer>
    );
}