import axios from "axios";
import { apiURL } from "../../Constants/constant";

function api() {
  const userIP = (formData) => {
    return axios.get("https://api.ipify.org?format=json");
  };
  const userB2BToken = (payload) => {
    return axios({
      method: "POST",
      url: "skytrails/token",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const userB2CLogin = (payload) => {
    console.log("payload", payload);
    return axios({
      method: "POST",
      url: "api/auth/signin",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    })
  };

  // Flight Api start From here ⬇️
  const oneWaySearch = (payload) => {
    return axios({
      method: "POST",
      url: "/skytrails/flight/search/oneway",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const flightQuoteSearch = (payload) => {
    return axios({
      method: "POST",
      url: "/skytrails/flight/farequote",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const flightRuleSearch = (payload) => {
    return axios({
      method: "POST",
      url: "/skytrails/flight/farerule",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const flightBookGDS = (payload) => {
    return axios({
      method: "POST",
      url: "skytrails/flight/booking",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const flightGetTicketLcc = (payload) => {
    return axios({
      method: "POST",
      url: "skytrails/flight/getticketlcc",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const flightGetTicketNonLcc = (payload) => {
    return axios({
      method: "POST",
      url: "skytrails/flight/getticketnonlcc",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  //Hotel API's Start
  const hotelSearch = (payload) => {
    return axios({
      method: "POST",
      url: "skytrails/hotel/search/dedup",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const hotelSearchInfo = (payload) => {
    return axios({
      method: "POST",
      url: "skytrails/hotel/searchinfo",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const hotelRoomInfo = (payload) => {
    return axios({
      method: "POST",
      url: "skytrails/hotel/room",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const hotelBlockRoom = (payload) => {
    return axios({
      method: "POST",
      url: "skytrails/hotel/blockroom",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const hotelBookRoom = (payload) => {
    return axios({
      method: "POST",
      url: "skytrails/hotel/bookroom",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const hotelBookingDetails = (payload) => {
   console.log("payload of api 👍")
    return axios({
      method: "POST",
      url: "skytrails/hotel/bookingdetails",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  // Holiday Package API
  const searchPackage = (payload) => {
    console.log("searchPackage" + payload.destination);
    console.log("searchPackage" + payload.days);
    const { destination, days } = payload;
    const axiosConfig = {
    baseURL: `${apiURL.baseURL}`,
  };
    return axios.get(
      `skytrails/international/getAll?filter=${days}&keyword=${destination}`, axiosConfig
    );
  };

  const getOnePackage = (payload) => {
    const axiosConfig = {
      baseURL: `${apiURL.baseURL}`,
    };
    return axios.get(
      `skytrails/international/getone/${payload}`,axiosConfig
    );
  };

  const bookingHoliday = (payload) => {

    return axios({
      method: "POST",
      url: "skytrails/international/pakageBooking",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };


  // Bus API start from here
  const getBusSearch = (payload) => {
    return axios({
      method: "POST",
      url: "skytrails/bus/search",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const getBusSeatLayout = (payload) => {
    return axios({
      method: "POST",
      url: "skytrails/bus/seatlayout",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return {
    userIP,
    userB2CLogin,
    // adminSignOut,
    userB2BToken,
    oneWaySearch,
    flightQuoteSearch,
    flightRuleSearch,
    flightGetTicketLcc,
    flightBookGDS,
    flightGetTicketNonLcc,
    hotelSearch,
    hotelSearchInfo,
    hotelRoomInfo,
    hotelBlockRoom,
    hotelBookRoom,
    hotelBookingDetails,
    searchPackage,
    getOnePackage,
    bookingHoliday,
    getBusSearch,
    getBusSeatLayout,
  };
}

const userApi = api();

export default userApi;
