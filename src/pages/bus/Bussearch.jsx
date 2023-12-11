import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// hotel tabs

import Box from "@mui/material/Box";
// bootstrap
import { busSearchAction } from "../../Redux/busSearch/busSearchAction";
import { apiURL } from "../../Constants/constant";
import "./bus.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

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
  // const [from, setFrom] = useState("");
  // const [to, setTo] = useState("");
  const [placeholderFrom, setPlaceholderFrom] = useState("from");
  const [labelFrom, setLabelFrom] = useState("From");
  const [startDate, setStartDate] = useState(null);
  const [placeholderTo, setPlaceholderTo] = useState("To");
  const [labelTo, setLabelTo] = useState("To");
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);

  // Copied state start
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const [fromSearchResults, setFromSearchResults] = useState([]);
  const [toSearchResults, setToSearchResults] = useState([]);
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [from, setFrom] = useState({
    cityId: "",
    cityName: "",
  });
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [from, setFrom] = useState("");
  const [to, setTO] = useState("");
  const [selectedTo, setSelectedTo] = useState(null);
  const [displayFrom, setdisplayFrom] = useState(true);
  const [displayTo, setdisplayTo] = useState(true);
  const inputRef = useRef(null);
  const [fromData, setFromData] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [display, setDisplay] = useState("");

  // Copied state end

  const handleSwap = useCallback(() => {
    setFrom(to);
    setTO(from);
    setPlaceholderFrom(placeholderTo);
    setPlaceholderTo(placeholderFrom);
    setLabelTo(labelFrom);
    setLabelFrom(labelTo);
  }, [from, to, placeholderFrom, placeholderTo, labelFrom, labelTo]);

  // Copied code start

  // useEffect(() => {
  //   dispatch(clearBusSearchReducer());
  // }, [dispatch]);

  //============== copied -----=======//

  useEffect(() => {
    if (
      reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult
        ?.BusResults?.length > 0
    ) {
      navigate("/busresult");
    }
  }, [reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult]);

  useEffect(() => {
    let mounted = true;

    const fetchSearchResults = async () => {
      // setIsLoading(true);

      // make an API call to get search results

      const results = await axios.get(
        `${apiURL.baseURL}/skyTrails/city/searchCityBusData?keyword=${fromQuery}`
      );
      if (mounted) {
        setFromSearchResults(results?.data?.data);
        // setIsLoading(false);
      }
    };

    if (fromQuery.length >= 2) {
      fetchSearchResults();
    }
    return () => {
      mounted = false;
    };
  }, [fromQuery]);

  useEffect(() => {
    let mounted = true;

    const fetchSearchResults = async () => {
      // setIsLoading(true);

      // make an API call to get search results

      const results = await axios.get(
        `${apiURL.baseURL}/skyTrails/city/searchCityBusData?keyword=${toQuery}`
      );
      if (mounted) {
        setToSearchResults(results?.data?.data);
        // setIsLoading(false);
      }
    };

    if (toQuery.length >= 2) {
      fetchSearchResults();
    }
    return () => {
      mounted = false;
    };
  }, [toQuery]);

  console.log("from result", fromSearchResults);
  console.log("to result", toSearchResults);

  const handleFromInputChange = (event) => {
    setFrom(event.target.value);
    setSelectedFrom(null);
  };

  const handleFromClick = (result) => {
    console.log("result", result);
    // setFrom(result?.CityId);

    setFrom(result.CityId);
    setDisplay(result.CityName);
    setSelectedFrom(result?.CityId);
    setdisplayFrom(false);
  };

  const handleToClick = (result) => {
    setTO(result.CityId);
    setSelectedTo(result.CityId);
    setDisplay(result.CityName);
    setdisplayTo(false);
  };

  const handleFromSearch = (e) => {
    setFromQuery(e);
  };

  const handleToInputChange = (event) => {
    setTO(event.target.value);
    setSelectedTo(null);
  };

  const handleToSearch = (e) => {
    setToQuery(e);
  };
  // Copied code end

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // disable previous date

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  // form submit code:-
  function handleFromClicks(event) {
    event.preventDefault();
    const form = event.target.value;
    const formData = new FormData(form);
    console.log(formData, "formData");

    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      DateOfJourney: startDate,
      DestinationId: to,
      OriginId: from,
    };
    console.log("payload", payload);
    dispatch(busSearchAction(payload));
  }

  // end
  return (
    <section>
      <div className="container homeform_container">
        <p className="header_row">
          <h5>{props.header}</h5>
        </p>
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
                <div className="your-containerform">
                  <div className="from-container">
                    <div className="from-label">From</div>
                    <div className="from-city">
                      {" "}
                      <input
                        name="from"
                        placeholder="Enter city or airport"
                        autoComplete="off"
                        value={from.cityId}
                        onChange={(event) => {
                          handleFromInputChange(event);
                          handleFromSearch(event.target.value);
                        }}
                        ref={fromInputRef}
                        style={{
                          outline: "none",
                          border: "none",
                        }}
                      />
                    </div>
                    {isLoading && <div>Loading...</div>}
                    {fromSearchResults && fromSearchResults.length > 0 && (
                      <div
                        style={{
                          backgroundColor: "white",
                          display: displayFrom ? "block" : "none",
                        }}
                        className="busFormRes"
                      >
                        <ul>
                          {fromSearchResults.map((result) => (
                            <li
                              key={result._id}
                              onClick={() => handleFromClick(result)}
                            >
                              <strong>{result.CityId}</strong> {result.CityName}{" "}
                              {/* {result.CityId} */}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="from-details">DEL, Delhi Airport India</div>
                    <div className="roundlogo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <circle
                          cx="20"
                          cy="20"
                          r="19"
                          fill="white"
                          stroke="#071C2C"
                          stroke-width="2"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        justifyContent="center"
                      >
                        <path
                          d="M13 15L1 15M1 15L5 19M1 15L5 11M5 5L17 5M17 5L13 0.999999M17 5L13 9"
                          stroke="#071C2C"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="from-container">
                    <div className="to-label">To</div>
                    <div className="to-city">
                      {" "}
                      <input
                        name="to"
                        placeholder="Enter city or airport"
                        style={{
                          border: "none",
                          outline: "none",
                        }}
                        value={to}
                        onChange={(event) => {
                          handleToInputChange(event);
                          handleToSearch(event.target.value);
                        }}
                        ref={toInputRef}
                      />
                    </div>
                    {isLoading && <div>Loading...</div>}
                    {toSearchResults && toSearchResults.length > 0 && (
                      <div
                        style={{
                          backgroundColor: "white",

                          display: displayTo ? "block" : "none",
                        }}
                        className="busToRes"
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
                                <strong>{result.CityId}</strong>{" "}
                                {result.CityName} {result.CityId}
                              </li>
                            ))}
                          </Box>
                        </ul>
                      </div>
                    )}
                    <div className="to-details">
                      BLR, Bengaluru International Airport In..
                    </div>
                  </div>
                  <div className="from-container2">
                    <div className="departure-label">Travel Date</div>
                    <div className="date-container">
                      <div className="date-info1">
                        <div className="datee">
                          <input
                            type="date"
                            name="departure"
                            id="departure"
                            className="deaprture_input"
                            placeholder="Enter city or airport"
                            style={{
                              border: "none",
                              outline: "none",
                            }}
                            onChange={(e) => {
                              setStartDate(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>
                      <div className="day">Thursday</div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row select_fare1">
                <Box display="flex" justifyContent="center">
                  <div className="searchContainer">
                    <div className="searchButton">
                      <div
                        className="buttonText"
                        onClick={handleFromClicks}
                        style={{ cursor: "pointer" }}
                      >
                        SEARCH
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeform;
