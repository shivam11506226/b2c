import React from 'react';
import Footer from '../../../layouts/Footer';
import Searchnavbar from '../../home/searchresult/Searchnavbar';
import Blackdiv from '../../home/searchresult/Blankdiv';
import "./holidaypackageinfo.css";
import HolidayPackageForm from '../HolidayComponents/HolidayPackageForm';
import HolidayPackageInfofield from './HolidayPackageInfofield';

const HolidaypackageInfo = () => {
  return (
    <div className='holiday_banner'>
      <Searchnavbar />
      <Blackdiv />
      <HolidayPackageForm />
      <HolidayPackageInfofield/>
      <Footer />

    </div>
  )
}

export default HolidaypackageInfo;
