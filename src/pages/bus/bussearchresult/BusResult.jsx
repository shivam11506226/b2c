import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper, Radio, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { styled } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import SwipeToSlide from "../../flight/SwipeToSlide";

import "./seatlayout.css";
function BusResult() {

    const navigate=useNavigate("");
    function handleclick(){
        navigate("/SelectBusSeat")
    }
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const busDetailsData = [
    {
      id: 1,
      busTitle: 'Shrinath Travel Agency Pvt. Ltd.',
      busType: 'NON AC Seater (2+1)',
      departureTime: '23:30',
      departureDate: '29 Oct',
      duration: '32hrs 50 mins',
      arrivalTime: '08:20',
      arrivalDate: '29 Oct',
      totalPrice: '₹3,699',
      rating: '3.2',
      seatsLeft: '31 Seats Left | 21 Window Seats',
    },
    {
      id: 2,
      busTitle: 'Example Bus Company 1',
      busType: 'AC Sleeper (2+1)',
      departureTime: '21:45',
      departureDate: '30 Oct',
      duration: '24hrs 30 mins',
      arrivalTime: '22:15',
      arrivalDate: '31 Oct',
      totalPrice: '₹4,500',
      rating: '4.0',
      seatsLeft: '20 Seats Left | 15 Window Seats',
    },
    {
      id: 3,
      busTitle: 'Another Bus Company',
      busType: 'Semi-Sleeper (2+2)',
      departureTime: '15:00',
      departureDate: '01 Nov',
      duration: '20hrs 15 mins',
      arrivalTime: '11:15',
      arrivalDate: '02 Nov',
      totalPrice: '₹3,200',
      rating: '3.8',
      seatsLeft: '15 Seats Left | 10 Window Seats',
    },
  ];
  
  
  
  return (
    <div>
      <div className="sort-filter-bar">
        <div className="result-count">4 Buses Found</div>
        <div className="sort-options">
          <div className="sort-by-label">SORT BY:</div>
          <div className="sort-options-list">
            <div className="sort-option active">Relevance</div>
            <div className="sort-option">Fastest</div>
            <div className="sort-option">Cheapest</div>
            <div className="sort-option">Arrival</div>
            <div className="sort-option">Departure</div>
            <div className="sort-option">Rating</div>
          </div>
        </div>
      </div>
      <div className="seatlayout">
        <div className="seatlayoutleft">
          <div className="leftsection">
            <Typography pt={1} px={5} className="selectfilter">
              Select Filters
            </Typography>
            <Typography pt={1} px={5} className="suggest">
              Suggested for you
            </Typography>
            <Box p={3} display="block">
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Non Stop
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Prenoon Departure
                </div>

                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  indiGo
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Vistara
                </div>
              </form>
            </Box>

        
            <Typography pt={1} px={5}>
              Pick up point - Delhi
            </Typography>
            <Box p={3} display="block">
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Before 6AM
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  6 AM-12 PM
                </div>

                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  12 PM-6 PM
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  After 6 PM
                </div>
              </form>
            </Box>
            <Typography pt={1} px={5}>
              Drop point - Mumbai
            </Typography>
            <Box p={3} display="block">
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Kandawali East (9)
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Goregaon East (1)
                </div>

                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Sion (7)
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Kalyan (3)
                </div>
              </form>
            </Box>
            <Typography pt={1} px={5}>
              Drop time - Mumbai
            </Typography>
            <Box p={3} display="block">
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Before 6AM
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  6 AM-12 PM
                </div>

                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  12 PM-6 PM
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  After 6 PM
                </div>
              </form>
            </Box>
          </div>
        </div>
        <div className="seatlayoutright">
          <div className="bus-info-containers">
            <div className="titleseat">Buses from New Delhi to Mumbai</div>
            {/* Add other components/content as needed */}
          </div>
          <SwipeToSlide/>
          

          <div>
          {busDetailsData.map((busDetails) => (

          <div className="bus-detailsseat" key={busDetails.id}>
            <div className="bus-details-container">
              <div className="info-wrapper">
                <div className="info-item">
                  <div className="bus-title">{busDetails.busTitle}</div>
                  <div className="bus-type">{busDetails.busType}</div>
                </div>
                <div className="info-item1">
                  <div className="timeseat">
                    <span className="time-bold">{busDetails.departureTime}</span>
                    <span>{busDetails.departureDate}</span>
                  </div>
                </div>
                <div className="info-item1">
                  <div className="duration">{busDetails.duration}</div>
                </div>
                <div className="info-item1">
                  <div className="timeseat">
                    <span className="time-bold">{busDetails.arrivalTime}</span>
                    <span>{busDetails.arrivalDate}</span>
                  </div>
                </div>
              </div>
              <div className="priceseat">
                <div className="total-price">{busDetails.totalPrice}</div>
              </div>
            </div>
            <div className="rating-info-container">
              <div className="rating-section">
                <div className="rating-item">
                  <div className="rating-icon">
                    <div className="icon-circle">
                      <div className="icon-backgroundLay">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <mask
                            id="mask0_688_5832"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="21"
                            height="20"
                          >
                            <rect
                              x="0.5"
                              width="20"
                              height="20"
                              fill="#D9D9D9"
                            />
                          </mask>
                          <g mask="url(#mask0_688_5832)">
                            <path
                              d="M10.2057 6.75L12.8307 14.8542L6.2474 9.85417L10.2057 6.75ZM5.35156 18.3333L6.70573 12.4792L2.16406 8.54167L8.16406 8.02083L10.4974 2.5L12.8307 8.02083L18.8307 8.54167L14.2891 12.4792L15.6432 18.3333L10.4974 15.2292L5.35156 18.3333Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="icon-value">{busDetails.rating}</div>
                  </div>
                </div>
                <div className="tracking-item">
                  <div className="tracking-icon">
                    <div className="icon-circle">
                      <div className="icon-background-gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <mask
                            id="mask0_688_5837"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="25"
                            height="24"
                          >
                            <rect
                              x="0.5"
                              width="24"
                              height="24"
                              fill="#D9D9D9"
                            />
                          </mask>
                          <g mask="url(#mask0_688_5837)">
                            <path
                              d="M12.5 22C10.7333 22 9.29167 21.7208 8.175 21.1625C7.05833 20.6042 6.5 19.8833 6.5 19C6.5 18.4167 6.74167 17.9083 7.225 17.475C7.70833 17.0417 8.375 16.7 9.225 16.45L9.8 18.35C9.51667 18.4333 9.25833 18.5375 9.025 18.6625C8.79167 18.7875 8.63333 18.9 8.55 19C8.76667 19.2667 9.26667 19.5 10.05 19.7C10.8333 19.9 11.65 20 12.5 20C13.35 20 14.1708 19.9 14.9625 19.7C15.7542 19.5 16.2583 19.2667 16.475 19C16.3917 18.9 16.2333 18.7875 16 18.6625C15.7667 18.5375 15.5083 18.4333 15.225 18.35L15.8 16.45C16.65 16.7 17.3125 17.0417 17.7875 17.475C18.2625 17.9083 18.5 18.4167 18.5 19C18.5 19.8833 17.9417 20.6042 16.825 21.1625C15.7083 21.7208 14.2667 22 12.5 22ZM12.5 15.325C12.8 14.775 13.1167 14.2708 13.45 13.8125C13.7833 13.3542 14.1083 12.9167 14.425 12.5C15.0417 11.7 15.5333 10.9792 15.9 10.3375C16.2667 9.69583 16.45 8.9 16.45 7.95C16.45 6.85 16.0667 5.91667 15.3 5.15C14.5333 4.38333 13.6 4 12.5 4C11.4 4 10.4667 4.38333 9.7 5.15C8.93333 5.91667 8.55 6.85 8.55 7.95C8.55 8.9 8.73333 9.69583 9.1 10.3375C9.46667 10.9792 9.95833 11.7 10.575 12.5C10.8917 12.9167 11.2167 13.3542 11.55 13.8125C11.8833 14.2708 12.2 14.775 12.5 15.325ZM12.5 19C12.3167 19 12.15 18.9458 12 18.8375C11.85 18.7292 11.7417 18.5833 11.675 18.4C11.2917 17.2167 10.8083 16.225 10.225 15.425C9.64167 14.625 9.075 13.8583 8.525 13.125C7.99167 12.3917 7.52917 11.6333 7.1375 10.85C6.74583 10.0667 6.55 9.1 6.55 7.95C6.55 6.28333 7.125 4.875 8.275 3.725C9.425 2.575 10.8333 2 12.5 2C14.1667 2 15.575 2.575 16.725 3.725C17.875 4.875 18.45 6.28333 18.45 7.95C18.45 9.1 18.2583 10.0667 17.875 10.85C17.4917 11.6333 17.025 12.3917 16.475 13.125C15.9417 13.8583 15.3792 14.625 14.7875 15.425C14.1958 16.225 13.7083 17.2167 13.325 18.4C13.2583 18.5833 13.15 18.7292 13 18.8375C12.85 18.9458 12.6833 19 12.5 19ZM12.5 10.075C13.0833 10.075 13.5833 9.86667 14 9.45C14.4167 9.03333 14.625 8.53333 14.625 7.95C14.625 7.36667 14.4167 6.86667 14 6.45C13.5833 6.03333 13.0833 5.825 12.5 5.825C11.9167 5.825 11.4167 6.03333 11 6.45C10.5833 6.86667 10.375 7.36667 10.375 7.95C10.375 8.53333 10.5833 9.03333 11 9.45C11.4167 9.86667 11.9167 10.075 12.5 10.075Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="icon-value">
                      <div className="tracking-label">Live Tracking</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="seats-info">{busDetails.seatsLeft}</div>
            </div>
            <div className="policies-section-container">
              <div className="section-links-container">
                <div className="link-wrapper">
                  <div className="link-item">
                    <div className="link-text">Policies</div>
                    <div className="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.78966 14.707C7.60219 14.5194 7.49688 14.2651 7.49688 14C7.49688 13.7348 7.60219 13.4805 7.78966 13.293L11.0827 9.99997L7.78966 6.70697C7.69415 6.61472 7.61797 6.50438 7.56556 6.38237C7.51315 6.26037 7.48557 6.12915 7.48441 5.99637C7.48326 5.86359 7.50856 5.73191 7.55884 5.60902C7.60912 5.48612 7.68337 5.37447 7.77727 5.28057C7.87116 5.18668 7.98281 5.11243 8.10571 5.06215C8.22861 5.01187 8.36028 4.98656 8.49306 4.98772C8.62584 4.98887 8.75706 5.01646 8.87907 5.06887C9.00107 5.12128 9.11142 5.19746 9.20366 5.29297L13.2037 9.29297C13.3911 9.4805 13.4964 9.7348 13.4964 9.99997C13.4964 10.2651 13.3911 10.5194 13.2037 10.707L9.20366 14.707C9.01614 14.8944 8.76183 14.9998 8.49666 14.9998C8.2315 14.9998 7.97719 14.8944 7.78966 14.707Z"
                          fill="#BBBBBB"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="link-text">Photos</div>
                    <div className="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.78966 14.707C7.60219 14.5194 7.49688 14.2651 7.49688 14C7.49688 13.7348 7.60219 13.4805 7.78966 13.293L11.0827 9.99997L7.78966 6.70697C7.69415 6.61472 7.61797 6.50438 7.56556 6.38237C7.51315 6.26037 7.48557 6.12915 7.48441 5.99637C7.48326 5.86359 7.50856 5.73191 7.55884 5.60902C7.60912 5.48612 7.68337 5.37447 7.77727 5.28057C7.87116 5.18668 7.98281 5.11243 8.10571 5.06215C8.22861 5.01187 8.36028 4.98656 8.49306 4.98772C8.62584 4.98887 8.75706 5.01646 8.87907 5.06887C9.00107 5.12128 9.11142 5.19746 9.20366 5.29297L13.2037 9.29297C13.3911 9.4805 13.4964 9.7348 13.4964 9.99997C13.4964 10.2651 13.3911 10.5194 13.2037 10.707L9.20366 14.707C9.01614 14.8944 8.76183 14.9998 8.49666 14.9998C8.2315 14.9998 7.97719 14.8944 7.78966 14.707Z"
                          fill="#BBBBBB"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="link-text">Amenities</div>
                    <div className="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.78966 14.707C7.60219 14.5194 7.49688 14.2651 7.49688 14C7.49688 13.7348 7.60219 13.4805 7.78966 13.293L11.0827 9.99997L7.78966 6.70697C7.69415 6.61472 7.61797 6.50438 7.56556 6.38237C7.51315 6.26037 7.48557 6.12915 7.48441 5.99637C7.48326 5.86359 7.50856 5.73191 7.55884 5.60902C7.60912 5.48612 7.68337 5.37447 7.77727 5.28057C7.87116 5.18668 7.98281 5.11243 8.10571 5.06215C8.22861 5.01187 8.36028 4.98656 8.49306 4.98772C8.62584 4.98887 8.75706 5.01646 8.87907 5.06887C9.00107 5.12128 9.11142 5.19746 9.20366 5.29297L13.2037 9.29297C13.3911 9.4805 13.4964 9.7348 13.4964 9.99997C13.4964 10.2651 13.3911 10.5194 13.2037 10.707L9.20366 14.707C9.01614 14.8944 8.76183 14.9998 8.49666 14.9998C8.2315 14.9998 7.97719 14.8944 7.78966 14.707Z"
                          fill="#BBBBBB"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="link-text">Pickups & Drops</div>
                    <div className="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.78966 14.707C7.60219 14.5194 7.49688 14.2651 7.49688 14C7.49688 13.7348 7.60219 13.4805 7.78966 13.293L11.0827 9.99997L7.78966 6.70697C7.69415 6.61472 7.61797 6.50438 7.56556 6.38237C7.51315 6.26037 7.48557 6.12915 7.48441 5.99637C7.48326 5.86359 7.50856 5.73191 7.55884 5.60902C7.60912 5.48612 7.68337 5.37447 7.77727 5.28057C7.87116 5.18668 7.98281 5.11243 8.10571 5.06215C8.22861 5.01187 8.36028 4.98656 8.49306 4.98772C8.62584 4.98887 8.75706 5.01646 8.87907 5.06887C9.00107 5.12128 9.11142 5.19746 9.20366 5.29297L13.2037 9.29297C13.3911 9.4805 13.4964 9.7348 13.4964 9.99997C13.4964 10.2651 13.3911 10.5194 13.2037 10.707L9.20366 14.707C9.01614 14.8944 8.76183 14.9998 8.49666 14.9998C8.2315 14.9998 7.97719 14.8944 7.78966 14.707Z"
                          fill="#BBBBBB"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="link-text">Reviews</div>
                    <div className="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.78966 14.707C7.60219 14.5194 7.49688 14.2651 7.49688 14C7.49688 13.7348 7.60219 13.4805 7.78966 13.293L11.0827 9.99997L7.78966 6.70697C7.69415 6.61472 7.61797 6.50438 7.56556 6.38237C7.51315 6.26037 7.48557 6.12915 7.48441 5.99637C7.48326 5.86359 7.50856 5.73191 7.55884 5.60902C7.60912 5.48612 7.68337 5.37447 7.77727 5.28057C7.87116 5.18668 7.98281 5.11243 8.10571 5.06215C8.22861 5.01187 8.36028 4.98656 8.49306 4.98772C8.62584 4.98887 8.75706 5.01646 8.87907 5.06887C9.00107 5.12128 9.11142 5.19746 9.20366 5.29297L13.2037 9.29297C13.3911 9.4805 13.4964 9.7348 13.4964 9.99997C13.4964 10.2651 13.3911 10.5194 13.2037 10.707L9.20366 14.707C9.01614 14.8944 8.76183 14.9998 8.49666 14.9998C8.2315 14.9998 7.97719 14.8944 7.78966 14.707Z"
                          fill="#BBBBBB"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hide-seats1">
                <div className="hide-seats-button1">
                  <div className="button-label1" onClick={handleclick}>SELECT SEATS</div>
                </div>
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

export default BusResult;