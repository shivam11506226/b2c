import React, { useEffect, useState, useRef } from "react";
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
// import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import "./hotelhome.css"
import h1 from "../../../src/images/hotel-img/h1.png"
import h2 from "../../../src/images/hotel-img/h2.png"
import h3 from "../../../src/images/hotel-img/h3.png"
import o1 from "../../../src/images/hotel-img/O1.png"
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,

// }));
import { styled } from '@mui/material/styles'

const StyledStaticDatePicker = styled(StaticDatePicker)({
  '.MuiPickersToolbar-root': {
    color: '#bbdefb',
    borderRadius: 3,
    borderWidth: 0,
    borderColor: '#2196f3',
    border: '0px solid',
    backgroundColor: '#0d47a1',
    width: '300px !important',
  }
})


const Homeform = (props) => {
  const initialvalue = {
    City: "",
    nationality: "",
    room: "",
    adult: "",
  };
  const [values, setValues] = React.useState(initialvalue);
  console.warn(values, "child value")
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
  const [date, setDate] = React.useState("2023-11-22");
  const [oldDate, setOldDate] = React.useState("2023-11-22");
  const [isVisible, setIsVisible] = useState(false);
  const [from, setFrom] = useState("");
  const [fromQuery, setFromQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingState, setIsLoadingState] = useState(0);
  const [fromSearchResults, setFromSearchResults] = useState([]);
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [displayFrom, setdisplayFrom] = useState(true);
  const [display, setDisplay] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authenticUser = reducerState?.logIn?.isLogin
  const [offersToggle, setOffersToggle] = useState(1)
  const [offersToggle1, setOffersToggle1] = useState(0)
  const [star,setStar]=useState(5)

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
        `${apiURL.baseURL}/skytrails/city/hotelCitySearch?keyword=${fromQuery}`
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
  function getMonthDayInEnglish(dateString) {
    // Parse the input date string
    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    // Create a Date object
    const date = new Date(year, month - 1, day);

    // Get the month and day names
    const monthNames = [
      'JAN', 'FEB', 'MAR', 'APR', 'MRY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // const d = new Date();
    let day1 = weekday[date.getDay()];
    const monthName = monthNames[date.getMonth()];
    const dayName = date.getDate();

    // Return the result
    return `${monthName} ${day1}`;
  }
  const [MonthDayInEnglish1, setMonthDayInEnglish1] = useState("NOV Saturday")
  const [MonthDayInEnglish2, setMonthDayInEnglish2] = useState("NOV Saturday")

  function handleSubmit(event) {
    console.log(nightdays, "44444444444444s4s4s4444444444444444444444444444")

    event.preventDefault();

    // console.log("2222222222222222222222222222222222222222222222222222222222222222222222222222222222222")
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
    // const childCount = formData.get("child")
    // const adultCount = formData.get("adult")
    // const nightCount = formData.get("night")
    // const roomCount = formData.get("room")
    const childCount = values.child
    const adultCount = values.adult
    const nightCount = values.nightdays
    const roomCount = values.room
    console.log("authenticUser", authenticUser);

    // const payload = {
    //   CheckInDate: formattedDate,
    //   NoOfNights: nightdays,
    //   CountryCode: "IN",
    //   CityId: from,
    //   ResultCount: null,
    //   PreferredCurrency: "INR",
    //   GuestNationality: "IN", //formData.get("nationality"),
    //   NoOfRooms: formData.get("room"),
    //   RoomGuests: [
    //     {
    //       NoOfAdults: values.adult,
    //       // NoOfChild: values.child,
    //       NoOfChild: "0",
    //       ChildAge: null,
    //     },
    //   ],
    //   // MaxRating: formData.get("star"),
    //   MaxRating: 5,
    //   MinRating: 0,
    //   ReviewScore: null,
    //   IsNearBySearchAllowed: false,
    //   EndUserIp: reducerState?.ip?.ipData,
    //   TokenId: reducerState?.ip?.tokenData,
    // };
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

    // const totalGuest = `${parseInt(formData.get("adult")) + parseInt(formData.get("child"))
    const totalGuest = `${parseInt(values.adult) + parseInt(values.child)
      }`;
    sessionStorage.setItem("totalGuest", totalGuest);

    // Dispatch of hotel search
    dispatch(hotelAction(payload));



    sessionStorage.setItem("child Count", childCount);
    sessionStorage.setItem("adult Count", adultCount);
    sessionStorage.setItem("night Count", nightCount);
    sessionStorage.setItem("room Count", roomCount);
    console.error("authenticUser✌️", authenticUser)
    if (authenticUser) {
      navigate(`HotelDetails?adult=${adultCount}&child=${childCount}`);
    } else {
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
  console.warn(values, "child count")
  async function handleMonthDayInEnglish1(e) {
    // await setDate(e.target.value)
    await setDate(`${e.$y}-${e.$M + 1}-${e.$D}`)
    const new1 = await getMonthDayInEnglish(date)
    await setMonthDayInEnglish1(new1)
    console.log(e, date, new1, "////////////////////////////////////////////////////////////////////////")
    // setDate({ e }); // Update the departure date


  }
  async function handleMonthDayInEnglish2(e) {
    // await setOldDate(e.target.value)
    await setOldDate(`${e.$y}-${e.$M + 1}-${e.$D}`)
    const new1 = await getMonthDayInEnglish(oldDate)
    await setMonthDayInEnglish2(new1)
    console.log(new1, "////////////////////////////////////////////////////////////////////////")

  }
  const handleOpen1 = () => {
    const input = document.getElementById('departure1');

    input.click();
  };
  const handleOpen2 = () => {
    const input = document.getElementById('departure2');

    input.click();
  };
  const renderChildrenAges = () => {
    const childrenAges = [];

    for (let i = 1; i <= values.child; i++) {
      // You can modify this logic based on how you want to calculate or obtain the ages
      const age = Math.floor(Math.random() * 18) + 1; // Random age between 1 and 18
      childrenAges.push(<div key={i} className="child_input_box">Child {i}<select
        name="room"
      // value={values.room}
      // onChange={handleInputChange}
      >

        <option value={1}>1 yrs</option>
        <option value={2}>2 yrs</option>
        <option value={3}>3 yrs</option>
        <option value={4}>4 yrs</option>
        <option value={5}>5 yrs</option>
        <option value={6}>6 yrs</option>
        <option value={7}>7 yrs</option>
        <option value={8}>8 yrs</option>
        <option value={9}>8 yrs</option>
        <option value={10}>10 yrs</option>
        <option value={11}>11 yrs</option>
        <option value={12}>12 yrs</option>

      </select>


      </div>);
    }

    return childrenAges;
  };

  return (
    <>
      {
        console.log("isModalOpen", isModalOpen)
      }
      {
        isModalOpen && <LoginForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      }
      <section>
        <div className="container homeform_container 
         try">

          {/* <p className="header_row">
          <h5>{props.header}</h5>
        </p> */}
          <form onSubmit={handleSubmit}>
            <div className="heroBanner">
              <Grid container id="grid" columnSpacing={{ xs: 3, sm: 2, md: 0 }}
                rowSpacing={{ xs: 3, sm: 2, md: 0 }}
                justifyContent="space-between"

              >
                <Grid item xs={12} sm={5.5} md={4}

                  id="hero1" className="hero" onMouseEnter={() => {
                    setIsLoading(true)

                    setIsLoadingState(1)
                  }}
                  onMouseLeave={() => {
                    setIsLoading(false)
                    setIsLoadingState(0)
                  }}>
                  <div className="city1" >
                    <h4 >City, Property Name Or Location</h4>
                    <h1 >City</h1>
                    <p  >Country</p>
                  </div>
                  {isLoading && isLoadingState === 1 &&
                    <div className="loading1">
                      <div className="loading_input_container">

                        <CiSearch />
                        <input
                          name="from"
                          placeholder="Where do you want to stay?"
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
                            // border: "3px solid #70707069",
                            paddingLeft: "25px",
                          }}
                        />
                      </div>

                      {isLoading &&
                        <Box sx={{ width: '100%' }}>
                          <LinearProgress color="inherit" />
                        </Box>
                      }

                      {fromSearchResults &&
                        fromSearchResults.length > 0 && (
                          <div
                            ref={fromSearchRef}
                            className="loading_input_container_main_div"
                            style={{
                              backgroundColor: "white",
                              borderRadius: "10px",
                              zIndex: 1999900,
                              width: "100% !important",
                              boxShadow:
                                "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                              textAlign: "left",
                              cursor: "pointer",
                              background: '#fff',
                              display: displayFrom ? "block" : "none",
                            }}
                          >
                            <ul
                              className="loading_input_container_search"
                            >
                              <Box
                              // sx={{
                              //   mb: 1,
                              //   mt: 1,
                              //   display: "flex",
                              //   flexDirection: "column",
                              //   maxHeight: 160,
                              //   overflow: "hidden",
                              //   overflowY: "scroll",
                              //   width: "100% !important",
                              // }}
                              // className="scroll_style"
                              >
                                {fromSearchResults.map((result) => (

                                  <li
                                    className="to_List1"
                                    key={result._id}
                                    onClick={() =>
                                      handleFromClick(result)
                                    }
                                  >
                                    <div >

                                      <span
                                      // className="to_List_container"
                                      >
                                        <CiLocationOn size="24px"
                                          color="#071C2C" />

                                        <strong>
                                          {result.Destination}
                                        </strong>
                                        {" "}
                                        {result.country}
                                        {/* <strong
                                          className="to_airport_code"
                                          style={{
                                            color: "gray",
                                            fontSize: "12px",
                                          }}
                                        >
                                          {result.AirportCode}
                                        </strong> */}
                                      </span>
                                      {/* <span
                                        style={{
                                          fontSize: "13px",
                                          display: "flex",
                                          justifyContent: "center",
                                        }}
                                      >
                                        {result.code}
                                      </span> */}
                                    </div>
                                  </li>
                                ))}
                              </Box>
                            </ul>
                          </div>
                        )}
                    </div>}
                </Grid>
                <Grid item xs={12} sm={5.5} md={2} id="hero2" className="hero" onMouseEnter={() => {
                  setIsLoading(true)

                  setIsLoadingState(2)
                  // handleOpen1()
                }}
                  onMouseLeave={() => {
                    setIsLoading(false)
                    setIsLoadingState(0)
                  }} >
                  <div className="hero_date" >
                    <div>

                      <h4 >Check-In</h4>

                    </div>
                    <h1 variant="h1" sx={{

                    }} > {date.slice(8, 10)} </h1>
                    <span>{MonthDayInEnglish1.slice(0, 3)} {date.slice(2, 4)}</span>
                    <p variant="p" sx={{

                    }}  >{MonthDayInEnglish1.slice(4)} </p>
                    {/* <h1>{date}</h1> */}
                  </div>
                  <div
                    className="loading1"
                  >
                    {isLoading && isLoadingState === 2 && <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={[
                          'DatePicker',
                          'MobileDatePicker',
                          'DesktopDatePicker',
                          'StaticDatePicker',
                        ]}
                      >


                        <StaticDatePicker sx={{
                          '.MuiPickersToolbar-root': {
                            color: '#bbdefb',
                            borderRadius: 3,
                            borderWidth: 0,
                            borderColor: '#2196f3',
                            border: '0px solid',
                            backgroundColor: '#0d47a1',

                          },
                        }}
                          defaultValue={dayjs(date)}
                          selected={dayjs(date)}
                          onChange={handleMonthDayInEnglish1}
                        // min={disablePastDate()}
                        // minDate={new Date()} 
                        />

                      </DemoContainer>
                    </LocalizationProvider>}
                    {/* {isLoading && isLoadingState === 2 && <input
                      type="Date"
                      name="departure"
                      id="departure1"
                      className="deaprture_input"
                      value={date}
                      onChange={handleMonthDayInEnglish1}
                      min={disablePastDate()}

                    />} */}
                  </div>
                </Grid>
                <Grid item xs={12} sm={5.5} md={2} id="hero3" className="hero" onMouseEnter={() => {
                  setIsLoading(true)

                  setIsLoadingState(3)
                  handleOpen2()
                }}
                  onMouseLeave={() => {
                    setIsLoading(false)
                    setIsLoadingState(0)
                  }}>
                  <div  >
                    <div>

                      <h4 >Check-Out</h4>

                    </div>
                    <h1 sx={{

                    }} >
                      {oldDate.slice(8, 10)}
                      {/* {oldDate}  */}
                    </h1><span>{MonthDayInEnglish2.slice(0, 3)} {oldDate.slice(2, 4)}</span>
                    <p variant="p" sx={{

                    }}  >{MonthDayInEnglish2.slice(4)}</p>
                  </div>
                  {isLoading && isLoadingState === 3 && <div className="loading1">

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={[
                          'DatePicker',
                          'MobileDatePicker',
                          'DesktopDatePicker',
                          'StaticDatePicker',
                        ]}
                      >


                        <StaticDatePicker sx={{
                          '.MuiPickersToolbar-root': {
                            color: '#bbdefb',
                            borderRadius: 3,
                            borderWidth: 0,
                            borderColor: '#2196f3',
                            border: '0px solid',
                            backgroundColor: '#0d47a1',

                          },
                        }}
                          defaultValue={dayjs(oldDate)}
                          selected={dayjs(oldDate)}
                          onChange={handleMonthDayInEnglish2}


                        />

                      </DemoContainer>
                    </LocalizationProvider>
                    {/* <input
                      type="date"
                      name="checkOutDeparture"
                      id="departure2"
                      className="deaprture_input"
                      value={oldDate}
                      onChange={handleMonthDayInEnglish2}
                      min={disableNexttDate()}
                      placeholder="Night"
                      autofocus

                    /> */}
                  </div>}
                </Grid>

                <Grid item xs={12} sm={5.5} md={2} id="hero4" className="hero" onMouseEnter={() => {
                  setIsLoading(true)

                  setIsLoadingState(4)
                }}
                  onMouseLeave={() => {
                    setIsLoading(false)
                    setIsLoadingState(0)
                  }}>
                  <div >

                    <div>
                      <h4 >Rooms & Guests</h4>
                    </div>
                    <div className="rooms" >
                      <div>

                        <h4>{values.room}</h4>
                        <p>Room</p>
                      </div>
                      <div>

                        <h4>{values.adult}</h4>
                        <p> Adults</p>
                      </div>
                      <div>

                        <h4>{values.child}</h4>
                        <p> child</p>
                      </div>
                    </div>

                  </div>
                  {isLoading && isLoadingState === 4 && <div className="loading1 rooms1 ">
                    <div >
                      <h1>
                        Rooms
                      </h1>
                      <select
                        name="room"
                        value={values.room}
                        onChange={handleInputChange}>

                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>

                      </select>
                    </div>
                    <div >
                      <h1>
                        Adults
                      </h1>
                      <select
                        name="adult"
                        value={values.adult}
                        onChange={handleInputChange}
                      >

                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>

                      </select>
                    </div>
                    <div >
                      <h1>
                        Children
                        <p className="age-12"> 0-12 Years</p>
                      </h1>
                      <select
                        name="child"
                        value={values.child}
                        onChange={handleInputChange}
                      >
                        <option value='0'>0 </option>
                        <option value='1'>1 </option>
                        <option value='2'>2 </option>
                        <option value='3'>3 </option>
                        <option value='4'>4 </option>
                        <option value='5'>5 </option>
                        <option value='6'>6 </option>
                        <option value='7'>7 </option>
                        <option value='8'>8 </option>
                        <option value='9'>9 </option>
                        <option value='10'>10 </option>
                        <option value='11'>11 </option>
                        <option value='12'>12 </option>

                      </select>
                    </div>
                    <div>
                      <p>
                        Please provide right number of children along with their right age for best options and prices.
                      </p>
                    </div>
                    {values.child != 0 &&
                      <div className="child">
                        <div>
                          <h1 >
                            Age of Children
                          </h1>
                        </div>
                        <div className="child1">
                          {renderChildrenAges()}

                        </div>
                        <div className="btn-apply-div">
                          <button id="btn-apply">
                            APPLY
                          </button>
                        </div>
                      </div>
                    }

                  </div>}

                </Grid>
                <Grid item xs={12} sm={5.5} md={2} id="hero5" className="hero" onMouseEnter={() => {
                  setIsLoading(true)

                  setIsLoadingState(5)
                }}
                  onMouseLeave={() => {
                    setIsLoading(false)
                    setIsLoadingState(0)
                  }}>
                  <div >

                    <div>
                      <h4>Price Per Rating</h4>
                    </div>
                    <div className="rooms" >
                      <h4> Star</h4>

                    </div>

                  </div>
                  {isLoading && isLoadingState === 5 && <div className="loading1 ">
                    <select
                      name="room"
                      // value={star}
                      // onChange={handleInputChangeStar}
                      >
                      <option value={1}>1 Star</option>
                      <option value={2}>2 Star</option>
                      <option value={3}>3 Star</option>
                      <option value={4}>4 Star</option>



                    </select>
                  </div>}
                </Grid>
              </Grid>
              <div className="Trending">
                <div className="Tranding1" >
                  <div className="Tranding2">

                    <h1>Trending Searches:</h1>
                  </div>
                  <div className="Trending3">

                    <h1>Singapore, Singapore</h1>
                  </div>
                  <div className="Trending3">

                    <h1>Dubai, United Arab Emirates</h1>
                  </div>
                  <div className="Trending3">

                    <h1>Mumbai, India</h1>
                  </div>

                </div>
                <div>
                  <Button id="btn-ht-search"
                    type="submit"
                  // onClick={()=>console.log(values,"%%%%%%%%%%%5")}

                  >
                    Search
                  </Button>
                </div>

              </div>
            </div>
          </form>
          <div className="Value-stays ">
            <div className="Value-main">
              <div className="Value-left">
                <h1 className="value-h1">Value Stays</h1>
                <p>Top Rated Affordable Properties</p>
                <div>

                  <p>Know more</p>
                </div>
              </div>
              <div className="Value-right">
                <div >
                  <h4>100% Money Back Guarantee*</h4>
                </div>
                <div>
                  <h4>Hassle-Free Check-In</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_banner_Img">
            <div className="hero_banner_Img-left">
              <h1 className="gradient-text">Skytrails</h1>
              <h4 className="gradient-text">Lavish Collection</h4>
              <p>Unparalleled opulence, world-class amenities, tailored for you.</p>
            </div>
            <div className="bannger-img-container">
              <div><img className="bannger-img" src={h1} alt="" srcset="" />
                <div>

                  <h4>Lavish properties in India</h4>
                  <p>Explore by Luxury brands, themes & top picks</p>
                </div>
              </div>
              <div><img className="bannger-img" src={h2} alt="" srcset="" />
                <div>

                  <h4>Lavish properties in India</h4>
                  <p>Explore by Luxury brands, themes & top picks</p>
                </div>
              </div>
              <div><img className="bannger-img" src={h3} alt="" srcset="" />
                <div>

                  <h4>Lavish properties in India</h4>
                  <p>Explore by Luxury brands, themes & top picks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="LOREM">
            <h1>LOREM IPSUM</h1>
          </div>
          <div className="OFFERS">
            <div className="OFFERS1">

              <div className="OFFERS2">


                <div className="OFFERS3">

                  <h1 >OFFERS</h1>

                </div>

                <div className="OFFERS4">


                  <div className="OFFERS5">
                    <div onClick={() => setOffersToggle(1)} className={offersToggle === 1 ? " OFFERS_Active" : ""}>
                      <h1 className={offersToggle === 1 ? "OFFERS_Active_h1" : ""} >

                        ON 1st BOOKING
                      </h1>
                    </div>
                    <div onClick={() => setOffersToggle(2)} className={offersToggle === 2 ? " OFFERS_Active" : ""} >
                      <h1 className={offersToggle === 2 ? "OFFERS_Active_h1" : ""} >

                        Hotels
                      </h1>
                    </div>
                    <div onClick={() => setOffersToggle(3)} className={offersToggle === 3 ? " OFFERS_Active" : ""} >
                      <h1 className={offersToggle === 3 ? "OFFERS_Active_h1" : ""} >

                        All Offers
                      </h1>
                    </div>
                    <div onClick={() => setOffersToggle(4)} className={offersToggle === 4 ? " OFFERS_Active" : ""} >
                      <h1 className={offersToggle === 4 ? "OFFERS_Active_h1" : ""} >

                        Flights
                      </h1>
                    </div>
                    <div onClick={() => setOffersToggle(5)} className={offersToggle === 5 ? " OFFERS_Active" : ""} >
                      <h1 className={offersToggle === 5 ? "OFFERS_Active_h1" : ""} >

                        Holidays
                      </h1>
                    </div>

                    <div onClick={() => setOffersToggle(6)} className={offersToggle === 6 ? " OFFERS_Active" : ""} >
                      <h1 className={offersToggle === 6 ? "OFFERS_Active_h1" : ""} >

                        Bank Offers
                      </h1>
                    </div>

                  </div>
                </div>
              </div>
              <div className="offers_inner">
                <div className="offers_inner-left">
                  <div>
                    <div><img src={o1} alt="" className="offer_img" /></div>
                    <div>
                      <p>Use Code: WELCOMESKY</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <h4>
                          For Your 1st Holiday Booking!
                        </h4>
                      </div>
                      <div>
                        <p>
                          Up to 30% OFF*
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4>VIEW DETAILS</h4>
                    </div>
                  </div>
                </div>
                <div className="offers_inner-right">


                  <div className="offers_inner-right1">
                    <div>
                      <h4>
                        VIEW ALL
                      </h4>
                    </div>
                    <div>
                      <h1>
                        OFFERS
                      </h1>
                    </div>
                    <div>

                      <button className="offer-btn">
                        Click here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div >
                <div className="chanege"  >
                  <div onClick={() => setOffersToggle1(0)} className={offersToggle1 === 0 ? " chanege_active" : ""} />
                  <div onClick={() => setOffersToggle1(1)} className={offersToggle1 === 1 ? " chanege_active" : ""} />
                  <div onClick={() => setOffersToggle1(2)} className={offersToggle === 2 ? " chanege_active" : ""} />
                  <div onClick={() => setOffersToggle1(3)} className={offersToggle1 === 3 ? " chanege_active" : ""} />
                  <div onClick={() => setOffersToggle1(4)} className={offersToggle1 === 4 ? " chanege_active" : ""} />

                </div>
              </div>

            </div>





          </div>
          <div className="LOREM">
            <h1>LOREM IPSUM</h1>
          </div>
          <div style={{
            width: "100%",
            height: "200px",
            backgroundColor: '#071c2c'
          }} />
          <div className="row content_row" >
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
                                      <LinearProgress color="inherit" />
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