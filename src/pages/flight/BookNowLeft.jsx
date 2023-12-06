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
      <Box sx={{ flexGrow: 1, background: "#FCFFFF" }}>
        <Box
          backgroundColor="white"
          boxShadow="1px 1px 8px gray"
          borderRadius="10px"
          p={3}
          marginTop="100px"
        >
          <Typography mb={2} className="faresummary">
            Fare Summary
          </Typography>

          {fareQuote === 0 ? (
            <>
              {/* {fareRule[0]?.map((data) => {
              return (
                <> */}
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
                      <Grid container>
                        <Grid item xs={12} md={4}>
                          <Box textAlign="Left">
                            <Typography className="base">
                              {formattedDate}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box textAlign="center">
                            <Typography className="base">
                              {data1?.Airline?.FlightNumber}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box textAlign="right">
                            <Typography className="base">
                              {data1?.Airline?.FareClass} Class
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Divider
                        style={{
                          height: "2px",
                          background: "#D3D3D3",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      />
                      <Grid container>
                        <Grid item xs={12} md={4}>
                          <Box>
                            <Typography className="base">Departure:</Typography>
                            <Typography className="base">Arrival:</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box textAlign="center">
                            <Typography
                              sx={{
                                color: "#E73C33",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            >
                              {data1?.Origin?.Airport?.AirportCode}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#E73C33",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            >
                              {data1?.Destination?.Airport?.AirportCode}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </>
                  );
                });
              })}
              <Divider
                style={{
                  height: "2px",
                  background: "#D3D3D3",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography className="base">Fare / Pax Type</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box textAlign="right">
                    <Typography className="base">Amount</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Divider
                style={{
                  height: "2px",
                  background: "#D3D3D3",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
              <Grid container>
                {fareValue?.Fare?.TaxBreakup?.map((obj) => {
                  total += obj.value;
                  return <KeyValue data={obj.key} value={obj.value} />;
                })}

                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography className="base" my={1}>
                      Total:
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box textAlign="right">
                    <Typography className="base" my={1}>
                      ₹.{total}.00
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Divider
                style={{
                  height: "2px",
                  background: "#D3D3D3",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
              <Typography className="base" my={1}>
                Total Fare (Inc. Taxes)
              </Typography>
              <Grid container>
                {fareValue?.FareBreakdown?.map((data) => {
                  return (
                    <>
                      {data?.PassengerType === 1 && (
                        <>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className="base">
                                <span>Adult x {data?.PassengerCount}</span>
                              </Typography>
                              <Typography className="base">
                                Excess Baggage
                              </Typography>
                              <Typography className="base">Meal</Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Box textAlign="right">
                              <Typography className="base">
                                ₹. {data?.BaseFare + data?.Tax}
                              </Typography>
                              <Typography className="base">₹. 00.00</Typography>
                              <Typography className="base">₹.00.00</Typography>
                            </Box>
                          </Grid>
                        </>
                      )}
                      {data?.PassengerType === 2 && (
                        <>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography
                                sx={{
                                  color: "#616161",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                <span>Child x {data?.PassengerCount}</span>
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#616161",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                Excess Baggage
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#616161",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                Meal
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Box textAlign="right">
                              <Typography
                                sx={{
                                  color: "#FF8900",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                Rs. {data?.BaseFare + data?.Tax}
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#FF8900",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                ₹.00.00
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#FF8900",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                ₹.00.00
                              </Typography>
                            </Box>
                          </Grid>
                        </>
                      )}
                      {data?.PassengerType === 3 && (
                        <>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography
                                sx={{
                                  color: "#616161",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                <span>Infant x {data?.PassengerCount}</span>
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#616161",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                Excess Baggage
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#616161",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                Meal
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Box textAlign="right">
                              <Typography
                                sx={{
                                  color: "#FF8900",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                Rs. {data?.BaseFare + data?.Tax}
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#FF8900",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                Rs. 00.00
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#FF8900",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                Rs. 00.00
                              </Typography>
                            </Box>
                          </Grid>
                        </>
                      )}
                    </>
                  );
                })}
              </Grid>
              <Box
                sx={{
                  background: "#FFFFFF",

                  borderRadius: "10px",
                  padding: "0px",
                  marginY: "10px",
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography className="base">Total Base. Fare</Typography>
                      <Typography className="base">Total Tax</Typography>
                      <Typography className="base">Other Charges</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box textAlign="right">
                      <Typography className="base">
                        ₹.{fareValue?.Fare?.BaseFare}
                      </Typography>
                      <Typography className="base">
                        ₹. {fareValue?.Fare?.Tax}
                      </Typography>
                      <Typography className="base">
                        ₹.{fareValue?.Fare?.OtherCharges}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Grid container className="total">
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography className="base">Total Payable:</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box textAlign="right">
                    <Typography className="base">
                      Rs.{" "}
                      {fareValue?.Fare?.BaseFare +
                        fareValue?.Fare?.Tax +
                        fareValue?.Fare?.OtherCharges}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              {/* </>
              );
             })} */}
            </>
          ) : (
            <Grid container>
              <Grid item xs={12} md={4}>
                <Box>
                  <Typography
                    sx={{
                      color: "#ff0000",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {
                      reducerState?.flightFare?.flightQuoteData?.Error
                        ?.ErrorMessage
                    }
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>

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
                      {/* <div >
                        <span>Other Tax</span>
                        <p>{'₹'}500</p>
                      </div>
                      <div >
                        <span className="text-bold">No of Rooms</span>
                        <p className="text-bold">2</p>
                      </div> */}
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
                        <p>{'₹'}{markUpamount}</p>
                      </div>
                      <div >
                        <span>Grand Total:</span>
                        <p>{'₹'}{fareValue?.Fare?.BaseFare +
                          fareValue?.Fare?.Tax +
                          fareValue?.Fare?.OtherCharges +
                          markUpamount}</p>
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
