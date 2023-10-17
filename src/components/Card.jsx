import React, { Component } from "react";
import Slider from "react-slick";
import nepal from "../images/card/nepal.png";
import { Paper,Box } from "@mui/material";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./card.css";

export default class SwipeToSlide extends Component {
    render() {
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
        return (
            // Error getting so display none
            <section style={{display:'none'}}>
                
                    <div className="container homeform_container">
                        <Box mt={3}>
                        <Paper elevation={3} py={2}  sx={{ borderRadius: '15px',}}>
                        <h2 className="card_header">Popular Destinations</h2>
                        {/* <Slider {...settings}>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>
                            <div>
                                <div className="card_wrapper" >
                                    <div className="card_image">
                                        <img src={nepal} alt="cardimage" style={{ width: "160px", margin: "auto" }} />
                                    </div>
                                    <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                </div>
                            </div>

                        </Slider> */}
                        </Paper>
                        </Box>
                    </div>
                
            </section>
        );
    }
}