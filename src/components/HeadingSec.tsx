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
                    <h1 className="heading">!המועמד המושלם מחכה לכם</h1>
                    <p className="paragraph">
                    בעולם המהיר של היום, ההצלחה שלך תלויה בכוח העבודה שלך. 
                    אני מתמחה ביצירת פתרונות מותאמים אישית בתחום משאבי אנוש, כדי לסייע לך לגייס ולפתח כישרונות מובילים. אני כאן כדי להוביל אותך להצלחה
                    </p>
                    <div className="highlighted-txt">
                        <p className="text">!הצטרפו אליי, ונבנה יחד צוות מנצח</p>
                        <img className="image" src={highlighted} alt='svg' />
                    </div>
                    <button onClick={onBtnClick} className="contact-btn">!צרו קשר עכשיו</button>
                </div>
            </div>
        </div>
    );
}

export default HeadingSec;