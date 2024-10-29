import React from "react";
import Card from "./Card";
import ExperienceCard from "./ExperienceCard";
import { faHammer, faBookOpen, faPeopleGroup, faBullseye, faCheck, faDollarSign} from '@fortawesome/free-solid-svg-icons'
import successSvg from '../assets/success.svg'; 
import '../style/SolutionSec.css';
import AboutSec from "./AboutSec";

const SolutionSec = () => {
    return (
        <div className="section solution-cont">
            <div className="cards-container">
                <Card icon={faBullseye} cardTopic="תהליך קל ומדויק" cardTxt="גיוס כוח אדם שמותאם בדיוק לעסק שלך ללא התעסקות מיותרת" />
                <Card icon={faCheck} cardTopic=" איתור עובדים על בסיס הצלחה בלבד " cardTxt="התשלום יתבצע רק ברגע שהשגנו לך עובד מתאים" />
                <Card icon={faDollarSign} cardTopic="מחיר נוח שיחסוך לך עלויות מיותרות" cardTxt="במחיר שיחסוך לך מאות ואלפי שקלים" />
            </div>
            <AboutSec />
            <div className="main-info">
                <h1 className="heading">הנסיון שלי מוביל להצלחה שלך</h1>
                <p className="text">בעזרת ניסיון רחב בגיוס והכוונה מקצועית, אני מתמקדת במציאת הטאלנטים שיתרמו באמת לארגון שלכם</p>
                <div className="experience-section">
                    <div className="left-container">
                        <ExperienceCard icon={faHammer} cardTopic="נסיון מקצועי" cardTxt=' גיוס של כ-1000 עובדים לחברות מכל הארץ' />
                        <ExperienceCard icon={faBookOpen} cardTxt=' גיוס במגוון תחומים, חברות קוסמטיקה, נדל"ן,מסעדות, תפקידי אדמינסטרציה ושירות לקוחות בכל רחבי הארץ' cardTopic='אני עוזרת לבעלי עסקים בכל התחומים' />
                        <ExperienceCard icon={faPeopleGroup} cardTopic=" מאגר עובדים איכותי" cardTxt='קבוצות וואטסאפ ופיסוק פעילות של כ-1000 מחפשי עבודה איכותיים' />
                    </div>
                    <img src={successSvg} alt="svg" />
                </div>
            
            </div>
        </div>
    );
}

export default SolutionSec;