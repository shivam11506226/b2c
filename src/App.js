import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import BookWrapper from "./pages/flight/Bookwrapper";
import Searchresult from "./pages/flight/Searchresult";
import "./App.css";
import LoginForm from "./components/Login";
import SignUp from "./components/Signup";
import Hotel from "./pages/Hotel/HotelHome";
// import HotelHomeResult from "./pages/Hotel/hotelsearchresult/HotelSearchResult";
// import HotelDetails from "./pages/Hotel/hoteldetails/HotelDetails";
// import HotelSearchResult from "./pages/Hotel/hotelsearchresult/HotelSearchResult";
// import HotelReviewBooking from "./pages/Hotel/hotelreviewbooking/HotelReviewBooking";
// Holiday package
import HolidayPackageSearchResult from "./pages/holidaypackages/holidaypackagesearchresult/HolidayPackageSearchResult";
import HolidaypackageInfo from "./pages/holidaypackages/holidaypackageInfo/HolidaypackageInfo";
import HolidayPassengerDetail from "./pages/holidaypackages/holidaypassengerdetail/HolidayPassengerDetail";
import Holidaypackages from "./pages/holidaypackages/Holidaypackages";
import Payment from "./pages/flight/Payment";
import Booking from "./pages/Return/Booking";
import CompleteBooking from "./pages/Return/CompleteBooking";
// Forex
import Forex from "./pages/forex/Forex";

// Bus
import Bus from "./pages/bus/Bus";
import BusReviewBooking from "./pages/bus/busreviewbooking/BusReviewBooking";
import BusBookingConfirmation from "./pages/bus/busbookingconfirmation/BusBookingConfirmation";
import BusSearchresult from "./pages/bus/bussearchresult/BusSearchresult";
// Taxi
import Taxi from "./pages/taxi/Taxi";
import SeatLayout from "./pages/bus/bussearchresult/SeatLayout";
import { StickyHeader } from "./layouts/Header";
import Footer from "./layouts/Footer";
import Mainheader from "./UI/Mainheader";
import Mainheader1 from "./UI/Mainheader1";
import Navbar from "./layouts/Navbar";
import OfferCard from "./pages/flight/OfferCard";
import { useLocation } from "react-router-dom";
import ReturnFlight from "./pages/Return/ReturnFlight";
import PaymentReturn from "./pages/Return/PaymentReturn";
import Conformation from "./pages/Return/Conformation";
import NonStopFlight from "./pages/Return/NonStopFlight";
import BusResult from "./pages/bus/bussearchresult/BusResult";
import Download from "./pages/home/Download";
import Holidayinfo from "./pages/holidaypackages/holidaypackagesearchresult/Holidayinfo";

import BigNavbar from "./UI/BigNavbar/BigNavbar";


import HotelSearch from './pages/Hotel/hotelsearch/HotelSearch';
import HotelBooknow from './pages/Hotel/hotelbokknow/HotelBooknow'
import Reviewbooking from './pages/Hotel/hotelreviewbooking/Reviewbooking'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMarkUpAction } from './Redux/markup/markupAction';
import Guestdetail from "./pages/Hotel/hotelreviewbooking/Reviewbooking";


function App() {
  const location = useLocation();
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getMarkUpAction())
  })

  const isSearchResult = location.pathname.includes("/Searchresult");
  const isPayment = location.pathname.includes("/payment");
  return (
    <div className="background_gradient">
      {/* /Searchresult */}


      {/* <div className="mainimg">

        <Navbar />

        <BigNavbar />

        <Mainheader />
      </div> */}

      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<LoginForm />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="Searchresult/booknow" element={<BookWrapper />}>
          {" "}
        </Route>
        <Route path="/Searchresult" element={<Searchresult />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/returnflight" element={<ReturnFlight />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/completebooking" element={<CompleteBooking />} />
        <Route path="/paymentReturn" element={<PaymentReturn />} />
        <Route path="/conformation" element={<Conformation />} />
        <Route path="/nonstopflight" element={<NonStopFlight />} />

        <Route path="hotel" element={<Hotel />}></Route>
        {/* <Route path="/Hotelsearch" element={<HotelHomeResult />} /> */}
        <Route path="/hotel/hotelsearch" element={<HotelSearch />} />
        <Route
          exact
          path="/hotel/hotelsearch/HotelBooknow"
          element={<HotelBooknow />}
        />
        <Route
          exact
          path="/hotel/hotelsearch/HotelBooknow/Reviewbooking"
          element={<Reviewbooking />}
        />
        <Route
          exact
          path="/hotel/hotelsearch/HotelBooknow/Reviewbooking/GuestDetail"
          element={<Guestdetail />}
        />

        {/* Holiday packages routes */}
        <Route path="holidaypackages" element={<Holidaypackages />}></Route>

        <Route path="/HolidayInfo" element={<Holidayinfo />} />

        <Route path="/HolidaypackageInfo" element={<HolidaypackageInfo />} />

        <Route
          path="/holidaypassengerdetail"
          element={<HolidayPassengerDetail />}
        ></Route>
        <Route
          path="/HolidayPackageSearchResult"
          element={<HolidayPackageSearchResult />}
        />

        {/* Bus */}
        <Route path="bus" element={<Bus />}></Route>
        <Route path="/bussearchresult" element={<BusSearchresult />}></Route>
        <Route path="/BusReviewBooking" element={<BusReviewBooking />}></Route>
        <Route
          path="/BusBookingConfirmation"
          element={<BusBookingConfirmation />}
        ></Route>
        <Route path="/SelectBusSeat" element={<SeatLayout />}></Route>
        <Route path="/busresult" element={<BusResult />}></Route>

        {/* Forex */}
        <Route path="/forex" element={<Forex />} />

        {/* Taxi */}
        <Route path="taxi" element={<Taxi />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
