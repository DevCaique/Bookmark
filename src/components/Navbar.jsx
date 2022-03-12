import { useState } from 'react';
import Logo from '../assets/logo-bookmark.svg';
import HamburgerIconOpen from '../assets/icon-hamburger.svg';
import HamburgerIconClose from '../assets/icon-close.svg';

import './Navbar.css';

export function Navbar () {

    const [click, setClick] = useState(false);

    const handleClick = (() => setClick(!click))

    function changeSrc () {

        if (click) {

            document.getElementById("Logo").src = "../assets/icon-close.svg"; 

        } else {

            document.getElementById("Logo").src = "../assets/icon-hamburger.svg"; 

        }
        
    }


    return(

        <header className="header">
        
            <nav className="nav container">

                <div className="nav-logo-container">
                    <img className="nav-logo" src={Logo} alt="Logo" />
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                    <li className="nav-login">Login</li>
                </ul>

                <div onClick={handleClick} className="nav-hamburger-container">
                    <img id="Logo" src="" alt="HamburgerIcon" />
                </div>

            </nav>
        
        </header>

    )

}