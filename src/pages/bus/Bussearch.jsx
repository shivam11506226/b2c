import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// hotel tabs

import Box from "@mui/material/Box";
// bootstrap
import { busSearchAction } from "../../Redux/busSearch/busSearchAction";
import { apiURL } from "../../Constants/constant";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import "./bus.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const label = { inputProps: { "aria-label": "Checkbox demo" } };



const Homeform = (props) => {



  const [value, setValue] = React.useState("1");
  const [placeholderFrom, setPlaceholderFrom] = useState("from");
  const [labelFrom, setLabelFrom] = useState("From");
  // const [startDate, setStartDate] = useState(null);
  const [placeholderTo, setPlaceholderTo] = useState("To");
  const [labelTo, setLabelTo] = useState("To");

  const [display, setDisplay] = useState("");
  const [isLoadingFrom, setIsLoadingFrom] = useState(false);
  const [isLoadingTo, setIsLoadingTo] = useState(false);

  // Copied state end





  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [fromSearchResults, setFromSearchResults] = useState([]);
  const [toSearchResults, setToSearchResults] = useState([]);
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [from, setFrom] = useState({
    cityId: "",
    cityName: "",
  });
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [to, setTO] = useState("");
  const [selectedTo, setSelectedTo] = useState(null);
  const [displayFrom, setdisplayFrom] = useState(true);
  const [displayTo, setdisplayTo] = useState(true);

  const inputRef = useRef(null);
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const [fromData, setFromData] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [errors, setErrors] = useState({
    from: "",
    to: "",
    date: "",
  });

  console.log(reducerState, "reducer state")
  const toSearchRef = React.useRef(null);
  const fromSearchRef = React.useRef(null);


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (toSearchRef.current && !toSearchRef.current.contains(event.target)) {
      setdisplayTo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideFrom);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideFrom);
    };
  }, []);

  const handleClickOutsideFrom = (event) => {
    if (
      fromSearchRef.current &&
      !fromSearchRef.current.contains(event.target)
    ) {
      setdisplayFrom(false);
    }
  };


  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const getDayOfWeek = (date) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
  };


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



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // function handleFromClicks(event) {
  //   event.preventDefault();
  //   const form = event.target.value;
  //   const formData = new FormData(form);
  //   console.log(formData, "formData");

  //   const payload = {
  //     EndUserIp: reducerState?.ip?.ipData,
  //     TokenId: reducerState?.ip?.tokenData,
  //     DateOfJourney: startDate,
  //     DestinationId: to,
  //     OriginId: from,
  //   };
  //   console.log("payload", payload);
  //   dispatch(busSearchAction(payload));
  // }




  useEffect(() => {
    let mounted = true;
    const fetchSearchResults = async () => {
      setIsLoading(true);
      const results = await axios.get(
        `${apiURL.baseURL}/skyTrails/city/searchCityBusData?keyword=${fromQuery}`
      );
      if (mounted) {
        setFromSearchResults(results?.data?.data);
        setIsLoading(false);
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
      setIsLoading(true);

      const results = await axios.get(
        `${apiURL.baseURL}/skyTrails/city/searchCityBusData?keyword=${toQuery}`
      );
      if (mounted) {
        setToSearchResults(results?.data?.data);
        setIsLoading(false);
      }
    };

    if (toQuery.length >= 2) {
      fetchSearchResults();
    }
    return () => {
      mounted = false;
    };
  }, [toQuery]);

  const handleFromInputChange = (event) => {
    setErrors({ ...errors, from: "" });
    setFrom(event.target.value);
    setSelectedFrom(null);
  };

  const handleFromClick = (result) => {
    // console.log("result", result);
    // setFrom(result?.CityId);

    setFrom((prevState) => ({
      ...prevState,
      cityId: result?.CityId,
      cityName: result?.CityId,
    }));

    setSelectedFrom(result?.CityId);
    setdisplayFrom(false);
  };

  const handleToClick = (result) => {
    setTO(result.CityId);
    setSelectedTo(result.CityId);
    setdisplayTo(false);
  };

  const handleFromSearch = (e) => {
    setFromQuery(e);
  };

  const handleToInputChange = (event) => {
    setErrors({ ...errors, to: "" });
    setTO(event.target.value);
    setSelectedTo(null);
  };

  const handleToSearch = (e) => {
    setToQuery(e);
  };

  const handleDateInputChange = () => {
    setErrors({ ...errors, date: "" });
  };



  const validateForm = () => {
    let valid = true;
    const newErrors = { from: "", to: "", date: "" };

    if (!from.cityId) {
      newErrors.from = "Please select a city or airport *";
      valid = false;
    }

    if (!to) {
      newErrors.to = "Please select a city or airport *";
      valid = false;
    }

    if (!startDate) {
      newErrors.date = "Please select a departure date *";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };


  function handleSubmit(event) {
    event.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      const formData = new FormData(event.target);
      const selectedDate = startDate;
      let formattedDate = "";
      if (selectedDate) {
        const month = selectedDate.getMonth() + 1;
        const day = selectedDate.getDate();
        const year = selectedDate.getFullYear();
        formattedDate = `${year}/${month.toString().padStart(2, "0")}/${day
          .toString()
          .padStart(2, "0")}`;
      }
      const payload = {
        EndUserIp: reducerState?.ip?.ipData,
        TokenId: reducerState?.ip?.tokenData,
        DateOfJourney: formattedDate,
        DestinationId: formData.get("to"),
        OriginId: formData.get("from"),
      };
      dispatch(busSearchAction(payload));
      console.log("payload", payload);
      // navigate("/BusResult");
    } else {
      // Focus on the first empty field
      if (!from) {
        fromInputRef.current.focus();
      } else if (!to) {
        toInputRef.current.focus();
      } else if (!inputRef.current.value) {
        inputRef.current.focus();
      }
    }
  }



  const handleRoundLogoClick = () => {
    const tempFrom = from;
    setFrom(to);
    setTO(tempFrom);
    const tempSelectedFrom = selectedFrom;
    setSelectedFrom(selectedTo);
    setSelectedTo(tempSelectedFrom);
  };



  // end
  return (
    <section className="margin-pecentage">
      <div className="container-fluid " >
        <div className="row BusSearchBg">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="busSearch-container">
                <div className="PackageInner">
                  <span>From</span>
                  <div>
                    <input
                      name="from"
                      placeholder="Enter city Name"
                      value={from.cityId}
                      onChange={(event) => {
                        handleFromInputChange(event);
                        handleFromSearch(event.target.value);
                      }}
                      ref={fromInputRef}
                      autoComplete="off"
                      required
                      style={{
                        outline: "none",
                        border: "none",
                      }}
                    />

                    {fromSearchResults &&
                      fromSearchResults.length > 0 && fromQuery.length >= 2 && (
                        <div
                          ref={fromSearchRef}
                          className="from-search-results"
                          style={{

                            display: displayFrom ? "flex" : "none",
                          }}
                        >
                          <ul className="from_Search_Container">
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                maxHeight: 161,
                                overflow: "hidden",
                                overflowY: "scroll",
                              }}
                              className="scroll_style"
                            >
                              {fromSearchResults.map((result) => (
                                <li
                                  className="to_List"
                                  key={result._id}
                                  onClick={() => handleFromClick(result)}
                                >
                                  <div className="onewayResultBox">

                                    <div className="onewayResultFirst">

                                      <div className="resultOriginName">
                                        <p>{result.CityId}</p>
                                        <span>{result.CityName}</span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </Box>
                          </ul>
                        </div>
                      )}
                  </div>
                  {fromSearchResults && fromSearchResults.length > 0 && fromQuery.length >= 2 ? (
                    <span>
                      {selectedFrom ? (
                        <>
                          {selectedFrom}
                        </>
                      ) : (
                        <>
                          {fromSearchResults[0].CityName}
                        </>
                      )}
                    </span>
                  ) :
                    (
                      <span>City Code</span>
                    )
                  }
                  <div className="roundlogo" onClick={handleRoundLogoClick}
                    style={{ cursor: 'pointer' }}>
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

                <div className="PackageInner">
                  <span>To</span>
                  <div>
                    <input
                      name="to"
                      placeholder="Enter city Name"
                      autoComplete="off"
                      value={to}
                      onChange={(event) => {
                        handleToInputChange(event);
                        handleToSearch(event.target.value);
                      }}
                      ref={toInputRef}
                      required
                      style={{
                        border: "none",

                        outline: "none",
                      }}
                    />


                    {toSearchResults && toSearchResults.length > 0 && toQuery.length >= 2 && (
                      <div
                        ref={toSearchRef}
                        className="from-search-results"
                        style={{
                          display: displayTo ? "flex" : "none",
                        }}
                      >
                        <ul className="from_Search_Container">
                          <Box
                            sx={{
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
                                <div className="onewayResultBox">
                                  <div className="onewayResultFirst">
                                    <div className="resultOriginName">
                                      <p>{result.CityName}</p>
                                      <span>{result.CityId}</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </Box>
                        </ul>
                      </div>
                    )}
                  </div>

                  {toSearchResults && toSearchResults.length > 0 && toQuery.length >= 2 ? (
                    <span>
                      {selectedTo ? (
                        <>
                          {selectedTo}
                        </>
                      ) : (
                        <>
                          {toSearchResults[0].CityName}
                        </>
                      )}
                    </span>
                  ) :
                    (
                      <span>City Code</span>
                    )

                  }
                </div>

                <div className="PackageInner">
                  <span>Departure</span>
                  <div className="">
                    <div>
                      <DatePicker
                        name="departure"
                        id="departure"
                        selected={startDate}
                        onChange={handleDateChange}
                      />
                    </div>
                  </div>
                  <span>{getDayOfWeek(startDate)}</span>
                </div>
                <div className="PackageInner">
                  <button type="submit" className="searchButt" >
                    <h3>Search</h3>
                    <KeyboardDoubleArrowRightIcon />
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeform;
