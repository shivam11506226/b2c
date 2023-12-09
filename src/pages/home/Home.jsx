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
import BigNavbar from "../../UI/BigNavbar/BigNavbar";

const Home = () => {
    return (
        <div className="home_banner">
            <div className='mainimg'>
                <Navbar />
                <BigNavbar />
                <Mainheader />
            </div>
            <Oneway header="" />
            <Toursection />
            <OfferCard />
            <SwipeToSlide />
            <Download />



        </div>
    )
}
export default Home;
