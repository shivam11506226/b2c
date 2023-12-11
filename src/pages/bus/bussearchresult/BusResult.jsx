import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper, Radio, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { apiURL } from "../../../Constants/constant";

import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { styled } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import SwipeToSlide from "../../flight/SwipeToSlide";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./seatlayout.css";
function BusResult() {
  const navigate = useNavigate("");
  const reducerState = useSelector((state) => state);
  const [openAccordian, setOpenAccordian] = useState(false);
  const [resultIndex, setResultIndex] = useState("");
  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);
  const [resulttIndex, setResulttIndex] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDropPoint, setSelectedDropPoint] = useState("");
  const upperArray = [];
  const lowerArray = [];
  const [blockedSeatArray, setBlockedSeatArray] = useState([]);
  const [flatArray, setFlatArray] = useState([]);
  const [seatLayoutData, setSeatLayoutData] = useState({});
  const [layout, setLayout] = useState([]);
  const busFullData =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult;
  const busDetailsData =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult
      ?.BusResults;
  const busDataResult =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult
      ?.BusResults;

  console.log(reducerState, "reducerState");
  console.log(busDetailsData, "busDetailsData");
  console.log(layout, "layout");
  function handleclick(resultIndexPara) {
    setResultIndex(resultIndexPara);
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
          // console.log(
          //   "finalLayout",
          //   response.data?.data?.GetBusSeatLayOutResult?.SeatLayoutDetails
          //     ?.HTMLLayout
          // );

          setLayout((prev) => finalLayout);
          const SeatDetailsArray =
            response.data?.data?.GetBusSeatLayOutResult?.SeatLayoutDetails
              ?.SeatLayout?.SeatDetails;
          // console.log("seatDetailssAraayyy", SeatDetailsArray);

          let singleArray = SeatDetailsArray.reduce(
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

          // console.log("flattArayyyyyy",flatArray)
        });
    } catch (error) {
      console.error("Try-Catch Error:", error);
    }
  }


  flatArray.forEach((obj) => {
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
  function addOrRemoveSeat(e, object) {
    // console.log("hiiiiiiiiiiiiiiiiiiiii");
    // console.log(e);
    // console.log(e.target.checked);
    // console.log(index)
    if (e.target.checked) {
      setBlockedSeatArray([...blockedSeatArray, object]);
      // console.log(blockedSeatArray);
    } else {
      // const element = object;
      // const index = blockedSeatArray.indexOf(element);
      // const slicedArray=blockedSeatArray.splice(index, 1)
      // setBlockedSeatArray(slicedArray);
      const updatedBlockedSeatArray = blockedSeatArray.filter(
        (seatObject) => seatObject !== object
      );
      setBlockedSeatArray(updatedBlockedSeatArray);
      // console.log(blockedSeatArray);
    }
  }
   function handleClose() {
     setBlockedSeatArray([]);
     setSelectedDropPoint("");
     setSelectedOrigin("");
     setOrigin([]);
     setDestination([]);
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




  return (
    <div>
      <div className="sort-filter-bar">
        <div className="result-count">4 Buses Found</div>
        <div className="sort-options">
          <div className="sort-by-label">SORT BY:</div>
          <div className="sort-options-list">
            <div className="sort-option active">Relevance</div>
            <div className="sort-option">Fastest</div>
            <div className="sort-option">Cheapest</div>
            <div className="sort-option">Arrival</div>
            <div className="sort-option">Departure</div>
            <div className="sort-option">Rating</div>
          </div>
        </div>
      </div>

      <div className="seatlayout">
        <div className="seatlayoutleft">
          <div className="leftsection">
            <Typography pt={1} px={5} className="selectfilter">
              Select Filters
            </Typography>
            <Typography pt={1} px={5} className="selectfilter">
              AC
            </Typography>
            <div className="ac-container">
              <div className="option-container">
                <div className="icon">
                  <div className="icon-backgroundac" />
                  <div className="inner-iconac">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <mask
                        id="mask0_688_5012"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <rect width="16" height="16" />
                      </mask>
                      <g mask="url(#mask0_688_5012)">
                        <path
                          d="M7.33594 14.6666V11.8999L5.16927 14.0333L4.23594 13.0999L7.33594 9.99992V8.66658H6.0026L2.9026 11.7666L1.96927 10.8333L4.1026 8.66658H1.33594V7.33325H4.1026L1.96927 5.16658L2.9026 4.23325L6.0026 7.33325H7.33594V5.99992L4.23594 2.89992L5.16927 1.96659L7.33594 4.09992V1.33325H8.66927V4.09992L10.8359 1.96659L11.7693 2.89992L8.66927 5.99992V7.33325H10.0026L13.1026 4.23325L14.0359 5.16658L11.9026 7.33325H14.6693V8.66658H11.9026L14.0359 10.8333L13.1026 11.7666L10.0026 8.66658H8.66927V9.99992L11.7693 13.0999L10.8359 14.0333L8.66927 11.8999V14.6666H7.33594Z"
                          fill="#BBBBBB"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="textac">AC</div>
              </div>
              <div className="option-container">
                <div className="icon">
                  <div className="icon-background">
                    <div className="inner-icon" />
                  </div>
                </div>
                <div className="textac">Non AC</div>
              </div>
            </div>
            <Typography pt={1} px={5} className="selectfilter">
              Seat Type
            </Typography>
            <div className="ac-container">
              <div className="option-container">
                <div className="icon">
                  <div className="icon-backgroundac" />
                  <div className="inner-iconac">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <mask
                        id="mask0_688_5012"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <rect width="16" height="16" />
                      </mask>
                      <g mask="url(#mask0_688_5012)">
                        <path
                          d="M7.33594 14.6666V11.8999L5.16927 14.0333L4.23594 13.0999L7.33594 9.99992V8.66658H6.0026L2.9026 11.7666L1.96927 10.8333L4.1026 8.66658H1.33594V7.33325H4.1026L1.96927 5.16658L2.9026 4.23325L6.0026 7.33325H7.33594V5.99992L4.23594 2.89992L5.16927 1.96659L7.33594 4.09992V1.33325H8.66927V4.09992L10.8359 1.96659L11.7693 2.89992L8.66927 5.99992V7.33325H10.0026L13.1026 4.23325L14.0359 5.16658L11.9026 7.33325H14.6693V8.66658H11.9026L14.0359 10.8333L13.1026 11.7666L10.0026 8.66658H8.66927V9.99992L11.7693 13.0999L10.8359 14.0333L8.66927 11.8999V14.6666H7.33594Z"
                          fill="#BBBBBB"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="textac">Sleeper</div>
              </div>
              <div className="option-container">
                {/* <div className="icon">
                  <div className="icon-background">
                    <div className="inner-icon" />
                  </div>
                
                </div> */}
                <div className="textac">Seater</div>
              </div>
            </div>

            <Typography pt={1} px={5} className="selectfilter">
              Single Seater/Sleeper
            </Typography>
            <Box pl={5} display="block">
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Single
                </div>
              </form>
            </Box>
            <Typography pt={1} pl={5} className="selectfilter">
              Pick up point - Delhi
            </Typography>
            <Box pl={5} display="block">
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Non Stop
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Prenoon Departure
                </div>

                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  indiGo
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Vistara
                </div>
              </form>
            </Box>
            <Typography pt={1} px={5} className="selectfilter">
              Pick up point - Delhi
            </Typography>
            <Box pl={5} display="block">
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Before 6AM
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  6 AM-12 PM
                </div>

                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  12 PM-6 PM
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  After 6 PM
                </div>
              </form>
            </Box>
            <Typography pt={1} px={5} className="selectfilter">
              Drop point - Mumbai
            </Typography>
            <Box pl={5} display="block">
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Kandawali East (9)
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Goregaon East (1)
                </div>

                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Sion (7)
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Kalyan (3)
                </div>
              </form>
            </Box>
            <Typography pt={1} px={5} className="selectfilter">
              Drop time - Mumbai
            </Typography>
            <Box pl={5} display="block">
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Before 6AM
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  6 AM-12 PM
                </div>

                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  12 PM-6 PM
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  After 6 PM
                </div>
              </form>
            </Box>
          </div>
        </div>
        <div className="seatlayoutright">
          <div className="bus-info-containers">
            <div className="titleseat">Buses from New Delhi to Mumbai</div>
            {/* Add other components/content as needed */}
          </div>
          <div className="swipetoslide">
            <SwipeToSlide />
          </div>

          <div>
            {busDetailsData.map((busDetails) => (
              <div className="bus-detailsseat" key={busDetails?.ResultIndex}>
                <div className="bus-details-container">
                  <div className="info-wrapper">
                    <div className="info-item">
                      <div className="bus-type">{busDetails?.BusType}</div>
                    </div>
                    <div className="info-item1">
                      <div className="timeseat">
                        <span className="time-bold">
                          {busDetails?.DepartureTime}
                        </span>
                        <span className="date-value">
                          {busDetails?.departureDate}
                        </span>
                      </div>
                    </div>
                    <div className="info-item1">
                      <div className="timeseat">
                        <span className="time-bold">
                          {busDetails?.ArrivalTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="priceseat">
                    <div className="total-price">
                      {busDetails?.BusPrice?.PublishedPriceRoundedOff}
                    </div>
                  </div>
                </div>
                <div className="rating-info-container">
                  <div className="rating-section">
                    <div className="rating-item">
                      <div className="rating-icon">
                        <div className="icon-circle">
                          <div className="icon-background-gray">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                            >
                              <mask
                                id="mask0_688_5832"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="21"
                                height="20"
                              >
                                <rect
                                  x="0.5"
                                  width="20"
                                  height="20"
                                  fill="#D9D9D9"
                                />
                              </mask>
                              <g mask="url(#mask0_688_5832)">
                                <path
                                  d="M10.2057 6.75L12.8307 14.8542L6.2474 9.85417L10.2057 6.75ZM5.35156 18.3333L6.70573 12.4792L2.16406 8.54167L8.16406 8.02083L10.4974 2.5L12.8307 8.02083L18.8307 8.54167L14.2891 12.4792L15.6432 18.3333L10.4974 15.2292L5.35156 18.3333Z"
                                  fill="white"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="icon-value">{busDetails?.rating}</div>
                      </div>
                    </div>
                    <div className="tracking-item">
                      <div className="tracking-icon">
                        <div className="icon-circle">
                          <div className="icon-background-gray">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <mask
                                id="mask0_688_5837"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="25"
                                height="24"
                              >
                                <rect
                                  x="0.5"
                                  width="24"
                                  height="24"
                                  fill="#D9D9D9"
                                />
                              </mask>
                              <g mask="url(#mask0_688_5837)">
                                <path
                                  d="M12.5 22C10.7333 22 9.29167 21.7208 8.175 21.1625C7.05833 20.6042 6.5 19.8833 6.5 19C6.5 18.4167 6.74167 17.9083 7.225 17.475C7.70833 17.0417 8.375 16.7 9.225 16.45L9.8 18.35C9.51667 18.4333 9.25833 18.5375 9.025 18.6625C8.79167 18.7875 8.63333 18.9 8.55 19C8.76667 19.2667 9.26667 19.5 10.05 19.7C10.8333 19.9 11.65 20 12.5 20C13.35 20 14.1708 19.9 14.9625 19.7C15.7542 19.5 16.2583 19.2667 16.475 19C16.3917 18.9 16.2333 18.7875 16 18.6625C15.7667 18.5375 15.5083 18.4333 15.225 18.35L15.8 16.45C16.65 16.7 17.3125 17.0417 17.7875 17.475C18.2625 17.9083 18.5 18.4167 18.5 19C18.5 19.8833 17.9417 20.6042 16.825 21.1625C15.7083 21.7208 14.2667 22 12.5 22ZM12.5 15.325C12.8 14.775 13.1167 14.2708 13.45 13.8125C13.7833 13.3542 14.1083 12.9167 14.425 12.5C15.0417 11.7 15.5333 10.9792 15.9 10.3375C16.2667 9.69583 16.45 8.9 16.45 7.95C16.45 6.85 16.0667 5.91667 15.3 5.15C14.5333 4.38333 13.6 4 12.5 4C11.4 4 10.4667 4.38333 9.7 5.15C8.93333 5.91667 8.55 6.85 8.55 7.95C8.55 8.9 8.73333 9.69583 9.1 10.3375C9.46667 10.9792 9.95833 11.7 10.575 12.5C10.8917 12.9167 11.2167 13.3542 11.55 13.8125C11.8833 14.2708 12.2 14.775 12.5 15.325ZM12.5 19C12.3167 19 12.15 18.9458 12 18.8375C11.85 18.7292 11.7417 18.5833 11.675 18.4C11.2917 17.2167 10.8083 16.225 10.225 15.425C9.64167 14.625 9.075 13.8583 8.525 13.125C7.99167 12.3917 7.52917 11.6333 7.1375 10.85C6.74583 10.0667 6.55 9.1 6.55 7.95C6.55 6.28333 7.125 4.875 8.275 3.725C9.425 2.575 10.8333 2 12.5 2C14.1667 2 15.575 2.575 16.725 3.725C17.875 4.875 18.45 6.28333 18.45 7.95C18.45 9.1 18.2583 10.0667 17.875 10.85C17.4917 11.6333 17.025 12.3917 16.475 13.125C15.9417 13.8583 15.3792 14.625 14.7875 15.425C14.1958 16.225 13.7083 17.2167 13.325 18.4C13.2583 18.5833 13.15 18.7292 13 18.8375C12.85 18.9458 12.6833 19 12.5 19ZM12.5 10.075C13.0833 10.075 13.5833 9.86667 14 9.45C14.4167 9.03333 14.625 8.53333 14.625 7.95C14.625 7.36667 14.4167 6.86667 14 6.45C13.5833 6.03333 13.0833 5.825 12.5 5.825C11.9167 5.825 11.4167 6.03333 11 6.45C10.5833 6.86667 10.375 7.36667 10.375 7.95C10.375 8.53333 10.5833 9.03333 11 9.45C11.4167 9.86667 11.9167 10.075 12.5 10.075Z"
                                  fill="white"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="icon-value">
                          <div className="tracking-label">Live Tracking</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="seats-info">{busDetails?.AvailableSeats}</div>
                </div>
                <div className="policies-section-container">
                  <div className="section-links-container">
                    <div className="link-wrapper">
                      <div className="link-item">
                        <div className="link-text">Policies</div>
                        <div className="arrow-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.78966 14.707C7.60219 14.5194 7.49688 14.2651 7.49688 14C7.49688 13.7348 7.60219 13.4805 7.78966 13.293L11.0827 9.99997L7.78966 6.70697C7.69415 6.61472 7.61797 6.50438 7.56556 6.38237C7.51315 6.26037 7.48557 6.12915 7.48441 5.99637C7.48326 5.86359 7.50856 5.73191 7.55884 5.60902C7.60912 5.48612 7.68337 5.37447 7.77727 5.28057C7.87116 5.18668 7.98281 5.11243 8.10571 5.06215C8.22861 5.01187 8.36028 4.98656 8.49306 4.98772C8.62584 4.98887 8.75706 5.01646 8.87907 5.06887C9.00107 5.12128 9.11142 5.19746 9.20366 5.29297L13.2037 9.29297C13.3911 9.4805 13.4964 9.7348 13.4964 9.99997C13.4964 10.2651 13.3911 10.5194 13.2037 10.707L9.20366 14.707C9.01614 14.8944 8.76183 14.9998 8.49666 14.9998C8.2315 14.9998 7.97719 14.8944 7.78966 14.707Z"
                              fill="#BBBBBB"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="link-item">
                        <div className="link-text">Photos</div>
                        <div className="arrow-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.78966 14.707C7.60219 14.5194 7.49688 14.2651 7.49688 14C7.49688 13.7348 7.60219 13.4805 7.78966 13.293L11.0827 9.99997L7.78966 6.70697C7.69415 6.61472 7.61797 6.50438 7.56556 6.38237C7.51315 6.26037 7.48557 6.12915 7.48441 5.99637C7.48326 5.86359 7.50856 5.73191 7.55884 5.60902C7.60912 5.48612 7.68337 5.37447 7.77727 5.28057C7.87116 5.18668 7.98281 5.11243 8.10571 5.06215C8.22861 5.01187 8.36028 4.98656 8.49306 4.98772C8.62584 4.98887 8.75706 5.01646 8.87907 5.06887C9.00107 5.12128 9.11142 5.19746 9.20366 5.29297L13.2037 9.29297C13.3911 9.4805 13.4964 9.7348 13.4964 9.99997C13.4964 10.2651 13.3911 10.5194 13.2037 10.707L9.20366 14.707C9.01614 14.8944 8.76183 14.9998 8.49666 14.9998C8.2315 14.9998 7.97719 14.8944 7.78966 14.707Z"
                              fill="#BBBBBB"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="link-item">
                        <div className="link-text">Amenities</div>
                        <div className="arrow-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.78966 14.707C7.60219 14.5194 7.49688 14.2651 7.49688 14C7.49688 13.7348 7.60219 13.4805 7.78966 13.293L11.0827 9.99997L7.78966 6.70697C7.69415 6.61472 7.61797 6.50438 7.56556 6.38237C7.51315 6.26037 7.48557 6.12915 7.48441 5.99637C7.48326 5.86359 7.50856 5.73191 7.55884 5.60902C7.60912 5.48612 7.68337 5.37447 7.77727 5.28057C7.87116 5.18668 7.98281 5.11243 8.10571 5.06215C8.22861 5.01187 8.36028 4.98656 8.49306 4.98772C8.62584 4.98887 8.75706 5.01646 8.87907 5.06887C9.00107 5.12128 9.11142 5.19746 9.20366 5.29297L13.2037 9.29297C13.3911 9.4805 13.4964 9.7348 13.4964 9.99997C13.4964 10.2651 13.3911 10.5194 13.2037 10.707L9.20366 14.707C9.01614 14.8944 8.76183 14.9998 8.49666 14.9998C8.2315 14.9998 7.97719 14.8944 7.78966 14.707Z"
                              fill="#BBBBBB"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="link-item">
                        <div className="link-text">Pickups</div>
                        <div className="arrow-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.78966 14.707C7.60219 14.5194 7.49688 14.2651 7.49688 14C7.49688 13.7348 7.60219 13.4805 7.78966 13.293L11.0827 9.99997L7.78966 6.70697C7.69415 6.61472 7.61797 6.50438 7.56556 6.38237C7.51315 6.26037 7.48557 6.12915 7.48441 5.99637C7.48326 5.86359 7.50856 5.73191 7.55884 5.60902C7.60912 5.48612 7.68337 5.37447 7.77727 5.28057C7.87116 5.18668 7.98281 5.11243 8.10571 5.06215C8.22861 5.01187 8.36028 4.98656 8.49306 4.98772C8.62584 4.98887 8.75706 5.01646 8.87907 5.06887C9.00107 5.12128 9.11142 5.19746 9.20366 5.29297L13.2037 9.29297C13.3911 9.4805 13.4964 9.7348 13.4964 9.99997C13.4964 10.2651 13.3911 10.5194 13.2037 10.707L9.20366 14.707C9.01614 14.8944 8.76183 14.9998 8.49666 14.9998C8.2315 14.9998 7.97719 14.8944 7.78966 14.707Z"
                              fill="#BBBBBB"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="link-item">
                        <div className="link-text">Reviews</div>
                        <div className="arrow-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.78966 14.707C7.60219 14.5194 7.49688 14.2651 7.49688 14C7.49688 13.7348 7.60219 13.4805 7.78966 13.293L11.0827 9.99997L7.78966 6.70697C7.69415 6.61472 7.61797 6.50438 7.56556 6.38237C7.51315 6.26037 7.48557 6.12915 7.48441 5.99637C7.48326 5.86359 7.50856 5.73191 7.55884 5.60902C7.60912 5.48612 7.68337 5.37447 7.77727 5.28057C7.87116 5.18668 7.98281 5.11243 8.10571 5.06215C8.22861 5.01187 8.36028 4.98656 8.49306 4.98772C8.62584 4.98887 8.75706 5.01646 8.87907 5.06887C9.00107 5.12128 9.11142 5.19746 9.20366 5.29297L13.2037 9.29297C13.3911 9.4805 13.4964 9.7348 13.4964 9.99997C13.4964 10.2651 13.3911 10.5194 13.2037 10.707L9.20366 14.707C9.01614 14.8944 8.76183 14.9998 8.49666 14.9998C8.2315 14.9998 7.97719 14.8944 7.78966 14.707Z"
                              fill="#BBBBBB"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hide-seats1">
                    <div className="hide-seats-button1">
                      <div
                        className="button-label1"
                        onClick={() => handleclick(busDetails?.ResultIndex)}
                      >
                        SELECT SEATS
                      </div>
                    </div>
                  </div>
                </div>
                {resultIndex == busDetails?.ResultIndex ? (
                  <div className="sealLayoutDiv">
                    <Box
                      className="layOutParent"
                      sx={{
                        height: "600px",
                        width: "800px",
                        bgcolor: "background.paper",
                        backdropFilter: "blur(5px)",
                        border: "1px solid red",
                        alignSelf: "center",
                        opacity: 0.9,
                        display: "flex",
                      }}
                    >
                      {/* //seat div started */}
                      <Box
                        sx={{
                          height: "100%",
                          width: "60%",
                        }}
                      >
                        <Box class="outerseat">
                          <Box class="busSeatlft">
                            <Box class="upper"></Box>
                          </Box>
                          <Box class="busSeatrgt">
                            <Box class="busSeat">
                              <Box class="seatcontainer clearfix">
                                {layout?.map((item, index) => {
                                  if (item?.type === "upper") {
                                    const divStyle = {
                                      top: item?.top || 0,
                                      left: item?.left || 0,
                                    };
                                    return (
                                      <Box
                                        class={item?.class}
                                        id={item?.id}
                                        style={{
                                          ...divStyle,
                                          width: "20px",
                                          height: "20px",
                                          display: "flex",
                                          position: "absolute",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          border: `2px solid ${
                                            item?.SeatType === 2
                                              ? "green"
                                              : "blue"
                                          }`, // Change the border color based on SeatType // Change the border color based on SeatType // Change the color based on SeatType
                                        }}
                                      >
                                        <Checkbox
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
                                        />
                                      </Box>
                                    );
                                  }
                                })}
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box class="outerlowerseat">
                          <Box class="busSeatlft">
                            <Box class="lower"></Box>
                          </Box>
                          <Box class="busSeatrgt">
                            <Box class="busSeat">
                              <Box class="seatcontainer clearfix">
                                {layout?.map((item, index) => {
                                  if (item?.type === "lower") {
                                    const divStyle = {
                                      top: item?.top || 0,
                                      left: item?.left || 0,
                                    };
                                    return (
                                      <Box
                                        class={item?.class}
                                        id={item?.id}
                                        style={{
                                          ...divStyle,
                                          width: "20px",
                                          height: "20px",
                                          display: "flex",
                                          border: "1px solid red",
                                          // padding: "2px",
                                          position: "absolute",
                                          justifyContent: "center",
                                          alignItems: "center",
                                        }}
                                      >
                                        <Checkbox
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
                                        />
                                      </Box>
                                    );
                                  }
                                })}
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          height: "100%",
                          width: "50%",
                          border: "3px solid gray",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            height: "80%",
                            width: "100%",
                            border: "2px solid black",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              paddingTop: "5px",
                              width: "70%",
                              justifyContent: "space-between",
                              alignItems: "center",
                              margin: "auto",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                gap: "8px",
                              }}
                            >
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
                                );
                              })}
                            </Box>
                            <Box>
                              {(() => {
                                const totalSeatPrice = blockedSeatArray.reduce(
                                  (totalPrice, seat) => {
                                    return totalPrice + (seat?.SeatFare || 0);
                                  },
                                  0
                                );
                                return (
                                  <div style={{ display: "flex" }}>
                                    <Typography>Price:</Typography>
                                    <h2
                                      style={{
                                        color: "blue",
                                        marginTop: "3px",
                                        width: "20px",
                                      }}
                                    >
                                      {totalSeatPrice}
                                    </h2>
                                  </div>
                                );
                              })()}
                            </Box>
                          </Box>
                          <Box
                            style={{
                              width: "70%",
                              margin: "auto",
                              gap: "70px",
                              display: "flex",
                            }}
                          >
                            <label>Origin</label>
                            <select
                              value={selectedOrigin} // Bind the selected value to the state variable.
                              onClick={(e) => setSelectedOrigin(e.target.value)} // Use onChange to handle value changes.
                              style={{ borderRadius: "10px", width: "120px" }}
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
                          </Box>

                          <Box
                            style={{
                              width: "70%",
                              margin: "auto",
                              marginTop: "20px",
                              display: "flex",
                              gap: "30px",
                            }}
                          >
                            <label>Destination</label>
                            <select
                              value={selectedDropPoint}
                              onClick={(e) =>
                                setSelectedDropPoint(e.target.value)
                              }
                              style={{ borderRadius: "10px", width: "120px" }}
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
                          </Box>

                          <Box
                            style={{
                              width: "60%",
                              display: "flex",
                              gap: "20px",
                              margin: "auto",
                              marginTop: "20px",
                            }}
                          >
                            <Button
                              onClick={handleClose}
                              style={{
                                backgroundColor: "#21325D",
                                color: "white",
                              }}
                            >
                              Close
                            </Button>
                            <Button
                              onClick={handleContinue}
                              style={{
                                backgroundColor: "#21325D",
                                color: "white",
                              }}
                            >
                              Continue
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <div>
                      <div></div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusResult;
