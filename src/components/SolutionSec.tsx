import React from "react";
import Card from "./Card";
import ExperienceCard from "./ExperienceCard";
import { faHammer, faBookOpen, faPeopleGroup, faBullseye, faCheck, faDollarSign} from '@fortawesome/free-solid-svg-icons'
import successSvg from '../assets/success.svg'; 
import '../style/SolutionSec.css';

const SolutionSec = () => {
    return (
        <div className="section solution-cont">
            <div className="cards-container">
                <Card icon={faBullseye} cardTopic="תהליך קל ומדויק" cardTxt="עם תהליך קל ומדויק, המועמד המתאים נמצא במרחק נגיעה" />
                <Card icon={faCheck} cardTopic=" !איתור עובדים על בסיס הצלחה בלבד " cardTxt="אני מאתרת עובדים על סמך הצלחות מוכחות כדי להבטיח תוצאות מרשימות בכל התחומים" />
                <Card icon={faDollarSign} cardTopic=" !לא מרוצים? לא משלמים" cardTxt="לא מרוצים? זה פשוט – לא משלמים! אני מחוייבת לסיפוק שלכם" />
            </div>
            <div className="main-info">
                <h1 className="heading">!הנסיון שלי מוביל להצלחה שלך</h1>
                <p className="text">בעזרת ניסיון רחב בגיוס והכוונה מקצועית, אני מתמקדת במציאת הטאלנטים שיתרמו באמת לארגון שלכם</p>
                <div className="experience-section">
                    <div className="left-container">
                        <ExperienceCard icon={faHammer} cardTopic="נסיון מקצועי" cardTxt='אני בעלת ניסיון בגיוס 1,000 עובדים לחברות שונות, כולל ניהול התהליך מהגדרת הדרישות ועד לבחירת המועמדים' />
                        <ExperienceCard icon={faBookOpen} cardTopic="התעסקות במגוון תחומים" cardTxt='עבדתי עם לקוחות מתחומים שונים, כמו נדל"ן, טלמרקטינג, קוסמטיקה, הייטק ומסעדות, מה שאפשר לי לפתח הבנה מעמיקה של צרכי כל לקוח' />
                        <ExperienceCard icon={faPeopleGroup} cardTopic="קבוצות איכות" cardTxt='קבוצה של כ-500 מחפשי עבודה איכותיים מכל הארץ, עם מגוון מיומנויות וניסיון, מאפשרת לי להתאים את המועמדים הטובים ביותר לצרכי החברות' />
                    </div>
                    <img src={successSvg} alt="svg" />
                </div>
            
            </div>
        </div>
    );
}

export default SolutionSec;