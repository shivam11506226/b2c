import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import inter from "../../../images/img/inter.jpg";
import { Paper, Box, Typography, Button } from "@mui/material";
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
import { useNavigate } from "react-router-dom";

export const BestPackage=()=>{

    const reducerState = useSelector((state) => state);
    console.log("holiday", reducerState?.searchResult);
    const [destination, setDestination] = useState("");
    const [daysSearch, setDaySearch] = useState(1);
    const filteredPackage = reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data?.pakage    ;
    console.error("filteredPackage State", filteredPackage)
    const dispatch = useDispatch();
    const [showMore,setMore] = useState(false)
    console.warn("one package details", reducerState)
    const navigate = useNavigate;
    const moreButton =()=>{
      setMore(true)
    }
  
    useEffect(()=>{
        const payload = {
            destination,
            days: daysSearch,
          };
        dispatch(searchPackageAction(payload));
    },[])
   
    const imageLinks = filteredPackage?.map((ele)=>ele?.pakage_img)
    console.warn(imageLinks)
    
    const searchOneHoliday = (id) => {
      //  console.log("ID",id);
      const payload = {
        id,
      };
      console.log(payload);
      // navigate('holidaypackages/HolidaypackageInfo');
      dispatch(searchOnePackageAction(payload));
    };
    

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
          {link?.overview?.slice(0,100)}{"...."}
           {/* {showMore == true ? link?.overview : (<span onClick={moreButton}>more</span> ) } */}
        </Typography>
      </CardContent>
    </CardActionArea>
    
    <form action="holidaypackages/HolidaypackageInfo">
    <Button type="submit"
     onClick={(e) => searchOneHoliday(link?._id)}>
    Explore more</Button>
                                </form>
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
 export default BestPackage