import React, { useState, } from "react";
import Umbrella1 from "../../../images/umbrella1.png";
import Umbrella2 from "../../../images/umbrella2.png";
import Checkbox from "@mui/material/Checkbox";
import CommitIcon from "@mui/icons-material/Commit";
import TramIcon from "@mui/icons-material/Tram";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import CabinIcon from "@mui/icons-material/Cabin";
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
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import KayakingIcon from "@mui/icons-material/Kayaking";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, Box as MuiBox, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./holidaypackagesdetail.css";
import { searchOnePackageAction } from "../../../Redux/OnePackageSearchResult/actionOneSearchPackage";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function HolidayPackagesDetail() {

  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const filteredPackage =
    reducerState?.searchResult?.packageSearchResult?.data?.data?.pakage;

  console.warn("Flitered line 22", filteredPackage);


  const searchOneHoliday = (id) => {
    const payload = {
      id,
    };
    dispatch(searchOnePackageAction(payload));
    navigate("/holidayInfo");
  };


  const savedDataString = sessionStorage.getItem("searchPackageData");
  const savedData = JSON.parse(savedDataString);
  const savedDestination = savedData?.destination;
  const savedDays = savedData?.days;


  const [sortOption, setSortOption] = useState("lowToHigh");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };


  console.log(reducerState, "reducer state");


  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="outerFilterBox">
          <div className="filterBox">
            <p>Showing {' '}{filteredPackage?.length} {' '} Results</p>
            <p className="searchDestination">Seach Destination{' '}: <b>{savedDestination}</b></p>
            <p className="searchDestination">Days {' '} <b>{savedDays}</b></p>
            <div className="d-flex align-items-center">
              <label>Price <FilterAltIcon style={{ fontWeight: "600", fontFamily: "Montserrat", fontSize: '14px', marginLeft: "7px" }} /></label>
              <select onChange={handleSortChange} value={sortOption}>

                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      {filteredPackage
        ?.sort((a, b) => {
          if (sortOption === "lowToHigh") {
            return a.pakage_amount.amount - b.pakage_amount.amount;
          } else {
            return b.pakage_amount.amount - a.pakage_amount.amount;
          }
        })
        .map((item, index) => {
          return (
            <div className="col-lg-12">

              <div onClick={(e) => searchOneHoliday(item?._id)} className="packageResultBox" key={index}>
                <div className="packageImage">
                  <img src={item?.pakage_img} alt="package-img" />
                </div>
                <div className="packageResultDetails">
                  <div className="packageTitle">
                    <p>{item?.pakage_title}</p>
                  </div>
                  <div>
                    <p className="customize">{`${item?.days - 1}N`} / {`${item?.days}D`}</p>
                    <p className="departure">
                      {item?.schedule?.flexible ? 'Flexible' : item?.schedule?.fixed_departure ? 'Fixed Departure' : ''}
                    </p>
                  </div>

                  <div className="icon-box">
                    {item?.insclusions?.slice(0, 6).map((ele, index) => {
                      return (
                        <div key={index} className="icon-box-inner">
                          {ele?.flexibility && (
                            <div>
                              <span><CommitIcon />
                              </span>
                              <p>Flexibility</p>
                            </div>
                          )}
                          {ele?.train && (
                            <div>
                              <span><TramIcon /></span>
                              <p>Train</p>
                            </div>
                          )}
                          {ele?.bus && (
                            <div>
                              <span><DirectionsBusIcon /></span>
                              <p>Bus</p>
                            </div>
                          )}
                          {ele?.cab && (
                            <div>
                              <span><DirectionsCarIcon /></span>
                              <p>Cab</p>
                            </div>
                          )}
                          {ele?.moterBike && (
                            <div>
                              <span><TwoWheelerIcon /></span>
                              <p>Moterbike</p>
                            </div>
                          )}
                          {ele?.hotel && (
                            <div>
                              <span><ApartmentIcon /></span>
                              <p>Hotel</p>
                            </div>
                          )}
                          {ele?.homeStays && (
                            <div>
                              <span><HolidayVillageIcon /></span>
                              <p>Homestays</p>
                            </div>
                          )}
                          {ele?.guestHouse && (
                            <div>
                              <span><LocationCityIcon /></span>
                              <p>Guesthouse</p>
                            </div>
                          )}
                          {ele?.camp && (
                            <div>
                              <span><CabinIcon /></span>
                              <p>Camp</p>
                            </div>
                          )}
                          {ele?.cruise && (
                            <div>
                              <span><BlurOnIcon /></span>
                              <p>Cruise</p>
                            </div>
                          )}
                          {ele?.sightSeeing && (
                            <div>
                              <span><DeckIcon /></span>
                              <p>Sightseeing</p>
                            </div>
                          )}
                          {ele?.guide && (
                            <div>
                              <span><EngineeringIcon /></span>
                              <p>Guide</p>
                            </div>
                          )}
                          {ele?.meals && (
                            <div>
                              <span><FastfoodIcon /></span>
                              <p>Meals</p>
                            </div>
                          )}
                          {ele?.breakfast && (
                            <div>
                              <span><DinnerDiningIcon /></span>
                              <p>Daily Breakfast</p>
                            </div>
                          )}
                          {ele?.drink && (
                            <div>
                              <span><LiquorIcon /></span>
                              <p>Complimentary Drink</p>
                            </div>
                          )}
                          {ele?.visa && (
                            <div>
                              <span><ArticleIcon /></span>
                              <p>Visa</p>
                            </div>
                          )}
                          {ele?.travelInsurance && (
                            <div>
                              <span><AccountBalanceIcon /></span>
                              <p>Travel Insurance</p>
                            </div>
                          )}
                          {ele?.safeTravel && (
                            <div>
                              <span><ParaglidingIcon /></span>
                              <p>Safe to Travel</p>
                            </div>
                          )}
                          {ele?.wildlife && (
                            <div>
                              <span><NaturePeopleIcon /></span>
                              <p>Wildlife</p>
                            </div>
                          )}
                          {ele?.heritage && (
                            <div>
                              <span><LandslideIcon /></span>
                              <p>Heritage</p>
                            </div>
                          )}
                          {ele?.adventure && (
                            <div>
                              <span><KitesurfingIcon /></span>
                              <p>Adventure</p>
                            </div>
                          )}
                          {ele?.beach && (
                            <div>
                              <span><PoolIcon /></span>
                              <p>Beach</p>
                            </div>
                          )}
                          {ele?.hillStation && (
                            <div>
                              <span><DownhillSkiingIcon /></span>
                              <p>Hill Station</p>
                            </div>
                          )}
                          {ele?.nature && (
                            <div>
                              <span><ForestIcon /></span>
                              <p>Nature</p>
                            </div>
                          )}
                          {ele?.wellness && (
                            <div>
                              <span><SelfImprovementIcon /></span>
                              <p>Wellness</p>
                            </div>
                          )}
                          {ele?.hiddenGem && (
                            <div>
                              <span><FitnessCenterIcon /></span>
                              <p>Hidden Gem</p>
                            </div>
                          )}
                          {ele?.tax && (
                            <div>
                              <span><FolderDeleteIcon /></span>
                              <p>Price Inclusive Tax</p>
                            </div>
                          )}
                          {ele?.discount && (
                            <div>
                              <span><LocalOfferIcon /></span>
                              <p>50% Off</p>
                            </div>
                          )}
                          {ele?.waterActivities && (
                            <div>
                              <span><KayakingIcon /></span>
                              <p>Water Activities</p>
                            </div>
                          )}
                          {ele?.optionalActivities && (
                            <div>
                              <span><SportsKabaddiIcon /></span>
                              <p>Optional Activities</p>
                            </div>
                          )}
                          {ele?.flexibleBooking && (
                            <div>
                              <span><BookmarkAddIcon /></span>
                              <p>Flexible Booking</p>
                            </div>
                          )}
                          {ele?.wifi && (
                            <div>
                              <span><WifiPasswordIcon /></span>
                              <p>WIFI</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="destination">
                    <ul>
                      {item?.destination?.slice(0, 3).map((destinationItem, index) => (
                        <li key={index}>{destinationItem?.addMore}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="priceBook">
                  <div className="priceBookOne">
                    <h3>{`${item?.days - 1}N`} / {`${item?.days}D`}</h3>
                    <span>Offer Price</span>
                    <p>₹{' '} {item?.pakage_amount?.amount}</p>
                    <h4>Show More<ArrowForwardIosIcon /></h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default HolidayPackagesDetail;