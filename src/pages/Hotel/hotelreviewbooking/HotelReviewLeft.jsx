import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import "./hotelreviewleft.css";
import StarIcon from "@mui/icons-material/Star";
import travellers from "../../../images/img/travellers.jpg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import dangerouslySetInnerHTML from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { HotelDetailsAction, hotelBookRoomAction } from "../../../Redux/Hotel/hotel";
import { parse } from "date-fns";
// Tooltip
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const HotelReviewLeft = () => {
  const reducerState = useSelector((state) => state);
  let blockDetails =
    reducerState?.hotelSearchResult?.blockRoom?.BlockRoomResult;
  console.error("booking details", blockDetails);
  let price = blockDetails?.HotelRoomsDetails[0]?.Price

  console.error("price",price)
  const initialvalue = {
    select: "",
    fname: "",
    lname: "",
    email: "",
    number: "",
  };
  const [serviceList, setServiceList] = useState([{ service: "" }]);
  const [values, setValues] = useState(initialvalue);
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };


  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };
  // end

  function handleSubmit(e) {
    e.preventDefault();

    if (
      values.fname.length < 1 ||
      values.lname.length < 1 ||
      values.email.length < 10 ||
      values.number.length < 1
    ) {
      setError(true);
    }
  }

  let childCount = sessionStorage.getItem("child Count");
  let adultCount = sessionStorage.getItem("adult Count");
  let nightCount = sessionStorage.getItem("night Count");
  let guestCount = sessionStorage.getItem("totalGuest");
  let roomCount = sessionStorage.getItem("room Count");
  const HotelIndex = sessionStorage.getItem("HotelIndex");
  const HotelCode = sessionStorage.getItem("HotelCode");
  const ResultIndex = sessionStorage.getItem("ResultIndex");

  const hotelRoom = reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult;
  const hotelInfo = reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult;
  const BookingId = reducerState?.hotelSearchResult?.bookRoom?.BookResult?.BookingId
  console.log("worked",reducerState)
  let ameniteis = blockDetails?.HotelRoomsDetails[0]?.Amenities;
  let Amenities = ameniteis[0].split(",");

  // console.log(Amenities);

  // console.error(
  //   "child" +
  //     childCount +
  //     "adult" +
  //     adultCount +
  //     "night" +
  //     nightCount +
  //     "room" +
  //     roomCount
  // );
  const imageLinks =
    reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult?.HotelDetails
      ?.Images;

  // From code start from here

  const emailRef = useRef();
const phoneRef = useRef();



  // Add form of guest
  const passengerTemplate = {
    Title: "mr",
    FirstName: "",
    MiddleName: null,
    LastName: "",
    Phoneno: "",
    Email: "",
    PaxType: 1,
    LeadPassenger: true,
    Age: parseInt(30),
    PassportNo: null,
    PassportIssueDate: null,
    PassportExpDate: null,
    PAN: "DNIPS1199Q"
  };

  const childPassenger = {
    Title: "mr",
    FirstName: "",
    MiddleName: null,
    LastName: "",
    Phoneno: "",
    Email: "",
    PaxType: 2,
    LeadPassenger: true,
    Age: parseInt(0),
    PassportNo: null,
    PassportIssueDate: null,
    PassportExpDate: null,
  };

  const [accordionExpanded, setAccordionExpanded] = React.useState(false);
  const handleAccordionChange = (index) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? index : false);
  };

  const passengerLists = [];
  for (let i = 0; i < adultCount; i++) {
    passengerLists.push({
      ...passengerTemplate,
      // IsLeadPax: i === 0, // Set the first passenger as the lead passenger
    });
  }

  const passengerChildLists = [];
  for (let i = 0; i < childCount; i++) {
    passengerChildLists.push({
      ...childPassenger,
      IsLeadPax: false, // Set the first passenger as the lead passenger
    });
  }

  

  const [passengerList, setPassengerList] = useState(passengerLists);
  const allPassenger = [passengerLists, passengerChildLists];
  const [passengerData, setPassengerData] = useState(allPassenger.flat());
  const dispatch = useDispatch();

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
 
    const updatedPassengerData = [...passengerData];

    // Access the correct passenger object by index and update the property
    updatedPassengerData[index] = {
      ...updatedPassengerData[index],
      [name]: value,
    };
  
    // Update the state with the modified passengerData
    setPassengerData(updatedPassengerData);


  };
  const handleBookSubmit = async(event) => {
    const email = emailRef.current.value;
const phoneno = phoneRef.current.value;
    const smoking = hotelRoom?.HotelRoomsDetails[HotelIndex]?.SmokingPreference;
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
      ResultIndex: parseInt(ResultIndex) ,
      HotelCode: HotelCode,
      HotelName: hotelInfo?.HotelDetails?.HotelName,
      GuestNationality: "IN",
      NoOfRooms:
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.NoOfRooms,
      ClientReferenceNo: "0",
      IsVoucherBooking: 'true',
      HotelRoomsDetails: [
        {
          RoomIndex: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RoomIndex,
          RoomTypeCode: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RoomTypeCode,
          RoomDescription: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RoomDescription,
          RoomTypeName: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RoomTypeName,
          RatePlanCode: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RatePlanCode,
          BedTypeCode: null,
          SmokingPreference: SmokingPreference,
          Supplements: null,
          Price: {
            CurrencyCode: "INR",
            RoomPrice: price?.RoomPrice,
            Tax: price?.Tax,
            ExtraGuestCharge: price?.ExtraGuestCharge,
            ChildCharge: price?.ChildCharge,
            OtherCharges: price?.OtherCharges,
            Discount: price?.Discount,
            PublishedPrice: price?.PublishedPrice,
            PublishedPriceRoundedOff: price?.PublishedPriceRoundedOff,
          OfferedPrice: price?.OfferedPrice,
            OfferedPriceRoundedOff: price?.OfferedPriceRoundedOff,
            AgentCommission: price?.AgentCommission,
            AgentMarkUp: price?.AgentMarkUp,
            ServiceTax: price?.ServiceTax,
            TDS: price?.TDS
        },
          HotelPassenger: passengerData,
        },
      ],
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId:
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.TraceId,
    };
   
    const hotelDetailsPayload = {
      BookingId : await BookingId,
          EndUserIp: reducerState?.ip?.ipData,
          TokenId: reducerState?.ip?.tokenData,
        }
   console.log("hotelDetailsPayload",hotelDetailsPayload)
      // Dispatch the hotelBookRoomAction
 dispatch(hotelBookRoomAction([payload,hotelDetailsPayload]));  
 
 console.log("passengerData",passengerData)

  };
  return (
    <div>
      <Box
        my={2}
        sx={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "10px 58px",
        }}
      >
        <Box>
          <Typography className="heading_main">Review Booking</Typography>
        </Box>
        <Box mt={2} p={2} className="box_shadow">
          <Grid container>
            <Grid item xs={12} md={9}>
              <Box display="flex" alignItems="center">
                <Typography className="heading">
                  {blockDetails?.HotelName}
                </Typography>
                <Box>
                  <Rating
                    name="read-only"
                    value={blockDetails?.StarRating}
                    readOnly
                    size="small"
                  />
                </Box>
              </Box>

              <Typography className="paragraph">
                {blockDetails?.AddressLine1}
              </Typography>
              <Box mt={1}>
                <Grid container>
                  <Grid item xs={12} md={3}>
                    <Typography className="check_in_out">Check-In </Typography>
                    <Typography className="date" mt={1}>
                      {
                        reducerState?.hotelSearchResult?.ticketData?.data?.data
                          ?.HotelSearchResult?.CheckInDate
                      }
                    </Typography>
                  </Grid>
                  <Grid mt={3} item xs={12} md={3}>
                    <Box display="flex" alignItems="center">
                      <Typography className="dot"></Typography>
                      <Typography className="line"></Typography>
                      <Typography className="dot"></Typography>
                    </Box>
                  </Grid>
                  <Grid item ml={2} xs={12} md={5}>
                    <Typography className="check_in_out">Check-Out </Typography>
                    <Typography className="date" mt={1}>
                      {
                        reducerState?.hotelSearchResult?.ticketData?.data?.data
                          ?.HotelSearchResult?.CheckInDate
                      }
                    </Typography>
                  </Grid>
                </Grid>
                <Box ml={12}>
                  <Typography className="result" mt={1}>
                    {/* 5 Nights | 2 Adults | 1 Room */}
                    {`${nightCount} Nights | ${adultCount}  Adult | ${roomCount} Room`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <img
                  src={imageLinks[0]}
                  style={{
                    borderRadius: "10px",
                    height: "95px",
                    width: "100%",
                    padding: "3px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={2} p={2} className="box_shadow">
          <Grid container>
            <Grid item xs={12} md={12}>
              <Box display="flex" alignItems="center">
                <Typography className="heading">
                  {blockDetails?.HotelRoomsDetails[0]?.RoomTypeName}
                </Typography>
                <Box>
                  <Typography ml={2} className="paragraph">
                    {adultCount} Adult
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography></Typography>
                <Box ml={1}>
                  {Amenities?.map((ele) => {
                    return (
                      <>
                        <Typography
                          sx={{
                            color: "orangered",
                            fontSize: "15px",
                            fontWeight: "600",
                          }}
                        >
                          {" "}
                          <FiberManualRecordIcon
                            fontSize="7px"
                            sx={{ color: "orangeRed" }}
                          />{" "}
                          {ele}{" "}
                        </Typography>
                      </>
                    );
                  })}
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography className="non_refundable">
                  {" "}
                  X Non-Refundable{" "}
                </Typography>
                <Box
                  ml={1}
                  className="border_line"
                  display="flex"
                  alignItems="center"
                >
                  <Typography className="refund">
                    On Cancellation, You will not get any refund{" "}
                  </Typography>
                </Box>
                <Box ml={1}>
                  <BootstrapTooltip
                    title={
                      blockDetails?.HotelRoomsDetails[0]?.CancellationPolicy
                    }
                  >
                    <Typography className="policy">
                      Cancellation Policy Details
                    </Typography>
                  </BootstrapTooltip>
                </Box>
              </Box>
              <Box mt={1} className="bottom_line"></Box>
              <Box>
                <Box>
                  <Typography className="heading">
                    Important information
                  </Typography>
                </Box>
                <Typography
                  mt={2}
                  variant="subtitle2"
                  sx={{ fontFamily: "Monospace" }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blockDetails?.HotelNorms,
                    }}
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={2} p={2} className="box_shadow">
          <Grid container>
            <Grid item xs={12} md={12}>
              <Box>
                <Typography className="heading">Guest Details</Typography>
                <Box>
                  {adultCount > 0 &&
                    Array.from({ length: adultCount }, (_, index) => (
                      <Box>
                        <div mb={2} key={index} className="services" py={1}>
                          <Accordion
                            expanded={accordionExpanded === index}
                            onChange={handleAccordionChange(index)}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>Adult {index + 1}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Box>
                                <Grid container spacing={3} my={1}>
                                  <Grid item xs={12} sm={12} md={4}>
                                    <Box>
                                      <div className="form_input">
                                        <label
                                          hotel_form_input
                                          className="form_lable"
                                        >
                                          First name*
                                        </label>
                                        <input
                                          name="FirstName"
                                          placeholder="Enter your name"
                                          value={passengerData.FirstName}
                                          onChange={(e) =>
                                            handleServiceChange(e, index)
                                          }
                                        />
                                      </div>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={12} sm={12} md={4} py={1}>
                                    <Box>
                                      <div className="form_input">
                                        <label
                                          hotel_form_input
                                          className="form_lable"
                                        >
                                          Last name*
                                        </label>
                                        <input
                                          name="LastName"
                                          
                                          placeholder="Enter your last name"
                                          value={passengerData.LastName}
                                          onChange={(e) =>
                                            handleServiceChange(e, index)
                                          }
                                        />
                                      </div>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={12} sm={12} md={4} py={1}>
                                    <Box>
                                      <div className="form_input">
                                        <label
                                          hotel_form_input
                                          className="form_lable"
                                        >
                                          age*
                                        </label>
                                        <input
                                          name="Age"
                                          type="number"
                                          placeholder="Enter Age"
                                          value={passengerData.Age}
                                          onChange={(e) =>
                                            handleServiceChange(e, index)
                                          }
                                        />
                                      </div>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Box>
                            </AccordionDetails>
                          </Accordion>

                          {/* Form end */}
                        </div>
                      </Box>
                    ))}
                </Box>

                <Grid container spacing={3} my={1}>
                  <Grid item xs={12} sm={12} md={4}>
                    <Box>
                      <div className="form_input">
                        <label hotel_form_input className="form_lable">
                          Email*
                        </label>
                        <input
                          name="Email"
                          ref={emailRef}
                          placeholder="Enter your Email"
                          value={passengerData.Email}
                          onChange={(e) =>
                            handleServiceChange(e,0)
                          }
                        />
                      </div>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4}>
                    <Box>
                      <div className="form_input">
                        <label hotel_form_input className="form_lable">
                          Phone No*
                        </label>
                        <input
                          name="Phoneno"
                          ref={phoneRef}
                          placeholder="Enter your name"
                          value={passengerData.Phoneno}
                          onChange={(e) =>
                            handleServiceChange(e,0)
                          }
                        />
                      </div>
                    </Box>
                  </Grid>
                </Grid>

                <Box
                  mt={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    style={{ width: "200px", borderRadius: "20px" }}
                    type="submit"
                    onClick={() => {
                      handleBookSubmit();
                    }}
                    variant="contained"
                  >
                    Reserve Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default HotelReviewLeft;
