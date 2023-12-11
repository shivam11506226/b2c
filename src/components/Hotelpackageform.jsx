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
import "./card.css";
import "./style/hotelpackageForm.css"
// bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { searchPackageAction } from "../Redux/SearchPackage/actionSearchPackage";
import { useDispatch, useSelector } from "react-redux";
import { clearHolidayReducer } from "../Redux/OnePackageSearchResult/actionOneSearchPackage";
import OfferCard from "../pages/flight/OfferCard";
import SkyCollection from "./SkyCollection";
import SliderContainer from "./SliderContainer";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Homeform = (props) => {



  // static city names

  const popularCities = [
    "Mumbai",
    "Kerala",
    "Shimla",
    "Paris",
    "Tokyo",
    "London",
    "Goa",
  ];


  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [cityName, setCityName] = useState("");


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCityName(popularCities[currentCityIndex]);
      setCurrentCityIndex((prevIndex) =>
        (prevIndex + 1) % popularCities.length
      );
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentCityIndex]);




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
  const dispatch = useDispatch();
  console.log("holiday", reducerState?.searchResult);
  const [destination, setDestination] = useState("");
  const [daysSearch, setDaySearch] = useState(0);
  console.log(reducerState, "reducerState");
  const navigate = useNavigate();
  const filteredPackage =
    reducerState?.searchResult?.packageSearchResult?.data?.data?.pakage;

  useEffect(() => {
    dispatch(clearHolidayReducer());
  }, [dispatch]);

  // useEffect(() => {
  //   if (
  //     reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data?.pakage
  //       ?.length > 0
  //   ) {
  //     navigate("/HolidayPackageSearchResult");
  //   }
  // }, [reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data]);

  useEffect(() => {
    if (filteredPackage) {
      navigate("/HolidayPackageSearchResult");
    }
  }, [filteredPackage, navigate]);


  const handleFromClicks = () => {
    const payload = {
      destination,
      days: daysSearch,
    };
    console.log(payload, "payload");
    dispatch(searchPackageAction(payload));
    sessionStorage.setItem("searchPackageData", JSON.stringify(payload));
  };


  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDaysSearchChange = (e) => {
    setDaySearch(e.target.value);
  };



  return (
    <section className="margin-pecentage">
      <div className="container-fluid " >
        <div className="row packageBg">
          <div className="col-12">
            <form onSubmit={handleFromClicks}>
              <div className="Package-container">
                <div className="PackageInner">
                  <span>City</span>
                  <div>
                    <input
                      name="from"
                      placeholder="Enter city Name"
                      autoComplete="off"
                      value={destination}
                      required
                      style={{
                        outline: "none",
                        border: "none",
                      }}
                      onChange={handleDestinationChange}
                    />
                  </div>
                  <span>{cityName}</span>
                </div>
                <div className="PackageInner">
                  <span>Days</span>
                  <div>
                    <input
                      name="to"
                      placeholder="Number of Days"
                      style={{
                        border: "none",
                        outline: "none",
                      }}
                      value={daysSearch}
                      onChange={handleDaysSearchChange}
                    />
                  </div>
                  <span>City Name</span>
                </div>


                <div className="PackageInner">
                  <div className="searchButt" onClick={handleFromClicks}>
                    {/* <button
                      type="submit"
                      path=""
                      justifyContent="center"

                    >
                      Search
                    </button> */}
                    <h3>Search</h3>
                    <KeyboardDoubleArrowRightIcon />
                  </div>
                </div>
              </div>
              <Box display="flex" justifyContent="center">
                <div class="wrapper_hotelPack">
                  <div className="wraOne">
                    <p>Popular Packages:</p>
                  </div>
                  <input
                    type="radio"
                    name="select"
                    id="option-1"
                    checked
                  />
                  <input type="radio" name="select" id="option-2" />
                  <input type="radio" name="select" id="option-3" />
                  <input type="radio" name="select" id="option-4" />
                  <input type="radio" name="select" id="option-5" />
                  <input type="radio" name="select" id="option-6" />

                  <label for="option-1" class="option option-1">
                    <text>Mexico, USA</text>
                  </label>
                  <label for="option-2" class="option option-2">
                    <text>Dubai, United Arab Emirates</text>
                  </label>
                  <label for="option-3" class="option option-3">
                    <text>Goa, India</text>
                  </label>
                  <label for="option-4" class="option option-3">
                    <text>London, UK</text>
                  </label>
                  <label for="option-5" class="option option-3">
                    <text>Kerala, India</text>
                  </label>
                  <label for="option-5" class="option option-3">
                    <text>Rishikesh, India</text>
                  </label>

                  {/* <div className="col-auto fare_search_oneWay ">
                    <button
                      type="submit"
                      path=""
                      justifyContent="center"
                    >
                      Search
                    </button>
                  </div> */}
                </div>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeform;





{/* <div className="container homeform_container">
          <div
            className="row content_row"
            style={{ zIndex: "1px", position: "relative", top: "-30px" }}
          >
            <div className="col-12">
              <Box
                sx={{ width: "90%", typography: "body1", margin: "auto" }}
                style={{ marginTop: "50px" }}
              >
                <form>
                  <div className="your-containerformholiday">
                    <div className="from-containerholi">
                      <div className="from-label">City</div>
                      <div className="from-city">
                        {" "}
                        <input
                          name="from"
                          placeholder="Enter city"
                          autoComplete="off"
                          value={destination}
                          required
                          style={{
                            outline: "none",
                            border: "none",
                          }}
                          onChange={(e) => setDestination(e.target.value)}
                        />
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
                          style={{
                            border: "none",

                            outline: "none",
                          }}
                          value={daysSearch}
                          onChange={(e) => setDaySearch(e.target.value)}
                        />
                      </div>
                      <div className="to-details">Monday..</div>
                    </div>
                  </div>
                </form>

                <Box display="flex" justifyContent="center">
                  <div class="wrapper" style={{ width: "76%" }}>
                    <text>Popular Packages:</text>
                    <input type="radio" name="select" id="option-1" checked />
                    <input type="radio" name="select" id="option-2" />
                    <input type="radio" name="select" id="option-3" />
                    <input type="radio" name="select" id="option-4" />
                    <input type="radio" name="select" id="option-5" />
                    <input type="radio" name="select" id="option-6" />
                    <label for="option-1" class="option option-1">
                      <text>Mexico, USA</text>
                    </label>
                    <label
                      for="option-2"
                      class="option option-2"
                      style={{ width: "auto" }}
                    >
                      <text>Dubai, United Arab Emirates</text>
                    </label>
                    <label
                      for="option-3"
                      class="option option-3"
                      style={{ width: "auto" }}
                    >
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
          <SkyCollection />
          <SliderContainer />
        </div> */}