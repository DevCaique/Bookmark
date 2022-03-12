import { useState } from 'react';
import Logo from '../assets/logo-bookmark.svg';
import HamburgerIconOpen from '../assets/icon-hamburger.svg';
import HamburgerIconClose from '../assets/icon-close.svg';

import './Navbar.css';

export function Navbar () {

    const [click, setClick] = useState(false);

    const handleClick = (() => setClick(!click))
    const closeMenu = (() => setClick(false))


    return(

        <header className="header">
        
            <nav className="nav container">

                <div onClick={closeMenu} className="nav-logo-container">
                    <img className={click ? "nav-logo active" : "nav-logo"} src={Logo} alt="Logo" />
                </div>

                <ul onClick={handleClick} className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                    <li className="nav-login">Login</li>
                </ul>

                <div onClick={handleClick} className={click ? "nav-hamburger-container active" : "nav-hamburger-container"}>
                    <img className={click ? "hamburger-btn-open disabled" : "hamburger-btn-open"} src={HamburgerIconOpen} alt="Button" />
                    <img className={click ? "hamburger-btn-close" : "hamburger-btn-close disabled"} src={HamburgerIconClose} alt="Button" />
                </div>

            </nav>
        
        </header>

    )

}