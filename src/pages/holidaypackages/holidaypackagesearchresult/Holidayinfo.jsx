import React, { useState } from "react";
import goa from "../../../images/goa.jpg"
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import StarIcon from "@mui/icons-material/Star";
import CommitIcon from "@mui/icons-material/Commit";
import TramIcon from "@mui/icons-material/Tram";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import CabinIcon from "@mui/icons-material/Cabin";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import DeckIcon from "@mui/icons-material/Deck";
import EngineeringIcon from "@mui/icons-material/Engineering";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LiquorIcon from "@mui/icons-material/Liquor";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import LandslideIcon from "@mui/icons-material/Landslide";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import PoolIcon from "@mui/icons-material/Pool";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import ForestIcon from "@mui/icons-material/Forest";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import KayakingIcon from "@mui/icons-material/Kayaking";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import Navbar from "../../../layouts/Navbar";
import Mainheader from "../../../UI/Mainheader";
import BigNavbar from "../../../UI/BigNavbar/BigNavbar";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import { Box, Typography, Button, Grid } from "@mui/material";
import "./holidayinfo.css";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #304782",
  boxShadow: 24,
  p: 4,
};
function Holidayinfo() {

  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const onePackage =
    reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data;
  // console.log("One Package", onePackage);
  const [daysDetailsValues, setDaysDetails] = useState([]);
  const handleDaysDetail = (index, e) => {
    const newValues = [...daysDetailsValues];
    newValues[index] = e.target.value;
    setDaysDetails(newValues);
  };

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const savedDataString = sessionStorage.getItem("searchPackageData");
  const savedData = JSON.parse(savedDataString);
  const savedDestination = savedData.destination.toUpperCase();
  const savedDays = savedData.days;






  // function of enquiry for booking 

  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    contact_number: "",
    departure_city: "",
    number_of_people: Number(),
    departure_date: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setOpenModal((prev) => !prev);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enquiryPayload = {
      email: formData.email,
      fullname: formData.fullname,
      contact_number: formData.contact_number,
      departure_city: formData.departure_city,
      number_of_people: formData.number_of_people,
      departure_date: formData.departure_date,
    };
    const res = await axios({
      method: "post",
      url: "https://crm.theskytrails.com/enquiry_form/",
      data: enquiryPayload,
      config: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
    setFormData({
      email: "",
      fullname: "",
      contact_number: "",
      departure_city: "",
      number_of_people: Number(),
      departure_date: "",
    });
    setOpenModal((prev) => !prev);
  };

  // function of enquiry for booking 





  return (

    <>
      <div className='mainimg'>
        <Navbar />
        <BigNavbar />
        <Mainheader />
      </div>

      <div className="container-lg">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12 mb-4">
                <div className="packageName">
                  <p className="mb-3">{onePackage?.pakage_title}</p>
                  <span>{`${onePackage?.days - 1}N`} / {`${onePackage?.days}D`}</span>
                </div>
              </div>
              <div className="col-lg-12 mb-4 packageImgBox" >
                <div className="PackageImg">
                  <img src={onePackage?.pakage_img} alt="" />
                </div>
                <div className="packageLocation">
                  <FmdGoodIcon />
                </div>
                <div>
                  <p>{savedDestination}</p>
                  <span>(India)</span>
                </div>
              </div>

              <div className="col-lg-12 mb-4">
                <div className="TripHighlight">
                  <p className="mb-3">Trip Highlights</p>

                  <div className="col-lg-10">
                    <div className="icon-boxHighlight">

                      {onePackage?.insclusions?.map((ele, index) => {
                        if (
                          ele?.flexibility ||
                          ele?.train ||
                          ele?.bus ||
                          ele?.cab ||
                          ele?.moterBike ||
                          ele?.hotel ||
                          ele?.homeStays ||
                          ele?.guestHouse ||
                          ele?.cruise ||
                          ele?.sightSeeing ||
                          ele?.guide ||
                          ele?.meals ||
                          ele?.breakfast ||
                          ele?.drink ||
                          ele?.visa ||
                          ele?.travelInsurance ||
                          ele?.wildlife ||
                          ele?.heritage ||
                          ele?.adventure ||
                          ele?.beach ||
                          ele?.hillStation ||
                          ele?.nature ||
                          ele?.wellness ||
                          ele?.hiddenGem ||
                          ele?.tax ||
                          ele?.discount ||
                          ele?.waterActivities ||
                          ele?.optionalActivities ||
                          ele?.flexibleBooking ||
                          ele?.wifi
                        ) {
                          return (
                            <div key={index} >
                              {ele?.flexibility && (
                                <div className="singleIcon">
                                  <span><CommitIcon />
                                  </span>
                                  <p>Flexibility</p>
                                </div>
                              )}
                              {ele?.train && (
                                <div className="singleIcon">
                                  <span><TramIcon /></span>
                                  <p>Train</p>
                                </div>
                              )}
                              {ele?.bus && (
                                <div className="singleIcon">
                                  <span><DirectionsBusIcon /></span>
                                  <p>Bus</p>
                                </div>
                              )}
                              {ele?.cab && (
                                <div className="singleIcon">
                                  <span><DirectionsCarIcon /></span>
                                  <p>Cab</p>
                                </div>
                              )}
                              {ele?.moterBike && (
                                <div className="singleIcon">
                                  <span><TwoWheelerIcon /></span>
                                  <p>Moterbike</p>
                                </div>
                              )}
                              {ele?.hotel && (
                                <div className="singleIcon">
                                  <span><ApartmentIcon /></span>
                                  <p>Hotel</p>
                                </div>
                              )}
                              {ele?.homeStays && (
                                <div className="singleIcon">
                                  <span><HolidayVillageIcon /></span>
                                  <p>Homestays</p>
                                </div>
                              )}
                              {ele?.guestHouse && (
                                <div className="singleIcon">
                                  <span><LocationCityIcon /></span>
                                  <p>Guesthouse</p>
                                </div>
                              )}
                              {ele?.camp && (
                                <div className="singleIcon">
                                  <span><CabinIcon /></span>
                                  <p>Camp</p>
                                </div>
                              )}
                              {ele?.cruise && (
                                <div className="singleIcon">
                                  <span><BlurOnIcon /></span>
                                  <p>Cruise</p>
                                </div>
                              )}
                              {ele?.sightSeeing && (
                                <div className="singleIcon">
                                  <span><DeckIcon /></span>
                                  <p>Sightseeing</p>
                                </div>
                              )}
                              {ele?.guide && (
                                <div className="singleIcon">
                                  <span><EngineeringIcon /></span>
                                  <p>Guide</p>
                                </div>
                              )}
                              {ele?.meals && (
                                <div className="singleIcon">
                                  <span><FastfoodIcon /></span>
                                  <p>Meals</p>
                                </div>
                              )}
                              {ele?.breakfast && (
                                <div className="singleIcon">
                                  <span><DinnerDiningIcon /></span>
                                  <p>Daily Breakfast</p>
                                </div>
                              )}
                              {ele?.drink && (
                                <div className="singleIcon">
                                  <span><LiquorIcon /></span>
                                  <p>Complimentary Drink</p>
                                </div>
                              )}
                              {ele?.visa && (
                                <div className="singleIcon">
                                  <span><ArticleIcon /></span>
                                  <p>Visa</p>
                                </div>
                              )}
                              {ele?.travelInsurance && (
                                <div className="singleIcon">
                                  <span><AccountBalanceIcon /></span>
                                  <p>Travel Insurance</p>
                                </div>
                              )}
                              {ele?.safeTravel && (
                                <div className="singleIcon">
                                  <span><ParaglidingIcon /></span>
                                  <p>Safe to Travel</p>
                                </div>
                              )}
                              {ele?.wildlife && (
                                <div className="singleIcon">
                                  <span><NaturePeopleIcon /></span>
                                  <p>Wildlife</p>
                                </div>
                              )}
                              {ele?.heritage && (
                                <div className="singleIcon">
                                  <span><LandslideIcon /></span>
                                  <p>Heritage</p>
                                </div>
                              )}
                              {ele?.adventure && (
                                <div className="singleIcon">
                                  <span><KitesurfingIcon /></span>
                                  <p>Adventure</p>
                                </div>
                              )}
                              {ele?.beach && (
                                <div className="singleIcon">
                                  <span><PoolIcon /></span>
                                  <p>Beach</p>
                                </div>
                              )}
                              {ele?.hillStation && (
                                <div className="singleIcon">
                                  <span><DownhillSkiingIcon /></span>
                                  <p>Hill Station</p>
                                </div>
                              )}
                              {ele?.nature && (
                                <div className="singleIcon">
                                  <span><ForestIcon /></span>
                                  <p>Nature</p>
                                </div>
                              )}
                              {ele?.wellness && (
                                <div className="singleIcon">
                                  <span><SelfImprovementIcon /></span>
                                  <p>Wellness</p>
                                </div>
                              )}
                              {ele?.hiddenGem && (
                                <div className="singleIcon">
                                  <span><FitnessCenterIcon /></span>
                                  <p>Hidden Gem</p>
                                </div>
                              )}
                              {ele?.tax && (
                                <div className="singleIcon">
                                  <span><FolderDeleteIcon /></span>
                                  <p>Price Inclusive Tax</p>
                                </div>
                              )}
                              {ele?.discount && (
                                <div className="singleIcon">
                                  <span><LocalOfferIcon /></span>
                                  <p>50% Off</p>
                                </div>
                              )}
                              {ele?.waterActivities && (
                                <div className="singleIcon">
                                  <span><KayakingIcon /></span>
                                  <p>Water Activities</p>
                                </div>
                              )}
                              {ele?.optionalActivities && (
                                <div className="singleIcon">
                                  <span><SportsKabaddiIcon /></span>
                                  <p>Optional Activities</p>
                                </div>
                              )}
                              {ele?.flexibleBooking && (
                                <div className="singleIcon">
                                  <span><BookmarkAddIcon /></span>
                                  <p>Flexible Booking</p>
                                </div>
                              )}
                              {ele?.wifi && (
                                <div className="singleIcon">
                                  <span><WifiPasswordIcon /></span>
                                  <p>WIFI</p>
                                </div>
                              )}
                            </div>
                          );
                        }
                      })}

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-4">
                <div className="tripOverview">
                  <div className="col-lg-10">
                    <div className="overviewBox">
                      <span>Overview</span>
                      <p>{onePackage?.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="sidePromo">
              <div className="col-lg-12 sidePromoImg">
                <img src={goa} alt="" />
              </div>
              <div className="promoBottom">
                <div className="promoTitle">
                  <p>Luxurious Dubai Trip</p>
                  <div>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
                <div className="promoIcons">
                  <div className="singlePromoIcon">
                    <span><TramIcon /></span>
                    <p>Train</p>
                  </div>
                  <div className="singlePromoIcon">
                    <span><ForestIcon /></span>
                    <p>Nature</p>
                  </div>
                  <div className="singlePromoIcon">
                    <span><LocalOfferIcon /></span>
                    <p>50% Off</p>
                  </div>

                  <div className="singlePromoIcon">
                    <span><WifiPasswordIcon /></span>
                    <p>WIFI</p>
                  </div>
                </div>

                <div className="promoDestination">
                  <ul>
                    <li>Mandovi river cruise</li>
                    <li>North Dubai sightseeing</li>
                  </ul>
                  <div>
                    <p>₹ 42,250 </p>
                    <span>Per Person</span>
                  </div>
                </div>
                <div className="promoBottomButton">
                  <p>VIEW OTHER PACKAGES {" > "}</p>

                  <button>View Package</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12 mb-4">
                <TabContext value={value} style={{}}>
                  <Box sx={{ borderBottom: 1, backgroundColor: "#DFE6F7", borderColor: 'divider' }}>
                    <TabList onChange={handleChange}
                      // textColor="#21325D"
                      // indicatorColor="#21325D"
                      aria-label="lab API tabs example">
                      <Tab label="ITINERARY" value="1" />
                      <Tab label="HOTEL DETAILS" value="2" />
                      <Tab label="INCLUSIONS &EXCLUSIONS" value="3" />
                      <Tab label="TERMS & CONDITION" value="4" />
                      <Tab label="CANCELLATION POLICY" value="5" />

                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <div className="col-lg-12">
                      {/* <div className="dayPlan"> */}
                      {onePackage?.detailed_ltinerary?.map((item, index) => {
                        return (
                          <>
                            <Box>
                              <Box py={1}> </Box>
                              <Accordion
                                style={{ width: "100%" }}
                                defaultActiveKey={index === 0 ? index.toString() : undefined} // Set defaultActiveKey to index 0
                              >
                                <Accordion.Item eventKey={index.toString()}>
                                  <Accordion.Header>
                                    <Typography
                                      color="Black"
                                      fontSize="15px"
                                      fontWeight="bold"
                                    >
                                      Day {index + 1}
                                    </Typography>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <Typography
                                      sx={{
                                        color: "#666666",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {item}
                                    </Typography>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Box>
                          </>
                        );
                      })}
                      {/* </div> */}
                    </div>

                  </TabPanel>
                  <TabPanel value="2">
                    <div className="col-lg-12">
                      <div className="hotelDetailsTab">
                        <h2 className="mb-4">HOTEL DETAILS</h2>
                        <p>{onePackage?.hotel_details}</p>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="3">
                    <div className="col-lg-12">
                      <div className="inclusionTab">
                        <div className="row g-3">
                          <div className="col-lg-6">
                            <h2>Inclusion</h2>

                            <p>{onePackage?.insclusion_note}</p>
                          </div>
                          <div className="col-lg-6">
                            <h2>Exclusion</h2>

                            <p>{onePackage?.exclusion_note}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="4">
                    <div className="col-lg-12">
                      <div className="tandC">
                        <div className="row">
                          <div className="col-lg-12">
                            <h2>Term & Condition</h2>

                            <p>{onePackage?.term_Conditions}</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="5">
                    <div className="col-lg-12">
                      <div className="cancelTab">
                        <div className="row">
                          <div className="col-lg-12">
                            <h2>Cancellation Policy</h2>

                            <p>{onePackage?.cancellation_Policy}</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabContext>

              </div>
            </div>
          </div>
          <div className="col-lg-12">

            <div className="holiday_but">
              <button id="send_enquiry" onClick={() => setOpenModal((prev) => !prev)}>
                Send Enquiry for booking
              </button>
            </div>
          </div>

          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {/* <Box sx={style}>
              <form onSubmit={handleSubmit}>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
                <br />

                <label>
                  Full Name:
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                  />
                </label>
                <br />

                <label>
                  Contact Number:
                  <input
                    type="text"
                    name="contact_number"
                    value={formData.contact_number}
                    onChange={handleInputChange}
                  />
                </label>
                <br />

                <label>
                  Departure City:
                  <input
                    type="text"
                    name="departure_city"
                    value={formData.departure_city}
                    onChange={handleInputChange}
                  />
                </label>
                <br />

                <label>
                  Number of People:
                  <input
                    type="number"
                    name="number_of_people"
                    value={formData.number_of_people}
                    onChange={handleInputChange}
                  />
                </label>
                <br />

                <label>
                  Departure Date:
                  <input
                    type="date"
                    name="departure_date"
                    value={formData.departure_date}
                    onChange={handleInputChange}
                  />
                </label>
                <br />

                <button type="submit">Submit</button>
              </form>
            </Box> */}
            <div className="modalBoxPackage">
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <div className="row">



                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        <label for="floatingInput">Enter Name</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div class="form-floating">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        <label for="floatingInput">Enter Email</label>
                      </div>
                    </div>


                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="contact_number"
                          value={formData.contact_number}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        <label for="floatingInput">Contact Number</label>
                      </div>
                    </div>


                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="departure_city"
                          value={formData.departure_city}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        <label for="floatingInput">Departure City</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="number"
                          name="number_of_people"
                          value={formData.number_of_people}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        <label for="floatingInput">Number of People</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div class="form-floating packDatePick">
                        <input
                          type="date"
                          name="departure_date"
                          value={formData.departure_date}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        <label for="floatingInput">Number of People</label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="packEnqButton">
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Holidayinfo;



// <>
//   <div className='mainimg'>
//     <Navbar />
//     <BigNavbar />
//     <Mainheader />
//   </div>

// </>





