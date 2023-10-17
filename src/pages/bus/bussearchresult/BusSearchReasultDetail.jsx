import React, { useState } from "react";
import "./bussearchresultDetail.css";
import { Box, Grid, Typography, Divider, Link,Button } from "@mui/material"
import PriceSlider from "../../Hotel/hoteldetails/PriceSlider";
// import StarIcon from '@mui/icons-material/Star';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import BusServices from "./BusServices";


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 1),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    }
}));
const BusSearchReasultDetail = () => {

    const [selectedOption, setSelectedOption] = useState("");
    console.log(selectedOption);
    const [ratingOption, setRatingOption] = useState("");
    console.log(ratingOption);
    const [bookingOption, setBookingOption] = useState("");
    console.log(bookingOption);

    return (
        <div className='container'>
            <Box className='bus_detail_container' mt={3} p={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={3}>
                        <Box className='side_container'>
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography className="selectfilter">Sort by</Typography>
                                    <Link href='#' className="relevance_link">Relevance</Link>
                                </Box>
                                <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                                <Typography className="suggested">Suggested For You</Typography>
                                <Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option1"
                                                checked={selectedOption === "option1"}
                                                onClick={(e) => setSelectedOption("option1")} />
                                        </Typography>
                                        <Typography className="value">Travvolt Deal</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option2"
                                                checked={selectedOption === "option2"}
                                                onClick={(e) => setSelectedOption("option2")} />
                                        </Typography>
                                        <Typography className="value">Sleeper</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option3"
                                                checked={selectedOption === "option3"}
                                                onClick={(e) => setSelectedOption("option3")} />
                                        </Typography>
                                        <Typography className="value">Primo</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option4"
                                                checked={selectedOption === "option4"}
                                                onClick={(e) => setSelectedOption("option4")} />
                                        </Typography>
                                        <Typography className="value"> AC</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option5"
                                                checked={selectedOption === "option5"}
                                                onClick={(e) => setSelectedOption("option5")} />
                                        </Typography>
                                        <Typography className="value">Pickup After 6PM</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                </Box>
                                <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                                <Box>
                                    <Typography className="price">Deal & Offer</Typography>

                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option5"
                                                checked={selectedOption === "option5"}
                                                onClick={(e) => setSelectedOption("option5")} />
                                        </Typography>
                                        <Typography className="value">Travvolt 7% off</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                </Box>
                                <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                                <Box>
                                    <Typography className="price">Free Cancellation</Typography>

                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option5"
                                                checked={selectedOption === "option5"}
                                                onClick={(e) => setSelectedOption("option5")} />
                                        </Typography>
                                        <Typography className="value">24 Hours</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option5"
                                                checked={selectedOption === "option5"}
                                                onClick={(e) => setSelectedOption("option5")} />
                                        </Typography>
                                        <Typography className="value">72 Hours</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                </Box>
                                <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                                <Box>
                                    <Box>
                                        <Typography className="price">Budget (Per person)</Typography>

                                        <PriceSlider />
                                    </Box>
                                </Box>
                                <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                                {/* -------------------------------------------------------------------- */}

                                <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                                <Box>
                                    <Box>
                                        <Typography className="starrating"> Boarding Points</Typography>
                                    </Box>
                                    <Box my={3}
                                        sx={{
                                            flexGrow: 1,
                                            borderRadius: "10px",
                                            border: "1px solid #666666"
                                        }}
                                    >
                                        <Search>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                placeholder="Search Drop Points"
                                                inputProps={{ "aria-label": "search" }}
                                            />
                                        </Search>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="booking1"
                                                checked={bookingOption === "booking1"}
                                                onClick={(e) => setBookingOption("booking1")} />
                                        </Typography>
                                        <Typography className="value">Kashmiri Gate</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="booking2"
                                                checked={bookingOption === "booking2"}
                                                onClick={(e) => setBookingOption("booking2")} />
                                        </Typography>
                                        <Typography className="value">Morigate</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="booking3"
                                                checked={bookingOption === "booking3"}
                                                onClick={(e) => setBookingOption("booking3")} />
                                        </Typography>
                                        <Typography className="value">Anand Vihar</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="booking4"
                                                checked={bookingOption === "booking4"}
                                                onClick={(e) => setBookingOption("booking4")} />
                                        </Typography>
                                        <Typography className="value">RK Ashram</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="booking4"
                                                checked={bookingOption === "booking4"}
                                                onClick={(e) => setBookingOption("booking4")} />
                                        </Typography>
                                        <Typography className="value">Badarpur</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>

                                    <Box>
                                        <a className="more_bording_point" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            21 More Boarding Points
                                        </a>
                                    </Box>
                                    <div class="collapse" id="collapseExample">
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                            <Typography className="content">
                                                <input className="radio" type="radio" value="booking4"
                                                    checked={bookingOption === "booking4"}
                                                    onClick={(e) => setBookingOption("booking4")} />
                                            </Typography>
                                            <Typography className="value">Badarpur</Typography>
                                            <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                        </Box>
                                    </div>

                                </Box>
                                <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                                <Box>
                                    <Box>
                                        <Typography className="starrating"> Drop Point</Typography>
                                    </Box>
                                    <Box my={3}
                                        sx={{
                                            flexGrow: 1,
                                            borderRadius: "10px",
                                            border: "1px solid #666666"
                                        }}
                                    >
                                        <Search>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                placeholder="Search Drop Points"
                                                inputProps={{ "aria-label": "search" }}
                                            />
                                        </Search>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="booking1"
                                                checked={bookingOption === "booking1"}
                                                onClick={(e) => setBookingOption("booking1")} />
                                        </Typography>
                                        <Typography className="value">Faizalganj</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="booking2"
                                                checked={bookingOption === "booking2"}
                                                onClick={(e) => setBookingOption("booking2")} />
                                        </Typography>
                                        <Typography className="value">Rama Devi Chawraha</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="booking3"
                                                checked={bookingOption === "booking3"}
                                                onClick={(e) => setBookingOption("booking3")} />
                                        </Typography>
                                        <Typography className="value">Kanpur</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="booking4"
                                                checked={bookingOption === "booking4"}
                                                onClick={(e) => setBookingOption("booking4")} />
                                        </Typography>
                                        <Typography className="value">By Pass Allahabad Road</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                    <p>
                                        <a className="more_bording_point" style={{ textDecoration: 'underline', color: '#006FFF', cursor: 'pointer' }} data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</a>
                                    </p>
                                    <div className="row">
                                        <div className="col">
                                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                                                <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                                    <Typography className="content">
                                                        <input className="radio" type="radio" value="booking3"
                                                            checked={bookingOption === "booking3"}
                                                            onClick={(e) => setBookingOption("booking3")} />
                                                    </Typography>
                                                    <Typography className="value">Kanpur</Typography>
                                                    <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                                </Box>
                                                <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                                    <Typography className="content">
                                                        <input className="radio" type="radio" value="booking3"
                                                            checked={bookingOption === "booking3"}
                                                            onClick={(e) => setBookingOption("booking3")} />
                                                    </Typography>
                                                    <Typography className="value">Kanpur</Typography>
                                                    <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                                </Box>
                                                <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                                    <Typography className="content">
                                                        <input className="radio" type="radio" value="booking3"
                                                            checked={bookingOption === "booking3"}
                                                            onClick={(e) => setBookingOption("booking3")} />
                                                    </Typography>
                                                    <Typography className="value">Kanpur</Typography>
                                                    <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                                </Box>
                                                <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                                    <Typography className="content">
                                                        <input className="radio" type="radio" value="booking3"
                                                            checked={bookingOption === "booking3"}
                                                            onClick={(e) => setBookingOption("booking3")} />
                                                    </Typography>
                                                    <Typography className="value">Kanpur</Typography>
                                                    <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                                </Box>
                                                <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                                    <Typography className="content">
                                                        <input className="radio" type="radio" value="booking3"
                                                            checked={bookingOption === "booking3"}
                                                            onClick={(e) => setBookingOption("booking3")} />
                                                    </Typography>
                                                    <Typography className="value">Kanpur</Typography>
                                                    <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                                </Box>
                                            </div>
                                        </div>
                                    </div>

                                </Box>
                                <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                                <Box>
                                    <Typography className="price">Pickup Time</Typography>

                                    <Grid container spacing={3} marginTop="1px">
                                        <Grid item sm={12} xs={12} lg={6}>
                                            <Box>
                                                <Button variant="contained" sx={{boxShadow:'0px 3px 6px #00000029',background:'white',width:'100%'}}><Typography className="price">Before 6AM</Typography></Button>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={12} xs={12} lg={6}>
                                            <Box>
                                                <Button variant="contained" sx={{boxShadow:'0px 3px 6px #00000029',background:'white',width:'100%'}}><Typography className="price">6AM-12PM</Typography></Button>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={12} xs={12} lg={6}>
                                            <Box>
                                                <Button variant="contained" sx={{boxShadow:'0px 3px 6px #00000029',background:'white',width:'100%'}}><Typography className="price">12PM-6PM</Typography></Button>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={12} xs={12} lg={6}>
                                            <Box>
                                                <Button variant="contained" sx={{boxShadow:'0px 3px 6px #00000029',background:'white',width:'100%'}}><Typography className="price">After 6PM</Typography></Button>
                                            </Box>
                                        </Grid>
                                    </Grid>


                                </Box>
                                <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                                <Box>
                                    <Typography className="price">Drop Time</Typography>

                                    <Grid container spacing={3} marginTop="1px">
                                        <Grid item sm={12} xs={12} lg={6}>
                                            <Box>
                                                <Button variant="contained" sx={{boxShadow:'0px 3px 6px #00000029',background:'white',width:'100%'}}><Typography className="price">Before 6AM</Typography></Button>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={12} xs={12} lg={6}>
                                            <Box>
                                                <Button variant="contained" sx={{boxShadow:'0px 3px 6px #00000029',background:'white',width:'100%'}}><Typography className="price">6AM-12PM</Typography></Button>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={12} xs={12} lg={6}>
                                            <Box>
                                                <Button variant="contained" sx={{boxShadow:'0px 3px 6px #00000029',background:'white',width:'100%'}}><Typography className="price">12PM-6PM</Typography></Button>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={12} xs={12} lg={6}>
                                            <Box>
                                                <Button variant="contained" sx={{boxShadow:'0px 3px 6px #00000029',background:'white',width:'100%'}}><Typography className="price">After 6PM</Typography></Button>
                                            </Box>
                                        </Grid>
                                    </Grid>


                                </Box>
                                <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                                <Box>
                                    <Typography className="price">Bus Type</Typography>

                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option5"
                                                checked={selectedOption === "option5"}
                                                onClick={(e) => setSelectedOption("option5")} />
                                        </Typography>
                                        <Typography className="value">AC Seater</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>

                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option5"
                                                checked={selectedOption === "option5"}
                                                onClick={(e) => setSelectedOption("option5")} />
                                        </Typography>
                                        <Typography className="value">AC Sleeper</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>

                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option5"
                                                checked={selectedOption === "option5"}
                                                onClick={(e) => setSelectedOption("option5")} />
                                        </Typography>
                                        <Typography className="value">Non AC Seater</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>

                                    <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                        <Typography className="content">
                                            <input className="radio" type="radio" value="option5"
                                                checked={selectedOption === "option5"}
                                                onClick={(e) => setSelectedOption("option5")} />
                                        </Typography>
                                        <Typography className="value">Non AC Sleeper</Typography>
                                        <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={9}>
                        <Box my={2}>
                           <BusServices />
                        </Box>
                      
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default BusSearchReasultDetail
