import { Grid, Typography, Box, Divider, Button } from "@mui/material";
import React, { useState } from "react";
import PriceSlider from "../../Hotel/hoteldetails/PriceSlider";
import StarIcon from "@mui/icons-material/Star";
import "./holidaypackagesdetail.css";
import building from "../../../images/icons/building.png";
import night from "../../../images/icons/night.png";
import beds from "../../../images/icons/beds.png";
import unitednations from "../../../images/icons/unitednations.png";
import addgroup from "../../../images/icons/addgroup.png";
import review from "../../../images/icons/review.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./holidayCard.css";
import { useDispatch, useSelector } from "react-redux";
import {HolidayButton} from '../../../utility/CSS/Button/Button'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// Icons
import CommitIcon from "@mui/icons-material/Commit";
import TramIcon from "@mui/icons-material/Tram";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import DeckIcon from "@mui/icons-material/Deck";
import EngineeringIcon from "@mui/icons-material/Engineering";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LiquorIcon from "@mui/icons-material/Liquor";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import LandslideIcon from "@mui/icons-material/Landslide";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import PoolIcon from "@mui/icons-material/Pool";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import ForestIcon from "@mui/icons-material/Forest";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import { useNavigate } from "react-router-dom";
import { savePackageId } from "../../../Redux/HolidayBookingRequest/actionBooking";
import { submitFormData } from "../../../Redux/BookingPackageData/actionType";
import { packageBookingID } from "../../../Redux/BookingPackageData/actionBooking";
// Tooltip 
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

const HolidayPackagesDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);
  const [ratingOption, setRatingOption] = useState("");
  console.log(ratingOption);
  const [bookingOption, setBookingOption] = useState("");
  console.log(bookingOption);

  const reducerState = useSelector((state) => state);
  const searchedPackage =
    reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data?.pakage;
  console.warn("IIDDDD", reducerState);

  

const handleBookPackage =(id)=>{
  // e.preventDefault();
  localStorage.setItem('PackageBookingId', id);
  // dispatch(savePackageId(id))
  dispatch(packageBookingID(id));
  navigate("/holidaypassengerdetail")
  }


  return (
    <div className="container">
      <Grid container spacing={3}>
        <Grid item sm={12} xs={12} lg={3}>
          <Box className="leftshadow" py={3}>
            <Typography className="selectfilter">
              Your Holiday Package
            </Typography>
            <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
            <Box>
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={building} />
                <Typography className="holiday_text" ml={1}>
                  New Delhi To Dubai
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={night} style={{ width: "8%", height: "20%" }} />
                <Typography className="holiday_text" ml={1}>
                  3 Night(s)(05 Feb-08 Feb, 2023)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={beds} />
                <Typography className="holiday_text" ml={1}>
                  1 Room(s)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={unitednations} />
                <Typography className="holiday_text" ml={1}>
                  Indian
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={addgroup} />
                <Typography className="holiday_text" ml={1}>
                  2 Adult(s)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={review} />
                <Typography className="holiday_text" ml={1}>
                  5 Star or more
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginY: "15px",
                  marginX: "20px",
                }}
              >
                <Button variant="contained" className="btn_mod">
                  Modify Search
                </Button>
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
            <Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography className="starrating">Flights</Typography>
                <Box>
                  <Typography className="clearfilter">Clear Filter</Typography>
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
                my={1}
              >
                <Button className="button_package" variant="contained">
                  <Typography className="btn_package">With Flight</Typography>
                </Button>
                <Button className="button_package" variant="contained">
                  <Typography className="btn_package">
                    Without Flight
                  </Typography>
                </Button>
              </Box>
            </Box>

            <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
            <Typography className="suggested">Hot Deals</Typography>
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
                <Typography className="value"> Hot Deals</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
                  (12)
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
            <Box>
              <Box>
                <Typography className="price">Price (Per Night)</Typography>

                <PriceSlider />
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
            {/* -------------------------------------------------------------------- */}
            <Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography className="starrating"> Star Rating</Typography>
                <Box>
                  <Typography className="clearfilter">Clear Filter</Typography>
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
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography className="value">Unrated Hotel</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
                  (12)
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
            <Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography className="starrating"> Theme</Typography>
                <Box>
                  <Typography className="clearfilter">Clear Filter</Typography>
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
                <Typography className="value">Bus Packages</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography className="value">Honeymoon</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography className="value">Luxury</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography className="value">Adventures</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography className="value">Beach</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography className="value">Mountain</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
                  (12)
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
            <Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography className="starrating"> Holiday Type</Typography>
                <Box>
                  <Typography className="clearfilter">Clear Filter</Typography>
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
                <Typography className="value">Short Break</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography className="value">Most Popular</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography className="value">Experiential Stays</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
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
                <Typography className="value">Offbeat</Typography>
                <Typography style={{ flexGrow: 1 }} className="value">
                  (12)
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{ backgroundColor: "white" }}
          display="flex"
          justifyContent='space-around'
          mt={3}
          item
          sm={12}
          xs={12}
          lg={9}
        >
          {/* <Slider {...settings}> */}
            {searchedPackage?.map((ele, indx) => (
              <div class="card">
                <div class="header">
                    {ele?.schedule?.flexible && (<><span className="flex"><SwapVerticalCircleIcon /> Flexi Pakckage</span></> )}
                <span class="Package_title">{`${ele?.pakage_title?.slice(0,25)}...`}</span>
                  <img
                    src={ele?.pakage_img}
                    style={{ width: "100%", height: "128px" }}
                    alt={indx}
                  />
                  <span class="tag">
                    {`${ele?.days + 1}N`} / {`${ele?.days}D`}
                  </span>
                </div>
                <Box display="flex" justifyContent="space-around">
                  {ele?.insclusions?.map((item, index) => {
                    return (
                      <>
                        {item?.flexibility && (
                          <BootstrapTooltip  title="Flight" arrow>
                            <span>
                              {" "}
                              <CommitIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.train && (
                          <BootstrapTooltip  title="Train" arrow>
                            <span>
                              {" "}
                              <TramIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.bus && (
                          <BootstrapTooltip  title="Bus" arrow>
                            <span>
                              {" "}
                              <DirectionsBusIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.cab && (
                          <BootstrapTooltip  title="Cab" arrow>
                            <span>
                              {" "}
                              <DirectionsCarIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.hotel && (
                          <BootstrapTooltip  title="Hotel" arrow>
                            <span>
                              {" "}
                              <ApartmentIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.homeStays && (
                          <BootstrapTooltip  title="HomeStays" arrow>
                            <span>
                              {" "}
                              <HolidayVillageIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.guestHouse && (
                          <BootstrapTooltip  title="GuestHouse" arrow>
                            <span>
                              {" "}
                              <LocationCityIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.cruise && (
                          <BootstrapTooltip  title="Cruise" arrow>
                            <span>
                              {" "}
                              <BlurOnIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.sightSeeing && (
                          <BootstrapTooltip  title="SightSeeing" arrow>
                            <span>
                              {" "}
                              <DeckIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.guide && (
                          <BootstrapTooltip  title="Guide" arrow>
                            <span>
                              {" "}
                              <EngineeringIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.meals && (
                          <BootstrapTooltip  title="Meals" arrow>
                            <span>
                              {" "}
                              <FastfoodIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.breakfast && (
                          <BootstrapTooltip  title="Breakfast">
                            <span>
                              {" "}
                              <DinnerDiningIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.drink && (
                          <BootstrapTooltip  title="Drink" arrow>
                            <span>
                              {" "}
                              <LiquorIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.visa && (
                          <BootstrapTooltip  title="Visa" arrow>
                            <span>
                              {" "}
                              <ArticleIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.moterBike && (
                          <BootstrapTooltip  title="MmoterBike" arrow>
                            <span>
                              {" "}
                              <TwoWheelerIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.travelInsurance && (
                          <BootstrapTooltip  title="TravelInsurance" arrow>
                            <span>
                              {" "}
                              <AccountBalanceIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.safeTravel && (
                          <BootstrapTooltip  title="Safe Travel" arrow>
                            <span>
                              {" "}
                              <ParaglidingIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.wildlife && (
                          <BootstrapTooltip  title="Wildlife" arrow>
                            <span>
                              {" "}
                              <NaturePeopleIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.heritage && (
                          <BootstrapTooltip  title="Heritage" arrow>
                            <span>
                              {" "}
                              <LandslideIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.adventure && (
                          <BootstrapTooltip  title="Adventure" arrow>
                            <span>
                              {" "}
                              <KitesurfingIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.beach && (
                          <BootstrapTooltip  title="Beach" arrow>
                            <span>
                              {" "}
                              <PoolIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.hillStation && (
                          <BootstrapTooltip  title="Hill Station" arrow>
                            <span>
                              {" "}
                              <DownhillSkiingIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                        {item?.nature && (
                          <BootstrapTooltip  title="Nature" arrow>
                            <span>
                              {" "}
                              <ForestIcon />{" "}
                            </span>
                          </BootstrapTooltip >
                        )}
                      </>
                    );
                  })}
                </Box>
                <div class="info">

                <p class="description">
                    {`${ele?.overview.slice(0, 95)}...`}
                </p>
                

                  {/* <p class="description">
                  {showFullOverview ? ele?.overview : `${ele?.overview.slice(0, 95)}...`}
                  <span style={{color:'blue'}} onClick={() => setShowFullOverview(!showFullOverview)}>
                  {showFullOverview ? "Show Less" : "Show More"}
                 </span>
                  </p> */}
                 
                </div>
                {console.log("👍👍👍👍👍",ele?._id)}
                {/* action="holidaypassengerdetail" */}
                <form>
                <HolidayButton 
                // type="submit" 
                onClick={() => handleBookPackage(ele?._id)}>
                  Continue
                  </HolidayButton>
              </form>


              {/* 
              Not working
              holidaypackages/HolidayPackageSearchResult/holidaypassengerdetail */}

{/* holidaypackages/holidaypassengerdetail? */}

              {/* <HolidayButton onClick={handleBookPackage}>Continue</HolidayButton> */}
              </div>
            ))}
          {/* </Slider> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default HolidayPackagesDetail;
