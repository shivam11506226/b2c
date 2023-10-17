import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hotel tabs
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import { apiURL } from "../Constants/constant";
import { ipAction, tokenAction } from "../Redux/IP/actionIp";
// import Searchresult from './Searchresult';
import Addanothercity from "./Addanothercity";
import { oneWayAction, resetOneWay } from "../Redux/FlightSearch/oneWay";
import { useNavigate } from "react-router-dom";
import FlightTakeoffTwoToneIcon from "@mui/icons-material/FlightTakeoffTwoTone";
import FlightLandTwoToneIcon from "@mui/icons-material/FlightLandTwoTone";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

// travel class modal
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// css
import "./card.css";
import axios from "axios";
import { red } from "@mui/material/colors";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Homeform = (props) => {
  // From code start from here
  const [fromSearchResults, setFromSearchResults] = useState([]);
  const [fromQuery, setFromQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [from, setFrom] = useState("");
  const [displayFrom, setdisplayFrom] = useState(true);
  const [toQuery, setToQuery] = useState("");
  const [to, setTO] = useState("");
  const [toSearchResults, setToSearchResults] = useState([]);
  const [selectedTo, setSelectedTo] = useState(null);
  const [displayTo, setdisplayTo] = useState(true);

  // Travel modal code ⬇️
  const [openTravelModal, setOpenTravelModal] = React.useState(false);
  const [activeIdClass, setActiveIdClass] = useState(1);
  const [activeIdChild, setActiveIdChild] = useState(0);
  const [activeIdInfant, setActiveIdInfant] = useState(0);
  const [activeIdAdult, setActiveIdAdult] = useState(1);
  const [activeFareType, setActiveFareType] = useState(1);
  const [totalCount, setCountPassanger] = useState(0);
  const ClassItems = [
    { id: "1", label: "All" },
    { id: "2", label: "Economy" },
    { id: "3", label: "Premium Economy" },
    { id: "4", label: "Business" },
    { id: "5", label: "Business Economy" },
    { id: "6", label: "First Class" },
  ];

  const FareType = [
    { id: "1", label: "Regular Fares" },
    { id: "2", label: "Armed Forces Fares" },
    { id: "3", label: "Student Fares" },
    { id: "4", label: "BuSenior Citizen Faressiness" },
    { id: "5", label: "Doctors & Nurses Fares" },
    { id: "6", label: "Double Seat Fares" },
  ];

  const adultCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const childCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const infantCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleTravelClickOpen = () => {
    setActiveIdClass(1);
    setActiveIdChild(0);
    setActiveIdInfant(0);
    setActiveIdAdult(1);
    setOpenTravelModal(true);
  };

  const handleTravelClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenTravelModal(false);
      setCountPassanger(
        parseInt(activeIdChild) +
          parseInt(activeIdInfant) +
          parseInt(activeIdAdult)
      );
    }
  };

  const handleInfantClick = (event) => {
    const id = event.target.getAttribute("data-id");
    setActiveIdInfant(id);
  };

  const handleChildClick = (event) => {
    const id = event.target.getAttribute("data-id");
    setActiveIdChild(id);
  };
  const handleAdultClick = (event) => {
    const id = event.target.getAttribute("data-id");
    setActiveIdAdult(id);
  };

  const handleClassItemClick = (event) => {
    const id = event.target.getAttribute("data-id");
    setActiveIdClass(id);
  };
  const handleFareItemClick = (event) => {
    const clickedItem = event.target;
    const id = event.target.getAttribute("data-id");
    setActiveFareType(id);
  };

  // End

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

  useEffect(() => {
    let mounted = true;

    const fetchSearchResults = async () => {
      setIsLoading(true);

      // make an API call to get search results

      const results = await axios.get(
        `${apiURL.baseURL}/travvolt/city/searchCityData?keyword=${fromQuery}`
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

  const handleFromClick = (result) => {
    setFrom(result.AirportCode);
    setSelectedFrom(result);
    setdisplayFrom(false);
  };

  const handleToClick = (result) => {
    setTO(result.AirportCode);
    setSelectedTo(result);
    setdisplayTo(false);
  };

  const handleFromInputChange = (event) => {
    setdisplayFrom(true);
    setFrom(event.target.value);
    setSelectedFrom(null);
  };

  const handleFromSearch = (e) => {
    setFromQuery(e);
  };

  // ToSearch result
  useEffect(() => {
    let mounted = true;

    const fetchSearchResults = async () => {
      setIsLoading(true);

      // make an API call to get search results

      const results = await axios.get(
        `${apiURL.baseURL}/travvolt/city/searchCityData?keyword=${toQuery}`
      );
      console.log(results);
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

  const handleToInputChange = (event) => {
    setdisplayTo(true);
    setTO(event.target.value);
    setSelectedTo(null);
  };

  const handleToSearch = (e) => {
    setToQuery(e);
  };

  const reducerState = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    dispatch(ipAction());
  }, []);

  useEffect(() => {
    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
    };
    dispatch(tokenAction(payload));
  }, [reducerState?.ip?.ipData]);

  // useEffect(() => {
  //   if (reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results) {
  //     navigate("/Searchresult");
  //   }
  //   else if(reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Error?.ErrorMessage === "No Result Found"){
  //     navigate("/");
  //   }
  // }, [
  //   reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results,
  //   navigate,
  // ]);

  const [data2, setData] = useState({
    adult: 0,
    child: 0,
    infants: 0,
    class: "1",
  });
  const sendTravelClass = (data2) => {
    setData(data2);
  };

  useEffect(() => {
    dispatch(resetOneWay());
  }, [dispatch]);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleOnewaySubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      AdultCount: activeIdAdult,
      ChildCount: activeIdChild,
      InfantCount: activeIdInfant,
      DirectFlight: "false",
      OneStopFlight: "false",
      JourneyType: data2.class || "1",
      PreferredAirlines: null,
      Segments: [
        {
          Origin: formData.get("from"),
          Destination: formData.get("to"),
          FlightCabinClass: activeIdClass,
          PreferredDepartureTime: formData.get("departure"),
          PreferredArrivalTime: formData.get("departure"),
        },
      ],
      Sources: null,
    };

    navigate(
      `/Searchresult?adult=${activeIdAdult}&child=${activeIdChild}&infant=${activeIdInfant}`
    );
    dispatch(oneWayAction(payload));
  }

  function handleRoundTripSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      AdultCount: "1",
      ChildCount: "1",
      InfantCount: "1",
      DirectFlight: "false",
      OneStopFlight: "false",
      JourneyType: "1",
      PreferredAirlines: null,
      Segments: [
        {
          Origin: formData.get("from"),
          Destination: formData.get("to"),
          FlightCabinClass: "1",
          PreferredDepartureTime: formData.get("departure"),
          PreferredArrivalTime: formData.get("return"),
        },
      ],
      Sources: null,
    };
    dispatch(oneWayAction(payload));
  }

  return (
    <section>
      <div className="container homeform_container">
        <p className="header_row">
          <h5>{props.header}</h5>
        </p>
        <div className="row content_row">
          <div className="col-12" mx={5}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value} centered>
                <Box pt={5}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    TabIndicatorProps={{ style: { display: "none" } }}
                    sx={{ marginX: "60px" }}
                  >
                    <Tab
                      label="Oneway"
                      value="1"
                      sx={{
                        fontSize: "15px",
                        color: "black",
                        fontWeight: "bold",
                        background: "white",
                        marginX: "5px",
                        borderRadius: "10px",
                      }}
                    ></Tab>
                    <Tab
                      label="Round Trip"
                      value="2"
                      sx={{
                        fontSize: "15px",
                        color: "black",
                        fontWeight: "bold",
                        background: "white",
                        marginX: "5px",
                        borderRadius: "10px",
                      }}
                    />
                    <Tab
                      label="Multycity "
                      value="3"
                      sx={{
                        fontSize: "15px",
                        color: "black",
                        fontWeight: "bold",
                        background: "white",
                        marginX: "5px",
                        borderRadius: "10px",
                      }}
                    />
                  </TabList>
                </Box>
                {/* Oneway start */}

                <TabPanel value="1">
                  <Box
                    py={2}
                    sx={{ backgroundColor: "white", borderRadius: "20px" }}
                  >
                    {/*=====================================================> 1st form here <========================================================*/}
                    <form onSubmit={handleOnewaySubmit}>
                      <div className="row">
                        <div className="From_container">
                          <div className="form_input">
                            <label for="from" className="form_lable">
                              FROM
                            </label>
                            <input
                              name="from"
                              placeholder="Enter city or airport"
                              value={from}
                              autoComplete="off"
                              onChange={(event) => {
                                handleFromInputChange(event);
                                handleFromSearch(event.target.value);
                              }}
                              required
                              style={{
                                width: "100%",
                                borderRadius: "20px",
                                height: "5rem",
                                border: "3px solid #70707069",
                                paddingLeft: "25px",
                              }}
                            />

                            {isLoading && <div>Loading...</div>}
                            {fromSearchResults &&
                              fromSearchResults.length > 0 && (
                                <div
                                  ref={fromSearchRef}
                                  style={{
                                    backgroundColor: "white",
                                    borderRadius: "10px",
                                    zIndex: 1999900,
                                    width: "100%",
                                    boxShadow:
                                      "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                                    textAlign: "left",
                                    cursor: "pointer",
                                    display: displayFrom ? "block" : "none",
                                  }}
                                >
                                  <ul className="from_Search_Container">
                                    <Box
                                      sx={{
                                        mb: 1,
                                        mt: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        maxHeight: 160,
                                        overflow: "hidden",
                                        overflowY: "scroll",
                                        width: "250px",
                                      }}
                                      className="scroll_style"
                                    >
                                      {fromSearchResults.map((result) => (
                                        <li
                                          className="to_List"
                                          key={result._id}
                                          onClick={() =>
                                            handleFromClick(result)
                                          }
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
                                    </Box>
                                  </ul>
                                </div>
                              )}
                          </div>
                        </div>
                        {/* <Avatar mt={5}>
                                                    <SwapHorizIcon />
                                                </Avatar> */}
                        <div className="to_container">
                          <div className="form_input">
                            <label for="to" className="form_lable">
                              TO
                            </label>
                            <input
                              name="to"
                              placeholder="Enter city or airport"
                              value={to}
                              required
                              onChange={(event) => {
                                handleToInputChange(event);
                                handleToSearch(event.target.value);
                              }}
                              autoComplete="off"
                              style={{
                                width: "100%",
                                borderRadius: "20px",
                                height: "5rem",
                                border: "3px solid #70707069",
                                paddingLeft: "25px",
                              }}
                            />
                            {isLoading && <div>Loading...</div>}
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
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                            <label className="form_lable">DEPARTURE</label>

                            <input
                              type="date"
                              name="departure"
                              id="departure"
                              className="deaprture_input"
                              placeholder="Enter city or airport"
                            ></input>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                            <label className="form_lable">RETURN</label>
                            <input
                              type="date"
                              name="departure"
                              id="departure"
                              className="deaprture_input"
                              placeholder="Enter city or airport"
                              disabled
                            ></input>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                          <div>
                            <Button
                              variant="outlined"
                              sx={{
                                height: "80px",
                                color: "gray",
                                border: "2px solid gray",
                                borderRadius: "12px",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "left",
                              }}
                              onClick={handleTravelClickOpen}
                              className="Travel_Btn"
                            >
                              <div style={{ height: "25px" }}>
                                TRAVELLERS & CLASS{" "}
                                <KeyboardDoubleArrowDownIcon className="Down_Arrow" />{" "}
                              </div>
                              <div style={{ marginLeft: "-39px" }}>
                                <span
                                  style={{
                                    display: "flex",
                                    justifyContent: "start",
                                  }}
                                >
                                  <Typography
                                    fontWeight={800}
                                    fontSize={16}
                                    mr={2}
                                    variant="button"
                                  >
                                    Travellers
                                  </Typography>
                                  <Typography
                                    fontWeight={600}
                                    color="#d50000"
                                    variant="button"
                                  >
                                    {(totalCount == 0 && 1) || totalCount}
                                  </Typography>
                                </span>
                                <div style={{ fontSize: "11px" }}>
                                  {(activeIdClass == 1 && "All") ||
                                    (activeIdClass == 2 && "Economy") ||
                                    (activeIdClass == 3 && "Premium Economy") ||
                                    (activeIdClass == 4 && "Business")(
                                      activeIdClass == 5 && "Business Economy"
                                    )(activeIdClass == 6 && "First Class")}
                                </div>
                              </div>
                            </Button>
                            <Dialog
                            sx={{zIndex:'99999'}}
                              disableEscapeKeyDown
                              open={openTravelModal}
                              onClose={handleTravelClose}
                            >
                              <DialogContent>
                                <Box component="form">
                                  {/* form layout */}
                                  <div style={{ textAlign: "center" }}>
                                    TRAVELLERS & CLASS{" "}
                                  </div>
                                  <Grid
                                    display="flex"
                                    flexDirection="column"
                                    p={2}
                                    borderRadius="30px"
                                    justifyContent="center"
                                  >
                                    <Grid item textAlign="center" px={1}>
                                      <Typography
                                        textAlign="left"
                                        fontSize="15px"
                                      >
                                        Adults
                                        <span
                                          style={{
                                            fontSize: "10px",
                                            marginLeft: "7px",
                                          }}
                                        >
                                          (Age 12+ years)
                                        </span>
                                      </Typography>

                                      <ul className="Adult_Count">
                                        {adultCount?.map((adult) => (
                                          <li
                                            style={{
                                              backgroundColor:
                                                adult == activeIdAdult
                                                  ? "green"
                                                  : "white",
                                              color:
                                                adult == activeIdAdult
                                                  ? "white"
                                                  : "black",
                                            }}
                                            data-id={adult}
                                            onClick={handleAdultClick}
                                          >
                                            {adult}
                                          </li>
                                        ))}
                                      </ul>
                                    </Grid>
                                    <Grid item textAlign="center" mt={2} px={1}>
                                      <Typography
                                        textAlign="left"
                                        fontSize="15px"
                                      >
                                        Child
                                        <span
                                          style={{
                                            fontSize: "10px",
                                            marginLeft: "7px",
                                          }}
                                        >
                                          (Aged 2-12 years)
                                        </span>
                                      </Typography>

                                      <ul className="Adult_Count">
                                        {childCount?.map((child) => (
                                          <li
                                            style={{
                                              backgroundColor:
                                                child == activeIdChild
                                                  ? "green"
                                                  : "white",
                                              color:
                                                child == activeIdChild
                                                  ? "white"
                                                  : "black",
                                            }}
                                            data-id={child}
                                            onClick={handleChildClick}
                                          >
                                            {child}
                                          </li>
                                        ))}
                                      </ul>
                                    </Grid>
                                    <Grid item textAlign="center" mt={2} px={1}>
                                      <Typography
                                        textAlign="left"
                                        fontSize="15px"
                                      >
                                        Infants
                                        <span
                                          style={{
                                            fontSize: "10px",
                                            marginLeft: "7px",
                                          }}
                                        >
                                          (Below 2 years)
                                        </span>
                                      </Typography>

                                      <ul className="Adult_Count">
                                        {infantCount?.map((Infants) => (
                                          <li
                                            style={{
                                              backgroundColor:
                                                Infants == activeIdInfant
                                                  ? "green"
                                                  : "white",
                                              color:
                                                Infants == activeIdInfant
                                                  ? "white"
                                                  : "black",
                                            }}
                                            data-id={Infants}
                                            onClick={handleInfantClick}
                                          >
                                            {Infants}
                                          </li>
                                        ))}
                                      </ul>
                                    </Grid>
                                  </Grid>

                                  <Grid
                                    display="flex"
                                    style={{ margin: "7px 22px" }}
                                  >
                                    <Typography
                                      textAlign="left"
                                      fontSize="15px"
                                    >
                                      Choose Travel Class
                                    </Typography>
                                  </Grid>

                                  <Grid display="flex">
                                    <ul className="classButton">
                                      {ClassItems?.map((ele) => (
                                        <>
                                          <li
                                            style={{
                                              backgroundColor:
                                                ele.id == activeIdClass
                                                  ? "green"
                                                  : "orange",
                                            }}
                                            data-id={ele.id}
                                            onClick={handleClassItemClick}
                                          >
                                            {ele?.label}
                                          </li>
                                        </>
                                      ))}
                                    </ul>
                                  </Grid>
                                </Box>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleTravelClose}>
                                  Cancel
                                </Button>
                                <Button onClick={handleTravelClose}>Ok</Button>
                              </DialogActions>
                            </Dialog>
                          </div>
                        </div>

                        <Box>
                          <text>Select A Fare Type:</text>
                          <div class="wrapper ">
                            {/* Code changes */}
                            <ul className="fare_type">
                              {FareType?.map((fareType) => (
                                <li
                                  data-id={fareType.id}
                                  onClick={handleFareItemClick}
                                  style={{
                                    backgroundColor:
                                      fareType.id == activeFareType
                                        ? "green"
                                        : "orange",
                                  }}
                                >
                                  {fareType?.label}
                                </li>
                              ))}
                            </ul>

                            <text className="col-auto fare_search ">
                              <button type="submit" path="" className="search">
                                Search
                              </button>

                              {/* <button className='search' onClick={() => openInNewTab(<Searchresult />)}>
                                                        Search
                                                    </button> */}
                            </text>
                          </div>
                        </Box>
                      </div>
                    </form>
                  </Box>
                  {/* ==============> 2nd form here <============================== */}
                </TabPanel>

                {/* Oneway end */}

                {/* Round trip start */}

                <TabPanel value="2">
                  <Box
                    py={2}
                    sx={{ backgroundColor: "white", borderRadius: "20px" }}
                  >
                    {/*===========================> 3rd form here <========================== */}
                    <form onSubmit={handleRoundTripSubmit}>
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                          <div className="form_input">
                            <label for="from" className="form_lable">
                              FROM
                            </label>
                            <input
                              type="text"
                              placeholder="Enter City or airport"
                              name="from"
                              id=""
                              style={{
                                width: "100%",
                                borderRadius: "20px",
                                height: "5rem",
                                border: "3px solid #70707069",
                                paddingLeft: "25px",
                              }}
                            />
                          </div>
                        </div>
                        {/* <Avatar mt={5}>
                                                    <SwapHorizIcon />
                                                </Avatar> */}
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                          <div className="form_input">
                            <label for="to" className="form_lable">
                              TO
                            </label>
                            <input
                              type="text"
                              placeholder="Enter City or airport"
                              name="to"
                              id=""
                              style={{
                                width: "100%",
                                borderRadius: "20px",
                                height: "5rem",
                                border: "3px solid #70707069",
                                paddingLeft: "25px",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                            <label className="form_lable">DEPARTURE</label>
                            <input
                              type="date"
                              name="departure"
                              id="departure"
                              className="deaprture_input"
                            ></input>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                            <label className="form_lable">RETURN</label>
                            <input
                              type="date"
                              name="return"
                              id="return"
                              className="deaprture_input"
                            ></input>
                          </div>
                        </div>

                        {/* <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                            <label className="form_lable">
                              TRAVELLERS & CLASS{" "}
                            </label>
                            <div
                              name=""
                              id=""
                              style={{
                                width: "100%",
                                borderRadius: "20PX",
                                height: "5rem",
                                border: "3px solid #70707069",
                                textAlign: "center",
                                alignItems: "center",
                                display: "flex",
                                paddingLeft: "25px",
                              }}
                            >
                              <Typography>1 Adult Business</Typography>
                              <Classselect />
                            </div>
                          </div>
                        </div> */}
                        <Box display="flex" justifyContent="center">
                          <div class="wrapper">
                            <text>Select A Fare Type:</text>
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
                              <div class="dot"></div>
                              <text>Regular Fares</text>
                            </label>
                            <label for="option-2" class="option option-2">
                              <div class="dot"></div>
                              <text>Armed Forces Fares</text>
                            </label>
                            <label for="option-3" class="option option-3">
                              <div class="dot"></div>
                              <text>Student Fares</text>
                            </label>
                            <label for="option-4" class="option option-4">
                              <div class="dot"></div>
                              <text>Senior Citizen Fares</text>
                            </label>
                            <label for="option-5" class="option option-5">
                              <div class="dot"></div>
                              <text>Doctors & Nurses Fares</text>
                            </label>
                            <label for="option-6" class="option option-6">
                              <div class="dot"></div>
                              <text>Double Seat Fares</text>
                            </label>
                            <text className="col-auto fare_search ">
                              <button type="submit" path="" className="search">
                                Search
                              </button>

                              {/* <button className='search' onClick={() => openInNewTab(<Searchresult />)}>
                                                        Search
                                                    </button> */}
                            </text>
                          </div>
                        </Box>
                      </div>
                    </form>
                  </Box>
                  {/* ===================================> 4th form here <============================= */}
                </TabPanel>

                {/* Round trip end */}

                {/* Multicity start */}

                <TabPanel value="3">
                  <Box
                    py={2}
                    sx={{ backgroundColor: "white", borderRadius: "20px" }}
                  >
                    {/* ======================> 5th form here <============================ */}
                    <form action="/Searchresult">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                          <div className="form_input">
                            <label for="from" className="form_lable">
                              FROM
                            </label>
                            <input
                              type="text"
                              placeholder="Enter City or airport"
                              name=""
                              id=""
                              style={{
                                width: "100%",
                                borderRadius: "20px",
                                height: "5rem",
                                border: "3px solid #70707069",
                                paddingLeft: "25px",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                          <div className="form_input">
                            <label for="to" className="form_lable">
                              TO
                            </label>
                            <input
                              type="text"
                              placeholder="Enter City or airport"
                              name=""
                              id=""
                              style={{
                                width: "100%",
                                borderRadius: "20px",
                                height: "5rem",
                                border: "3px solid #70707069",
                                paddingLeft: "25px",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                            <label for="departure" className="form_lable">
                              DEPARTURE
                            </label>

                            <input
                              type="date"
                              name="departure"
                              id="departure"
                              className="deaprture_input"
                              placeholder="Enter city or airport"
                            ></input>
                          </div>
                        </div>

                        {/* <div className="col-12 col-md-6 col-lg-2 mb-3">
                                                    <div className="form_input">
                                                        <label className="form_lable">RETURN</label>
                                                        <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport">

                                                        </input>
                                                    </div>
                                                </div> */}

                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                          {/* <div className="form_input">
                            <label className="form_lable">
                              TRAVELLERS & CLASS{" "}
                            </label>

                            <div
                              name=""
                              id=""
                              style={{
                                width: "100%",
                                borderRadius: "20PX",
                                height: "5rem",
                                border: "3px solid #70707069",
                                textAlign: "center",
                                alignItems: "center",
                                display: "flex",
                                paddingLeft: "25px",
                              }}
                            >
                              <Typography>1 Adult Business</Typography>
                              <Classselect />
                            </div>
                          </div> */}

                          {/* Travel data modal code */}
                          <div>
                            <Button onClick={handleTravelClickOpen}>
                              Open select dialog
                            </Button>
                            <Dialog
                              disableEscapeKeyDown
                              open={openTravelModal}
                              onClose={handleTravelClose}
                            >
                              <DialogTitle>Fill the form</DialogTitle>
                              <DialogContent></DialogContent>
                              <DialogActions>
                                <Button onClick={handleTravelClose}>
                                  Cancel
                                </Button>
                                <Button onClick={handleTravelClose}>Ok</Button>
                              </DialogActions>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Box>
                  <Box sx={{ backgroundColor: "white", borderRadius: "20px" }}>
                    <Addanothercity />
                  </Box>
                  {/* ==============================> 6th form here <================================= */}
                  <form action="/Searchresult">
                    <Box display="flex" justifyContent="center">
                      <div class="wrapper">
                        <text className="col-auto fare_search ">
                          <button type="submit" path="" className="search">
                            {" "}
                            Search
                          </button>

                          {/* <button className='search' onClick={() => openInNewTab(<Searchresult />)}>
                                                        Search
                                                    </button> */}
                        </text>
                      </div>
                    </Box>
                  </form>
                </TabPanel>

                {/* Multicity end */}
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeform;
