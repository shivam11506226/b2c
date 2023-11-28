
import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import Download from "../../components/Download";
import Footer from "../../layouts/Footer";
import Cabs from "../../components/Cabs";
import Bussearch from "./Bussearch";
import OfferCard from "../flight/OfferCard";
// bus css 
import "./bus.css";

const Taxi = () => {
    return (
        <div className="home_banner">
           
            <Bussearch></Bussearch>
            <OfferSwipeToSlide></OfferSwipeToSlide>
            <Toursection></Toursection>
             <OfferCard></OfferCard>
            <Cabs></Cabs>
            <Download></Download>
            

        </div>
    )
}
export default Taxi;
