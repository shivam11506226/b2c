import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';


const KeyValue = ({ data, value }) => {

     return (
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
               {data}:
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
               Rs. {value}.00
             </Typography>
           </Box>
         </Grid>
       </>
     );
   };

const BookNowLeft = () => {

    const reducerState = useSelector((state) => state);
  console.log("reducerState 👍", reducerState?.flightFare?.flightQuoteData?.Results);
  const TicketDetails = reducerState?.flightFare?.flightQuoteData?.Results
  const fareValue = reducerState?.flightFare?.flightQuoteData?.Results;
  const fareQuote = reducerState?.flightFare?.flightQuoteData?.Error?.ErrorCode;

  console.log("fareValue",fareValue)

  let total = 0;
  return (
   <>
   {/* <Box className="leftsection" py={5}>
                <Typography className="main_he">Fare Summary</Typography>
                <Typography className="main_m">1 Adult</Typography>
                <Box className="fare_summery" py={1}>
                  <Typography
                    color="#006FFF"
                    sx={{
                      fontSize: "12px",
                      font: "normal normal bold 12px Quicksand",
                      justifyContent: "space-between",
                      marginX: "20px",
                    }}
                  >
                    Base Fare
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginX: "20px",
                    }}
                    pt={1}
                  >
                    <Typography
                      fontSize="10px"
                      font="normal normal bold 10px Quicksand"
                    >
                      Adult (1)
                    </Typography>
                    <Typography
                      fontSize="12px"
                      font="normal normal bold 12px Quicksand"
                      color="#FF8900"
                      fontWeight="bold"
                    >
                      ₹23443
                    </Typography>
                  </Box>
                </Box>
                <Box className="fare_summery" py={1}>
                  <Typography
                    color="#006FFF"
                    sx={{
                      fontSize: "12px",
                      font: "normal normal bold 12px Quicksand",
                      justifyContent: "space-between",
                      marginX: "20px",
                    }}
                  >
                    Base Fare
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginX: "20px",
                    }}
                    pt={1}
                  >
                    <Typography
                      fontSize="10px"
                      font="normal normal bold 10px Quicksand"
                    >
                      Total fee & surcharges:
                    </Typography>
                    <Typography
                      fontSize="12px"
                      font="normal normal bold 12px Quicksand"
                      color="#FF8900"
                      fontWeight="bold"
                    >
                      ₹243
                    </Typography>
                  </Box>
                </Box>
                <Box className="fare_summery" py={1}>
                  <Typography
                    color="#006FFF"
                    sx={{
                      fontSize: "12px",
                      font: "normal normal bold 12px Quicksand",
                      justifyContent: "space-between",
                      marginX: "20px",
                    }}
                  >
                    Other Services
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginX: "20px",
                    }}
                    pt={1}
                  >
                    <Typography
                      fontSize="10px"
                      font="normal normal bold 10px Quicksand"
                    >
                      Charity
                    </Typography>
                    <Typography
                      fontSize="12px"
                      font="normal normal bold 12px Quicksand"
                      color="#FF8900"
                      fontWeight="bold"
                    >
                      ₹10
                    </Typography>
                  </Box>
                </Box>
                <Box className="fare_summery" py={1}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginX: "20px",
                    }}
                    pt={1}
                  >
                    <Typography
                      color="#006FFF"
                      sx={{
                        fontSize: "12px",
                        font: "normal normal bold 12px Quicksand",
                      }}
                    >
                      Total Amount
                    </Typography>
                    <Typography
                      fontSize="12px"
                      font="normal normal bold 12px Quicksand"
                      color="#FF8900"
                      fontWeight="bold"
                    >
                      ₹24510
                    </Typography>
                  </Box>
                </Box>
                <Box py={1}>
                  <Divider />
                </Box>
                <Box pb={3}>
                  <Typography className="main_he">
                    Cancellation Refund Policy
                  </Typography>
                  <Typography
                    sx={{
                      color: "#006FFF",
                      font: "normal normal bold 12px Quicksand",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    DEL-BOM
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-around" }}
                    pt={1}
                  >
                    <Typography
                      fontSize="10px"
                      font="normal normal bold 8px Quicksand"
                      color="#707070"
                      fontWeight="bold"
                    >
                      Cancel Between (IST)
                    </Typography>
                    <Typography
                      fontSize="12px"
                      font="normal normal bold 8px Quicksand"
                      color="#707070"
                      fontWeight="bold"
                    >
                      Cancellation Penalty
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginX: "20px",
                    }}
                    pt={1}
                  >
                    <Typography
                      color="#006FFF"
                      sx={{
                        fontSize: "8px",
                        font: "normal normal bold 8px Quicksand",
                      }}
                    >
                      Now - 14 Jan (11:50)
                    </Typography>
                    <Typography
                      fontSize="8px"
                      font="normal normal bold 8px Quicksand"
                      color="#FF8900"
                      fontWeight="bold"
                    >
                      ₹2345
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginX: "20px",
                    }}
                    pt={1}
                  >
                    <Typography
                      color="#006FFF"
                      sx={{
                        fontSize: "8px",
                        font: "normal normal bold 8px Quicksand",
                      }}
                    >
                      14 Jan (11:50) - 18 Jan (09:50)
                    </Typography>
                    <Typography
                      fontSize="8px"
                      font="normal normal bold 8px Quicksand"
                      color="#FF8900"
                      fontWeight="bold"
                    >
                      ₹3453
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginX: "20px",
                    }}
                    py={1}
                  >
                    <Typography
                      color="#006FFF"
                      sx={{
                        fontSize: "8px",
                        font: "normal normal bold 8px Quicksand",
                      }}
                    >
                      18 Jan (09:50) - 18 Jan (11:50)
                    </Typography>
                    <Typography
                      fontSize="8px"
                      font="normal normal bold 8px Quicksand"
                      color="#FF8900"
                      fontWeight="bold"
                    >
                      ₹4565
                    </Typography>
                  </Box>
                </Box>
              </Box> */}

<Box sx={{ flexGrow: 1, background: "#FCFFFF" }}>
      <Box
        backgroundColor="white"
        boxShadow="1px 1px 8px gray"
        borderRadius="10px"
        p={3}
      >
        <Typography
          sx={{ color: "#616161", fontSize: "12px", fontWeight: "bold" }}
          mb={2}
        >
          Sale Summary
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
                        <Box>
                          <Typography
                            sx={{
                              color: "#616161",
                              fontSize: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            {formattedDate}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box textAlign="center">
                          <Typography
                            sx={{
                              color: "#616161",
                              fontSize: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            {data1?.Airline?.FlightNumber}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box textAlign="right">
                          <Typography
                            sx={{
                              color: "#616161",
                              fontSize: "10px",
                              fontWeight: "bold",
                            }}
                          >
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
                          <Typography
                            sx={{
                              color: "#616161",
                              fontSize: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            Dept:
                          </Typography>
                          <Typography
                            sx={{
                              color: "#616161",
                              fontSize: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            Arr:
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box textAlign="center">
                          <Typography
                            sx={{
                              color: "#0052D0",
                              fontSize: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            {data1?.Origin?.Airport?.AirportCode}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#0052D0",
                              fontSize: "10px",
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
                  <Typography
                    sx={{
                      color: "#616161",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Fare / Pax Type
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box textAlign="right">
                  <Typography
                    sx={{
                      color: "#616161",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Amount
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
              {fareValue?.Fare?.TaxBreakup?.map((obj) => {
                total += obj.value;
                return <KeyValue data={obj.key} value={obj.value} />;
              })}

              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    sx={{
                      color: "#616161",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                    my={1}
                  >
                    Total:
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
                    my={1}
                  >
                    Rs. {total}.00
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
            <Typography
              sx={{
                color: "#616161",
                fontSize: "12px",
                fontWeight: "bold",
              }}
              my={1}
            >
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
                            <Typography
                              sx={{
                                color: "#616161",
                                fontSize: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              <span>Adult x {data?.PassengerCount}</span>
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
                border: "1px solid #D1D1D1",
                borderRadius: "10px",
                padding: "10px",
                marginY: "10px",
              }}
            >
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography
                      sx={{
                        color: "#616161",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Total Base. Fare
                    </Typography>
                    <Typography
                      sx={{
                        color: "#616161",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Total Tax
                    </Typography>
                    <Typography
                      sx={{
                        color: "#616161",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Other Charges
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
                      Rs. {fareValue?.Fare?.BaseFare}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FF8900",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Rs. {fareValue?.Fare?.Tax}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FF8900",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Rs. {fareValue?.Fare?.OtherCharges}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    sx={{
                      color: "#616161",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Total Payable:
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
   </>
  )
}

export default BookNowLeft