
import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import Download from "../../pages/home/Download";
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
          
            <Toursection></Toursection>
             <OfferCard></OfferCard>
             <Download/>
            

        </div>
    )
}
export default Taxi;
