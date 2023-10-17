import { Paper, Box, Grid, Typography, Tab, Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import travellers2 from '../../../images/img/travellers2.jpg'


import React from 'react'
const HolidayTheme = () => {
    return (
        <React.Fragment>
            <section>
                <div className="container homeform_container">
                    <Box mt={7}>
                        <Paper elevation={3} px={4} sx={{ borderRadius: '15px', }}>
                            <Grid container spacing={4} elevation={3} px={8} alignItems="center"  pb={4}>
                                <Grid item xs={12} md={3} alignItems="center" display="flex" justifyContent='center'>

                                    <Box>
                                        <Typography fontSize="50px" fontWeight="bold" color="#006FFF" lineHeight="52px">Explore </Typography>
                                        <Typography fontSize="50px" fontWeight="bold" color="#006FFF" lineHeight="52px">Holiday</Typography>
                                        <Typography mt={1} fontWeight="bold">By themes Pick from our specially curated packages</Typography>
                                        <Box mt={2}><Button variant='contained' color="warning">Learn More</Button></Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={3} >

                                    <Card sx={{ width:'100%' ,borderRadius:'20px',boxShadow:' 0px 7px 11px #00000045'}}>
                                        <CardMedia
                                            sx={{ height: '100%', width:'100%'}}
                                        />
                                        <img src={travellers2}  style={{ height: '100%', width:'100%'}} />
                                        <CardContent textAlign='center'>
                                            <Typography style={{ font: ' normal normal bold 15px/19px Quicksand', textAlign: 'center', color: '#252525' }}>
                                                Honeymoon
                                            </Typography>
                                            <Typography style={{ font: ' normal normal bold 10px/19px Quicksand', textAlign: 'center', color: '#0682D5' }}>
                                                Varanasi Mathura Vashnav Devi
                                            </Typography>
                                            <Typography style={{ font: ' normal normal bold 10px/10px Quicksand', textAlign: 'center', color: '#0682D5' }}>
                                                Haridwar Gujarat Shirdi
                                            </Typography>
                                            <Button variant='contained' type='submit' style={{ width: '100%', textAlign: 'center' ,marginTop:'10px',backgroundColor:'#006FFF',borderRadius:'20px'}}>View More</Button>
                                        </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} md={3} >

                                <Card sx={{ width:'100%',borderRadius:'20px',boxShadow:' 0px 7px 11px #00000045'}}>
                                        <CardMedia
                                            sx={{ height: '100%', width:'100%'}}
                                        />
                                        <img src={travellers2}  style={{ height: '100%', width:'100%'}} />
                                        <CardContent textAlign='center'>
                                            <Typography style={{ font: ' normal normal bold 15px/19px Quicksand', textAlign: 'center', color: '#252525' }}>
                                            Wildescape
                                            </Typography>
                                            <Typography style={{ font: ' normal normal bold 10px/19px Quicksand', textAlign: 'center', color: '#0682D5' }}>
                                            Combett Kanha Bandhavgadh
                                            </Typography>
                                            <Typography style={{ font: ' normal normal bold 10px/10px Quicksand', textAlign: 'center', color: '#0682D5' }}>
                                            Ranathambore
                                            </Typography>
                                            <Button variant='contained' type='submit' style={{ width: '100%', textAlign: 'center' ,marginTop:'10px',backgroundColor:'#006FFF',borderRadius:'20px'}}>View More</Button>
                                        </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} md={3}>
                                <Card sx={{ width:'100%',borderRadius:'20px',boxShadow:' 0px 7px 11px #00000045'}}>
                                        <CardMedia
                                            sx={{ height: '100%', width:'100%'}}
                                        />
                                        <img src={travellers2}  style={{ height: '100%', width:'100%'}} />
                                        <CardContent textAlign='center'>
                                            <Typography style={{ font: ' normal normal bold 15px/19px Quicksand', textAlign: 'center', color: '#252525' }}>
                                            Pilgrimage
                                            </Typography>
                                            <Typography style={{ font: ' normal normal bold 10px/19px Quicksand', textAlign: 'center', color: '#0682D5' }}>
                                                Varanasi Mathura Vashnav Devi
                                            </Typography>
                                            <Typography style={{ font: ' normal normal bold 10px/10px Quicksand', textAlign: 'center', color: '#0682D5' }}>
                                                Haridwar Gujarat Shirdi
                                            </Typography>
                                            <Button variant='contained' type='submit' style={{ width: '100%', textAlign: 'center' ,marginTop:'10px',backgroundColor:'#006FFF',borderRadius:'20px'}}>View More</Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Box>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HolidayTheme;





