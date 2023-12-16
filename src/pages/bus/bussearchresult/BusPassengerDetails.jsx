
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
    Box,
    Button,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Input from "@mui/material/Input";
import "./buspassengerdetail.css";
import BusSaleSummary from "./BusSaleSummary";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { busSeatBlockAction } from "../../../Redux/busSearch/busSearchAction";
import { busSeatBlockAction } from "../../../Redux/busSearch/busSearchAction";
import dayjs from "dayjs";
// import busArrow from '../../../Images/busArrow.png'
import { motion } from "framer-motion";
import { busSearchAction } from "../../../Redux/busSearch/busSearchAction";
import Divider from "@mui/material/Divider";
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

const BusPassengerDetail = () => {
    const navigate = useNavigate();
    const reducerState = useSelector((state) => state);
    // console.log("..................", reducerState);
    const dispatch = useDispatch();
    const busFullData =
        reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult;
    // console.log(busFullData, "bus full data");
    const passengerLists = [];
    const [accordionExpanded, setAccordionExpanded] = useState(false);
    const [sub, setSub] = useState(true);
    const seatData = sessionStorage.getItem("seatData");
    const parsedSeatData = JSON.parse(seatData);
    // console.log(parsedSeatData, "parsed seat data");
    const passengerCount = parsedSeatData?.blockedSeatArray.length;
    const resultIndex = parsedSeatData?.resultIndex;
    const boardingPoint = parsedSeatData?.selectedOrigin;
    const droppingPoint = parsedSeatData?.selectedDropPoint;
    // console.log(passengerCount);
    const passengerTemplate = {
        LeadPassenger: true,
        PassengerId: 0,
        Title: "Mr.",
        Address: "",
        Age: 22,
        Email: "",
        FirstName: "",
        Gender: 1,
        IdNumber: null,
        IdType: null,
        LastName: "",
        Phoneno: "",
    };
    const handleAccordionChange = (index) => (event, isExpanded) => {
        setAccordionExpanded(isExpanded ? index : false);
    };
    for (let i = 0; i < passengerCount; i++) {
        passengerLists.push({
            ...passengerTemplate,
            LeadPassenger: i === 0, // Set the first passenger as the lead passenger
        });
    }
    const [passengerList, setPassengerList] = useState(passengerLists);
    const allPassenger = [passengerLists];
    const [passengerData, setPassengerData] = useState(allPassenger.flat());


    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const updatedPassenger = [...passengerData];
        updatedPassenger[index] = {
            ...updatedPassenger[index],
            [name]: value,
        };

        setPassengerData(updatedPassenger);

    };
    // console.log(passengerData);
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return regex.test(email);
    }
    function validatePhoneNumber(phoneNumber) {
        const regex = /^\d{10}$/;
        return regex.test(phoneNumber);
    }
    function validate() {
        if (
            (passengerData.filter((item) => (
                item.FirstName === "" || item.LastName === "" || item.Address === "" || !validateEmail(item.Email) || !validatePhoneNumber(item.Phoneno)
            ))).length > 0) {

            return true;
        }
    }
    function handleSeatBlock() {

        if (validate()) {
            return
        }
        const payload = {
            Passenger:
                passengerData?.map((item, index) => {
                    return { ...item, Seat: parsedSeatData?.blockedSeatArray[index] };
                }),

            EndUserIp: reducerState?.ip?.ipData,
            ResultIndex: JSON.stringify(resultIndex),
            TraceId: busFullData?.TraceId,
            TokenId: reducerState?.ip?.tokenData,
            BoardingPointId: boardingPoint,
            DroppingPointId: droppingPoint,
        };
        // console.log(payload);
        dispatch(busSeatBlockAction(payload));
        sessionStorage.setItem("busPassName", JSON.stringify(passengerData))
        navigate("/BusReviewBooking");
    }

    const selectedBus = busFullData.BusResults.find((bus) => bus.ResultIndex === resultIndex);
    const cancellationPolicy = selectedBus?.CancellationPolicies;
    console.log(selectedBus, "selectedBus")

    const departureDate = dayjs(selectedBus?.DepartureTime);
    const arrivalDate = dayjs(selectedBus?.ArrivalTime);

    // Format the dates
    const departureFormattedDate = departureDate.format("DD MMM, YY");
    const arrivalFormattedDate = arrivalDate.format("DD MMM, YY");



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


    // here i am calculation the duration between departure and arrival time 


    const departureTime = new Date(selectedBus.DepartureTime).getTime();
    const arrivalTime = new Date(selectedBus.ArrivalTime).getTime();
    const timeDifference = arrivalTime - departureTime;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const duration = `${hours}hr ${minutes}min`;


    console.log(reducerState, "reducer state")
    return (


        <>
            <div className='mainimgBusSearch'>
                {/* <Navbar /> */}
                {/* <BigNavbar /> */}
                <InsideNavbar />
            </div>
            <div className="margin-pecentage">
                <div className="container-xxl ">
                    <div className="row">
                        <div className="col-lg-9 order-lg-1  order-md-4 order-sm-4 ">
                            <motion.div variants={variants} initial="initial"
                                whileInView="animate" className="row ">


                                <div className="col-lg-12" style={{ marginTop: "-100px" }}>
                                    <div className="singleBusSearchBox" >
                                        <div className="singleBusSearchBoxOne">
                                            <span>{selectedBus?.BusType}</span>
                                        </div>
                                        <div className="anotherBusResult">
                                            <div className="singleBusSearchBoxTwo">
                                                <span >{busFullData?.Origin}</span>
                                                <p>{desiredFormat.slice(0, 12)}</p>
                                                <p style={{ fontSize: "14px" }}>{desiredFormat.slice(13)}</p>
                                            </div>

                                            <div className="singleBusSearchBoxThree">

                                                <h4>{duration}</h4>

                                                <div>
                                                    <Divider
                                                        orientation="vertical"
                                                        flexItem
                                                        sx={{
                                                            // backgroundColor: "green",
                                                            marginX: "8px",
                                                            height: "2px",
                                                            border: "1px dashed #777"
                                                        }}
                                                    />
                                                </div>


                                                <span>{selectedBus?.AvailableSeats}{" "}Seats Left</span>
                                            </div>

                                            <div className="singleBusSearchBoxFour">
                                                <span>{busFullData?.Destination}</span>
                                                <p>{desiredFormat1.slice(0, 12)}</p>
                                                <p style={{ fontSize: "14px" }}>{desiredFormat1.slice(13)}</p>
                                            </div>

                                            <div className="singleBusSearchBoxSeven">
                                                <p>₹ {' '}{selectedBus?.BusPrice?.PublishedPriceRoundedOff}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>




                                <motion.div variants={variants} className="col-lg-12 mt-3">
                                    <div className="titlePickup">
                                        <p></p>
                                    </div>
                                    <div className="pickUpBox">
                                        <div>
                                            <div className="pickuppara">
                                                <p>PickUp Point</p>

                                            </div>
                                            <div>
                                                <p>
                                                    {selectedBus?.BoardingPointsDetails &&
                                                        selectedBus.BoardingPointsDetails.length > 0 &&
                                                        selectedBus.BoardingPointsDetails[0].CityPointLocation}
                                                </p>
                                            </div>
                                            <div>
                                                <span>{desiredFormat.slice(13)}</span>
                                            </div>
                                        </div>


                                        <div>
                                            <div className="pickuppara">
                                                <p>Drop Point</p>

                                            </div>
                                            <div>
                                                <p>
                                                    {selectedBus?.DroppingPointsDetails &&
                                                        selectedBus.DroppingPointsDetails.length > 0 &&
                                                        selectedBus.DroppingPointsDetails[0].CityPointLocation}
                                                </p>
                                            </div>
                                            <div>
                                                <span>{desiredFormat1.slice(13)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>








                                <motion.div variants={variants} className="col-lg-12 mt-3">
                                    <div className="bookflightPassenger">
                                        <div className="headingBookFlight">
                                            <h3>Guest Details</h3>
                                        </div>
                                        {passengerCount > 0 &&
                                            Array.from({ length: passengerCount }, (_, index) => (
                                                <div>
                                                    <label className="roomIndexGuest mb-3">Passenger {index + 1}</label>

                                                    <div className="bookFlightPassInner">

                                                        <div className="row g-3 mb-3">
                                                            <div className="col-lg-3 col-md-3">
                                                                <div class="form-floating">
                                                                    <input
                                                                        name="FirstName"
                                                                        placeholder="Enter your name"
                                                                        className="form-control"
                                                                        value={passengerData.FirstName}
                                                                        onChange={(e) =>
                                                                            handleServiceChange(e, index)
                                                                        }
                                                                    />
                                                                    {passengerData[index].FirstName === " " &&
                                                                        <span id="error1">Enter your Name</span>
                                                                    }
                                                                    <label for="floatingInput">First Name</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3">
                                                                <div class="form-floating">
                                                                    <input
                                                                        name="LastName"
                                                                        className="form-control"
                                                                        placeholder="Enter your last name"
                                                                        value={passengerData.LastName}
                                                                        onChange={(e) =>
                                                                            handleServiceChange(e, index)
                                                                        }
                                                                    />
                                                                    {passengerData[index].LastName === " " &&
                                                                        <span id="error1">Enter Last Name</span>}
                                                                    <label for="floatingInput">Last Name</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3">
                                                                <div class="form-floating">

                                                                    <input
                                                                        name="Email"
                                                                        type="email"
                                                                        className="form-control"
                                                                        placeholder="Enter your email"
                                                                        value={passengerData[index].Email}
                                                                        onChange={(e) =>
                                                                            handleServiceChange(e, index)
                                                                        }
                                                                    />
                                                                    {!validateEmail(passengerData[index].Email) &&
                                                                        <span id="error1"></span>}
                                                                    <label for="floatingInput">Enter Email</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-md-3">
                                                                <div class="form-floating">
                                                                    <input
                                                                        name="Phoneno"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Enter your Phoneno"
                                                                        value={passengerData.Phoneno}
                                                                        onChange={(e) =>
                                                                            handleServiceChange(e, index)
                                                                        }
                                                                    />
                                                                    {!validatePhoneNumber(passengerData[index].Phoneno) &&
                                                                        <span id="error1"></span>}

                                                                    <label for="floatingInput">Phone Number</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12">
                                                                <div class="form-floating">
                                                                    <input
                                                                        name="Address"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Enter your address"
                                                                        value={passengerData.Address}
                                                                        onChange={(e) =>
                                                                            handleServiceChange(e, index)
                                                                        }
                                                                    />
                                                                    {passengerData[index].Address === " " &&
                                                                        <span id="error1">Enter Address</span>}
                                                                    <label for="floatingInput">Enter Address</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </motion.div>
                                <div className="col-lg-12 btn-busPassenger">
                                    <button onClick={handleSeatBlock}>Proceed to Book</button>
                                </div>
                            </motion.div>

                        </div>

                        <motion.div initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="col-lg-3 mt-2 mb-md-4 mb-sm-4 order-lg-2  order-md-1 order-sm-1 ">
                            <BusSaleSummary />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusPassengerDetail;









// {/* <motion.div variants={variants} className="col-lg-12 py-4">
//     <div className="passengerHeading mb-3">
//         <p>Passenger Details</p>
//     </div>
//     <div className="passengerDetailsBus">
//         {passengerCount > 0 &&
//             Array.from({ length: passengerCount }, (_, index) => (
//                 <Box>
//                     <div mb={2} key={index} className="" py={1} style={{ border: "border: 1px solid #000;", marginBottom: "10px" }}>
//                         <Accordion
//                             expanded={accordionExpanded === index}
//                             onChange={handleAccordionChange(index)}
//                             style={{ border: "border: 1px solid #000;" }}
//                         >
//                             <AccordionSummary
//                                 expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel1a-content"
//                                 id="panel1a-header"
//                             >
//                                 <Typography>Passenger {index + 1}</Typography>
//                             </AccordionSummary>
//                             <AccordionDetails>
//                                 <Box>
//                                     <Grid container spacing={3} my={1}>
//                                         <Grid item xs={12} sm={12} md={4}>
//                                             <Box>
//                                                 <div className="form_input">
//                                                     <label
//                                                         hotel_form_input
//                                                         className="form_lable"
//                                                     >
//                                                         First name*
//                                                     </label>
//                                                     <input
//                                                         name="FirstName"
//                                                         placeholder="Enter your name"
//                                                         value={passengerData.FirstName}
//                                                         onChange={(e) =>
//                                                             handleServiceChange(e, index)
//                                                         }
//                                                     />
//                                                     {passengerData[index].FirstName === "" &&
//                                                         <span id="error1">Enter your name</span>}
//                                                 </div>
//                                             </Box>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={4} py={1}>
//                                             <Box>
//                                                 <div className="form_input">
//                                                     <label
//                                                         hotel_form_input
//                                                         className="form_lable"
//                                                     >
//                                                         Last name*
//                                                     </label>
//                                                     <input
//                                                         name="LastName"
//                                                         placeholder="Enter your last name"
//                                                         value={passengerData.LastName}
//                                                         onChange={(e) =>
//                                                             handleServiceChange(e, index)
//                                                         }
//                                                     />
//                                                     {passengerData[index].LastName === "" &&
//                                                         <span id="error1">Enter Last Name</span>}
//                                                 </div>
//                                             </Box>
//                                         </Grid>

//                                         <Grid item xs={12} sm={12} md={4}>
//                                             <Box>
//                                                 <div className="form_input">
//                                                     <label
//                                                         hotel_form_input
//                                                         className="form_lable"
//                                                     >
//                                                         Email*
//                                                     </label>
//                                                     <input
//                                                         name="Email"
//                                                         type="email"
//                                                         placeholder="Enter your email"
//                                                         value={passengerData[index].Email}
//                                                         onChange={(e) =>
//                                                             handleServiceChange(e, index)
//                                                         }
//                                                     />
//                                                     {!validateEmail(passengerData[index].Email) &&
//                                                         <span id="error1">Enter Email</span>}
//                                                 </div>
//                                             </Box>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={4}>
//                                             <Box>
//                                                 <div className="form_input">
//                                                     <label
//                                                         hotel_form_input
//                                                         className="form_lable"
//                                                     >
//                                                         Address*
//                                                     </label>
//                                                     <input
//                                                         name="Address"
//                                                         type="text"
//                                                         placeholder="Enter your address"
//                                                         value={passengerData.Address}
//                                                         onChange={(e) =>
//                                                             handleServiceChange(e, index)
//                                                         }
//                                                     />
//                                                     {passengerData[index].Address === "" &&
//                                                         <span id="error1">Enter Address</span>}
//                                                 </div>
//                                             </Box>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={4}>
//                                             <Box>
//                                                 <div className="form_input">
//                                                     <label
//                                                         hotel_form_input
//                                                         className="form_lable"
//                                                     >
//                                                         Phone*
//                                                     </label>
//                                                     <input
//                                                         name="Phoneno"
//                                                         type="text"
//                                                         placeholder="Enter your Phoneno"
//                                                         value={passengerData.Phoneno}
//                                                         onChange={(e) =>
//                                                             handleServiceChange(e, index)
//                                                         }
//                                                     />
//                                                     {!validatePhoneNumber(passengerData[index].Phoneno) &&
//                                                         <span id="error1">Enter your name</span>}

//                                                 </div>
//                                             </Box>
//                                         </Grid>
//                                     </Grid>
//                                 </Box>
//                             </AccordionDetails>
//                         </Accordion>

//                         {/* Form end */}
//                     </div>
//                 </Box>
//             ))}
//     </div>

// </motion.div> */}