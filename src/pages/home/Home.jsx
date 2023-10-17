import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import SwipeToSlide from "../../components/Card";
import Download from "./Download";
import Footer from "../../layouts/Footer";
import Oneway from '../../components/Oneway';

// home css 
import "./home.css";

const Home = () => {
    return (
        <div className="home_banner">
            {/* <Homeform header="Book International and Domestic Flights"></Homeform> */}
            <Oneway header="Book International and Domestic Flights" />
            <OfferSwipeToSlide></OfferSwipeToSlide>
            <Toursection></Toursection>
            <SwipeToSlide></SwipeToSlide>
            <Download></Download>
          

        </div>
    )
}
export default Home;
