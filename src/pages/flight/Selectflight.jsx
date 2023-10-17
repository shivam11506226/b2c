import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Popover, Tooltip, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import Zoom from '@mui/material/Zoom';
import { useDispatch, useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import ReactPaginate from "react-paginate";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Flightdetailtab from "./Flightdetailtab";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// Location based Clear store

import { useLocation, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {
  quoteAction,
  ruleAction,
} from "../../Redux/FlightFareQuoteRule/actionFlightQuote";
import { resetOneWay } from "../../Redux/FlightSearch/oneWay";
import LoginForm from "../../components/Login";
// ../../../Redux/FlightFareQuoteRule/actionFlightQuote
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Items({ currentItems }) {
  // const dispatch = useDispatch();
  const location = useLocation();
  const dispatch = useDispatch();
  const [value, setValue] = useState(true);
  const reducerState = useSelector((state) => state);
  console.error("redux",reducerState);
  const [flightDetailsValue, setFlightDetailsValue] = React.useState("1");
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const adultCount = queryParams.get("adult");
  const childCount = queryParams.get("child");
  const infantCount = queryParams.get("infant");
  const checkLogin = reducerState?.logIn?.isLogin;
  const authenticUser = reducerState?.logIn?.loginData?.status
  console.error("currentItems",currentItems)
  
  // Login Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Need to payload
  // useEffect(() => {
  //   dispatch(ruleAction(payload));
  //   dispatch(quoteAction(payload));
  // }, []);

  const flightImg = reducerState?.oneWay?.oneWayData?.data.data?.Response?.Results?.[0]?.map((ele)=> ele?.AirlineCode)
  console.log("IMG DATA",flightImg)  
const clickme = () => {
   
    setValue(!value);
  };
  const results =
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;
  const items = [...Array(results[0].length).keys()];

  const handleIndexId = (ResultIndex) => {
  //  Check user is logged in or not while booking flight
    
      navigate(`booknow?adult=${adultCount}&child=${childCount}&infant=${infantCount} `);
      sessionStorage.setItem("ResultIndex", ResultIndex);
    
  };

  // Time formate
  const TicketDetails = reducerState?.flightFare?.flightQuoteData?.Results

  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    currentItems &&
    currentItems.map((item) => {
      const date = new Date(results[0][item]?.Segments[0][0]?.Duration);
      const time = date.toTimeString().slice(0, 5);

      //  Flight Details

      const dateString =  results[0][item]?.Segments[0][0]?.Origin?.DepTime;
     console.error(".....<<<<",dateString)
      const date1 = new Date(dateString);
      const time1 = date1.toLocaleTimeString()?.slice(0,4);
     
      const day1 = date1.getDate();
      const month1 = date1.toLocaleString("default", {
        month: "short",
      });
      const year1 = date1.getFullYear();
      const formattedDate1 = `${day1 + " "} ${month1 + ' '} ${year1 + ' '}`;
    
      const dateString1 =  results[0][item]?.Segments[0][0]?.Destination?.ArrTime;
              const date2 = new Date(dateString1);
              const time2 = `${date2.toLocaleTimeString()?.slice(0,4)}  `  ;
    
              const day2 = `${date2.getDate() }  ` ;
              const month2 = date2.toLocaleString("default", {
                month: "short",
              });
              const year2 = date2.getFullYear();
              const formattedDate2 = `${day2}  ${month2} ${year2}`;
    
              // Duration
              const totalMinutes = results[0][item]?.Segments[0][0]?.Duration;
              const durationHours = Math.floor(totalMinutes / 60);
              const durationMinutes = totalMinutes % 60;
              const duration_Time = `${durationHours}h ${durationMinutes} m`

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      const open = Boolean(anchorEl);
      const id = open ? "simple-popover" : undefined;

      const handleChange = (event, newValue) => {
        setFlightDetailsValue(newValue);
      };

      // Date
      

      return (
        <>
       
          <Box
            sx={{ flexGrow: 5, backgroundColor: "white", borderRadius: "10px" }}
            my={3}
          >
            <Accordion>
              <AccordionSummary>
                <Grid container p={2} display="flex" justifyContent="center">

                <Grid
                  sx={{
                    width: "auto",
                    height: "40px",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/FlightImages/${results[0][item]?.AirlineCode}.png`}
                    alt="flight"
                    style={{
                      width: "80px",
                      height: "40px",
                      backgroundColor: "white",
                    }}
                  />
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        {" "}
                        {results[0][item]?.Segments[0][0]?.Airline?.AirlineName}
                      </Typography>
                      <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                        {results[0][item]?.Segments[0][0]?.Airline?.AirlineCode}
                        {
                          results[0][item]?.Segments[0][0]?.Airline
                            ?.FlightNumber
                        }
                        {
                          results[0][item]?.IsLCC == false ? <span style={{background:'green',padding:'7px 12px',color:'white'}} >LCC</span> : ''
                        }

                      </Typography>
                </Grid>

                  <Grid
                    md={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box px={1}>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                      {time1} {' ' +formattedDate1}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#707070",
                        }}
                      >
                        {
                          results[0][item]?.Segments[0][0]?.Origin?.Airport
                            ?.CityName
                        }
                      </Typography>
                    </Box>
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
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#707070",
                        }}
                      >
                       {duration_Time}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          color: "#707070",
                        }}
                      >
                        1 Stop via Jaipur
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    md={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box px={1}>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                      {time2} {formattedDate2}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#707070",
                        }}
                      >
                        {
                          results[0][item]?.Segments[0][0]?.Destination?.Airport
                            ?.CityName
                        }
                      </Typography>
                    </Box>
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
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "#FF8900",
                        }}
                      >
                        ${results[0][item]?.Fare?.PublishedFare}
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
                      onClick={clickme}
                      sx={{
                        borderRadius: "30px",
                        background: "#4260D8 0% 0% no-repeat padding-box",
                      }}
                      endIcon={<SendIcon />}
                    >
                      View Price
                    </Button>
                  </Grid>
                  <Grid
                    md={12}
                    display="flex"
                    justifyContent="right"
                    alignItems="right"
                  >
                    <Typography
                      sx={{
                        color: "#0AFF2B",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Use Travvolt and get Rs 299 instant discount
                    </Typography>
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
                      onClick={handleClick}
                      style={{ fontSize: "14px", color: "#39BBCE" }}
                    >
                      View Flight Details
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
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

                    <form style={{width:'100%'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item>

                            <Typography px={2} className='main_heading'>Flexi Plus</Typography>
                            <Typography px={2} className='normal_head'>Fare offer by Airline</Typography>
                            <Box display='flex' justifyContent="space-around" my={2}>
                                <Button mx={2} className="propsi" variant="contained" startIcon={<LocalMallIcon style={{ color: "#FF951A" }} ></LocalMallIcon>}  >
                                 
                                    Cabin Bags  <Typography style={{ color: "#005CFF", marginLeft: '10px', fontSize: '10px' }}> {results[0][item]?.Segments[0]?.[0]?.CabinBaggage}</Typography>
                                </Button>
                                <Button mx={2} className="propsi" variant="contained" startIcon={<NextWeekIcon style={{ color: "#FF951A" }} ></NextWeekIcon>}  >
                                    Check-In Bags  <Typography style={{ color: "#005CFF", marginLeft: '10px', fontSize: '10px' }}>{results[0][item]?.Segments[0]?.[0]?.Baggage}</Typography>
                                </Button>
                                <Button mx={2} className="propsi" variant="contained" sx={{ backgroundColor: '#DAF2FC', color: 'black', borderRadius: '10px', fontSize: '10px' }} startIcon={<AttachMoneyIcon style={{ color: "#FF951A" }} ></AttachMoneyIcon>}  >
                                    
                                      {/* <Typography style={{ color: "#005CFF", marginLeft: '10px', fontSize: '10px' }}>Cancellation Fee Starting $300</Typography> */}
                                      <Tooltip TransitionComponent={Zoom} title={results[0][item]?.TicketAdvisory}>
                                      <Button>Cancellation</Button>
                                      </Tooltip>      
                                </Button>
                                <Typography px={5} className='price_'>${results[0][item]?.Fare?.OfferedFare}</Typography>
                            </Box>
                            <Box display='flex' justifyContent="left" mt={2}>
                                <Button mx={2} className="propsi" variant="contained" startIcon={<CalendarTodayIcon style={{ color: "#FF951A" }} ></CalendarTodayIcon>}  >
                                    Date Change<Typography style={{ color: "#005CFF", marginLeft: '10px', fontSize: '10px' }}>Cancellation Fee Starting $250</Typography>
                                </Button>
                                <Button mx={2} className="propsi" variant="contained" startIcon={<AirlineSeatReclineExtraIcon style={{ color: "#FF951A" }} ></AirlineSeatReclineExtraIcon>}  >
                                    Seat <Typography style={{ color: "#005CFF", marginLeft: '10px', fontSize: '10px' }}>{results[0][item]?.Segments[0]?.[0]?.NoOfSeatAvailable}</Typography>
                                </Button>


                            </Box>

                            <Box display='flex' justifyContent="space-between" mt={2}>

                                <Button mx={2} className="propsi" variant="contained" startIcon={<FastfoodIcon style={{ color: "#FF951A" }} ></FastfoodIcon>}  >
                                    Meal  <Typography style={{ color: "#005CFF", marginLeft: '10px', fontSize: '10px' }}>Get Complimentary Meals</Typography>
                                </Button>

                                <Button onClick={() => {
                   
                        handleIndexId(results[0][item]?.ResultIndex);
                      }}  variant='contained' className='booknow_btn'>Book Now</Button>

                            </Box>

                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </form>
                   
                  </Grid>
                  {/* <Grid
                    container
                    px={2}
                    py={1}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Viewsaver />
                  </Grid> */}
                  {/* <Grid
                    container
                    px={2}
                    py={1}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Viewsupper />
                  </Grid> */}
                  {/* <Grid
                    container
                    px={2}
                    py={1}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Viewtravvolt />
                  </Grid> */}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </>
      );
    })
  );
}

export default function BasicGrid() {
  const reducerState = useSelector((state) => state);
  const results = reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;

  // ============================================> paginations =================================//

  const items = [...Array(results[0].length).keys()];
  const itemsPerPage = 50;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
