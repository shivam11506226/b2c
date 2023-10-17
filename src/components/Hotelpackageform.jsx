
import { Link, NavLink, useNavigate } from 'react-router-dom';
// hotel tabs
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import { Grid, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Holiday_submit} from '../utility/CSS/HolidayPackageForm'
// slider
import Slider from "react-slick";
import nepal from "../images/card/nepal.png";
import SearchIcon from '@mui/icons-material/Search';

// bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { searchPackageAction } from '../Redux/SearchPackage/actionSearchPackage';
import { useDispatch, useSelector } from 'react-redux';
import { clearHolidayReducer } from '../Redux/OnePackageSearchResult/actionOneSearchPackage';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [value, setValue] = React.useState('1');

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
    navigate('/HolidayPackageSearchResult')
  };

    return (
        <section>
            <div className="container homeform_container">
                <p className="header_row">
                    <h5>{props.header}</h5>
                </p>
                <div className="row content_row" >

                    <div className="col-12" mx={5}>
                        <Box sx={{ width: '100%', typography: 'body1' }} >
                            <TabContext value={value} centered>
                                <Box pt={5}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered >
                                        <Tab label="Search" value="1" sx={{ fontSize: '20px', backgroundColor: '#FF8900', borderRadius: '20px    0 0 20px', color: 'white', fontWeight: 'bold', margin: '1px' }} className="hello" />
                                        <Tab label="Destinations" value="2" sx={{ fontSize: '20px', backgroundColor: '#FF8900', color: 'white', fontWeight: 'bold', margin: '1px' }} />
                                        <Tab label="Search Deals " value="3" sx={{ fontSize: '20px', backgroundColor: '#FF8900', color: 'white', fontWeight: 'bold', margin: '1px' }} />
                                        <Tab label="Featured" value="4" sx={{ fontSize: '20px', backgroundColor: '#FF8900', color: 'white', fontWeight: 'bold', margin: '1px' }} />
                                        <Tab label="Travel Guidlines" value="5" sx={{ fontSize: '20px', backgroundColor: '#FF8900', borderRadius: '  0 20px 20px  0', color: 'white', fontWeight: 'bold', margin: '1px' }} />

                                    </TabList>
                                </Box>


                                <TabPanel value="1" >
                                {/* action="*/}
                                {/* action="holidaypackages/HolidayPackageSearchResult" */}
                                <form >
                                <Box
                      display="flex"
                      justifyContent='space-evenly'
                      alignItems="center" 
                  >
                   
                    <TextField
                      ml={2}
                      id="filled-basic"
                      label="Search From Destination"
                      variant="filled"
                      name="destination"
                      autoComplete='off'
                      onChange={(e) => setDestination(e.target.value)}
                    />
                    <TextField
                      mr={2}
                      id="filled-basic"
                      label="Days"
                      variant="filled"
                      name="days"
                      type="number"
                      onChange={(e) => setDaySearch(e.target.value)}
                      required
                    />
                    <Holiday_submit
                    //   type='submit'
                      className="holiday_submit"
                      onClick={clickUs}
                      variant="contained"
                    >
                     <SearchIcon /> Search Holiday Package
                    </Holiday_submit>
                  </Box>
                    </form>
                                </TabPanel>
                                <TabPanel value="2" >
                                    <Box py={2} sx={{ backgroundColor: "white", marginX: "80px", borderRadius: "20px", }} >
                                        <Grid container elevation={3} alignItems="center" py={2}>
                                            <Grid item xs={12} md={3} alignItems="center" sx={{ '& button': { m: 1 } }}>
                                                <div>
                                                    <Button variant="contained" size="large" sx={{ backgroundColor: '#FF8900', width: '200px' }}>
                                                        <Checkbox {...label} icon={<FavoriteBorder sx={{ color: 'white' }} />} checkedIcon={<Favorite sx={{ color: 'white' }} />} />Best Selling
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" size="large" sx={{ width: '200px' }}>
                                                        <Checkbox {...label} icon={<FavoriteBorder sx={{ color: '#FF8900', }} />} checkedIcon={<Favorite sx={{ color: '#FF8900' }} />} />Emerging
                                                    </Button>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={9}>
                                                <Slider {...settings}>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>

                                                </Slider>
                                            </Grid>
                                        </Grid>


                                    </Box>
                                </TabPanel>
                                <TabPanel value="3">
                                    <Box py={2} sx={{ backgroundColor: "white", marginX: "80px", borderRadius: "20px", }} >
                                        <Grid container elevation={3} alignItems="center" py={2}>
                                            <Grid item xs={12} md={3} alignItems="center" sx={{ '& button': { m: 1 } }}>
                                                <div>
                                                    <Button variant="contained" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', backgroundColor: '#FF8900', fontSize: '14px' }}>
                                                        Flat 30% off on Taj
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', color: 'black', fontSize: '14px', border: '1px solid #FF8900' }}>Honeymoon package
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', color: 'black', fontSize: '14px', border: '1px solid #FF8900' }}>Nearby Vacays
                                                    </Button>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={9}>
                                                <Slider {...settings}>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>

                                                </Slider>
                                            </Grid>
                                        </Grid>


                                    </Box>
                                </TabPanel>
                                <TabPanel value="4" >
                                    <Box py={2} sx={{ backgroundColor: "white", marginX: "80px", borderRadius: "20px", }} >
                                        <Grid container elevation={3} alignItems="center" py={2}>
                                            <Grid item xs={12} md={3} alignItems="center" sx={{ '& button': { m: 1 } }}>
                                                <div>
                                                    <Button variant="contained" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', backgroundColor: '#FF8900', fontSize: '14px' }}>
                                                        Explore Buy Theme
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', color: 'black', fontSize: '14px', border: '1px solid #FF8900' }}>
                                                        Best Selling Holidays
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', color: 'black', fontSize: '14px', border: '1px solid #FF8900' }}>
                                                        Special offers
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', color: 'black', fontSize: '14px', border: '1px solid #FF8900' }}>
                                                        Cordelia Cruises
                                                    </Button>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={9}>
                                                <Slider {...settings}>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>

                                                </Slider>
                                            </Grid>
                                        </Grid>


                                    </Box>
                                </TabPanel>
                                <TabPanel value="5" >
                                    <Box py={2} sx={{ backgroundColor: "white", marginX: "80px", borderRadius: "20px", }} >
                                        <Grid container elevation={3} alignItems="center" py={2}>
                                            <Grid item xs={12} md={3} alignItems="center" sx={{ '& button': { m: 1 } }}>
                                                <div>
                                                    <Button variant="contained" size="large" sx={{ backgroundColor: '#FF8900', width: '200px' }}>
                                                        <Checkbox {...label} icon={<FavoriteBorder sx={{ color: 'white' }} />} checkedIcon={<Favorite sx={{ color: 'white' }} />} />Domestic
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" size="large" sx={{ width: '200px' }}>
                                                        <Checkbox {...label} icon={<FavoriteBorder sx={{ color: '#FF8900', }} />} checkedIcon={<Favorite sx={{ color: '#FF8900' }} />} />International
                                                    </Button>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={9} display="flex">

                                                <div>
                                                    <div className="card_wrapper" >
                                                        <div className="card_image">
                                                            <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                        </div>
                                                        <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                    </div>
                                                </div>
                                                <div ms={5}>
                                                    <div className="card_wrapper" >
                                                        <div className="card_image">
                                                            <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                        </div>
                                                        <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                    </div>
                                                </div>





                                            </Grid>
                                        </Grid>


                                    </Box>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Homeform;