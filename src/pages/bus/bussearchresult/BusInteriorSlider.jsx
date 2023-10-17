import React, { Component } from "react";
import Slider from "react-slick";
import { Link, NavLink } from 'react-router-dom';
import nepal from "../../../images/card/nepal.png";
import { Paper, Box, Button } from "@mui/material";

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

                                    

                                    <Slider {...settings}>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>
                                        <div >
                                            <img src={nepal} alt="cardimage" style={{ width: "100%", height: "100%", padding:'10px' }} />
                                        </div>

                                    </Slider>
                                </div>
                            </div>
                        </Paper>
                    </Box>
                </div>
            </section>
        );
    }
}