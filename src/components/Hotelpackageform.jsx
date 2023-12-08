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
  const dispatch = useDispatch();
  console.log("holiday", reducerState?.searchResult);
  const [destination, setDestination] = useState("");
  const [daysSearch, setDaySearch] = useState("");
  console.log(reducerState, "reducerState");

  useEffect(() => {
    console.log("=====================");
    console.log("--------working--------");
    dispatch(clearHolidayReducer());
  }, [dispatch]);

  useEffect(() => {
    if (
      reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data?.pakage
        ?.length > 0
    ) {
      navigate("/HolidayPackageSearchResult");
    }
  }, [reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data]);

  const navigate = useNavigate();
  const handleFromClicks = () => {
    const payload = {
      destination,
      days: daysSearch,
    };
    console.log(payload, "payload");
    dispatch(searchPackageAction(payload));
  };
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
      </div>
    </section>
  );
};

export default Homeform;
