import { Box, Typography, Grid, Button } from '@mui/material';
import React from 'react';

import travellers3 from '../../../images/img/travellers3.jpg';
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CommitIcon from "@mui/icons-material/Commit";
import TramIcon from "@mui/icons-material/Tram";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import DeckIcon from "@mui/icons-material/Deck";
import EngineeringIcon from "@mui/icons-material/Engineering";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LiquorIcon from "@mui/icons-material/Liquor";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import LandslideIcon from "@mui/icons-material/Landslide";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import PoolIcon from "@mui/icons-material/Pool";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import ForestIcon from "@mui/icons-material/Forest";
import Accordion from "react-bootstrap/Accordion";
import HolidayPackageTab from './HolidayPackageTab';
import "./holidaypackageInfofield.css";
import { useSelector } from 'react-redux';

const HolidayPackageInfofield = () => {
    const reducerState = useSelector((state) => state);
    const onePackage =
    reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data;

 
    return (
    
      <div className='container' >
      <Box className='package_info_container'>
          <Box>
              <Typography className='vacation_heading'>{onePackage?.pakage_title}</Typography>
          </Box>
          <Box className='box_container' mt={2}>
              <Box>
                  <Typography className='day_night'>{`${onePackage?.days-1}N / ${onePackage?.days}D`}</Typography>
              </Box>
              {/* <Box>
                  <Typography className='day_destination'>2N Munnar</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                  <Typography className="doted"></Typography>
                  <Typography className="dashed_line"></Typography>
                  <Typography className="doted"></Typography>
              </Box>
              <Box>
                  <Typography className='day_destination'>1N Thekkady</Typography>
              </Box> */}
              {/* <Box display="flex" alignItems="center">
                  <Typography className="doted"></Typography>
                  <Typography className="dashed_line"></Typography>
                  <Typography className="doted"></Typography>
              </Box>
              <Box>
                  <Typography className='day_destination'>1N Alleppey</Typography>
              </Box> */}
          </Box>
          <Box>
              <Grid container spacing={2}>
                  <Grid item xs={12} lg={6}>
                      <Box>
                          <img src={onePackage?.pakage_img} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                      </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                      <Box>
                          <Grid container spacing={2}>
                              <Grid item xs={12} lg={5}>
                                  <Box>
                                      <img src={onePackage?.pakage_img} style={{ width: '100%', height: '230px', borderRadius: '10px' }} />
                                  </Box>
                              </Grid>
                              <Grid item xs={12} lg={7}>
                                  <Box>
                                      <img src={onePackage?.pakage_img} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                                  </Box>
                              </Grid>
                              <Grid item xs={12} lg={8}>
                                  <Box>
                                      <img src={onePackage?.pakage_img} style={{ width: '100%', height: '155px', borderRadius: '10px' }} />
                                  </Box>
                              </Grid>
                              <Grid item xs={12} lg={4}>
                                  {/* <Box className='view_more'>
                                      <Box className="bg_image"></Box>
                                      <Box className="bg_text">
                                          <Typography>Blurred Background</Typography>
                                          <Typography>I am John Doe</Typography>
                                          <Typography>And I'm a Photographer</Typography>
                                      </Box>
                                  </Box> */}
                                  <Box>
                                      <img src={onePackage?.pakage_img} style={{ width: '100%', height: '155px', borderRadius: '10px' }} />
                                  </Box>
                              </Grid>
                          </Grid>
                      </Box>
                  </Grid>
              </Grid>
          </Box>

          <HolidayPackageTab/>
      </Box>
  </div>
    )
}

export default HolidayPackageInfofield
