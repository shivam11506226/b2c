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
import HotelForm from "./HotelForm";
import HotelLoading from "./hotelLoading/HotelLoading";
import { motion } from "framer-motion";


const variants = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};



const Hotelhome = () => {
    return (
        <motion.div className="hotel_banner" >
            <HotelForm />
            <motion.div variants={variants} initial="initial"
                whileInView="animate" >
                <Toursection variants={variants} />
            </motion.div>
            <motion.div variants={variants} initial="initial"
                whileInView="animate">
                <LuxurySection variants={variants} />
            </motion.div >
            <motion.div variants={variants} initial="initial"
                whileInView="animate" >
                <OfferSwipeToSlide variants={variants} />
            </motion.div>
            <motion.div variants={variants} initial="initial"
                whileInView="animate" >
                <Download variants={variants} />
            </motion.div>

        </motion.div>
    )
}
export default Hotelhome;