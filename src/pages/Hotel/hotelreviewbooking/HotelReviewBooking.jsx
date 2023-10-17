import React, { useEffect } from "react";
import Footer from "../../../layouts/Footer";

import HotelReviewLeft from "./HotelReviewLeft";
import HotelReviewRight from "./HotelReviewRight";
import { Grid } from "@mui/material";
import Blankdiv from "../../home/searchresult/Blankdiv";
import Searchnavbar from "../../home/searchresult/Searchnavbar";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from "react-redux";

const HotelReviewBooking = () => {
  const reducerState = useSelector((state) => state);
  const checkBooking = reducerState?.hotelSearchResult?.bookRoom?.BookResult?.Error?.ErrorMessage 
  console.error("check booking",reducerState?.hotelSearchResult?.bookRoom?.BookResult?.Error?.ErrorMessage == checkBooking  )
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if(checkBooking == ""){
      handleClose()
     }
  }, [])
  

  

  return (
    <div className="hotel_banner">
      <Searchnavbar />
      <Blankdiv />
      <div className="container ">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <div className="row">
          <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
              <HotelReviewLeft />
            </Grid>
            <Grid item xs={12} md={3}>
              <HotelReviewRight />
            </Grid>
          </Grid>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelReviewBooking;
