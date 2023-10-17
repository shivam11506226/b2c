import React from 'react';
import Footer from '../../../layouts/Footer';
import './holidaypackagesearchresult.css';
import Searchnavbar from '../../home/searchresult/Searchnavbar';
import Blankdiv from '../../home/searchresult/Blankdiv';
import HolidayPackagesDetail from './HolidayPackagesDetail';
import OfferSwipeToSlide from '../../../components/Offerscard';

const HolidayPackageSearchResult = () => {
    return (
        <div className='holiday_package_banner'>
            <Searchnavbar />
            <Blankdiv/>
            <HolidayPackagesDetail/>
            <OfferSwipeToSlide/>
            <Footer></Footer>
        </div>
    )
}

export default HolidayPackageSearchResult
