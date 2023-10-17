import React from "react";
import "./hoteldetail.css";
import Footer from "../../../layouts/Footer";
import HotelResult from "./HotelResult";
import Blankdiv from "../../home/searchresult/Blankdiv";
import Searchnavbar from "../../home/searchresult/Searchnavbar";
import HotelDetailsInfo from "./HotelDetailsInfo"
import { useSelector } from "react-redux";

const HotelDetails = () => {
  const reducerState = useSelector((state) => state);
  console.log("✌️ for loader", reducerState?.hotelSearchResult?.ticketData?.data?.status
  );
 
  return (
    <div className="hotel_banner">
      <Searchnavbar />

        <Blankdiv />

        <HotelDetailsInfo />
        <HotelResult /> 
          <Footer />
 
    </div>
  );
};

export default HotelDetails;
