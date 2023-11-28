import { Paper, Box, Grid, Typography } from "@mui/material";
import React from "react";
import airplane from "../images/card/airplane.png";
import languages from "../images/card/languages.png";
import travelbag from "../images/card/travelbag.png";
import booking from "../images/card/booking.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './toursection.css'
const Toursection = () => {
  return (
    <React.Fragment>
      <section>
        <div className="container homeform_container">
          <Box pt={3}>
            <Paper elevation={3} py={4} px={1}  sx={{ borderRadius: "28px" }} className="paper">
              <Grid container elevation={3} alignItems="center" py={1} >
                <Grid
                  item
                  xs={12}
                  md={3}
                  alignItems="center"
                  sx={{ display: ["block", "block", "block", "flex"] }}
                >
                  <Box p={2} sx={{ textAlign: ["center", "center", "left"] }}>
                    <img
                      src={airplane}
                      alt="airplane"
                      style={{ width: "35px" }}
                      textAlign="center"
                    />
                  </Box>
                  <Typography
                  className="typo"
                    // fontWeight="bold"
                    // sx={{
                    //   color: "gray",
                    //   fontSize: ["12px", "13px", "15px"],
                    //   textAlign: ["center", "center", "left"],
                    // }}
                    // style={{ fontFamily: "Quicksand" }}
                  >
                    Where to Go{" "}
                  
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  alignItems="center"
                  sx={{
                    display: ["block", "block", "block", "flex"],
                    textAlign: ["center", "center", "left"],
                  }}
                >
                  <Box p={2} sx={{ textAlign: ["center", "center", "left"] }}>
                    <img
                      src={languages}
                      alt="languages"
                      style={{ width: "35px" }}
                      textAlign="center"
                    />
                  </Box>
                  <Typography
                    // fontWeight="bold"
                    // sx={{
                    //   color: "gray",
                    //   fontSize: ["12px", "13px", "15px"],
                    //   textAlign: ["center", "center", "left"],
                    // }}
                    // style={{ fontFamily: "Quicksand" }}
                    className="typo"
                  >
                    Insurance
                    <Typography
                      color="grey"
                      sx={{ fontSize: ["12px", "13px", "15px"] }}
                      alignItems="center"
                      fontWeight="bold"
                      style={{ fontFamily: "Quicksand" }}
                    >
                      For International Trips
                    </Typography>{" "}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  alignItems="center"
                  sx={{ display: ["block", "block", "block", "flex"] }}
                >
                  <Box p={2} sx={{ textAlign: ["center", "center", "left"] }}>
                    <img
                      src={travelbag}
                      alt="travelbag"
                      style={{ width: "35px" }}
                    />
                  </Box>
                  <Typography
                   
                   className="typo"
                  >
                    Explore International Flights
                    <Typography
                      color="grey"
                      sx={{ fontSize: ["12px", "13px", "15px"] }}
                      alignItems="center"
                      fontWeight="bold"
                      style={{ fontFamily: "Quicksand" }}
                     
                    >
                      Cheapest Flights to Paris, Bali, Tokyo & more
                    </Typography>{" "}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  alignItems="center"
                  sx={{ display: ["block", "block", "block", "flex"] }}
                >
                 
                 
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Toursection;
