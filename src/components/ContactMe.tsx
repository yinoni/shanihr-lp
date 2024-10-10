import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import '../style/ContactMe.css';
import wa from '../assets/whatsapp.svg';
import contactme from '../assets/contactme.svg';

const ContactMe = () => {

    const onContactMeBtnClick = (e: any) => {
        e.preventDefault();
        window.location.href='https://wa.me/972537160631?text=%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%91%D7%A8%D7%A8%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%20%D7%92%D7%99%D7%95%D7%A1%D7%99%D7%9D%20';
    }
    return (
        <div className="section contact-me-container">
            <div className="contact-me">
                <img className="illustration" src={contactme} alt="svg" />
                <div className="text-cont">
                    <h1 className="heading">!צרו קשר עוד היום</h1>
                    <p className="text"> אני מזמינה אותך לשוחח ולגלות איך אני יכולה לעזור לך לגייס עובדים בקלות ובנוחות</p>
                </div>
                <button className="btn" onClick={onContactMeBtnClick}>
                    <p className="text">לשליחת הודעת וואטסאפ</p>
                    <img src={wa} alt="svg" />
                </button>
            </div>
        </div>
    );
        
        
}

export default ContactMe;