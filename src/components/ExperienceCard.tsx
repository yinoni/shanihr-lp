import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/ExpCard.css';

interface Props{
    icon: any
    cardTopic: string
    cardTxt: string
}

const ExperienceCard = ({cardTopic, cardTxt, icon}: Props) => {
    return (
        <div className="exp-card">
            <div className="text-cont">
                <p className="card-topic">{cardTopic}</p>
                <p className="card-txt">{cardTxt}</p>
            </div>
            <FontAwesomeIcon className="icon" style={{width: 50, height: 43, opacity: 0.6}} color="#9575de7b" icon={icon} />

            
        </div>
    );
}

export default ExperienceCard;