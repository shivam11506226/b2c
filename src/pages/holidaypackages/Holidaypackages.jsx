import React from 'react'
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import Mainheader from "../../UI/Mainheader";
import Toursection from "../../components/Toursection";
import Download from "../../components/Download";
import SwipeToSlide from "../../components/Card";
import OfferSwipeToSlide from "../../components/Offerscard";
import Hotelpackageform from "../../components/Hotelpackageform";
import BestPackage from './HolidayComponents/BestPackage';
import ExploreUnexplored from './HolidayComponents/ExploreUnexplored';
import HolidayTheme from './HolidayComponents/HolidayTheme';
import Travvolt from '../../images/img/Travvolt.png';
import { Box } from '@mui/material';

const Hotelpackages = () => {
    return (
        <React.Fragment>
            <div className="homestay_panner">
               
                <Hotelpackageform header="Book International and Domestic Hotel Packages."></Hotelpackageform>
                <Box textAlign='center' display='flex' alignItems='center' px={23} mt={3}>
                    <img src={Travvolt} style={{ width: '100%' }} />
                </Box>
                <Toursection></Toursection>
                {/* <SwipeToSlide></SwipeToSlide>
            <SwipeToSlide></SwipeToSlide> */}
                <BestPackage />
                <ExploreUnexplored />
                {/* <OfferSwipeToSlide></OfferSwipeToSlide> */}
                <HolidayTheme />
                <Download></Download>
              
            </div>

        </React.Fragment>
    )
}

export default Hotelpackages;
