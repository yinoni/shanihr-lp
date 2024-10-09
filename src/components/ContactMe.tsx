import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import '../style/ContactMe.css';
import wa from '../assets/whatsapp.svg';
import contactme from '../assets/contactme.svg';

const ContactMe = () => {
    return (
        <div className="section contact-me-container">
            <div className="contact-me">
                <img className="illustration" src={contactme} alt="svg" />
                <div className="text-cont">
                    <h1 className="heading">!צרו קשר עוד היום</h1>
                    <p className="text"> אני מזמינה אותך לשוחח איתי כדי לבדוק איך אוכל לעזור לך לגייס עובדים בקלות בלי כאבי ראש ועלויות מיותרות בתהליך מהנה</p>
                </div>
                <button className="btn">
                    <p className="text">לשליחת הודעת וואטסאפ</p>
                    <img src={wa} alt="svg" />
                </button>
            </div>
        </div>
    );
        
        
}

export default ContactMe;