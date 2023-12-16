import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import hotelNotFound from "../../../images/hotelNotFound.jpg"
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import StarIcon from "@mui/icons-material/Star";
import starsvg from "../../../images/star.svg"
import starBlank from "../../../images/starBlank.svg"
import Link from "@mui/material/Link";
import "./hotelresult.css";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));




const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};




export default function Popularfilter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("State Data", reducerState?.hotelSearchResult?.ticketData);

  const result =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult;

  const handleClick = (resultIndex, hotelCode) => {
    // console.log("Handel Click Index Key", resultIndex, hotelCode);
    navigate("HotelBooknow");
    sessionStorage.setItem("ResultIndex", resultIndex);
    sessionStorage.setItem("HotelCode", hotelCode);
  };
  // const handleModifySearchClick = () => {
  //   navigate("/hotel");
  // };

  console.log(result, "result")


  const star = (data) => {
    const stars = [];
    for (let i = 0; i < data; i++) {
      stars.push(<StarIcon key={i} style={{ color: "#FF8900" }} />);
    }
    return stars;
  };

  const [sortOption, setSortOption] = useState("lowToHigh");
  const [filterRating, setFilterRating] = useState(null);


  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterRating(event.target.value);
  };

  const sortedAndFilteredResults =
    result?.HotelResults
      ?.filter(
        (hotel) =>
          !filterRating || hotel?.StarRating === parseInt(filterRating)
      )
      ?.sort(
        (a, b) =>
          sortOption === "lowToHigh"
            ? a?.Price?.PublishedPriceRoundedOff - b?.Price?.PublishedPriceRoundedOff
            : b?.Price?.PublishedPriceRoundedOff - a?.Price?.PublishedPriceRoundedOff
      );

  console.log(result, "hotel result")

  let totalAdults = 0;
  let totalChildren = 0;

  result?.RoomGuests?.forEach((room) => {
    totalAdults += room?.NoOfAdults || 0;
    totalChildren += room?.NoOfChild || 0;
  });


  // Retrieve data from sessionStorage
  const storedFormData = JSON.parse(sessionStorage.getItem('hotelFormData'));
  const data = storedFormData.dynamicFormData[0]; // Assuming dynamicFormData is an array with at least one element

  // Calculate total number of guests
  const totalAdult = data.NoOfAdults || 0;
  const totalChild = data.NoOfChild || 0;

  // console.log("shaan", sortedAndFilteredResults)
  return (
    <section className="my-4 mx-5">
      <div className="contaier-xxl">
        <div className="row">
          <div className="col-lg-3">
            <div className="flightFilterBox">
              <div className="filterTitle">
                <p>Select Filters</p>
              </div>
              <div className="innerFilter">
                <p>Suggested for you</p>
                <form action="">
                  <div>
                    <Checkbox
                      {...label}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    Last Minute Deals
                  </div>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    Perfect or 1 night stay
                  </div>

                  <div>
                    <Checkbox
                      {...label}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    Free Cancellation
                  </div>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    Perfect Breakfast
                  </div>
                </form>
                <Divider sx={{ backgroundColor: "gray", marginTop: "15px" }} />
                <p>
                  Rating
                </p>

                <form className="ratingStar" action="">
                  <div>
                    <img src={starsvg} />
                    <img src={starsvg} />
                    <img src={starsvg} />
                    <img src={starsvg} />
                    <img src={starsvg} />

                  </div>

                  <div>
                    <img src={starsvg} />
                    <img src={starsvg} />
                    <img src={starsvg} />
                    <img src={starsvg} />
                    <img src={starBlank} />
                  </div>

                  <div>
                    <img src={starsvg} />
                    <img src={starsvg} />
                    <img src={starsvg} />
                    <img src={starBlank} />
                    <img src={starBlank} />

                  </div>

                  <div>
                    <img src={starsvg} />
                    <img src={starsvg} />
                    <img src={starBlank} />
                    <img src={starBlank} />
                    <img src={starBlank} />

                  </div>
                  <div>
                    <img src={starsvg} />
                    <img src={starBlank} />
                    <img src={starBlank} />
                    <img src={starBlank} />
                    <img src={starBlank} />

                  </div>
                </form>
                <Divider sx={{ backgroundColor: "gray", marginTop: "15px" }} />
                <p>
                  Price per night
                </p>
                <form action="">
                  <div>
                    <Checkbox
                      {...label}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    ₹0-2,000
                  </div>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    ₹2,000-3,000
                  </div>

                  <div>
                    <Checkbox
                      {...label}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    ₹3,000-6,500
                  </div>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    ₹10,000 and Above
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col-lg-12">
              <div className="outerFilterBox">
                <div className="filterBox">
                  <p>Showing {' '}{sortedAndFilteredResults?.length} {' '} Results</p>
                  <div>
                    <label>Sort By:</label>
                    <select value={sortOption} onChange={handleSortChange}>
                      <option value="lowToHigh">Low to High</option>
                      <option value="highToLow">High to Low</option>
                    </select>
                  </div>

                  <div>
                    <label>Rating:</label>
                    <select value={filterRating} onChange={handleFilterChange}>
                      <option value="">All Ratings</option>
                      <option value="1">1 Star</option>
                      <option value="2">2 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="5">5 Stars</option>
                    </select>
                  </div>

                </div>
              </div>
            </div>


            {sortedAndFilteredResults?.map((result, index) => {
              const resultIndex = result?.ResultIndex;
              const hotelCode = result?.HotelCode;
              return (
                <motion.div variants={variants} initial="initial"
                  whileInView="animate" className="col-lg-12" >

                  <motion.div variants={variants} onClick={(e) => handleClick(resultIndex, hotelCode)} className="hotelResultBoxSearch" key={index}>
                    <div>
                      <div className="hotelImage">
                        <img
                          src={result?.HotelPicture === "https://b2b.tektravels.com/Images/HotelNA.jpg" ? hotelNotFound : result?.HotelPicture}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = hotelNotFound;
                          }}
                          alt="package-img"
                        />

                      </div>
                      <div className="hotelResultDetails">
                        <div className="hotleTitle">
                          <p>{result?.HotelName}</p>
                        </div>


                        <div className="hotelRating">
                          <div>
                            {Array.from({ length: result?.StarRating }, (_, index) => (
                              <img key={index} src={starsvg} alt={`Star ${index + 1}`} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="hotAddress">
                            {result?.HotelAddress}
                          </p>
                        </div>


                      </div>
                    </div>

                    <div className="priceBookHotel">
                      <div className="priceBookHotelOne ">
                        {/* <span><del>₹{result?.Price?.OfferedPrice}</del></span> */}
                        <span>Offer Price</span>
                        <p>₹{result?.Price?.PublishedPrice}</p>
                        <h4>Show More<ArrowForwardIosIcon /></h4>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

  );
}





{/* <div className="col-lg-12">
  {sortedAndFilteredResults?.map((result, index) => {
    const resultIndex = result?.ResultIndex;
    const hotelCode = result?.HotelCode;
    return (
      <Box key={index} className="hotelResultBox" background="#FFF">
        <Box
          p={2}
          borderRadius="8px"
          border="1.41px solid #BBB"
          style={{ background: "#fff" }}
        >
          <Box display="flex">
            <Grid md={7} sm={6}>
              <Box display="flex">
                <Box
                  sx={{
                    width: "250px",
                    height: "190px",
                    borderRadius: "5px",
                  }}
                >

                  <img
                    src={result?.HotelPicture}
                    className="flight_img"
                    alt="hotelImage"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = hotelNotFound;
                    }}
                    style={{ borderRadius: "5px" }}
                  />
                </Box>
                <Box>
                  <div
                    style={{
                      color: "#071C2C",
                      fontSize: "20px",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      wordWrap: "break-word",
                      marginLeft: "20px",
                    }}
                  >
                    {result?.HotelName}
                  </div>
                  <div
                    style={{
                      color: "#071C2C",
                      fontSize: "14.10px",
                      fontFamily: "Montserrat",
                      fontWeight: 500,
                      wordWrap: "break-word",
                      marginLeft: "20px",
                    }}
                  >
                    {result?.HotelAddress}
                  </div>

                  <Typography p={0}>
                    <Link sx={{ fontSize: "13px", marginLeft: "20px" }}>
                      More Details
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid md={5} sm={6}>
              <Typography display="flex" gap="15px" justifyContent="right">
                <div
                  style={{
                    color: "black",
                    fontSize: "14.10px",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    wordWrap: "break-word",
                    marginLeft: "-30px"
                  }}
                >
                  Offer Price:
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "14.10px",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    wordWrap: "break-word",
                  }}
                >
                  ₹{result?.Price?.OfferedPrice}
                </div>
              </Typography>
              <Typography display="flex" gap="15px" justifyContent="right">
                <div
                  style={{
                    color: "black",
                    fontSize: "14.10px",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    wordWrap: "break-word",
                    marginLeft: "50px"
                  }}
                >
                  Public Price:
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "14.10px",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    wordWrap: "break-word",
                  }}
                >
                  ₹{result?.Price?.PublishedPrice}
                </div>
              </Typography>

              <Box display="flex" justifyContent="right" mt={2}>
                <Button
                  type="submit"
                  onClick={() => {
                    // console.log(
                    //   "resultIndex, hotelCode",
                    //   resultIndex,
                    //   hotelCode
                    // );
                    handleClick(resultIndex, hotelCode);
                  }}
                  style={{ backgroundColor: "#21325D", color: "white", padding: "8px 13px" }}

                >
                  Book Now
                </Button>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  })}
</div> */}