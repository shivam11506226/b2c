import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./hotelresult.css";
import SearchIcon from "@mui/icons-material/Search";
import { Form, InputGroup } from "react-bootstrap";
import StarIcon from "@mui/icons-material/Star";
import HotelInfoCard from "./HotelDetailsCard";
import { Search } from "@mui/icons-material";
import SearchAppBar from "./SearchIcon";
import PrimarySearchAppBar from "./SearchIcon";
import PriceSlider from "./PriceSlider";
import errorImg from "../../../utility/404.gif";
import hotelpreLoader from "../../../utility/hotelpreLoader.gif";
import { useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

const HotelResult = () => {
  const [selectedOption, setSelectedOption] = useState("");
  // console.log(selectedOption);
  const [ratingOption, setRatingOption] = useState("");
  // console.log(ratingOption);
  const [bookingOption, setBookingOption] = useState("");
  // console.log(bookingOption);
  const reducerState = useSelector((state) => state);

  const loader =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
      ?.HotelResults;

  const noResult =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
      ?.Error?.ErrorMessage;
  console.error("check Result", noResult);
  return (
    <>

      {!loader == true ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#F4F3F3",
            position: 'absolute',
            top: '10px',
            display: "flex",
            justifyContent: "center",
            zIndex: '555554444'
          }}
        >
          {" "}
          <img

            src={noResult === "No Result Found" ? errorImg : hotelpreLoader}
            style={{ width: "100%", height: "100%" }}
            alt=""
          />{" "}
        </div>
      ) : (
        <div >
          <div className="filter">
            <div className="SORT">
              <h1>SORT BY:</h1>
            </div>
            <div id="filter1" >
              <div>
                <p className="sort_p">Popular</p>
              </div>
              <div>
                <p className="sort_p">User Rating</p>
              </div>
              <div>
                <p className="sort_p">Prices<span>(Highest First)</span></p>
              </div>
              <div>
                <p className="sort_p">Value for Money</p>
              </div>
            </div>
            <div className="View-Map">
              <div>
                <MdOutlineLocationOn className="searchIcon" />
                <h5>
                  View Map
                </h5>
              </div>
              <div>
                <IoIosSearch className="searchIcon" />
                <input type="text" placeholder="Search for locality / hotel name" />
              </div>
            </div>
          </div>
          <div className="" >
            <div className="" style={{ backgroundColor: "#F4F3F3" }}>
              <div className="">
                <Box
                  my={2}
                  sx={{
                    backgroundColor: "",
                    // borderRadius: "20px",
                    padding: "10px 58px",
                  }}
                >
                  {/* <Grid item xs={12}>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItem: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontSize: "24px",
                          color: "#252525",
                          textAlignItem: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Hotel, Villas, Appartments and more in Goa{" "}
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box style={{ display: "flex", marginTop: "10px" }}>
                        <Typography className="select_trip">
                          Select Trip Type{" "}
                        </Typography>
                        <Typography className="spor_by"> |Spor By: </Typography>
                        <Typography className="popular">Popularity </Typography>
                        <Typography className="showing_goa">
                          | Showing 6216 properties in Goa
                        </Typography>
                      </Box>
                      <Box>
                        <PrimarySearchAppBar />
                      </Box>
                    </Box>
                  </Grid> */}

                  <div sx={{ flexGrow: 1, mt: 3 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={3}>
                        <div className="gap_filter_lable">
                          <div className="selectfilter">
                            Select Filters
                          </div>

                          <div className="suggested_input_Container">
                            <div className="suggested">
                              Suggested for you
                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">Last Minute Deals</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">suggested_input_Container_inner</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>

                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">Allows Unmarried Couples</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">Perfect or 1 night stay</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">Free Cancellation</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">Perfect Breakfast</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>
                          </div>
                          <div className="suggested_input_Container">
                            <div className="rating_price">Rating</div>

                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <div>
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                </div>

                              </div>

                              <p className="item_match">(18)</p>

                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <div>
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                </div>

                              </div>

                              <p className="item_match">(18)</p>

                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <div>
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                </div>

                              </div>

                              <p className="item_match">(18)</p>

                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <div>
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                </div>

                              </div>

                              <p className="item_match">(18)</p>

                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <div>
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                </div>

                              </div>

                              <p className="item_match">(18)</p>

                            </div>
                          </div>


                          <div className="suggested_input_Container">
                            <div className="rating_price">
                              Price per night
                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">₹0-2,000</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">₹2,000-3,000</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>

                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">₹3,000-6,500</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">₹6,500-10,000</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">₹10,000 and Above</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>
                            <div className="suggested_input_Container_inner">
                              <div className="suggested_input">
                                <input type="checkbox" className="scales" name="scales" />
                                <label for="scales" className="input_lable">Perfect Breakfast</label>
                              </div>

                              <p className="item_match">(18)</p>
                            </div>
                          </div>

                        </div>
                      </Grid>
                      <Grid item xs={12} md={9}>
                        <Box>
                          <Typography className="title_1">
                            Showing Properties in Delhi Region
                          </Typography>
                        </Box>
                        <HotelInfoCard />
                      </Grid>
                    </Grid>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HotelResult;
