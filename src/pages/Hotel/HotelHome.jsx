// components importing
import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
import Hotelsearch from "./Hotelsearch";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import SwipeToSlide from "../../components/Card";
import Download from "../../components/Download";
import Footer from "../../layouts/Footer";
import LuxurySection from "../../components/LuxurySection";

// hotelHome.css link 
import "./hotelhome.css";

const Hotelhome = () => {
    return (
        <div className="hotel_banner">
            
            <Hotelsearch header="Book Domestic and International Property Online. To list your property click here"></Hotelsearch>
            <Toursection></Toursection>
            <LuxurySection />
            <OfferSwipeToSlide></OfferSwipeToSlide>
            <Download></Download>
          
        </div>
    )
}
export default Hotelhome;