import {
  Typography,
  Box,
  Grid,
  Divider,
  Button,
  Link,
  Skeleton,
  Chip,
} from "@mui/material";
import React from "react";
import "./hotelresultinfo.css";
import travellers from "../../../images/img/travellers.jpg";
import travellers2 from "../../../images/img/travellers2.jpg";
import travellers3 from "../../../images/img/travellers3.jpg";
import PeopleIcon from "@mui/icons-material/People";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RoomInfo from "./RoomInfo";
import jacuzzi from "../../../images/card/jacuzzi.png";
import jacuzzy from "../../../images/img/jacuzzy.jpg";
import spa from "../../../images/img/spa.jpg";
import launge from "../../../images/img/launge.jpg";
import nightsview from "../../../images/img/nightsview.jpg";
import relax from "../../../images/card/relax.png";
import StarRateIcon from "@mui/icons-material/StarRate";
import TestimonialSlider from "./TestimonialSlider";
import Offerscard from "../../../components/Offerscard";
import InfoIcon from "@mui/icons-material/Info";
// bootstrap
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { LocationOn, Star, StarBorder } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  hotelBlockRoomAction,
  hotelRoomAction,
  hotelSearchInfoAction,
} from "../../../Redux/Hotel/hotel";
import { useState } from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import travellers from "../../../images/img/travellers.jpg";
// import GoogleMap from '../../../components/GoogleMap';
import Carousel from "react-gallery-carousel";
// import 'react-gallery-carousel/dist/index.css';
// import '../../../../node_modules/react-gallery-carousel/dist/index.css';
import AliceCarousel from "react-alice-carousel";
import "../../../../node_modules/react-alice-carousel/lib/alice-carousel.css";
import Rating from "@mui/material/Rating";
// location npm
// import Map, { Marker } from "react-map-gl";
// import "../../../../node_modules/mapbox-gl/dist/mapbox-gl.css";
import { dangerouslySetInnerHTML } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WifiIcon from '@mui/icons-material/Wifi';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const HotelResultInfo = () => {
  const API_TOKEN =
    "pk.eyJ1IjoiamVzc2VmbG9yaWciLCJhIjoiY2o2OWMzNjRjMHBiOTMxbnlqbjVwd2VnNCJ9.xyKBRCB9dioTOfON4YJd4Q";
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // Code start

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);

  const [loader, setLoader] = useState(false);

  const ResultIndex = sessionStorage.getItem("ResultIndex");
  const HotelCode = sessionStorage.getItem("HotelCode");

  useEffect(() => {
    const payload = {
      ResultIndex: ResultIndex,
      HotelCode: HotelCode,
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId:
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.TraceId,
    };

    dispatch(hotelSearchInfoAction(payload));
    dispatch(hotelRoomAction(payload));
  }, []);
  const hotelInfo =
    reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult?.HotelDetails;
  console.error("hotel Info data", hotelInfo);
  // useEffect(() => {

  //     setImageLinks(reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult?.HotelDetails?.Images)
  // }, [])

  useEffect(() => {
    if (
      reducerState?.hotelSearchResult?.isLoadingHotelRoom == true &&
      reducerState?.hotelSearchResult?.isLoadingHotelInfo == true
    ) {
      setLoader(true);
    }
  }, [
    reducerState?.hotelSearchResult?.isLoadingHotelRoom &&
      reducerState?.hotelSearchResult?.isLoadingHotelInfo,
  ]);

  useEffect(() => {
    if (
      reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult
        ?.HotelRoomsDetails?.length >= 0 &&
      reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult
        ?.ResponseStatus === 1
    ) {
      setLoader(false);
    }
  }, [
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult
      ?.HotelRoomsDetails?.length >= 0 &&
      reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult
        ?.ResponseStatus === 1,
  ]);

  useEffect(() => {
    if (reducerState?.hotelSearchResult?.blockRoom?.BlockRoomResult) {
      navigate("/HotelReviewBooking");
    }
  }, [reducerState?.hotelSearchResult?.blockRoom?.BlockRoomResult]);

  const hotelRoom =
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult
      ?.HotelRoomsDetails?.[0];

  console.error("hotel Room data", hotelRoom);
  const imageLinks =
    reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult?.HotelDetails
      ?.Images;

  const items = imageLinks?.map((link, index) => (
    <img style={{ height: "350px", width: "100%" }} src={link} key={index} />
  ));

  console.error("State Data", reducerState);
  const defaultZoom = 16;
  const Latitude =
    reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult?.HotelDetails
      ?.Latitude;
  const Longitude =
    reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult?.HotelDetails
      ?.Longitude;
  //   const [position, setPosition] = useState([]);
  //   setPosition([Latitude,Longitude])
  const defaultCenter = [Latitude, Longitude];

  const [lat, setLat] = useState(13.189988);
  const [lng, setLng] = useState(77.629579);
  const [zoom, setZoom] = useState(2);
  const position = [lat, lng];
  const [ratingOption, setRatingOption] = useState("");
  const hotelRooms =
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult;
  const [expanded, setExpanded] = React.useState("panel1");

  const defaultOpenChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Handle book room


  const handleBookRoom = () => {
    
    sessionStorage.setItem("HotelIndex", ratingOption);
    const smoking =
      hotelRooms?.HotelRoomsDetails[ratingOption]?.SmokingPreference;
    var SmokingPreference;
    if (smoking == "NoPreference") {
      SmokingPreference = 0;
    }
    if (smoking == "Smoking") {
      SmokingPreference = 1;
    }
    if (smoking == "NonSmoking") {
      SmokingPreference = 2;
    }
    if (smoking == "Either") {
      SmokingPreference = 3;
    }
    const payload = {
      ResultIndex: ResultIndex,
      HotelCode: HotelCode,
      HotelName: hotelInfo?.HotelDetails?.HotelName,
      GuestNationality: "IN",
      NoOfRooms:
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.NoOfRooms,
      ClientReferenceNo: 0,
      IsVoucherBooking: true,
      HotelRoomsDetails: [
        {
          RoomIndex: hotelRooms?.HotelRoomsDetails[ratingOption]?.RoomIndex,
          RoomTypeCode:
            hotelRooms?.HotelRoomsDetails[ratingOption]?.RoomTypeCode,
          RoomTypeName:
            hotelRooms?.HotelRoomsDetails[ratingOption]?.RoomTypeName,
          RatePlanCode:
            hotelRooms?.HotelRoomsDetails[ratingOption]?.RatePlanCode,
          BedTypeCode: null,
          SmokingPreference: SmokingPreference,
          Supplements: null,
          Price: {
            CurrencyCode:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.CurrencyCode,
            RoomPrice:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.RoomPrice,
            Tax: hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.Tax,
            ExtraGuestCharge:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price
                ?.ExtraGuestCharge,
            ChildCharge:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.ChildCharge,
            OtherCharges:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.OtherCharges,
            Discount:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.Discount,
            PublishedPrice:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.PublishedPrice,
            PublishedPriceRoundedOff:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price
                ?.PublishedPriceRoundedOff,
            OfferedPrice:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.OfferedPrice,
            OfferedPriceRoundedOff:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price
                ?.OfferedPriceRoundedOff,
            AgentCommission:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price
                ?.AgentCommission,
            AgentMarkUp:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.AgentMarkUp,
            ServiceTax:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.ServiceTax,
            TCS: hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.TCS,
            TDS: hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.TDS,
            ServiceCharge:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.ServiceCharge,
            TotalGSTAmount:
              hotelRooms?.HotelRoomsDetails[ratingOption]?.Price?.TotalGSTAmount,
            GST: {
              CGSTAmount:
                hotelRooms?.HotelRoomsDetails[ratingOption]?.GST?.CGSTAmount,
              CGSTRate:
                hotelRooms?.HotelRoomsDetails[ratingOption]?.GST?.CGSTRate,
              CessAmount:
                hotelRooms?.HotelRoomsDetails[ratingOption]?.GST?.CessAmount,
              CessRate:
                hotelRooms?.HotelRoomsDetails[ratingOption]?.GST?.CessRate,
              IGSTAmount:
                hotelRooms?.HotelRoomsDetails[ratingOption]?.GST?.IGSTAmount,
              IGSTRate:
                hotelRooms?.HotelRoomsDetails[ratingOption]?.GST?.IGSTRate,
              SGSTAmount:
                hotelRooms?.HotelRoomsDetails[ratingOption]?.GST?.SGSTAmount,
              SGSTRate:
                hotelRooms?.HotelRoomsDetails[ratingOption]?.GST?.SGSTRate,
              TaxableAmount:
                hotelRooms?.HotelRoomsDetails[ratingOption]?.GST?.TaxableAmount,
            },
          },
        },
      ],
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId:
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.TraceId,
    };

    console.error(payload)
    dispatch(hotelBlockRoomAction(payload));
    
  };
  return (
    <>
      <div className="container bg-light h_detail my-3 p-3">
        <div className="row">
          <div className="col-12">
            <Box>
              <Typography mt={2} className="hotel_info_head">
                {" "}
                {hotelInfo?.HotelName == undefined ? (
                  <Skeleton
                    animation="wave"
                    style={{
                      height: "70px",
                      margin: "-25px auto 1px",
                      width: "70%",
                    }}
                  />
                ) : (
                  <>
                    {" "}
                    {hotelInfo?.HotelName}{" "}
                    <Rating
                      name="read-only"
                      value={hotelInfo?.StarRating}
                      readOnly
                    />{" "}
                  </>
                )}{" "}
              </Typography>
              <Typography my={2} className="hotel_info_para">
                {hotelInfo?.Address == undefined ? (
                  <Skeleton
                    animation="wave"
                    style={{
                      height: "40px",
                      margin: "-25px auto 1px",
                      width: "80%",
                    }}
                  />
                ) : (
                  <>
                    <LocationOn /> {hotelInfo?.Address}
                  </>
                )}
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={3}>
                <Grid item sm={12} lg={8} xs={12}>
                  <Grid container>
                    <Grid lg={12}>
                      {!imageLinks == true ? (
                        <AliceCarousel disableButtonsControls mouseTracking>
                          {[...Array(5)].map((_, index) => (
                            <Skeleton
                              key={index}
                              variant="rect"
                              animation="wave"
                              style={{ height: "350px", width: "100%" }}
                            />
                          ))}
                        </AliceCarousel>
                      ) : (
                        <>
                      
                          <AliceCarousel
                            autoHeight="false"
                            animationType="fadeout"
                            animationDuration={800}
                            disableButtonsControls
                            infinite
                            items={items}
                            mouseTracking
                            autoPlay="true"
                          />

                        {/* Result check in details */}
                       
                    <Box className="budget_room" p={2}>
                      <Typography className="budget_txt">
                        Budget Room
                      </Typography>
                      <Divider
                        
                        py={1}
                        style={{ backgroundColor: "gray", padding: "1px",marginTop:'10px' }}
                      />
                      <Box className="budget_flex" mt={2}>
                        <Box display="flex" alignItems="center">
                          <PeopleIcon style={{ width: "20%" }} />
                          <Typography className="budget_ad">
                            For 2 Adults
                          </Typography>
                        </Box>
                        <Box>
                          <Typography className="budget_price">
                            Per Night
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="budget_flex" my={1}>
                        <Box display="flex" alignItems="center">
                          <Typography className="budget_ad">
                            {" "}
                            <span
                              style={{ fontSize: "20px", color: "#FF0000" }}
                            >
                              ₹
                            </span>{" "}
                            Price{" "}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography className="budget_pricing">
                            {" "}
                            {console.log(hotelRoom?.Price?.OfferedPrice) ||
                              hotelRoom?.Price?.OfferedPrice}{" "}
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="budget_flex" my={1}>
                        <Box display="flex">
                          <CheckBoxIcon
                            style={{ width: "10%", color: "greenyellow" }}
                          />
                          <Typography className="budget_ad">
                            Room Only | Non- Refundable
                          </Typography>
                        </Box>
                        <Box>
                          <Typography className="budget_price">
                            +$32 taxes & fees{" "}
                          </Typography>
                          <Typography className="budget_price_saving">
                            Saving $1354
                          </Typography>
                        </Box>
                      </Box>
                     
                      <Box my={1} textAlign="center">
                        <Button
                          variant="contained"
                          className="option_btnn"
                          type="submit"
                        >
                          Book This Now
                        </Button>
                      </Box>
                     
                    </Box>
               

                          <Accordion>
                            <AccordionSummary
                              expandIcon={
                                <ExpandMoreIcon sx={{ color: "blue" }} />
                              }
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>
                                {" "}
                                <InfoIcon /> Hotel Description
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography
                                mt={2}
                                variant="subtitle2"
                                sx={{ fontFamily: "Monospace" }}
                              >
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: hotelInfo?.Description,
                                  }}
                                />
                                {/* {hotelInfo?.Description?.slice(0, 260) + "..."} */}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={12} lg={4} xs={12}>
                <Box className="budget_room" p={2} style={{height:'300px',overflowY:'scroll'}}>
                      <Typography className="budget_txt">
                        Hotel Facilities
                      </Typography>
                      <Divider
                        py={1}
                        style={{ backgroundColor: "gray", padding: "1px",margin:'10px 0'}}
                      />
                      
                      <ul style={{listStyle:'none',display:'flex',flexWrap:'wrap',margin:'0',padding:'0'}}>
                        {hotelInfo?.HotelFacilities?.sort((a, b) => a.length - b.length)?.map((ele)=>{
                          return(
                            <>
                            <li style={{margin:'5px 3px'}}><Chip  label={ele} color={ ele == 'Free WiFi' ? "success" : 'secondary'} variant="outlined" /></li>
                            </>
                          )
                        })}
                      </ul>
                     
                      
                      
                    </Box>
                  {/* <form action="/HotelReviewBooking">
                    <Box className="budget_room" p={2}>
                      <Typography className="budget_txt">
                        Budget Room
                      </Typography>
                      <Box className="budget_flex" mt={2}>
                        <Box display="flex" alignItems="center">
                          <PeopleIcon style={{ width: "20%" }} />
                          <Typography className="budget_ad">
                            For 2 Adults
                          </Typography>
                        </Box>
                        <Box>
                          <Typography className="budget_price">
                            Per Night
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="budget_flex" my={1}>
                        <Box display="flex" alignItems="center">
                          <Typography className="budget_ad">
                            {" "}
                            <span
                              style={{ fontSize: "20px", color: "#FF0000" }}
                            >
                              ₹
                            </span>{" "}
                            Price{" "}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography className="budget_pricing">
                            {" "}
                            {console.log(hotelRoom?.Price?.OfferedPrice) ||
                              hotelRoom?.Price?.OfferedPrice}{" "}
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="budget_flex" my={1}>
                        <Box display="flex">
                          <CheckBoxIcon
                            style={{ width: "10%", color: "greenyellow" }}
                          />
                          <Typography className="budget_ad">
                            Room Only | Non- Refundable
                          </Typography>
                        </Box>
                        <Box>
                          <Typography className="budget_price">
                            +$32 taxes & fees{" "}
                          </Typography>
                          <Typography className="budget_price_saving">
                            Saving $1354
                          </Typography>
                        </Box>
                      </Box>
                      <Divider
                        py={1}
                        style={{ backgroundColor: "gray", padding: "1px" }}
                      />
                      <Box my={1} textAlign="center">
                        <Button
                          variant="contained"
                          className="option_btnn"
                          type="submit"
                        >
                          View All Room Options
                        </Button>
                      </Box>
                    </Box>
                  </form> */}
                  <Box my={2}>
                    <Box>
                      <Typography variant="body1">
                        Location not available
                      </Typography>
                      {/* <Map
                        initialViewState={{
                          latitude: 13.189988,
                          longitude: 77.629579,
                          zoom: 14,
                        }}
                        style={{ width: "300px", height: "300px" }}
                        mapboxApiAccessToken={API_TOKEN}
                        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                      >
                        <Marker
                          longitude={77.629579}
                          latitude={13.189988}
                          color="red"
                        />
                      </Map> */}
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center" my={1}>
                    <BrunchDiningIcon
                      style={{ width: "8%", color: "#FF8900" }}
                    />
                    <Typography className="break_avail" ml={1}>
                      Free Breakfast Available
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" my={1}>
                    <CurrencyExchangeIcon
                      style={{ width: "8%", color: "#FF8900" }}
                    />
                    <Typography className="break_avail" ml={1}>
                      100% Money Back Guarantee
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Rooms available  */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={defaultOpenChange("panel1")}
              sx={{ border: "none", marginY: "20px" }}
            >
              <AccordionSummary
                sx={{
                  borderRadius: "20px",
                  boxShadow: "0px 3px 6px #00000029",
                }}
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Grid container>
                  <Grid md={6}>
                    <Box display="flex" alignItems="center">
                      <Typography
                        ml={2}
                        color="#252525"
                        fontSize="14px"
                        fontWeight="bold"
                      >
                        <EventAvailableIcon /> Available Room(s)
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid md={6}>
                    <Box display="flex" justifyContent="end"></Box>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  borderRadius: "20px",
                  boxShadow: "0px 3px 6px #00000029",
                  marginTop: "20px",
                }}
              >
                <Grid container my={2} p={3}>
                  <Grid md={8}>
                    <Box display="flex" alignItems="center">
                      <Typography
                        color="#252525"
                        fontSize="14px"
                        fontWeight="bold"
                      >
                        Rooms Categories
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid md={4}></Grid>
                </Grid>

                {console.error("hotel rooms available", hotelRooms) ||
                  hotelRooms?.HotelRoomsDetails?.map((res, key) => {
                    const dateString = res?.LastCancellationDate;
                    const date1 = new Date(dateString);
                    const time1 = date1.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    const day = date1.getDate();
                    const month = date1.toLocaleString("default", {
                      month: "short",
                    });
                    const year = date1.getFullYear();
                    const formattedDate = `${day} ${month} ${year}`;
                    return (
                      <Box className="offer_area" p={2}>
                        <Grid container>
                          <Grid md={3}>
                            <Box
                              display="grid"
                              justifyContent="left"
                              textAlign="left"
                            >
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  color: "#666666",
                                }}
                              >
                                {res?.RoomTypeName}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  color: "#006FFF",
                                }}
                              >
                                {res?.RoomPromotion}
                              </Typography>
                              <Typography>
                                <Link
                                  sx={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    color: "#FF8900",
                                  }}
                                >
                                  Show Room Description
                                </Link>
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid md={3} alignItems="center" display="flex">
                            <Box>
                              <Typography
                                sx={{
                                  fontSize: "13px",
                                  fontWeight: "bold",
                                  color: "#666666",
                                  alignItems: "center",
                                }}
                              >
                                {<> <Chip  label={res?.RatePlanName} variant="outlined" /> </>}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid md={3} alignItems="center" display="flex">
                            <Box>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  color: "#FF0000",
                                  alignItems: "center",
                                }}
                              >
                                Last Cancellation till:{formattedDate}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid
                            md={3}
                            alignItems="center"
                            display="flex"
                            justifyContent="end"
                          >
                            <Box>
                              <Typography
                                sx={{
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  color: "#006FFF",
                                }}
                                mr={2}
                              >
                                ₹{res?.Price?.PublishedPriceRoundedOff}
                              </Typography>
                            </Box>
                            <Box>
                              <input
                                className="radio"
                                type="checkbox"
                                style={{ width: "25px", height: "25px" }}
                                value={`${key}`}
                                checked={ratingOption === `${key}`}
                                onClick={(e) => setRatingOption(`${key}`)}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    );
                  })}

                <Box></Box>
              </AccordionDetails>
            </Accordion>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
         

<Button
          type="submit"
          variant="contained"
          onClick={() => {
            handleBookRoom();
          }}
        >
          Continue
        </Button>
          </Box>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelResultInfo;
