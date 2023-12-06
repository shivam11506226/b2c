import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import SwipeToSlide from "../../components/Card";
import Download from "./Download";
import Footer from "../../layouts/Footer";
import Oneway from '../../components/Oneway';
import OfferCard from "../flight/OfferCard";
import "./home.css";
import FlightLoader from "../flight/FlightLoader/FlightLoader";

const Home = () => {
    return (
        <div className="home_banner">
            {/* <Homeform header=""></Homeform> */}
            <Oneway header="" />
            {/* <OfferSwipeToSlide></OfferSwipeToSlide> */}

            {/* <Toursection></Toursection> */}
            <Toursection />
            <OfferCard />
            <SwipeToSlide />
            <Download />



        </div>
    )
}
export default Home;
