import React from 'react'
import Footer from '../../../layouts/Footer';
import Blankdiv from '../../home/searchresult/Blankdiv';
import Searchnavbar from '../../home/searchresult/Searchnavbar';
import BusReasultForm from '../bussearchresult/BusReasultForm';
import BusBookingDetails from './BusBookingDetails';


const BusBookingConfirmation = () => {
  return (
    <div>
       <div className='bus_banner'>
            <Searchnavbar />
            <Blankdiv />
            <BusReasultForm/>
            <BusBookingDetails />
            <Footer />
        </div>
    </div>
  )
}

export default BusBookingConfirmation
