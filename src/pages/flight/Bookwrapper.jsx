import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Chip from "@mui/material/Chip";
import { apiURL } from "../../Constants/constant";
import "./bookwrapper.css"
import FlightLoader from "./FlightLoader/FlightLoader";
import fromTo from "../../images/fromTo.png"
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

import {
  bookActionGDS,
  bookAction,
  bookTicketGDS,
} from "../../Redux/FlightBook/actionFlightBook";
import { FiArrowRight } from "react-icons/fi";
import CancellationRefundPolicy from "./CancellationRefundPolicy";
import TripSecureComponent from "./TripSecureComponent";
import {
  quoteAction,
  resetFareData,
  ruleAction,
} from "../../Redux/FlightFareQuoteRule/actionFlightQuote";

import "./booknow.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import BookNowLeft from "./BookNowLeft";
import flightLoader from "../../utility/flight_loader.gif";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginForm from "../../components/Login";
import SignUp from "../../components/Signup";
function valuetext(value) {
  return `${value}°C`;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: ` ${theme.palette.divider}`,
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

export default function BookWrapper() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const adultCount = queryParams.get("adult");
  const childCount = queryParams.get("child");
  const infantCount = queryParams.get("infant");
  console.log("count passanger", adultCount, childCount, infantCount);
  const reducerState = useSelector((state) => state);
  const [email, setEmail] = useState("");
  const [cNumber, setCnumber] = useState("");
  const [farePrice, setFarePrice] = useState("");
  console.log(
    "reducerState 👍",
    reducerState?.flightFare?.flightQuoteData?.Results
  );
  const TicketDetails = reducerState?.flightFare?.flightQuoteData?.Results;
  const cancellationPolicy = reducerState?.flightFare?.flightQuoteData?.Results?.MiniFareRules?.[0];

  const detailsOfCancel = cancellationPolicy?.filter(rule => rule.Type === 'Cancellation')

  const fareValue = reducerState?.flightFare?.flightQuoteData?.Results;

  console.log("TicketDetails", reducerState);
  console.log(cNumber, email, "Cnumber", "Email");

  const ResultIndex = sessionStorage.getItem("ResultIndex");
  const isPassportRequired =
    reducerState?.flightFare?.flightQuoteData?.Results
      ?.IsPassportRequiredAtTicket;
  // console.log("resultIndex", ResultIndex);

  const results =
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;
  // console.log("result 👍", results[0]);

  const payload = {
    EndUserIp: reducerState?.ip?.ipData,
    TokenId: reducerState?.ip?.tokenData,
    TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
    ResultIndex: ResultIndex,
  };
  const [accordionExpanded, setAccordionExpanded] = React.useState(false);

  const handleAccordionChange = (index) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? index : false);
  };
  useEffect(() => {
    dispatch(ruleAction(payload));
    dispatch(quoteAction(payload));
  }, []);

  useEffect(() => {
    dispatch(resetFareData());
  }, [dispatch]);

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [value, setValue] = React.useState("1");

  // Add form of passenger
  const passengerTemplate = {
    Title: "",
    FirstName: "",
    LastName: "",
    PaxType: 1,
    DateOfBirth: "",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    AddressLine1: "test",
    AddressLine2: "test2",
    Fare: farePrice,
    City: "gurgaon",
    CountryCode: "IN",
    CellCountryCode: "+91-",
    ContactNo: apiURL.phoneNo,
    Nationality: "",
    Email: apiURL.flightEmail,
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
    FirstName: "",
    LastName: "",
    PaxType: 2,
    DateOfBirth: "",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    Fare: farePrice,
    IsLeadPax: false,
    FFAirlineCode: null,
    FFNumber: "",
  };
  const infantPassenger = {
    Title: "Mr",
    FirstName: "",
    LastName: "",
    PaxType: 3,
    DateOfBirth: "",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    Fare: farePrice,
    IsLeadPax: false,
    FFAirlineCode: null,
    FFNumber: "",
  };
  // Initialize the passenger list with the required number of passengers
  let totalPassenger =
    Number(adultCount) + Number(childCount) + Number(infantCount);
  const passengerLists = [];
  const passengerChildLists = [];
  const passengerInfantLists = [];

  useEffect(() => {
    if (fareValue) {
      let fareDetails = fareValue?.Fare;
      let fareBreakdown = fareValue?.FareBreakdown;
      // console.log("fareDetails: ", fareDetails);
      let arr = [];
      fareBreakdown.map((price, key) => {
        let obj1 = {
          Currency: price?.Currency,
          BaseFare: price?.BaseFare / price?.PassengerCount,
          Tax: price?.Tax / price?.PassengerCount,
          YQTax: price?.YQTax / price?.PassengerCount,
          AdditionalTxnFeePub:
            price?.AdditionalTxnFeePub / price?.PassengerCount,
          AdditionalTxnFeeOfrd:
            price?.AdditionalTxnFeeOfrd / price?.PassengerCount,
        };
        arr.push(obj1);
        // console.log(arr[1]);
        setFarePrice(arr);
      });
    }
  }, [fareValue]);

  useEffect(() => {
    if (reducerState?.flightBook?.flightBookDataGDS?.Error?.ErrorMessage == "") {
      getTicketForNonLCC();
    }
  }, [reducerState?.flightBook?.flightBookDataGDS?.Response]);

  for (let i = 0; i < adultCount; i++) {
    passengerLists.push({
      ...passengerTemplate,
      IsLeadPax: i === 0, // Set the first passenger as the lead passenger
    });
  }

  for (let i = 0; i < childCount; i++) {
    passengerChildLists.push({
      ...childPassenger,
      IsLeadPax: false, // Set the first passenger as the lead passenger
    });
  }
  for (let i = 0; i < infantCount; i++) {
    passengerInfantLists.push({
      ...infantPassenger,
      IsLeadPax: false, // Set the first passenger as the lead passenger
    });
  }

  // Set the initial state of the passenger list
  const [passengerList, setPassengerList] = useState(passengerLists);
  const allPassenger = [
    passengerLists,
    passengerChildLists,
    passengerInfantLists,
  ];
  const [passengerData, setPassengerData] = useState(allPassenger.flat());
  const handleServiceChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...passengerData];
    if (i < adultCount) {
      if (!list[i]["Fare"]) {
        list[i]["Fare"] = farePrice[0];
      }
    }
    if (i >= adultCount && i < +adultCount + +childCount) {
      if (!list[i]["Fare"]) {
        list[i]["Fare"] = farePrice[1];
      }
    } else {
      if (!list[i]["Fare"]) {
        list[i]["Fare"] = farePrice[2];
      }
    }
    list[i][name] = value;
    setPassengerData(list);
  };

  console.error(passengerData);

  // const dateString = TicketDetails?.Segments[0][0]?.Origin?.DepTime;
  // const date1 = new Date(dateString);
  // const time1 = date1.toLocaleTimeString()?.slice(0, 4);

  // const day1 = date1.getDate();
  // const month1 = date1.toLocaleString("default", {
  //   month: "short",
  // });
  // const year1 = date1.getFullYear();
  // const formattedDate1 = `${day1 + " "} ${month1 + " "} ${year1 + " "}`;

  // const dateString1 = TicketDetails?.Segments[0][0]?.Destination?.ArrTime;
  // const date2 = new Date(dateString1);
  // const time2 = `${date2.toLocaleTimeString()?.slice(0, 4)}  `;

  // const day2 = `${date2.getDate()}  `;
  // const month2 = date2.toLocaleString("default", {
  //   month: "short",
  // });
  // const year2 = date2.getFullYear();
  // const formattedDate2 = `${day2}  ${month2} ${year2}`;

  // duration
  const totalMinutes = TicketDetails?.Segments[0][0]?.Duration;
  const durationHours = Math.floor(totalMinutes / 60);
  const durationMinutes = totalMinutes % 60;
  const duration_Time = `${durationHours} Hours and ${durationMinutes} minutes`;

  const authenticUser = reducerState?.logIn?.loginData?.status;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegModalOpen, setRegIsModalOpen] = useState(false);

  // form submission
  const handleButtonClick = () => {
    if (authenticUser === 200) {
      const payloadGDS = {
        ResultIndex: ResultIndex,
        Passengers: passengerData,
        EndUserIp: reducerState?.ip?.ipData,
        TokenId: reducerState?.ip?.tokenData,
        TraceId:
          reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
      };
      const payloadLcc = {
        ResultIndex: ResultIndex,
        EndUserIp: reducerState?.ip?.ipData,
        TokenId: reducerState?.ip?.tokenData,
        TraceId:
          reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
        Passengers: passengerData,
      };

      if (fareValue?.IsLCC == false) {
        dispatch(bookActionGDS(payloadGDS));
      } else if (fareValue?.IsLCC == true) {
        dispatch(bookAction(payloadLcc));
      }
    }
  };

  const getTicketForNonLCC = () => {
    const payLoadDomestic = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
      PNR: reducerState?.flightBook?.flightBookDataGDS?.Response?.PNR,
      BookingId:
        reducerState?.flightBook?.flightBookDataGDS?.Response?.BookingId,
    };
    const payLoadInternational = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
      PNR: reducerState?.flightBook?.flightBookDataGDS?.Response?.PNR,
      BookingId:
        reducerState?.flightBook?.flightBookDataGDS?.Response?.BookingId,
      Passport: passengerData,
    };
    if (isPassportRequired) {
      dispatch(bookTicketGDS(payLoadInternational));
    } else {
      dispatch(bookTicketGDS(payLoadDomestic));
    }
  };





  // formatted time of flights 

  const duration = `${Math.floor(TicketDetails?.Segments[0][0]?.Duration / 60)}hr ${TicketDetails?.Segments[0][0]?.Duration % 60
    }min`;

  const dateString = TicketDetails?.Segments[0][0]?.Origin?.DepTime;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = date.toLocaleString("en-US", options);

  const [month, day, year, time, ampm] = formattedDate.split(" ");
  const desiredFormat = `${day}${month}-${year} ${time} ${ampm}`;

  const dateString1 = TicketDetails?.Segments[0][0]?.Destination?.ArrTime;
  const date1 = new Date(dateString1);
  const options1 = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate1 = date1.toLocaleString("en-US", options1);
  const [month1, day1, year1, time1, ampm1] =
    formattedDate1.split(" ");
  const desiredFormat1 = `${day1}${month1}-${year1} ${time1} ${ampm1}`;


  const dateString2 = TicketDetails?.Segments[0][1]?.Destination?.ArrTime;
  const date2 = new Date(dateString2);
  const options2 = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate2 = date2.toLocaleString("en-US", options2);
  const [month2, day2, year2, time2, ampm2] =
    formattedDate2.split(" ");
  const desiredFormatStopped = `${day2}${month2}-${year2} ${time2} ${ampm2}`;



  return (
    <>
      {!reducerState?.flightFare?.flightQuoteData?.Results === true ? (
        <FlightLoader />
      ) : (
        <div className="container">
          {isModalOpen && (
            <LoginForm
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
          {isRegModalOpen && (
            <SignUp
              isRegModalOpen={isRegModalOpen}
              setRegIsModalOpen={setRegIsModalOpen}
            />
          )}
          <div className="row">
            <div className="col-lg-9">
              <div className="row">

                <div className="col-lg-12">
                  {
                    TicketDetails?.Segments[0].length == 2 ?
                      (
                        <>
                          <div className="booknowFlight">
                            <div className="bookaboveBox">
                              <div>
                                <p>
                                  {
                                    TicketDetails?.Segments[0][0]?.Origin?.Airport
                                      ?.CityName
                                  }
                                  <FiArrowRight style={{ margin: "5px" }} />{" "}
                                  {
                                    TicketDetails?.Segments[0][0]?.Destination
                                      ?.Airport?.CityName
                                  }
                                </p>
                                <div className="aboveSpan">
                                  <span className="aboveSOne">{desiredFormat.slice(0, 12)}</span>
                                  <span>{`1 stop via ${TicketDetails?.Segments[0][0]?.Destination?.Airport?.CityName}`}{" "} {duration}</span>
                                </div>
                              </div>

                              <div className="aboveBelowSpan">
                                <span>Cancellation Fees Apply</span>
                                <span className="aboveSOne">View Fare Rules</span>
                              </div>
                            </div>

                            <div className="bookcenteredBox">
                              <div>
                                <img src={`${process.env.PUBLIC_URL}/FlightImages/${TicketDetails?.Segments[0][0]?.Airline?.AirlineCode}.png`} />{" "}
                              </div>
                              <span>{TicketDetails?.Segments[0][0]?.Airline?.AirlineName}</span>
                              <p>
                                {TicketDetails?.Segments[0][0]?.Airline?.AirlineCode}
                                {
                                  TicketDetails?.Segments[0][0]?.Airline
                                    ?.FlightNumber
                                }
                                {TicketDetails?.IsLCC === false ? (
                                  <span>
                                    LCC
                                  </span>
                                ) : (
                                  ""
                                )}
                              </p>
                            </div>

                            <div className="bookbottomBox">
                              <div>
                                <div className="bookBottomOne">
                                  <p>{desiredFormat.slice(13)}</p>
                                  <p>{desiredFormat1.slice(13)}</p>
                                </div>
                                <div className="bookBottomTwo">
                                  <img src={fromTo} alt="icon" />
                                </div>
                                <div className="bookBottomThree">
                                  <p>
                                    {TicketDetails?.Segments[0][0]?.Origin?.Airport
                                      ?.CityName} {" "}
                                    <span>
                                      {TicketDetails?.Segments[0][0]?.Origin?.Airport
                                        ?.AirportName}
                                    </span>
                                  </p>
                                  <p>
                                    {TicketDetails?.Segments[0][0]?.Destination?.Airport
                                      ?.CityName} {" "}
                                    <span>
                                      {TicketDetails?.Segments[0][0]?.Destination?.Airport
                                        ?.AirportName}
                                    </span>
                                  </p>
                                </div>
                              </div>



                              <div className="bookBottomFour">
                                <div>
                                  <p>Baggage</p>
                                  <span>ADULT</span>
                                </div>
                                <div>
                                  <p>Check-in</p>
                                  <span>15 Kgs</span>
                                </div>
                                <div>
                                  <p>Cabin</p>
                                  <span>7 Kgs</span>
                                </div>
                              </div>
                            </div>
                            <div className="bookbottomBox ">
                              <div>
                                <div className="bookBottomOne">
                                  <p>{desiredFormat1.slice(13)}</p>
                                  <p>{desiredFormatStopped.slice(13)}</p>
                                </div>
                                <div className="bookBottomTwo">
                                  <img src={fromTo} alt="icon" />
                                </div>
                                <div className="bookBottomThree">
                                  <p>
                                    {TicketDetails?.Segments[0][0]?.Destination?.Airport
                                      ?.CityName} {" "}
                                    <span>
                                      {TicketDetails?.Segments[0][0]?.Destination?.Airport
                                        ?.AirportName}
                                    </span>
                                  </p>
                                  <p>
                                    {TicketDetails?.Segments[0][1]?.Destination?.Airport
                                      ?.CityName} {" "}
                                    <span>
                                      {TicketDetails?.Segments[0][1]?.Destination?.Airport
                                        ?.AirportName}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="bookBottomFour">
                                <div>
                                  <p>Baggage</p>
                                  <span>ADULT</span>
                                </div>
                                <div>
                                  <p>Check-in</p>
                                  <span>15 Kgs</span>
                                </div>
                                <div>
                                  <p>Cabin</p>
                                  <span>7 Kgs</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                      :
                      (
                        <>
                          <div className="booknowFlight">
                            <div className="bookaboveBox">
                              <div>
                                <p>
                                  {
                                    TicketDetails?.Segments[0][0]?.Origin?.Airport
                                      ?.CityName
                                  }
                                  <FiArrowRight style={{ margin: "5px" }} />{" "}
                                  {
                                    TicketDetails?.Segments[0][0]?.Destination
                                      ?.Airport?.CityName
                                  }
                                </p>
                                <div className="aboveSpan">
                                  <span className="aboveSOne">{desiredFormat.slice(0, 12)}</span>
                                  <span>Non Stop {" "} {duration}</span>
                                </div>
                              </div>

                              <div className="aboveBelowSpan">
                                <span>Cancellation Fees Apply</span>
                                <span className="aboveSOne">View Fare Rules</span>
                              </div>
                            </div>

                            <div className="bookcenteredBox">
                              <div>
                                <img src={`${process.env.PUBLIC_URL}/FlightImages/${TicketDetails?.Segments[0][0]?.Airline?.AirlineCode}.png`} />{" "}
                              </div>
                              <span>{TicketDetails?.Segments[0][0]?.Airline?.AirlineName}</span>
                              <p>
                                {TicketDetails?.Segments[0][0]?.Airline?.AirlineCode}
                                {
                                  TicketDetails?.Segments[0][0]?.Airline
                                    ?.FlightNumber
                                }
                                {TicketDetails?.IsLCC === false ? (
                                  <span>
                                    LCC
                                  </span>
                                ) : (
                                  ""
                                )}
                              </p>
                            </div>

                            <div className="bookbottomBox">
                              <div>
                                <div className="bookBottomOne">
                                  <p>{desiredFormat.slice(13)}</p>
                                  <p>{desiredFormat1.slice(13)}</p>
                                </div>
                                <div className="bookBottomTwo">
                                  <img src={fromTo} alt="icon" />
                                </div>
                                <div className="bookBottomThree">
                                  <p>
                                    {TicketDetails?.Segments[0][0]?.Origin?.Airport
                                      ?.CityName} {" "}
                                    <span>
                                      {TicketDetails?.Segments[0][0]?.Origin?.Airport
                                        ?.AirportName}
                                    </span>
                                  </p>
                                  <p>
                                    {TicketDetails?.Segments[0][0]?.Destination?.Airport
                                      ?.CityName} {" "}
                                    <span>
                                      {TicketDetails?.Segments[0][0]?.Destination?.Airport
                                        ?.AirportName}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="bookBottomFour">
                                <div>
                                  <p>Baggage</p>
                                  <span>ADULT</span>
                                </div>
                                <div>
                                  <p>Check-in</p>
                                  <span>15 Kgs</span>
                                </div>
                                <div>
                                  <p>Cabin</p>
                                  <span>7 Kgs</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                  }
                </div>
                <div className="col-lg-12 mt-3">
                  <div className="bookNowCancel">
                    <div className="bookCancleOne">

                      <p>
                        Cancellation Refund Policy
                      </p>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/FlightImages/${TicketDetails?.Segments[0][0]?.Airline?.AirlineCode}.png`} />{" "}
                        <span>{TicketDetails?.Segments[0][0]?.Airline?.AirlineName}</span>
                      </div>
                      <span>Cancellation Penalty :</span>
                    </div>

                    <div className="bookCancleTwo">
                      <span>Cancel Between</span>
                      <div className="svgLineBox">
                        <div>
                          <div className="svgCircle"></div>
                          <svg xmlns="http://www.w3.org/2000/svg" max-width="560" height="9" viewBox="0 0 560 9" fill="none">
                            <path d="M4 5L662 4" stroke="url(#paint0_linear_367_27446)" stroke-width="8" stroke-linecap="round" />
                            <defs>
                              <linearGradient id="paint0_linear_367_27446" x1="4.00583" y1="7.99358" x2="662.006" y2="7.98716" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#41754C" />
                                <stop offset="0.494792" stop-color="#E2C735" />
                                <stop offset="0.494892" stop-color="#DFCB66" />
                                <stop offset="1" stop-color="#DA3030" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <span>From {detailsOfCancel?.[0]?.From}-{detailsOfCancel?.[0]?.To} {' '}
                            {detailsOfCancel?.[0]?.Unit}
                          </span>
                          <span>From {detailsOfCancel?.[1]?.From}-{detailsOfCancel?.[1]?.To} {' '}
                            {detailsOfCancel?.[1]?.Unit}</span>
                        </div>
                        <div>
                          <span>{detailsOfCancel?.[0]?.Details}</span>
                          <span>{detailsOfCancel?.[1]?.Details}</span>
                        </div>
                        {/* <div>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 mt-3">
                  <div className="bookflightPassenger">
                    <div className="headingBookFlight">
                      <h3>Traveller Details</h3>
                    </div>
                    {adultCount > 0 &&
                      Array.from({ length: adultCount }, (_, index) => (
                        <div className="bookFlightPassInner">
                          <div className="bookAdultIndex">
                            <p>Adult {index + 1}</p>
                          </div>
                          <div className="row g-3 mb-3">
                            <div className="col-lg-3 col-md-3">
                              <select
                                className="form-select h-100"
                                name="Title"
                                onChange={(e) =>
                                  handleServiceChange(e, index)
                                }
                              >
                                <option value="Mr">Mr.</option>
                                <option value="Mrs">
                                  Mrs.
                                </option>
                                <option value="Miss">
                                  Miss
                                </option>
                              </select>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div class="form-floating">
                                <input onChange={(e) =>
                                  handleServiceChange(e, index)
                                } type="text" name="FirstName" class="form-control" id="floatingInput" placeholder="First Name" />
                                <label for="floatingInput">First Name</label>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div class="form-floating">
                                <input onChange={(e) =>
                                  handleServiceChange(e, index)
                                } type="text" name="LastName" class="form-control" id="floatingInput" placeholder="Last Name" />
                                <label for="floatingInput">Last Name</label>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div class="form-floating">
                                <input
                                  type="date"
                                  name="DateOfBirth"
                                  className="form-control"
                                  onChange={(e) =>
                                    handleServiceChange(e, index)
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          {/* passport details here */}
                          {isPassportRequired == true ? (
                            <>
                              <div className="bookAdultIndex">
                                <p>Passport Details</p>
                              </div>
                              <div className="row g-3 mb-3">

                                <div className="col-lg-3 col-md-3">
                                  <div class="form-floating">
                                    <input onChange={(e) =>
                                      handleServiceChange(e, index)
                                    } type="text" name="PassportNo" class="form-control" id="floatingInput" placeholder="Passport Number" />
                                    <label for="floatingInput">Passport Number</label>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                  <div class="form-floating">
                                    <input onChange={(e) =>
                                      handleServiceChange(e, index)
                                    } type="text" name="PassportExpiry" class="form-control" id="floatingInput" placeholder="Passport Expiry" />
                                    <label for="floatingInput">Passport Expiry</label>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : ("")
                          }
                        </div>
                      ))}


                    {/* child details here  */}

                    {childCount > 0 &&
                      Array.from({ length: childCount }, (_, index) => (
                        <div className="bookFlightPassInner">
                          <div className="bookAdultIndex">
                            <p>Child {index + 1}</p>
                          </div>
                          <div className="row g-3 mb-3">
                            <div className="col-lg-3 col-md-3">
                              <div class="form-floating">
                                <input onChange={(e) =>
                                  handleServiceChange(
                                    e,
                                    index + Number(adultCount)
                                  )
                                }
                                  type="text" name="FirstName" class="form-control" id="floatingInput" placeholder="First Name" />
                                <label for="floatingInput">First Name</label>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div class="form-floating">
                                <input onChange={(e) =>
                                  handleServiceChange(
                                    e,
                                    index + Number(adultCount)
                                  )
                                }
                                  type="text" name="LastName" class="form-control" id="floatingInput" placeholder="Last Name" />
                                <label for="floatingInput">Last Name</label>
                              </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                              <select
                                className="form-select h-100"
                                name="Gender"
                                onChange={(e) =>
                                  handleServiceChange(
                                    e,
                                    index + Number(adultCount)
                                  )
                                }
                              >
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                              </select>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div class="form-floating">
                                <input
                                  type="date"
                                  name="DateOfBirth"
                                  className="form-control"
                                  onChange={(e) =>
                                    handleServiceChange(
                                      e,
                                      index + Number(adultCount)
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          {/* passport details here */}
                          {isPassportRequired == true ? (
                            <>
                              <div className="bookAdultIndex">
                                <p>Passport Details</p>
                              </div>
                              <div className="row g-3 mb-3">

                                <div className="col-lg-3 col-md-3">
                                  <div class="form-floating">
                                    <input onChange={(e) =>
                                      handleServiceChange(
                                        e,
                                        index +
                                        Number(adultCount)
                                      )
                                    } type="text" name="PassportNo" class="form-control" id="floatingInput" placeholder="Passport Number" />
                                    <label for="floatingInput">Passport Number</label>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                  <div class="form-floating">
                                    <input onChange={(e) =>
                                      handleServiceChange(
                                        e,
                                        index +
                                        Number(adultCount)
                                      )
                                    } type="text" name="PassportExpiry" class="form-control" id="floatingInput" placeholder="Passport Expiry" />
                                    <label for="floatingInput">Passport Expiry</label>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : ("")
                          }
                        </div>
                      ))}


                    {/* child details here  */}



                    {/* infant details here  */}

                    {infantCount > 0 &&
                      Array.from({ length: infantCount }, (_, index) => (
                        <div className="bookFlightPassInner">
                          <div className="bookAdultIndex">
                            <p>Infact {index + 1}</p>
                          </div>
                          <div className="row g-3 mb-3">
                            <div className="col-lg-3 col-md-3">
                              <div class="form-floating">
                                <input onChange={(e) =>
                                  handleServiceChange(
                                    e,
                                    index +
                                    Number(adultCount) +
                                    Number(childCount)
                                  )
                                }
                                  type="text" name="FirstName" class="form-control" id="floatingInput" placeholder="First Name" />
                                <label for="floatingInput">First Name</label>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div class="form-floating">
                                <input onChange={(e) =>
                                  handleServiceChange(
                                    e,
                                    index +
                                    Number(adultCount) +
                                    Number(childCount)
                                  )
                                }
                                  type="text" name="LastName" class="form-control" id="floatingInput" placeholder="Last Name" />
                                <label for="floatingInput">Last Name</label>
                              </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                              <select
                                className="form-select h-100"
                                name="Gender"
                                onChange={(e) =>
                                  handleServiceChange(
                                    e,
                                    index +
                                    Number(adultCount) +
                                    Number(childCount)
                                  )
                                }
                              >
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                              </select>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div class="form-floating">
                                <input
                                  type="date"
                                  name="DateOfBirth"
                                  className="form-control"
                                  onChange={(e) =>
                                    handleServiceChange(
                                      e,
                                      index +
                                      Number(adultCount) +
                                      Number(childCount)
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          {/* passport details here */}
                          {isPassportRequired == true ? (
                            <>
                              <div className="bookAdultIndex">
                                <p>Passport Details</p>
                              </div>
                              <div className="row g-3 mb-3">

                                <div className="col-lg-3 col-md-3">
                                  <div class="form-floating">
                                    <input onChange={(e) =>
                                      handleServiceChange(
                                        e,
                                        index +
                                        Number(adultCount) +
                                        Number(childCount)
                                      )
                                    } type="text" name="PassportNo" class="form-control" id="floatingInput" placeholder="Passport Number" />
                                    <label for="floatingInput">Passport Number</label>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                  <div class="form-floating">
                                    <input onChange={(e) =>
                                      handleServiceChange(
                                        e,
                                        index +
                                        Number(adultCount) +
                                        Number(childCount)
                                      )
                                    } type="text" name="PassportExpiry" class="form-control" id="floatingInput" placeholder="Passport Expiry" />
                                    <label for="floatingInput">Passport Expiry</label>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : ("")
                          }
                        </div>
                      ))}


                    {/* infant details here  */}
                  </div>
                </div>



                <div className="col-lg-12 mt-3">
                  <div className="bookflightPassenger">
                    <form>
                      <div className="bookFlightPassInner">
                        <div className="bookAdultIndex">
                          <p>Your Booking Details will be sent to</p>
                        </div>
                        <div className="row g-3 mb-3">
                          <div className="col-lg-5 col-md-5">
                            <div className="form-floating">
                              <input value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }} type="email" name="sendEmail" className="form-control" id="floatingInput" placeholder="Email" />
                              <label for="floatingInput">Enter Email</label>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-5">
                            <div className="form-floating">
                              <input value={cNumber}
                                onChange={(e) => {
                                  setCnumber(e.target.value);
                                }} type="phone" name="sendNumber" className="form-control" id="floatingInput" placeholder="Mobile Number" />
                              <label for="floatingInput">Mobile Number</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>


                {/* trip security  */}

                <div className="col-lg-12">
                  <TripSecureComponent />
                </div>

                {/* trip security  */}

                <div className="col-lg-12 mt-4">
                  <button className="bookWrapperButton" type="submit" onClick={handleButtonClick}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <BookNowLeft />
            </div>
          </div>
        </div>
      )}
    </>
  );
}










// {/* <Box
//   style={{
//     backgroundColor: "white",
//     boxShadow: "0px 3px 6px #00000029",
//     borderRadius: "10px",
//   }}
//   p={2}
// >
//   {/* For adult passenger List */}
//   <Box
//     display="flex"
//     justifyContent="space-between"
//     alignItems="center"
//   >
//     <Typography>
//       <AccountCircleIcon /> Adult (18 yrs+)
//     </Typography>
//     <Typography className="Top_txt" py={3}>
//       <Chip
//         color="warning"
//         label="Please Fill adult details"
//         deleteIcon={<ErrorOutlineIcon />}
//         variant="outlined"
//       />
//     </Typography>
//   </Box>
//   {adultCount > 0 &&
//     Array.from({ length: adultCount }, (_, index) => (
//       <Box>
//         <div
//           mb={2}
//           key={index}
//           className="services"
//           py={1}
//         >
//           <Accordion
//             expanded={accordionExpanded === index}
//             onChange={handleAccordionChange(index)}
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography>Adult {index + 1}</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Box>
//                 <Grid container spacing={6}>
//                   <Grid
//                     item
//                     xs={12}
//                     sm={12}
//                     md={4}
//                     mb={2}
//                   >
//                     <Box>
//                       <div className="form_input">
//                         <label className="form_lable">
//                           Title*
//                         </label>
//                         <select
//                           name="Title"
//                           onChange={(e) =>
//                             handleServiceChange(e, index)
//                           }
//                         >
//                           <option value="Mr">Mr.</option>
//                           <option value="Mrs">
//                             Mrs.
//                           </option>
//                           <option value="Miss">
//                             Miss
//                           </option>
//                         </select>
//                       </div>
//                     </Box>
//                   </Grid>
//                   <Grid item xs={12} sm={6} md={4} mb={5}>
//                     <Box>
//                       <div className="hotel_form_input">
//                         <label className="form_label">
//                           First name*
//                         </label>
//                         <input
//                           className="hotel_input_select"
//                           name="FirstName"
//                           placeholder="Enter your name"
//                           onChange={(e) =>
//                             handleServiceChange(e, index)
//                           }
//                         />
//                       </div>
//                     </Box>
//                   </Grid>
//                   <Grid item xs={12} sm={6} md={4} mb={5}>
//                     <Box>
//                       <div className="hotel_form_input">
//                         <label className="form_label">
//                           Last name*
//                         </label>
//                         <input
//                           name="LastName"
//                           placeholder="Enter your last name"
//                           onChange={(e) =>
//                             handleServiceChange(e, index)
//                           }
//                         />
//                       </div>
//                     </Box>
//                   </Grid>
//                 </Grid>
//                 <Grid container spacing={6}>
//                   <Grid item xs={12} sm={6} md={4} mb={2}>
//                     <Box>
//                       <div className="hotel_form_input">
//                         <label
//                           hotel_form_input
//                           className="form_lable"
//                         >
//                           Date Of Birth*
//                         </label>
//                         <input
//                           type="date"
//                           name="DateOfBirth"
//                           className="hotel_input_select"
//                           onChange={(e) =>
//                             handleServiceChange(e, index)
//                           }
//                         />
//                       </div>
//                     </Box>
//                   </Grid>
//                 </Grid>
//                 {isPassportRequired == true ? (
//                   <Grid container spacing={6}>
//                     <Grid
//                       item
//                       xs={12}
//                       sm={6}
//                       md={4}
//                       mb={5}
//                     >
//                       <Box>
//                         <div className="hotel_form_input">
//                           <label
//                             hotel_form_input
//                             className="form_lable"
//                           >
//                             PassportNo*
//                           </label>
//                           <input
//                             type="text"
//                             name="PassportNo"
//                             className="hotel_input_select"
//                             onChange={(e) =>
//                               handleServiceChange(
//                                 e,
//                                 index
//                               )
//                             }
//                           />
//                         </div>
//                       </Box>
//                     </Grid>
//                     <Grid
//                       item
//                       xs={12}
//                       sm={12}
//                       md={4}
//                       py={1}
//                     >
//                       <Box>
//                         <div className="hotel_form_input">
//                           <label
//                             hotel_form_input
//                             className="form_lable"
//                           >
//                             PassportExpiry*
//                           </label>
//                           <input
//                             name="PassportExpiry"
//                             type="date"
//                             placeholder="Enter your passportexpiry"
//                             onChange={(e) =>
//                               handleServiceChange(
//                                 e,
//                                 index
//                               )
//                             }
//                           />
//                         </div>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 ) : (
//                   ""
//                 )}
//               </Box>
//             </AccordionDetails>
//           </Accordion>
//           {/* {hand leServiceAdd()} */}
//           {/* Form end */}
//         </div>
//       </Box>
//     ))}

//   {/* For Child passenger List */}

//   {childCount > 0 && (
//     <>
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//       >
//         <Typography>
//           <AccountCircleIcon /> Child (5 yrs+)
//         </Typography>
//         <Typography className="Top_txt" py={3}>
//           Child {passengerList.length} / {childCount}{" "}
//           <Typography variant="caption">added</Typography>
//         </Typography>
//       </Box>
//     </>
//   )}
//   {childCount > 0 &&
//     Array.from({ length: childCount }, (_, index) => (
//       <Box>
//         <div
//           mb={2}
//           key={index}
//           className="services"
//           py={1}
//         >
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography>Child {index + 1}</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Box>
//                 <Grid container spacing={3} my={1}>
//                   <Grid item xs={12} sm={12} md={4}>
//                     <Box>
//                       <div className="form_input">
//                         <label
//                           hotel_form_input
//                           className="form_lable"
//                         >
//                           First name*
//                         </label>
//                         <input
//                           name="FirstName"
//                           placeholder="Enter your name"
//                           onChange={(e) =>
//                             handleServiceChange(
//                               e,
//                               index + Number(adultCount)
//                             )
//                           }
//                         />
//                       </div>
//                     </Box>
//                   </Grid>
//                   <Grid
//                     item
//                     xs={12}
//                     sm={12}
//                     md={4}
//                     py={1}
//                   >
//                     <Box>
//                       <div className="form_input">
//                         <label
//                           hotel_form_input
//                           className="form_lable"
//                         >
//                           Last name*
//                         </label>
//                         <input
//                           name="LastName"
//                           placeholder="Enter your last name"
//                           onChange={(e) =>
//                             handleServiceChange(
//                               e,
//                               index + Number(adultCount)
//                             )
//                           }
//                         />
//                       </div>
//                     </Box>
//                   </Grid>
//                   {isPassportRequired == true ? (
//                     <Grid container spacing={6}>
//                       <Grid
//                         item
//                         xs={12}
//                         sm={6}
//                         md={4}
//                         mb={5}
//                       >
//                         <Box>
//                           <div className="hotel_form_input">
//                             <label
//                               hotel_form_input
//                               className="form_lable"
//                             >
//                               PassportNo*
//                             </label>
//                             <input
//                               type="text"
//                               name="PassportNo"
//                               className="hotel_input_select"
//                               onChange={(e) =>
//                                 handleServiceChange(
//                                   e,
//                                   index +
//                                   Number(adultCount)
//                                 )
//                               }
//                             />
//                           </div>
//                         </Box>
//                       </Grid>
//                       <Grid
//                         item
//                         xs={12}
//                         sm={12}
//                         md={4}
//                         py={1}
//                       >
//                         <Box>
//                           <div className="hotel_form_input">
//                             <label
//                               hotel_form_input
//                               className="form_lable"
//                             >
//                               PassportExpiry*
//                             </label>
//                             <input
//                               name="PassportExpiry"
//                               type="date"
//                               placeholder="Enter your passportexpiry"
//                               onChange={(e) =>
//                                 handleServiceChange(
//                                   e,
//                                   index +
//                                   Number(adultCount)
//                                 )
//                               }
//                             />
//                           </div>
//                         </Box>
//                       </Grid>
//                     </Grid>
//                   ) : (
//                     ""
//                   )}
//                 </Grid>
//                 <Box
//                   display="flex"
//                   justifyContent="space-between"
//                 >
//                   <Box>
//                     <div className="hotel_form_input">
//                       <label className="form_lable">
//                         Gender*
//                       </label>
//                       <select
//                         name="Gender"
//                         className="hotel_input_select"
//                         onChange={(e) =>
//                           handleServiceChange(
//                             e,
//                             index + Number(adultCount)
//                           )
//                         }
//                       >
//                         <option value="1">Female</option>
//                         <option value="2">Male</option>
//                       </select>
//                     </div>
//                   </Box>
//                   <Box>
//                     <div className="form_input">
//                       <label
//                         hotel_form_input
//                         className="form_lable"
//                       >
//                         Date Of Birth*
//                       </label>
//                       <input
//                         type="date"
//                         name="DateOfBirth"
//                         className="deaprture_input"
//                         onChange={(e) =>
//                           handleServiceChange(
//                             e,
//                             index + Number(adultCount)
//                           )
//                         }
//                       />
//                     </div>
//                   </Box>
//                 </Box>
//                 <Box
//                   pt={2}
//                   display="flex"
//                   justifyContent="space-around"
//                 ></Box>
//               </Box>
//             </AccordionDetails>
//           </Accordion>

//           {/* Form end */}
//         </div>
//       </Box>
//     ))}

//   {/* For Infant passenger List */}
//   {infantCount > 0 && (
//     <>
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//       >
//         <Typography>
//           <AccountCircleIcon /> Infant (15 days to 2 yrs)
//         </Typography>
//         <Typography className="Top_txt" py={3}>
//           Infant {passengerList.length} / {infantCount}{" "}
//           <Typography variant="caption">added</Typography>
//         </Typography>
//       </Box>
//     </>
//   )}
//   {infantCount > 0 &&
//     Array.from({ length: infantCount }, (_, index) => (
//       <Box>
//         <div
//           mb={2}
//           key={index}
//           className="services"
//           py={1}
//         >
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography>infant {index + 1}</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Box>
//                 <Grid container spacing={3} my={1}>
//                   <Grid item xs={12} sm={12} md={4}>
//                     <Box>
//                       <div className="form_input">
//                         <label
//                           hotel_form_input
//                           className="form_lable"
//                         >
//                           First name*
//                         </label>
//                         <input
//                           name="FirstName"
//                           placeholder="Enter your name"
//                           onChange={(e) =>
//                             handleServiceChange(
//                               e,
//                               index +
//                               Number(adultCount) +
//                               Number(childCount)
//                             )
//                           }
//                         />
//                       </div>
//                     </Box>
//                   </Grid>
//                   <Grid
//                     item
//                     xs={12}
//                     sm={12}
//                     md={4}
//                     py={1}
//                   >
//                     <Box>
//                       <div className="form_input">
//                         <label
//                           hotel_form_input
//                           className="form_lable"
//                         >
//                           Last name*
//                         </label>
//                         <input
//                           name="LastName"
//                           placeholder="Enter your last name"
//                           onChange={(e) =>
//                             handleServiceChange(
//                               e,
//                               index +
//                               Number(adultCount) +
//                               Number(childCount)
//                             )
//                           }
//                         />
//                       </div>
//                     </Box>
//                   </Grid>
//                 </Grid>
//                 <Box
//                   display="flex"
//                   justifyContent="space-between"
//                 >
//                   {/* Form start */}

//                   <Box>
//                     <div className="hotel_form_input">
//                       <label className="form_lable">
//                         Gender*
//                       </label>
//                       <select
//                         name="Gender"
//                         className="hotel_input_select"
//                         onChange={(e) =>
//                           handleServiceChange(
//                             e,
//                             index +
//                             Number(adultCount) +
//                             Number(childCount)
//                           )
//                         }
//                       >
//                         <option value="1">Female</option>
//                         <option value="2">Male</option>
//                       </select>
//                     </div>
//                   </Box>
//                   <Box>
//                     <div className="form_input">
//                       <label
//                         hotel_form_input
//                         className="form_lable"
//                       >
//                         Date Of Birth*
//                       </label>
//                       <input
//                         type="date"
//                         name="DateOfBirth"
//                         className="deaprture_input"
//                         onChange={(e) =>
//                           handleServiceChange(
//                             e,
//                             index +
//                             Number(adultCount) +
//                             Number(childCount)
//                           )
//                         }
//                       />
//                     </div>
//                   </Box>
//                 </Box>

//                 {isPassportRequired == true ? (
//                   <Grid container spacing={6}>
//                     <Grid
//                       item
//                       xs={12}
//                       sm={6}
//                       md={4}
//                       mb={5}
//                     >
//                       <Box>
//                         <div className="hotel_form_input">
//                           <label
//                             hotel_form_input
//                             className="form_lable"
//                           >
//                             PassportNo*
//                           </label>
//                           <input
//                             type="text"
//                             name="PassportNo"
//                             className="hotel_input_select"
//                             onChange={(e) =>
//                               handleServiceChange(
//                                 e,
//                                 index +
//                                 Number(adultCount) +
//                                 Number(childCount)
//                               )
//                             }
//                           />
//                         </div>
//                       </Box>
//                     </Grid>
//                     <Grid
//                       item
//                       xs={12}
//                       sm={12}
//                       md={4}
//                       py={1}
//                     >
//                       <Box>
//                         <div className="hotel_form_input">
//                           <label
//                             hotel_form_input
//                             className="form_lable"
//                           >
//                             PassportExpiry*
//                           </label>
//                           <input
//                             name="PassportExpiry"
//                             type="date"
//                             placeholder="Enter your passportexpiry"
//                             onChange={(e) =>
//                               handleServiceChange(
//                                 e,
//                                 index +
//                                 Number(adultCount) +
//                                 Number(childCount)
//                               )
//                             }
//                           />
//                         </div>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 ) : (
//                   ""
//                 )}
//               </Box>
//             </AccordionDetails>
//           </Accordion>

//           {/* Form end */}
//         </div>
//       </Box>
//     ))}
// </Box> */}


































// <div className="col-lg-12 ">
//   <div
//     className="leftsections"
//     display="flex"
//     justifyContent="center"
//     alignItems="center"
//     py={3}
//   >
//     <Box p={3}>
//       <Box
//         style={{
//           display: "flex",
//           marginTop: "12px",
//           marginBottom: "12px",
//         }}
//         px={2}
//       >
//         <Typography
//           className="list_item"
//           style={{ color: "black", marginY: "12px" }}
//         >
//           Traveller Details
//         </Typography>
//       </Box>

//       <form className="form">
//         <Box margin="10px 15px">
//           <Box style={{ marginTop: "10px" }} px={2}>
//             <Typography
//               className="list_item"
//               style={{
//                 color: "black",
//                 marginTop: "12px",
//               }}
//             >
//               Your Booking Details will be sent to
//             </Typography>
//             <Box
//               style={{
//                 display: "flex",
//                 marginTop: "15px",
//                 justifyContent: "left",
//               }}
//             >
//               <div style={{ display: "flex" }}>
//                 <Box mx={2}>
//                   <label htmlFor="email">EMAIL ADDRESS</label>
//                   <input
//                     type="email"
//                     placeholder="Email Address "
//                     name="sendEmail"
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                     }}
//                     mx={3}
//                     style={{
//                       height: "35px",
//                       width: "100%",

//                       boxShadow: "0px 3px 6px #00000029",
//                       borderRadius: "5px",

//                       border: "0.5px solid #BBB",

//                       padding: "12px 15px",
//                     }}
//                   />
//                 </Box>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   marginLeft: "200px",
//                 }}
//               >
//                 <Box mx={2}>
//                   <label htmlFor="email">MOBILE NUMBER</label>
//                   <input
//                     type="phone"
//                     placeholder="Mobile Number"
//                     name="sendNumber"
//                     value={cNumber}
//                     onChange={(e) => {
//                       setCnumber(e.target.value);
//                     }}
//                     mx={2}
//                     style={{
//                       height: "35px",
//                       width: "100%",
//                       boxShadow: "0px 3px 6px #00000029",
//                       borderRadius: "5px",
//                       border: "0.5px solid #BBB",
//                       padding: "12px 15px",
//                     }}
//                   />
//                 </Box>
//               </div>
//             </Box>
//             <Box
//               style={{
//                 marginTop: "10px",
//                 display: "flex",
//               }}
//             >
//               <Checkbox {...label} />
//               <Typography
//                 className="list_item1"
//                 display="flex"
//                 alignItems="center"
//               >
//                 I have a GST number{" "}
//                 <span sx={{ color: "#BBBBBB" }}>
//                   (optional)
//                 </span>
//               </Typography>
//             </Box>
//             <Box
//               style={{
//                 marginTop: "10px",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             ></Box>
//           </Box>
//         </Box>
//       </form>


//     </Box>
//   </div>
// </div>