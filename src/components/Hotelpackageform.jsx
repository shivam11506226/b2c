import { Link, NavLink, useNavigate } from "react-router-dom";
// hotel tabs
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Holiday_submit } from "../utility/CSS/HolidayPackageForm";
// slider
import Slider from "react-slick";
import nepal from "../images/card/nepal.png";
import SearchIcon from "@mui/icons-material/Search";
import './card.css';
// bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { searchPackageAction } from "../Redux/SearchPackage/actionSearchPackage";
import { useDispatch, useSelector } from "react-redux";
import { clearHolidayReducer } from "../Redux/OnePackageSearchResult/actionOneSearchPackage";
import OfferCard from "../pages/flight/OfferCard";
import SkyCollection from "./SkyCollection";
import SliderContainer from "./SliderContainer";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Homeform = (props) => {
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
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Holiday form search
  const reducerState = useSelector((state) => state);
  console.log("holiday", reducerState?.searchResult);
  const [destination, setDestination] = React.useState("");
  const [daysSearch, setDaySearch] = useState(0);
  const filteredPackage =
    reducerState?.searchResult?.packageSearchResult?.data?.data?.pakage;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("=====================");
    console.log("--------working--------");
    dispatch(clearHolidayReducer());
  }, [dispatch]);

  const navigate = useNavigate();
  //   useEffect(() => {
  //     if (filteredPackage) {
  //       navigate("HolidaypackageResult");
  //     }
  //   }, [filteredPackage]);
  const clickUs = () => {
    const payload = {
      destination,
      days: daysSearch,
    };
    console.log(payload);
    dispatch(searchPackageAction(payload));
    navigate("/HolidayPackageSearchResult");
  };
  function handleFromClicks() {
    navigate("/HolidayPackageSearchResult");
  }
  return (
    <section>
      <div className="container homeform_container">
        <div
          className="row content_row"
          style={{ zIndex: "1px", position: "relative", top: "-30px" }}
        >
          <div className="col-12">
            <Box
              sx={{ width: "90%", typography: "body1", margin: "auto" }}
              style={{ marginTop: "50px" }}
            >
              {/* <Box
                py={2}
                sx={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                 <form onSubmit={handleSubmit} >
                <div className="row">
                  <div
                    className="col-12 col-md-6 col-lg-3 mb-3"
                    style={{ marginLeft: "105px" }}
                  >
                    <div className="form_input" display="flex">
                      <label className="form_lable">{labelFrom}</label>
                      <input
                        type="text"
                        name="from"
                        value={from}
                        placeholder="Enter City"
                        onChange={(event) => {
                          handleFromInputChange(event);
                          handleFromSearch(event.target.value);
                        }}
                      
                      />
                       {fromSearchResults && fromSearchResults.length > 0 && (
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    zIndex: 1,
                    width: "100%",
                    boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                    textAlign: "left",
                    cursor: "pointer",
                    display: displayFrom ? "block" : "none",
                  }}
                >
                  <ul>
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        flexDirection: "column",
                        maxHeight: 150,
                        overflow: "hidden",
                        overflowY: "scroll",
                      }}
                    >
                      {fromSearchResults.map((result) => (
                        <li
                          key={result._id}
                          onClick={() => handleFromClick(result)}
                        >
                          <strong>{result.CityId}</strong> {result.CityName}{" "}
                        
                        </li>
                      ))}
                    </Box>
                  </ul>
                </div>
              )}
                    </div>
                  </div>

                  <div
                    className="col-md-1 d-flex"
                    style={{ justifyContent: "center" }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box className="swip_destination">
                        <SyncAltIcon
                          onClick={handleSwap}
                          style={{
                            width: "50px",
                            height: "30px",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                        />
                      </Box>
                    </Box>
                  </div>

                  <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <div className="form_input" display="flex">
                      <label for="to" className="form_lable">
                        {labelTo}
                      </label>
                      <input
                        type="text"
                        name="to"
                        value={to}
                        placeholder="Enter City"
                        onChange={(event) => {
                          handleToInputChange(event);
                          handleToSearch(event.target.value);
                        }}
                        
                      />
                       {toSearchResults && toSearchResults.length > 0 && (
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    zIndex: 1,
                    width: "100%",
                    boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                    textAlign: "left",
                    cursor: "pointer",
                    display: displayTo ? "block" : "none",
                  }}
                >
                  <ul>
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        flexDirection: "column",
                        maxHeight: 150,
                        overflow: "hidden",
                        overflowY: "scroll",
                      }}
                    >
                      {toSearchResults.map((result) => (
                        <li
                          key={result._id}
                          onClick={() => handleToClick(result)}
                        >
                          <strong>{result.CityId}</strong> {result.CityName}{" "}
                          {result.CityId}
                        </li>
                      ))}
                    </Box>
                  </ul>
                </div>
              )}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form_input" display="flex">
                      <label className="form_lable">TO</label>
                      <input
                        type="date"
                        name="departure"
                        min={disablePastDate()}
                        className="to_input"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
            <div className="row select_fare">
            
                <Box display="flex" justifyContent="center">
                  <div class="wrapper">
                    <text className="col-auto fare_search ">
                      <button type="submit" path="" className="search">
                        {" "}
                        Search
                      </button>
                    </text>
                  </div>
                </Box>
             
            </div>
          </div>
                </form>
              </Box> */}
              <form>
                <div className="your-containerformholiday">
                  <div className="from-containerholi">
                    <div className="from-label">City</div>
                    <div className="from-city">
                      {" "}
                      <input
                        name="from"
                        placeholder="Enter city"
                        // value={from}
                        autoComplete="off"
                        // onChange={(event) => {
                        //   handleFromInputChange(event);
                        //   setIsLoadingFrom(true);
                        //   handleFromSearch(event.target.value);
                        // }}
                        // required
                        style={{
                          outline: "none",
                          border: "none",
                        }}
                      />
                      {/* {isLoadingFrom && <div>Loading...</div>}
                          {fromSearchResults &&
                            fromSearchResults.length > 0 && (
                              <div
                                ref={fromSearchRef}
                                className="from-search-results"
                                style={{
                                  backgroundColor: "white",
                                  borderRadius: "10px",
                                  zIndex: 1999900,
                                  width: "100%",
                                  boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                                  textAlign: "left",
                                  cursor: "pointer",
                                  display: displayFrom ? "block" : "none",
                                }}
                              >
                                <ul className="from_Search_Container">
                                  {fromSearchResults.map((result) => (
                                    <li
                                      className="to_List"
                                      key={result._id}
                                      onClick={() => handleFromClick(result)}
                                    >
                                      <div>
                                        <span className="to_List_container">
                                          <FlightTakeoffTwoToneIcon />{" "}
                                          <strong>{result.name}</strong>{" "}
                                          <strong
                                            className="to_airport_code"
                                            style={{
                                              color: "gray",
                                              fontSize: "12px",
                                            }}
                                          >
                                            {result.AirportCode}
                                          </strong>
                                        </span>
                                        <span
                                          style={{
                                            fontSize: "13px",
                                            display: "flex",
                                            justifyContent: "center",
                                          }}
                                        >
                                          {result.code}
                                        </span>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )} */}
                    </div>
                    <div className="from-details">Day</div>

                   
                  </div>

                  <div className="from-containerholi1">
                    <div className="to-label">Days</div>
                    <div className="to-city">
                      {" "}
                      <input
                        name="to"
                        placeholder="Enter Day"
                        // value={to}
                        // required
                        // onChange={(event) => {
                        //   handleToInputChange(event);
                        //   setIsLoadingTo(true); // Set loading state for TO input
                        //   handleToSearch(event.target.value);
                        // }}
                        // autoComplete="off"
                        style={{
                          border: "none",

                          outline: "none",
                        }}
                      />
                      {/* {isLoadingTo && <div>Loading...</div>}
                          {toSearchResults && toSearchResults.length > 0 && (
                            <div
                              ref={toSearchRef}
                              style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                zIndex: 9999991,
                                width: "100%",
                                boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                                textAlign: "left",
                                cursor: "pointer",
                                display: displayTo ? "block" : "none",
                              }}
                            >
                              <ul className="to_Search_Container">
                                <Box
                                  sx={{
                                    mb: 1,
                                    mt: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    maxHeight: 161,
                                    overflow: "hidden",
                                    overflowY: "scroll",
                                  }}
                                  className="scroll_style"
                                >
                                  {toSearchResults.map((result) => (
                                    <li
                                      className="to_List"
                                      key={result._id}
                                      onClick={() => handleToClick(result)}
                                    >
                                      <div>
                                        <span className="to_List_container">
                                          <FlightLandTwoToneIcon />{" "}
                                          <strong>{result.name}</strong>{" "}
                                          <strong
                                            className="to_airport_code"
                                            style={{
                                              color: "gray",
                                              fontSize: "12px",
                                            }}
                                          >
                                            {result.AirportCode}
                                          </strong>
                                        </span>
                                        <span
                                          style={{
                                            fontSize: "13px",
                                            display: "flex",
                                            justifyContent: "center",
                                          }}
                                        >
                                          {result.code}
                                        </span>
                                      </div>
                                    </li>
                                  ))}
                                </Box>
                              </ul>
                            </div>
                          )} */}
                    </div>
                    <div className="to-details">Monday..</div>
                  </div>
                 

               
                </div>
              </form>
             
              <Box display="flex" justifyContent="center" >
                <div class="wrapper" style={{width:"76%"}}>
                  <text>Popular Packages:</text>
                  <input type="radio" name="select" id="option-1" checked />
                  <input type="radio" name="select" id="option-2" />
                  <input type="radio" name="select" id="option-3" />
                  <input type="radio" name="select" id="option-4" />
                  <input type="radio" name="select" id="option-5" />
                  <input type="radio" name="select" id="option-6" />
                  <label for="option-1" class="option option-1" >
                    <text>Mexico, USA</text>
                  </label>
                  <label for="option-2" class="option option-2" style={{width:"auto"}}>
                    <text>Dubai, United Arab Emirates</text>
                  </label>
                  <label for="option-3" class="option option-3" style={{width:"auto"}}>
                    <text>Mumbai, India</text>
                  </label>

                  <text className="col-auto fare_search ">
                    <div className="searchButton">
                      <div className="buttonText" onClick={handleFromClicks}>
                        SEARCH
                      </div>
                    </div>
                  </text>
                </div>
              </Box>
            </Box>
          </div>
        
        </div>
        <SkyCollection/>
        <SliderContainer/>
       

      </div>
    </section>
  );
};

export default Homeform;
