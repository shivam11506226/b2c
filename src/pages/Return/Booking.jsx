import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper, Radio, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./booking.css";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { styled } from "@mui/material/styles";
import SelectFlight from "./SelectFlight";
import { useNavigate } from "react-router-dom";
import "../flight/searchresult.css";
function valuetext(value) {
  return `${value}°C`;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Booking = (props) => {
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();
  const flightDataArray = [
    {
      airline: "Indigo",
      flightNumber: "6E403",
      departureTime: "05:00",
      departureCity: "New Delhi",
      durationHours: "08",
      durationMinutes: "30",
      flightType: "Non Stop",
      arrivalTime: "13:30",
      arrivalCity: "Bengaluru",
      price: "6,931",
    },
    {
      airline: "Indigo",
      flightNumber: "6E403",
      departureTime: "05:00",
      departureCity: "New Delhi",
      durationHours: "08",
      durationMinutes: "30",
      flightType: "Non Stop",
      arrivalTime: "13:30",
      arrivalCity: "Bengaluru",
      price: "6,931",
    },
    {
      airline: "Indigo",
      flightNumber: "6E403",
      departureTime: "05:00",
      departureCity: "New Delhi",
      durationHours: "08",
      durationMinutes: "30",
      flightType: "Non Stop",
      arrivalTime: "13:30",
      arrivalCity: "Bengaluru",
      price: "6,931",
    },

    // Additional flight data objects...
  ];


  function handleClick(){
    navigate("/completebooking");
  }
  return (
    <section >
      <div style={{ width: "95%", margin: "auto"}}>
        <div className="row popular_content">
          <div className="col-12">
            <div className="row" style={{ display: "flex" }}>
              <div className="col-md-3 fixed_row">
                <div className="leftsection">
                  <Typography pt={1} px={5}  className="selectfilter">
                    Select Filters
                  </Typography>
                  <Typography pt={1} px={5} className="suggest">
                    Suggested for you
                  </Typography>
                  <Box p={3} display="block">
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

                  {/* <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginY: "15px",
                      marginX: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      href="#contained-buttons"
                      size="large"
                      className="Bton_filter"
                      sx={{
                        background: "white",
                        color: "gray",
                        boxShadow: "2px 2px 8px gray",
                        borderRadius: "20px",
                        fontSize: "9px",
                      }}
                      mt={5}
                    >
                      Direct
                    </Button>
                    <Button
                      variant="contained"
                      href="#contained-buttons"
                      size="large"
                      className="Bton_filter"
                      sx={{
                        background: "white",
                        color: "gray",
                        boxShadow: "2px 2px 8px gray",
                        borderRadius: "20px",
                        fontSize: "9px",
                      }}
                      mt={5}
                    >
                      1 Stop
                    </Button>
                  </Box> */}
                  {/* <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginY: "15px",
                      marginX: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      href="#contained-buttons"
                      size="large"
                      className="Bton_filter"
                      sx={{
                        background: "white",
                        color: "gray",
                        boxShadow: "2px 2px 8px gray",
                        borderRadius: "20px",
                        fontSize: "9px",
                      }}
                      mt={5}
                    >
                      2+ Stops
                    </Button>
                  </Box> */}
                  <Divider sx={{ backgroundColor: "gray" }} />
                  <Typography pt={1} px={5}>
                    One Way Price
                  </Typography>
                  <Box sx={{ width: 300 }} px={3}>
                    {/* <Rangeslide /> */}
                  </Box>
                  <Divider sx={{ backgroundColor: "gray" }} />
                  <Typography pt={1} px={5}>
                    Departure from New Delhi
                  </Typography>
                  <Box p={3} display="block">
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
                  <Typography pt={1} px={5}>
                    Airlines
                  </Typography>
                  <Box p={3} display="block">
                    <form action="">
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Air India (9)
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Air India Express (1)
                      </div>

                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Air Asia (7)
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        AKasa Air (3)
                      </div>
                    </form>
                  </Box>
                </div>
                <div className="leftsection">
                  <Typography justifyContent="center" display="flex" pt={3}>
                    Return Journey
                  </Typography>

                  <Divider sx={{ backgroundColor: "gray" }} />

                  <Box sx={{ width: 300 }} px={3}>
                    {/* <Rangeslide /> */}
                  </Box>
                  <Divider sx={{ backgroundColor: "gray" }} />
                  <Typography pt={1} px={5}>
                    Departure from New Delhi
                  </Typography>
                  <Box p={3} display="block">
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
                  <Typography pt={1} px={5}>
                    Airlines
                  </Typography>
                  <Box p={3} display="block">
                    <form action="">
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Air India (9)
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Air India Express (1)
                      </div>

                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Air Asia (7)
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        AKasa Air (3)
                      </div>
                    </form>
                  </Box>
                </div>
              </div>

              
              <div className="col-md-6   d-flex gap-3 resultsdata" >
   

                <div
                  style={{
                   
                  }}
                  className="results"
                 
                >
                  {/* Content of the first flex container */}

                  <div className="containerss">
                    <div className="locationContainer" >
                      <div className="locationInfo">
                        <div className="locationName">New Delhi</div>
                        <div className="cityIconContainer">
                          <div className="cityIcon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <mask
                                id="mask0_389_42349"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                              >
                                <rect width="20" height="20" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_389_42349)">
                                <path
                                  d="M11.6654 15L10.4987 13.7917L13.457 10.8333H3.33203V9.16667H13.457L10.4987 6.20833L11.6654 5L16.6654 10L11.6654 15Z"
                                  fill="#071C2C"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="cityHighlight"></div>
                        </div>
                        <div className="locationName">Bengaluru</div>
                      </div>
                      <div className="dateInfo">Fri, 20 Oct</div>
                    </div>

                    <div className="containerdetail">
                      <div className="detailItem">
                        <div className="detailTitle">Departure</div>
                      </div>
                      <div className="detailItem">
                        <div className="detailTitle">Duration</div>
                      </div>
                      <div className="detailItem">
                        <div className="detailTitle">Arrival</div>
                      </div>
                      <div className="priceDetail">
                        <div className="priceTitle">Price</div>
                      </div>
                    </div>
                  </div>

                  <div >
                    {flightDataArray.map((flightData, index) => (
                      <div
                        className="containerdetails"
                        key={index}
                        style={{ marginBottom: "20px"}}
                        onClick={handleClick}
                      >
                        <div className="flightInfo">
                          <div className="airlineLogo">
                            <div className="logoHighlight">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_389_42368)">
                                  <path
                                    d="M22.9902 1.07418e-08C22.7402 1.07418e-08 22.4902 0.096 22.2992 0.287C22.1161 0.471176 22.0134 0.720313 22.0134 0.98C22.0134 1.23969 22.1161 1.48882 22.2992 1.673C22.3898 1.76401 22.4975 1.83622 22.6161 1.8855C22.7346 1.93478 22.8618 1.96015 22.9902 1.96015C23.1186 1.96015 23.2458 1.93478 23.3643 1.8855C23.4829 1.83622 23.5906 1.76401 23.6812 1.673C23.8643 1.48882 23.967 1.23969 23.967 0.98C23.967 0.720313 23.8643 0.471176 23.6812 0.287C23.5906 0.196018 23.4829 0.123828 23.3643 0.0745765C23.2458 0.0253248 23.1186 -1.90485e-05 22.9902 1.07418e-08ZM20.5462 1.959C20.2962 1.959 20.0462 2.055 19.8552 2.246C19.6721 2.43018 19.5694 2.67931 19.5694 2.939C19.5694 3.19869 19.6721 3.44782 19.8552 3.632C19.9459 3.72277 20.0537 3.79477 20.1722 3.8439C20.2908 3.89303 20.4179 3.91831 20.5462 3.91831C20.6745 3.91831 20.8016 3.89303 20.9202 3.8439C21.0388 3.79477 21.1465 3.72277 21.2372 3.632C21.3737 3.49488 21.4665 3.32047 21.5042 3.13071C21.5418 2.94095 21.5224 2.7443 21.4486 2.56549C21.3747 2.38669 21.2497 2.23371 21.0891 2.1258C20.9285 2.01789 20.7397 1.95985 20.5462 1.959ZM6.3842 4.408C6.12984 4.41613 5.88862 4.52289 5.71156 4.70569C5.53451 4.8885 5.43551 5.13301 5.43551 5.3875C5.43551 5.64199 5.53451 5.8865 5.71156 6.06931C5.88862 6.25211 6.12984 6.35887 6.3842 6.367C6.64398 6.367 6.89312 6.2638 7.07682 6.08011C7.26051 5.89642 7.36371 5.64728 7.36371 5.3875C7.36371 5.12772 7.26051 4.87858 7.07682 4.69489C6.89312 4.5112 6.64398 4.408 6.3842 4.408ZM9.31221 4.408C9.05243 4.408 8.80329 4.5112 8.61959 4.69489C8.4359 4.87858 8.33271 5.12772 8.33271 5.3875C8.33271 5.64728 8.4359 5.89642 8.61959 6.08011C8.80329 6.2638 9.05243 6.367 9.31221 6.367C9.57199 6.367 9.82112 6.2638 10.0048 6.08011C10.1885 5.89642 10.2917 5.64728 10.2917 5.3875C10.2917 5.12772 10.1885 4.87858 10.0048 4.69489C9.82112 4.5112 9.57199 4.408 9.31221 4.408ZM12.7322 4.408C12.4724 4.408 12.2233 4.5112 12.0396 4.69489C11.8559 4.87858 11.7527 5.12772 11.7527 5.3875C11.7527 5.64728 11.8559 5.89642 12.0396 6.08011C12.2233 6.2638 12.4724 6.367 12.7322 6.367C12.9866 6.35887 13.2278 6.25211 13.4048 6.06931C13.5819 5.8865 13.6809 5.64199 13.6809 5.3875C13.6809 5.13301 13.5819 4.8885 13.4048 4.70569C13.2278 4.52289 12.9866 4.41613 12.7322 4.408ZM15.6632 4.408C15.4034 4.408 15.1543 4.5112 14.9706 4.69489C14.7869 4.87858 14.6837 5.12772 14.6837 5.3875C14.6837 5.64728 14.7869 5.89642 14.9706 6.08011C15.1543 6.2638 15.4034 6.367 15.6632 6.367C15.923 6.367 16.1721 6.2638 16.3558 6.08011C16.5395 5.89642 16.6427 5.64728 16.6427 5.3875C16.6427 5.12772 16.5395 4.87858 16.3558 4.69489C16.1721 4.5112 15.923 4.408 15.6632 4.408ZM18.5942 4.408C18.4654 4.40793 18.3379 4.43323 18.2189 4.48244C18.1 4.53166 17.9918 4.60383 17.9007 4.69483C17.8096 4.78583 17.7374 4.89388 17.688 5.01282C17.6387 5.13175 17.6133 5.25924 17.6132 5.388C17.6131 5.51676 17.6384 5.64427 17.6877 5.76326C17.7369 5.88224 17.809 5.99037 17.9 6.08146C17.991 6.17256 18.0991 6.24484 18.218 6.29417C18.337 6.34351 18.4644 6.36893 18.5932 6.369C18.8533 6.36913 19.1027 6.26596 19.2867 6.08217C19.4706 5.89839 19.5741 5.64904 19.5742 5.389C19.5743 5.12896 19.4712 4.87951 19.2874 4.69554C19.1036 4.51156 18.8542 4.40813 18.5942 4.408ZM15.6632 7.347C15.4112 7.35839 15.1733 7.46651 14.999 7.64886C14.8247 7.83122 14.7275 8.07375 14.7275 8.326C14.7275 8.57825 14.8247 8.82078 14.999 9.00314C15.1733 9.18549 15.4112 9.29361 15.6632 9.305C15.9152 9.29361 16.1531 9.18549 16.3274 9.00314C16.5017 8.82078 16.5989 8.57825 16.5989 8.326C16.5989 8.07375 16.5017 7.83122 16.3274 7.64886C16.1531 7.46651 15.9152 7.35839 15.6632 7.347ZM18.5942 7.347C18.3398 7.35513 18.0986 7.46189 17.9216 7.64469C17.7445 7.8275 17.6455 8.07201 17.6455 8.3265C17.6455 8.58099 17.7445 8.8255 17.9216 9.00831C18.0986 9.19111 18.3398 9.29787 18.5942 9.306C18.7226 9.30587 18.8497 9.28044 18.9682 9.23115C19.0868 9.18187 19.1945 9.1097 19.2851 9.01878C19.3758 8.92786 19.4476 8.81997 19.4965 8.70127C19.5454 8.58256 19.5705 8.45539 19.5702 8.327C19.5705 8.19857 19.5454 8.07134 19.4965 7.95258C19.4476 7.83383 19.3758 7.72586 19.2852 7.63486C19.1945 7.54386 19.0869 7.4716 18.9683 7.42221C18.8498 7.37282 18.7226 7.34726 18.5942 7.347ZM13.2212 9.306C13.0928 9.30571 12.9655 9.33092 12.8469 9.38019C12.7283 9.42946 12.6206 9.50179 12.5302 9.593C12.3546 9.77792 12.2581 10.0241 12.2612 10.2791C12.2643 10.5341 12.3668 10.7778 12.5468 10.9584C12.7269 11.139 12.9703 11.2422 13.2253 11.2461C13.4803 11.2499 13.7268 11.1541 13.9122 10.979C14.0487 10.8419 14.1415 10.6675 14.1792 10.4777C14.2168 10.2879 14.1974 10.0913 14.1236 9.91249C14.0497 9.73369 13.9247 9.58071 13.7641 9.4728C13.6035 9.36489 13.4147 9.30685 13.2212 9.306ZM18.5942 10.286C18.3344 10.286 18.0853 10.3892 17.9016 10.5729C17.7179 10.7566 17.6147 11.0057 17.6147 11.2655C17.6147 11.5253 17.7179 11.7744 17.9016 11.9581C18.0853 12.1418 18.3344 12.245 18.5942 12.245C18.854 12.245 19.1031 12.1418 19.2868 11.9581C19.4705 11.7744 19.5737 11.5253 19.5737 11.2655C19.5737 11.0057 19.4705 10.7566 19.2868 10.5729C19.1031 10.3892 18.854 10.286 18.5942 10.286ZM11.2672 11.755C11.0074 11.755 10.7583 11.8582 10.5746 12.0419C10.3909 12.2256 10.2877 12.4747 10.2877 12.7345C10.2877 12.9943 10.3909 13.2434 10.5746 13.4271C10.7583 13.6108 11.0074 13.714 11.2672 13.714C11.527 13.714 11.7761 13.6108 11.9598 13.4271C12.1435 13.2434 12.2467 12.9943 12.2467 12.7345C12.2467 12.4747 12.1435 12.2256 11.9598 12.0419C11.7761 11.8582 11.527 11.755 11.2672 11.755ZM18.5942 13.225C18.3422 13.2364 18.1043 13.3445 17.93 13.5269C17.7557 13.7092 17.6585 13.9518 17.6585 14.204C17.6585 14.4563 17.7557 14.6988 17.93 14.8811C18.1043 15.0635 18.3422 15.1716 18.5942 15.183C18.8539 15.183 19.1029 15.0799 19.2865 14.8963C19.4701 14.7127 19.5732 14.4636 19.5732 14.204C19.5732 13.9444 19.4701 13.6953 19.2865 13.5117C19.1029 13.3281 18.8539 13.225 18.5942 13.225ZM9.31221 13.714C9.11884 13.715 8.93009 13.7732 8.76968 13.8812C8.60928 13.9892 8.48436 14.1422 8.41063 14.321C8.33691 14.4997 8.31765 14.6963 8.3553 14.886C8.39294 15.0756 8.4858 15.2499 8.6222 15.387C8.71278 15.4779 8.8204 15.5499 8.93889 15.5991C9.05738 15.6483 9.18441 15.6736 9.31271 15.6736C9.441 15.6736 9.56803 15.6483 9.68652 15.5991C9.80501 15.5499 9.91263 15.4779 10.0032 15.387C10.1397 15.2499 10.2325 15.0755 10.2702 14.8857C10.3078 14.6959 10.2884 14.4993 10.2146 14.3205C10.1407 14.1417 10.0157 13.9887 9.8551 13.8808C9.69454 13.7729 9.50566 13.7149 9.31221 13.714ZM1.00921 16.164C0.880772 16.1643 0.753649 16.1898 0.635093 16.2392C0.516537 16.2886 0.408871 16.3609 0.318241 16.4519C0.135205 16.6357 0.0326747 16.8846 0.0332052 17.144C0.0337356 17.4034 0.137283 17.6519 0.321069 17.835C0.504855 18.018 0.753823 18.1205 1.01321 18.12C1.27259 18.1195 1.52113 18.0159 1.70417 17.8321C1.88721 17.6483 1.98974 17.3994 1.98921 17.14C1.98867 16.8806 1.88513 16.6321 1.70134 16.449C1.51756 16.266 1.26859 16.1635 1.00921 16.164ZM3.94021 16.164C3.68082 16.1645 3.43228 16.2681 3.24924 16.4519C3.15861 16.5429 3.08679 16.6508 3.03789 16.7696C2.98898 16.8883 2.96394 17.0156 2.96421 17.144C2.96447 17.2724 2.99002 17.3996 3.03942 17.5181C3.08881 17.6367 3.16107 17.7443 3.25207 17.835C3.43585 18.018 3.68482 18.1205 3.94421 18.12C4.20359 18.1195 4.45213 18.0159 4.63517 17.8321C4.8182 17.6483 4.92074 17.3994 4.92021 17.14C4.91967 16.8806 4.81613 16.6321 4.63234 16.449C4.44856 16.266 4.19959 16.1635 3.94021 16.164ZM6.8712 16.164C6.61156 16.164 6.36255 16.2671 6.17895 16.4507C5.99535 16.6343 5.89221 16.8834 5.89221 17.143C5.89221 17.4026 5.99535 17.6517 6.17895 17.8353C6.36255 18.0189 6.61156 18.122 6.8712 18.122C7.13085 18.122 7.37986 18.0189 7.56346 17.8353C7.74706 17.6517 7.8502 17.4026 7.8502 17.143C7.8502 16.8834 7.74706 16.6343 7.56346 16.4507C7.37986 16.2671 7.13085 16.164 6.8712 16.164ZM18.5942 16.653C18.3422 16.6644 18.1043 16.7725 17.93 16.9549C17.7557 17.1372 17.6585 17.3798 17.6585 17.632C17.6585 17.8842 17.7557 18.1268 17.93 18.3091C18.1043 18.4915 18.3422 18.5996 18.5942 18.611C18.8539 18.611 19.1029 18.5079 19.2865 18.3243C19.4701 18.1407 19.5732 17.8916 19.5732 17.632C19.5732 17.3724 19.4701 17.1233 19.2865 16.9397C19.1029 16.7561 18.8539 16.653 18.5942 16.653ZM6.8712 19.103C6.61156 19.103 6.36255 19.2061 6.17895 19.3897C5.99535 19.5733 5.89221 19.8224 5.89221 20.082C5.89221 20.3416 5.99535 20.5907 6.17895 20.7743C6.36255 20.9579 6.61156 21.061 6.8712 21.061C7.13085 21.061 7.37986 20.9579 7.56346 20.7743C7.74706 20.5907 7.8502 20.3416 7.8502 20.082C7.8502 19.8224 7.74706 19.5733 7.56346 19.3897C7.37986 19.2061 7.13085 19.103 6.8712 19.103ZM6.8712 22.041C6.61143 22.041 6.36229 22.1442 6.17859 22.3279C5.9949 22.5116 5.89171 22.7607 5.89171 23.0205C5.89171 23.2803 5.9949 23.5294 6.17859 23.7131C6.36229 23.8968 6.61143 24 6.8712 24C7.13098 24 7.38012 23.8968 7.56382 23.7131C7.74751 23.5294 7.85071 23.2803 7.85071 23.0205C7.85071 22.7607 7.74751 22.5116 7.56382 22.3279C7.38012 22.1442 7.13098 22.041 6.8712 22.041Z"
                                    fill="#09009B"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_389_42368">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div>
                            <span className="airlineDetails">
                              {flightData.airline}
                              <br />
                            </span>
                            <span className="flightNumber">
                              {flightData.flightNumber}
                            </span>
                          </div>
                        </div>
                        <div className="departureInfo">
                          <div>
                            <span className="departureTime">
                              {flightData.departureTime}
                              <br />
                            </span>
                            <span className="flightNumber">
                              {flightData.departureCity}
                            </span>
                          </div>
                          <div className="durationInfo">
                            <div className="durationValue">
                              <span className="flightNumber">
                                {flightData.durationHours}
                              </span>
                              <span className="flightNumber">h</span>
                              <span className="flightNumber">
                                {flightData.durationMinutes}
                              </span>
                              <span className="flightNumber">m</span>
                            </div>
                            <div className="durationSeparator"></div>
                            <div className="flightType">
                              {flightData.flightType}
                            </div>
                          </div>
                          <div>
                            <span className="arrivalTime">
                              {flightData.arrivalTime}
                              <br />
                            </span>
                            <span className="flightNumber">
                              {flightData.arrivalCity}
                            </span>
                          </div>
                          <div className="priceContainer">
                            <div className="priceDetails">
                              <div>
                                <span className="priceValue">
                                  ₹{flightData.price}
                                  <br />
                                </span>
                                <span className="flightNumber">Per Adult</span>
                              </div>
                            </div>
                            <div className="priceTag"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap:'2px',
                  
                   
                  }}
                >
                  {/* Content of the second flex container */}
                  <div
                  style={{
                    
                  }}
                  className="results"
                >
                  {/* Content of the first flex container */}

                  <div className="containerss">
                    <div className="locationContainer">
                      <div className="locationInfo">
                        <div className="locationName"> Bengaluru</div>
                        <div className="cityIconContainer">
                          <div className="cityIcon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <mask
                                id="mask0_389_42349"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                              >
                                <rect width="20" height="20" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_389_42349)">
                                <path
                                  d="M11.6654 15L10.4987 13.7917L13.457 10.8333H3.33203V9.16667H13.457L10.4987 6.20833L11.6654 5L16.6654 10L11.6654 15Z"
                                  fill="#071C2C"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="cityHighlight"></div>
                        </div>
                        <div className="locationName">New Delhi</div>
                      </div>
                      <div className="dateInfo">Fri, 20 Oct</div>
                    </div>

                    <div className="containerdetail">
                      <div className="detailItem">
                        <div className="detailTitle">Departure</div>
                      </div>
                      <div className="detailItem">
                        <div className="detailTitle">Duration</div>
                      </div>
                      <div className="detailItem">
                        <div className="detailTitle">Arrival</div>
                      </div>
                      <div className="priceDetail">
                        <div className="priceTitle">Price</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    {flightDataArray.map((flightData, index) => (
                      <div
                        className="containerdetails"
                        key={index}
                        style={{ marginBottom: "20px" }}
                        onClick={handleClick}
                      >
                        <div className="flightInfo">
                          <div className="airlineLogo">
                            <div className="logoHighlight">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_389_42368)">
                                  <path
                                    d="M22.9902 1.07418e-08C22.7402 1.07418e-08 22.4902 0.096 22.2992 0.287C22.1161 0.471176 22.0134 0.720313 22.0134 0.98C22.0134 1.23969 22.1161 1.48882 22.2992 1.673C22.3898 1.76401 22.4975 1.83622 22.6161 1.8855C22.7346 1.93478 22.8618 1.96015 22.9902 1.96015C23.1186 1.96015 23.2458 1.93478 23.3643 1.8855C23.4829 1.83622 23.5906 1.76401 23.6812 1.673C23.8643 1.48882 23.967 1.23969 23.967 0.98C23.967 0.720313 23.8643 0.471176 23.6812 0.287C23.5906 0.196018 23.4829 0.123828 23.3643 0.0745765C23.2458 0.0253248 23.1186 -1.90485e-05 22.9902 1.07418e-08ZM20.5462 1.959C20.2962 1.959 20.0462 2.055 19.8552 2.246C19.6721 2.43018 19.5694 2.67931 19.5694 2.939C19.5694 3.19869 19.6721 3.44782 19.8552 3.632C19.9459 3.72277 20.0537 3.79477 20.1722 3.8439C20.2908 3.89303 20.4179 3.91831 20.5462 3.91831C20.6745 3.91831 20.8016 3.89303 20.9202 3.8439C21.0388 3.79477 21.1465 3.72277 21.2372 3.632C21.3737 3.49488 21.4665 3.32047 21.5042 3.13071C21.5418 2.94095 21.5224 2.7443 21.4486 2.56549C21.3747 2.38669 21.2497 2.23371 21.0891 2.1258C20.9285 2.01789 20.7397 1.95985 20.5462 1.959ZM6.3842 4.408C6.12984 4.41613 5.88862 4.52289 5.71156 4.70569C5.53451 4.8885 5.43551 5.13301 5.43551 5.3875C5.43551 5.64199 5.53451 5.8865 5.71156 6.06931C5.88862 6.25211 6.12984 6.35887 6.3842 6.367C6.64398 6.367 6.89312 6.2638 7.07682 6.08011C7.26051 5.89642 7.36371 5.64728 7.36371 5.3875C7.36371 5.12772 7.26051 4.87858 7.07682 4.69489C6.89312 4.5112 6.64398 4.408 6.3842 4.408ZM9.31221 4.408C9.05243 4.408 8.80329 4.5112 8.61959 4.69489C8.4359 4.87858 8.33271 5.12772 8.33271 5.3875C8.33271 5.64728 8.4359 5.89642 8.61959 6.08011C8.80329 6.2638 9.05243 6.367 9.31221 6.367C9.57199 6.367 9.82112 6.2638 10.0048 6.08011C10.1885 5.89642 10.2917 5.64728 10.2917 5.3875C10.2917 5.12772 10.1885 4.87858 10.0048 4.69489C9.82112 4.5112 9.57199 4.408 9.31221 4.408ZM12.7322 4.408C12.4724 4.408 12.2233 4.5112 12.0396 4.69489C11.8559 4.87858 11.7527 5.12772 11.7527 5.3875C11.7527 5.64728 11.8559 5.89642 12.0396 6.08011C12.2233 6.2638 12.4724 6.367 12.7322 6.367C12.9866 6.35887 13.2278 6.25211 13.4048 6.06931C13.5819 5.8865 13.6809 5.64199 13.6809 5.3875C13.6809 5.13301 13.5819 4.8885 13.4048 4.70569C13.2278 4.52289 12.9866 4.41613 12.7322 4.408ZM15.6632 4.408C15.4034 4.408 15.1543 4.5112 14.9706 4.69489C14.7869 4.87858 14.6837 5.12772 14.6837 5.3875C14.6837 5.64728 14.7869 5.89642 14.9706 6.08011C15.1543 6.2638 15.4034 6.367 15.6632 6.367C15.923 6.367 16.1721 6.2638 16.3558 6.08011C16.5395 5.89642 16.6427 5.64728 16.6427 5.3875C16.6427 5.12772 16.5395 4.87858 16.3558 4.69489C16.1721 4.5112 15.923 4.408 15.6632 4.408ZM18.5942 4.408C18.4654 4.40793 18.3379 4.43323 18.2189 4.48244C18.1 4.53166 17.9918 4.60383 17.9007 4.69483C17.8096 4.78583 17.7374 4.89388 17.688 5.01282C17.6387 5.13175 17.6133 5.25924 17.6132 5.388C17.6131 5.51676 17.6384 5.64427 17.6877 5.76326C17.7369 5.88224 17.809 5.99037 17.9 6.08146C17.991 6.17256 18.0991 6.24484 18.218 6.29417C18.337 6.34351 18.4644 6.36893 18.5932 6.369C18.8533 6.36913 19.1027 6.26596 19.2867 6.08217C19.4706 5.89839 19.5741 5.64904 19.5742 5.389C19.5743 5.12896 19.4712 4.87951 19.2874 4.69554C19.1036 4.51156 18.8542 4.40813 18.5942 4.408ZM15.6632 7.347C15.4112 7.35839 15.1733 7.46651 14.999 7.64886C14.8247 7.83122 14.7275 8.07375 14.7275 8.326C14.7275 8.57825 14.8247 8.82078 14.999 9.00314C15.1733 9.18549 15.4112 9.29361 15.6632 9.305C15.9152 9.29361 16.1531 9.18549 16.3274 9.00314C16.5017 8.82078 16.5989 8.57825 16.5989 8.326C16.5989 8.07375 16.5017 7.83122 16.3274 7.64886C16.1531 7.46651 15.9152 7.35839 15.6632 7.347ZM18.5942 7.347C18.3398 7.35513 18.0986 7.46189 17.9216 7.64469C17.7445 7.8275 17.6455 8.07201 17.6455 8.3265C17.6455 8.58099 17.7445 8.8255 17.9216 9.00831C18.0986 9.19111 18.3398 9.29787 18.5942 9.306C18.7226 9.30587 18.8497 9.28044 18.9682 9.23115C19.0868 9.18187 19.1945 9.1097 19.2851 9.01878C19.3758 8.92786 19.4476 8.81997 19.4965 8.70127C19.5454 8.58256 19.5705 8.45539 19.5702 8.327C19.5705 8.19857 19.5454 8.07134 19.4965 7.95258C19.4476 7.83383 19.3758 7.72586 19.2852 7.63486C19.1945 7.54386 19.0869 7.4716 18.9683 7.42221C18.8498 7.37282 18.7226 7.34726 18.5942 7.347ZM13.2212 9.306C13.0928 9.30571 12.9655 9.33092 12.8469 9.38019C12.7283 9.42946 12.6206 9.50179 12.5302 9.593C12.3546 9.77792 12.2581 10.0241 12.2612 10.2791C12.2643 10.5341 12.3668 10.7778 12.5468 10.9584C12.7269 11.139 12.9703 11.2422 13.2253 11.2461C13.4803 11.2499 13.7268 11.1541 13.9122 10.979C14.0487 10.8419 14.1415 10.6675 14.1792 10.4777C14.2168 10.2879 14.1974 10.0913 14.1236 9.91249C14.0497 9.73369 13.9247 9.58071 13.7641 9.4728C13.6035 9.36489 13.4147 9.30685 13.2212 9.306ZM18.5942 10.286C18.3344 10.286 18.0853 10.3892 17.9016 10.5729C17.7179 10.7566 17.6147 11.0057 17.6147 11.2655C17.6147 11.5253 17.7179 11.7744 17.9016 11.9581C18.0853 12.1418 18.3344 12.245 18.5942 12.245C18.854 12.245 19.1031 12.1418 19.2868 11.9581C19.4705 11.7744 19.5737 11.5253 19.5737 11.2655C19.5737 11.0057 19.4705 10.7566 19.2868 10.5729C19.1031 10.3892 18.854 10.286 18.5942 10.286ZM11.2672 11.755C11.0074 11.755 10.7583 11.8582 10.5746 12.0419C10.3909 12.2256 10.2877 12.4747 10.2877 12.7345C10.2877 12.9943 10.3909 13.2434 10.5746 13.4271C10.7583 13.6108 11.0074 13.714 11.2672 13.714C11.527 13.714 11.7761 13.6108 11.9598 13.4271C12.1435 13.2434 12.2467 12.9943 12.2467 12.7345C12.2467 12.4747 12.1435 12.2256 11.9598 12.0419C11.7761 11.8582 11.527 11.755 11.2672 11.755ZM18.5942 13.225C18.3422 13.2364 18.1043 13.3445 17.93 13.5269C17.7557 13.7092 17.6585 13.9518 17.6585 14.204C17.6585 14.4563 17.7557 14.6988 17.93 14.8811C18.1043 15.0635 18.3422 15.1716 18.5942 15.183C18.8539 15.183 19.1029 15.0799 19.2865 14.8963C19.4701 14.7127 19.5732 14.4636 19.5732 14.204C19.5732 13.9444 19.4701 13.6953 19.2865 13.5117C19.1029 13.3281 18.8539 13.225 18.5942 13.225ZM9.31221 13.714C9.11884 13.715 8.93009 13.7732 8.76968 13.8812C8.60928 13.9892 8.48436 14.1422 8.41063 14.321C8.33691 14.4997 8.31765 14.6963 8.3553 14.886C8.39294 15.0756 8.4858 15.2499 8.6222 15.387C8.71278 15.4779 8.8204 15.5499 8.93889 15.5991C9.05738 15.6483 9.18441 15.6736 9.31271 15.6736C9.441 15.6736 9.56803 15.6483 9.68652 15.5991C9.80501 15.5499 9.91263 15.4779 10.0032 15.387C10.1397 15.2499 10.2325 15.0755 10.2702 14.8857C10.3078 14.6959 10.2884 14.4993 10.2146 14.3205C10.1407 14.1417 10.0157 13.9887 9.8551 13.8808C9.69454 13.7729 9.50566 13.7149 9.31221 13.714ZM1.00921 16.164C0.880772 16.1643 0.753649 16.1898 0.635093 16.2392C0.516537 16.2886 0.408871 16.3609 0.318241 16.4519C0.135205 16.6357 0.0326747 16.8846 0.0332052 17.144C0.0337356 17.4034 0.137283 17.6519 0.321069 17.835C0.504855 18.018 0.753823 18.1205 1.01321 18.12C1.27259 18.1195 1.52113 18.0159 1.70417 17.8321C1.88721 17.6483 1.98974 17.3994 1.98921 17.14C1.98867 16.8806 1.88513 16.6321 1.70134 16.449C1.51756 16.266 1.26859 16.1635 1.00921 16.164ZM3.94021 16.164C3.68082 16.1645 3.43228 16.2681 3.24924 16.4519C3.15861 16.5429 3.08679 16.6508 3.03789 16.7696C2.98898 16.8883 2.96394 17.0156 2.96421 17.144C2.96447 17.2724 2.99002 17.3996 3.03942 17.5181C3.08881 17.6367 3.16107 17.7443 3.25207 17.835C3.43585 18.018 3.68482 18.1205 3.94421 18.12C4.20359 18.1195 4.45213 18.0159 4.63517 17.8321C4.8182 17.6483 4.92074 17.3994 4.92021 17.14C4.91967 16.8806 4.81613 16.6321 4.63234 16.449C4.44856 16.266 4.19959 16.1635 3.94021 16.164ZM6.8712 16.164C6.61156 16.164 6.36255 16.2671 6.17895 16.4507C5.99535 16.6343 5.89221 16.8834 5.89221 17.143C5.89221 17.4026 5.99535 17.6517 6.17895 17.8353C6.36255 18.0189 6.61156 18.122 6.8712 18.122C7.13085 18.122 7.37986 18.0189 7.56346 17.8353C7.74706 17.6517 7.8502 17.4026 7.8502 17.143C7.8502 16.8834 7.74706 16.6343 7.56346 16.4507C7.37986 16.2671 7.13085 16.164 6.8712 16.164ZM18.5942 16.653C18.3422 16.6644 18.1043 16.7725 17.93 16.9549C17.7557 17.1372 17.6585 17.3798 17.6585 17.632C17.6585 17.8842 17.7557 18.1268 17.93 18.3091C18.1043 18.4915 18.3422 18.5996 18.5942 18.611C18.8539 18.611 19.1029 18.5079 19.2865 18.3243C19.4701 18.1407 19.5732 17.8916 19.5732 17.632C19.5732 17.3724 19.4701 17.1233 19.2865 16.9397C19.1029 16.7561 18.8539 16.653 18.5942 16.653ZM6.8712 19.103C6.61156 19.103 6.36255 19.2061 6.17895 19.3897C5.99535 19.5733 5.89221 19.8224 5.89221 20.082C5.89221 20.3416 5.99535 20.5907 6.17895 20.7743C6.36255 20.9579 6.61156 21.061 6.8712 21.061C7.13085 21.061 7.37986 20.9579 7.56346 20.7743C7.74706 20.5907 7.8502 20.3416 7.8502 20.082C7.8502 19.8224 7.74706 19.5733 7.56346 19.3897C7.37986 19.2061 7.13085 19.103 6.8712 19.103ZM6.8712 22.041C6.61143 22.041 6.36229 22.1442 6.17859 22.3279C5.9949 22.5116 5.89171 22.7607 5.89171 23.0205C5.89171 23.2803 5.9949 23.5294 6.17859 23.7131C6.36229 23.8968 6.61143 24 6.8712 24C7.13098 24 7.38012 23.8968 7.56382 23.7131C7.74751 23.5294 7.85071 23.2803 7.85071 23.0205C7.85071 22.7607 7.74751 22.5116 7.56382 22.3279C7.38012 22.1442 7.13098 22.041 6.8712 22.041Z"
                                    fill="#09009B"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_389_42368">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div>
                            <span className="airlineDetails">
                              {flightData.airline}
                              <br />
                            </span>
                            <span className="flightNumber">
                              {flightData.flightNumber}
                            </span>
                          </div>
                        </div>
                        <div className="departureInfo">
                          <div>
                            <span className="departureTime">
                              {flightData.departureTime}
                              <br />
                            </span>
                            <span className="flightNumber">
                              {flightData.departureCity}
                            </span>
                          </div>
                          <div className="durationInfo">
                            <div className="durationValue">
                              <span className="flightNumber">
                                {flightData.durationHours}
                              </span>
                              <span className="flightNumber">h</span>
                              <span className="flightNumber">
                                {flightData.durationMinutes}
                              </span>
                              <span className="flightNumber">m</span>
                            </div>
                            <div className="durationSeparator"></div>
                            <div className="flightType">
                              {flightData.flightType}
                            </div>
                          </div>
                          <div>
                            <span className="arrivalTime">
                              {flightData.arrivalTime}
                              <br />
                            </span>
                            <span className="flightNumber">
                              {flightData.arrivalCity}
                            </span>
                          </div>
                          <div className="priceContainer">
                            <div className="priceDetails">
                              <div>
                                <span className="priceValue">
                                  ₹{flightData.price}
                                  <br />
                                </span>
                                <span className="flightNumber">Per Adult</span>
                              </div>
                            </div>
                            <div className="priceTag"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
