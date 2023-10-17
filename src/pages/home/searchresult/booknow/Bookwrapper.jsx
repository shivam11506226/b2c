import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Chip from "@mui/material/Chip";

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
import email from "../../../../images/email.png";
import chat from "../../../../images/chat.png";
import SquareIcon from "@mui/icons-material/Square";
import flight from "../../../../images/flight.png";
import SendIcon from "@mui/icons-material/Send";
import { bookActionGDS } from "../../../../Redux/FlightBook/actionFlightBook";
import {
  quoteAction,
  resetFareData,
  ruleAction,
  // ../../../Redux/FlightFareQuoteRule/actionFlightQuote
} from "../../../../Redux/FlightFareQuoteRule/actionFlightQuote";

import "./booknow.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import BookNowLeft from "./BookNowLeft";
import flightLoader from "../../../../utility/flight_loader.gif";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginForm from "../../../../components/Login";
import SignUp from "../../../../components/Signup";
function valuetext(value) {
  return `${value}°C`;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
  console.log(
    "reducerState 👍",
    reducerState?.flightFare?.flightQuoteData?.Results
  );
  const TicketDetails = reducerState?.flightFare?.flightQuoteData?.Results;
  const fareValue = reducerState?.flightFare?.flightQuoteData?.Results;

  console.log("TicketDetails    ", reducerState);

  const ResultIndex = sessionStorage.getItem("ResultIndex");
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

  const [accordionExpanded, setAccordionExpanded] = React.useState(false);

  const handleAccordionChange = (index) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? index : false);
  };


  const [value, setValue] = React.useState("1");

  // Add form of passenger
  const passengerTemplate = 
  {
    "Title": "Mr",
    "FirstName": "Unit",
    "LastName": "test",
    "PaxType": 1,
    "DateOfBirth": "1987-12-06T00:00:00",
    "Gender": 1,
    "PassportNo": "",
    "PassportExpiry": "",
    "AddressLine1": "123, Test",
    "AddressLine2": "",
    "Fare": {
      "Currency": "INR",
      "BaseFare": 3171,
      "Tax": 1284,
      "YQTax": 0,
      "AdditionalTxnFeePub": 0,
      "AdditionalTxnFeeOfrd": 0,
      "OtherCharges": 116.96,
      "Discount": 0,
      "PublishedFare": 4581.96,
      "OfferedFare": 4355.03,
      "TdsOnCommission": 6.34,
      "TdsOnPLB": 9.14,
      "TdsOnIncentive": 6.22,
      "ServiceFee": 10
    },
    "City": "Gurgaon",
    "CountryCode": "IN",
    "CellCountryCode": "+92581-",
    "ContactNo": "1234567890",
    "Nationality": "IN",
    "Email": "harsh@tbtq.in",
    "IsLeadPax": true,
    "FFAirlineCode": null,
    "FFNumber": "",
    "GSTCompanyAddress": "",
    "GSTCompanyContactNumber": "",
    "GSTCompanyName": "",
    "GSTNumber": "",
    "GSTCompanyEmail": ""
  }
  const childPassenger = 
  {
    "Title": "Mr",
    "FirstName": "Raj",
    "LastName": "test",
    "PaxType": 2,
    "DateOfBirth": "",
    "Gender": 1,
    "PassportNo": "",
    "PassportExpiry": "",
    "AddressLine1": "123, Test",
    "AddressLine2": "",
    "Fare": {
      "Currency": "INR",
      "BaseFare": 3171,
      "Tax": 1284,
      "YQTax": 0,
      "AdditionalTxnFeePub": 0,
      "AdditionalTxnFeeOfrd": 0,
      "OtherCharges": 116.96,
      "Discount": 0,
      "PublishedFare": 4581.96,
      "OfferedFare": 4355.03,
      "TdsOnCommission": 6.34,
      "TdsOnPLB": 9.14,
      "TdsOnIncentive": 6.22,
      "ServiceFee": 10
    },
    "City": "Gurgaon",
    "CountryCode": "IN",
    "CellCountryCode": "+92581-",
    "ContactNo": "9875432345",
    "Nationality": "IN",
    "Email": "harsh@tbtq.in",
    "IsLeadPax": false,
    "FFAirlineCode": null,
    "FFNumber": "",
    "GSTCompanyAddress": "",
    "GSTCompanyContactNumber": "",
    "GSTCompanyName": "",
    "GSTNumber": "",
    "GSTCompanyEmail": ""
  }

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
  const allPassenger = [passengerLists,passengerChildLists]
  const [passengerData,setPassengerData] = useState(allPassenger.flat()) 
 
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...passengerData];
    list[index ][name] = value;
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
    list[index +  parseInt(adultCount) ][name] = value;
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

  const authenticUser = reducerState?.logIn?.loginData?.status
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegModalOpen, setRegIsModalOpen] = useState(false);

  // form submission
  function handleSubmit(event) {
    event.preventDefault();

    if(authenticUser == 200){
      const formData = new FormData(event.target);

      const payloadGDS = {
        ResultIndex: ResultIndex,
        Passengers: passengerData,
        EndUserIp: reducerState?.ip?.ipData,
        TokenId: reducerState?.ip?.tokenData,
        TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
      };
      console.log("payload passenger",payloadGDS.Passengers)
      dispatch(bookActionGDS(payloadGDS));
      // if (fareValue?.IsLCC == false) {
      //
      // }
    }else{
      setIsModalOpen(true);
    }
    
    
  }
 

  return (
    <>

      {!reducerState?.flightFare?.flightQuoteData?.Results == true ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#CCEAF7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection:'column',
            overflow:'hidden'
            
          }}
        >
          <Typography mt={4} >Flight Data is Fetching</Typography>
          <img src={flightLoader} alt="" srcset="" />
        </div>
      ) : (

        <div className="container ">
          {
          isModalOpen && <LoginForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        }
          {
          isRegModalOpen && <SignUp isRegModalOpen={isRegModalOpen} setRegIsModalOpen={setRegIsModalOpen} />
        }
          <div className="row popular_content">
            <div className="col-12">
              <div className="row" style={{ display: "flex" }}>
                <div className="col-md-9 ">
                  <div
                    className="leftsection"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    py={3}
                  >
                    <Typography className="top_heading">
                      Complete Your Booking
                    </Typography>
                    <Box p={3}>
                      <Accordion
                        sx={{
                          borderRadius: "20px",
                          marginBottom: "20px",
                          boxShadow: "2px 2px 8px gray",
                          backgroundColor: "white",
                        }}
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                      >
                        <AccordionSummary
                          aria-controls="panel1d-content"
                          id="panel1d-header"
                        >
                          <Typography className="para_head" mb={1}>
                            Ticket Details
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box className="ticket_details" p={3}>
                            <Typography className="para_head" mb={1}>
                              Ticket Details
                            </Typography>
                            <Grid container className="deals">
                              <Grid md={3} className="deal_const">
                                {/* TicketDetails?.Airline?.AirlineName */}
                                {console.log(
                                  TicketDetails?.Segments[0][0]?.Origin
                                )}
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
                                      TicketDetails?.Segments[0][0]?.Origin
                                        ?.Airport?.CityName
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
                                    color: "#FF8900",
                                    lineHeight: "1",
                                    font: " normal normal bold 16px/16px Quicksand !important",
                                  }}
                                >
                                  {
                                    TicketDetails?.Segments[0][0]?.Origin
                                      ?.Airport?.AirportName
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
                                    color: "#FF8900",
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
                                entering Maharashtra must carry either a final
                                COVID vaccination certificate (both doses done)
                                OR a negative RT PCR report with a sample taken
                                within 72 hours before arrival. RT-PCR test
                                timeline starts from the swab collection time.
                                Negative RT-PCR test report is not required for
                                fully vaccinated travellers to enter
                                Maharashtra. Travellers might not be allowed to
                                board their flights if they are not carrying a
                                valid test report/vaccination certificate.
                                Thermal screening will be done for all
                                travellers. For Mumbai: In exceptional cases
                                like family distress, etc., testing may be
                                allowed on arrival at the airport.
                              </li>
                              <li className="list_item">
                                <b>Quarantine rules: </b>When arriving from a
                                domestic city/state: No quarantine or hand
                                stamping for asymptomatic travellers.
                                Pre-registration or e-Pass requirements:
                                Download and update Aarogya
                              </li>
                              <li className="list_item">
                                Check the detailed list of travel guidelines
                                issued by Indian States and UTs here Know More
                              </li>

                              <li className="list_item">
                                If you have arrived on any international flight
                                and are taking a connecting domestic flight,
                                please check the 'Travelling to India' tab Here
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
                                advised to wear them, in view of the threat
                                posed by COVID-19.{" "}
                              </li>
                              <li className="list_item">
                                {" "}
                                One hand bag up to 7 kgs and 55x35x25cm, is
                                allowed per traveller as cabin baggage. Certain
                                personal articles like a lady's purse, laptop
                                bags, etc. can be carried additionally.{" "}
                              </li>
                            </ul>
                            <p
                              style={{ marginLeft: "24px" }}
                              className="list_item"
                            >
                              <b>DISCLAIMER:</b> The information provided above
                              is only for ready reference and convenience of
                              customers, and may not be exhaustive. We strongly
                              recommend that you check the full text of the
                              guidelines issued by the State Governments and
                              Airlines before travelling to ensure smooth
                              travel. We accept no liability in this regard. In
                              case you do not meet the required guidelines, the
                              airline or state authorities can stop you from
                              travelling.
                            </p>
                            <Divider py={5} />
                            <Box>
                              <Box
                                style={{ display: "flex", marginTop: "10px" }}
                                px={2}
                              >
                                <GppGoodIcon style={{ color: "gold" }} />
                                <div>
                                  <Typography
                                    className="list_item"
                                    style={{ color: "black" }}
                                  >
                                    Travel Insurance
                                  </Typography>
                                  <Typography
                                    style={{
                                      font: "normal normal bold  Quicksand !important",
                                      fontSize: "12px",
                                      color: "#252525",
                                    }}
                                  >
                                    30min settlement | Easy clain process
                                  </Typography>
                                </div>
                              </Box>
                              <Box
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                                px={4}
                                pt={1}
                              >
                                <Typography
                                  style={{
                                    font: "normal normal bold 12px Quicksand !important",
                                    color: "#252525",
                                  }}
                                >
                                  Delays Beyond 60mins
                                </Typography>
                                <Typography
                                  style={{
                                    font: "normal normal bold 12px Quicksand !important",
                                    color: "#FF951A",
                                  }}
                                >
                                  Flat ₹1000
                                </Typography>
                              </Box>
                              <Box
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                                px={4}
                                pt={1}
                              >
                                <Typography
                                  style={{
                                    font: "normal normal bold 12px Quicksand !important",
                                    color: "#252525",
                                  }}
                                >
                                  Airline Cancellation
                                </Typography>
                                <Typography
                                  style={{
                                    font: "normal normal bold 12px Quicksand !important",
                                    color: "#FF951A",
                                  }}
                                >
                                  Flat ₹2500
                                </Typography>
                              </Box>
                              <Box
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                                px={4}
                                pt={1}
                              >
                                <Typography
                                  style={{
                                    font: "normal normal bold 12px Quicksand !important",
                                    color: "#252525",
                                  }}
                                >
                                  Missed Flight
                                </Typography>
                                <Typography
                                  style={{
                                    font: "normal normal bold 12px Quicksand !important",
                                    color: "#FF951A",
                                  }}
                                >
                                  Flat ₹3500
                                </Typography>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#006FFF",
                                  font: "normal normal bold 12px/15px Quicksand",
                                  justifyContent: "center",
                                  display: "flex",
                                  marginTop: "10px",
                                  marginLeft: "10px",
                                }}
                              >
                                *Don't let a flight delay or cancellation add to
                                your worries. Get your trip Insured.
                              </Typography>
                              <Stack
                                spacing={2}
                                direction="row"
                                display="flex"
                                justifyContent="center"
                                py={1}
                              >
                                <Button variant="outlined">
                                  Insure for ₹249/ person
                                </Button>
                                <Button variant="outlined">
                                  I will take the risk
                                </Button>
                              </Stack>
                            </Box>
                            <Divider py={5} />

                            <form onSubmit={handleSubmit}>
                              <Box margin="10px 15px">
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
                                    Array.from(
                                      { length: adultCount },
                                      (_, index) => (
                                        <Box>
                                          <div
                                            mb={2}
                                            key={index}
                                            className="services"
                                            py={1}
                                          >
                                            <Accordion expanded={accordionExpanded === index} onChange={handleAccordionChange(index)}>
                                              <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                              >
                                                <Typography>
                                                  Adult {index + 1}
                                                </Typography>
                                              </AccordionSummary>
                                              <AccordionDetails>
                                                <Box>
                                                  <Grid
                                                    container
                                                    spacing={3}
                                                    my={1}
                                                  >
                                                    <Grid
                                                      item
                                                      xs={12}
                                                      sm={12}
                                                      md={4}
                                                    >
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
                                                            value={
                                                              passengerData.FirstName
                                                            }
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
                                                            value={
                                                              passengerData.LastName
                                                            }
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
                                                          value={
                                                            passengerData.Gender
                                                          }
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        >
                                                          <option value="1">
                                                            Female
                                                          </option>
                                                          <option value="2">
                                                            Male
                                                          </option>
                                                          <option value="3">
                                                            Transgender
                                                          </option>
                                                        </select>
                                                      </div>
                                                    </Box>
                                                    <Box>
                                                      <div className="form_input">
                                                        <label
                                                          hotel_form_input
                                                          className="form_lable"
                                                        >
                                                          Mobile*
                                                        </label>
                                                        <input
                                                          name="ContactNo"
                                                          type="text"
                                                          placeholder="Enter your number"
                                                          value={
                                                            passengerList?.ContactNo
                                                          }
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        />
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
                                                              index
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
                                                  >
                                                    <Box>
                                                      <div className="form_input">
                                                        <label
                                                          hotel_form_input
                                                          className="form_lable"
                                                        >
                                                          Email**
                                                        </label>
                                                        <input
                                                          name="Email"
                                                          type="email"
                                                          placeholder="Enter your email"
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    </Box>
                                                    <Box>
                                                      <div className="form_input">
                                                        <label
                                                          hotel_form_input
                                                          className="form_lable"
                                                        >
                                                          Address*
                                                        </label>
                                                        <input
                                                          name="AddressLine1"
                                                          type="text"
                                                          placeholder="Enter your Address"
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    </Box>
                                                    <Box>
                                                      <div className="form_input">
                                                        <label
                                                          hotel_form_input
                                                          className="form_lable"
                                                        >
                                                          City*
                                                        </label>
                                                        <input
                                                          name="AddressLine2"
                                                          type="text"
                                                          placeholder="Enter your City"
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    </Box>
                                                  </Box>

                                                  <Box display="flex">
                                                    <Box>
                                                      <div className="form_input">
                                                        <label className="form_lable">
                                                          Country*
                                                        </label>
                                                        <input
                                                          name="country"
                                                          type="text"
                                                          placeholder="Enter your Country"
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    </Box>
                                                  </Box>
                                                </Box>
                                              </AccordionDetails>
                                            </Accordion>
                                            {/* {hand leServiceAdd()} */}
                                            {/* Form end */}
                                          </div>
                                        </Box>
                                      )
                                    )}

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
                                          Child {passengerList.length} /{" "}
                                          {childCount}{" "}
                                          <Typography variant="caption">
                                            added
                                          </Typography>
                                        </Typography>
                                      </Box>
                                    </>
                                  )}
                                  {childCount > 0 &&
                                    Array.from(
                                      { length: childCount },
                                      (_, index) => (
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
                                                <Typography>
                                                  Child {index + 1}
                                                </Typography>
                                              </AccordionSummary>
                                              <AccordionDetails>
                                                <Box>
                                                  <Grid
                                                    container
                                                    spacing={3}
                                                    my={1}
                                                  >
                                                    <Grid
                                                      item
                                                      xs={12}
                                                      sm={12}
                                                      md={4}
                                                    >
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
                                                            value={
                                                              passengerList.FirstName
                                                            }
                                                            
                                                            onChange={(e) =>
                                                              handleChildChange(
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
                                                            value={
                                                              passengerList.LastName
                                                            }
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
                                                          value={
                                                            passengerData[index + 1]?.Gender
                                                          }
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        >
                                                          <option value="1">
                                                            Female
                                                          </option>
                                                          <option value="2">
                                                            Male
                                                          </option>
                                                          <option value="3">
                                                            Transgender
                                                          </option>
                                                        </select>
                                                      </div>
                                                    </Box>
                                                   
                                                  </Box>
                                                  <Box
                                                    pt={2}
                                                    display="flex"
                                                    justifyContent="space-around"
                                                  >
                                                   
                                                  </Box>

                                                 
                                                </Box>
                                              </AccordionDetails>
                                            </Accordion>

                                            {/* Form end */}
                                          </div>
                                        </Box>
                                      )
                                    )}

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
                                          Infant {passengerList.length} /{" "}
                                          {infantCount}{" "}
                                          <Typography variant="caption">
                                            added
                                          </Typography>
                                        </Typography>
                                      </Box>
                                    </>
                                  )}
                                  {infantCount > 0 &&
                                    Array.from(
                                      { length: infantCount },
                                      (_, index) => (
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
                                                <Typography>
                                                  Child {index + 1}
                                                </Typography>
                                              </AccordionSummary>
                                              <AccordionDetails>
                                                <Box>
                                                  <Grid
                                                    container
                                                    spacing={3}
                                                    my={1}
                                                  >
                                                    <Grid
                                                      item
                                                      xs={12}
                                                      sm={12}
                                                      md={4}
                                                    >
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
                                                            value={
                                                              passengerList.FirstName
                                                            }
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
                                                            value={
                                                              passengerList.LastName
                                                            }
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
                                                          value={
                                                            passengerList.Gender
                                                          }
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        >
                                                          <option value="1">
                                                            Female
                                                          </option>
                                                          <option value="2">
                                                            Male
                                                          </option>
                                                          <option value="3">
                                                            Transgender
                                                          </option>
                                                        </select>
                                                      </div>
                                                    </Box>
                                                    <Box>
                                                      <div className="form_input">
                                                        <label
                                                          hotel_form_input
                                                          className="form_lable"
                                                        >
                                                          Mobile*
                                                        </label>
                                                        <input
                                                          name="ContactNo"
                                                          type="text"
                                                          placeholder="Enter your number"
                                                          value={
                                                            passengerList?.ContactNo
                                                          }
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        />
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
                                                              index
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
                                                  >
                                                    <Box>
                                                      <div className="form_input">
                                                        <label
                                                          hotel_form_input
                                                          className="form_lable"
                                                        >
                                                          Email**
                                                        </label>
                                                        <input
                                                          name="Email"
                                                          type="email"
                                                          placeholder="Enter your email"
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    </Box>
                                                    <Box>
                                                      <div className="form_input">
                                                        <label
                                                          hotel_form_input
                                                          className="form_lable"
                                                        >
                                                          Address*
                                                        </label>
                                                        <input
                                                          name="AddressLine1"
                                                          type="text"
                                                          placeholder="Enter your Address"
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    </Box>
                                                    <Box>
                                                      <div className="form_input">
                                                        <label
                                                          hotel_form_input
                                                          className="form_lable"
                                                        >
                                                          City*
                                                        </label>
                                                        <input
                                                          name="AddressLine2"
                                                          type="text"
                                                          placeholder="Enter your City"
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    </Box>
                                                  </Box>

                                                  <Box display="flex">
                                                    <Box>
                                                      <div className="form_input">
                                                        <label className="form_lable">
                                                          Country*
                                                        </label>
                                                        <input
                                                          name="country"
                                                          type="text"
                                                          placeholder="Enter your Country"
                                                          onChange={(e) =>
                                                            handleServiceChange(
                                                              e,
                                                              index
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    </Box>
                                                  </Box>
                                                </Box>
                                              </AccordionDetails>
                                            </Accordion>

                                            {/* Form end */}
                                          </div>
                                        </Box>
                                      )
                                    )}
                                </Box>
                                <Box style={{ marginTop: "10px" }} px={2}>
                                  <Typography
                                    className="list_item"
                                    style={{
                                      color: "black",
                                      marginTop: "12px",
                                    }}
                                  >
                                    Booking Details will be sent to
                                  </Typography>
                                  <Box
                                    style={{
                                      display: "flex",
                                      marginTop: "15px",
                                      justifyContent: "left",
                                    }}
                                  >
                                    <div style={{ display: "flex" }}>
                                      <img src={email} />
                                      <Box mx={2}>
                                        <input
                                          type="email"
                                          placeholder="Add Email Id"
                                          name="email"
                                          mx={2}
                                          style={{
                                            height: "30px",
                                            width: "100%",
                                            border: "none",
                                            boxShadow: "0px 3px 6px #00000029",
                                            borderRadius: "5px",
                                          }}
                                        />
                                      </Box>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        marginLeft: "250px",
                                      }}
                                    >
                                      <img src={chat} />
                                      <Box mx={2}>
                                        <input
                                          type="email"
                                          placeholder="Add Mobile Number"
                                          name="mobile_number"
                                          mx={2}
                                          style={{
                                            height: "30px",
                                            width: "100%",
                                            border: "none",
                                            boxShadow: "0px 3px 6px #00000029",
                                            borderRadius: "5px",
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
                                      className="list_item"
                                      display="flex"
                                      alignItems="center"
                                    >
                                      I have a GST number
                                    </Typography>
                                  </Box>
                                  <Box
                                    style={{
                                      marginTop: "10px",
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Button
                                      type="submit"
                                      variant="contained"
                                      sx={{
                                        borderRadius: "20px",
                                        color: "white",
                                        backgroundColor: "#006FFF",
                                        fontSize: "18px",
                                      }}
                                    >
                                      Continue
                                    </Button>
                                  </Box>
                                </Box>
                              </Box>
                            </form>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        sx={{
                          borderRadius: "20px",
                          marginBottom: "20px",
                          boxShadow: "2px 2px 8px gray",
                          backgroundColor: "white",
                        }}
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                      >
                        <AccordionSummary
                          aria-controls="panel2d-content"
                          id="panel2d-header"
                        >
                          <Box>
                            <Typography className="para_head">
                              Seats & Meal
                            </Typography>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="container seat_section">
                            <Typography className="seat_Top_heading">
                              Complete Your Booking
                            </Typography>
                            <Box className="Inner_seat_section">
                              <Typography className="seat_heading" p={3}>
                                Ticket Details
                              </Typography>
                              <Grid container className="deals">
                                <Grid md={3} className="deal_const">
                                  <Typography className="txt_m">
                                    IndiGO
                                  </Typography>
                                  <Typography className="txt_small">
                                    6E 2431, 6E 909
                                  </Typography>
                                  <Typography className="txt_small1">
                                    Economy
                                  </Typography>
                                </Grid>
                                <Grid md={3} className="deal_const">
                                  <Typography className="time_up">
                                    DEL 17:25
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "16px",
                                      color: "#707070",
                                      marginTop: "10px",
                                    }}
                                  >
                                    Tue, 27 Dec, 2022
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
                                    09h 15m
                                  </Typography>
                                  <Typography
                                    textAlign="center"
                                    style={{ color: "#39BBCE" }}
                                  >
                                    .....
                                    <ConnectingAirportsIcon />
                                    ........
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
                                    BOM 19:25
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "16px",
                                      color: "#707070",
                                      marginTop: "10px",
                                    }}
                                  >
                                    Tue, 27 Dec, 2022
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                spacing={2}
                                container
                                sx={{
                                  marginTop: "20px",
                                  display: "flex",
                                  alignContent: "start",
                                  textAlign: "center",
                                  paddingY: "15px",
                                }}
                                className="booknowp"
                              >
                                <Grid md={3} my={10}>
                                  <div
                                    py={5}
                                    style={{
                                      boxShadow: "0px 0px 6px gray",
                                      paddingTop: "10px",
                                      paddingBottom: "10px",
                                      borderRadius: "10px",
                                      padding: "5px",
                                      backgroundColor: "#F5F5F5",
                                    }}
                                  >
                                    <Box
                                      display="flex"
                                      justifyContent="start"
                                      alignItems="center"
                                      color="#F5F5F5"
                                      px={1}
                                      my={2}
                                    >
                                      <Checkbox
                                        {...label}
                                        icon={
                                          <SquareIcon
                                            style={{
                                              color: "#fff",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                        checkedIcon={
                                          <SquareIcon
                                            style={{
                                              color: "#FF8901",
                                              border: "none",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                      />
                                      <Box mx={1}>
                                        <Typography
                                          fontSize="14px"
                                          letter-spacing="0px"
                                          color=" #252525"
                                        >
                                          Free
                                        </Typography>
                                      </Box>
                                    </Box>
                                    <Box
                                      display="flex"
                                      justifyContent="start"
                                      alignItems="center"
                                      color="#F5F5F5"
                                      px={1}
                                      my={2}
                                    >
                                      <Checkbox
                                        {...label}
                                        icon={
                                          <SquareIcon
                                            style={{
                                              color: "#fff",
                                              boxShadow: "0px 1px 5px grey",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                        checkedIcon={
                                          <SquareIcon
                                            style={{
                                              color: "#FF8901",
                                              boxShadow: "0px 1px 5px grey",
                                              border: "none",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                      />
                                      <Box mx={1}>
                                        <Typography
                                          fontSize="14px"
                                          letter-spacing="0px"
                                          color=" #252525"
                                        >
                                          ₹200 - ₹350
                                        </Typography>
                                      </Box>
                                    </Box>
                                    <Box
                                      display="flex"
                                      justifyContent="start"
                                      alignItems="center"
                                      color="#F5F5F5"
                                      px={1}
                                      my={2}
                                    >
                                      <Checkbox
                                        {...label}
                                        icon={
                                          <SquareIcon
                                            style={{
                                              color: "#fff",
                                              boxShadow: "0px 1px 5px grey",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                        checkedIcon={
                                          <SquareIcon
                                            style={{
                                              color: "#FF8901",
                                              boxShadow: "0px 1px 5px grey",
                                              border: "none",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                      />
                                      <Box mx={1}>
                                        <Typography
                                          fontSize="14px"
                                          letter-spacing="0px"
                                          color=" #252525"
                                        >
                                          ₹1200 - ₹1350
                                        </Typography>
                                      </Box>
                                    </Box>
                                    <Box
                                      display="flex"
                                      justifyContent="start"
                                      alignItems="center"
                                      color="#F5F5F5"
                                      px={1}
                                      my={2}
                                    >
                                      <Checkbox
                                        {...label}
                                        icon={
                                          <SquareIcon
                                            style={{
                                              color: "#fff",
                                              boxShadow: "0px 1px 5px grey",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                        checkedIcon={
                                          <SquareIcon
                                            style={{
                                              color: "#FF8901",
                                              boxShadow: "0px 1px 5px grey",
                                              border: "none",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                      />
                                      <Box mx={1}>
                                        <Typography
                                          fontSize="14px"
                                          letter-spacing="0px"
                                          color=" #252525"
                                        >
                                          Exit Row Seats
                                        </Typography>
                                      </Box>
                                    </Box>
                                    <Box
                                      display="flex"
                                      justifyContent="start"
                                      alignItems="center"
                                      color="#F5F5F5"
                                      px={1}
                                      my={2}
                                    >
                                      <Checkbox
                                        {...label}
                                        icon={
                                          <SquareIcon
                                            style={{
                                              color: "#fff",
                                              boxShadow: "0px 1px 5px grey",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                        checkedIcon={
                                          <SquareIcon
                                            style={{
                                              color: "#FF8901",
                                              boxShadow: "0px 1px 5px grey",
                                              border: "none",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                      />
                                      <Box mx={1}>
                                        <Typography
                                          fontSize="14px"
                                          letter-spacing="0px"
                                          color=" #252525"
                                        >
                                          Non Reclining
                                        </Typography>
                                      </Box>
                                    </Box>
                                    <Box
                                      display="flex"
                                      justifyContent="start"
                                      alignItems="center"
                                      color="#F5F5F5"
                                      px={1}
                                      my={2}
                                    >
                                      <Checkbox
                                        {...label}
                                        icon={
                                          <SquareIcon
                                            style={{
                                              color: "#fff",
                                              boxShadow: "0px 1px 5px grey",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                        checkedIcon={
                                          <SquareIcon
                                            style={{
                                              color: "#FF8901",
                                              boxShadow: "0px 1px 5px grey",
                                              border: "none",
                                              fontSize: "17px",
                                            }}
                                          />
                                        }
                                      />
                                      <Box mx={1}>
                                        <Typography
                                          fontSize="14px"
                                          color=" #252525"
                                        >
                                          Occupied
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </div>
                                </Grid>

                                <Grid md={6}>
                                  <Box overflow="scroll">
                                    <img src={flight} className="bgimg" />
                                    <Grid
                                      container
                                      className="sheetbook"
                                      px={7}
                                    >
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          fontSize="14px"
                                          paddingRight="20px"
                                          paddingLeft="25px"
                                          justifyContent="space-between"
                                        >
                                          <Box>A</Box>
                                          <Box>B</Box>
                                          <Box>C</Box>
                                        </Box>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            1
                                          </Typography>

                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="space-around"
                                          fontSize="14px"
                                          paddingRight="25px"
                                          paddingLeft="10px"
                                        >
                                          <Box>D</Box>
                                          <Box>E</Box>
                                          <Box>F</Box>
                                        </Box>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            1
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            2
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            2
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            3
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            3
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            4
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            4
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            5
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            5
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            6
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            6
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            7
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            7
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            8
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            8
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            9
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            9
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            10
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            10
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            11
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            11
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            12
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            12
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            13
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            13
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            14
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            14
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            15
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            15
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            16
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            16
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            17
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            17
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            18
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            18
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            19
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            19
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            20
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            20
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            21
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            21
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            22
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            22
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            23
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            23
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            24
                                          </Typography>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      <Grid md={6}>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Box className="cart">
                                            <Checkbox
                                              {...label}
                                              icon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#fff",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                              checkedIcon={
                                                <SquareIcon
                                                  style={{
                                                    color: "#FF8901",
                                                    boxShadow:
                                                      "0px 1px 5px grey",
                                                    border: "none",
                                                    fontSize: "17px",
                                                  }}
                                                />
                                              }
                                            />
                                          </Box>
                                          <Typography
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "5px",
                                            }}
                                          >
                                            24
                                          </Typography>
                                        </Box>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>

                                <Grid md={3} my={10}>
                                  <form action="/payment">
                                    <Box my={2}>
                                      <Button
                                        variant="contained"
                                        my={1}
                                        type="submit"
                                      >
                                        Proceed to Pay
                                      </Button>
                                    </Box>
                                  </form>
                                </Grid>
                              </Grid>
                            </Box>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </div>
                </div>
                <div className="col-md-3">
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
