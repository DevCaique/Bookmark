import Logo from '../assets/logo-bookmark.svg';
import FacebookIcon from '../assets/icon-facebook.svg';
import TwitterIcon from '../assets/icon-twitter.svg';

import './Footer.css';

export function Footer () {

    return(

        <footer className="footer">
            
            <div className="footer-container container">

                <div className="footer-logo-container">
                    <img className="footer-logo" src={Logo} alt="Logo" />
                </div>

                <ul className="footer-menu">
                    <li className="footer-item"><a href="#" className="footer-link">Features</a></li>
                    <li className="footer-item"><a href="#" className="footer-link">Pricing</a></li>
                    <li className="footer-item"><a href="#" className="footer-link">Contact</a></li>
                </ul>

                <div className="social">

                    <div className="social-container">

                        <div className="facebook-icon-container">
                            <img src={FacebookIcon} alt="Facebook Icon" className="facebook-icon" />
                        </div>
                        
                        <div className="twitter-icon-container">
                            <img src={TwitterIcon} alt="Twitter Icon" className="twitter-icon" />
                        </div>

                    </div>

                </div>

            </div>

        </footer>

    )

}