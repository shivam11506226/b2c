import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// hotel tabs

import Box from "@mui/material/Box";
// bootstrap
import { busSearchAction } from '../../Redux/busSearch/busSearchAction';
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

  const [placeholderTo, setPlaceholderTo] = useState("To");
  const [labelTo, setLabelTo] = useState("To");

  // Copied state start
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const [fromSearchResults, setFromSearchResults] = useState([]);
  const [toSearchResults, setToSearchResults] = useState([]);
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  // const [from, setFrom] = useState({
  //   cityId: "",
  //   cityName:""
  // });
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [from, setFrom] = useState("");
  const [to, setTO] = useState("");
  const [selectedTo, setSelectedTo] = useState(null);
  const [displayFrom, setdisplayFrom] = useState(true);
  const [displayTo, setdisplayTo] = useState(true);
  const inputRef = useRef(null);
  const [fromData,setFromData] = useState([]);
  const [origin,setOrigin] = useState([]);
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
    let mounted = true;

    const fetchSearchResults = async () => {
      // setIsLoading(true);

      // make an API call to get search results

      const results = await axios.get(
        `https://api.travvolt.com/travvolt/city/searchCityBusData?keyword=${fromQuery}`
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
        `https://api.travvolt.com/travvolt/city/searchCityBusData?keyword=${toQuery}`
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

  console.log("from result",fromSearchResults)
  console.log("to result",toSearchResults)

  const handleFromInputChange = (event) => {
    setFrom(event.target.value);
    setSelectedFrom(null);
   
  };

  const handleFromClick = (result) => {
    console.log("result",result);
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
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      DateOfJourney: formData.get("departure"),
      DestinationId: formData.get("to"),
      OriginId : formData.get("from"),
    };
    console.log("payload",payload);
    dispatch(busSearchAction(payload));
    navigate("/BusSearchresult")
  }


  // end
  return (
    <section>
      <div className="container homeform_container">
        <p className="header_row">
          <h5>{props.header}</h5>
        </p>
        <div className="row content_row">
          <div className="col-12" mx={5}>
            <Box
              sx={{ width: "100%", typography: "body1" }}
              style={{ marginTop: "50px" }}
            >
              <Box
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
                        // onChange={(e) => setFrom(e.target.value)}
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
                          {/* {result.CityId} */}
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
                        // onChange={(e) => setTo(e.target.value)}
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
              {/* <form action="/BusSearchresult"> */}
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
              {/* </form> */}
            </div>
          </div>
                </form>
              </Box>
            </Box>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Homeform;
