import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hotelresult from "../hotelresult/Hotelresult";
import HotelLoading from "../hotelLoading/HotelLoading";
const HotelSearch = () => {

  return (
    <div className="container-fluid margin-pecentage">
      <Hotelresult />
      {/* <HotelLoading /> */}
    </div>
  );
};

export default HotelSearch;
