import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import SwipeToSlide from "../../components/Card";
import Download from "./Download";
import Footer from "../../layouts/Footer";
import Oneway from '../../components/Oneway';
import OfferCard from "../flight/OfferCard";
// home css 
import "./home.css";

const Home = () => {
    return (
        <div className="home_banner">
            {/* <Homeform header=""></Homeform> */}
            <Oneway header="" />
            {/* <OfferSwipeToSlide></OfferSwipeToSlide> */}
            <Toursection></Toursection>
            <OfferCard/>
            <SwipeToSlide></SwipeToSlide>
            <Download></Download>
          

        </div>
    )
}
export default Home;
