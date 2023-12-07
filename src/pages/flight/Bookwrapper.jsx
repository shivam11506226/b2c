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
    if (reducerState?.flightBook?.flightBookDataGDS?.Error?.ErrorMessage=="") {
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

  return (
    <>
      {!reducerState?.flightFare?.flightQuoteData?.Results === true ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#CCEAF7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Typography mt={4}>Flight Data is Fetching</Typography>
          <img src={flightLoader} alt="" srcset="" />
        </div>
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
          <div className="row popular_content">
            <div className="col-12" sx={{ padding: "10px" }}>
              <div className="row" style={{ display: "flex" }}>
                <div className="col-md-8 ">
                  <div
                    className="leftsections"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    py={3}
                  >
                    <Typography className="top_heading">
                      Complete Your Booking
                    </Typography>
                    <Box p={3}>
                      {/* <AccordionSummary
                          aria-controls="panel1d-content"
                          id="panel1d-header"
                        >
                          <Typography className="para_head" mb={1}>
                            Ticket Details
                          </Typography>
                        </AccordionSummary> */}

                      <Box className="ticket_details" p={3}>
                        <Box
                          display="flex"
                          flexDirection={{ xs: "column", md: "row" }} // Column layout on small screens, row layout on medium and larger screens
                          justifyContent="flex-start" // Align items to the left on small screens, space-between on medium and larger screens
                          alignItems="center"
                          marginBottom="20px"
                        >
                          {/* Departure City Details */}
                          <Typography className="time_up1">
                            {
                              TicketDetails?.Segments[0][0]?.Origin?.Airport
                                ?.CityName
                            }
                          </Typography>
                          <FiArrowRight style={{ margin: "5px" }} />{" "}
                          {/* Replace with your arrow icon */}
                          {/* Arrival City Details */}
                          <Typography
                            className="time_up1"
                            textAlign={{ xs: "left", md: "right" }}
                          >
                            {
                              TicketDetails?.Segments[0][0]?.Destination
                                ?.Airport?.CityName
                            }
                          </Typography>
                          {/* Additional Text */}
                          <Typography
                            className="additional_text"
                            style={{ marginLeft: "auto" }}
                          >
                            Cancellation Fees Apply
                          </Typography>
                        </Box>

                        <Grid container className="deals">
                          <Grid md={3} className="deal_const">
                            {/* TicketDetails?.Airline?.AirlineName */}
                            {console.log(TicketDetails?.Segments[0][0]?.Origin)}
                            <Typography className="txt_m">
                              {
                                TicketDetails?.Segments[0][0]?.Airline
                                  ?.AirlineName
                              }
                            </Typography>
                            <Typography className="txt_small">
                              {
                                TicketDetails?.Segments[0][0]?.Airline
                                  ?.AirlineCode
                              }
                            </Typography>
                            <Typography className="txt_small1">
                              Economy
                            </Typography>
                          </Grid>
                          <Grid md={3} className="deal_const">
                            <Typography className="time_up">
                              {console.log(
                                "city",
                                TicketDetails?.Segments[0][0]?.Destination
                                  ?.Airport?.CityName
                              )}
                              <span>
                                {
                                  TicketDetails?.Segments[0][0]?.Origin?.Airport
                                    ?.CityName
                                }
                              </span>
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                color: "#707070",
                                marginTop: "10px",
                              }}
                            >
                              {time1} {" " + formattedDate1}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                color: "#071C2C",
                                lineHeight: "1",
                                font: " normal normal bold 16px/16px Quicksand !important",
                              }}
                            >
                              {
                                TicketDetails?.Segments[0][0]?.Origin?.Airport
                                  ?.AirportName
                              }
                            </Typography>
                          </Grid>
                          <Grid md={3} className="deal_const">
                            <Typography
                              sx={{
                                fontSize: "14px",
                                color: "#707070",
                                textAlign: "center",
                              }}
                            >
                              {duration_Time}
                            </Typography>
                            <Typography
                              textAlign="center"
                              style={{
                                color: "#39BBCE",
                                fontWeight: "bolder",
                              }}
                            >
                              .....
                              <ConnectingAirportsIcon />
                              .....
                            </Typography>
                            <Typography sx={{ textAlign: "center" }}>
                              Flight Duration
                            </Typography>
                          </Grid>
                          <Grid
                            md={3}
                            className="deal_const"
                            style={{ textAlign: "right" }}
                          >
                            <Typography
                              className="time_up"
                              style={{ textAlign: "right" }}
                            >
                              {
                                TicketDetails?.Segments[0][0]?.Destination
                                  ?.Airport?.CityName
                              }
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                color: "#707070",
                                marginTop: "10px",
                              }}
                            >
                              {time2} {formattedDate2}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "16px",

                                color: "#071C2C",
                                lineHeight: "1",
                                font: " normal normal bold 16px/16px Quicksand !important",
                              }}
                            >
                              {
                                TicketDetails?.Segments[0][0]?.Destination
                                  ?.Airport?.AirportName
                              }
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      {/* //// */}

                      <CancellationRefundPolicy />
                      <Box className="ticket_details" py={1}>
                        <Typography px={4} className="para_head">
                          Important Information
                        </Typography>
                        <Typography className="guidline">
                          <AddIcon
                            style={{
                              color: "red",
                              backgroundColor: "#f9f9f9",
                              borderRadius: "50%",
                            }}
                          />
                          COVID Guidelines and Vaccination Requirements
                        </Typography>
                        <ul>
                          <li className="list_item">
                            COVID test/vaccination rules: All travellers
                            entering Maharashtra must carry either a final COVID
                            vaccination certificate (both doses done) OR a
                            negative RT PCR report with a sample taken within 72
                            hours before arrival. RT-PCR test timeline starts
                            from the swab collection time. Negative RT-PCR test
                            report is not required for fully vaccinated
                            travellers to enter Maharashtra. Travellers might
                            not be allowed to board their flights if they are
                            not carrying a valid test report/vaccination
                            certificate. Thermal screening will be done for all
                            travellers. For Mumbai: In exceptional cases like
                            family distress, etc., testing may be allowed on
                            arrival at the airport.
                          </li>
                          <li className="list_item">
                            <b>Quarantine rules: </b>When arriving from a
                            domestic city/state: No quarantine or hand stamping
                            for asymptomatic travellers. Pre-registration or
                            e-Pass requirements: Download and update Aarogya
                          </li>
                          <li className="list_item">
                            Check the detailed list of travel guidelines issued
                            by Indian States and UTs here Know More
                          </li>

                          <li className="list_item">
                            If you have arrived on any international flight and
                            are taking a connecting domestic flight, please
                            check the 'Travelling to India' tab Here
                          </li>
                        </ul>
                        <Typography className="guidline">
                          <AddIcon
                            style={{
                              color: "red",
                              backgroundColor: "#f9f9f9",
                              borderRadius: "50%",
                            }}
                          />
                          Pre-Flight Checklist
                        </Typography>
                        <ul>
                          <li className="list_item">
                            Remember to web check-in before arriving at the
                            airport; carry a printed or soft copy of the
                            boarding pass. Wearing masks/face covers is no
                            longer mandatory. However, all travellers are
                            advised to wear them, in view of the threat posed by
                            COVID-19.{" "}
                          </li>
                          <li className="list_item">
                            {" "}
                            One hand bag up to 7 kgs and 55x35x25cm, is allowed
                            per traveller as cabin baggage. Certain personal
                            articles like a lady's purse, laptop bags, etc. can
                            be carried additionally.{" "}
                          </li>
                        </ul>
                        <p style={{ marginLeft: "24px" }} className="list_item">
                          <b>DISCLAIMER:</b> The information provided above is
                          only for ready reference and convenience of customers,
                          and may not be exhaustive. We strongly recommend that
                          you check the full text of the guidelines issued by
                          the State Governments and Airlines before travelling
                          to ensure smooth travel. We accept no liability in
                          this regard. In case you do not meet the required
                          guidelines, the airline or state authorities can stop
                          you from travelling.
                        </p>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          marginTop: "12px",
                          marginBottom: "12px",
                        }}
                        px={2}
                      >
                        <Typography
                          className="list_item"
                          style={{ color: "black", marginY: "12px" }}
                        >
                          Traveller Details
                        </Typography>
                      </Box>
                      <Box
                        style={{
                          backgroundColor: "white",
                          boxShadow: "0px 3px 6px #00000029",
                          borderRadius: "10px",
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
                        {adultCount > 0 &&
                          Array.from({ length: adultCount }, (_, index) => (
                            <Box>
                              <div
                                mb={2}
                                key={index}
                                className="services"
                                py={1}
                              >
                                <Accordion
                                  expanded={accordionExpanded === index}
                                  onChange={handleAccordionChange(index)}
                                >
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                  >
                                    <Typography>Adult {index + 1}</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Box>
                                      <Grid container spacing={6}>
                                        <Grid
                                          item
                                          xs={12}
                                          sm={12}
                                          md={4}
                                          mb={2}
                                        >
                                          <Box>
                                            <div className="form_input">
                                              <label className="form_lable">
                                                Title*
                                              </label>
                                              <select
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
                                          </Box>
                                        </Grid>
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
                                                onChange={(e) =>
                                                  handleServiceChange(e, index)
                                                }
                                              />
                                            </div>
                                          </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} mb={5}>
                                          <Box>
                                            <div className="hotel_form_input">
                                              <label className="form_label">
                                                Last name*
                                              </label>
                                              <input
                                                name="LastName"
                                                placeholder="Enter your last name"
                                                onChange={(e) =>
                                                  handleServiceChange(e, index)
                                                }
                                              />
                                            </div>
                                          </Box>
                                        </Grid>
                                      </Grid>
                                      <Grid container spacing={6}>
                                        <Grid item xs={12} sm={6} md={4} mb={2}>
                                          <Box>
                                            <div className="hotel_form_input">
                                              <label
                                                hotel_form_input
                                                className="form_lable"
                                              >
                                                Date Of Birth*
                                              </label>
                                              <input
                                                type="date"
                                                name="DateOfBirth"
                                                className="hotel_input_select"
                                                onChange={(e) =>
                                                  handleServiceChange(e, index)
                                                }
                                              />
                                            </div>
                                          </Box>
                                        </Grid>
                                      </Grid>
                                      {isPassportRequired == true ? (
                                        <Grid container spacing={6}>
                                          <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            mb={5}
                                          >
                                            <Box>
                                              <div className="hotel_form_input">
                                                <label
                                                  hotel_form_input
                                                  className="form_lable"
                                                >
                                                  PassportNo*
                                                </label>
                                                <input
                                                  type="text"
                                                  name="PassportNo"
                                                  className="hotel_input_select"
                                                  onChange={(e) =>
                                                    handleServiceChange(
                                                      e,
                                                      index
                                                    )
                                                  }
                                                />
                                              </div>
                                            </Box>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={4}
                                            py={1}
                                          >
                                            <Box>
                                              <div className="hotel_form_input">
                                                <label
                                                  hotel_form_input
                                                  className="form_lable"
                                                >
                                                  PassportExpiry*
                                                </label>
                                                <input
                                                  name="PassportExpiry"
                                                  type="date"
                                                  placeholder="Enter your passportexpiry"
                                                  onChange={(e) =>
                                                    handleServiceChange(
                                                      e,
                                                      index
                                                    )
                                                  }
                                                />
                                              </div>
                                            </Box>
                                          </Grid>
                                        </Grid>
                                      ) : (
                                        ""
                                      )}
                                    </Box>
                                  </AccordionDetails>
                                </Accordion>
                                {/* {hand leServiceAdd()} */}
                                {/* Form end */}
                              </div>
                            </Box>
                          ))}

                        {/* For Child passenger List */}

                        {childCount > 0 && (
                          <>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Typography>
                                <AccountCircleIcon /> Child (5 yrs+)
                              </Typography>
                              <Typography className="Top_txt" py={3}>
                                Child {passengerList.length} / {childCount}{" "}
                                <Typography variant="caption">added</Typography>
                              </Typography>
                            </Box>
                          </>
                        )}
                        {childCount > 0 &&
                          Array.from({ length: childCount }, (_, index) => (
                            <Box>
                              <div
                                mb={2}
                                key={index}
                                className="services"
                                py={1}
                              >
                                <Accordion>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                  >
                                    <Typography>Child {index + 1}</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Box>
                                      <Grid container spacing={3} my={1}>
                                        <Grid item xs={12} sm={12} md={4}>
                                          <Box>
                                            <div className="form_input">
                                              <label
                                                hotel_form_input
                                                className="form_lable"
                                              >
                                                First name*
                                              </label>
                                              <input
                                                name="FirstName"
                                                placeholder="Enter your name"
                                                onChange={(e) =>
                                                  handleServiceChange(
                                                    e,
                                                    index + Number(adultCount)
                                                  )
                                                }
                                              />
                                            </div>
                                          </Box>
                                        </Grid>
                                        <Grid
                                          item
                                          xs={12}
                                          sm={12}
                                          md={4}
                                          py={1}
                                        >
                                          <Box>
                                            <div className="form_input">
                                              <label
                                                hotel_form_input
                                                className="form_lable"
                                              >
                                                Last name*
                                              </label>
                                              <input
                                                name="LastName"
                                                placeholder="Enter your last name"
                                                onChange={(e) =>
                                                  handleServiceChange(
                                                    e,
                                                    index + Number(adultCount)
                                                  )
                                                }
                                              />
                                            </div>
                                          </Box>
                                        </Grid>
                                        {isPassportRequired == true ? (
                                          <Grid container spacing={6}>
                                            <Grid
                                              item
                                              xs={12}
                                              sm={6}
                                              md={4}
                                              mb={5}
                                            >
                                              <Box>
                                                <div className="hotel_form_input">
                                                  <label
                                                    hotel_form_input
                                                    className="form_lable"
                                                  >
                                                    PassportNo*
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="PassportNo"
                                                    className="hotel_input_select"
                                                    onChange={(e) =>
                                                      handleServiceChange(
                                                        e,
                                                        index +
                                                          Number(adultCount)
                                                      )
                                                    }
                                                  />
                                                </div>
                                              </Box>
                                            </Grid>
                                            <Grid
                                              item
                                              xs={12}
                                              sm={12}
                                              md={4}
                                              py={1}
                                            >
                                              <Box>
                                                <div className="hotel_form_input">
                                                  <label
                                                    hotel_form_input
                                                    className="form_lable"
                                                  >
                                                    PassportExpiry*
                                                  </label>
                                                  <input
                                                    name="PassportExpiry"
                                                    type="date"
                                                    placeholder="Enter your passportexpiry"
                                                    onChange={(e) =>
                                                      handleServiceChange(
                                                        e,
                                                        index +
                                                          Number(adultCount)
                                                      )
                                                    }
                                                  />
                                                </div>
                                              </Box>
                                            </Grid>
                                          </Grid>
                                        ) : (
                                          ""
                                        )}
                                      </Grid>
                                      <Box
                                        display="flex"
                                        justifyContent="space-between"
                                      >
                                        <Box>
                                          <div className="hotel_form_input">
                                            <label className="form_lable">
                                              Gender*
                                            </label>
                                            <select
                                              name="Gender"
                                              className="hotel_input_select"
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
                                        </Box>
                                        <Box>
                                          <div className="form_input">
                                            <label
                                              hotel_form_input
                                              className="form_lable"
                                            >
                                              Date Of Birth*
                                            </label>
                                            <input
                                              type="date"
                                              name="DateOfBirth"
                                              className="deaprture_input"
                                              onChange={(e) =>
                                                handleServiceChange(
                                                  e,
                                                  index + Number(adultCount)
                                                )
                                              }
                                            />
                                          </div>
                                        </Box>
                                      </Box>
                                      <Box
                                        pt={2}
                                        display="flex"
                                        justifyContent="space-around"
                                      ></Box>
                                    </Box>
                                  </AccordionDetails>
                                </Accordion>

                                {/* Form end */}
                              </div>
                            </Box>
                          ))}

                        {/* For Infant passenger List */}
                        {infantCount > 0 && (
                          <>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Typography>
                                <AccountCircleIcon /> Infant (15 days to 2 yrs)
                              </Typography>
                              <Typography className="Top_txt" py={3}>
                                Infant {passengerList.length} / {infantCount}{" "}
                                <Typography variant="caption">added</Typography>
                              </Typography>
                            </Box>
                          </>
                        )}
                        {infantCount > 0 &&
                          Array.from({ length: infantCount }, (_, index) => (
                            <Box>
                              <div
                                mb={2}
                                key={index}
                                className="services"
                                py={1}
                              >
                                <Accordion>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                  >
                                    <Typography>infant {index + 1}</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Box>
                                      <Grid container spacing={3} my={1}>
                                        <Grid item xs={12} sm={12} md={4}>
                                          <Box>
                                            <div className="form_input">
                                              <label
                                                hotel_form_input
                                                className="form_lable"
                                              >
                                                First name*
                                              </label>
                                              <input
                                                name="FirstName"
                                                placeholder="Enter your name"
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
                                          </Box>
                                        </Grid>
                                        <Grid
                                          item
                                          xs={12}
                                          sm={12}
                                          md={4}
                                          py={1}
                                        >
                                          <Box>
                                            <div className="form_input">
                                              <label
                                                hotel_form_input
                                                className="form_lable"
                                              >
                                                Last name*
                                              </label>
                                              <input
                                                name="LastName"
                                                placeholder="Enter your last name"
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
                                          </Box>
                                        </Grid>
                                      </Grid>
                                      <Box
                                        display="flex"
                                        justifyContent="space-between"
                                      >
                                        {/* Form start */}

                                        <Box>
                                          <div className="hotel_form_input">
                                            <label className="form_lable">
                                              Gender*
                                            </label>
                                            <select
                                              name="Gender"
                                              className="hotel_input_select"
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
                                        </Box>
                                        <Box>
                                          <div className="form_input">
                                            <label
                                              hotel_form_input
                                              className="form_lable"
                                            >
                                              Date Of Birth*
                                            </label>
                                            <input
                                              type="date"
                                              name="DateOfBirth"
                                              className="deaprture_input"
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
                                        </Box>
                                      </Box>

                                      {isPassportRequired == true ? (
                                        <Grid container spacing={6}>
                                          <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            mb={5}
                                          >
                                            <Box>
                                              <div className="hotel_form_input">
                                                <label
                                                  hotel_form_input
                                                  className="form_lable"
                                                >
                                                  PassportNo*
                                                </label>
                                                <input
                                                  type="text"
                                                  name="PassportNo"
                                                  className="hotel_input_select"
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
                                            </Box>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={4}
                                            py={1}
                                          >
                                            <Box>
                                              <div className="hotel_form_input">
                                                <label
                                                  hotel_form_input
                                                  className="form_lable"
                                                >
                                                  PassportExpiry*
                                                </label>
                                                <input
                                                  name="PassportExpiry"
                                                  type="date"
                                                  placeholder="Enter your passportexpiry"
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
                                            </Box>
                                          </Grid>
                                        </Grid>
                                      ) : (
                                        ""
                                      )}
                                    </Box>
                                  </AccordionDetails>
                                </Accordion>

                                {/* Form end */}
                              </div>
                            </Box>
                          ))}
                      </Box>
                      <form className="form">
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
                                    placeholder="Email Address "
                                    name="sendEmail"
                                    value={email}
                                    onChange={(e) => {
                                      setEmail(e.target.value);
                                    }}
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
                                    placeholder="Mobile Number"
                                    name="sendNumber"
                                    value={cNumber}
                                    onChange={(e) => {
                                      setCnumber(e.target.value);
                                    }}
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
                                <span sx={{ color: "#BBBBBB" }}>
                                  (optional)
                                </span>
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
                      <TripSecureComponent />
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
                    </Box>
                  </div>
                </div>
                <div className="col-md-4">
                  <BookNowLeft />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
