import { apiURL } from '../../Constants/constant';
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector, useRef } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { clearHotelReducer, hotelAction } from "../../Redux/Hotel/hotel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
// const authenticUser = reducerState?.logIn?.isLogin;


import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import HotelLoading from './hotelLoading/HotelLoading';


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





const HotelForm = () => {


    const [openTravelModal, setOpenTravelModal] = React.useState(false);
    const [displayFrom, setdisplayFrom] = useState(true);
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideFrom);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideFrom);
        };
    }, []);

    const handleClickOutsideFrom = (event) => {
        if (
            fromSearchRef.current &&
            !fromSearchRef.current.contains(event.target)
        ) {
            setdisplayFrom(false);
        }
    };
    const fromSearchRef = React.useRef(null);

    const handleTravelClickOpen = () => {
        setOpenTravelModal(true);
    };

    const handleTravelClose = (event, reason) => {
        if (reason !== "backdropClick") {
            setOpenTravelModal(false);
            // setCountPassanger(
            //     parseInt(activeIdChild) +
            //     parseInt(activeIdInfant) +
            //     parseInt(activeIdAdult)
            // );
        }
    };





    const [searchTerm, setSearchTerm] = useState("");
    const [cityid, setCityid] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // error manage
    const [cityError, setCityError] = useState("");
    const [checkInError, setCheckInError] = useState("");
    const [checkOutError, setCheckOutError] = useState("");
    const [condition, setCondition] = useState(1);
    const [formDataDynamic, setFormData] = useState([
        {
            NoOfAdults: 1,
            NoOfChild: 0,
            ChildAge: [],
        },
    ]);

    const reducerState = useSelector((state) => state);
    // console.log("State Data", reducerState);

    const errorCode =
        reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
            ?.Error?.ErrorCode;
    const errorMsg =
        reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
            ?.Error?.ErrorMessage;

    const initialvalue = {
        City: "",
        nationality: "IN",
    };
    const [open, setOpen] = useState(false);
    const [loader, setLoader] = useState(false);
    const [values, setValues] = useState(initialvalue);
    const [error, setError] = useState({
        nationality: false,
    });
    const [sub, setSub] = useState(false)

    const [isVisible, setIsVisible] = useState(false);
    const changeHandler = (e) => {
        if (e.target.value === "number") {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        dispatch(clearHotelReducer());
    }, [dispatch]);

    useEffect(() => {
        if (reducerState?.hotelSearchResult?.isLoading == true) {
            setLoader(true);
        }
    }, [reducerState?.hotelSearchResult?.isLoading]);

    console.log(reducerState, "reducerstate")
    console.log(reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
        ?.HotelResults, "hotel result")


    useEffect(() => {
        if (
            reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
                ?.HotelResults?.length >= 0
        ) {
            setLoader(false);
            navigate("/hotel/hotelsearch");
            // navigate("login")
        }
    }, [
        reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
            ?.HotelResults,
    ]);
    //fetch city Logic implemented below
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (searchTerm) {
                fetchCities();
            } else {
                setResults([]);
            }
        }, 300); // Adjust the debounce delay as needed (e.g., 300ms)

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [searchTerm]);

    const fetchCities = async () => {
        try {
            setLoading(true);
            const response = await axios.post(
                `${apiURL.baseURL}/skyTrails/city/hotelCitySearch?keyword=${searchTerm} `
            );
            setResults(response.data.data);
            // console.log("cities", response.data.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching cities:", error);
            setLoading(false);
        }
    };
    const handleConditionChange = (event) => {
        const newCondition = parseInt(event.target.value);
        setCondition(newCondition);
        const newFormData = Array.from({ length: newCondition }, () => ({
            NoOfAdults: 1,
            NoOfChild: 0,
            ChildAge: [],
        }));
        setFormData(newFormData);
    };

    const handleFormChange = (index, key, value) => {
        const updatedFormData = [...formDataDynamic];
        if (key === "NoOfAdults" && value > 8) {
            value = 8; // Limit the number of adults to a maximum of 8
        }
        updatedFormData[index][key] = value;

        // Set ChildAge to null when NoOfChild is 0
        if (key === "NoOfChild" && value === 0) {
            updatedFormData[index]["ChildAge"] = null;
        }

        setFormData(updatedFormData);
    };



    const handleChildAgeChange = (index, childIndex, value) => {
        const updatedFormData = [...formDataDynamic];
        updatedFormData[index].ChildAge[childIndex] = value;
        setFormData(updatedFormData);
        // console.log(updatedFormData, "updated form data ")
    };





    const handleDeleteRoom = () => {
        if (condition > 1) {
            setCondition(condition - 1);
            setFormData(formDataDynamic.slice(0, condition - 1));
        }
    };

    const handleResultClick = (city) => {
        setSearchTerm(city.Destination); // Set the input field's value to the selected city
        //Below is cityId to send in payload
        setCityid(city.cityid);
        setResults([]); // Clear the results
        setCityError("");
        setdisplayFrom(false);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });

        setError({
            nationality: false,
        });
    };

    const [selectedDay, setSelectedDay] = useState(new Date());
    const [selectedDayTwo, setSelectedDayTwo] = useState(new Date());


    const handleStartDateChange = (date) => {
        setValues({ ...values, departure: date }); // Update the departure date
        // const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
        setSelectedDay(date);
    };

    const handleEndDateChange = (date) => {
        setValues({ ...values, checkOutDeparture: date }); // Update the checkOutDeparture date
        // const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
        setSelectedDayTwo(date)
    };

    const getDayOfWeek = (date) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[date.getDay()];
    };

    function handleSubmit(event) {
        event.preventDefault();
        setSub(true)
        console.warn(values.departure, values.checkOutDeparture, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
        if (values.departure === ("" || undefined)) {
            return
        }
        if (values.checkOutDeparture === ("" || undefined)) {
            return
        }

        const formData = new FormData(event.target);


        const date = new Date(formData.get("departure"));

        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;


        // saving in session storage

        const sessionData = new FormData(event.target);

        // Extract specific fields
        const city = sessionData.get('City');
        const checkIn = sessionData.get('checkIn');
        const checkOut = sessionData.get('checkOut');
        const room = sessionData.get('room');
        const star = sessionData.get('star');
        const night = sessionData.get('night');
        const nationality = sessionData.get('nationality');

        // Extract data from dynamic form fields
        const dynamicFormData = formDataDynamic.map((data) => ({
            NoOfAdults: data.NoOfAdults || 0,
            NoOfChild: data.NoOfChild || 0,
            ChildAge: data.ChildAge || [],
        }));

        // Combine all data into a single object
        const formFields = {
            city,
            checkIn,
            checkOut,
            room,
            star,
            night,
            nationality,
            dynamicFormData,
        };

        // Save the extracted form data to sessionStorage
        sessionStorage.setItem('hotelFormData', JSON.stringify(formFields));

        // saving in session storage 


        // validate Error

        if (!cityid) {
            setCityError("city is Required");
        } else {
            const newErrors = {
                nationality: false,
            };

            if (values.nationality.length < 1) {
                newErrors.nationality = true;
            }

            setError(true);
            if (Object.values(newErrors).some((error) => error)) {
                return;
            }

            const departureDate = new Date(values.departure);
            const day = departureDate.getDate().toString().padStart(2, "0");
            const month = (departureDate.getMonth() + 1).toString().padStart(2, "0");
            const year = departureDate.getFullYear();
            const formattedDate = `${day}/${month}/${year}`;


            const currentDate = new Date(values.departure);
            const toDate = new Date(values.checkOutDeparture);
            const timeDifference = toDate.getTime() - currentDate.getTime();
            const nightdays = Math.ceil(timeDifference / (1000 * 3600 * 24));
            console.log(nightdays, "night days")

            const payload = {
                CheckInDate: formattedDate,
                // NoOfNights: formData.get("night"),
                NoOfNights: nightdays,
                CountryCode: "IN",
                CityId: cityid,
                ResultCount: null,
                PreferredCurrency: "INR",
                // GuestNationality: formData.get("nationality"),
                GuestNationality: "IN",
                NoOfRooms: condition,
                RoomGuests: [...formDataDynamic],
                MaxRating: 5,
                MinRating: 0,
                ReviewScore: null,
                IsNearBySearchAllowed: false,
                EndUserIp: reducerState?.ip?.ipData,
                TokenId: reducerState?.ip?.tokenData,
            };
            // console.log(payload)

            // const totalGuest = `${parseInt(formData.get("adult")) + parseInt("0")}`;
            // sessionStorage.setItem("totalGuest", totalGuest);
            dispatch(hotelAction(payload));
            if (
                reducerState?.hotelSearchResult?.ticketData?.data?.data
                    ?.HotelSearchResult?.ticketData?.data?.data
            ) {
                setOpen(false);
            }
            setOpen(true);
        }
    }







    // for showing the count of adult infant and child in the front box

    const [numAdults, setNumAdults] = useState(0);
    const [numChildren, setNumChildren] = useState(0);
    // const [numInfants, setNumInfants] = useState(0);


    const calculateTravellerCount = () => {
        let adults = 0;
        let children = 0;
        // let infants = 0;

        formDataDynamic.forEach((data) => {
            adults += data.NoOfAdults;
            children += data.NoOfChild;
        });

        setNumAdults(adults);
        setNumChildren(children);
        // setNumInfants(infants);
    };

    useEffect(() => {
        calculateTravellerCount();
    }, [formDataDynamic]);





    return (
        <section className="margin-pecentage">
            <div className="container-fluid " >
                <div className="row hotelFormBg">
                    <div className="col-12 px4">
                        <>
                            {loader ? (
                                <HotelLoading />
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="yourHotel-container">
                                        <div className="hotel-container">
                                            <span>From</span>
                                            <div>
                                                <input
                                                    name="City"
                                                    id="CitySearchID"
                                                    type="text"
                                                    placeholder="Search city name"
                                                    value={searchTerm}
                                                    onChange={(e) => { setSearchTerm(e.target.value); setdisplayFrom(true); }}
                                                    style={{
                                                        outline: "none",
                                                        border: "none",
                                                    }}
                                                    autoComplete="off"
                                                />
                                                {cityError !== "" && (
                                                    <span className="error">{cityError}</span>
                                                )}
                                                {results.length > 0 && (
                                                    <div
                                                        ref={fromSearchRef}
                                                        className="city-search-results"
                                                        style={{

                                                            display: displayFrom ? "flex" : "none",
                                                        }}
                                                    >

                                                        <ul className="city_Search_Container">
                                                            <Box
                                                                sx={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    maxHeight: 161,
                                                                    overflow: "hidden",
                                                                    overflowY: "scroll",
                                                                }}
                                                                className="scroll_style"
                                                            >
                                                                {results.map((city, index) => (
                                                                    <li key={index} onClick={() => handleResultClick(city)}>
                                                                        {city.Destination}
                                                                    </li>
                                                                ))}
                                                            </Box>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                            <span>India</span>
                                        </div>

                                        <div className="hotel-container">
                                            <span>Check In</span>
                                            <div className="">
                                                <div>
                                                    <DatePicker
                                                        selected={values.departure}
                                                        onChange={handleStartDateChange}
                                                        name="checkIn"
                                                        dateFormat="dd/MM/yyyy"
                                                        placeholderText="Check-In Date"
                                                        isClearable
                                                        minDate={new Date()}
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            </div>
                                            {/* <span>Monday</span> */}
                                            {/* <span>{selectedDay}</span> */}
                                            <span>{getDayOfWeek(selectedDay)}</span>
                                            {sub && values.departure === ("" || undefined) && (
                                                <span className="error">Enter Check-In Date </span>
                                            )}
                                        </div>


                                        <div className="hotel-container">
                                            <span>Check Out</span>
                                            <div className="">
                                                <div>
                                                    <DatePicker
                                                        selected={values.checkOutDeparture}
                                                        onChange={handleEndDateChange}
                                                        name="checkOut"
                                                        dateFormat="dd/MM/yyyy"
                                                        placeholderText="Check-Out Date"
                                                        minDate={values.departure || new Date()} // Disable dates before Check-In date
                                                        isClearable
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            </div>
                                            {/* <span>Thursday</span> */}
                                            {/* <span>{selectedDayTwo}</span> */}
                                            <span>{getDayOfWeek(selectedDayTwo)}</span>
                                            {sub && values.checkOutDeparture === ("" || undefined) && (
                                                <span className="error">Enter Check-Out Date </span>
                                            )}
                                        </div>

                                        <div className="travellerContainer ">
                                            <div
                                                onClick={handleTravelClickOpen}
                                                className="travellerButton">
                                                <span>
                                                    Traveller & Class
                                                </span>
                                                <p >

                                                    {condition} {" "} Room
                                                </p>
                                                <div>
                                                    <span>
                                                        {numAdults} Adults {numChildren} Child
                                                    </span>
                                                </div>
                                            </div>
                                            <Dialog
                                                sx={{ zIndex: "99999" }}
                                                disableEscapeKeyDown
                                                open={openTravelModal}
                                                onClose={handleTravelClose}
                                            >
                                                <DialogContent>
                                                    <>
                                                        <div className="travellerModal">
                                                            <div className='roomModal'>
                                                                <div className="hotel_modal_form_input px-0">
                                                                    <label className="form_label">Room*</label>
                                                                    <select
                                                                        name="room"
                                                                        value={condition}
                                                                        onChange={handleConditionChange}
                                                                        className="hotel_input_select"
                                                                    >

                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                        <option>6</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <div className='px-1'>
                                                                {condition > 0 &&
                                                                    Array.from({ length: condition }).map((_, index) => (
                                                                        <div key={index} className="room-modal-container">
                                                                            <div >
                                                                                <h5>ROOM {index + 1}</h5>
                                                                            </div>
                                                                            <div className="row">

                                                                                <div className="hotel_modal_form_input">
                                                                                    <label className="form_label">No of Adults:</label>
                                                                                    <select
                                                                                        value={formDataDynamic[index]?.NoOfAdults || 1}
                                                                                        className="hotel_input_select"
                                                                                        onChange={(e) =>
                                                                                            handleFormChange(
                                                                                                index,
                                                                                                "NoOfAdults",
                                                                                                parseInt(e.target.value)
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                                                                            <option key={num} value={num}>
                                                                                                {num}
                                                                                            </option>
                                                                                        ))}
                                                                                    </select>
                                                                                </div>

                                                                                <div className="hotel_modal_form_input">
                                                                                    <label className="form_label">No of Child:</label>
                                                                                    <select
                                                                                        value={formDataDynamic[index]?.NoOfChild || 0}
                                                                                        className="hotel_input_select"
                                                                                        name="noOfChild"
                                                                                        onChange={(e) =>
                                                                                            handleFormChange(
                                                                                                index,
                                                                                                "NoOfChild",
                                                                                                parseInt(e.target.value)
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        {[0, 1, 2, 3, 4].map((childCount) => (
                                                                                            <option key={childCount} value={childCount}>
                                                                                                {childCount}
                                                                                            </option>
                                                                                        ))}
                                                                                    </select>
                                                                                </div>

                                                                            </div>
                                                                            {formDataDynamic[index]?.NoOfChild > 0 && (
                                                                                <div className="hotel_modal_form_input_child_age">
                                                                                    <label className='mt-3'>Child Age:</label>
                                                                                    <div>
                                                                                        {Array.from({
                                                                                            length: formDataDynamic[index]?.NoOfChild || 0,
                                                                                        }).map((_, childIndex) => (
                                                                                            <div key={childIndex} className="">
                                                                                                <select
                                                                                                    value={formDataDynamic[index]?.ChildAge?.[childIndex] || ""}
                                                                                                    className="hotel_input_select"
                                                                                                    onChange={(e) =>
                                                                                                        handleChildAgeChange(index, childIndex, e.target.value)
                                                                                                    }
                                                                                                >
                                                                                                    {Array.from({ length: 12 }, (_, i) => (
                                                                                                        <option key={i} value={i + 1}>
                                                                                                            {i + 1}
                                                                                                        </option>
                                                                                                    ))}
                                                                                                </select>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                {/* {condition > 1 && (
                                                            <button onClick={handleDeleteRoom} className="delete-button">
                                                                <FaTrash />
                                                            </button>
                                                        )} */}

                                                            </div>


                                                            {/* <div className="col-lg-4 col-md-4 col-xs-12 ps-0 mb-3">
                                                        <div className="hotel_form_input">
                                                            <label className="form_label">Star Rating*</label>
                                                            <select
                                                                name="star"
                                                                value={values.star || 5}
                                                                onChange={handleInputChange}
                                                                className="hotel_input_select"
                                                            >
                                                                <option value="1">1 Star</option>
                                                                <option value="2">2 Star</option>
                                                                <option value="3">3 Star</option>
                                                                <option value="4">4 Star</option>
                                                                <option value="5">5 Star</option>
                                                            </select>
                                                            {error && values.star === "" && (
                                                                <label className="error_label">
                                                                    Please Select a Star Rating{" "}
                                                                </label>
                                                            )}
                                                        </div>
                                                    </div>*/}


                                                            {/* <div className="col-lg-4 col-md-4 col-xs-12 ps-0 mb-3">
                                                        <div className="hotel_form_input">
                                                            <label className="form_label">Nights</label>
                                                            <input
                                                                type="number"
                                                                min="0"
                                                                name="night"
                                                                value={nightdays}
                                                                className="hotel_input_select"
                                                                disabled
                                                            />
                                                        </div>
                                                    </div> */}

                                                            {/* <div className="col-lg-4 col-md-4 col-xs-12 ps-0 mb-3">
                                                        <div className="hotel_form_input">
                                                            <label className="form_label">
                                                                Nationality*
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="nationality"
                                                                value={values.nationality}
                                                                onChange={handleInputChange}
                                                                placeholder="IN"
                                                                disabled
                                                            />
                                                            {error && values.nationality.length < 1 ? (
                                                                <label
                                                                    style={{
                                                                        color: "red",
                                                                        fontSize: "12px",
                                                                        textAlign: "left",
                                                                    }}
                                                                >
                                                                    Please Enter this Field{" "}
                                                                </label>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </div>
                                                    </div> */}
                                                        </div>
                                                    </>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button
                                                        style={{
                                                            backgroundColor: "#21325d",
                                                            color: "white",
                                                        }}
                                                        onClick={handleTravelClose}
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        style={{
                                                            backgroundColor: "#21325d",
                                                            color: "white",
                                                        }}
                                                        onClick={handleTravelClose}
                                                    >
                                                        Ok
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </div>
                                    </div>

                                    <Box>
                                        <div class="wrapper_hotel">
                                            <div>
                                                <div className="wraOne">
                                                    <p>Trending Searches:</p>
                                                </div>
                                                <input
                                                    type="radio"
                                                    name="select"
                                                    id="option-1"
                                                    checked
                                                />
                                                <input type="radio" name="select" id="option-2" />
                                                <input type="radio" name="select" id="option-3" />
                                                <input type="radio" name="select" id="option-4" />
                                                <input type="radio" name="select" id="option-5" />
                                                <input type="radio" name="select" id="option-6" />

                                                <label for="option-1" class="option option-1">
                                                    <text>Singapore, Singapore</text>
                                                </label>
                                                <label for="option-2" class="option option-2">
                                                    <text>Dubai, United Arab Emirates</text>
                                                </label>
                                                <label for="option-3" class="option option-3">
                                                    <text>Mumbai, India</text>
                                                </label>
                                            </div>

                                            <div className="col-auto fare_search_oneWay ">
                                                <button
                                                    type="submit"
                                                    className="hotelFormbutton"
                                                >Search Hotel
                                                </button>
                                            </div>
                                        </div>
                                    </Box>
                                </form>
                            )}
                        </>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelForm;



