import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Popover, Tooltip, Typography } from "@mui/material";
import FlightLoader from "./FlightLoader/FlightLoader";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Divider from "@mui/material/Divider";
import "./selectflight.css"
import { useLocation, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";



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





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));




function Items({ currentItems }) {
  // const dispatch = useDispatch();
  const location = useLocation();
  const dispatch = useDispatch();
  const [value, setValue] = useState(true);
  const reducerState = useSelector((state) => state);
  console.error("redux", reducerState);
  const [flightDetailsValue, setFlightDetailsValue] = React.useState("1");
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const adultCount = queryParams.get("adult");
  const childCount = queryParams.get("child");
  const infantCount = queryParams.get("infant");
  const checkLogin = reducerState?.logIn?.isLogin;
  const authenticUser = reducerState?.logIn?.loginData?.status;
  console.error("currentItems", currentItems);

  // Login Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Need to payload


  const flightImg =
    reducerState?.oneWay?.oneWayData?.data.data?.Response?.Results?.[0]?.map(
      (ele) => ele?.AirlineCode
    );
  console.log("IMG DATA", flightImg);
  const clickme = () => {
    setValue(!value);
  };
  const results =
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;
  const items = [...Array(results[0].length).keys()];

  console.log(results, "results of oneway")

  const handleIndexId = (ResultIndex) => {
    //  Check user is logged in or not while booking flight

    navigate(
      `booknow?adult=${adultCount}&child=${childCount}&infant=${infantCount} `
    );
    sessionStorage.setItem("ResultIndex", ResultIndex);
  };

  // Time formate
  const TicketDetails = reducerState?.flightFare?.flightQuoteData?.Results;

  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    currentItems &&
    currentItems.map((item) => {
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      const open = Boolean(anchorEl);
      const id = open ? "simple-popover" : undefined;

      const handleChange = (event, newValue) => {
        setFlightDetailsValue(newValue);
      };

      // Date



      const duration = `${Math.floor(results[0][item]?.Segments[0][0]?.Duration / 60)}hr ${results[0][item]?.Segments[0][0]?.Duration % 60
        }min`;

      const dateString = results[0][item]?.Segments[0][0]?.Origin?.DepTime;
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

      const dateString1 = results[0][item]?.Segments[0][0]?.Destination?.ArrTime;
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


      const dateString2 = results[0][item]?.Segments[0][1]?.Destination?.ArrTime;
      const date2 = new Date(dateString2);
      const options2 = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const formattedDate2 = date2.toLocaleString("en-US", options2);
      const [month2, day2, year2, time2, ampm2] =
        formattedDate2.split(" ");
      const desiredFormatStopped = `${day2}${month2}-${year2} ${time2} ${ampm2}`;



      if (reducerState?.oneWay?.isLoading === true) {
        return <FlightLoader />;
      }

      return (
        <>


          {
            results[0][item]?.Segments[0].length == 2 ?
              (
                <motion.div variants={variants} initial="initial"
                  whileInView="animate">
                  <motion.div variants={variants} className="singleFlightBox">
                    <div className="singleFlightBoxOne">
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/FlightImages/${results[0][item]?.AirlineCode}.png`} />{" "}
                      </div>
                      <span>{results[0][item]?.Segments[0][0]?.Airline?.AirlineName}</span>
                      <p>
                        {results[0][item]?.Segments[0][0]?.Airline?.AirlineCode}
                        {
                          results[0][item]?.Segments[0][0]?.Airline
                            ?.FlightNumber
                        }
                        {results[0][item]?.IsLCC === false ? (
                          <span style={{ background: "green", color: "white" }}>
                            LCC
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                    <div className="singleFlightBoxTwo">
                      <span>{results[0][item]?.Segments[0][0]?.Origin?.Airport?.CityName}</span>
                      <p>{desiredFormat.slice(0, 12)}</p>
                      <p style={{ fontSize: "14px" }}>{desiredFormat.slice(13)}</p>
                    </div>

                    <div className="singleFlightBoxThree">
                      <h4>{`${Math.floor(results[0][item]?.Segments[0][0]?.Duration / 60)}hr ${results[0][item]?.Segments[0][0]?.Duration % 60
                        }min`}   - {`${Math.floor(results[0][item]?.Segments[0][1]?.Duration / 60)}hr ${results[0][item]?.Segments[0][0]?.Duration % 60
                          }min`}</h4>
                      <div className="stopBef">
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            backgroundColor: "green",
                            marginX: "8px",
                            height: "3px",
                          }}
                          className=""
                        />
                      </div>
                      <p>{`1 stop via ${results[0][item]?.Segments[0][0]?.Destination?.Airport?.CityName}`}</p>

                      <span>{results[0][item]?.Segments[0][0]?.NoOfSeatAvailable} Seats Left</span>
                    </div>

                    <div className="singleFlightBoxFour">
                      <span>{results[0][item]?.Segments[0][1]?.Destination?.Airport?.CityName}</span>
                      <p>{desiredFormatStopped.slice(0, 12)}</p>
                      <p style={{ fontSize: "14px" }}>{desiredFormatStopped.slice(13)}</p>
                    </div>


                    <div className="singleFlightBoxSeven">
                      <p>₹ {' '}{results[0][item]?.Fare?.OfferedFare}</p>
                      <button
                        onClick={() => {
                          handleIndexId(
                            results[0][item]?.ResultIndex
                          );
                        }}
                      >
                        View Details →
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )
              :
              (
                <motion.div variants={variants} initial="initial"
                  whileInView="animate">
                  <motion.div variants={variants} className="singleFlightBox">
                    <div className="singleFlightBoxOne">
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/FlightImages/${results[0][item]?.AirlineCode}.png`} />{" "}
                      </div>
                      <span>{results[0][item]?.Segments[0][0]?.Airline?.AirlineName}</span>
                      <p>
                        {results[0][item]?.Segments[0][0]?.Airline?.AirlineCode}
                        {
                          results[0][item]?.Segments[0][0]?.Airline
                            ?.FlightNumber
                        }
                        {results[0][item]?.IsLCC === false ? (
                          <span style={{ background: "green", color: "white" }}>
                            LCC
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                    <div className="singleFlightBoxTwo">
                      <span>{results[0][item]?.Segments[0][0]?.Origin?.Airport?.CityName}</span>
                      <p>{desiredFormat.slice(0, 12)}</p>
                      <p style={{ fontSize: "14px" }}>{desiredFormat.slice(13)}</p>
                    </div>

                    <div className="singleFlightBoxThree">

                      <h4>{duration}</h4>

                      <div>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            backgroundColor: "green",
                            marginX: "8px",
                            height: "3px",
                          }}
                        />
                      </div>

                      <p>Non Stop</p>

                      <span>{results[0][item]?.Segments[0][0]?.NoOfSeatAvailable} Seats Left</span>
                    </div>

                    <div className="singleFlightBoxFour">
                      <span>{results[0][item]?.Segments[0][0]?.Destination?.Airport?.CityName}</span>
                      <p>{desiredFormat1.slice(0, 12)}</p>
                      <p style={{ fontSize: "14px" }}>{desiredFormat1.slice(13)}</p>
                    </div>

                    <div className="singleFlightBoxSeven">
                      <p>₹ {' '}{results[0][item]?.Fare?.PublishedFare}</p>
                      <button
                        onClick={() => {
                          handleIndexId(
                            results[0][item]?.ResultIndex
                          );
                        }}
                      >
                        View Details →
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )
          }


        </>
      );
    })
  );
}

export default function BasicGrid() {
  const reducerState = useSelector((state) => state);
  const results =
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;

  // ============================================> paginations =================================//

  const items = [...Array(results[0].length).keys()];
  const itemsPerPage = 50;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
