import "./conformation.css";
import "./completebooking.css";
import FlightSummary from "./FlightSummary";
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
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// hotel tabs
import "bootstrap/dist/css/bootstrap.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Grid, Paper, Radio, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import GppGoodIcon from "@mui/icons-material/GppGood";

import SquareIcon from "@mui/icons-material/Square";

import SendIcon from "@mui/icons-material/Send";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import AddCircleIcon from "@mui/icons-material/AddCircle";

function CompleteBooking() {
  const dispatch = useDispatch();
  const location = useLocation();
  // const navigate = useNavigate();
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
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Perform any necessary actions before navigation
    // For example, make API calls, form validation, etc.

    // Navigate to the payment page
    navigate("/conformation");
  };

  return (
    <div>
      <div className="booking-header-container">
        <div className="booking-title">
          <div>Complete your Booking</div>
        </div>
      </div>
      <div className="containercon">
        <div className="flightsummary">
          <div class="left">
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
              {/* <div className="my-component1">
      <div className="location-icon1"></div>
      <div className="text-container1">
      <div className="title1">CHANGE OF PLANES</div>
        <div className="layover-info1">
       
          <div className="layover-duration1">5h 5m</div>
          <div className="layover-description1">Layover in Jaipur</div>
        </div>
      </div>
    </div> */}
            </div>

            {/* comeing */}
            <div
              className="flight-details-container"
              style={{ marginTop: "20px" }}
            >
              <div className="main-section">
                <div className="left-section">
                  <div className="city-details">
                    <div className="city-name">Bengaluru</div>
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
                    <div className="city-name">New Delhi</div>
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
                        <div className="location-name"> Jaipur</div>
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
                        <div className="location-name">New Delhi</div>
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
                        <p sx={{ color: "#BBBBBB" }}>(optional)</p>
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
          </div>
          <div class="right">
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
        <Link to="/conformation">
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
          >
            Continue
          </Button>{" "}
        </Link>
        {/* Add other components as needed */}
      </div>
    </div>
  );
}

export default CompleteBooking;
