import * as React from 'react';
import './holidaypackagetab.css';
// hotel tabs

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import { Grid, Typography, Divider } from '@mui/material';
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";

import StarIcon from '@mui/icons-material/Star';
import FastfoodIcon from "@mui/icons-material/Fastfood";
import information from "../../../images/information.png";
import mainImage from "../../../images/mainImage.png";
// import travellers3 from "../../../images/img/travellers3.jpg";
import building from "../../../images/icons/building.png";
import night from '../../../images/icons/night.png';
import beds from '../../../images/icons/beds.png';
import unitednations from '../../../images/icons/unitednations.png';
import addgroup from '../../../images/icons/addgroup.png';
import review from '../../../images/icons/review.png';
import { useNavigate } from 'react-router-dom';
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import hotell from "../../../images/icons/hotell.png";
import breakfast from "../../../images/icons/breakfast.png";
import checkout from "../../../images/icons/checkout.png";
import CloseIcon from "@mui/icons-material/Close";



// bootstrap
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from 'react-redux';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const HolidayPackageTab = (props) => {
    const reducerState = useSelector((state) => state);
    const onePackage =
    reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data;
  console.log("One Package", onePackage);
  
  const detailed_itinerary = reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data?.detailed_ltinerary
  console.error("One detailed_ltinerary", detailed_itinerary);
    const settings = {
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    return (
        <section>
            <div className="container homeform_container">
                <p className="header_row">
                    <h5>{props.header}</h5>
                </p>
                <div className="row content_row" >

                    <div className="col-12" mx={5}>
                        <Box sx={{ width: '100%', typography: 'body1' }} >
                            <TabContext value={value} centered>
                                <Box pt={5}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered >
                                        <Tab label="ITINERARY" value="1" className="hello" />
                                        <Tab label="Policies" value="2" />
                                        <Tab label="Summary " value="3" />
                                    </TabList>
                                </Box>


                                <TabPanel value="1" >
                                    <Box py={2} sx={{ backgroundColor: "white", borderRadius: "20px", }} >

                                        <Grid container spacing={3} py={2}>
                                            <Grid item xs={12} lg={9}>
                                                <Box>
                                                    <Typography
                                                        sx={{ color: "#006FFF", fontSize: "16px", fontWeight: "bold" }}
                                                        py={2}
                                                    >
                                                        Overview
                                                    </Typography>
                                                    <Typography
                                                        sx={{ color: "#666666", fontSize: "12px", fontWeight: "bold" }}
                                                    >
                                                    {onePackage?.overview}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Box>
                                                        <Typography
                                                            sx={{
                                                                color: "#006FFF",
                                                                fontSize: "16px",
                                                                fontWeight: "bold",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                textDecoration: "underline",
                                                            }}
                                                        >
                                                            Day Plan
                                                        </Typography>
                                                      
                                                      {/* Days detailed_itinerary */}
                            
                                                         {
                                                            detailed_itinerary?.map((ele,key)=>{
                                                                console.error(key,ele)
                                                            return(
                                                                <>
                                                                <Typography sx={{fontWeight:'600',color:'darkorange'}} my={2}>
                                                                    {`Days ${key +1}`}
                                                                    </Typography> 
                                                                 <div
                                                              
                                                                 key={key}
                                                            dangerouslySetInnerHTML={{
                                                                __html: ele
                                                            }}
                                                            ></div>
                                                                </>
                                                            )
                                                         } )
                                                         }

                                                    </Box>
                                                   
                                                   
                                                    <form action="holidaypassengerdetail">
                                                        <Box textAlign="center" mt={3}>
                                                            <Button
                                                                variant="contained"
                                                                textAlign="center"
                                                                display="flex"
                                                                justifyContent="center"
                                                                type="submit"
                                                            >
                                                                Book Now
                                                            </Button>
                                                        </Box>
                                                    </form>
                                                </Box>
                                            </Grid>
                                            <Grid item sm={12} xs={12} lg={3}>
                                                <Box className="border_left">
                                                    <Box mt={1}>
                                                        <Typography className="Holiday">
                                                            Your Holiday Package
                                                        </Typography>
                                                        <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={building} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                New Delhi To Kerela
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={night} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                4 Night(s) (05 Feb-08 Feb, 2023)
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={beds} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                1 Room(s)
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={unitednations} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                Indian
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={addgroup} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                2 Adult(s)
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={review} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                5 Star or more
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
                                                    <Box>
                                                        <Typography className="package_text">₹{onePackage?.pakage_amount?.amount+750}</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography className="package_text_color"> ₹{onePackage?.pakage_amount?.amount}</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography className="package_person">per person* (*Excluding applicable taxes)</Typography>
                                                    </Box>
                                                    <Box mt={1} display="flex" justifyContent="center">
                                                        <Button type='submit' onClick={() => navigate('/HolidayPassengerDetail')} className="btn_proceed" variant="contained">Proceed To Book Online</Button>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                </TabPanel>
                                <TabPanel value="2" >
                                    <Box py={2} sx={{ backgroundColor: "white", borderRadius: "20px", }} >
                                        <Grid container spacing={3}>
                                            <Grid item sm={12} xs={12} lg={9}>
                                                <Box>
                                                    <Typography className="CANCELLATION">
                                                        CANCELLATION & DATE CHANGE
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography className="content">
                                                        How much will it cost to cancel or change the start date after
                                                        making a booking?
                                                    </Typography>
                                                </Box>
                                                <Box mt={1}>
                                                    <Typography className="Package">
                                                        Package Cancellation Policy
                                                    </Typography>
                                                    <Typography className="Package">
                                                        Cancellation & Charges:
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="space-between"
                                                >
                                                    <Box>
                                                        <Typography className="Cancellation">
                                                            Cancellation Time
                                                        </Typography>
                                                        <Typography className="Time">Till 03 Feb 23</Typography>
                                                        <Typography className="Time">After 03 Feb 23</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography className="Cancellation">
                                                            Cancellation Charges
                                                        </Typography>
                                                        <Typography className="Charges">
                                                            ₹2,000 Cancellation Fee
                                                        </Typography>
                                                        <Typography className="Charges">Non Refundable</Typography>
                                                    </Box>
                                                </Box>
                                                <Box mt={1}>
                                                    <Typography className="Note">
                                                        Note: These are non-refundable amounts as per the current
                                                        components attached. In the case of component
                                                        change/modifications, the policy will change accordingly.
                                                    </Typography>
                                                </Box>
                                                <Box mt={1}>
                                                    <Typography className="Package">
                                                        Package Date Change Policy
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="space-between"
                                                >
                                                    <Box mt={1}>
                                                        <Typography className="Cancellation">
                                                            Date Change Possible
                                                        </Typography>
                                                        <Typography className="Time">Till 03 Feb 23</Typography>
                                                        <Typography className="Time">After 03 Feb 23</Typography>
                                                    </Box>
                                                    <Box mt={1}>
                                                        <Typography className="Cancellation">Date Change</Typography>
                                                        <Typography className="Charges">
                                                            ₹0 Date Change Fee
                                                        </Typography>
                                                        <Typography className="Charges">
                                                            Date cannot be changed
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box mt={1}>
                                                    <Typography className="Package">Exclusions</Typography>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Package price does not include Gala dinner charges
                                                            applicable on Christmas and New Year's Eve
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box mt={1}>
                                                    <Typography className="Package">
                                                        Terms and Conditions
                                                    </Typography>
                                                </Box>
                                                <Box display="flex" alignItems="baseline">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Standard check-in time at the hotel is normally 2:00 pm and
                                                            check-out is 11:00 am. An early check-in, or a late
                                                            check-out is solely based on the discretion of the hotel.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="baseline">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            The itinerary is fixed and cannot be modified.
                                                            Transportation shall be provided as per the itinerary and
                                                            will not be at disposal. For any paid activity which is
                                                            non-operational due to any unforeseen reason, we will
                                                            process refund & same should reach the guest within 30 days
                                                            of processing the refund.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="baseline">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            {" "}
                                                            If your flights involve a combination of different airlines,
                                                            you may have to collect your luggage on arrival at the
                                                            connecting hub and register it again while checking in for
                                                            the onward journey to your destination.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Double or Twin bed type provided during check-in is at the
                                                            final discretion of hotel.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            A maximum of 3 adults are allowed in one room. The third
                                                            occupant shall be provided a mattress/rollaway bed.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Also, for any activity which is complimentary and not
                                                            charged to Travvolt & guest, no refund will be processed.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            AC will not be functional anywhere in cool or hilly areas.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            {" "}
                                                            Entrance fee, sightseeing tickets and guide charges are not
                                                            included in the packages.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Airline seats and hotel rooms are subject to availability at
                                                            the time of booking.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Any other items not mentioned under Inclusions are not
                                                            included in the cost of the booking.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Cost of deviation and cost of extension of the validity on
                                                            your ticket is not included.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            {" "}
                                                            For queries regarding cancellations and refunds, please
                                                            refer to our Cancellation Policy.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            {" "}
                                                            Disputes, if any, shall be subject to the exclusive
                                                            jurisdiction of the courts in New Delhi.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Check-in time on a houseboat is 12 pm and check-out time is
                                                            9:00 am.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Due to its climatic conditions, Munnar in Kerala does not
                                                            have AC rooms.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Most of the Hotels in Munnar are located far away from the
                                                            city centre and local market.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            If a guest is staying on a houseboat, the sightseeing will
                                                            not be conducted.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>

                                            <Grid item sm={12} xs={12} lg={3}>
                                                <Box className="border_left">
                                                    <Box mt={1}>
                                                        <Typography className="Holiday">
                                                            Your Holiday Package
                                                        </Typography>
                                                        <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={building} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                New Delhi To Kerela
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={night} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                4 Night(s) (05 Feb-08 Feb, 2023)
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={beds} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                1 Room(s)
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={unitednations} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                Indian
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={addgroup} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                2 Adult(s)
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={review} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                5 Star or more
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
                                                    <Box>
                                                        <Typography className="package_text">$4147</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography className="package_text_color">$4147</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography className="package_person">per person* (*Excluding applicable taxes)</Typography>
                                                    </Box>
                                                    <Box mt={1} display="flex" justifyContent="center">
                                                    <Button type='submit' onClick={() => navigate('/HolidayPassengerDetail')} className="btn_proceed" variant="contained">Proceed To Book Online</Button>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>


                                    </Box>
                                </TabPanel>
                                <TabPanel value="3">
                                    <Box py={2} sx={{ backgroundColor: "white", borderRadius: "20px", }} >

                                        <Grid container spacing={3} py={2}>
                                            <Grid item sm={12} xs={12} lg={9}>
                                                <Box>
                                                    <Typography className="heading_package">
                                                        Package Inclusions
                                                    </Typography>
                                                </Box>

                                                <Box px={2} style={{ borderLeft: "6px solid #707070" }} >
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <FlightOutlinedIcon />
                                                        </Box>
                                                        <Box mt={1}>
                                                            <Typography className="flight_text">
                                                                Arrival in Goa by Go First G8-232 | Departing on 01 Apr,
                                                                10:45 AM | Arriving on 1Apr, 01:30 PM | Includes Check in
                                                                Baggage
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <DirectionsCarFilledIcon />
                                                        </Box>
                                                        <Box mt={1}>
                                                            <Typography className="flight_text">
                                                                Airport to Hotel in Goa
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box mt={1} ml={2}>
                                                        <Typography className="goa_text">Goa - 3 Night Stay</Typography>
                                                    </Box>
                                                    <Box mt={1} ml={2} display="flex" alignItems="center">
                                                        <Box>
                                                            <Typography className="days_text">
                                                                Day 1 <br /> Apr 1, Sat
                                                            </Typography>
                                                            <Typography></Typography>
                                                        </Box>
                                                        <Box px={2}>
                                                            <img src={hotell}  />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="stay_text">
                                                                Check in to Hotel Regent Leguna, 3 Star
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box mt={1} ml={2} display="flex" alignItems="center">
                                                        <Box>
                                                            <Typography className="days_text">
                                                                Day 2 <br /> Apr 2, Sun
                                                            </Typography>
                                                            <Typography></Typography>
                                                        </Box>
                                                        <Box px={2}>
                                                            <img src={breakfast} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="stay_text">
                                                                Day Meals: Breakfast: Included at Hotel Regent Laguna, Goa
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box mt={1} ml={2} display="flex" alignItems="center">
                                                        <Box>
                                                            <Typography className="days_text">
                                                                Day 3 <br /> Apr 3, Mon
                                                            </Typography>
                                                            <Typography></Typography>
                                                        </Box>
                                                        <Box px={2}>
                                                            <img src={breakfast} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="stay_text">
                                                                Day Meals: Breakfast: Included at Hotel Regent Laguna, Goa
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box mt={1} ml={2} display="flex" alignItems="center">
                                                        <Box>
                                                            <Typography className="days_text">
                                                                Day 4 <br /> Apr 4, Tue
                                                            </Typography>
                                                            <Typography></Typography>
                                                        </Box>
                                                        <Box px={2}>
                                                            <img src={breakfast} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="stay_text">
                                                                Day Meals: Breakfast: Included at Hotel Regent Laguna, Goa
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <DirectionsCarFilledIcon />
                                                        </Box>
                                                        <Box mt={1}>
                                                            <Typography className="flight_text">
                                                                Hotel in Goa to Airport
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <FlightOutlinedIcon />
                                                        </Box>
                                                        <Box mt={1}>
                                                            <Typography className="flight_text">
                                                                Departure from Goa by Go First Flight G8-243 | Departure on
                                                                04 Apr, 05:30 PM | Arriving on 04 Apr, 08:20 PM Check In
                                                                Baggage
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box px={3}>
                                                    <Box mt={2} display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={checkout} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="check_out">
                                                                Checkout from Hotel in Goa
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box mt={2}>
                                                        <Typography className="exclusion_text">
                                                            Package Exclusions
                                                        </Typography>
                                                    </Box>
                                                    <Box mt={1} display="flex" alignItems="center">
                                                        <Box>
                                                            <CloseIcon style={{ color: "red", width: "18px", height: "18px", fontWeight: "bold" }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="close_text">Expenses of personal nature</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <CloseIcon style={{ color: "red", width: "18px", height: "18px", fontWeight: "bold" }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="close_text">EMentioned cost is not valid between 6 pm & 8 pm</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <CloseIcon style={{ color: "red", width: "18px", height: "18px", fontWeight: "bold" }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="close_text">Anything not mentioned under inclusions</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <CloseIcon style={{ color: "red", width: "18px", height: "18px", fontWeight: "bold" }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="close_text">Package price does not include Gala dinner charges applicable on Christmas and New Year's Eve</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item sm={12} xs={12} lg={3}>
                                                <Box className="border_left">
                                                    <Box mt={1}>
                                                        <Typography className="Holiday">
                                                            Your Holiday Package
                                                        </Typography>
                                                        <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={building} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                New Delhi To Kerela
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={night} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                4 Night(s) (05 Feb-08 Feb, 2023)
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={beds} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                1 Room(s)
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={unitednations} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                Indian
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={addgroup} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                2 Adult(s)
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center">
                                                        <Box>
                                                            <img src={review} />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="holiday_Package" ml={1}>
                                                                5 Star or more
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
                                                    <Box>
                                                        <Typography className="package_text">$4147</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography className="package_text_color">$4147</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography className="package_person">per person* (*Excluding applicable taxes)</Typography>
                                                    </Box>
                                                    <Box mt={1} display="flex" justifyContent="center">
                                                    <Button type='submit' onClick={() => navigate('/HolidayPassengerDetail')} className="btn_proceed" variant="contained">Proceed To Book Online</Button>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                </TabPanel>

                            </TabContext>
                        </Box>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HolidayPackageTab;