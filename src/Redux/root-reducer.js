import { combineReducers } from "redux";
import { oneWayReducer } from "./FlightSearch/oneWayReducer";
import { ipReducer } from "./IP/ipReducer";
import { flightFareReducer } from "./FlightFareQuoteRule/flightFareReducer";
import { flightBookReducer } from "./FlightBook/flightBookReducer";
import { logInReducer } from "./Auth/logIn/logInReducer";
import { clearHotelReducer } from "./Hotel/hotel";
import { hotelReducer } from "./Hotel/hotelReducer";
import { clearBusSearchReducer } from "./busSearch/busSearchAction";
import { searchPackageReducer } from "./SearchPackage/searchPackageReducer";
import { searchOnePackageReducer } from "./OnePackageSearchResult/searchOnePackageReducer";
import {packageBookingReducer} from "./HolidayBook/bookingHolidayReducer"
import { busSearchReducer, getBusSeatReducer } from "./busSearch/busSearchReducer";
import { packageBookIDReducer } from "./HolidayBookingRequest/bookingHolidayReducer";
import { packageBookingIDReducer } from "./BookingPackageData/bookingHolidayReducer";

const appReducer = combineReducers({
    logIn: logInReducer,  
    oneWay: oneWayReducer,
    ip: ipReducer,
    flightFare: flightFareReducer,
    flightBook: flightBookReducer,
    hotelSearchResult: hotelReducer,
    getBusResult: busSearchReducer,
    getBusSeat: getBusSeatReducer,
    searchResult: searchPackageReducer,
    searchOneResult: searchOnePackageReducer,
    packageBook: packageBookingReducer,
    packageBookingID:packageBookingIDReducer
});

const rootReducer = (state, action) => {
    if (action.type === "CLEAR_ONEWAY_REDUCER") {
        return {
          ...state,
          oneWay: oneWayReducer(undefined, action),
        };
      }
      // else if (action.type === "CLEAR_HOTEL_REDUCER") {
      //   return {
      //     ...state,
      //     hotelSearchResult: hotelReducer(undefined, action),
      //   };
      // } else if (action.type === "CLEAR_FARE_DETAILS_REDUCER") {
      //   return {
      //     ...state,
      //     flightFare: flightFareReducer(undefined, action),
      //   };
      // }
  return appReducer(state, action);
};
export default rootReducer;


// import { combineReducers } from "redux";
// import { oneWayReducer } from "./FlightSearch/oneWayReducer";
// import { ipReducer } from "./IP/ipReducer";
// import { flightFareReducer } from "./FlightFareQuoteRule/flightFareReducer";

// const appReducer = combineReducers({
//     oneWay: oneWayReducer,
//     ip: ipReducer,
//     flightFare: flightFareReducer,
// });

// const rootReducer = (state, action) => {
// //   if (action.type === LOGOUT_REQUEST || action.type == ADMIN_SIGN_OUT_REQUEST) {
// //     storage.removeItem("persist:root");
// //     return appReducer(undefined, action);
// //   }
// if (action.type === "CLEAR_ONEWAY_REDUCER") {
//     return {
//       ...state,
//       oneWay: oneWayReducer(undefined, action),
//     };
//   }
//   return appReducer(state, action);
// };
// export default rootReducer;
