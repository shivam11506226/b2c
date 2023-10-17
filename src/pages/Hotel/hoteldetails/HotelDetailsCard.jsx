import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import "./hotelbillainfo.css";

const HotelInfoCard = () => {
  const reducerState = useSelector((state) => state);
  const hotelDetails =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
      ?.HotelResults;

  console.error("✌️ hotelDetails ", hotelDetails);

  const handleBookHotel = (resultIndex, hotelCode) => {
    console.log("Handel Click Index Key", resultIndex, hotelCode);
    sessionStorage.setItem("ResultIndex", resultIndex);
    sessionStorage.setItem("HotelCode", hotelCode);
  };
  return (
    <>
      {hotelDetails?.map((ele, indx) => {
        // ⬇️ create variable 
          const resultIndex = ele?.ResultIndex;
          const hotelCode = ele?.HotelCode;
        return(
          <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          key={indx}
          className="boxshaow"
          container
          p={1}
          mt={1}
        >
          <Box sx={{ width: "20%", height: "30%" }}>
            <img src={ele?.HotelPicture} className="flight_img" />
          </Box>
          <Grid item sm={12} lg={5} xs={12}>
            <Box>
              <Typography fontWeight={500}>{ele?.HotelName}</Typography>
            </Box>
            <Box>
              <Box ml={1} style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ color: "#006FFF", fontSize: "11px" }}>
                  {ele?.HotelAddress}{" "}
                </Typography>
              </Box>
            </Box>

            <Box
              ml={1}
              mt={1}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Rating
                name="read-only"
                value={ele?.StarRating}
                readOnly
                size="small"
              />
            </Box>
          </Grid>
          <Grid item sm={12} lg={3} xs={12}>
         

            <Box  display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection='column'
          height={100}
          >
              <Typography
                color="#006FFF"
                fontSize="12px"
                fontWeight="bold"
                display="flex"
                justifyContent="center"
              >
                Offer Price: ₹{ele?.Price?.OfferedPrice}
              </Typography>

              <Typography
                color="#FF8900"
                fontSize="12px"
                fontWeight="bold"
                display="flex"
                justifyContent="center"
              >
                Publisher Price: ₹{ele?.Price?.PublishedPrice}
              </Typography>
              <form action="/hotel/HotelSearchResult" >
              <Button variant="contained" textAlign="right" type="submit" onClick={() => {
                            console.log(
                              "resultIndex, hotelCode",
                              resultIndex,
                              hotelCode
                            );
                            handleBookHotel(resultIndex, hotelCode);
                          }}>
                Book Now
              </Button>
              </form>
            </Box>
          </Grid>
        </Box>
        )
       
})}
    </>
  );
};

export default HotelInfoCard;
