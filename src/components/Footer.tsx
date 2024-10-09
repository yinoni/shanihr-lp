import React from "react";
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import '../style/Footer.css';


const Footer = () => {
    return (
        <div className="footer-cont">
            <div className="top">
                <h1 className="logo">SHANI HR</h1>
                <div className="links">
                    <a href="#">אודות</a>
                    <a href="#">ביקורות</a>
                </div>
            </div>
            <div className="bottom">
                <p className="credit">@Developed by Yinon Megidesh</p>
                <div className="links">
                    <a className="social-link" href="#">
                        <img src={linkedin} alt="svg" />
                    </a>
                    <a className="social-link" href="#">
                    <img src={instagram} alt="svg" />
                    </a>
                    <a className="social-link" href="#">
                        <img src={facebook} alt="svg" />
                    </a>
                </div>
                
            </div>
            
            
        </div>
        
    );
}

export default Footer;