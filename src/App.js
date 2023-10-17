import {  Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import BookWrapper from "./pages/flight/Bookwrapper";
import Searchresult from "./pages/flight/Searchresult";
import './App.css';
import LoginForm from "./components/Login";
import SignUp from "./components/Signup";
import Hotel from "./pages/Hotel/HotelHome";
import HotelHomeResult from "./pages/Hotel/hotelsearchresult/HotelSearchResult";
import HotelDetails from "./pages/Hotel/hoteldetails/HotelDetails";
import HotelSearchResult from "./pages/Hotel/hotelsearchresult/HotelSearchResult";
import HotelReviewBooking from "./pages/Hotel/hotelreviewbooking/HotelReviewBooking";
// Holiday package
import HolidayPackageSearchResult from "./pages/holidaypackages/holidaypackagesearchresult/HolidayPackageSearchResult";
import HolidaypackageInfo from "./pages/holidaypackages/holidaypackageInfo/HolidaypackageInfo";
import HolidayPassengerDetail from "./pages/holidaypackages/holidaypassengerdetail/HolidayPassengerDetail";
import Holidaypackages from "./pages/holidaypackages/Holidaypackages";

// Forex
import Forex from "./pages/forex/Forex";

// Bus
import Bus from "./pages/bus/Bus";
import BusReviewBooking from './pages/bus/busreviewbooking/BusReviewBooking';
import BusBookingConfirmation from './pages/bus/busbookingconfirmation/BusBookingConfirmation';
import BusSearchresult from './pages/bus/bussearchresult/BusSearchresult'
// Taxi
import Taxi from "./pages/taxi/Taxi";
import SeatLayout from './pages/bus/bussearchresult/SeatLayout';
import { StickyHeader } from './layouts/Header';
import Footer from './layouts/Footer';
import Mainheader from './UI/Mainheader';
import Navbar from "./layouts/Navbar";
function App() {
  return (
    <div className='background_gradient'>
          <Navbar/>
            <Mainheader />
      <Routes>

      <Route index element={<Home/>}></Route>
      <Route path="login" element={<LoginForm />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
      <Route path="Searchresult/booknow" element={<BookWrapper />}> </Route>
      <Route path="/Searchresult" element={<Searchresult />} />
      <Route path="hotel" element={<Hotel />}></Route>
      <Route path="/Hotelsearch" element={<HotelHomeResult/>}/>
        <Route path="/hotel/HotelDetails" element={<HotelDetails/>}/>
        <Route path="hotel/HotelSearchResult" element={<HotelSearchResult/>}/>
        <Route path="/HotelReviewBooking" element={<HotelReviewBooking/>}/>

        {/* Holiday packages routes */}
        <Route path="holidaypackages" element={<Holidaypackages />}></Route>
        <Route path="/HolidaypackageInfo" element={<HolidaypackageInfo/>}/> 
        <Route path="/holidaypassengerdetail" element={<HolidayPassengerDetail />}></Route>
        <Route path="/HolidayPackageSearchResult" element={<HolidayPackageSearchResult/>}/>

        {/* Bus */}
        <Route path="bus" element={<Bus />}></Route>
        <Route path="/bussearchresult" element={<BusSearchresult />}></Route>
        <Route path="/BusReviewBooking" element={<BusReviewBooking />}></Route>
        <Route path="/BusBookingConfirmation" element={<BusBookingConfirmation />}></Route>
        <Route path="/SelectBusSeat" element={<SeatLayout />}></Route>
        
        {/* Forex */}
        <Route path="/forex" element={<Forex/>}/>

        {/* Taxi */}
        <Route path="taxi" element={<Taxi />}></Route>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
