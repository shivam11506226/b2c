import React from 'react'
// import Footer from "../../layouts/Footer";
// import Toursection from "../../components/Toursection";
// import SwipeToSlide from "../../components/Card";
// import OfferSwipeToSlide from "../../components/Offerscard";
import Hotelpackageform from "../../components/Hotelpackageform";
// import BestPackage from './HolidayComponents/BestPackage';
// import ExploreUnexplored from './HolidayComponents/ExploreUnexplored';
// import HolidayTheme from './HolidayComponents/HolidayTheme';
// import Travvolt from '../../images/img/Travvolt.png';
// import { Box } from '@mui/material';
import OfferCard from '../flight/OfferCard';
import Download from '../home/Download';
import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
import BigNavbar from "../../UI/BigNavbar/BigNavbar";

const Hotelpackages = () => {
    return (
        <React.Fragment>

            <div className='mainimg'>
                <Navbar />
                <BigNavbar />
                <Mainheader />
            </div>
            <Hotelpackageform />
            <OfferCard />
            <Download />
        </React.Fragment>
    )
}

export default Hotelpackages;
