import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import '../style/Carousel.css';

interface Props{
    images: any[]
}

const Carousel = ({images}: Props) => {
    const [currentImage, setCurrentImage] = useState(1);
    let nextImg = currentImage + 1 >= images.length ? 0 : currentImage + 1;
    let prevImg = currentImage - 1 < 0 ? images.length - 1 : currentImage - 1;
    
    
    const onSwitchImageBtnClick = (direction: any) => {
        if(direction === -1)
            setCurrentImage(prevImg);
            
        else
            setCurrentImage(nextImg);
            
        
        
    }


    return (
        <div className="carousel-container">
            <div className="images-container">
                <div className="img-wrapper"><img className="secondary-img" src={images[prevImg]} alt="img" /></div>
                <div className="img-wrapper active"><img className="active-img" src={images[currentImage]} alt="img" /></div>
                <div className="img-wrapper"><img className="secondary-img" src={images[nextImg]} alt="img" /></div>
            </div>
            <div className="btns">
                <button className="switch-btn" onClick={() => {onSwitchImageBtnClick(-1)}}><FontAwesomeIcon icon={faChevronLeft} color="#002B5B" /></button>
                <button className="switch-btn" onClick={() => {onSwitchImageBtnClick(1)}}><FontAwesomeIcon icon={faChevronRight} color="#002B5B" /></button>
            </div>
            
        </div>
    );
}

export default Carousel;