import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hotelbooknow.css";
import availableRooms from "../../../images/Hotel/availableRooms.png"
import hotelMap from "../../../images/Hotel/hotelMap.png"
import hotelDetails from "../../../images/Hotel/hotelDetails.png"
import imageGallery from "../../../images/Hotel/imageGallery.png"
import Hoteldetailaccordian from "./Hoteldetailaccordian";
import StarIcon from "@mui/icons-material/Star";

import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  hotelBlockRoomAction,
  hotelRoomAction,
  hotelSearchInfoAction,
} from "../../../Redux/Hotel/hotel";
import HotelLoading from "../hotelLoading/HotelLoading";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const HotelBooknow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  // console.log("State Data", reducerState);
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

  useEffect(() => {
    if (reducerState?.hotelSearchResult?.isLoadingHotelRoom == true) {
      setLoader(true);
    }
  }, [reducerState?.hotelSearchResult?.isLoadingHotelRoom]);

  useEffect(() => {
    if (
      reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult
        ?.HotelRoomsDetails.length >= 0
    ) {
      setLoader(false);
    }
  }, [
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult
      ?.HotelRoomsDetails,
  ]);

  useEffect(() => {
    if (reducerState?.hotelSearchResult?.blockRoom?.BlockRoomResult) {
      navigate("Reviewbooking");
    }
  });

  const hotelll = reducerState?.hotelSearchResult;
  // console.log(hotelll, "hotelll");

  const hotelInfo = reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult;
  const hotelRoom =
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult;

  const star = (data) => {
    const stars = [];
    for (let i = 0; i < data; i++) {
      stars.push(<StarIcon key={i} style={{ color: "#FF8900" }} />);
    }
    return stars;
  };
  const hotelContactNo = hotelInfo?.HotelDetails?.HotelContactNo;
  const result =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult;

  let totalAdults = 0;
  let totalChildren = 0;

  result?.RoomGuests?.forEach((room) => {
    totalAdults += room?.NoOfAdults || 0;
    totalChildren += room?.NoOfChild || 0;
  });

  const storedFormData = JSON.parse(sessionStorage.getItem('hotelFormData'));
  const data = storedFormData.dynamicFormData[0];
  // console.log(storedFormData);
  return (
    <>
      {loader ? (
        <HotelLoading />
      ) : (
        <>
          {/* step by step updating part */}

          <div className="container-fluid margin-pecentage">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                <div className="hotelBookNowOuter">
                  <div className="hotelBookNowHeader">
                    <p>Your Search criteria:{storedFormData?.city},{' '} India</p>
                    <p>Duration: {storedFormData?.night}{' '}Nights</p>
                    <p>{storedFormData?.checkIn}- {storedFormData?.checkOut}</p>
                    <p>Guest(s): {totalAdults}Adult(s) </p>
                    <p>Room(s): {storedFormData.room}</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 mb-0">
                <div className="availabilityOuter">
                  <div className="availabilityInner">
                    <div>
                      <div>
                        <p>Available Room(s)</p>
                        <img src={availableRooms} alt="logo" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <p>Image Gallery</p>
                        <img src={imageGallery} alt="logo" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <p>Hotel Details</p>
                        <img src={hotelDetails} alt="logo" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <p>Hotel Map</p>
                        <img src={hotelMap} alt="logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="book_content mt-3" >
              <div className="py-1">
                <div className="accordian_area">
                  <Hoteldetailaccordian />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HotelBooknow;
