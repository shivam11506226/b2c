import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./busbookingdetails.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "react-phone-input-2/lib/bootstrap.css";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';

const BusBookingDetails = () => {
  return (
    <div>
      <div className="container">
        <Box className="bus_details_review" mt={3} p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} lg={9}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Typography className="gola_service">
                    Gola Bus Service
                  </Typography>
                  <Box>
                    <Typography className="delhi_to_kanpur">
                      Delhi <ArrowForwardIcon /> Kanpur
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography className="seat_select">
                    1 Seat Selected
                  </Typography>
                </Box>
              </Box>
              <Box
                mt={1}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Box className="rating_text">
                    <Typography className="rating_txt">4.9/5</Typography>
                  </Box>
                  <Box>
                    <Typography className="rating_phone">
                      654 Ratings
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="gps_enable">GPS Enabled</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography className="seat_num">Seat No: 6</Typography>
                </Box>
              </Box>
              <Box
                mt={1}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography className="seat_sleeper">
                    A/C Seater/Sleeper (2+1)
                  </Typography>
                </Box>
                <Box>
                  <Typography className="view_politic">
                    View Policies
                  </Typography>
                </Box>
              </Box>
              <Box mt={1} ml={3} display="flex" alignItems="center">
                <Box display="flex" alignItems="center">
                  <Box>
                    <Typography className="booking_id_pnr">
                      Booking ID#
                    </Typography>
                  </Box>
                  <Box ml={2}>
                    <Typography className="booking_id_pnr">
                      NU712071024969518
                    </Typography>
                  </Box>
                </Box>

                <Box ml={2} display="flex" alignItems="center">
                  <Box>
                    <Typography className="booking_id_pnr">
                      Reference PNR#
                    </Typography>
                  </Box>
                  <Box ml={2}>
                    <Typography className="booking_id_pnr">56VXACZZ</Typography>
                  </Box>
                </Box>
              </Box>

              <Box mt={3} p={3} className="Left_side_con">
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography className="time_date_text">
                        20:00 21 Feb' 23, Tue
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" width="100px">
                      <Typography className="time_dot"></Typography>
                      <Typography className="time_border"></Typography>
                      <Typography className="time_dot"></Typography>
                    </Box>
                    <Box>
                      <Typography className="time_date_text">
                        02:30 22 Feb' 23, Wed
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography className="con_direction">
                      Delhi - Kashmiri gate
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="con_direction">
                      Kanpur - Rama devi chowraha
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography className="content_paragraph">
                      Parking No. 1 Near kashmiri Gate Metro Gate No; 1 , delhi
                    </Typography>
                  </Box>
                </Box>
                <Box mt={2}>
                  <Typography className="trav_details">
                    Traveller Details
                  </Typography>
                </Box>
                <Box mt={1} ml={3} display="flex" alignItems="center">
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography className="persion_details">
                        <PersonSharpIcon />
                      </Typography>
                    </Box>
                    <Box ml={1}>
                      <Typography className="persion_details">
                        Dheeraj Vishwakarma
                      </Typography>
                    </Box>
                  </Box>

                  <Box ml={2} display="flex" alignItems="center">
                    <Box>
                      <Typography className="persion_details">
                        24yrs, Male
                      </Typography>
                    </Box>
                    <Box ml={2} display="flex" alignItems="center">
                    <Box>
                        <Typography className="sleeper_border">
                            <Typography className="sleeper_triangle"></Typography>
                        </Typography>
                    </Box>
                    <Box ml={2}>
                      <Typography className="persion_details">
                      Sleeper F
                      </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box mt={2}>
                  <Typography className="trav_details">
                    Contact Details
                  </Typography>
                </Box>
                <Box mt={1} ml={3} display="flex" alignItems="center">
                  <Box className="contact_details">
                    <PersonSharpIcon />
                  </Box>
                  <Box ml={2}>
                    <Typography className="contact_details">
                      Dheeraj Vishwakarma
                    </Typography>
                  </Box>
                </Box>
                <Box mt={1} ml={3} display="flex" alignItems="center">
                  <Box className="contact_details">
                    <EmailSharpIcon />
                  </Box>
                  <Box ml={2}>
                    <Typography className="contact_details">
                      df*************@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box mt={1} ml={3} display="flex" alignItems="center">
                  <Box className="contact_details">
                    <CallSharpIcon />
                  </Box>
                  <Box ml={2}>
                    <Typography className="contact_details">
                      *******789
                    </Typography>
                  </Box>
                </Box>
                <Box my={2}>
                  <Typography className="content_botttom"></Typography>
                </Box>
                <Box className="download_btn">
                  <Button classname="btn_invoice"> <DownloadSharpIcon /> Download Invoice</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={3}>
              <Box mt={3} p={3} className="Left_side_con">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography className="base_text">
                      Base Fare
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="base_text">$1122</Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography className="base_text">Tax</Typography>
                  </Box>
                  <Box>
                    <Typography className="base_text">$22</Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography className="base_text">
                      Coupon Code
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="base_text">$52</Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography className="base_text">
                      Total Base Price
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="base_price">$4147</Typography>
                  </Box>
                </Box>
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      fontSize: "12px",
                      borderRadius: "30px",
                      padding: "10px",
                    }}
                  >
                    Continue to Book Online
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default BusBookingDetails;
