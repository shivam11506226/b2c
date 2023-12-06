import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper, Radio, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { styled } from "@mui/material/styles";
import Umbrella1 from "../../../images/umbrella1.png";
import Umbrella2 from "../../../images/umbrella2.png";
import { useNavigate } from "react-router-dom";
import SwipeToSlide from "../../flight/SwipeToSlide";
import { useState } from "react";
import "./holidaypackagee.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function HolidayPackagesDetail() {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/HolidayInfo");
  }
  const tripsData = [
    {
      image: Umbrella1,
      image1: Umbrella2,
      title: "Luxurious Dubai Trip",
      subtitle: "Customisable",
      activitytext: "5 Activities",
      flighttext: "2 Flight",
      hoteltext: "1 Hotel",
      transfertext: "2 Transfers",
      pointtext: "Mandovi River Cruise",
      pointtext1: "North Dubai Sightseeing",

      value: "₹ 9,450",
      taxesAndFees: "₹ 14,250",
      taxesAndFeesText: "+₹ 1,181 taxes & fees Per Person",

      duration: "5D / 4N",
    },
    {
      image: Umbrella1,
      image1: Umbrella2,
      title: "Luxurious Dubai Trip",
      subtitle: "Customisable",
      activitytext: "5 Activities",
      flighttext: "2 Flight",
      hoteltext: "1 Hotel",
      transfertext: "2 Transfers",
      pointtext: "Mandovi River Cruise",
      pointtext1: "North Dubai Sightseeing",

      value: "₹ 9,450",
      taxesAndFees: "₹ 14,250",
      taxesAndFeesText: "+₹ 1,181 taxes & fees Per Person",

      duration: "5D / 4N",
    },

    {
      image: Umbrella1,
      image1: Umbrella2,
      title: "Luxurious Dubai Trip",
      subtitle: "Customisable",
      activitytext: "5 Activities",
      flighttext: "2 Flight",
      hoteltext: "1 Hotel",
      transfertext: "2 Transfers",
      pointtext: "Mandovi River Cruise",
      pointtext1: "North Dubai Sightseeing",

      value: "₹ 9,450",
      taxesAndFees: "₹ 14,250",
      taxesAndFeesText: "+₹ 1,181 taxes & fees Per Person",

      duration: "5D / 4N",
    },

    {
      image: Umbrella1,
      image1: Umbrella2,
      title: "Luxurious Dubai Trip",
      subtitle: "Customisable",
      activitytext: "5 Activities",
      flighttext: "2 Flight",
      hoteltext: "1 Hotel",
      transfertext: "2 Transfers",
      pointtext: "Mandovi River Cruise",
      pointtext1: "North Dubai Sightseeing",

      value: "₹ 9,450",
      taxesAndFees: "₹ 14,250",
      taxesAndFeesText: "+₹ 1,181 taxes & fees Per Person",

      duration: "5D / 4N",
    },

    // Add more objects as needed
  ];

  return (
    <div className="mainpackage">
      <div className="sort-filter-bar">
        <div className="result-count">SORT BY:</div>
        <div className="sort-options">
          <div className="sort-options-list">
            <div className="sort-option active">Popular</div>
            <div className="sort-option">Thailand</div>
            <div className="sort-option">Singapore</div>
            <div className="sort-option">Maldives</div>
            <div className="sort-option">Mexico</div>
            <div className="sort-option">London</div>
            <div className="sort-option">Paris</div>
            <div className="sort-option">United Kingdom</div>
          </div>
        </div>
      </div>
      <div className="seatlayout">
        <div className="seatlayoutleft">
          <div className="leftsection">
            <Typography pt={1} px={5} className="selectfilter">
              Select Filters
            </Typography>
           
          
           
            

           
            <Typography pt={1} pl={5} className="theme">
            Themes
            </Typography>
            <Box pl={5} display="block">
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                Adventure
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                Honeymoon
                </div>

                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                 Wildlife
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                 Break from Work
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                 Cultural/Religious
                </div>
              </form>
            </Box>
            <Typography pt={1} px={5} className="selectfilter">
            Budget
            </Typography>
            <Box pl={5} display="block">
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                ₹5,000-15,000
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
               ₹5,000-15,000
                </div>

                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                 ₹5,000-15,000
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                 ₹5,000-15,000
                </div>
              </form>
            </Box>
           
          </div>
        </div>
        <div className="seatlayoutright">
          <div className="bus-info-containers">
            <div className="titleseat">Showing Popular Packages</div>
            {/* Add other components/content as needed */}
          </div>

          {/* <div>
            <div className="your-containerholi">
              <div className="left-sectionholi">
                <div className="image-section">
                  <img
                    src={Umbrella2}
                    alt="Placeholder"
                    className="main-image"
                  />
                  <div className="icon-section">
                    <img src={Umbrella1} alt="Icon 1" />
                    <img src={Umbrella1} alt="Icon 2" />
                    <img src={Umbrella1} alt="Icon 3" />
                    <img src={Umbrella1} alt="Icon 4" />
                    <div className="view-all">
                      <div className="view-all-text">View All</div>
                    </div>
                  </div>
                </div>
                <div className="empty-section">
                  <div className="your-containerpackage">
                    <div className="header-sectionpackage">
                      <div className="title-sectionpackage">
                        <div className="main-titlepackage">
                          Luxurious Dubai Trip
                        </div>
                        <div className="subtitlepackage">Customisable</div>
                      </div>
                    </div>
                    <div className="your-containerpack">
                      <div className="icon-section">
                        <div className="activity-icon">
                          <div className="icon-bg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <mask
                                id="mask0_646_11903"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="25"
                                height="24"
                              >
                                <rect
                                  x="0.410156"
                                  width="24"
                                  height="24"
                                  fill="#D9D9D9"
                                />
                              </mask>
                              <g mask="url(#mask0_646_11903)">
                                <path
                                  d="M5.81016 20L4.41016 18.6L14.0102 9H11.4102V11H9.41016V7H15.2352C15.5018 7 15.7602 7.05 16.0102 7.15C16.2602 7.25 16.4768 7.39167 16.6602 7.575L19.6602 10.55C20.1102 11 20.6602 11.35 21.3102 11.6C21.9602 11.85 22.6602 11.9833 23.4102 12V14C22.3768 14 21.4393 13.8417 20.5977 13.525C19.756 13.2083 19.0102 12.7333 18.3602 12.1L17.3602 11.05L15.1602 13.25L17.4102 15.5L10.8602 19.275L9.86016 17.55L14.1602 15.075L12.4602 13.375L5.81016 20ZM3.41016 13V11H8.41016V13H3.41016ZM1.41016 10V8H6.41016V10H1.41016ZM19.8852 8C19.3352 8 18.8602 7.80417 18.4602 7.4125C18.0602 7.02083 17.8602 6.55 17.8602 6C17.8602 5.45 18.0602 4.97917 18.4602 4.5875C18.8602 4.19583 19.3352 4 19.8852 4C20.4352 4 20.9102 4.19583 21.3102 4.5875C21.7102 4.97917 21.9102 5.45 21.9102 6C21.9102 6.55 21.7102 7.02083 21.3102 7.4125C20.9102 7.80417 20.4352 8 19.8852 8ZM3.41016 7V5H8.41016V7H3.41016Z"
                                  fill="#071C2C"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="icon-shape"></div>
                          <div className="icon-text">5 Activities</div>
                        </div>
                        <div className="hotel-icon">
                          <div className="icon-bg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                            >
                              <path
                                d="M19.8451 0.565062C19.0786 -0.201477 17.8329 -0.185507 17.0824 0.597001L12.9942 4.86087L2.98125 1.55517L0.889243 3.64718L9.22535 8.77341L5.00939 13.181L2.31053 12.7339L0.410156 14.6342L4.38657 16.0236L5.77592 20L7.6763 18.0996L7.22915 15.4008L11.6208 11.1848L16.747 19.5209L18.839 17.4289L15.5493 7.416L19.8132 3.31182C20.5957 2.57722 20.6116 1.3316 19.8451 0.565062Z"
                                fill="#071C2C"
                              />
                            </svg>
                          </div>
                          <div className="icon-text">2 Flight</div>
                        </div>
                        <div className="hotel-icon">
                          <div className="icon-bg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                            >
                              <path
                                d="M19.7383 18.8281V4.70312H16.207V18.8281H15.0352V0H6.78516V18.8281H5.61328V7.0625H2.08203V18.8281H0.910156V20H20.9102V18.8281H19.7383ZM17.3789 7.0625H18.5508V8.23438H17.3789V7.0625ZM17.3789 9.40625H18.5508V10.5781H17.3789V9.40625ZM17.3789 11.7656H18.5508V12.9375H17.3789V11.7656ZM17.3789 14.125H18.5508V15.2969H17.3789V14.125ZM17.3789 16.4688H18.5508V17.6406H17.3789V16.4688ZM3.26953 9.40625H4.44141V10.5781H3.26953V9.40625ZM3.26953 11.7656H4.44141V12.9375H3.26953V11.7656ZM3.26953 14.125H4.44141V15.2969H3.26953V14.125ZM3.26953 16.4688H4.44141V17.6406H3.26953V16.4688ZM11.5039 2.35938H12.6758V3.53125H11.5039V2.35938ZM11.5039 4.70312H12.6758V5.875H11.5039V4.70312ZM11.5039 7.0625H12.6758V8.23438H11.5039V7.0625ZM11.5039 9.40625H12.6758V10.5781H11.5039V9.40625ZM11.5039 11.7656H12.6758V12.9375H11.5039V11.7656ZM9.14453 2.35938H10.3164V3.53125H9.14453V2.35938ZM9.14453 4.70312H10.3164V5.875H9.14453V4.70312ZM9.14453 7.0625H10.3164V8.23438H9.14453V7.0625ZM9.14453 9.40625H10.3164V10.5781H9.14453V9.40625ZM9.14453 11.7656H10.3164V12.9375H9.14453V11.7656ZM11.5039 18.8281V15.2969H10.332V18.8281H9.16016V14.125H12.6914V18.8281H11.5039Z"
                                fill="#071C2C"
                              />
                            </svg>
                          </div>
                          <div className="icon-text">1 Hotel</div>
                        </div>
                        <div className="transfer-icon">
                          <div className="icon-bg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <mask
                                id="mask0_646_11917"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="25"
                                height="24"
                              >
                                <rect
                                  x="0.410156"
                                  width="24"
                                  height="24"
                                  fill="#D9D9D9"
                                />
                              </mask>
                              <g mask="url(#mask0_646_11917)">
                                <path
                                  d="M6.41016 19V20C6.41016 20.2833 6.31432 20.5208 6.12266 20.7125C5.93099 20.9042 5.69349 21 5.41016 21H4.41016C4.12682 21 3.88932 20.9042 3.69766 20.7125C3.50599 20.5208 3.41016 20.2833 3.41016 20V12L5.51016 6C5.61016 5.7 5.78932 5.45833 6.04766 5.275C6.30599 5.09167 6.59349 5 6.91016 5H9.41016V3H15.4102V5H17.9102C18.2268 5 18.5143 5.09167 18.7727 5.275C19.031 5.45833 19.2102 5.7 19.3102 6L21.4102 12V20C21.4102 20.2833 21.3143 20.5208 21.1227 20.7125C20.931 20.9042 20.6935 21 20.4102 21H19.4102C19.1268 21 18.8893 20.9042 18.6977 20.7125C18.506 20.5208 18.4102 20.2833 18.4102 20V19H6.41016ZM6.21016 10H18.6102L17.5602 7H7.26016L6.21016 10ZM7.91016 16C8.32682 16 8.68099 15.8542 8.97266 15.5625C9.26432 15.2708 9.41016 14.9167 9.41016 14.5C9.41016 14.0833 9.26432 13.7292 8.97266 13.4375C8.68099 13.1458 8.32682 13 7.91016 13C7.49349 13 7.13932 13.1458 6.84766 13.4375C6.55599 13.7292 6.41016 14.0833 6.41016 14.5C6.41016 14.9167 6.55599 15.2708 6.84766 15.5625C7.13932 15.8542 7.49349 16 7.91016 16ZM16.9102 16C17.3268 16 17.681 15.8542 17.9727 15.5625C18.2643 15.2708 18.4102 14.9167 18.4102 14.5C18.4102 14.0833 18.2643 13.7292 17.9727 13.4375C17.681 13.1458 17.3268 13 16.9102 13C16.4935 13 16.1393 13.1458 15.8477 13.4375C15.556 13.7292 15.4102 14.0833 15.4102 14.5C15.4102 14.9167 15.556 15.2708 15.8477 15.5625C16.1393 15.8542 16.4935 16 16.9102 16ZM5.41016 17H19.4102V12H5.41016V17Z"
                                  fill="#071C2C"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="icon-shape"></div>
                          <div className="icon-text">2 Transfers</div>
                        </div>
                      </div>
                    </div>
                    <div className="details-section">
                      <div className="bullet-points">
                        <div className="bullet"></div>
                        <div className="point-text">Mandovi River Cruise</div>
                      </div>
                      <div className="bullet-points">
                        <div className="bullet"></div>
                        <div className="point-text">
                          North Dubai Sightseeing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-sectionholi">
                <div className="price-section">
                  <div className="top-price">
                    <div className="price-value">₹ 9,450</div>
                    <div className="price-line"></div>
                  </div>
                  <div className="bottom-price">
                    <div className="main-price">
                      <div className="taxes-and-fees">₹ 14,250</div>
                      <div className="discount-icon"></div>
                    </div>
                    <div className="taxes-and-fees">
                      +₹ 1,181 taxes & fees
                      <br />
                      Per Person
                    </div>
                  </div>
                </div>
                <div className="duration-section1">
                  <div className="duration-value1">5D / 4N</div>
                </div>
              </div>
            </div>
          </div> */}

          <div>
            {tripsData.map((trip, index) => (
              <div key={index} className="your-containerholi" onClick={handleclick}>
                <div className="left-sectionholi">
                  <div className="image-section">
                    <img
                      src={trip.image1}
                      alt="Placeholder"
                      className="main-image"
                    />
                    <div className="icon-section">
                      <img src={trip.image} alt="Icon 1" />
                      <img src={trip.image} alt="Icon 2" />
                      <img src={trip.image} alt="Icon 3" />
                      <img src={trip.image} alt="Icon 4" />
                      {/* <div className="view-all">
                        <div className="view-all-text">View All</div>
                      </div> */}
                    </div>
                  </div>
                  <div className="empty-section">
                    <div className="your-containerpackage">
                      <div className="header-sectionpackage">
                        <div className="title-sectionpackage">
                          <div className="main-titlepackage">{trip.title}</div>
                          <div className="subtitlepackage">{trip.subtitle}</div>
                        </div>
                      </div>
                      <div className="your-containerpack">
                        <div className="icon-section">
                          <div className="activity-icon">
                            <div className="icon-bg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <mask
                                  id="mask0_646_11903"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="25"
                                  height="24"
                                >
                                  <rect
                                    x="0.410156"
                                    width="24"
                                    height="24"
                                    fill="#D9D9D9"
                                  />
                                </mask>
                                <g mask="url(#mask0_646_11903)">
                                  <path
                                    d="M5.81016 20L4.41016 18.6L14.0102 9H11.4102V11H9.41016V7H15.2352C15.5018 7 15.7602 7.05 16.0102 7.15C16.2602 7.25 16.4768 7.39167 16.6602 7.575L19.6602 10.55C20.1102 11 20.6602 11.35 21.3102 11.6C21.9602 11.85 22.6602 11.9833 23.4102 12V14C22.3768 14 21.4393 13.8417 20.5977 13.525C19.756 13.2083 19.0102 12.7333 18.3602 12.1L17.3602 11.05L15.1602 13.25L17.4102 15.5L10.8602 19.275L9.86016 17.55L14.1602 15.075L12.4602 13.375L5.81016 20ZM3.41016 13V11H8.41016V13H3.41016ZM1.41016 10V8H6.41016V10H1.41016ZM19.8852 8C19.3352 8 18.8602 7.80417 18.4602 7.4125C18.0602 7.02083 17.8602 6.55 17.8602 6C17.8602 5.45 18.0602 4.97917 18.4602 4.5875C18.8602 4.19583 19.3352 4 19.8852 4C20.4352 4 20.9102 4.19583 21.3102 4.5875C21.7102 4.97917 21.9102 5.45 21.9102 6C21.9102 6.55 21.7102 7.02083 21.3102 7.4125C20.9102 7.80417 20.4352 8 19.8852 8ZM3.41016 7V5H8.41016V7H3.41016Z"
                                    fill="#071C2C"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div className="icon-shape"></div>
                            <div className="icon-text">{trip.activitytext}</div>
                          </div>
                          <div className="hotel-icon">
                            <div className="icon-bg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                              >
                                <path
                                  d="M19.8451 0.565062C19.0786 -0.201477 17.8329 -0.185507 17.0824 0.597001L12.9942 4.86087L2.98125 1.55517L0.889243 3.64718L9.22535 8.77341L5.00939 13.181L2.31053 12.7339L0.410156 14.6342L4.38657 16.0236L5.77592 20L7.6763 18.0996L7.22915 15.4008L11.6208 11.1848L16.747 19.5209L18.839 17.4289L15.5493 7.416L19.8132 3.31182C20.5957 2.57722 20.6116 1.3316 19.8451 0.565062Z"
                                  fill="#071C2C"
                                />
                              </svg>
                            </div>
                            <div className="icon-text">{trip.flighttext}</div>
                          </div>
                          <div className="hotel-icon">
                            <div className="icon-bg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                              >
                                <path
                                  d="M19.7383 18.8281V4.70312H16.207V18.8281H15.0352V0H6.78516V18.8281H5.61328V7.0625H2.08203V18.8281H0.910156V20H20.9102V18.8281H19.7383ZM17.3789 7.0625H18.5508V8.23438H17.3789V7.0625ZM17.3789 9.40625H18.5508V10.5781H17.3789V9.40625ZM17.3789 11.7656H18.5508V12.9375H17.3789V11.7656ZM17.3789 14.125H18.5508V15.2969H17.3789V14.125ZM17.3789 16.4688H18.5508V17.6406H17.3789V16.4688ZM3.26953 9.40625H4.44141V10.5781H3.26953V9.40625ZM3.26953 11.7656H4.44141V12.9375H3.26953V11.7656ZM3.26953 14.125H4.44141V15.2969H3.26953V14.125ZM3.26953 16.4688H4.44141V17.6406H3.26953V16.4688ZM11.5039 2.35938H12.6758V3.53125H11.5039V2.35938ZM11.5039 4.70312H12.6758V5.875H11.5039V4.70312ZM11.5039 7.0625H12.6758V8.23438H11.5039V7.0625ZM11.5039 9.40625H12.6758V10.5781H11.5039V9.40625ZM11.5039 11.7656H12.6758V12.9375H11.5039V11.7656ZM9.14453 2.35938H10.3164V3.53125H9.14453V2.35938ZM9.14453 4.70312H10.3164V5.875H9.14453V4.70312ZM9.14453 7.0625H10.3164V8.23438H9.14453V7.0625ZM9.14453 9.40625H10.3164V10.5781H9.14453V9.40625ZM9.14453 11.7656H10.3164V12.9375H9.14453V11.7656ZM11.5039 18.8281V15.2969H10.332V18.8281H9.16016V14.125H12.6914V18.8281H11.5039Z"
                                  fill="#071C2C"
                                />
                              </svg>
                            </div>
                            <div className="icon-text">{trip.hoteltext}</div>
                          </div>
                          <div className="transfer-icon">
                            <div className="icon-bg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <mask
                                  id="mask0_646_11917"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="25"
                                  height="24"
                                >
                                  <rect
                                    x="0.410156"
                                    width="24"
                                    height="24"
                                    fill="#D9D9D9"
                                  />
                                </mask>
                                <g mask="url(#mask0_646_11917)">
                                  <path
                                    d="M6.41016 19V20C6.41016 20.2833 6.31432 20.5208 6.12266 20.7125C5.93099 20.9042 5.69349 21 5.41016 21H4.41016C4.12682 21 3.88932 20.9042 3.69766 20.7125C3.50599 20.5208 3.41016 20.2833 3.41016 20V12L5.51016 6C5.61016 5.7 5.78932 5.45833 6.04766 5.275C6.30599 5.09167 6.59349 5 6.91016 5H9.41016V3H15.4102V5H17.9102C18.2268 5 18.5143 5.09167 18.7727 5.275C19.031 5.45833 19.2102 5.7 19.3102 6L21.4102 12V20C21.4102 20.2833 21.3143 20.5208 21.1227 20.7125C20.931 20.9042 20.6935 21 20.4102 21H19.4102C19.1268 21 18.8893 20.9042 18.6977 20.7125C18.506 20.5208 18.4102 20.2833 18.4102 20V19H6.41016ZM6.21016 10H18.6102L17.5602 7H7.26016L6.21016 10ZM7.91016 16C8.32682 16 8.68099 15.8542 8.97266 15.5625C9.26432 15.2708 9.41016 14.9167 9.41016 14.5C9.41016 14.0833 9.26432 13.7292 8.97266 13.4375C8.68099 13.1458 8.32682 13 7.91016 13C7.49349 13 7.13932 13.1458 6.84766 13.4375C6.55599 13.7292 6.41016 14.0833 6.41016 14.5C6.41016 14.9167 6.55599 15.2708 6.84766 15.5625C7.13932 15.8542 7.49349 16 7.91016 16ZM16.9102 16C17.3268 16 17.681 15.8542 17.9727 15.5625C18.2643 15.2708 18.4102 14.9167 18.4102 14.5C18.4102 14.0833 18.2643 13.7292 17.9727 13.4375C17.681 13.1458 17.3268 13 16.9102 13C16.4935 13 16.1393 13.1458 15.8477 13.4375C15.556 13.7292 15.4102 14.0833 15.4102 14.5C15.4102 14.9167 15.556 15.2708 15.8477 15.5625C16.1393 15.8542 16.4935 16 16.9102 16ZM5.41016 17H19.4102V12H5.41016V17Z"
                                    fill="#071C2C"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div className="icon-shape"></div>
                            <div className="icon-text">{trip.transfertext}</div>
                          </div>
                        </div>
                      </div>
                      <div className="details-section">
                        <div className="bullet-points">
                          <div className="bullet"></div>
                          <div className="point-text">{trip.pointtext}</div>
                        </div>
                        <div className="bullet-points">
                          <div className="bullet"></div>
                          <div className="point-text">{trip.pointtext1}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-sectionholi">
                  <div className="price-section">
                    <div className="top-price">
                      <div className="price-value">{trip.value}</div>
                    </div>
                    <div className="bottom-price">
                      <div className="your-componentprice">
                        <div className="price-container1">
                          <div className="price-value1">₹ 14,250</div>
                        </div>
                        <div className="arrowicons">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.70373 14.707C7.51625 14.5194 7.41094 14.2651 7.41094 14C7.41094 13.7348 7.51625 13.4805 7.70373 13.293L10.9967 9.99997L7.70373 6.70697C7.60822 6.61472 7.53203 6.50438 7.47962 6.38237C7.42721 6.26037 7.39963 6.12915 7.39847 5.99637C7.39732 5.86359 7.42262 5.73191 7.4729 5.60902C7.52318 5.48612 7.59744 5.37447 7.69133 5.28057C7.78522 5.18668 7.89687 5.11243 8.01977 5.06215C8.14267 5.01187 8.27435 4.98656 8.40713 4.98772C8.53991 4.98887 8.67113 5.01646 8.79313 5.06887C8.91513 5.12128 9.02548 5.19746 9.11773 5.29297L13.1177 9.29297C13.3052 9.4805 13.4105 9.7348 13.4105 9.99997C13.4105 10.2651 13.3052 10.5194 13.1177 10.707L9.11773 14.707C8.9302 14.8944 8.67589 14.9998 8.41073 14.9998C8.14556 14.9998 7.89125 14.8944 7.70373 14.707Z"
                              fill="#E73C33"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="taxes-and-fees">
                        {trip.taxesAndFeesText}
                      </div>
                    </div>
                  </div>
                  <div className="duration-section1">
                    <div className="duration-value1">{trip.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HolidayPackagesDetail;
