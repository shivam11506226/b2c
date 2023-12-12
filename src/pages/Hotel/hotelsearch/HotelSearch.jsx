import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hotelresult from "../hotelresult/Hotelresult";
import HotelLoading from "../hotelLoading/HotelLoading";
import BigNavbar from "../../../UI/BigNavbar/BigNavbar";
import InsideNavbar from "../../../UI/BigNavbar/InsideNavbar";
import Navbar from "../../../layouts/Navbar";
import Mainheader from "../../../UI/Mainheader";
import "./hotelsearch.css"



const HotelSearch = () => {

  return (
    <>
      <div className='mainimgHotelSearch'>
        {/* <Navbar /> */}
        {/* <BigNavbar /> */}
        <InsideNavbar />
      </div>
      <div className="">
        <Hotelresult />
      </div>
    </>

  );
};

export default HotelSearch;
