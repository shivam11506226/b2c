import { Paper, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import airplane from "../images/card/airplane.png";
import languages from "../images/card/languages.png";
import travelbag from "../images/card/travelbag.png";
import booking from "../images/card/booking.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Toursection = () => {
    return (
        <React.Fragment>
            <section >
            <div className="container homeform_container">
                    <Box pt={3}>
                        <Paper elevation={3} py={2} px={2} sx={{ borderRadius: '15px', }}>
                            <Grid container elevation={3}  alignItems="center" py={2}>
                                <Grid item xs={12} md={3} alignItems="center" sx={{ display: [ "block","block" ,"block", "flex", ] }}>

                                    <Box p={2} sx={{textAlign: ["center", "center", "left",]}} >
                                        <img src={airplane} alt="airplane" style={{width: "35px", }} textAlign= "center"/>
                                    </Box>
                                    <Typography fontWeight="bold" sx={{color:"gray", fontSize: [ "12px","13px", "15px", ], textAlign: ["center", "center", "left",] }} style={{fontFamily: "Quicksand"}}>Planning to book a International Flight? <Typography color="primary" sx={{ fontSize: [ "12px","13px", "15px", ] }}  alignItems="center" fontWeight="bold" style={{fontFamily: "Quicksand"}}>Call 0123-12342342 for booking Assistance</Typography></Typography>

                                </Grid>
                                <Grid item xs={12} md={3} alignItems="center" sx={{ display: [ "block","block" ,"block", "flex", ],textAlign: ["center", "center", "left",] }}>

                                    <Box p={2} sx={{textAlign: ["center", "center", "left",]}}>
                                        <img src={languages} alt="languages" style={{width: "35px"}}/>
                                    </Box>
                                    <Typography  fontWeight="bold" sx={{color:"gray", fontSize: [ "12px","13px", "15px", ], textAlign: ["center", "center", "left",] }} style={{fontFamily: "Quicksand"}}>We are now available in Hindi!<Typography color="primary" sx={{ fontSize: [ "12px","13px", "15px", ] }}  alignItems="center" fontWeight="bold" style={{fontFamily: "Quicksand"}}>Click Here to change the Language.</Typography> </Typography>

                                </Grid>
                                <Grid item xs={12} md={3} alignItems="center" sx={{ display: [ "block","block" ,"block", "flex", ] }} >

                                    <Box p={2} sx={{textAlign: ["center", "center", "left",]}}>
                                        <img src={travelbag} alt="travelbag" style={{width: "35px"}}/>
                                    </Box>
                                    <Typography  fontWeight="bold" sx={{color:"gray", fontSize: [ "12px","13px", "15px", ], textAlign: ["center", "center", "left",] }} style={{fontFamily: "Quicksand"}}>Complete your web check-in on Travvolt in easy step.<Typography color="primary" sx={{ fontSize: [ "12px","13px", "15px", ] }}  alignItems="center" fontWeight="bold" style={{fontFamily: "Quicksand"}}>Click To know More</Typography> </Typography>

                                </Grid>
                                <Grid item xs={12} md={3} alignItems="center" sx={{ display: [ "block","block" ,"block", "flex", ] }}>
                                    <Box p={2} sx={{textAlign: ["center", "center", "left",]}}>
                                        <img src={booking} alt="booking" style={{width: "35px"}}/>
                                    </Box>
                                    <Typography  fontWeight="bold" sx={{color:"gray", fontSize: [ "12px","13px", "15px", ] , textAlign: ["center", "center", "center", "left"] }} style={{fontFamily: "Quicksand"}}>Taking a Flight? <Typography color="primary" sx={{ fontSize: [ "12px","13px", "15px", ] }}  alignItems="center" fontWeight="bold" style={{fontFamily: "Quicksand"}}> Click to check Travel Guidelines</Typography></Typography>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Box>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Toursection