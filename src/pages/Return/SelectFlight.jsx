import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Popover, Tooltip, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
import { useDispatch, useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import ReactPaginate from "react-paginate";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Flightdetailtab from "../flight/Flightdetailtab";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Paper from "@mui/material/Paper";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import {
  quoteAction,
  ruleAction,
} from "../../Redux/FlightFareQuoteRule/actionFlightQuote";
import { resetOneWay } from "../../Redux/FlightSearch/oneWay";
import LoginForm from "../../components/Login";
import { useNavigate } from "react-router-dom";
function SelectFlight() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // ... (Other state variables and logic)
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const handleButtonClick = () => {
    // Redirect to the "/returnResult" path
    navigate("/completebooking");
  };
  return (
    <>
      <Box
        sx={{ flexGrow: 5, backgroundColor: "white", borderRadius: "10px" }}
        my={3}
      >
        <Accordion>
          <AccordionSummary sx={{ padding: "0" }}>
            <Grid container p={1} display="flex" justifyContent="center">
              <Grid
                container
                item
                md={2}
                alignItems="center"
                sx={{
                  width: "auto",
                  height: "40px",
                  backgroundColor: "white",
                }}
              >
                <Grid item>
                  {/* <img
                        src={`${process.env.PUBLIC_URL}/FlightImages/${results[0][item]?.AirlineCode}.png`}
                        alt="flight"
                        style={{
                          width: "60px",
                          height: "40px",
                          backgroundColor: "white",
                        }}
                      /> */}
                </Grid>
                <Grid item sx={{ marginLeft: 1 }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                    {/* {results[0][item]?.Segments[0][0]?.Airline?.AirlineName} */}
                  </Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                    {/* {results[0][item]?.Segments[0][0]?.Airline?.AirlineCode}
                        {
                          results[0][item]?.Segments[0][0]?.Airline
                            ?.FlightNumber
                        }
                        {results[0][item]?.IsLCC === false ? (
                          <span style={{ background: "green", color: "white" }}>
                            LCC
                          </span>
                        ) : (
                          ""
                        )} */}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item sx={{ marginLeft: 1 }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  {/* {time1} {" " + formattedDate1} */}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#707070",
                    textAlign: "center",
                  }}
                >
                  {/* {
                        results[0][item]?.Segments[0][0]?.Origin?.Airport
                          ?.CityName
                      } */}
                </Typography>
              </Grid>
              <Grid item sx={{ marginLeft: 3 }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#707070",
                    textAlign: "center",
                  }}
                >
                  {/* {duration_Time} */}
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    backgroundColor: "green",
                    marginX: "8px", // Adjust the margin as needed
                    height: "3px", // Adjust the height as needed
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "#707070",
                  }}
                >
                  1 Stop via Jaipur
                </Typography>
              </Grid>

              <Grid
                md={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item sx={{ marginLeft: 1 }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                    {/* {time2} {formattedDate2} */}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#707070",
                      textAlign: "center",
                    }}
                  >
                    {/* {
                          results[0][item]?.Segments[0][0]?.Destination?.Airport
                            ?.CityName
                        } */}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                md={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box px={1}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {/* ₹{results[0][item]?.Fare?.PublishedFare} */}
                  </Typography>
                </Box>
              </Grid>

              <Grid
                md={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  //   onClick={clickme}
                  sx={{
                    borderRadius: "30px",
                    background: "#E73C33 no-repeat padding-box",
                    fontSize: "16px", // Adjust the font size as needed
                    padding: "7px 6px", // Adjust the padding as needed
                  }}
                  endIcon={<SendIcon />}
                >
                  View Price
                </Button>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container display="flex" justifyContent="space-between">
              {/* <Viewflightdetails /> */}

              {/* View Flight Details */}
              <div>
                <Button
                  aria-describedby={id}
                  //   onClick={handleClick}
                  style={{
                    fontSize: "14px",
                    color: "#21325D",
                    fontWeight: "bold",
                  }}
                >
                  View Flight Details
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  //   onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <div>
                    {/* Flight Details tab */}
                    <Flightdetailtab />
                  </div>
                </Popover>
              </div>
            </Grid>
            <Box className={(value) => (value ? "active" : "inactive")}>
              <Grid
                container
                px={2}
                py={1}
                display="flex"
                justifyContent="space-between"
              >
                {/* View Price Btn */}
                {/* <Viewpricebtn /> */}

                <form style={{ width: "100%" }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Item>
                          <Box display="flex" my={2}>
                            <Typography px={2} className="main_heading">
                              Flexi Plus
                            </Typography>
                            <Typography px={2} className="normal_head">
                              Fare offer by Airline
                            </Typography>
                          </Box>

                          <Box display="flex" my={2}>
                            <Button
                              mx={2}
                              className="propsi"
                              variant="contained"
                              startIcon={
                                <LocalMallIcon
                                  style={{ color: "white" }}
                                ></LocalMallIcon>
                              }
                            >
                              Cabin Bags{" "}
                              <Typography
                                style={{
                                  color: "white",
                                  marginLeft: "10px",
                                  fontSize: "10px",
                                }}
                              >
                                {" "}
                                {/* {
                                      results[0][item]?.Segments[0]?.[0]
                                        ?.CabinBaggage
                                    } */}
                              </Typography>
                            </Button>
                            <Button
                              mx={2}
                              className="propsi"
                              variant="contained"
                              startIcon={
                                <NextWeekIcon
                                  style={{ color: "white" }}
                                ></NextWeekIcon>
                              }
                            >
                              Check-In Bags{" "}
                              <Typography
                                style={{
                                  color: "white",
                                  marginLeft: "10px",
                                  fontSize: "10px",
                                }}
                              >
                                {/* {
                                      results[0][item]?.Segments[0]?.[0]
                                        ?.Baggage
                                    } */}
                              </Typography>
                            </Button>
                            <Button
                              mx={2}
                              className="propsi"
                              variant="contained"
                              sx={{
                                backgroundColor: "#DAF2FC",
                                color: "white",
                                borderRadius: "10px",
                                fontSize: "10px",
                              }}
                              startIcon={
                                <AttachMoneyIcon
                                  style={{ color: "white" }}
                                ></AttachMoneyIcon>
                              }
                            >
                              {/* <Typography style={{ color: "white", marginLeft: '10px', fontSize: '10px' }}>Cancellation Fee Starting $300</Typography> */}
                              <Tooltip
                                TransitionComponent={Zoom}
                                // title={results[0][item]?.TicketAdvisory}
                              >
                                <Button sx={{ color: "white" }}>
                                  Cancellation
                                </Button>
                              </Tooltip>
                            </Button>
                            {/* <Typography px={5} className='price_'>${results[0][item]?.Fare?.OfferedFare}</Typography> */}
                          </Box>
                          <Box display="flex" my={2}>
                            <Button
                              mx={2}
                              className="propsi"
                              variant="contained"
                              startIcon={
                                <CalendarTodayIcon
                                  style={{ color: "white" }}
                                ></CalendarTodayIcon>
                              }
                            >
                              Date Change
                              <Typography
                                style={{
                                  color: "white",
                                  marginLeft: "10px",
                                  fontSize: "10px",
                                }}
                              >
                                Cancellation Fee Starting $250
                              </Typography>
                            </Button>
                            <Typography px={2} className="price_">
                              {/* ${results[0][item]?.Fare?.OfferedFare} */}
                            </Typography>
                            {/* <Button mx={2} className="propsi" variant="contained" startIcon={<AirlineSeatReclineExtraIcon style={{ color: "#FF951A" }} ></AirlineSeatReclineExtraIcon>}  >
                                  Seat <Typography style={{ color: "white", marginLeft: '10px', fontSize: '10px' }}>{results[0][item]?.Segments[0]?.[0]?.NoOfSeatAvailable}</Typography>
                                </Button> */}
                            <Button
                              //   onClick={() => {
                              //     handleIndexId(
                              //       results[0][item]?.ResultIndex
                              //     );
                              //   }}
                              onClick={handleButtonClick}
                              className="booknow_btn"
                            >
                              Book Now
                            </Button>
                          </Box>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </form>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}

export default SelectFlight;
