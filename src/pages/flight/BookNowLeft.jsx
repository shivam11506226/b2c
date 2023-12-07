
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import "./booknowleft.css";
const KeyValue = ({ data, value }) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography className="base">{data}:</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} justifyContent="right">
        <Box textAlign="right">
          <Typography className="base">₹.{value}.00</Typography>
        </Box>
      </Grid>
    </>
  );
};

const BookNowLeft = () => {
  const reducerState = useSelector((state) => state);
  console.log(
    "reducerState 👍",
    reducerState?.flightFare?.flightQuoteData?.Results
  );
  console.log(reducerState, "reducer state ")
  const TicketDetails = reducerState?.flightFare?.flightQuoteData?.Results;
  const fareValue = reducerState?.flightFare?.flightQuoteData?.Results;
  const fareQuote = reducerState?.flightFare?.flightQuoteData?.Error?.ErrorCode;

  const markUpamount =
    reducerState?.userData?.userData?.data?.data?.markup?.flight;
  console.log("fareValue", fareValue);

  let total = 0;
  return (
    <>


      {fareQuote === 0 ? (
        <>
          {fareValue?.Segments?.map((dat, index) => {
            return dat?.map((data1) => {
              const dateString = data1?.Origin?.DepTime;
              const date = new Date(dateString);
              const day = date.getDate();
              const month = date.toLocaleString("default", {
                month: "short",
              });
              const year = date.getFullYear();
              const formattedDate = `${day} ${month} ${year}`;
              return (
                <>
                  <div className="priceSummary">
                    <div className="head">
                      <span>Price Summary</span>
                    </div>
                    {/* <div className="hotName">
                      <p>hotel name</p>
                    </div> */}
                    <div className="totCOmm">
                      <div >
                        <span>{formattedDate}</span>
                        <p>{data1?.Airline?.FlightNumber}</p>
                        <p>{data1?.Airline?.FareClass} Class</p>
                      </div>

                    </div>
                    <div className="priceChart">
                      <div >
                        <span className="text-bold">From</span>
                        <p className="text-bold">{data1?.Origin?.Airport?.AirportCode}</p>
                      </div>
                      <div >
                        <span className="text-bold">To</span>
                        <p className="text-bold">{data1?.Destination?.Airport?.AirportCode}</p>
                      </div>
                    </div>
                    <div className="totCOmm">
                      {fareValue?.FareBreakdown?.map((data) => {
                        return (
                          <div className="">
                            {data?.PassengerType === 1 && (
                              <>
                                <span>Adult x {data?.PassengerCount}</span>
                                <p>{'₹'}{data?.BaseFare + data?.Tax}</p>

                              </>
                            )}
                            {data?.PassengerType === 2 && (
                              <>
                                <span>Child x {data?.PassengerCount}</span>
                                <p>{'₹'}{data?.BaseFare + data?.Tax}</p>
                              </>
                            )}
                            {data?.PassengerType === 3 && (
                              <>
                                <span>Infant x {data?.PassengerCount}</span>
                                <p>{'₹'}{data?.BaseFare + data?.Tax}</p>
                              </>
                            )}


                          </div>
                        );
                      })}

                    </div>

                    <div className="TotGst">
                      <div>
                        <span>Total TAX: </span>
                        <p>{'₹'}{fareValue?.Fare?.Tax}</p>
                      </div>
                      <div >
                        <span>Grand Total:</span>
                        <p>{'₹'}{fareValue?.Fare?.BaseFare +
                          fareValue?.Fare?.Tax +
                          fareValue?.Fare?.OtherCharges}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            });
          })}
        </>
      ) : (
        <>
          <div>
            <p>session expired</p>
          </div>
        </>
      )}
    </>
  );
};

export default BookNowLeft;
