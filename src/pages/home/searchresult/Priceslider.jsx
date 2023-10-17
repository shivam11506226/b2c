import React, { Component } from "react";
import Slider from "react-slick";
import {  Box } from "@mui/material";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "./card.css";
import Typography from "@mui/material/Typography";

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
            <section>

                <div className="container ">
                    <Box py={1}>

                        <h2 className="card_header">Popular Destinations</h2>
                        <Slider {...settings}>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Dec 22</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Dec 23</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Dec 24</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Dec 25</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Dec 26</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Dec 27</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Dec 28</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Dec 29</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Dec 30</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Jan 1</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Jan 2</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Jan 3</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Jan 4</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Jan 5</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Jan 6</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>
                            <div>
                                <div className="price_content" >
                                    <div>
                                        <Typography style={{ textAlign: "center" }}>Jan 7</Typography>
                                    </div>
                                    <div className="space" ></div>
                                    <div  style={{ textAlign: "center" }}>Price:</div>
                                </div>
                            </div>

                        </Slider>

                    </Box>
                </div>

            </section>
        );
    }
}