import React, { useState, useEffect } from "react";

import Sailsummary from "../guestdetail/Sailsummary";
import Reviewdescription from "./Reviewdescription";
import "./review.css";
import { useSelector } from "react-redux";
import HotelLoading from "../hotelLoading/HotelLoading";
import BigNavbar from "../../../UI/BigNavbar/BigNavbar";
import Navbar from "../../../layouts/Navbar";
import Mainheader from "../../../UI/Mainheader";
import Hoteldescription from "../guestdetail/Hoteldescription"
import InsideNavbar from "../../../UI/BigNavbar/InsideNavbar";
import { motion } from "framer-motion";


const Reviewbooking = () => {
  const [loader, setLoader] = useState(false);
  const reducerState = useSelector((state) => state);
  const result =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult;

  let totalAdults = 0;
  let totalChildren = 0;

  result?.RoomGuests?.forEach((room) => {
    totalAdults += room?.NoOfAdults || 0;
    totalChildren += room?.NoOfChild || 0;
  });


  console.log(reducerState?.hotelSearchResult, "hotelreducer shaan")
  const storedFormData = JSON.parse(sessionStorage.getItem('hotelFormData'));
  const data = storedFormData.dynamicFormData[0];
  // console.log(storedFormData)
  return (
    <React.Fragment>
      {loader ? (
        <HotelLoading />
      ) : (

        <>
          <div className='mainimgHotelSearch'>

            <InsideNavbar />
          </div>

          <div className="my-4 margin-pecentage">
            <div className="container-fluid">
              <div className="row gy-4">
                <div className="col-lg-9 order-lg-1 order-md-2 order-sm-2">
                  <Reviewdescription />
                </div>
                <div className="col-lg-3 order-lg-2 order-md-1 order-sm-1">
                  <Sailsummary />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Reviewbooking;
