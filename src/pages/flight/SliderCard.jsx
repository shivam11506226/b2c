// YourComponent.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import groupfriend1 from '../../images/groupfriend.png'

const SliderCard = () => {
  const slideContent = [
    {
      image: groupfriend1,
      title: 'For Your 1st Holiday Booking!',
      discount: 'Up to 30% OFF*',
      code: 'WELCOMESKY',
    },
    {
      image: groupfriend1,
      title: 'Special Offer for Hotels!',
      discount: 'Get 20% Discount*',
      code: 'HOTELDEAL',
    },
    {
      image: groupfriend1,
      title: 'Amazing Flight Discounts!',
      discount: 'Fly for Less*',
      code: 'FLIGHTSALE',
    },
    {
        image: groupfriend1,
        title: 'Amazing Flight Discounts!',
        discount: 'Fly for Less*',
        code: 'FLIGHTSALE',
      },
      {
        image: groupfriend1,
        title: 'Amazing Flight Discounts!',
        discount: 'Fly for Less*',
        code: 'FLIGHTSALE',
      },
    // Add more slides as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, 
    customPaging: (i) => (
      <div
        style={{
          width: '10px',
        height: '10px',
        background: i === 0 ? 'red' : 'black',
        borderRadius: '50%',
        marginTop: '20px',
        transition: 'background 0.5s ease', // Add a transition for a smoother effect
      }}
      />
    ),
  };

  return (
    <Slider {...settings} className="slider-container" style={{boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",borderRadius:"12px"}}>
      {slideContent.map((slide, index) => (
        <div key={index} className="offer-card">
          <div className="offer-details">
            <div className="image-container">
              <img className="offer-image" src={slide.image} alt="Offer" />
            </div>
            <div className="offer-description">
              <div className="title">{slide.title}</div>
              <div className="discount">{slide.discount}</div>
            </div>
          </div>
          <div className="code-details">
            <span className="code-label">
              Use Code: <span className="code-value">{slide.code}</span>
            </span>
            <div className="view-details">
              <div className="code-label">VIEW DETAILS</div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderCard;
