import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// hotel tabs
import LinearProgress from '@mui/material/LinearProgress';
import { Grid, Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { apiURL } from '../../Constants/constant';
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// bootstrap
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { clearHotelReducer, hotelAction } from "../../Redux/Hotel/hotel";
import LoginForm from "../../components/Login";

const Homeform = (props) => {
  const initialvalue = {
    City: "",
    nationality: "",
    room: "",
    adult: "",
  };
  const [values, setValues] = React.useState(initialvalue);
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("State Data", reducerState);

  const errorCode =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
      ?.Error?.ErrorCode;
  const errorMsg =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
      ?.Error?.ErrorMessage;

  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = React.useState(false);
  const [date, setDate] = React.useState("");
  const [oldDate, setOldDate] = React.useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [from, setFrom] = useState("");
  const [fromQuery, setFromQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fromSearchResults, setFromSearchResults] = useState([]);
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [displayFrom, setdisplayFrom] = useState(true);
  const [display, setDisplay] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authenticUser = reducerState?.logIn?.isLogin
  
  const changeHandler = (e) => {
    if (e.target.value === "number") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    dispatch(clearHotelReducer());
  }, [dispatch]);

  useEffect(() => {
    if (reducerState?.hotelSearchResult?.isLoading == true) {
      setLoader(true);
    }
  }, [reducerState?.hotelSearchResult?.isLoading]);

    useEffect(() => {
      let mounted = true;

      const fetchSearchResults = async () => {
        setIsLoading(true);

        // make an API call to get search results

        const results = await axios.post(
          `${apiURL.baseURL}/travvolt/city/hotelCitySearch?keyword=${fromQuery}`
        );
        if (mounted) {
          console.log("Result", results);
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
    setFrom(result.cityid);
    setDisplay(result.Destination);
    setSelectedFrom(result);
    setdisplayFrom(false);
  };

  const handleFromInputChange = (event) => {
    setdisplayFrom(true);
    setFrom(event.target.value);
    setDisplay(event.target.value);
    setSelectedFrom(null);
  };

  const handleFromSearch = (e) => {
    console.error(e);
    setFromQuery(e);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (
      values.City.length < 1 ||
      values.nationality.length < 1 ||
      values.room.length < 1 ||
      values.adult.length < 1
    ) {
      setError(true);
    }
    const formData = new FormData(event.target);
    // Convert input date to desired format
    const date = new Date(formData.get("departure"));
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    const childCount = formData.get("child")
    const adultCount = formData.get("adult")
    const nightCount = formData.get("night")
    const roomCount = formData.get("room")
    console.log("authenticUser",authenticUser);
    
      const payload = {
        CheckInDate: formattedDate,
        NoOfNights: formData.get("night"),
        CountryCode: "IN",
        CityId: from,
        ResultCount: null,
        PreferredCurrency: "INR",
        GuestNationality: "IN", //formData.get("nationality"),
        NoOfRooms: formData.get("room"),
        RoomGuests: [
          {
            NoOfAdults: formData.get("adult"),
            NoOfChild: "0",
            ChildAge: null,
          },
        ],
        MaxRating: formData.get("star"),
        MinRating: 0,
        ReviewScore: null,
        IsNearBySearchAllowed: false,
        EndUserIp: reducerState?.ip?.ipData,
        TokenId: reducerState?.ip?.tokenData,
      };
  
      console.log("payload", payload);
  
      const totalGuest = `${
        parseInt(formData.get("adult")) + parseInt(formData.get("child"))
      }`;
    sessionStorage.setItem("totalGuest", totalGuest);

  // Dispatch of hotel search
      dispatch(hotelAction(payload));
    
 

    sessionStorage.setItem("child Count", childCount );
    sessionStorage.setItem("adult Count", adultCount );
    sessionStorage.setItem("night Count", nightCount );
    sessionStorage.setItem("room Count", roomCount );
console.error("authenticUser✌️",authenticUser)
    if(authenticUser){
      navigate(`HotelDetails?adult=${adultCount}&child=${childCount}`);
    }else{
      setIsModalOpen(true)
    }

    if (
      reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
        ?.ticketData?.data?.data
    ) {
      setOpen(false);
      
    }
    setOpen(true);
  }


  function disablePastDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }

  function disablePastDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }
  const disableNexttDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  // checkin checkout function

  const handlechnage = (e) => {
    const time = e.target.value;
    console.log("time is", time);
    setDate(time);
    // setOldDate(time)
  };

  const handlechnageone = (e) => {
    const time = e.target.value;
    console.log("time is", time);
    setOldDate(time);
  };

  // const[year,month,day]=oldDate.split('-');
  const currentDate = new Date(date);
  const toDate = new Date(oldDate);
  const list = toDate - currentDate;
  const nightdays = list / 86400000;
  const fromSearchRef = React.useRef(null);
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

  return (
    <>
    {
      console.log("isModalOpen",isModalOpen)
    }
    {
          isModalOpen && <LoginForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    }
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
                      label="India"
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
                      label="International"
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
                  </TabList>
                </Box>
                {/* India start */}

                <TabPanel value="1">
                  <Box
                    py={2}
                    sx={{ backgroundColor: "white", borderRadius: "20px" }}
                  >
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3} py={2}>
                        <Grid item md={4} sm={12} xs={12}>
                          <Box px={1}>
                            <div className="nhotel_form_input">
                            <div className="form_input">
                              <label className="form_lable">City</label>
                             
                               <input
                              name="from"
                              placeholder="Enter City Name"
                              value={display}
                              autoComplete="off"
                              onChange={(event) => {
                                handleFromInputChange(event);
                                handleFromSearch(event.target.value);
                              }}
                              required
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "3.3rem",
                                border: "3px solid #70707069",
                                paddingLeft: "25px",
                              }}
                            />
                            
                              {isLoading && 
                              <Box sx={{ width: '100%' }}>
                              <LinearProgress color="inherit"/>
                            </Box>
                              }
                             
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
                                           
                                              <strong>
                                              {result.Destination}
                                            </strong>{" "}
                                            {result.country}
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
                          </Box>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12} display="flex">
                          <Box paddingRight={1}>
                            <div className="hotel_form_input">
                              <label className="form_lable">Check In</label>
                              <input
                                type="Date"
                                name="departure"
                                id="departure"
                                className="deaprture_input"
                                value={values.departure}
                                onChange={handlechnage}
                                min={disablePastDate()}
                              />
                            </div>
                          </Box>

                          <Box px={1}>
                            <div className="hotel_form_input">
                              <label className="form_lable">Check-Out</label>
                              <input
                                type="date"
                                name="checkOutDeparture"
                                id="departure"
                                className="deaprture_input"
                                value={oldDate}
                                onChange={handlechnageone}
                                min={disableNexttDate()}
                                placeholder="Night"
                              />
                            </div>
                          </Box>
                          <Box px={1}>
                            <div className="hotel_form_input">
                              <label for="departure" className="form_lable">
                                Nights
                              </label>
                              <input
                                type="number"
                                min="0"
                                name="night"
                                value={nightdays}
                              />
                            </div>
                          </Box>
                         
                        </Grid>
                      </Grid>
                     
                      <Grid container spacing={5} py={2}>
                        <Grid item md={6} sm={12} xs={12} display="flex">
                          <Box paddingRight={1}>
                            <div className="hotel_form_input">
                              <label className="form_lable">Room*</label>
                              <select
                                name="room"
                                value={values.room}
                                onChange={handleInputChange}
                                className="hotel_input_select"
                              >
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                              </select>
                              {error && values.room.length < 1 ? (
                                <label
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    textAlign: "left",
                                  }}
                                >
                                  Please Select this Field{" "}
                                </label>
                              ) : (
                                ""
                              )}
                            </div>
                          </Box>
                          <Box px={1}>
                            <div className="hotel_form_input">
                              <label className="form_lable">
                                Nationality(Country Code)*
                              </label>
                              <input
                                type="text"
                                name="nationality"
                                value={values.nationality}
                                onChange={handleInputChange}
                                placeholder="India"
                              />
                              {error && values.nationality.length < 1 ? (
                                <label
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    textAlign: "left",
                                  }}
                                >
                                  Please Enter this Field{" "}
                                </label>
                              ) : (
                                ""
                              )}
                            </div>
                          </Box>
                          <Box px={1}>
                            <div className="hotel_form_input">
                              <label className="form_lable">Adult*</label>
                              <select
                                name="adult"
                                value={values.adult}
                                onChange={handleInputChange}
                                className="hotel_input_select"
                              >
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                              </select>
                              {error && values.adult.length < 1 ? (
                                <label
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    textAlign: "left",
                                  }}
                                >
                                  Please Select this Field{" "}
                                </label>
                              ) : (
                                ""
                              )}
                            </div>
                          </Box>
                          {/* <Box px={1}>
                            <div className="hotel_form_input">
                              <label className="form_lable">
                                Child (2-12)*
                              </label>
                              <select
                                name="child"
                                value={values.child}
                                onChange={changeHandler}
                                className="hotel_input_select"
                              >
                                <option>0</option>
                                <option value="number">1</option>
                                <option value="number">2</option>
                                <option value="number">3</option>
                                <option value="number">4</option>
                              </select>
                            </div>
                          </Box>
                          {isVisible ? (
                            <Box px={1}>
                              <div className="hotel_form_input">
                                <label className="form_lable">Child Age</label>

                                <input
                                  name="age"
                                  placeholder="Enter your Child Age"
                                  type="text"
                                />
                              </div>
                            </Box>
                          ) : null} */}
                        </Grid>
                      </Grid>
                      <Grid container spacing={5} py={2}>
                        <Grid item md={6} sm={12} xs={12} display="flex">
                          <Box paddingRight={1}>
                            <div className="hotel_form_input">
                              <label className="form_lable">Star Rating*</label>
                              <select
                                name="star"
                                value={values.star}
                                onChange={handleInputChange}
                                className="hotel_input_select"
                              >
                                <option value="1">1 Star</option>
                                <option value="2">2 Star</option>
                                <option value="3">3 Star</option>
                                <option value="4">4 Star</option>
                                <option value="5">5 Star</option>
                              </select>
                              <div></div>
                            </div>
                          </Box>
                        </Grid>
                      </Grid>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          type="submit"
                          color="primary"
                          sx={{ background: "#00BDC4", borderRadius: "10px" }}
                          variant="contained"
                        >
                          Hotel Search
                        </Button>
                      </div>
                    </form>
                  </Box>
                 </TabPanel>

                {/* India end */}

                {/* Round trip start */}

                <TabPanel value="2">
                  <Box
                    py={2}
                    sx={{ backgroundColor: "white", borderRadius: "20px" }}
                  >
                    <form action="">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                          <div className="form_input">
                            <label for="from" className="form_lable">
                              Country, Property Name Or Location
                            </label>
                            <select
                              name=""
                              id=""
                              style={{
                                width: "100%",
                                borderRadius: "20PX",
                                height: "5rem",
                                border: "3px solid #70707069",
                                paddingLeft: "25px",
                              }}
                            >
                              <option mx={5}>Enter Country or airport </option>
                              <option
                                sx={{ fontSize: "9px", fontWeight: "bold" }}
                              >
                                hello1
                              </option>
                              <option>hello2</option>
                              <option>hello3</option>
                              <option mx={5}>hello4</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                            <label for="departure" className="form_lable">
                              CHECK-IN
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

                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                            <label className="form_lable">CHECK-OUT</label>
                            <input
                              type="date"
                              name="departure"
                              id="departure"
                              className="deaprture_input"
                              placeholder="Enter city or airport"
                            ></input>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                          <div className="form_input">
                            <label for="to" className="form_lable">
                              Room & Guest
                            </label>
                            <input type="text" placeholder="1 Room 2 Adults" />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                            <label className="form_lable">
                              Price Per Night
                            </label>

                            <select
                              name=""
                              id=""
                              style={{
                                width: "100%",
                                borderRadius: "20PX",
                                height: "5rem",
                                border: "3px solid #70707069",
                                paddingLeft: "25px",
                              }}
                            >
                              <option mx={5}>₹0 - ₹1500</option>
                              <option>₹0 - ₹1500</option>
                              <option>₹0 - ₹1500</option>
                              <option>₹0 - ₹1500</option>
                              <option mx={5}>₹0 - ₹1500</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Box>
                  <form action="/HotelDetails">
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
                  </form>
                </TabPanel>

                {/* Round trip end */}
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default Homeform;
