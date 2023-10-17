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
     
      {!loader == true  ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#B1DDF8",
            position:'absolute',
            top:'102px',
            display: "flex",
            justifyContent: "center",
            zIndex:'555554444'
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
        <div>
          <div className="container ">
            <div className="row">
              <div className="col-md-12">
                <Box
                  my={2}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "10px 58px",
                  }}
                >
                  <Grid item xs={12}>
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
                  </Grid>

                  <Box sx={{ flexGrow: 1, mt: 3 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={3}>
                        <Box className="leftshadow">
                          <Typography className="selectfilter">
                            Select Filter
                          </Typography>
                          <Divider
                            sx={{ backgroundColor: "gray", marginY: "8px" }}
                          />
                          <Typography className="suggested">
                            Suggested For You
                          </Typography>
                          <Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="option1"
                                  checked={selectedOption === "option1"}
                                  onClick={(e) => setSelectedOption("option1")}
                                />
                              </Typography>
                              <Typography className="value">
                                {" "}
                                5 Star Properties
                              </Typography>
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="option2"
                                  checked={selectedOption === "option2"}
                                  onClick={(e) => setSelectedOption("option2")}
                                />
                              </Typography>
                              <Typography className="value">Resort</Typography>
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="option3"
                                  checked={selectedOption === "option3"}
                                  onClick={(e) => setSelectedOption("option3")}
                                />
                              </Typography>
                              <Typography className="value">Villas</Typography>
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="option4"
                                  checked={selectedOption === "option4"}
                                  onClick={(e) => setSelectedOption("option4")}
                                />
                              </Typography>
                              <Typography className="value">
                                {" "}
                                North Goa
                              </Typography>
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="option5"
                                  checked={selectedOption === "option5"}
                                  onClick={(e) => setSelectedOption("option5")}
                                />
                              </Typography>
                              <Typography className="value">
                                {" "}
                                Beach Front
                              </Typography>
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                          </Box>
                          <Divider
                            sx={{ backgroundColor: "gray", marginY: "8px" }}
                          />
                          <Box>
                            <Box>
                              <Typography className="price">
                                Price (Per Night)
                              </Typography>

                              <PriceSlider />
                            </Box>
                          </Box>
                          <Divider
                            sx={{ backgroundColor: "gray", marginY: "8px" }}
                          />
                          {/* -------------------------------------------------------------------- */}
                          <Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography className="starrating">
                                {" "}
                                Star Rating
                              </Typography>
                              <Box>
                                <Typography className="clearfilter">
                                  Clear Filter
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="rating1"
                                  checked={ratingOption === "rating1"}
                                  onClick={(e) => setRatingOption("rating1")}
                                />
                              </Typography>
                              <StarIcon style={{ color: "yellow" }} />
                              <StarIcon style={{ color: "yellow" }} />
                              <StarIcon style={{ color: "yellow" }} />
                              <StarIcon style={{ color: "yellow" }} />
                              <StarIcon style={{ color: "yellow" }} />
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="rating2"
                                  checked={ratingOption === "rating2"}
                                  onClick={(e) => setRatingOption("rating2")}
                                />
                              </Typography>
                              <StarIcon style={{ color: "yellow" }} />
                              <StarIcon style={{ color: "yellow" }} />
                              <StarIcon style={{ color: "yellow" }} />
                              <StarIcon style={{ color: "yellow" }} />
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="rating3"
                                  checked={ratingOption === "rating3"}
                                  onClick={(e) => setRatingOption("rating3")}
                                />
                              </Typography>
                              <StarIcon style={{ color: "yellow" }} />
                              <StarIcon style={{ color: "yellow" }} />
                              <StarIcon style={{ color: "yellow" }} />
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="rating4"
                                  checked={ratingOption === "rating4"}
                                  onClick={(e) => setRatingOption("rating4")}
                                />
                              </Typography>
                              <StarIcon style={{ color: "yellow" }} />
                              <StarIcon style={{ color: "yellow" }} />
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="rating5"
                                  checked={ratingOption === "rating5"}
                                  onClick={(e) => setRatingOption("rating5")}
                                />
                              </Typography>
                              <StarIcon style={{ color: "yellow" }} />
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="rating6"
                                  checked={ratingOption === "rating6"}
                                  onClick={(e) => setRatingOption("rating6")}
                                />
                              </Typography>
                              <Typography className="value">
                                Unrated Hotel
                              </Typography>
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                          </Box>
                          <Divider
                            sx={{ backgroundColor: "gray", marginY: "8px" }}
                          />
                          <Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography className="starrating">
                                {" "}
                                Booking Prefrence
                              </Typography>
                              <Box>
                                <Typography className="clearfilter">
                                  Clear Filter
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="booking1"
                                  checked={bookingOption === "booking1"}
                                  onClick={(e) => setBookingOption("booking1")}
                                />
                              </Typography>
                              <Typography className="value">
                                Entire Property
                              </Typography>
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="booking2"
                                  checked={bookingOption === "booking2"}
                                  onClick={(e) => setBookingOption("booking2")}
                                />
                              </Typography>
                              <Typography className="value">
                                Caretaker
                              </Typography>
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="booking3"
                                  checked={bookingOption === "booking3"}
                                  onClick={(e) => setBookingOption("booking3")}
                                />
                              </Typography>
                              <Typography className="value">
                                Instant Book
                              </Typography>
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "8px",
                              }}
                            >
                              <Typography className="content">
                                <input
                                  className="radio"
                                  type="radio"
                                  value="booking4"
                                  checked={bookingOption === "booking4"}
                                  onClick={(e) => setBookingOption("booking4")}
                                />
                              </Typography>
                              <Typography className="value">
                                Homestays
                              </Typography>
                              <Typography
                                style={{ flexGrow: 1 }}
                                className="value"
                              >
                                (12)
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={9}>
                        <Box>
                          <Typography className="title">
                            Showing Properties in Goa
                          </Typography>
                        </Box>
                        <HotelInfoCard />
                      </Grid>
                    </Grid>
                  </Box>
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
