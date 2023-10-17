import React, { useState } from "react";
import "./busservices.css";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { RiSteering2Fill } from "react-icons/ri";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Typography, Box, Button, Grid, Stack, Checkbox } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";

import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import RectangleIcon from "@mui/icons-material/Rectangle";
import { useSelector } from "react-redux";
const SeatLayout = () => {
  const reducerState = useSelector((state) => state);
  const rowSeat =
    reducerState?.getBusSeat?.busSeatLayout?.data?.data?.GetBusSeatLayOutResult
      ?.SeatLayoutDetails?.SeatLayout?.SeatDetails;
  const colSeat =
    reducerState?.getBusSeat?.busSeatLayout?.data?.data?.GetBusSeatLayOutResult
      ?.SeatLayoutDetails?.SeatLayout?.SeatDetails;

  const AllSeatArray = rowSeat?.flat();

  const allRowSeat = AllSeatArray?.map((e) => e?.RowNo);
  const allColSeat = AllSeatArray?.map((e) => e?.ColumnNo);

  const allSeat = reducerState?.getBusSeat?.busSeatLayout?.data?.data?.GetBusSeatLayOutResult
  ?.SeatLayoutDetails?.SeatLayout

  console.error("all seat",allSeat)
  // Row 1 seat data
  const row1 =
    reducerState?.getBusSeat?.busSeatLayout?.data?.data?.GetBusSeatLayOutResult
      ?.SeatLayoutDetails?.SeatLayout?.SeatDetails[0];

  console.log("row0", row1);

  // Row 2 seat data
  const row2 =
    reducerState?.getBusSeat?.busSeatLayout?.data?.data?.GetBusSeatLayOutResult
      ?.SeatLayoutDetails?.SeatLayout?.SeatDetails[1];

  console.log("row2", row2);

   // Row 3 seat data
   const row3 =
   reducerState?.getBusSeat?.busSeatLayout?.data?.data?.GetBusSeatLayOutResult
     ?.SeatLayoutDetails?.SeatLayout?.SeatDetails[2];

 console.log("row3", row3);

  // Row 4 seat data
  const row4 =
  reducerState?.getBusSeat?.busSeatLayout?.data?.data?.GetBusSeatLayOutResult
    ?.SeatLayoutDetails?.SeatLayout?.SeatDetails[3];

console.log("row4", row4);

 // Row 5 seat data
 const row5 =
 reducerState?.getBusSeat?.busSeatLayout?.data?.data?.GetBusSeatLayOutResult
   ?.SeatLayoutDetails?.SeatLayout?.SeatDetails[4];

console.log("row5", row5);

 // Row 6 seat data
 const row6 =
 reducerState?.getBusSeat?.busSeatLayout?.data?.data?.GetBusSeatLayOutResult
   ?.SeatLayoutDetails?.SeatLayout?.SeatDetails[5];

console.log("row6", row6);

// const sleeper = 
  
  
  // console.log("AllSeatArray",AllSeatArray)
  // console.log("allRowSeat",allRowSeat)
  // console.log("allColSeat",allColSeat)
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="side_container">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Box>
              <Box className="bus_name">
                <Typography className="bus_name">Gola Bus Service</Typography>
                <Typography className="rating_bus">4.9/5</Typography>
                <Typography className="number_of_rate">126 Ratings</Typography>
              </Box>
              <Box className="bus_name">
                <Typography className="number_of_rate">
                  A/C Seater / Sleeper (2+1)
                </Typography>
                <Box className="bus_name" px={2}>
                  <AirlineSeatReclineNormalIcon />
                  <Typography className="number_of_rate">
                    31 Seats Left
                  </Typography>
                </Box>
                <Typography className="number_of_rate" px={2}>
                  11 Window Seats
                </Typography>
              </Box>
              <Box className="bus_name">
                <Typography className="timing_date">23:30, 19 FEB</Typography>
                <Box className="vertical_line"></Box>
                <Typography className="Bus_duration">07hrs 15mins</Typography>
                <Box className="vertical_line"></Box>
                <Typography className="timing_date">06:45, 20 FEB</Typography>
              </Box>
            </Box>
            <Box></Box>
          </div>
          <div className="col-md-4">
            <Box className="pricing_container">
              <GpsFixedIcon className="gps_icon" />
              <Typography className="live_tracking">Live Tracking</Typography>
            </Box>
            <Box mt={1}>
              <Typography className="starting_from">Starting From</Typography>
              <Box className="rate_container">
                <Typography className="starting_from">$415 </Typography>
                <Typography className="starting_price">$345</Typography>
              </Box>
              <Typography className="save_price">Save $70</Typography>
            </Box>
            <Box textAlign="right">
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                  mb={1}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    data-toggle="collapse"
                    data-target="#multiCollapseExample2"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample2"
                  >
                    <Typography sx={{ cursor: "pointer" }}>
                      Book Seat
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Box>
              <Box>
                <div>
                  <div class="card card-body" style={{ border: "none" }}>
                    <Grid container spacing={1}>
                      <Grid item p={0} sm={12} lg={1}>
                        <Stack direction="column" spacing={1}>
                          <Button
                            variant="contained"
                            type="submit"
                            className="btn_seat_all"
                          >
                            <Typography className="btn_style">
                              Seat Price
                            </Typography>
                          </Button>
                          <Button
                            variant="contained"
                            type="submit"
                            className="btn_seat_all"
                          >
                            <Typography className="btn_style">All</Typography>
                          </Button>
                          <Button
                            variant="contained"
                            type="submit"
                            className="btn_seat_all"
                          >
                            <Typography className="btn_style">
                              ₹2,343
                            </Typography>
                          </Button>
                          <Button
                            variant="contained"
                            type="submit"
                            className="btn_seat_all"
                          >
                            <Typography className="btn_style">
                              ₹3,454
                            </Typography>
                          </Button>
                          <Button
                            variant="contained"
                            type="submit"
                            className="btn_seat_all"
                          >
                            <Typography className="btn_style">
                              ₹4,456
                            </Typography>
                          </Button>
                        </Stack>
                      </Grid>
                      <Grid item sm={12} lg={5}>
                        <Typography textAlign="center">Upper Deck </Typography>
                        <Box
                          style={{
                            backgroundColor: "#CFF5FF",
                            borderRadius: "10px",
                          }}
                        >
                          <Box sx={{ height: "20px" }}></Box>
                          <Grid container sx={{ height: "160px" }}>
                            <Grid>
                              <Box direction="column">
                                <Stack direction="row">
                                  <Box className="seat">
                                    <RiSteering2Fill
                                      style={{ fontSize: "40px" }}
                                    />
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                </Stack>
                                <Stack
                                  direction="row"
                                  style={{ marginLeft: "40px" }}
                                >
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <RectangleIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <RectangleIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                </Stack>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                      {/* seat  */}
                      <Grid item sm={12} lg={5}>
                        <Typography textAlign="center">Lower Deck </Typography>
                        <Box
                          style={{
                            backgroundColor: "#CFF5FF",
                            borderRadius: "10px",
                          }}
                        >
                          <Box sx={{ height: "10px" }}></Box>
                          
                          {/* dynamic seat code */}
                          <Grid
                            container
                            p={0}
                            columns={{ xs: 4, sm: 8, md: 11.5 }}
                            justifyContent="center"
                            justifyItems="center"
                          >
                            
{/* Row 1 */}

{Array.from(Array(14))
  .map((_, index) => {
    const seat = row1?.find(ele => ele?.ColumnNo == index+1 );
    const isChecked = seat?.SeatStatus;

    return (
      <Grid p={0} item md={0.8} key={index}>
        <Checkbox
          sx={{ padding: "0" }}
          {...label}
          icon={<CheckBoxOutlineBlankIcon className="seat_Single" />}
          checkedIcon={
            <CheckBoxIcon className="seat_Single select_seat_Single" />
          }
          // checked={isChecked}
          disabled={!seat}
        />
       
      </Grid>
    );
  })
  .filter(Boolean)}

{/* row 2 */}
{Array.from(Array(14))
  .map((_, index) => {
    const seat = row2?.find(ele => ele?.ColumnNo == index+1);
    const isChecked = seat?.SeatStatus;

    return (
      <Grid p={0} item md={0.8} key={index}>
        <Checkbox
          sx={{ padding: "0" }}
          {...label}
          icon={<CheckBoxOutlineBlankIcon className="seat_Single" />}
          checkedIcon={
            <CheckBoxIcon className="seat_Single select_seat_Single" />
          }
          // checked={isChecked}
          disabled={!seat}
        />
        {index === 28 && (
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              width: "100px",
            }}
          ></div>
        )}
      </Grid>
    );
  })
  .filter(Boolean)}

{/* row 3 */}
{Array.from(Array(14))
  .map((_, index) => {
    const seat = row3?.find(ele => ele?.ColumnNo == index+1);
    const isChecked = seat?.SeatStatus;

    return (
      <Grid p={0} item md={0.8} key={index} mb={2}>
        <Checkbox
          sx={{ padding: "0" }}
          {...label}
          icon={<CheckBoxOutlineBlankIcon className="seat_Single" />}
          checkedIcon={
            <CheckBoxIcon className="seat_Single select_seat_Single" />
          }
          
          disabled={!seat}
        />
        
      </Grid>
    );
  })
  .filter(Boolean)}


          {/* <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              width: "100px",
            }}
          ></div> */}
     

{/* row 4 */}
{Array.from(Array(14))
  .map((_, index) => {
    const seat = row4?.find(ele => ele?.ColumnNo == index+1);
    const isChecked = seat?.SeatStatus;

    return (
      <Grid p={0} item md={0.8} key={index}>
        <Checkbox
          sx={{ padding: "0" }}
          {...label}
          icon={<CheckBoxOutlineBlankIcon className="seat_Single" />}
          checkedIcon={
            <CheckBoxIcon className="seat_Single select_seat_Single" />
          }
          
          disabled={!seat}
        />
        {index === 28 && (
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              width: "100px",
            }}
          ></div>
        )}
      </Grid>
    );
  })
  .filter(Boolean)}

  {/* row 5 */}
{Array.from(Array(14))
  .map((_, index) => {
    const seat = row5?.find(ele => ele?.ColumnNo == index+1);
    const seatType = row5?.find(ele => ele?.seatType == 2);
    const isChecked = seat?.SeatStatus;

    return (
      <Grid p={0} item md={0.8} key={index}>
        <Checkbox
          sx={{ padding: "0" }}
          {...label}
          icon={<CheckBoxOutlineBlankIcon className="seat_Single" />}
          checkedIcon={
            <CheckBoxIcon className="seat_Single select_seat_Single" />
          }
         disabled={!seat }
        />
        {index === 28 && (
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              width: "100px",
            }}
          ></div>
        )}
      </Grid>
    );
  })
  .filter(Boolean)}


   {/* row 6 */}
{Array.from(Array(14))
  .map((_, index) => {
    const seat = row6?.find(ele => ele?.ColumnNo == index+1);
    const seatType = row6?.find(ele => ele?.seatType == 2);
    const isChecked = seat?.SeatStatus;

    return (
      <Grid p={0} item md={0.8} key={index}>
        <Checkbox
          sx={{ padding: "0" }}
          {...label}
          icon={<CheckBoxOutlineBlankIcon className="seat_Single" />}
          checkedIcon={
            <CheckBoxIcon className="seat_Single select_seat_Single" />
          }
         disabled={!seat }
        />
        {index === 28 && (
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              width: "100px",
            }}
          ></div>
        )}
      </Grid>
    );
  })
  .filter(Boolean)}

                          </Grid>
                          <Box sx={{ height: "10px" }}></Box>
                        </Box>
                      </Grid>
                    </Grid>
                    <form action="/BusReviewBooking">
                      <Box mt={1}>
                        <Button variant="contained" type="submit">
                          Book Now
                        </Button>
                      </Box>
                    </form>
                  </div>
                </div>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
