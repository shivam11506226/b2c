import "./conformation.css";
import "./completebooking.css";

import CancellationRefundPolicy from "../flight/CancellationRefundPolicy";
import TripSecureComponent from "../flight/TripSecureComponent";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Chip from "@mui/material/Chip";

import React, { useState } from "react";
// hotel tabs
import "bootstrap/dist/css/bootstrap.css";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";

import Checkbox from "@mui/material/Checkbox";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function CompleteBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const adultCount = queryParams.get("adult");
  const childCount = queryParams.get("child");
  const infantCount = queryParams.get("infant");
  console.log("count passanger", adultCount, childCount, infantCount);
  const reducerState = useSelector((state) => state);
  console.log(
    "reducerState 👍",
    reducerState?.flightFare?.flightQuoteData?.Results
  );
  const TicketDetails = reducerState?.flightFare?.flightQuoteData?.Results;
  const fareValue = reducerState?.flightFare?.flightQuoteData?.Results;

  console.log("TicketDetails    ", reducerState);

  const ResultIndex = sessionStorage.getItem("ResultIndex");
  // console.log("resultIndex", ResultIndex);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const results =
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;
  // console.log("result 👍", results[0]);

  const payload = {
    EndUserIp: reducerState?.ip?.ipData,
    TokenId: reducerState?.ip?.tokenData,
    TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
    ResultIndex: ResultIndex,
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [accordionExpanded, setAccordionExpanded] = React.useState(false);

  const handleAccordionChange = (index) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? index : false);
  };

  const [value, setValue] = React.useState("1");

  // Add form of passenger
  const passengerTemplate = {
    Title: "Mr",
    FirstName: "Unit",
    LastName: "test",
    PaxType: 1,
    DateOfBirth: "1987-12-06T00:00:00",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    AddressLine1: "123, Test",
    AddressLine2: "",
    Fare: {
      Currency: "INR",
      BaseFare: 3171,
      Tax: 1284,
      YQTax: 0,
      AdditionalTxnFeePub: 0,
      AdditionalTxnFeeOfrd: 0,
      OtherCharges: 116.96,
      Discount: 0,
      PublishedFare: 4581.96,
      OfferedFare: 4355.03,
      TdsOnCommission: 6.34,
      TdsOnPLB: 9.14,
      TdsOnIncentive: 6.22,
      ServiceFee: 10,
    },
    City: "Gurgaon",
    CountryCode: "IN",
    CellCountryCode: "+92581-",
    ContactNo: "1234567890",
    Nationality: "IN",
    Email: "harsh@tbtq.in",
    IsLeadPax: true,
    FFAirlineCode: null,
    FFNumber: "",
    GSTCompanyAddress: "",
    GSTCompanyContactNumber: "",
    GSTCompanyName: "",
    GSTNumber: "",
    GSTCompanyEmail: "",
  };
  const childPassenger = {
    Title: "Mr",
    FirstName: "Raj",
    LastName: "test",
    PaxType: 2,
    DateOfBirth: "",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    AddressLine1: "123, Test",
    AddressLine2: "",
    Fare: {
      Currency: "INR",
      BaseFare: 3171,
      Tax: 1284,
      YQTax: 0,
      AdditionalTxnFeePub: 0,
      AdditionalTxnFeeOfrd: 0,
      OtherCharges: 116.96,
      Discount: 0,
      PublishedFare: 4581.96,
      OfferedFare: 4355.03,
      TdsOnCommission: 6.34,
      TdsOnPLB: 9.14,
      TdsOnIncentive: 6.22,
      ServiceFee: 10,
    },
    City: "Gurgaon",
    CountryCode: "IN",
    CellCountryCode: "+92581-",
    ContactNo: "9875432345",
    Nationality: "IN",
    Email: "harsh@tbtq.in",
    IsLeadPax: false,
    FFAirlineCode: null,
    FFNumber: "",
    GSTCompanyAddress: "",
    GSTCompanyContactNumber: "",
    GSTCompanyName: "",
    GSTNumber: "",
    GSTCompanyEmail: "",
  };

  // Initialize the passenger list with the required number of passengers
  const passengerLists = [];
  for (let i = 0; i < adultCount; i++) {
    passengerLists.push({
      ...passengerTemplate,
      IsLeadPax: i === 0, // Set the first passenger as the lead passenger
    });
  }

  const passengerChildLists = [];
  for (let i = 0; i < childCount; i++) {
    passengerChildLists.push({
      ...childPassenger,
      IsLeadPax: false, // Set the first passenger as the lead passenger
    });
  }

  // Set the initial state of the passenger list
  const [passengerList, setPassengerList] = useState(passengerLists);
  const allPassenger = [passengerLists, passengerChildLists];
  const [passengerData, setPassengerData] = useState(allPassenger.flat());

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...passengerData];
    list[index][name] = value;
    setPassengerData(list);
  };
  const handleChildChange = (e, index) => {
    // const { name, value } = e.target;
    // setPassengerData((prevList) => {
    //   const newList = [...prevList];
    //   newList[index + parseInt(adultCount)] = {
    //     ...newList[index + parseInt(adultCount)],
    //     [name]: value,
    //   };
    //   return newList;
    // });
    const { name, value } = e.target;
    const list = [...passengerData];
    list[index + parseInt(adultCount)][name] = value;
    setPassengerData(list);
  };

  console.error(passengerData);

  const dateString = TicketDetails?.Segments[0][0]?.Origin?.DepTime;
  const date1 = new Date(dateString);
  const time1 = date1.toLocaleTimeString()?.slice(0, 4);

  const day1 = date1.getDate();
  const month1 = date1.toLocaleString("default", {
    month: "short",
  });
  const year1 = date1.getFullYear();
  const formattedDate1 = `${day1 + " "} ${month1 + " "} ${year1 + " "}`;

  const dateString1 = TicketDetails?.Segments[0][0]?.Destination?.ArrTime;
  const date2 = new Date(dateString1);
  const time2 = `${date2.toLocaleTimeString()?.slice(0, 4)}  `;

  const day2 = `${date2.getDate()}  `;
  const month2 = date2.toLocaleString("default", {
    month: "short",
  });
  const year2 = date2.getFullYear();
  const formattedDate2 = `${day2}  ${month2} ${year2}`;

  // duration
  const totalMinutes = TicketDetails?.Segments[0][0]?.Duration;
  const durationHours = Math.floor(totalMinutes / 60);
  const durationMinutes = totalMinutes % 60;
  const duration_Time = `${durationHours} Hours and ${durationMinutes} minutes`;

  const authenticUser = reducerState?.logIn?.loginData?.status;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegModalOpen, setRegIsModalOpen] = useState(false);

  // form submission
  function handleSubmit(event) {
    event.preventDefault();

    if (authenticUser === 200) {
      const formData = new FormData(event.target);

      //
      // }
    } else {
      setIsModalOpen(true);
    }
  }
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));
  // const navigate = useNavigate();
  function handleButtonClick() {
    // Perform any necessary actions before navigation
    // For example, make API calls, form validation, etc.

    // Navigate to the payment page

    navigate("/nonstopflight");
  }

  return (
    <div>
      <div className="booking-header-container">
        <div className="booking-title">
          <div>Complete your Booking</div>
        </div>
      </div>
      <div className="containercon">
        <div className="flightsummary">
          <div class="left3">
            {/* going */}
            <div className="flight-details-container">
              <div className="main-section">
                <div className="left-section">
                  <div className="city-details">
                    <div className="city-name">New Delhi</div>
                    <div className="flight-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                      >
                        <mask
                          id="mask0_389_42841"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="28"
                          height="29"
                        >
                          <rect y="0.5" width="28" height="28" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_389_42841)">
                          <path
                            d="M16.3307 21.5L14.6974 19.8083L18.8391 15.6667H4.66406V13.3333H18.8391L14.6974 9.19167L16.3307 7.5L23.3307 14.5L16.3307 21.5Z"
                            fill="#071C2C"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="city-name">Bengaluru</div>
                  </div>
                  <div className="flight-info">
                    <div className="date-info">
                      <div className="date-label">Sunday, Oct 29</div>
                    </div>
                    <div className="date-info">
                      <div className="stop-info">1 Stop . 8h 30m</div>
                    </div>
                  </div>
                </div>
                <div className="right-section">
                  <div className="cancellation-section">
                    <div className="cancellation-fee">
                      Cancellation Fees Apply
                    </div>
                    <div className="fare-rules-button">View Fare Rules</div>
                  </div>
                </div>
              </div>
              <div className="your-container1">
                <div className="header2">
                  <div className="airline-info">
                    <div className="airline-logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_389_42857)">
                          <path
                            d="M11.54 14.49C10.262 14.49 9.276 13.492 9.276 12.214C9.276 10.962 10.256 9.944 11.54 9.944C12.772 9.944 13.778 10.962 13.778 12.214C13.778 13.492 12.773 14.491 11.539 14.491L11.54 14.49ZM14.614 6.636L14.4 7.634C13.81 6.454 12.052 6.337 11.105 6.337C8.153 6.337 5.578 9.178 5.578 13.083C5.578 16.223 7.453 18.194 9.808 18.194C11.124 18.194 12.24 17.89 13.161 16.794L12.921 17.896H16.632L18.324 6.636C17.086 6.635 15.842 6.646 14.614 6.636ZM12 0C18.63 0 24 5.37 24 12C24 18.63 18.63 24 12 24C5.37 24 0 18.63 0 12C0 5.37 5.37 0 12 0Z"
                            fill="#FF0000"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_389_42857">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="airline-details">
                      <p className="airline-name">AirAsia</p>
                      <p className="flight-code">6E403</p>
                    </div>
                  </div>
                  <div className="aircraft-info">
                    <div className="aircraft-type">Airbus A320</div>
                  </div>
                </div>
                <div className="your-container3">
                  <div className="header3">
                    <div className="time-info">
                      <div className="departure-time">05:00</div>

                      <div className="location-info">
                        <div className="location-icon">
                          <div></div>
                        </div>
                        <div className="location-name">New Delhi</div>
                        <div className="location-details">
                          Indira Gandhi International Airport, Terminal 3
                        </div>
                      </div>
                    </div>
                    <div className="time-info">
                      <div className="departure-time">05:55</div>
                      <div className="location-info">
                        <div className="location-icon">
                          <div
                            style={{
                              width: 24,

                              transform: "rotate(90deg)",
                              transformOrigin: "0 0",
                              border: "2px #BBBBBB dotted",
                              marginTop: "-22px",
                              marginLeft: "8px",
                            }}
                          ></div>
                        </div>

                        <div className="location-name">Jaipur</div>
                        <div className="location-details">
                          Jaipur Airport, Terminal 2
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dotted-line"></div>
                  <div className="additional-info">
                    <div className="info-category">
                      <div className="info-label">Baggage</div>
                      <div className="info-value">ADULT</div>
                    </div>
                    <div className="info-category">
                      <div className="info-label">Check-in</div>
                      <div className="info-value">
                        15 Kgs
                        <br />
                        (1 piece only)
                      </div>
                    </div>
                    <div className="info-category">
                      <div className="info-label">Cabin</div>
                      <div className="info-value">
                        7 Kgs
                        <br />
                        (1 piece only)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="change-of-planes-container">
                <div className="vertical-line3"></div>
                <div className="text-container1">
                  <div className="title3">CHANGE OF PLANES</div>
                  <div className="duration-container">
                    <div className="duration">5h 5m</div>
                    <div className="layover-info">Layover in Jaipur</div>
                  </div>
                </div>
              </div>
              <div className="your-container1">
                <div className="header2">
                  <div className="airline-info">
                    <div className="airline-logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_389_42899)">
                          <path
                            d="M22.9883 1.07418e-08C22.7383 1.07418e-08 22.4883 0.096 22.2973 0.287C22.1142 0.471176 22.0114 0.720313 22.0114 0.98C22.0114 1.23969 22.1142 1.48882 22.2973 1.673C22.3878 1.76401 22.4955 1.83622 22.6141 1.8855C22.7327 1.93478 22.8598 1.96015 22.9883 1.96015C23.1167 1.96015 23.2438 1.93478 23.3624 1.8855C23.481 1.83622 23.5887 1.76401 23.6793 1.673C23.8623 1.48882 23.9651 1.23969 23.9651 0.98C23.9651 0.720313 23.8623 0.471176 23.6793 0.287C23.5886 0.196018 23.481 0.123828 23.3624 0.0745765C23.2438 0.0253248 23.1167 -1.90485e-05 22.9883 1.07418e-08ZM20.5443 1.959C20.2943 1.959 20.0443 2.055 19.8533 2.246C19.6702 2.43018 19.5674 2.67931 19.5674 2.939C19.5674 3.19869 19.6702 3.44782 19.8533 3.632C19.944 3.72277 20.0517 3.79477 20.1703 3.8439C20.2888 3.89303 20.4159 3.91831 20.5443 3.91831C20.6726 3.91831 20.7997 3.89303 20.9182 3.8439C21.0368 3.79477 21.1445 3.72277 21.2353 3.632C21.3717 3.49488 21.4646 3.32047 21.5022 3.13071C21.5398 2.94095 21.5205 2.7443 21.4466 2.56549C21.3728 2.38669 21.2477 2.23371 21.0871 2.1258C20.9266 2.01789 20.7377 1.95985 20.5443 1.959ZM6.38225 4.408C6.12789 4.41613 5.88666 4.52289 5.70961 4.70569C5.53255 4.8885 5.43355 5.13301 5.43355 5.3875C5.43355 5.64199 5.53255 5.8865 5.70961 6.06931C5.88666 6.25211 6.12789 6.35887 6.38225 6.367C6.64203 6.367 6.89117 6.2638 7.07486 6.08011C7.25855 5.89642 7.36175 5.64728 7.36175 5.3875C7.36175 5.12772 7.25855 4.87858 7.07486 4.69489C6.89117 4.5112 6.64203 4.408 6.38225 4.408ZM9.31025 4.408C9.05047 4.408 8.80133 4.5112 8.61764 4.69489C8.43395 4.87858 8.33075 5.12772 8.33075 5.3875C8.33075 5.64728 8.43395 5.89642 8.61764 6.08011C8.80133 6.2638 9.05047 6.367 9.31025 6.367C9.57003 6.367 9.81917 6.2638 10.0029 6.08011C10.1866 5.89642 10.2898 5.64728 10.2898 5.3875C10.2898 5.12772 10.1866 4.87858 10.0029 4.69489C9.81917 4.5112 9.57003 4.408 9.31025 4.408ZM12.7303 4.408C12.4705 4.408 12.2213 4.5112 12.0376 4.69489C11.8539 4.87858 11.7508 5.12772 11.7508 5.3875C11.7508 5.64728 11.8539 5.89642 12.0376 6.08011C12.2213 6.2638 12.4705 6.367 12.7303 6.367C12.9846 6.35887 13.2258 6.25211 13.4029 6.06931C13.58 5.8865 13.679 5.64199 13.679 5.3875C13.679 5.13301 13.58 4.8885 13.4029 4.70569C13.2258 4.52289 12.9846 4.41613 12.7303 4.408ZM15.6613 4.408C15.4015 4.408 15.1523 4.5112 14.9686 4.69489C14.7849 4.87858 14.6818 5.12772 14.6818 5.3875C14.6818 5.64728 14.7849 5.89642 14.9686 6.08011C15.1523 6.2638 15.4015 6.367 15.6613 6.367C15.921 6.367 16.1702 6.2638 16.3539 6.08011C16.5376 5.89642 16.6408 5.64728 16.6408 5.3875C16.6408 5.12772 16.5376 4.87858 16.3539 4.69489C16.1702 4.5112 15.921 4.408 15.6613 4.408ZM18.5923 4.408C18.4635 4.40793 18.336 4.43323 18.217 4.48244C18.098 4.53166 17.9899 4.60383 17.8988 4.69483C17.8077 4.78583 17.7354 4.89388 17.6861 5.01282C17.6367 5.13175 17.6113 5.25924 17.6113 5.388C17.6112 5.51676 17.6365 5.64427 17.6857 5.76326C17.7349 5.88224 17.8071 5.99037 17.8981 6.08146C17.9891 6.17256 18.0971 6.24484 18.2161 6.29417C18.335 6.34351 18.4625 6.36893 18.5913 6.369C18.8513 6.36913 19.1007 6.26596 19.2847 6.08217C19.4687 5.89839 19.5721 5.64904 19.5723 5.389C19.5724 5.12896 19.4692 4.87951 19.2854 4.69554C19.1016 4.51156 18.8523 4.40813 18.5923 4.408ZM15.6613 7.347C15.4093 7.35839 15.1714 7.46651 14.9971 7.64886C14.8228 7.83122 14.7255 8.07375 14.7255 8.326C14.7255 8.57825 14.8228 8.82078 14.9971 9.00314C15.1714 9.18549 15.4093 9.29361 15.6613 9.305C15.9132 9.29361 16.1511 9.18549 16.3254 9.00314C16.4997 8.82078 16.597 8.57825 16.597 8.326C16.597 8.07375 16.4997 7.83122 16.3254 7.64886C16.1511 7.46651 15.9132 7.35839 15.6613 7.347ZM18.5923 7.347C18.3379 7.35513 18.0967 7.46189 17.9196 7.64469C17.7426 7.8275 17.6436 8.07201 17.6436 8.3265C17.6436 8.58099 17.7426 8.8255 17.9196 9.00831C18.0967 9.19111 18.3379 9.29787 18.5923 9.306C18.7206 9.30587 18.8477 9.28044 18.9663 9.23115C19.0848 9.18187 19.1925 9.1097 19.2832 9.01878C19.3738 8.92786 19.4456 8.81997 19.4946 8.70127C19.5435 8.58256 19.5685 8.45539 19.5683 8.327C19.5685 8.19857 19.5435 8.07134 19.4946 7.95258C19.4457 7.83383 19.3738 7.72586 19.2832 7.63486C19.1926 7.54386 19.0849 7.4716 18.9664 7.42221C18.8478 7.37282 18.7207 7.34726 18.5923 7.347ZM13.2193 9.306C13.0908 9.30571 12.9636 9.33092 12.845 9.38019C12.7263 9.42946 12.6187 9.50179 12.5283 9.593C12.3526 9.77792 12.2561 10.0241 12.2592 10.2791C12.2623 10.5341 12.3648 10.7778 12.5449 10.9584C12.7249 11.139 12.9684 11.2422 13.2234 11.2461C13.4784 11.2499 13.7248 11.1541 13.9103 10.979C14.0467 10.8419 14.1396 10.6675 14.1772 10.4777C14.2148 10.2879 14.1955 10.0913 14.1216 9.91249C14.0478 9.73369 13.9227 9.58071 13.7621 9.4728C13.6016 9.36489 13.4127 9.30685 13.2193 9.306ZM18.5923 10.286C18.3325 10.286 18.0833 10.3892 17.8996 10.5729C17.716 10.7566 17.6128 11.0057 17.6128 11.2655C17.6128 11.5253 17.716 11.7744 17.8996 11.9581C18.0833 12.1418 18.3325 12.245 18.5923 12.245C18.852 12.245 19.1012 12.1418 19.2849 11.9581C19.4686 11.7744 19.5718 11.5253 19.5718 11.2655C19.5718 11.0057 19.4686 10.7566 19.2849 10.5729C19.1012 10.3892 18.852 10.286 18.5923 10.286ZM11.2653 11.755C11.0055 11.755 10.7563 11.8582 10.5726 12.0419C10.3889 12.2256 10.2858 12.4747 10.2858 12.7345C10.2858 12.9943 10.3889 13.2434 10.5726 13.4271C10.7563 13.6108 11.0055 13.714 11.2653 13.714C11.525 13.714 11.7742 13.6108 11.9579 13.4271C12.1416 13.2434 12.2448 12.9943 12.2448 12.7345C12.2448 12.4747 12.1416 12.2256 11.9579 12.0419C11.7742 11.8582 11.525 11.755 11.2653 11.755ZM18.5923 13.225C18.3403 13.2364 18.1024 13.3445 17.9281 13.5269C17.7538 13.7092 17.6565 13.9518 17.6565 14.204C17.6565 14.4563 17.7538 14.6988 17.9281 14.8811C18.1024 15.0635 18.3403 15.1716 18.5923 15.183C18.8519 15.183 19.1009 15.0799 19.2845 14.8963C19.4681 14.7127 19.5713 14.4636 19.5713 14.204C19.5713 13.9444 19.4681 13.6953 19.2845 13.5117C19.1009 13.3281 18.8519 13.225 18.5923 13.225ZM9.31025 13.714C9.11688 13.715 8.92814 13.7732 8.76773 13.8812C8.60732 13.9892 8.48241 14.1422 8.40868 14.321C8.33495 14.4997 8.3157 14.6963 8.35334 14.886C8.39099 15.0756 8.48384 15.2499 8.62025 15.387C8.71083 15.4779 8.81845 15.5499 8.93694 15.5991C9.05543 15.6483 9.18246 15.6736 9.31075 15.6736C9.43905 15.6736 9.56608 15.6483 9.68457 15.5991C9.80306 15.5499 9.91068 15.4779 10.0013 15.387C10.1377 15.2499 10.2306 15.0755 10.2682 14.8857C10.3058 14.6959 10.2865 14.4993 10.2126 14.3205C10.1388 14.1417 10.0137 13.9887 9.85315 13.8808C9.69259 13.7729 9.50371 13.7149 9.31025 13.714ZM1.00725 16.164C0.878819 16.1643 0.751696 16.1898 0.63314 16.2392C0.514584 16.2886 0.406917 16.3609 0.316287 16.4519C0.133252 16.6357 0.0307216 16.8846 0.031252 17.144C0.0317825 17.4034 0.13533 17.6519 0.319116 17.835C0.502901 18.018 0.75187 18.1205 1.01125 18.12C1.27063 18.1195 1.51918 18.0159 1.70222 17.8321C1.88525 17.6483 1.98778 17.3994 1.98725 17.14C1.98672 16.8806 1.88317 16.6321 1.69939 16.449C1.5156 16.266 1.26663 16.1635 1.00725 16.164ZM3.93825 16.164C3.67887 16.1645 3.43032 16.2681 3.24729 16.4519C3.15666 16.5429 3.08484 16.6508 3.03593 16.7696C2.98703 16.8883 2.96199 17.0156 2.96225 17.144C2.96251 17.2724 2.98807 17.3996 3.03746 17.5181C3.08686 17.6367 3.15911 17.7443 3.25012 17.835C3.4339 18.018 3.68287 18.1205 3.94225 18.12C4.20163 18.1195 4.45018 18.0159 4.63322 17.8321C4.81625 17.6483 4.91878 17.3994 4.91825 17.14C4.91772 16.8806 4.81417 16.6321 4.63039 16.449C4.4466 16.266 4.19763 16.1635 3.93825 16.164ZM6.86925 16.164C6.6096 16.164 6.36059 16.2671 6.17699 16.4507C5.9934 16.6343 5.89025 16.8834 5.89025 17.143C5.89025 17.4026 5.9934 17.6517 6.17699 17.8353C6.36059 18.0189 6.6096 18.122 6.86925 18.122C7.1289 18.122 7.37791 18.0189 7.56151 17.8353C7.74511 17.6517 7.84825 17.4026 7.84825 17.143C7.84825 16.8834 7.74511 16.6343 7.56151 16.4507C7.37791 16.2671 7.1289 16.164 6.86925 16.164ZM18.5923 16.653C18.3403 16.6644 18.1024 16.7725 17.9281 16.9549C17.7538 17.1372 17.6565 17.3798 17.6565 17.632C17.6565 17.8842 17.7538 18.1268 17.9281 18.3091C18.1024 18.4915 18.3403 18.5996 18.5923 18.611C18.8519 18.611 19.1009 18.5079 19.2845 18.3243C19.4681 18.1407 19.5713 17.8916 19.5713 17.632C19.5713 17.3724 19.4681 17.1233 19.2845 16.9397C19.1009 16.7561 18.8519 16.653 18.5923 16.653ZM6.86925 19.103C6.6096 19.103 6.36059 19.2061 6.17699 19.3897C5.9934 19.5733 5.89025 19.8224 5.89025 20.082C5.89025 20.3416 5.9934 20.5907 6.17699 20.7743C6.36059 20.9579 6.6096 21.061 6.86925 21.061C7.1289 21.061 7.37791 20.9579 7.56151 20.7743C7.74511 20.5907 7.84825 20.3416 7.84825 20.082C7.84825 19.8224 7.74511 19.5733 7.56151 19.3897C7.37791 19.2061 7.1289 19.103 6.86925 19.103ZM6.86925 22.041C6.60947 22.041 6.36033 22.1442 6.17664 22.3279C5.99295 22.5116 5.88975 22.7607 5.88975 23.0205C5.88975 23.2803 5.99295 23.5294 6.17664 23.7131C6.36033 23.8968 6.60947 24 6.86925 24C7.12903 24 7.37817 23.8968 7.56186 23.7131C7.74555 23.5294 7.84875 23.2803 7.84875 23.0205C7.84875 22.7607 7.74555 22.5116 7.56186 22.3279C7.37817 22.1442 7.12903 22.041 6.86925 22.041Z"
                            fill="#09009B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_389_42899">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="airline-details">
                      <p className="airline-name">Indigo</p>
                      <p className="flight-code">6E393</p>
                    </div>
                  </div>
                  <div className="aircraft-info">
                    <div className="aircraft-type">Airbus A320</div>
                  </div>
                </div>
                <div className="your-container3">
                  <div className="header3">
                    <div className="time-info">
                      <div className="departure-time">05:00</div>
                      <div className="location-info">
                        <div className="location-icon"></div>
                        <div className="location-name">Jaipur</div>
                        <div className="location-details">
                          Indira Gandhi International Airport, Terminal 3
                        </div>
                      </div>
                    </div>
                    <div className="time-info">
                      <div className="departure-time">05:55</div>
                      <div className="location-info">
                        <div className="location-icon">
                          <div
                            style={{
                              width: 24,

                              transform: "rotate(90deg)",
                              transformOrigin: "0 0",
                              border: "2px #BBBBBB dotted",
                              marginTop: "-22px",
                              marginLeft: "8px",
                            }}
                          ></div>
                        </div>

                        <div className="location-name">Banglore</div>
                        <div className="location-details">
                          Jaipur Airport, Terminal 2
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dotted-line"></div>
                  <div className="additional-info">
                    <div className="info-category">
                      <div className="info-label">Baggage</div>
                      <div className="info-value">ADULT</div>
                    </div>
                    <div className="info-category">
                      <div className="info-label">Check-in</div>
                      <div className="info-value">
                        15 Kgs
                        <br />
                        (1 piece only)
                      </div>
                    </div>
                    <div className="info-category">
                      <div className="info-label">Cabin</div>
                      <div className="info-value">
                        7 Kgs
                        <br />
                        (1 piece only)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* comeing */}
            <div
              className="flight-details-container"
              style={{ marginTop: "20px" }}
            >
              <div className="main-section">
                <div className="left-section">
                  <div className="city-details">
                    <div className="city-name">New Delhi</div>
                    <div className="flight-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                      >
                        <mask
                          id="mask0_389_42841"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="28"
                          height="29"
                        >
                          <rect y="0.5" width="28" height="28" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_389_42841)">
                          <path
                            d="M16.3307 21.5L14.6974 19.8083L18.8391 15.6667H4.66406V13.3333H18.8391L14.6974 9.19167L16.3307 7.5L23.3307 14.5L16.3307 21.5Z"
                            fill="#071C2C"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="city-name">Bengaluru</div>
                  </div>

                  <div className="flight-info">
                    <div className="date-info">
                      <div className="date-label">Sunday, Oct 29</div>
                    </div>
                    <div className="date-info">
                      <div className="stop-info">1 Stop . 8h 30m</div>
                    </div>
                  </div>
                </div>
                <div className="right-section">
                  <div className="cancellation-section">
                    <div className="cancellation-fee">
                      Cancellation Fees Apply
                    </div>
                    <div className="fare-rules-button">View Fare Rules</div>
                  </div>
                </div>
              </div>
              <div className="your-container1">
                <div className="header2">
                  <div className="airline-info">
                    <div className="airline-logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_389_42857)">
                          <path
                            d="M11.54 14.49C10.262 14.49 9.276 13.492 9.276 12.214C9.276 10.962 10.256 9.944 11.54 9.944C12.772 9.944 13.778 10.962 13.778 12.214C13.778 13.492 12.773 14.491 11.539 14.491L11.54 14.49ZM14.614 6.636L14.4 7.634C13.81 6.454 12.052 6.337 11.105 6.337C8.153 6.337 5.578 9.178 5.578 13.083C5.578 16.223 7.453 18.194 9.808 18.194C11.124 18.194 12.24 17.89 13.161 16.794L12.921 17.896H16.632L18.324 6.636C17.086 6.635 15.842 6.646 14.614 6.636ZM12 0C18.63 0 24 5.37 24 12C24 18.63 18.63 24 12 24C5.37 24 0 18.63 0 12C0 5.37 5.37 0 12 0Z"
                            fill="#FF0000"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_389_42857">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="airline-details">
                      <p className="airline-name">AirAsia</p>
                      <p className="flight-code">6E403</p>
                    </div>
                  </div>
                  <div className="aircraft-info">
                    <div className="aircraft-type">Airbus A320</div>
                  </div>
                </div>
                <div className="your-container3">
                  <div className="header3">
                    <div className="time-info">
                      <div className="departure-time">05:00</div>
                      <div className="location-info">
                        <div className="location-icon">
                          <div></div>
                        </div>
                        <div className="location-name">New Delhi</div>
                        <div className="location-details">
                          Indira Gandhi International Airport, Terminal 3
                        </div>
                      </div>
                    </div>
                    <div className="time-info">
                      <div className="departure-time">05:55</div>
                      <div className="location-info">
                        <div className="location-icon">
                          <div
                            style={{
                              width: 24,

                              transform: "rotate(90deg)",
                              transformOrigin: "0 0",
                              border: "2px #BBBBBB dotted",
                              marginTop: "-22px",
                              marginLeft: "8px",
                            }}
                          ></div>
                        </div>
                        <div className="location-name">Jaipur</div>
                        <div className="location-details">
                          Jaipur Airport, Terminal 2
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dotted-line"></div>
                  <div className="additional-info">
                    <div className="info-category">
                      <div className="info-label">Baggage</div>
                      <div className="info-value">ADULT</div>
                    </div>
                    <div className="info-category">
                      <div className="info-label">Check-in</div>
                      <div className="info-value">
                        15 Kgs
                        <br />
                        (1 piece only)
                      </div>
                    </div>
                    <div className="info-category">
                      <div className="info-label">Cabin</div>
                      <div className="info-value">
                        7 Kgs
                        <br />
                        (1 piece only)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="change-of-planes-container">
                <div className="vertical-line3"></div>
                <div className="text-container1">
                  <div className="title3">CHANGE OF PLANES</div>
                  <div className="duration-container">
                    <div className="duration">5h 5m</div>
                    <div className="layover-info">Layover in Jaipur</div>
                  </div>
                </div>
              </div>
              <div className="your-container1">
                <div className="header2">
                  <div className="airline-info">
                    <div className="airline-logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_389_42857)">
                          <path
                            d="M11.54 14.49C10.262 14.49 9.276 13.492 9.276 12.214C9.276 10.962 10.256 9.944 11.54 9.944C12.772 9.944 13.778 10.962 13.778 12.214C13.778 13.492 12.773 14.491 11.539 14.491L11.54 14.49ZM14.614 6.636L14.4 7.634C13.81 6.454 12.052 6.337 11.105 6.337C8.153 6.337 5.578 9.178 5.578 13.083C5.578 16.223 7.453 18.194 9.808 18.194C11.124 18.194 12.24 17.89 13.161 16.794L12.921 17.896H16.632L18.324 6.636C17.086 6.635 15.842 6.646 14.614 6.636ZM12 0C18.63 0 24 5.37 24 12C24 18.63 18.63 24 12 24C5.37 24 0 18.63 0 12C0 5.37 5.37 0 12 0Z"
                            fill="#FF0000"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_389_42857">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="airline-details">
                      <p className="airline-name">AirAsia</p>
                      <p className="flight-code">6E403</p>
                    </div>
                  </div>
                  <div className="aircraft-info">
                    <div className="aircraft-type">Airbus A320</div>
                  </div>
                </div>
                <div className="your-container3">
                  <div className="header3">
                    <div className="time-info">
                      <div className="departure-time">05:00</div>
                      <div className="location-info">
                        <div className="location-icon">
                          <div></div>
                        </div>
                        <div className="location-name">New Delhi</div>
                        <div className="location-details">
                          Indira Gandhi International Airport, Terminal 3
                        </div>
                      </div>
                    </div>
                    <div className="time-info">
                      <div className="departure-time">05:55</div>
                      <div className="location-info">
                        <div className="location-icon">
                          <div
                            style={{
                              width: 24,

                              transform: "rotate(90deg)",
                              transformOrigin: "0 0",
                              border: "2px #BBBBBB dotted",
                              marginTop: "-22px",
                              marginLeft: "8px",
                            }}
                          ></div>
                        </div>
                        <div className="location-name">Jaipur</div>
                        <div className="location-details">
                          Jaipur Airport, Terminal 2
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dotted-line"></div>
                  <div className="additional-info">
                    <div className="info-category">
                      <div className="info-label">Baggage</div>
                      <div className="info-value">ADULT</div>
                    </div>
                    <div className="info-category">
                      <div className="info-label">Check-in</div>
                      <div className="info-value">
                        15 Kgs
                        <br />
                        (1 piece only)
                      </div>
                    </div>
                    <div className="info-category">
                      <div className="info-label">Cabin</div>
                      <div className="info-value">
                        7 Kgs
                        <br />
                        (1 piece only)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CancellationRefundPolicy />
            <CancellationRefundPolicy />
            <Box
              style={{
                backgroundColor: "white",
                boxShadow: "0px 3px 6px #00000029",
                borderRadius: "10px",
                marginTop: "10px",
              }}
              p={2}
            >
              {/* For adult passenger List */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>
                  <AccountCircleIcon /> Adult (18 yrs+)
                </Typography>
                <Typography className="Top_txt" py={3}>
                  <Chip
                    color="warning"
                    label="Please Fill adult details"
                    deleteIcon={<ErrorOutlineIcon />}
                    variant="outlined"
                  />
                </Typography>
              </Box>

              <Box>
                <div mb={2} className="services" py={1}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Adult </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box>
                        <Grid container spacing={4}>
                          <Grid item xs={12} sm={6} md={4} mb={5}>
                            <Box>
                              <div className="hotel_form_input">
                                <label className="form_label">
                                  First name*
                                </label>
                                <input
                                  className="hotel_input_select"
                                  name="FirstName"
                                  placeholder="Enter your name"
                                  // value={passengerData.FirstName}
                                  // onChange={(e) =>
                                  //   handleServiceChange(e, index)
                                  // }
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4} mb={5}>
                            <Box>
                              <div className="hotel_form_input">
                                <label className="form_label">Last name*</label>
                                <input
                                  name="LastName"
                                  placeholder="Enter your last name"
                                  // value={passengerData.LastName}
                                  // onChange={(e) =>
                                  //   handleServiceChange(e, index)
                                  // }
                                />
                              </div>
                            </Box>
                          </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6} md={4} mb={2}>
                            <Box>
                              <div className="hotel_form_input">
                                <label className="form_lable">Gender*</label>
                                <select
                                  name="Gender"
                                  className="hotel_input_select"
                                  // value={passengerData.Gender}
                                  // onChange={(e) =>
                                  //   handleServiceChange(e, index)
                                  // }
                                >
                                  <option value="1">Female</option>
                                  <option value="2">Male</option>
                                  <option value="3">Transgender</option>
                                </select>
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} py={1}>
                            <Box>
                              <div className="hotel_form_input">
                                <label hotel_form_input className="form_lable">
                                  Mobile*
                                </label>
                                <input
                                  name="ContactNo"
                                  type="text"
                                  placeholder="Enter your number"
                                  // value={passengerList?.ContactNo}
                                  // onChange={(e) =>
                                  //   handleServiceChange(e, index)
                                  // }
                                />
                              </div>
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6} md={4} mb={2}>
                            <Box>
                              <div className="hotel_form_input">
                                <label hotel_form_input className="form_lable">
                                  Date Of Birth*
                                </label>
                                <input
                                  type="date"
                                  name="DateOfBirth"
                                  className="hotel_input_select"
                                  // onChange={(e) =>
                                  //   handleServiceChange(e, index)
                                  // }
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} mb={2}>
                            <Box>
                              <div className="hotel_form_input">
                                <label hotel_form_input className="form_lable">
                                  Title*
                                </label>
                                <input
                                  name="title"
                                  type="text"
                                  placeholder="Enter your title"
                                  // value={passengerList?.ContactNo}
                                  // onChange={(e) =>
                                  //   handleServiceChange(e, index)
                                  // }
                                />
                              </div>
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6} md={4} mb={5}>
                            <Box>
                              <div className="hotel_form_input">
                                <label hotel_form_input className="form_lable">
                                  PassportNo*
                                </label>
                                <input
                                  type="date"
                                  name="passportNo"
                                  className="hotel_input_select"
                                  // onChange={(e) =>
                                  //   handleServiceChange(e, index)
                                  // }
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} py={1}>
                            <Box>
                              <div className="hotel_form_input">
                                <label hotel_form_input className="form_lable">
                                  PassportExpiry*
                                </label>
                                <input
                                  name="passportexpiry"
                                  type="text"
                                  placeholder="Enter your passportexpiry"
                                  // value={passengerList?.ContactNo}
                                  // // onChange={(e) =>
                                  //   handleServiceChange(e, index)
                                  // }
                                />
                              </div>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  {/* {hand leServiceAdd()} */}
                  {/* Form end */}
                </div>
              </Box>

              {/* For Child passenger List */}
            </Box>

            <div>
              <form onSubmit={handleSubmit} className="form">
                <Box margin="10px 15px">
                  <Box style={{ marginTop: "10px" }} px={2}>
                    <Typography
                      className="list_item"
                      style={{
                        color: "black",
                        marginTop: "12px",
                      }}
                    >
                      Your Booking Details will be sent to
                    </Typography>
                    <Box
                      style={{
                        display: "flex",
                        marginTop: "15px",
                        justifyContent: "left",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <Box mx={2}>
                          <label htmlFor="email">EMAIL ADDRESS</label>
                          <input
                            type="email"
                            placeholder="Type your Email Address "
                            name="email"
                            mx={3}
                            style={{
                              height: "35px",
                              width: "100%",

                              boxShadow: "0px 3px 6px #00000029",
                              borderRadius: "5px",

                              border: "0.5px solid #BBB",

                              padding: "12px 15px",
                            }}
                          />
                        </Box>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginLeft: "200px",
                        }}
                      >
                        <Box mx={2}>
                          <label htmlFor="email">MOBILE NUMBER</label>
                          <input
                            type="phone"
                            placeholder="Add Mobile Number"
                            name="mobile_number"
                            mx={2}
                            style={{
                              height: "35px",
                              width: "100%",

                              boxShadow: "0px 3px 6px #00000029",
                              borderRadius: "5px",

                              border: "0.5px solid #BBB",

                              padding: "12px 15px",
                            }}
                          />
                        </Box>
                      </div>
                    </Box>
                    <Box
                      style={{
                        marginTop: "10px",
                        display: "flex",
                      }}
                    >
                      <Checkbox {...label} />
                      <Typography
                        className="list_item1"
                        display="flex"
                        alignItems="center"
                      >
                        I have a GST number{" "}
                        <span sx={{ color: "#BBBBBB" }}>(optional)</span>
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    ></Box>
                  </Box>
                </Box>
              </form>
            </div>

            <TripSecureComponent />
            {/* <Link to="/conformation"> */}

            {/* </Link> */}
          </div>
          <div class="right1">
            <div className="fare-summary-container">
              <div className="fare-summary-title">Fare Summary</div>
              <div className="fare-details">
                <div className="fare-details-row">
                  <div className="fare-details-label">Base Fare</div>
                  <div className="fare-details-value">₹69,500</div>
                </div>
                <div className="fare-details-row">
                  <div className="fare-details-label">Taxes & Surcharges</div>
                  <div className="fare-details-value">₹12,510</div>
                </div>
                <div className="fare-details-total">
                  <div className="fare-details-label">
                    Total Amount to be paid
                  </div>
                  <div className="fare-details-value">₹82,015</div>
                </div>
              </div>
            </div>
            <div className="coupon-codes-container">
              <div className="coupon-title">
                <div>
                  <div className="coupon-title-text">COUPON CODES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "#E73C33",
            fontSize: "18px",
            borderRadius: "16px",
            marginTop: "16px",
            boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.30)",
          }}
          onClick={handleButtonClick}
        >
          Continue
        </Button>

        {/* Add other components as needed */}
      </div>
    </div>
  );
}

export default CompleteBooking;
