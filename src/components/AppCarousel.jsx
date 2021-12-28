import React from 'react';
import "./AppCarousel.css";
import scooter1 from "../images/scooter.png";
import circle1 from "../images/circle.gif";
import { Carousel } from 'bootstrap';

function AppCarousel() {
    return (
        <div className="Carousel container">
            <div className="Carousel__item1">
                <div className="body__images col-8">
                    <img className="circle__img1" src={circle1} alt="circle gif" />
                    <img className="scooter__img1" src={scooter1} alt="scooter" />
                </div>
                <div className="body__text col">
                    <p className='item1__headline'>
                    A neat headline comes here ! 
                    </p>
                    <p className="item1__para">
                    A neat sample text to come here super soon. Till then admire the authentic and delightful User Interface Design of the Website. We are glad you came here , thanks for visiting . 
                    </p>
                    <button className='carousel__button red-button' style={{"font-size":"18px"}}>Show Details</button>
                </div>   
            </div> 
            <div className="carousel__bottomBtn">
                <button className="page__active carousel-dots"></button> 
                <button className="carousel-dots"></button>
                <button className="carousel-dots"></button>
                <button className="carousel-dots"></button>
                <button className="carousel-dots"></button> 
            </div>
      
        </div>
    )
}

export default AppCarousel;
