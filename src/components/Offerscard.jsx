import React, { Component } from "react";
import Slider from "react-slick";
import "./card.css";
import { NavLink } from 'react-router-dom';
import nepal from "../images/card/nepal.png";
import { Paper, Box,Button } from "@mui/material";

export default class SwipeToSlide extends Component {
    render() {
        const settings = {
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section>
                <div className="container homeform_container">
                    <Box mt={3}>
                        <Paper elevation={3} py={2} sx={{ borderRadius: '15px', }}>
                            <div className="row card_row">
                                <div className="col-12">

                                    <h2 className="offer_header" style={{ color: "#545454", fontSize: "34px" }}>Offer For You</h2>
                                    <div className="row all_offers">
                                        <div className="col-auto">
                                            <NavLink><span>All Offers</span></NavLink>
                                        </div>
                                        <div className="col-auto">
                                            <NavLink><span>Bank Offers </span></NavLink>
                                        </div>
                                        <div className="col-auto">
                                            <NavLink><span>Flights</span></NavLink>
                                        </div>
                                        <div className="col-auto">
                                            <NavLink><span>Hotels</span></NavLink>
                                        </div>
                                        <div className="col-auto">
                                            <NavLink><span>Holidays</span></NavLink>
                                        </div>
                                        <div className="col-auto">
                                            <NavLink><span>Trains</span></NavLink>
                                        </div>
                                        <div className="col-auto">
                                            <NavLink><span>Cabs</span></NavLink>
                                        </div>
                                        <div className="col-auto">
                                            <NavLink><span>Others</span></NavLink>
                                        </div>
                                    </div>

                                    {/* <Slider {...settings}>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="card_body" >
                                                <div className="card_wrapper" >
                                                    <h5 style={{ paddingTop: "10px" }}>Domenstic Flights</h5>
                                                    <div className="card_image">
                                                        <img src={nepal} alt="cardimage" style={{ width: "160px", height: "136px", margin: "auto" }} />
                                                    </div>
                                                    <h5>INSIDE: Big Discounts on Flights, Hotels, Holidays</h5>
                                                    <div style={{ width: "130px", height: "1px", background: "#006FFF", margin: "2px auto" }}></div>
                                                    <p>& more, with SBi Credit Card for your next refreshing break.</p>
                                                    <Box>
                                                        <Button variant="contained" >Book Now</Button>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                    </Slider> */}
                                </div>
                            </div>
                        </Paper>
                    </Box>
                </div>
            </section>
        );
    }
}