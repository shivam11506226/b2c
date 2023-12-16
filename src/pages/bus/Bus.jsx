
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import Download from "../../pages/home/Download";
import Footer from "../../layouts/Footer";
import Bussearch from "./Bussearch";
import OfferCard from "../flight/OfferCard";
import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
import BigNavbar from "../../UI/BigNavbar/BigNavbar";
// bus css  
import "./bus.css";

const Taxi = () => {
    return (
        <div>

            <div className='mainimg'>
                <Navbar />
                <BigNavbar />
                <Mainheader />
            </div>

            <Bussearch />
            <Toursection />
            <OfferCard />
            <Download />
        </div>
    )
}
export default Taxi;
