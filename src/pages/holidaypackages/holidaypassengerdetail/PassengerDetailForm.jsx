import React, { useEffect, useState } from "react";
import "./passengerdetails.css";
import { Grid, Typography, Divider, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import checkout from "../../../images/icons/checkout.png";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { HolidayButton } from "../../../utility/CSS/Button/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import building from "../../../images/icons/building.png";
import night from "../../../images/icons/night.png";
import beds from "../../../images/icons/beds.png";
import unitednations from "../../../images/icons/unitednations.png";
import addgroup from "../../../images/icons/addgroup.png";
import review from "../../../images/icons/review.png";
import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import Tooltip from "@mui/material/Tooltip";
import {
  getPackageBooking,
  openSuccessModal,
  packageBookingAction,
} from "../../../Redux/HolidayBook/actionBooking";
import { searchOnePackageAction } from "../../../Redux/OnePackageSearchResult/actionOneSearchPackage";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import verifiedGif from "../../../utility/verified.gif";

// Modal Code
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import LoginForm from "../../../components/Login";
import SignUp from "../../../components/Signup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 320,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PassengerDetailForm = () => {
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  // Check User is logged or not
  const authenticUser = reducerState?.logIn?.loginData?.status
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegModalOpen, setRegIsModalOpen] = useState(false);

  console.log("reducerState", reducerState);
  const [dobError, setDobError] = useState(false); // State for DOB error

  const onePackage =
    reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data;
  console.error("onePackage", onePackage);

  const checkModal = reducerState?.packageBook?.openModal;

  // Modal code
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const packageID = reducerState?.packageBookingID?.packageBookID;
  console.error("packageID", packageID);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchOnePackageAction(packageID));
  }, []);
  const detailed_itinerary =
    reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data
      ?.detailed_ltinerary;
  const [contact_details, setContact_details] = useState({
    email: "",
    fullName: "",
    contactNumber: {
      contryCode: "+91",
      phone: "",
    },
    sale_summary: "",
    departureCity: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "phone") {
      setContact_details((prevState) => ({
        ...prevState,
        contactNumber: {
          ...prevState.contactNumber,
          phone: value,
        },
      }));
    } else {
      setContact_details((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const [addGuests, setGuest] = useState(1);
  const [guests, setGuestsData] = useState([]);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const handleGuestInputChange = (event, index) => {
    const { name, value } = event.target;

    if (name === "dob" && index === 0) {
      const dob = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();

      if (age < 18) {
        // Set the DOB error state for the first guest
        setDobError(true);
      } else {
        // Clear the DOB error state for the first guest
        setDobError(false);
      }
    }

    setGuestsData((prevGuests) => {
      const newGuests = [...prevGuests];
      newGuests[index] = { ...newGuests[index], [name]: value };
      return newGuests;
    });
  };

  const handleGuestAdd = () => {
    setGuest(addGuests + 1);
  };

  const handleGuestDec = () => {
    if (addGuests > 1) {
      setGuest(addGuests - 1);
    }
  };

  const updateCounts = () => {
    let updatedAdultCount = 0;
    let updatedChildCount = 0;

    guests.forEach((guest) => {
      if (guest.dob) {
        const dob = new Date(guest.dob);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();

        if (age > 18) {
          updatedAdultCount++;
        } else if (age > 5) {
          updatedChildCount++;
        }
      }
    });

    setAdultCount(updatedAdultCount);
    setChildCount(updatedChildCount);
  };

  const handleBooking = (event) => {
    event.preventDefault();

    if (guests[0]?.dob) {
      const dob = new Date(guests[0].dob);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();

      // if (age < 18) {
      //   // Handle the case where the first guest is under 18
      //   // You can show an error message or take appropriate action here
      //   setDobError(true);
      //   // alert("The first guest must be 18 years or older.");
      //   return; // Exit the function
      // }
    }

    setDobError(false);

    if(authenticUser == 200){
      const payload = {
        pakageid: onePackage?._id,
        userId: "63c64d0da580ea586068112e",
        travellers: guests,
        contact_details: {
          email: contact_details.email,
          fullName: guests?.[0]?.name,
          contactNumber: {
            contryCode: "+91",
            phone: contact_details.contactNumber.phone,
          },
        },
        sale_summary: contact_details.sale_summary,
        departureCity: contact_details.departureCity,
        adults: 1,
        child: 0,
      };
      dispatch(packageBookingAction(payload));
      dispatch(openSuccessModal());
      setOpen(true);
      // Reset form values
      resetForm();
    }else{
      setIsModalOpen(true);
      // alert("Modal Open Code")
    }


   
  };
  const totalPrice = onePackage?.pakage_amount?.amount * addGuests;

  // Reset Code
  const resetForm = () => {
    setContact_details({
      email: "",
      fullName: "",
      contactNumber: {
        contryCode: "+91",
        phone: "",
      },
      sale_summary: "",
      departureCity: "",
    });

    setGuest(1); // Reset guest count to 1
    setGuestsData([]); // Reset guests data to an empty array
    setAdultCount(0); // Reset adult count to 0
    setChildCount(0); // Reset child count to 0
  };

  return (
    <>
     {
          isModalOpen && <LoginForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        }
        {
          isRegModalOpen && <SignUp isRegModalOpen={isRegModalOpen} setRegIsModalOpen={setRegIsModalOpen} />
        }
      <div className="container">
        <form onSubmit={handleBooking}>
          <Box
            mt={3}
            p={3}
            sx={{ backgroundColor: "white", borderRadius: "20px" }}
          >
            <Grid container spacing={3} py={2}>
              <Grid item xs={12} lg={9}>
                <Box 
                
                sx={{
                  position: 'sticky',
                  border:'1px solid lightgray',
                  top: '120px' ,/* Adjust the top value as needed */
                  backgroundColor: '#F1EFEF', /* Add a background color if desired */
                  zIndex: '100', /* Adjust the z-index if necessary */
                  borderRadius: '20px',
                  padding: '20px', 
                  boxShadowShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px !important'
                }}
                >
                  <Box>
                    <Box display="flex" alignItems="center" sx={{background:'#F1EFEF'}}>
                      <Typography variant="h4">
                        {onePackage?.pakage_title}
                      </Typography>
                      <span
                        style={{
                          background: "#1492E6",
                          color: "white",
                          fontSize: "15px",
                          borderRadius: "5px",
                          padding: "7px 16px",
                          fontFamily: "sans-serif",
                          marginLeft: "7px",
                        }}
                      >
                        {`${onePackage?.days - 1}N / ${onePackage?.days}D`}
                      </span>
                    </Box>

                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      mt={1}
                      sx={{ color: "gray" }}
                    >
                      {onePackage?.overview}
                    </Typography>
                  </Box>
                </Box>

                {/* Form start from here */}

                <Box className="passenger_form_container">
                  {/* <Typography className="passenger_detail">
                  Travellers Details
                </Typography>
                <Typography className="passenger_time">
                  2 Travellers - 1 Room | 2 Adults
                </Typography> */}
                  <Box className="main-head" mt={2}>
                    <div className="border p-2 pb-4 rounded">
                      <Typography className="holiday_txt">
                        Traveller Details
                      </Typography>
                      <Typography className="passenger_time">
                        Travellers - {addGuests}
                      </Typography>

                      {Array.from({ length: addGuests }, (_, index) => (
                        <div key={index}>
                          <Box
                            mt={2}
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-around"
                            flexWrap="wrap"
                          >
                            <Box>
                              <Typography
                                fontSize="14px"
                                fontWeight="bold"
                                color="#006FFF"
                                px={1}
                                mb={3}
                                className="holiday_txt_v"
                              >
                                Traveller {index}
                              </Typography>
                            </Box>

                            <Box display="flex" justifyContent="space-around">
                              <TextField
                                id="standard-basic"
                                label="Name"
                                name="name"
                                onChange={(event) =>
                                  handleGuestInputChange(event, index)
                                }
                                value={guests[index]?.name || ""}
                                variant="outlined"
                                size="small"
                              />
                              <TextField
                                id="standard-basic"
                                name="dob"
                                type="date"
                                onChange={(event) =>
                                  handleGuestInputChange(event, index)
                                }
                                value={guests[index]?.dob || ""}
                                variant="outlined"
                                size="small"
                                error={dobError} // Set error state for the TextField
                                helperText={
                                  dobError ? "Must be 18 years or older" : ""
                                }
                              />

                              {/* <TextField
                              id="standard-basic"
                              label="Gender"
                              name="gender"
                              onChange={(event) =>
                                handleGuestInputChange(event, index)
                              }
                              value={guests[index]?.gender || ""}
                              variant="outlined"
                              size="small"
                            /> */}

                              <FormControl
                                variant="outlined"
                                size="small"
                                sx={{ width: "120px" }}
                              >
                                <InputLabel>Gender</InputLabel>
                                <Select
                                  label="Gender"
                                  name="gender"
                                  onChange={(event) =>
                                    handleGuestInputChange(event, index)
                                  }
                                  value={guests[index]?.gender || ""}
                                >
                                  <MenuItem value="male">Male</MenuItem>
                                  <MenuItem value="female">Female</MenuItem>
                                  <MenuItem value="other">Other</MenuItem>
                                </Select>
                              </FormControl>

                              {/* {index === 0 && (
                                <Tooltip title="Add" arrow placement="top">
                                  <IconButton>
                                    <AddBoxIcon
                                      sx={{ color: "green" }}
                                      onClick={handleGuestAdd}
                                    />
                                  </IconButton>
                                </Tooltip>
                              )} */}

                              {index > 0 && (
                                <Tooltip title="Delete" arrow>
                                  <IconButton>
                                    <DeleteIcon
                                      sx={{ color: "red" }}
                                      style={{ marginTop: "6px" }}
                                      onClick={handleGuestDec}
                                    />
                                  </IconButton>
                                </Tooltip>
                              )}
                            </Box>
                          </Box>
                        </div>
                      ))}

                      <Button onClick={handleGuestAdd}>
                        <AddBoxIcon sx={{ color: "green" }} />
                        <span style={{ fontSize: "13px", color: "blue" }}>
                          Add More Travelers
                        </span>
                      </Button>

                      <Box>
                        <Typography fontWeight="600" mt={2} ml={2}>
                          Please Enter Contact Details
                        </Typography>

                        <Box mt={2} ml={2} display="flex" flexWrap="wrap">
                          <TextField
                            id="standard-basic"
                            label="Email"
                            name="email"
                            variant="outlined"
                            size="small"
                            onChange={handleInputChange}
                            value={contact_details.email}
                          />
                          <TextField
                            sx={{ marginLeft: "30px" }}
                            id="standard-basic"
                            label="Phone"
                            name="phone"
                            variant="outlined"
                            size="small"
                            onChange={handleInputChange}
                            value={contact_details.contactNumber.phone}
                          />
                        </Box>
                        <Box mt={2} ml={2} display="flex" flexWrap="wrap">
                          <TextField
                            id="standard-basic"
                            label="Destination"
                            name="departureCity"
                            variant="outlined"
                            size="small"
                            onChange={handleInputChange}
                            value={contact_details.departureCity}
                          />
                          <TextField
                            sx={{ marginLeft: "30px" }}
                            id="standard-basic"
                            label="Summary"
                            name="sale_summary"
                            variant="outlined"
                            size="small"
                            onChange={handleInputChange}
                            value={contact_details.sale_summary}
                          />
                        </Box>
                      </Box>
                    </div>
                  </Box>

                  <Box mt={4}>
                    <Typography className="package_itinerary_heading">
                      Package Itinerary & Inclusions
                    </Typography>
                  </Box>
                  <Box>
                    <Box>
                      <Typography className="heading_package">
                        Package Inclusions
                      </Typography>
                    </Box>

                    <Box px={2} style={{ borderLeft: "6px solid #707070" }}>
                      {detailed_itinerary?.map((ele, key) => {
                        console.error(key, ele);
                        return (
                          <>
                            <Typography
                              sx={{ fontWeight: "600", color: "darkorange" }}
                              my={2}
                            >
                              {`Days ${key + 1}`}
                            </Typography>
                            <div
                              key={key}
                              dangerouslySetInnerHTML={{
                                __html: ele,
                              }}
                            ></div>
                          </>
                        );
                      })}
                    </Box>
                    <Box px={3}>
                      <Box mt={2} display="flex" alignItems="center">
                        <Box>
                          <img src={checkout} />
                        </Box>
                        <Box>
                          <Typography className="check_out">
                            Checkout from Hotel in Goa
                          </Typography>
                        </Box>
                      </Box>
                      <Box mt={2}>
                        <Typography className="exclusion_text">
                          Package Exclusions
                        </Typography>
                      </Box>
                      <Box mt={1} display="flex" alignItems="center">
                        <Box>
                          <CloseIcon
                            style={{
                              color: "red",
                              width: "18px",
                              height: "18px",
                              fontWeight: "bold",
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography className="close_text">
                            {onePackage?.exclusion_note}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box mt={4}>
                    <Typography className="package_itinerary_heading">
                      Cancellation & Date Change
                    </Typography>
                    <Typography className="passenger_time" my={1}>
                      Package Cancellation Policy
                    </Typography>
                  </Box>
                  <Box>
                    <Box>
                      <Typography className="CANCELLATION">
                        CANCELLATION & DATE CHANGE
                      </Typography>
                    </Box>
                    <Box>
                      <Typography className="content">
                        How much will it cost to cancel or change the start date
                        after making a booking?
                      </Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography className="Package">
                        Package Cancellation Policy
                      </Typography>
                      <Typography className="Package">
                        Cancellation & Charges:
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography className="Cancellation">
                          Cancellation Time
                        </Typography>
                        <Typography className="Time">Till 03 Feb 23</Typography>
                        <Typography className="Time">
                          After 03 Feb 23
                        </Typography>
                      </Box>
                      <Box>
                        <Typography className="Cancellation">
                          Cancellation Charges
                        </Typography>
                        <Typography className="Charges">
                          ₹2,000 Cancellation Fee
                        </Typography>
                        <Typography className="Charges">
                          Non Refundable
                        </Typography>
                      </Box>
                    </Box>
                    <Box mt={1}>
                      <Typography className="Note">
                        {onePackage?.cancellation_Policy}
                      </Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography className="Package">
                        Package Date Change Policy
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box mt={1}>
                        <Typography className="Cancellation">
                          Date Change Possible
                        </Typography>
                        <Typography className="Time">Till 03 Feb 23</Typography>
                        <Typography className="Time">
                          After 03 Feb 23
                        </Typography>
                      </Box>
                      <Box mt={1}>
                        <Typography className="Cancellation">
                          Date Change
                        </Typography>
                        <Typography className="Charges">
                          ₹0 Date Change Fee
                        </Typography>
                        <Typography className="Charges">
                          Date cannot be changed
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="baseline" mt={2}>
                    <Box>
                      <div className="dotted"></div>
                    </Box>
                    <Box ml={1}>
                      <Typography className="paragrapph">
                        {onePackage?.term_Conditions}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="baseline">
                    <Box>
                      <div className="dotted"></div>
                    </Box>
                    <Box ml={1}>
                      <Typography className="paragrapph">
                        Data change fees don't include any fare change in the
                        components on the new date.
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="baseline">
                    <Box>
                      <div className="dotted"></div>
                    </Box>
                    <Box ml={1}>
                      <Typography className="paragrapph">
                        Fare difference as applicable will be charged
                        separately. Date change will depend on the availability
                        of the components on the requested date.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} xs={12} lg={3}>
                <Box
                  className="border_left"
                  sx={{
                    position: "sticky",
                    top: "120px", // Adjust the top value as needed
                    zIndex: 1, // Adjust the z-index if necessary
                    backgroundColor: "white", // Add a background color if desired
                    borderRadius: "20px",
                    padding: "20px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow for a visual effect
                  }}
                >
                  <Box mt={1}>
                    <Typography className="Holiday">
                      Your Holiday Package
                    </Typography>
                    <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <img src={building} />
                    </Box>
                    <Box>
                      <Typography className="holiday_Package" ml={1}>
                        {/* New Delhi To Kerela */}
                        {onePackage?.pakage_title}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <img src={night} />
                    </Box>
                    <Box>
                      <Typography className="holiday_Package" ml={1}>
                        {/* 4 Night(s) (05 Feb-08 Feb, 2023) */}
                        {`${onePackage?.days - 1}Night(s) / ${
                          onePackage?.days
                        }Days(s)`}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <img src={beds} />
                    </Box>
                    <Box>
                      <Typography className="holiday_Package" ml={1}>
                        1 Room(s)
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <img src={unitednations} />
                    </Box>
                    <Box>
                      <Typography className="holiday_Package" ml={1}>
                        Indian
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <img src={addgroup} />
                    </Box>
                    <Box>
                      <Typography className="holiday_Package" ml={1}>
                        {addGuests} Adult(s)
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <img src={review} />
                    </Box>
                    <Box>
                      <Typography className="holiday_Package" ml={1}>
                        5 Star or more
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
                  <Box>
                    <Typography className="package_text">
                      ₹{onePackage?.pakage_amount?.amount + 750}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="package_text_color">
                      {totalPrice}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="package_person">
                      per person* <br /> (*Excluding applicable taxes)
                    </Typography>
                  </Box>
                  <Box mt={1} display="flex" justifyContent="center">
                    {/* <HolidayButton
                    type="submit"
                    onClick={() => navigate("/HolidayPassengerDetail")}
                    className="btn_proceed"
                    variant="contained"
                  >
                    Proceed To Book Online
                  </HolidayButton> */}
                    <HolidayButton
                      variant="contained"
                      type="submit"
                      style={{ borderRadius: "10px" }}
                      disabled={
                        !(
                          guests[0]?.name &&
                          guests[0]?.dob &&
                          guests[0]?.gender &&
                          contact_details.email &&
                          contact_details.contactNumber.phone &&
                          contact_details.departureCity &&
                          contact_details.sale_summary
                        )
                      }
                    >
                      Proceed to Booking Review
                    </HolidayButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style} display="flex" flexDirection="column">
              <Typography
                id="transition-modal-title"
                variant="h4"
                component="h1"
              >
                Thanks You {guests?.[0]?.name}{" "}
                <img src={verifiedGif} alt="confirm Icon" />
              </Typography>
              <Typography
                variant="caption"
                id="transition-modal-description"
                sx={{ mt: 2, color: "gray" }}
              >
                Your booking is confirmed! Thank you for booking{" "}
                {onePackage?.pakage_title} with us . You'll find details of your
                reservation and payment details enclosed below. If you need to
                get in touch, you can email or phone us directly.
              </Typography>
              <Button
                onClick={handleClose}
                variant="contained"
                color="error"
                sx={{ marginTop: "20px" }}
              >
                Close
              </Button>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default PassengerDetailForm;
