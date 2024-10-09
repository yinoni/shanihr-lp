import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import '../style/ContactMe.css';
import wa from '../assets/whatsapp.svg';
import contactme from '../assets/contactme.svg';

const ContactMe = () => {
    return (
        <div className="section contact-me-container">
            <img src={contactme} alt="svg" />
            <div className="contact-me">
                <div className="text-cont">
                    <h1 className="heading">!צרו קשר עוד היום</h1>
                    <p className="text">אני מזמינה אותך לשוחח איתי ולבדוק איך אוכל לעזור לך לגייס עובדים ללא כאבי ראש, עלויות מיותרות ותהליך מהנה</p>
                </div>
                <button className="btn">
                    <p className="text">לשליחת הודעת וואטסאפ</p>
                    <img className="illustration" src={wa} alt="svg" />
                </button>
            </div>
        </div>
    );
        
        
}

export default ContactMe;