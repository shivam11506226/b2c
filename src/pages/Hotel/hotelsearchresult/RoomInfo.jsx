import React from 'react';
import './roominfo.css';
import { Box, Typography, Grid, Link, Button } from "@mui/material";
import travellers from "../../../images/img/travellers.jpg";
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const RoomInfo = () => {
    return (
        <div>
            <Grid container className='room_container p-3'>
                <Grid item sm={12} lg={4}>
                    <Box>
                        <Typography className='room_txtt'>Room Types</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={4}>
                    <Box>
                        <Typography className='room_txtt'>Room Options</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={4}>
                    <Box>
                        <Typography className='room_txtt'>Price</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container className='room_detail_container p-3'>
                <Grid item sm={12} lg={4}>
                    <Box px={5} style={{ width: '100%', height: '200px' }}>
                        <img src={travellers} className='img_box' style={{ width: '100%', height: '100%' }} />
                    </Box>
                    <Box px={5} mt={2} display='flex' justifyContent='space-between'>
                        <Typography className='Deluxe_king'>Deluxe King</Typography>
                        <Link sx={{ textDecoration: 'none', font: 'normal normal bold 14px/18px Quicksand', cursor: 'pointer' }}>More Details</Link>
                    </Box>
                    <Box px={5} mt={1} display='flex' alignItems='center'>
                        <SocialDistanceIcon />
                        <Typography className='room_distance' ml={1}>400 sq.ft</Typography>
                    </Box>
                    <Box px={5} display='flex' alignItems='center'>
                        <ElectricCarIcon />
                        <Typography className='room_distance' ml={1}>City View</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={8} overflow='scroll' height='300px'>
                    <Grid container spacing={5}>
                        <Grid item sm={12} lg={6}>
                        <Box className='border_s'>
                        <Box mx={2}>
                                <Box mb={2}>
                                    <Typography className='room_wd_cancle'>1. Room Only </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <DisabledByDefaultIcon style={{ color: '#FF0000' }} />
                                    <Typography className='non_org'>Non-Refundable</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <DisabledByDefaultIcon style={{ color: '#FF0000' }} />
                                    <Typography className='non_org'>No meals included</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Travvolt - Promo NR Room Only</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Free Late check-out</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Free Late check-In</Typography>
                                </Box>
                            </Box>

                            <Box mt={15} mx={2}>
                                <Box mb={2}>
                                    <Typography className='room_wd_cancle'>2. Room With free Cancellation  </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Free Cancellation Till 6 Feb, 2023</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <DisabledByDefaultIcon style={{ color: '#FF0000' }} />
                                    <Typography className='non_org'>No meals included</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Travvolt - Promo NR Room Only</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Free Late check-out</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Free Late check-In</Typography>
                                </Box>
                            </Box>
                            <Box mt={15} mx={2}>
                                <Box mb={2}>
                                    <Typography className='room_wd_cancle'>3. Room With Free Cancellation | Breakfast Only </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Free Cancellation Till 6 Feb, 2023</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Breakfast</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Travvolt - Promo NR Room Only</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Free Late check-out</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Free Late check-In</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='13px'>
                                    <CheckBoxIcon style={{ color: 'greenyellow' }} />
                                    <Typography className='non_org'>Free Wifi</Typography>
                                </Box>
                            </Box>
                        </Box>
                            
                        </Grid>
                        <Grid item sm={12} lg={6}>
                           
                                <Box textAlign='center' mt={3}>
                                    <Box textAlign='center'>
                                        <Box className='offer_set'>
                                            <Typography className='offerInfo'>23% Off</Typography>
                                        </Box>
                                        <Typography className='per_tax'>$3422</Typography>
                                        <Typography className='broom_price'>$3422</Typography>
                                        <Typography className='per_tax'>$2334 + $322 taxes & fees Per Night</Typography>
                                    </Box>
                                    <Box textAlign='left'>
                                        <Button variant="outlined" type="submit">Select Room</Button>
                                    </Box>
                                </Box>
                                <Box textAlign='center' mt={15}>
                                    <Box textAlign='center'>
                                        <Box className='offer_set'>
                                            <Typography className='offerInfo'>23% Off</Typography>
                                        </Box>
                                        <Typography className='per_tax'>$3422</Typography>
                                        <Typography className='broom_price'>$3422</Typography>
                                        <Typography className='per_tax'>$2334 + $322 taxes & fees Per Night</Typography>
                                    </Box>
                                    <Box textAlign='left'>
                                        <Button variant="outlined" type="submit">Select Room</Button>
                                    </Box>
                                </Box>

                                <Box textAlign='center' mt={18}>
                                    <Box textAlign='center'>
                                        <Box className='offer_set'>
                                            <Typography className='offerInfo'>23% Off</Typography>
                                        </Box>
                                        <Typography className='per_tax'>$3422</Typography>
                                        <Typography className='broom_price'>$3422</Typography>
                                        <Typography className='per_tax'>$2334 + $322 taxes & fees Per Night</Typography>
                                    </Box>
                                    <Box textAlign='left'>
                                        <Button variant="outlined" type="submit">Select Room</Button>
                                    </Box>
                                </Box>
                            
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}

export default RoomInfo;
