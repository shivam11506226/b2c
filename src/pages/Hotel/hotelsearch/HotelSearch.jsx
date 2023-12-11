import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hotelresult from "../hotelresult/Hotelresult";
import HotelLoading from "../hotelLoading/HotelLoading";
import BigNavbar from "../../../UI/BigNavbar/BigNavbar";
import Navbar from "../../../layouts/Navbar";
import Mainheader from "../../../UI/Mainheader";


const HotelSearch = () => {

  return (
    <>
      <div className='mainimg'>
        <Navbar />
        <BigNavbar />
        <Mainheader />
      </div>
      <div className="">
        <Hotelresult />
      </div>
    </>

  );
};

export default HotelSearch;
