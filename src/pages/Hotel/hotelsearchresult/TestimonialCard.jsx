import React from 'react';
import "./testimonialSlider.css";
import { Link,} from 'react-router-dom';
import { Box, Typography } from "@mui/material";
import pradeep from '../../../images/pradeep.png'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const TestimonialCard = () => {
    return (
        <div>
            <div className="container homeform_container">
                <Box mt={3}>
                    <div className="row card_row">
                        <div className="col-4">
                            <div className="review_container">
                                <Typography className="feature_review">Featured Reviews</Typography>
                                <Link className="all_review">View All 435 Reviews ></Link>
                            </div>
                            <div >
                                <div className="testomonial_body" >
                                    <div className="card_wrapper" >
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                                            <Box sx={{ display: 'flex', alignItems:'center' }}> 
                                                <Stack>
                                                    <Avatar alt="pradeep" src={pradeep} />
                                                </Stack>
                                                <Stack ml={1}>
                                                    <Typography className="avatar_name">Sam Miller</Typography>
                                                    <Typography className="avatar_slogen">1 Review Written</Typography>
                                                </Stack>
                                            </Box>
                                            {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Stack>
                                                    <Typography className="test_rating">4.5 /5</Typography>
                                                </Stack>
                                            </Box> */}
                                        </Box>
                                        <Box>
                                            <Typography className="test_para">When we were on a cruise ship, the entertainment director told us a passenger inquired of her, “Do these stairs go up or down?”</Typography>
                                        </Box>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                </Box>
            </div>
        </div>
    )
}

export default TestimonialCard
