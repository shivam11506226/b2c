// import React from 'react';
// import Footer from '../../../layouts/Footer';
// import Blankdiv from '../../home/searchresult/Blankdiv';
// import Searchnavbar from '../../home/searchresult/Searchnavbar';
// import BusReasultForm from '../bussearchresult/BusReasultForm';
// import BusSearchReview from './BusSearchReview';
// // import "./bussearchresult.css";

// const BusReviewBooking = () => {
//   return (
//    <div className='bus_banner'>


//             <BusReasultForm/>


//         </div>
//   )
// }

// export default BusReviewBooking





import React, { useState } from "react";

import { Box, Grid, Typography, Link, Button } from "@mui/material";
// import BusSaleSummary from "../busPassengerDetail/BusSaleSummary";
import BusSaleSummary from "../bussearchresult/BusSaleSummary";

import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { busBookAction } from "../../../Redux/busSearch/busSearchAction";
// import { balanceSubtractRequest } from "../../../Redux/Auth/balaceSubtract/actionBalnceSubtract";
import { useEffect } from "react";
import "./busreviewbooking.css"
import dayjs from "dayjs";
import axios from "axios";
import Swal from "sweetalert2";
// import { apiURL } from "../../../Constants/constant";
import { motion } from "framer-motion";
import InsideNavbar from "../../../UI/BigNavbar/InsideNavbar";

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};



const BusReviewBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const [publishedPrice, setPublishedPrice] = useState(0);
  const [offerPrice, setOfferedPrice] = useState(0);
  const [tds, setTds] = useState(0);
  const [userData, setUserData] = useState(null);
  const isNavigate = reducerState?.getBusResult?.isLoadingBook || true;

  // console.log("======================", reducerState);
  const busBlockData =
    reducerState?.getBusResult?.busBlock?.data?.data?.BlockResult;
  // console.log("************************", busBlockData);
  const busFullData =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult;
  // console.log(busFullData, "bus full data");
  const seatData = sessionStorage.getItem("seatData");
  const parsedSeatData = JSON.parse(seatData);
  const passengerCount = parsedSeatData?.blockedSeatArray.length;
  const resultIndex = parsedSeatData?.resultIndex;
  const boardingPoint = parsedSeatData?.selectedOrigin;
  const droppingPoint = parsedSeatData?.selectedDropPoint;
  const seatObject = parsedSeatData?.blockedSeatArray;
  const markUpamount =
    reducerState?.userData?.userData?.data?.data?.markup?.bus;

  // console.log(seatObject);
  const published = seatObject.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + currentValue?.Price?.BasePrice;
  },
    0);
  const offeredPrice = seatObject.reduce(
    (accumulator, currentValue, currentIndex, array) => {
      return accumulator + currentValue?.Price?.OfferedPrice;
    },
    0
  );
  const tdsTotal =
    markUpamount +
    seatObject.reduce((accumulator, currentValue) => {
      return accumulator + currentValue?.Price?.TDS;
    }, 0);
  useEffect(() => {
    setOfferedPrice(offeredPrice);
    setPublishedPrice(published);
    setTds(tdsTotal);
  }, []);
  const userId = reducerState?.logIn?.loginData?.data?.data?.id;
  const userBalance = reducerState?.userData?.userData?.data?.data?.balance;


  const handleBookBus = async () => {
    try {
      const payload = {
        EndUserIp: reducerState?.ip?.ipData,
        ResultIndex: JSON.stringify(resultIndex),
        TraceId: busBlockData?.TraceId,
        TokenId: reducerState?.ip?.tokenData,
        BoardingPointId: boardingPoint,
        DroppingPointId: droppingPoint,
        Passenger: busBlockData?.Passenger,
      };
      if (userBalance >= tds + publishedPrice) {
        dispatch(busBookAction(payload));

        // If dispatch is successful, navigate to the specified route
        navigate("/Busbookingconfirmation");

        if (userId) {
          const balancePayload = {
            _id: userId,
            amount: tds + publishedPrice,
          };

          // dispatch(balanceSubtractRequest(balancePayload));
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Balance is insufficient for this transaction.",
          footer: "Please recharge",
          showCancelButton: false,
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/Login");
          }
        });
      }

      // Dispatch the busBookAction asynchronously

      // Log the reducerState
    } catch (error) {
      // Handle any errors that occurred during dispatching the action
      console.error("Error occurred while booking bus:", error);
    }
  };



  const selectedBus = busFullData.BusResults.find((bus) => bus.ResultIndex === resultIndex);
  // console.log(selectedBus, "selectedBus")
  const cancellationPolicy = selectedBus?.CancellationPolicies;

  const dateString = selectedBus?.DepartureTime;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = date.toLocaleString("en-US", options);

  const [month, day, year, time, ampm] = formattedDate.split(" ");
  const desiredFormat = `${day}${month}-${year} ${time} ${ampm}`;

  const dateString1 = selectedBus?.ArrivalTime;
  const date1 = new Date(dateString1);
  const options1 = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate1 = date1.toLocaleString("en-US", options1);
  const [month1, day1, year1, time1, ampm1] =
    formattedDate1.split(" ");
  const desiredFormat1 = `${day1}${month1}-${year1} ${time1} ${ampm1}`;



  const cancelFromDate = dayjs(cancellationPolicy[0]?.FromDate.slice(0, 9));
  const cancelToDateTime = dayjs(cancellationPolicy[0]?.FromDate.slice(11, 18));
  const cancelFromDateFormatted = cancelFromDate.format("DD MMM, YY");
  const cancelToDateTimeFormatted = cancelToDateTime.format("DD MMM, YY");



  const storedPassengerData = JSON.parse(sessionStorage.getItem("busPassName"));

  return (
    <>

      <div className='mainimgBusSearch'>
        {/* <Navbar /> */}
        {/* <BigNavbar /> */}
        <InsideNavbar />
      </div>
      <div className="margin-pecentage py-4">
        <div className="container-xxl ">
          <div className="row">
            <motion.div variants={variants} initial="initial"
              whileInView="animate" className="col-lg-9 order-lg-1  order-md-2 order-sm-2">
              <motion.div variants={variants} className="col-lg-12 shad" style={{ marginTop: "-117px" }} >

                <div className="busAllDetail">
                  <div className="heead">
                    <span>
                      {selectedBus?.TravelName}
                    </span>
                  </div>
                  <div className="busAllReview">
                    <div>
                      <p>
                        Origin
                      </p>
                      <span>
                        {selectedBus?.BoardingPointsDetails &&
                          selectedBus.BoardingPointsDetails.length > 0 &&
                          selectedBus.BoardingPointsDetails[0].CityPointLocation}
                      </span>
                    </div>
                    <div>
                      <p>
                        Departure Date Time
                      </p>
                      <span>
                        {desiredFormat}
                      </span>
                    </div>
                  </div>
                  <div className="busAllReview">
                    <div>
                      <p>
                        Destination
                      </p>
                      <span>
                        {selectedBus?.DroppingPointsDetails &&
                          selectedBus.DroppingPointsDetails.length > 0 &&
                          selectedBus.DroppingPointsDetails[0].CityPointLocation}
                      </span>
                    </div>
                    <div>
                      <p>
                        Arrival Date Time
                      </p>
                      <span>{desiredFormat1}</span>
                    </div>
                  </div>
                </div>


                {/* <div className="busAllDetail">
                  <div>
                    <p>
                      Bus Name
                    </p>
                    <span>
                      {selectedBus?.TravelName}
                    </span>
                  </div>
                  <div>
                    <p>
                      Origin
                    </p>
                    <span>
                      {selectedBus?.BoardingPointsDetails &&
                        selectedBus.BoardingPointsDetails.length > 0 &&
                        selectedBus.BoardingPointsDetails[0].CityPointLocation}
                    </span>
                  </div>
                  <div>
                    <p>
                      Destination
                    </p>
                    <span>
                      {selectedBus?.DroppingPointsDetails &&
                        selectedBus.DroppingPointsDetails.length > 0 &&
                        selectedBus.DroppingPointsDetails[0].CityPointLocation}
                    </span>
                  </div>
                  <div>
                    <p>
                      Departure Date Time
                    </p>
                    <span>
                      {desiredFormat}
                    </span>
                  </div>
                  <div>
                    <p>
                      Arrival Date Time
                    </p>
                    <span>
                      <span>{desiredFormat1}</span>
                    </span>
                  </div>
                </div> */}
              </motion.div>

              {/* <motion.div variants={variants} className="col-lg-12 my-3">
                
              </motion.div> */}

              <motion.div variants={variants} className="col-lg-12 my-3">
                <div className="passengerDetBox">
                  <p>Passenger Details</p>
                  <span>{passengerCount} Adult(s)</span>
                </div>
              </motion.div>
              <motion.div variants={variants} className="col-lg-12 my-3">


                {storedPassengerData.map((passenger, index) => (
                  <div key={index} className="passDetails">
                    <div>
                      <p>Name:</p>
                      <p>Age:</p>
                      <p>Email:</p>
                    </div>
                    <div>
                      <span>{passenger.FirstName} {passenger.LastName}</span>
                      <span>{passenger.Age} Years Old</span>
                      <span>{passenger.Email}</span>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={variants} className="col-lg-12 my-3">
                <div className="passengerDetBox">
                  <p>Cancellation Policy</p>
                </div>
              </motion.div>
              <motion.div variants={variants} className="col-lg-12 my-3">
                <div className="CancelRulesBus">
                  <table class="table table-striped tabCancel">
                    <thead>
                      <tr>
                        <th scope="col">Cancellation Time</th>
                        <th scope="col">Cancellation Charges</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cancellationPolicy?.map((item, index) => {
                        const cancelFromDate = dayjs(item?.FromDate.slice(0, 10));
                        const cancelToDateTime = dayjs(item?.ToDate.slice(0, 10)); // Make sure ToDate is the correct property name
                        const cancelFromDateFormatted = cancelFromDate.format("DD MMM, YY");
                        const cancelToDateTimeFormatted = cancelToDateTime.format("DD MMM, YY");

                        return (
                          <tr key={index}>
                            <td>
                              from {item?.FromDate.slice(11, 16)} {cancelFromDateFormatted} to {item.ToDate.slice(11, 16)} {cancelToDateTimeFormatted}
                            </td>
                            <td>{item?.CancellationCharge}%</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div variants={variants} className="col-lg-12 mt-4 bookBus">
                <button onClick={handleBookBus}>Book Ticket</button>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }} className="col-lg-3 order-lg-2 mb-md-4 mb-sm-4  order-md-1 order-sm-1">
              <BusSaleSummary />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusReviewBooking;

