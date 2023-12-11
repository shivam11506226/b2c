import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Button, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Rating from "../hotelresult/Rating";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector, useReducer } from "react-redux";
import moment from "moment";
import {
  clearHotelReducer,
  hotelBookRoomAction,
} from "../../../Redux/Hotel/hotel";
import StarIcon from "@mui/icons-material/Star";
import Swal from "sweetalert2";
import userApi from "../../../Redux/API/api";
import { apiURL } from "../../../Constants/constant";

const Hoteldescription = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reducerState = useSelector((state) => state);
  const bookingId =
    reducerState?.hotelSearchResult?.bookRoom?.BookResult?.BookingId;
  let bookingStatus =
    reducerState?.hotelSearchResult?.bookRoom?.BookResult?.Status || false;
  const passenger = reducerState?.passengers?.passengersData;

  const hotelBlockDetails =
    reducerState?.hotelSearchResult?.blockRoom?.BlockRoomResult;
  const hotelDetails = hotelBlockDetails?.HotelRoomsDetails;
  const resultIndex = sessionStorage.getItem("ResultIndex");
  const hotelCode = sessionStorage.getItem("HotelCode");
  const [bookingSuccess, setBookingSuccess] = useState(bookingStatus);

  const hotelData =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult;
  // console.log(resultIndex, hotelCode);
  const hotelInfo = reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult;
  // console.log("hotelDetails", hotelDetails);
  console.log("passenger", passenger);
  // console.log("hotel block details", hotelBlockDetails)
  // console.log("hotel data", hotelData)
  // console.log("hotel Info", hotelInfo);

  const checkInDate = moment(hotelDetails?.CheckInDate).format("MMMM DD, YYYY");
  const checkOutDate = moment(hotelDetails?.CheckOutDate).format(
    "MMMM DD, YYYY"
  );
  const cancelDuedate = moment(hotelDetails?.LastCancellationDate).format(
    "MMMM DD, YYYY"
  );

  const getBookingDetails =
    reducerState?.hotelSearchResult?.blockRoom?.BlockRoomResult
      ?.HotelRoomsDetails;
  // console.log("reducerState", reducerState);

  const totalAmount = getBookingDetails?.reduce((accumulator, item) => {
    return accumulator + item?.Price?.PublishedPriceRoundedOff;
  }, 0);
  // console.log("totalAmount in last page", totalAmount);

  const handleClickBooking = async () => {
    const payload = {
      ResultIndex: resultIndex,
      HotelCode: hotelCode,
      HotelName: hotelBlockDetails?.HotelName,
      GuestNationality: "IN",
      NoOfRooms: hotelDetails?.length,
      ClientReferenceNo: 0,
      IsVoucherBooking: true,
      HotelRoomsDetails: hotelDetails?.map((item, hotelIndex) => {
        return {
          RoomIndex: item?.RoomIndex,
          RoomTypeCode: item?.RoomTypeCode,
          RoomTypeName: item?.RoomTypeName,
          RatePlanCode: item?.RatePlanCode,
          BedTypeCode: null,
          SmokingPreference: 0,
          Supplements: null,
          Price: item?.Price,
          HotelPassenger: passenger
            .map((itemPassenger, index) => {
              if (itemPassenger?.roomIndex === hotelIndex) {
                return {
                  ...itemPassenger,
                  Email: apiURL.flightEmail,
                  Phoneno: apiURL.phoneNo,
                };
              } // If the condition is not met, return the original item
            })
            .filter(Boolean),
        };
      }),

      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId:
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.TraceId,
    };
    // console.log(payload)

    const hotelDetailsPayload = {
      BookingId: await bookingId,
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
    };
    console.log(payload, "payload");

    dispatch(hotelBookRoomAction([payload, hotelDetailsPayload]));
    // dispatch(hotelBookRoomAction(payload));
  };

  // balance subtract and update

  const userId = reducerState?.logIn?.loginData?.data?.data?.id;
  // const bookingResonse=reducerState?.hotelSearchResult?.bookRoom?.BookResult?.Error?.ErrorCode;

  const storedFormData = JSON.parse(sessionStorage.getItem("hotelFormData"));
  const data = storedFormData.dynamicFormData[0]; // Assuming dynamicFormData is an array with at least one element

  const hotelCancellationPolicies =
    reducerState?.hotelSearchResult?.blockRoom?.BlockRoomResult
      ?.HotelRoomsDetails[0];
  const cancellationStartingDate =
    hotelCancellationPolicies?.CancellationPolicies[0]?.FromDate;
  const cancellationFormattedStartingDate = moment(
    cancellationStartingDate
  ).format("MMMM DD, YYYY");
  const cancellationEndingDate =
    hotelCancellationPolicies?.CancellationPolicies[0]?.ToDate;
  const cancellationFormattedEndingDate = moment(cancellationEndingDate).format(
    "MMMM DD, YYYY"
  );

  const cancellationCharge =
    hotelCancellationPolicies?.CancellationPolicies[0]?.Charge;

  const star = (data) => {
    const stars = [];
    for (let i = 0; i < data; i++) {
      stars.push(<StarIcon key={i} style={{ color: "#FF8900" }} />);
    }
    return stars;
  };

  return (
    <>
      <div className="container-fluid rmv-margin">
        {/* <div className="row">
          <div className="col-lg-12"> */}
        <div className="row">
          {/* hotel details area  */}

          <div className="col-lg-12">
            <div className="hotelDetails">
              <div>
                <p className="hotelName">
                  {hotelInfo?.HotelDetails?.HotelName}
                </p>
                <Box alignItems="right">
                  <Box>{star(hotelInfo?.HotelDetails?.StarRating)}</Box>
                </Box>
              </div>
              <div>
                <p className="text-start w-50">
                  {" "}
                  <b>Address:</b> {hotelInfo?.HotelDetails?.Address}
                </p>

                <div>
                  <p className="text-end">
                    {" "}
                    <b>Check In:</b>
                    {
                      reducerState?.hotelSearchResult?.ticketData?.data?.data
                        ?.HotelSearchResult?.CheckInDate
                    }
                  </p>
                  <p className="text-end">
                    <b>Check Out:</b>
                    {
                      reducerState?.hotelSearchResult?.ticketData?.data?.data
                        ?.HotelSearchResult?.CheckOutDate
                    }
                  </p>
                </div>
              </div>
              <div>
                <div className="contact">
                  <p>{storedFormData?.city}, India</p>
                  <p>
                    <b>Contact: </b>
                    {hotelInfo?.HoteDetails?.HotelContactNo
                      ? hotelInfo.HotelDetails.HotelContactNo
                      : "Not Available"}
                  </p>
                </div>
                <p>
                  <b>Night(s) </b>
                  {storedFormData?.night}
                </p>
              </div>
            </div>
            {/* </div>
            </div> */}
          </div>

          {/* booking details  */}

          <div className="col-lg-12">
            <div className="bookingDetailsGuest">
              <div className="bookingDetailsGuestHeader">
                <p>Booking Details</p>
              </div>
              <div className="bookingDetailsGuestBody">
                <div>
                  <p>Hotel Name:</p>
                  <p>{hotelInfo?.HotelDetails?.HotelName}</p>
                </div>
                <div>
                  <p>Address: </p>
                  <span>{hotelInfo?.HotelDetails?.Address}</span>
                </div>
                <div>
                  <div>
                    <p>Check In:</p>
                    <span>
                      {
                        reducerState?.hotelSearchResult?.ticketData?.data?.data
                          ?.HotelSearchResult?.CheckInDate
                      }
                    </span>
                  </div>
                  <div>
                    <p>Check Out:</p>
                    <span>
                      {
                        reducerState?.hotelSearchResult?.ticketData?.data?.data
                          ?.HotelSearchResult?.CheckOutDate
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* passenger details  */}

          <div className="col-lg-12">
            <div className="bookingDetailsGuest">
              <div className="bookingDetailsGuestHeader">
                <p>Passenger Details</p>
              </div>
              {passenger?.map((name, index) => {
                return (
                  <div className="passengerDetailsGuestBody">
                    <div>
                      <p>Name :</p>
                      <p>PAN : </p>
                    </div>
                    <div>
                      <span>
                        {name?.FirstName?.toUpperCase()}{" "}
                        {name?.LastName?.toUpperCase()}
                      </span>
                      <span>{name?.PAN}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* cancellation policy  */}

          <div className="col-lg-12 mt-3">
            <div className="bookingDetailsGuest">
              <div className="bookingDetailsGuestHeader">
                <p>Cancellation and Charges</p>
              </div>
              <div className="otherDetailsDataGuest">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="cancelAccord">
                      <span>Cancelled on or After</span>
                      <p>{cancellationFormattedStartingDate}</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="cancelAccord">
                      <span>Cancelled on or Before</span>
                      <p>{cancellationFormattedEndingDate}</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="cancelAccord">
                      <span>Cancellation Charges</span>
                      <p>{cancellationCharge}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* hotel Norms  */}

          <div className="col-lg-12 mt-3">
            <div className="bookingDetailsGuest">
              <div className="bookingDetailsGuestHeader">
                <p>Hotel Facilities</p>
              </div>
              <div className="guestDetailsNorms">
                <ul>
                  {hotelInfo?.HotelDetails?.HotelFacilities.map(
                    (facility, index) => (
                      <li key={index}>{facility}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* booking history  */}

          {/* <div className="col-lg-12 mt-3">
            <div className="bookingDetailsGuest">
              <div className="bookingDetailsGuestHeader">
                <p>Booking History</p>
              </div>
              <div className="guestDetailsHistory">
                <button>View Voucher</button>
                <button>View Invoice</button>
              </div>

            </div>
          </div> */}
        </div>
      </div>

      {/* <Box textAlign="center" mt={2}>
        <Button
          className="continue_btn"
          type="submit"
          variant="contained"
          onClick={handleClickBooking}
        >
          Continue
        </Button>
      </Box> */}
      <div className="guestDetailsHistory mt-3">
        <button type="submit" onClick={handleClickBooking}>
          Continue
        </button>
      </div>
    </>
    // <Box p={3} backgroundColor="#F5F5F5" borderRadius="10px">
    //   {passenger?.map((name, index) => {
    //     return (
    //       <Box display="flex" justifyContent="space-between" mt={2}>
    //         <Box display="flex">
    //           <Typography
    //             sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
    //           >
    //             {name?.FirstName} {name?.LastName}
    //           </Typography>
    //         </Box>
    //       </Box>
    //     );
    //   })}
    //   <Divider sx={{ backgroundColor: "gray", marginY: "5px" }} />

    // <Box textAlign="center" mt={2}>
    //   <Button
    //     className="continue_btn"
    //     type="submit"
    //     variant="contained"
    //     onClick={handleClickBooking}
    //   >
    //     Continue
    //   </Button>
    // </Box>
    // </Box>
  );
};

export default Hoteldescription;