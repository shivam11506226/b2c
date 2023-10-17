import React from 'react';
import Footer from '../../../layouts/Footer';
import './passengerdetails.css';
import Blackdiv from '../../home/searchresult/Blankdiv';
import HolidayPackageForm from '../HolidayComponents/HolidayPackageForm';
import PassengerDetailForm from './PassengerDetailForm';

const HolidayPassengerDetail = () => {
  return (
    <div className='passenger_detail_banner'>
     
      <Blackdiv />
      <HolidayPackageForm />
      <PassengerDetailForm/>
      <Footer/>
    </div>
  )
}

export default HolidayPassengerDetail
