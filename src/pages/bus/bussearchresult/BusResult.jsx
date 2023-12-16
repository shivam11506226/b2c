import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper, Radio, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { apiURL } from "../../../Constants/constant";
import InsideNavbar from "../../../UI/BigNavbar/InsideNavbar";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { styled } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import starsvg from "../../../images/star.svg"
import starBlank from "../../../images/starBlank.svg"
import { useNavigate } from "react-router-dom";
import SwipeToSlide from "../../flight/SwipeToSlide";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./seatlayout.css";
import { motion } from 'framer-motion';
import steering from "../../../images/steering.svg"
import busGif from "../../../images/busGif.gif"


const variants = {
  initial: {
    clipPath: 'circle(1524px at 50% 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  animate: {
    clipPath: 'circle(0px at 50% 50px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};



const variants2 = {
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





function BusResult() {





  const [open, setOpen] = useState(false);
  const navigate = useNavigate("");
  const reducerState = useSelector((state) => state);
  const [openAccordian, setOpenAccordian] = useState(false);
  const [resultIndex, setResultIndex] = useState("");
  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);
  const [resulttIndex, setResulttIndex] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDropPoint, setSelectedDropPoint] = useState("");
  const [openSeatLayout, setOpenSeatLayout] = useState(false);
  const upperArray = [];
  const lowerArray = [];
  const [blockedSeatArray, setBlockedSeatArray] = useState([]);
  const [flatArray, setFlatArray] = useState([]);
  const [seatLayoutData, setSeatLayoutData] = useState({});
  const [layout, setLayout] = useState([]);
  const [loadingLayout, setLoadingLayout] = useState(true);
  const busFullData =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult;
  const busDetailsData =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult
      ?.BusResults;
  const busDataResult =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult
      ?.BusResults;

  console.log(reducerState, "reducer state ")
  // console.log(reducerState, "reducerState");
  // console.log(busDetailsData, "busDetailsData");
  // console.log(busDataResult, "busDetailsData");
  console.log(layout, "layout");
  function handleclick(resultIndexPara) {
    setResultIndex(resultIndexPara);
    setTimeout(() => setLoadingLayout(false), 2000);
    setOpenSeatLayout(true);
    const requestData = {
      EndUserIp: reducerState?.ip?.ipData,
      ResultIndex: resultIndexPara,
      TraceId: busFullData?.TraceId,
      TokenId: reducerState?.ip?.tokenData,
    };

    try {
      axios
        .post(`${apiURL.baseURL}/skyTrails/bus/seatlayout`, requestData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setSeatLayoutData(response.data);

          const finalLayout = handleSeatLayoutStringTwo(
            response.data?.data?.GetBusSeatLayOutResult?.SeatLayoutDetails
              ?.HTMLLayout
          );

          setLayout((prev) => finalLayout);
          const SeatDetailsArray =
            response.data?.data?.GetBusSeatLayOutResult?.SeatLayoutDetails
              ?.SeatLayout?.SeatDetails;
          let singleArray = SeatDetailsArray?.reduce(
            (acc, currentArray) => [...acc, ...currentArray],
            []
          );
          setFlatArray(singleArray);
          busDataResult.map((item, index) => {
            if (item?.ResultIndex === resultIndexPara) {
              setOrigin(item?.BoardingPointsDetails);
              setDestination(item?.DroppingPointsDetails);
            }
          });
          setResulttIndex(resultIndexPara);
        });
    } catch (error) {
      console.error("Try-Catch Error:", error);
    }

    setOpen(true);

  }


  flatArray?.forEach((obj) => {
    if (obj?.IsUpper === true) {
      upperArray.push(obj);
    } else if (obj?.IsUpper === false) {
      lowerArray.push(obj);
    }
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [activeSort, setActiveSort] = useState("Relevance");

  const handleSortClick = (sortOption) => {
    setActiveSort(sortOption);
  };
  function handleSeatLayoutStringTwo(inputString) {
    // Your bus seat layout string
    let busSeatLayoutString = `${inputString}`;

    // Create an empty array to store the seat objects
    let seatObjects = [];

    // Create a temporary div element to parse the string
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = busSeatLayoutString;
    // console.log("temppdivvvvvvvvvv", tempDiv);
    // Select all seat div elements
    let seatDivs = tempDiv.querySelectorAll(
      ".hseat, .bhseat, .vhseat, .bhseat, .bseat, .vseat, .nseat, .rhseat"
    );
    // console.log(seatDivs);

    // Iterate through each seat div and differentiate between upper/lower and left/right sides
    seatDivs.forEach((seatDiv) => {
      // Check if the seat div is inside the upper part of the bus
      if (seatDiv.closest(".outerseat")) {
        const upperCheck = seatDiv.closest(".outerseat");
        const lowerDivCheck = upperCheck.querySelector(".lower");
        if (lowerDivCheck) {
          seatObjects.push({
            type: "lower",
            id: seatDiv.id,
            class: seatDiv.getAttribute("class"),
            top: seatDiv.style.top,
            left: seatDiv.style.left,
            onclick: seatDiv.getAttribute("onclick"),
          });
        }

        // Conditionally check for SeatType 2 and add sleeper seat
        else {
          seatObjects.push({
            type: "upper",
            id: seatDiv.id,
            class: seatDiv.getAttribute("class"),
            top: seatDiv.style.top,
            left: seatDiv.style.left,
            onclick: seatDiv.getAttribute("onclick"),
          });
        }
      }
      // Check if the seat div is inside the lower part of the bus
      else if (seatDiv.closest(".outerlowerseat")) {
        seatObjects.push({
          type: "lower",
          id: seatDiv.id,
          class: seatDiv.getAttribute("class"),
          top: seatDiv.style.top,
          left: seatDiv.style.left,
          onclick: seatDiv.getAttribute("onclick"),
        });
      }
    });

    // Log the array of seat objects
    console.log(seatObjects);
    return seatObjects;
  }
  // function addOrRemoveSeat(e, object) {
  //   if (e.target.checked) {
  //     setBlockedSeatArray([...blockedSeatArray, object]);
  //   } else {
  //     const updatedBlockedSeatArray = blockedSeatArray.filter(
  //       (seatObject) => seatObject !== object
  //     );
  //     setBlockedSeatArray(updatedBlockedSeatArray);
  //     // console.log(blockedSeatArray);
  //   }
  // }


  const [selectedSeats, setSelectedSeats] = useState([]);

  function addOrRemoveSeat(e, object) {
    const isSeatSelected = blockedSeatArray.includes(object);
    if (isSeatSelected) {
      const updatedBlockedSeatArray = blockedSeatArray.filter(
        (seatObject) => seatObject !== object
      );
      setBlockedSeatArray(updatedBlockedSeatArray);
    } else {
      setBlockedSeatArray([...blockedSeatArray, object]);
    }
  }

  console.log(blockedSeatArray, "blocked seat array")

  function handleClose() {
    setBlockedSeatArray([]);
    setSelectedDropPoint("");
    setSelectedOrigin("");
    setOrigin([]);
    setDestination([]);
    setOpenSeatLayout(false);
    //  setModal((prev) => !prev);
  }
  function handleContinue() {
    if (
      blockedSeatArray.length === 0 ||
      selectedOrigin === "" ||
      destination.length === 0 ||
      selectedDropPoint === "" ||
      origin === ""
    ) {
      return;
    }
    const dataToSave = {
      blockedSeatArray: blockedSeatArray,
      selectedOrigin: selectedOrigin,
      selectedDropPoint: selectedDropPoint,
      resultIndex: resulttIndex,
    };

    // Save the combined state object to session storage
    sessionStorage.setItem("seatData", JSON.stringify(dataToSave));
    navigate("/BusPassengerDetail");
  }







  // console.log(resultIndex, "result index");
  console.log(busDataResult, "busDataResult");

  console.log(seatLayoutData, "seat layout");

  return (

    <>
      <div className='mainimgBusSearch'>
        {/* <Navbar /> */}
        {/* <BigNavbar /> */}
        <InsideNavbar />
      </div>
      <section className="my-4 mx-5">
        <div className="contaier-xxl">
          <div className="row">
            <div className="col-lg-3">
              <div className="flightFilterBox">
                <div className="filterTitle">
                  <p>Select Filters</p>
                </div>
                <div className="innerFilter">
                  <p>Suggested for you</p>
                  <form action="">
                    <div>
                      <Checkbox
                        {...label}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                      />
                      Last Minute Deals
                    </div>
                    <div>
                      <Checkbox
                        {...label}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                      />
                      Perfect or 1 night stay
                    </div>

                    <div>
                      <Checkbox
                        {...label}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                      />
                      Free Cancellation
                    </div>
                    <div>
                      <Checkbox
                        {...label}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                      />
                      Perfect Breakfast
                    </div>
                  </form>
                  <Divider sx={{ backgroundColor: "gray", marginTop: "15px" }} />
                  <p>
                    Rating
                  </p>

                  <form className="ratingStar" action="">
                    <div>
                      <img src={starsvg} />
                      <img src={starsvg} />
                      <img src={starsvg} />
                      <img src={starsvg} />
                      <img src={starsvg} />

                    </div>

                    <div>
                      <img src={starsvg} />
                      <img src={starsvg} />
                      <img src={starsvg} />
                      <img src={starsvg} />
                      <img src={starBlank} />
                    </div>

                    <div>
                      <img src={starsvg} />
                      <img src={starsvg} />
                      <img src={starsvg} />
                      <img src={starBlank} />
                      <img src={starBlank} />

                    </div>

                    <div>
                      <img src={starsvg} />
                      <img src={starsvg} />
                      <img src={starBlank} />
                      <img src={starBlank} />
                      <img src={starBlank} />

                    </div>
                    <div>
                      <img src={starsvg} />
                      <img src={starBlank} />
                      <img src={starBlank} />
                      <img src={starBlank} />
                      <img src={starBlank} />

                    </div>
                  </form>
                  <Divider sx={{ backgroundColor: "gray", marginTop: "15px" }} />
                  <p>
                    Price per night
                  </p>
                  <form action="">
                    <div>
                      <Checkbox
                        {...label}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                      />
                      ₹0-2,000
                    </div>
                    <div>
                      <Checkbox
                        {...label}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                      />
                      ₹2,000-3,000
                    </div>

                    <div>
                      <Checkbox
                        {...label}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                      />
                      ₹3,000-6,500
                    </div>
                    <div>
                      <Checkbox
                        {...label}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                      />
                      ₹10,000 and Above
                    </div>
                  </form>
                </div>
              </div>
            </div>


            <div className="col-lg-9">

              <div className="row">
                {busDataResult.map((busDetails) => {


                  const dateString = busDetails?.DepartureTime;
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

                  const dateString1 = busDetails?.ArrivalTime;
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


                  const departureTime = new Date(busDetails.DepartureTime).getTime();
                  const arrivalTime = new Date(busDetails.ArrivalTime).getTime();
                  const timeDifference = arrivalTime - departureTime;
                  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
                  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                  const duration = `${hours}hr ${minutes}min`;



                  return (
                    <motion.div variants={variants2} initial="initial"
                      whileInView="animate" className="col-lg-12" key={busDetails?.ResultIndex}>
                      <div className="singleBusSearchBox">
                        <div className="singleBusSearchBoxOne">
                          <span>{busDetails?.BusType}</span>
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


                            <span>{busDetails?.AvailableSeats}{" "}Seats Left</span>
                          </div>

                          <div className="singleBusSearchBoxFour">
                            <span>{busFullData?.Destination}</span>
                            <p>{desiredFormat1.slice(0, 12)}</p>
                            <p style={{ fontSize: "14px" }}>{desiredFormat1.slice(13)}</p>
                          </div>

                          <div className="singleBusSearchBoxSeven">
                            <p>₹ {' '}{busDetails?.BusPrice?.PublishedPriceRoundedOff}</p>
                            <button
                              onClick={() => handleclick(busDetails?.ResultIndex)}
                            >
                              Show Seats →
                            </button>
                          </div>
                        </div>
                      </div>
                      {
                        resultIndex == busDetails?.ResultIndex && openSeatLayout && (
                          <motion.div variants={variants} initial="animate" whileInView="initial" className="sealLayoutDiv">
                            {
                              !loadingLayout ? (
                                <div className="layOutParent">
                                  <div className="layOutParentInner">
                                    <div class="outerseat">
                                      <div className="steeringBox">

                                        <p>Upper</p>
                                        <svg x="0px" y="0px" viewBox="0 0 24 24" width="1.3rem" height="1.3rem" fill="currentColor" style={{ color: "rgb(122, 122, 122)" }}><g transform="matrix(0.022438, 0, 0, 0.022438, 0.781086, 0.781028)"><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M4456.6,4992.6c-1186-146.8-2204.3-655.9-3009.9-1500.5C757.8,2770.3,335.5,1928.7,152.8,922.4c-68.9-392.3-71.9-1230.9,0-1617.3c128.8-715.8,437.3-1458.6,835.6-2021.6c242.6-344.4,829.6-934.4,1171-1174c937.4-661.9,2126.4-985.3,3234.6-883.5c694.8,65.9,1144.1,191.7,1773,497.2c518.1,254.5,853.6,497.1,1287.8,931.4c197.7,197.7,446.3,482.2,551.1,628.9C9221.6-2411,9539-1782,9652.8-1431.7c335.4,1009.3,329.4,2129.4-18,3141.7c-122.8,365.4-404.3,913.5-634.9,1239.9c-239.6,341.4-829.6,928.4-1174,1171c-560.1,395.3-1317.8,709.8-2006.6,832.6C5492.8,5010.5,4765,5031.5,4456.6,4992.6z M5585.7,4019.2c1233.9-182.7,2330.1-964.4,2914.1-2081.5l152.7-296.5H4998.7H1341.8l107.8,218.6c380.4,760.7,1000.3,1389.7,1755.1,1773C3947.4,4010.2,4762.1,4142,5585.7,4019.2z M5352,997.3c545.1-191.7,691.9-904.5,266.6-1290.8c-161.7-143.8-302.5-197.7-518.1-200.6c-212.6,0-356.4,53.9-518.1,203.7c-173.7,155.8-245.6,320.5-245.6,560.1C4336.8,805.6,4848.9,1174,5352,997.3z M1955.8,23.9c290.5-74.9,679.9-254.6,928.4-434.3c275.5-197.7,637.9-596,802.6-886.5c263.6-464.2,407.3-1078.2,365.4-1554.4c-21-239.6-119.8-703.8-164.7-775.7c-32.9-56.9-188.7-12-566,164.7c-425.3,200.7-760.7,437.3-1111.1,790.7c-622.9,620-994.3,1350.7-1123.1,2216.3c-24,155.7-44.9,350.4-44.9,431.3v146.8l338.4-18C1563.4,95.8,1824,59.9,1955.8,23.9z M8949-27c0-80.9-21-272.5-44.9-428.3c-128.8-865.6-500.2-1599.3-1123.1-2216.3c-353.4-353.4-691.8-593-1111.1-790.7c-425.3-197.7-404.3-197.7-461.2-12c-128.8,440.2-137.8,1132.1-18,1536.4c74.9,245.6,263.6,649.9,392.3,838.6c488.2,709.8,1371.7,1198,2195.3,1210l170.7,3V-27z"></path></g></g></svg>
                                      </div>

                                      <div class="busSeatlft">
                                        <div class="upper"></div>
                                      </div>
                                      <div class="busSeatrgt">
                                        <div class="busSeat">
                                          <div class="seatcontainer clearfix">
                                            {layout?.map((item, index) => {
                                              if (item?.type === "upper") {
                                                const divStyle = {
                                                  top: item?.top || 0,
                                                  // left: item?.left || 0,
                                                };
                                                return (
                                                  <Box
                                                    class={item?.class}
                                                    id={item?.id}
                                                    style={{
                                                      ...divStyle,
                                                    }}


                                                  >
                                                    {/* <Checkbox
                                                onChange={(e) =>
                                                  addOrRemoveSeat(
                                                    e,
                                                    upperArray?.[index],
                                                    index
                                                  )
                                                }
                                                disabled={
                                                  upperArray?.[index]?.SeatStatus ===
                                                    true
                                                    ? false
                                                    : true
                                                }
                                              /> */}

                                                    <svg
                                                      onClick={(e) => addOrRemoveSeat(e, upperArray?.[index])}
                                                      width="40"
                                                      height="29"
                                                      viewBox="0 0 60 30"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <rect
                                                        x="0.5"
                                                        y="0.5"
                                                        width="59"
                                                        height="29"
                                                        rx="3.5"
                                                        fill={blockedSeatArray.includes(upperArray?.[index]) ? '#21325d' : upperArray?.[index]?.SeatStatus === false ? "#A9A9A9" : '#fff'}
                                                        stroke="#21325d"
                                                      ></rect>
                                                      <rect
                                                        x="56.5"
                                                        y="5.5"
                                                        width="3"
                                                        height="19"
                                                        rx="1.5"
                                                        fill="white"
                                                        stroke="#21325d"
                                                      ></rect>
                                                    </svg>
                                                  </Box>
                                                );
                                              }
                                            })}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="outerlowerseat">
                                      <p>Lower</p>
                                      <div class="busSeatlft">
                                        <div class="lower"></div>
                                      </div>
                                      <div class="busSeatrgt">
                                        <div class="busSeat">
                                          <div class="seatcontainer seatContTwo clearfix">
                                            {layout?.map((item, index) => {
                                              if (item?.type === "lower") {
                                                const divStyle = {
                                                  top: item?.top || 0,
                                                };
                                                return (
                                                  <Box
                                                    class={item?.class}
                                                    id={item?.id}
                                                    style={{
                                                      ...divStyle,

                                                    }}
                                                  >
                                                    {/* <Checkbox
                                                onChange={(e) =>
                                                  addOrRemoveSeat(
                                                    e,
                                                    lowerArray?.[
                                                    index - upperArray.length
                                                    ],
                                                    index
                                                  )
                                                }
                                                disabled={
                                                  lowerArray?.[
                                                    index - upperArray.length
                                                  ]?.SeatStatus === true
                                                    ? false
                                                    : true
                                                }
                                              /> */}

                                                    <svg
                                                      onClick={(e) => addOrRemoveSeat(e, lowerArray?.[index - upperArray.length
                                                      ])}
                                                      width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7568 5.58197H15.5946C15.0811 5.58197 12 5.58197 12 3.04098C12 1.0082 13.7117 0.5 14.5676 0.5H24.3243C29.6649 0.906557 30.5 5.41257 30.5 7.61475V23.8852C30.5 29.5 24.8378 30.5 23.8108 30.5H14.5676C13.027 30.5 12 30.4918 12 27.9508C12 25.918 13.7117 25 14.5676 25H20.2162C22 25 25 24.9016 25 22.8689V8.5C25 6.06066 22.955 5.58197 21.7568 5.58197Z" fill={blockedSeatArray.includes(lowerArray?.[index - upperArray.length
                                                      ]) ? '#21325d' : lowerArray?.[
                                                        index - upperArray.length
                                                      ]?.SeatStatus === false ? "#A9A9A9" : '#fff'}></path><rect y="3" width="25" height="25" rx="4" fill={blockedSeatArray.includes(lowerArray?.[index - upperArray.length
                                                      ]) ? '#21325d' : lowerArray?.[
                                                        index - upperArray.length
                                                      ]?.SeatStatus === false ? "#A9A9A9" : '#fff'}></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6453 0.584801C13.2694 0.142591 14.0033 0 14.5 0H24.0192L24.0383 0.00144939C26.7974 0.210319 28.557 1.48384 29.613 3.00722C30.6547 4.50993 31 6.23503 31 7.38095V23.619C31 27.0066 29.3925 28.8849 27.6249 29.8885C25.8951 30.8706 24.0471 31 23.5 31H14.5C13.7143 31 12.9166 30.8758 12.3339 30.3023C11.7554 29.7329 11.5 28.8309 11.5 27.5556C11.5 26.4111 11.9958 25.6483 12.6453 25.188C13.2694 24.7458 14.0033 24.6032 14.5 24.6032H20C21.8074 24.6032 22.9511 24.4744 23.6378 24.1576C23.9623 24.0079 24.1634 23.8251 24.2909 23.6056C24.4219 23.3799 24.5 23.0722 24.5 22.6349V8.36508C24.5 7.37872 24.0285 6.78849 23.4249 6.42192C22.7947 6.03916 22.0173 5.90476 21.5 5.90476H15.4937C15.2321 5.90479 14.2825 5.90487 13.383 5.56442C12.9242 5.39078 12.4507 5.11854 12.0903 4.68726C11.7232 4.24785 11.5 3.6743 11.5 2.95238C11.5 1.80788 11.9958 1.04508 12.6453 0.584801ZM13.2297 1.38345C12.8376 1.66127 12.5 2.12863 12.5 2.95238C12.5 3.46062 12.6518 3.80969 12.8628 4.06224C13.0806 4.32292 13.3883 4.512 13.742 4.64589C14.4602 4.91773 15.2523 4.92063 15.5 4.92063H21.5C22.1493 4.92063 23.122 5.08148 23.9501 5.58443C24.8049 6.10357 25.5 6.98953 25.5 8.36508V22.6349C25.5 23.1818 25.4031 23.6737 25.1591 24.0938C24.9116 24.5202 24.5377 24.8294 24.0622 25.0487C23.1489 25.47 21.7926 25.5873 20 25.5873H14.5C14.1633 25.5873 13.6472 25.6907 13.2297 25.9866C12.8376 26.2644 12.5 26.7318 12.5 27.5556C12.5 28.7405 12.7446 29.3147 13.0411 29.6064C13.3334 29.8941 13.7857 30.0159 14.5 30.0159H23.5C23.9529 30.0159 25.6049 29.8992 27.1251 29.0361C28.6075 28.1945 30 26.6283 30 23.619V7.38095C30 6.3946 29.6952 4.87208 28.787 3.56183C27.8953 2.27557 26.4102 1.17316 23.9805 0.984127H14.5C14.1633 0.984127 13.6472 1.08757 13.2297 1.38345Z" fill={blockedSeatArray.includes(lowerArray?.[index - upperArray.length
                                                      ]) ? '#fff' : '#21325d'}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.73348 3.71775C2.66649 3.13928 3.76564 2.95312 4.5 2.95312H12.5V3.93725H4.5C3.90103 3.93725 3.00018 4.09554 2.26652 4.55041C1.55974 4.98861 1 5.70162 1 6.88963V24.1119C0.999994 24.8094 1.12107 25.6617 1.64631 26.3337C2.15222 26.9809 3.11019 27.5563 5 27.5563H12.5V28.5404H5C2.88981 28.5404 1.59777 27.8857 0.853684 26.9337C0.128916 26.0065 -6.67546e-06 24.8905 2.59235e-10 24.1119V6.88963C2.59235e-10 5.32209 0.773597 4.31287 1.73348 3.71775Z" fill="#21325d"></path></svg>
                                                  </Box>
                                                );
                                              }
                                            })}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="seatOrgDes">
                                      <div className="seatPriceBox">
                                        <div className="seatNameBox">
                                          {" "}
                                          <Typography>Seats:</Typography>
                                          {blockedSeatArray?.map((seat, index) => {
                                            return (
                                              <Typography
                                                sx={{
                                                  color: "blue",
                                                }}
                                              >
                                                {seat?.SeatName}
                                              </Typography>
                                              // <p>{seat?.Seatname}</p>
                                            );
                                          })}
                                        </div>
                                        <div >
                                          {(() => {
                                            const totalSeatPrice = blockedSeatArray.reduce(
                                              (totalPrice, seat) => {
                                                return totalPrice + (seat?.SeatFare || 0);
                                              },
                                              0
                                            );
                                            return (
                                              <div className="seatFareBox">
                                                <p>Price:</p>
                                                <h2>
                                                  ₹{" "} {totalSeatPrice.toFixed(2)}
                                                </h2>
                                              </div>
                                            );
                                          })()}
                                        </div>
                                      </div>
                                      <div className="originBoxSelect">
                                        <label>Origin</label>
                                        <select class="form-select"
                                          value={selectedOrigin}
                                          onClick={(e) => setSelectedOrigin(e.target.value)}
                                        >
                                          {origin.map((name, index) =>
                                            index === 0 ? (
                                              <option
                                                key={index}
                                                selected
                                                value={name?.CityPointIndex}
                                              >
                                                {name?.CityPointName}
                                              </option>
                                            ) : (
                                              <option
                                                key={index}
                                                value={name?.CityPointIndex}
                                              >
                                                {name?.CityPointName}
                                              </option>
                                            )
                                          )}
                                        </select>
                                      </div>

                                      <div className="originBoxSelect">
                                        <label>Destination</label>
                                        <select class="form-select"
                                          value={selectedDropPoint}
                                          onClick={(e) =>
                                            setSelectedDropPoint(e.target.value)
                                          }
                                        >
                                          {destination.map((name, index) =>
                                            index === 0 ? (
                                              <option
                                                key={index}
                                                selected
                                                value={name?.CityPointIndex}
                                              >
                                                {name?.CityPointName}
                                              </option>
                                            ) : (
                                              <option
                                                key={index}
                                                value={name?.CityPointIndex}
                                              >
                                                {name?.CityPointName}
                                              </option>
                                            )
                                          )}
                                        </select>
                                      </div>

                                      <div className="buttonLayoutBox">
                                        <button
                                          onClick={handleClose} >
                                          Close
                                        </button>
                                        <button
                                          onClick={handleContinue}
                                        >
                                          Continue
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                // <div>
                                //   <div></div>
                                // </div>

                              ) :

                                (
                                  <div className="loadBusGif"><img src={busGif} alt="" /></div>
                                )
                            }
                          </motion.div>
                        )
                      }


                    </motion.div>

                  )
                })}
              </div>


            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default BusResult;










// {/* <div>
//   {busDetailsData.map((busDetails) => (
//     <div className="bus-detailsseat" key={busDetails?.ResultIndex}>
//       <div className="bus-details-container">
//         <div className="info-wrapper">
//           <div className="info-item">
//             <div className="bus-type">{busDetails?.BusType}</div>
//           </div>
//           <div className="info-item1">
//             <div className="timeseat">
//               <span className="time-bold">
//                 {busDetails?.DepartureTime}
//               </span>
//               <span className="date-value">
//                 {busDetails?.departureDate}
//               </span>
//             </div>
//           </div>
//           <div className="info-item1">
//             <div className="timeseat">
//               <span className="time-bold">
//                 {busDetails?.ArrivalTime}
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="priceseat">
//           <div className="total-price">
//             {busDetails?.BusPrice?.PublishedPriceRoundedOff}
//           </div>
//         </div>
//       </div>
//       <div className="rating-info-container">
//         <div className="rating-section">
//           <div className="rating-item">
//             <div className="rating-icon">
//               <div className="icon-circle">
//                 <div className="icon-background-gray">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="21"
//                     height="20"
//                     viewBox="0 0 21 20"
//                     fill="none"
//                   >
//                     <mask
//                       id="mask0_688_5832"
//                       maskUnits="userSpaceOnUse"
//                       x="0"
//                       y="0"
//                       width="21"
//                       height="20"
//                     >
//                       <rect
//                         x="0.5"
//                         width="20"
//                         height="20"
//                         fill="#D9D9D9"
//                       />
//                     </mask>
//                     <g mask="url(#mask0_688_5832)">
//                       <path
//                         d="M10.2057 6.75L12.8307 14.8542L6.2474 9.85417L10.2057 6.75ZM5.35156 18.3333L6.70573 12.4792L2.16406 8.54167L8.16406 8.02083L10.4974 2.5L12.8307 8.02083L18.8307 8.54167L14.2891 12.4792L15.6432 18.3333L10.4974 15.2292L5.35156 18.3333Z"
//                         fill="white"
//                       />
//                     </g>
//                   </svg>
//                 </div>
//               </div>
//               <div className="icon-value">{busDetails?.rating}</div>
//             </div>
//           </div>
//           <div className="tracking-item">
//             <div className="tracking-icon">
//               <div className="icon-circle">
//                 <div className="icon-background-gray">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="25"
//                     height="24"
//                     viewBox="0 0 25 24"
//                     fill="none"
//                   >
//                     <mask
//                       id="mask0_688_5837"
//                       maskUnits="userSpaceOnUse"
//                       x="0"
//                       y="0"
//                       width="25"
//                       height="24"
//                     >
//                       <rect
//                         x="0.5"
//                         width="24"
//                         height="24"
//                         fill="#D9D9D9"
//                       />
//                     </mask>
//                     <g mask="url(#mask0_688_5837)">
//                       <path
//                         d="M12.5 22C10.7333 22 9.29167 21.7208 8.175 21.1625C7.05833 20.6042 6.5 19.8833 6.5 19C6.5 18.4167 6.74167 17.9083 7.225 17.475C7.70833 17.0417 8.375 16.7 9.225 16.45L9.8 18.35C9.51667 18.4333 9.25833 18.5375 9.025 18.6625C8.79167 18.7875 8.63333 18.9 8.55 19C8.76667 19.2667 9.26667 19.5 10.05 19.7C10.8333 19.9 11.65 20 12.5 20C13.35 20 14.1708 19.9 14.9625 19.7C15.7542 19.5 16.2583 19.2667 16.475 19C16.3917 18.9 16.2333 18.7875 16 18.6625C15.7667 18.5375 15.5083 18.4333 15.225 18.35L15.8 16.45C16.65 16.7 17.3125 17.0417 17.7875 17.475C18.2625 17.9083 18.5 18.4167 18.5 19C18.5 19.8833 17.9417 20.6042 16.825 21.1625C15.7083 21.7208 14.2667 22 12.5 22ZM12.5 15.325C12.8 14.775 13.1167 14.2708 13.45 13.8125C13.7833 13.3542 14.1083 12.9167 14.425 12.5C15.0417 11.7 15.5333 10.9792 15.9 10.3375C16.2667 9.69583 16.45 8.9 16.45 7.95C16.45 6.85 16.0667 5.91667 15.3 5.15C14.5333 4.38333 13.6 4 12.5 4C11.4 4 10.4667 4.38333 9.7 5.15C8.93333 5.91667 8.55 6.85 8.55 7.95C8.55 8.9 8.73333 9.69583 9.1 10.3375C9.46667 10.9792 9.95833 11.7 10.575 12.5C10.8917 12.9167 11.2167 13.3542 11.55 13.8125C11.8833 14.2708 12.2 14.775 12.5 15.325ZM12.5 19C12.3167 19 12.15 18.9458 12 18.8375C11.85 18.7292 11.7417 18.5833 11.675 18.4C11.2917 17.2167 10.8083 16.225 10.225 15.425C9.64167 14.625 9.075 13.8583 8.525 13.125C7.99167 12.3917 7.52917 11.6333 7.1375 10.85C6.74583 10.0667 6.55 9.1 6.55 7.95C6.55 6.28333 7.125 4.875 8.275 3.725C9.425 2.575 10.8333 2 12.5 2C14.1667 2 15.575 2.575 16.725 3.725C17.875 4.875 18.45 6.28333 18.45 7.95C18.45 9.1 18.2583 10.0667 17.875 10.85C17.4917 11.6333 17.025 12.3917 16.475 13.125C15.9417 13.8583 15.3792 14.625 14.7875 15.425C14.1958 16.225 13.7083 17.2167 13.325 18.4C13.2583 18.5833 13.15 18.7292 13 18.8375C12.85 18.9458 12.6833 19 12.5 19ZM12.5 10.075C13.0833 10.075 13.5833 9.86667 14 9.45C14.4167 9.03333 14.625 8.53333 14.625 7.95C14.625 7.36667 14.4167 6.86667 14 6.45C13.5833 6.03333 13.0833 5.825 12.5 5.825C11.9167 5.825 11.4167 6.03333 11 6.45C10.5833 6.86667 10.375 7.36667 10.375 7.95C10.375 8.53333 10.5833 9.03333 11 9.45C11.4167 9.86667 11.9167 10.075 12.5 10.075Z"
//                         fill="white"
//                       />
//                     </g>
//                   </svg>
//                 </div>
//               </div>
//               <div className="icon-value">
//                 <div className="tracking-label">Live Tracking</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="seats-info">{busDetails?.AvailableSeats}</div>
//       </div>
//       <div className="policies-section-container">

//         <div className="hide-seats1">
//           <div className="hide-seats-button1">
//             <div
//               className="button-label1"
//               onClick={() => handleclick(busDetails?.ResultIndex)}
//             >
//               SELECT SEATS
//             </div>
//           </div>
//         </div>
//       </div>
//       {resultIndex == busDetails?.ResultIndex ? (
//         <div className="sealLayoutDiv">
//           <Box
//             className="layOutParent"
//             sx={{
//               height: "600px",
//               width: "800px",
//               bgcolor: "background.paper",
//               backdropFilter: "blur(5px)",
//               border: "1px solid red",
//               alignSelf: "center",
//               opacity: 0.9,
//               display: "flex",
//             }}
//           >
//             {/* //seat div started */}
//             <Box
//               sx={{
//                 height: "100%",
//                 width: "60%",
//               }}
//             >
//               <Box class="outerseat">
//                 <Box class="busSeatlft">
//                   <Box class="upper"></Box>
//                 </Box>
//                 <Box class="busSeatrgt">
//                   <Box class="busSeat">
//                     <Box class="seatcontainer clearfix">
//                       {layout?.map((item, index) => {
//                         if (item?.type === "upper") {
//                           const divStyle = {
//                             top: item?.top || 0,
//                             left: item?.left || 0,
//                           };
//                           return (
//                             <Box
//                               class={item?.class}
//                               id={item?.id}
//                               style={{
//                                 ...divStyle,
//                                 width: "20px",
//                                 height: "20px",
//                                 display: "flex",
//                                 position: "absolute",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 border: `2px solid ${item?.SeatType === 2
//                                   ? "green"
//                                   : "blue"
//                                   }`, // Change the border color based on SeatType // Change the border color based on SeatType // Change the color based on SeatType
//                               }}
//                             >
//                               <Checkbox
//                                 onChange={(e) =>
//                                   addOrRemoveSeat(
//                                     e,
//                                     upperArray?.[index],
//                                     index
//                                   )
//                                 }
//                                 disabled={
//                                   upperArray?.[index]?.SeatStatus ===
//                                     true
//                                     ? false
//                                     : true
//                                 }
//                               />
//                             </Box>
//                           );
//                         }
//                       })}
//                     </Box>
//                   </Box>
//                 </Box>
//               </Box>
//               <Box class="outerlowerseat">
//                 <Box class="busSeatlft">
//                   <Box class="lower"></Box>
//                 </Box>
//                 <Box class="busSeatrgt">
//                   <Box class="busSeat">
//                     <Box class="seatcontainer clearfix">
//                       {layout?.map((item, index) => {
//                         if (item?.type === "lower") {
//                           const divStyle = {
//                             top: item?.top || 0,
//                             left: item?.left || 0,
//                           };
//                           return (
//                             <Box
//                               class={item?.class}
//                               id={item?.id}
//                               style={{
//                                 ...divStyle,
//                                 width: "20px",
//                                 height: "20px",
//                                 display: "flex",
//                                 border: "1px solid red",
//                                 // padding: "2px",
//                                 position: "absolute",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                               }}
//                             >
//                               <Checkbox
//                                 onChange={(e) =>
//                                   addOrRemoveSeat(
//                                     e,
//                                     lowerArray?.[
//                                     index - upperArray.length
//                                     ],
//                                     index
//                                   )
//                                 }
//                                 disabled={
//                                   lowerArray?.[
//                                     index - upperArray.length
//                                   ]?.SeatStatus === true
//                                     ? false
//                                     : true
//                                 }
//                               />
//                             </Box>
//                           );
//                         }
//                       })}
//                     </Box>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 height: "100%",
//                 width: "50%",
//                 border: "3px solid gray",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Box
//                 sx={{
//                   height: "80%",
//                   width: "100%",
//                   border: "2px solid black",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     paddingTop: "5px",
//                     width: "70%",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     margin: "auto",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       gap: "8px",
//                     }}
//                   >
//                     {" "}
//                     <Typography>Seats:</Typography>
//                     {blockedSeatArray?.map((seat, index) => {
//                       return (
//                         <Typography
//                           sx={{
//                             color: "blue",
//                           }}
//                         >
//                           {seat?.SeatName}
//                         </Typography>
//                       );
//                     })}
//                   </Box>
//                   <Box>
//                     {(() => {
//                       const totalSeatPrice = blockedSeatArray.reduce(
//                         (totalPrice, seat) => {
//                           return totalPrice + (seat?.SeatFare || 0);
//                         },
//                         0
//                       );
//                       return (
//                         <div style={{ display: "flex" }}>
//                           <Typography>Price:</Typography>
//                           <h2
//                             style={{
//                               color: "blue",
//                               marginTop: "3px",
//                               width: "20px",
//                             }}
//                           >
//                             {totalSeatPrice}
//                           </h2>
//                         </div>
//                       );
//                     })()}
//                   </Box>
//                 </Box>
//                 <Box
//                   style={{
//                     width: "70%",
//                     margin: "auto",
//                     gap: "70px",
//                     display: "flex",
//                   }}
//                 >
//                   <label>Origin</label>
//                   <select
//                     value={selectedOrigin} // Bind the selected value to the state variable.
//                     onClick={(e) => setSelectedOrigin(e.target.value)} // Use onChange to handle value changes.
//                     style={{ borderRadius: "10px", width: "120px" }}
//                   >
//                     {origin.map((name, index) =>
//                       index === 0 ? (
//                         <option
//                           key={index}
//                           selected
//                           value={name?.CityPointIndex}
//                         >
//                           {name?.CityPointName}
//                         </option>
//                       ) : (
//                         <option
//                           key={index}
//                           value={name?.CityPointIndex}
//                         >
//                           {name?.CityPointName}
//                         </option>
//                       )
//                     )}
//                   </select>
//                 </Box>

//                 <Box
//                   style={{
//                     width: "70%",
//                     margin: "auto",
//                     marginTop: "20px",
//                     display: "flex",
//                     gap: "30px",
//                   }}
//                 >
//                   <label>Destination</label>
//                   <select
//                     value={selectedDropPoint}
//                     onClick={(e) =>
//                       setSelectedDropPoint(e.target.value)
//                     }
//                     style={{ borderRadius: "10px", width: "120px" }}
//                   >
//                     {destination.map((name, index) =>
//                       index === 0 ? (
//                         <option
//                           key={index}
//                           selected
//                           value={name?.CityPointIndex}
//                         >
//                           {name?.CityPointName}
//                         </option>
//                       ) : (
//                         <option
//                           key={index}
//                           value={name?.CityPointIndex}
//                         >
//                           {name?.CityPointName}
//                         </option>
//                       )
//                     )}
//                   </select>
//                 </Box>

//                 <Box
//                   style={{
//                     width: "60%",
//                     display: "flex",
//                     gap: "20px",
//                     margin: "auto",
//                     marginTop: "20px",
//                   }}
//                 >
//                   <Button
//                     onClick={handleClose}
//                     style={{
//                       backgroundColor: "#21325D",
//                       color: "white",
//                     }}
//                   >
//                     Close
//                   </Button>
//                   <Button
//                     onClick={handleContinue}
//                     style={{
//                       backgroundColor: "#21325D",
//                       color: "white",
//                     }}
//                   >
//                     Continue
//                   </Button>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//           <div>
//             <div></div>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   ))}
// </div> */}