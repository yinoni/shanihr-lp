import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/Card.css';

interface Props{
    icon: any
    cardTopic: string
    cardTxt: string
}

const Card = ({icon, cardTopic, cardTxt}: Props) => {
    return (
        <div className="card-cont">
            <FontAwesomeIcon style={{width: 100, height: 100}} color="#002B5B" icon={icon} />
            <p className="card-topic">{cardTopic}</p>
            <p className="card-txt">{cardTxt}</p>
        </div>
    );
}

export default Card;