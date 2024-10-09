import React from "react";
import '../style/AboutSec.css';

const AboutSec = () => {
    return (
        <div className="section about-sec">
            <div className="image-container">
                <img src={require('../assets/shani.jpeg')} alt="img" />
                <div className="reactangle">
                    <p className="text">קצת עליי ועל המסע שלי</p>
                </div>
            </div>
            <p className="about-text">
             שני וילר בעלת חברת גיוס והשמת עובדים- מאתרת עבורך את העובדים המתאימים ביותר לצרכים של העסק שלך. בעברי עבדתי עם מגוון רחב של תחומים, כולל חברות נדל“ן, מכוני קוסמטיקה, מכללות ומסעדות. העובדים שאני מוצאת הם לא רק איכותיים, אלא מותאמים בצורה מדויקת לתפקיד שלך, עד שתצא/י מרוצה 
            </p>
        </div>
    );
}

export default AboutSec;