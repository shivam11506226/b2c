import React from 'react';
import Footer from '../../../layouts/Footer';
import Blankdiv from '../../home/searchresult/Blankdiv';
import Searchnavbar from '../../home/searchresult/Searchnavbar';
import BusReasultForm from '../bussearchresult/BusReasultForm';
import BusSearchReview from './BusSearchReview';
// import "./bussearchresult.css";

const BusReviewBooking = () => {
  return (
   <div className='bus_banner'>
            <Searchnavbar />
            <Blankdiv />
            <BusReasultForm/>
            <BusSearchReview />
            <Footer />
        </div>
  )
}

export default BusReviewBooking
