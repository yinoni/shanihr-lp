import React from "react";
import Carousel from "./Carousel";
import '../style/ReviewsSection.css';
import blob from '../assets/blob1.svg';

const ReviewsSection = () => {
    return (
        <div id="reviews" className="section reviews-cont">
            <h1 className="heading">?מה הלקוחות שלי מספרים </h1>
            <p className="text">!הלקוחות שלי הם העדות הטובה ביותר לאיכות העבודה שלי. זה מה שיש להם לומר על החוויות שלהם וההצלחות שהשגנו יחד</p>
            <img className="blob" src={blob} alt="svg" />
            <Carousel images={[require('../assets/review1.jpeg'), require('../assets/review2.jpeg'), require('../assets/review3.jpeg')]}/>
        </div>
    );
}

export default ReviewsSection;