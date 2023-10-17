import React from 'react';
import Footer from '../../../layouts/Footer';
import Blankdiv from '../../home/searchresult/Blankdiv';
import Searchnavbar from '../../home/searchresult/Searchnavbar';
import Searchresult from '../../home/searchresult/Searchresult';
import HotelResultInfo from './HotelResultInfo';
import "./hotelsearchresult.css";
import HotelSearcResultDetail from './HotelSearcResultDetail';

const HotelSearch = () => {
  return (
    <div className='hotel_search_banner'>
      <Searchnavbar/>
      <Blankdiv/>
      <HotelSearcResultDetail/>
      <HotelResultInfo/>
      <Footer/>
    </div>
  )
}

export default HotelSearch
