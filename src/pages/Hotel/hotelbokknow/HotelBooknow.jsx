import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hotelbooknow.css";
import availableRooms from "../../../images/Hotel/availableRooms.png"
import hotelMap from "../../../images/Hotel/hotelMap.png"
import hotelDetails from "../../../images/Hotel/hotelDetails.png"
import imageGallery from "../../../images/Hotel/imageGallery.png"
import Hoteldetailaccordian from "./Hoteldetailaccordian";
import StarIcon from "@mui/icons-material/Star";
import BigNavbar from "../../../UI/BigNavbar/BigNavbar";
import Navbar from "../../../layouts/Navbar";
import Mainheader from "../../../UI/Mainheader";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import starsvg from "../../../images/star.svg"
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import chevrondown from "../../../images/chevrondown.svg"
import goa from "../../../images/goa.jpg"
import suggestHotel from "../../../images/suggestHotel.png"
import InsideNavbar from "../../../UI/BigNavbar/InsideNavbar";
import { motion } from "framer-motion";
import {
  hotelBlockRoomAction,
  hotelRoomAction,
  hotelSearchInfoAction,
} from "../../../Redux/Hotel/hotel";
import HotelLoading from "../hotelLoading/HotelLoading";

const label = { inputProps: { "aria-label": "Checkbox demo" } };



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



const HotelBooknow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  // console.log("State Data", reducerState);
  const [loader, setLoader] = useState(false);

  const ResultIndex = sessionStorage.getItem("ResultIndex");
  const HotelCode = sessionStorage.getItem("HotelCode");

  useEffect(() => {
    const payload = {
      ResultIndex: ResultIndex,
      HotelCode: HotelCode,
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId:
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.TraceId,
    };

    dispatch(hotelSearchInfoAction(payload));
    dispatch(hotelRoomAction(payload));
  }, []);

  useEffect(() => {
    if (reducerState?.hotelSearchResult?.isLoadingHotelRoom == true) {
      setLoader(true);
    }
  }, [reducerState?.hotelSearchResult?.isLoadingHotelRoom]);

  useEffect(() => {
    if (
      reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult
        ?.HotelRoomsDetails.length >= 0
    ) {
      setLoader(false);
    }
  }, [
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult
      ?.HotelRoomsDetails,
  ]);

  useEffect(() => {
    if (reducerState?.hotelSearchResult?.blockRoom?.BlockRoomResult) {
      navigate("Reviewbooking");
    }
  });

  const hotelll = reducerState?.hotelSearchResult;
  // console.log(hotelll, "hotelll");

  const hotelInfo = reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult;
  const hotelRoom =
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult;
  console.log(hotelInfo, "hotel information")

  const star = (data) => {
    const stars = [];
    for (let i = 0; i < data; i++) {
      stars.push(<StarIcon key={i} style={{ color: "#FF8900" }} />);
    }
    return stars;
  };
  const hotelContactNo = hotelInfo?.HotelDetails?.HotelContactNo;
  const result =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult;

  console.log(result, "hotel result")

  let totalAdults = 0;
  let totalChildren = 0;

  result?.RoomGuests?.forEach((room) => {
    totalAdults += room?.NoOfAdults || 0;
    totalChildren += room?.NoOfChild || 0;
  });

  const storedFormData = JSON.parse(sessionStorage.getItem('hotelFormData'));
  const data = storedFormData.dynamicFormData[0];
  console.log(result?.HotelResults[0]?.StarRating);
  return (
    <>

      <div className='mainimgHotelSearch'>

        <InsideNavbar />
      </div>


      {loader ? (
        <HotelLoading />
      ) : (
        <section className="margin-pecentage my-4">

          <div className="contaier-xxl">
            <div className="row">

              <motion.div className="col-lg-9" variants={variants} initial="initial"
                whileInView="animate">
                <div className="row">
                  <motion.div variants={variants} className="col-lg-12 mb-3">
                    <div className="hotelTitleBoxAccord">
                      <h3>{hotelInfo?.HotelDetails?.HotelName}</h3>

                      <div>
                        {Array.from({ length: result?.HotelResults[0]?.StarRating }, (_, index) => (
                          <img key={index} src={starsvg} alt={`Star ${index + 1}`} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  <motion.div variants={variants} className="col-lg-12 mb-4 packageImgBox" >

                    <div className="packageLocation">
                      <FmdGoodIcon />
                    </div>
                    <div>
                      <p>{storedFormData?.city}</p>
                      <span>(India)</span>
                    </div>
                  </motion.div>
                  <motion.div variants={variants} className="col-lg-12">
                    <div className="hotelImageBoxBook">
                      <h4>Discover the best of luxury</h4>
                      <div className="row">
                        {hotelInfo?.HotelDetails?.Images?.slice(1, 5).map((img, key) => {
                          return (
                            <motion.div variants={variants} className="col-lg-2 col-md-2">
                              <div className="dynamicHotelimg">
                                <img src={img} className="jacuzzy_img" />
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={variants} className="col-lg-12 my-4">
                    <div className="hotelBookHighlight">
                      <h4>Hotel Highlight</h4>
                      <div>
                        {
                          hotelInfo?.HotelDetails?.HotelFacilities.slice(0, 6).map((item, index) => {
                            return (
                              <p><img src={chevrondown} />{item}</p>
                            )
                          })
                        }
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="col-lg-3">
                <div className="sidePromo">
                  <div className="col-lg-12 sidePromoImg">
                    <img src={suggestHotel} alt="" />
                  </div>
                  <div className="promoBottom">
                    <div className="promoTitle">
                      <p>Executive Twin Room Lounge access</p>
                      <div>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                    </div>


                    <div className="promoDestination">
                      <ul>
                        <li>Non-Refundable</li>
                        <li>Room Only</li>
                      </ul>
                      <div>
                        <p>₹ 4,250 </p>
                        <span>Per Person</span>
                      </div>
                    </div>
                    <div className="promoBottomButton">
                      <p>VIEW OTHER ROOMS {" > "}</p>

                      <button>BOOK THIS NOW</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <motion.div variants={variants} className="row">
              <div className="col-lg-12">
                <Hoteldetailaccordian />
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};

export default HotelBooknow;

