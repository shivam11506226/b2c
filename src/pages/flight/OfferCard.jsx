import React from 'react';
import './OfferCard.css'; // Import your CSS file

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderCard from './SliderCard';
const OfferCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
  return (
    <div className="main-container1">
      <div className="offers-section">
      <div className="offers-header-container">
      <div className="maintitle">Offers</div>
      <div className="options-container">
        <div className="option">
          <div className="option-label">ON 1st BOOKING</div>
        </div>
        <div className="option">
          <div className="option-label">Hotels</div>
        </div>
        <div className="option">
          <div className="option-label">All Offers</div>
        </div>
        <div className="option">
          <div className="option-label">Flights</div>
        </div>
        <div className="option">
          <div className="option-label">Holidays</div>
        </div>
        <div className="option">
          <div className="option-label">Cabs</div>
        </div>
        <div className="option">
          <div className="option-label">Bank Offers</div>
        </div>
      </div>
    </div>
    </div>



    <div className="special-offer-container">
     <SliderCard/>
      <div className="view-all-offers">
        <div className="view-all-title">VIEW ALL</div>
        <div className="view-all-subtitle">OFFERS</div>
        <div className="click-here">
          <div className="click-here-text">Click here</div>
        </div>
      </div>
    </div>
       
     

    
    </div>
  );
}

export default OfferCard;
