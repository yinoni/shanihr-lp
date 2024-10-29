import React from "react";
import NavBar from "./NavBar";
import cowrokers from '../assets/cowrokers.svg';
import highlighted from '../assets/highlighted1.svg';
import '../style/HeadingSec.css';

interface Props{
    onBtnClick: () => void
}


const HeadingSec = ({onBtnClick}: Props) => {
    const nbItems = [
        {
            itemName: 'ראשי',
            href: '#'
        },
        {
            itemName: 'אודות',
            href: '#about'
        },
        {
            itemName: 'ביקורות',
            href: '#reviews'
        }
    ]


    return (
        <div className="section open-sec-container">
            <NavBar onBtnClick={onBtnClick} items={nbItems} />
            <div className="main">
                <img src={cowrokers} className="coworkers-img" alt='svg' />
                <div className="opening-text">
                    <h1 className="heading">?בעל/ת עסק</h1>
                    <ul>
                        <li className="paragraph">מכיר את הקושי בחיפוש עובדים איכותיים?</li>
                        <li className="paragraph">בקביעת ראיונות עבודה שלא מגיעים אליהם?</li>
                        <li className="paragraph">כבעל עסק, אתה משלם משכורת שלמה לעובד משאבי אנוש, או שוכר חברת השמה יקרה?</li>
                        <li className="paragraph">מעכשיו יש פתרון פשוט, מהיר וזול יותר</li>
                    </ul>
                    
                    <div className="highlighted-txt">
                        <p className="text">!איתור כוח אדם איכותי ומדוייק - על בסיס הצלחה בלבד</p>
                        <img className="image" src={highlighted} alt='svg' />
                    </div>
                    <button onClick={onBtnClick} className="contact-btn">!צרו קשר עכשיו</button>
                </div>
            </div>
        </div>
    );
}

export default HeadingSec;