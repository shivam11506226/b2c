import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./internationalpackage.css";

import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import inter from "../../../images/img/inter.jpg";
import { Paper, Box, Typography } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./internationalpackage.css";
import { useDispatch, useSelector } from "react-redux";
import { searchOnePackageAction } from "../../../Redux/OnePackageSearchResult/actionOneSearchPackage";
import { searchPackageAction } from "../../../Redux/SearchPackage/actionSearchPackage";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export const ExploreUnexplored=()=>{
    const reducerState = useSelector((state) => state);
    console.log("holiday", reducerState?.searchResult);
    const [destination, setDestination] = useState("");
    const [daysSearch, setDaySearch] = useState(1);
    const filteredPackage = reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data?.pakage    ;
    console.error("filteredPackage State", filteredPackage)
    const dispatch = useDispatch();
 
  
    useEffect(()=>{
        const payload = {
            destination,
            days: daysSearch,
          };
        dispatch(searchPackageAction(payload));
    },[])
   
    const imageLinks = filteredPackage?.map((ele)=>ele?.pakage_img)
    console.warn(imageLinks)
    
    const items = filteredPackage?.map((link, index) => (
      
    
    <Card  p={2} sx={{ maxWidth: 350,minHeight:350 }}>
    <CardActionArea m={2}>
      <CardMedia
     m={4}
      component="img"
        height="140"
        image={link?.pakage_img}
        alt="Package Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {link?.pakage_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
      ));
      const responsive = {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
        1200: { items: 3 },
      };

return(
    <>
      <section>

<div className="container homeform_container">
    <Box mt={3}>
        <Paper elevation={3} py={10} sx={{ borderRadius: '15px', }}>
            <Box pt={2}>
                <Typography className="Inter_national">Trending Packages</Typography>
                <Typography className="international_para">Now travel the world without any hassle!</Typography>
            </Box>
            <Box mt={4}>
            <AliceCarousel
            responsive={responsive}    
            autoPlay={true}
            animationDuration={800}
            infinite
            mouseTracking
            items={items}
            disableButtonsControls
            />
            </Box>
         
           
        </Paper>
    </Box>
</div>

</section>
    </>
)
}
 export default ExploreUnexplored