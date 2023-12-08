import React, { useState } from "react";
import axios from "axios";
import "./holidayinfo.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #304782",
  boxShadow: 24,
  p: 4,
};
function Holidayinfo() {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    contact_number: "",
    departure_city: "",
    number_of_people: Number(),
    departure_date: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setOpenModal((prev) => !prev);
   
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const enquiryPayload = {
      email: formData.email,
      fullname: formData.fullname,
      contact_number: formData.contact_number,
      departure_city: formData.departure_city,
      number_of_people: formData.number_of_people,
      departure_date: formData.departure_date,
    };
    const res = await axios({
      method: "post",
      url: "https://crm.theskytrails.com/enquiry_form/",
      data: enquiryPayload,
      config: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
     setFormData({
       email: "",
       fullname: "",
       contact_number: "",
       departure_city: "",
       number_of_people: Number(),
       departure_date: "",
     });
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <button id="send_enquiry" onClick={() => setOpenModal((prev) => !prev)}>
        Send Enquiry for booking
      </button>
      <div>
        <div className="header-containerpack">
          <div className="title">
            Dubai - Travel Solo not Alone, Group trips for Solo Travellers
          </div>
          <div className="duration-container">
            <div className="duration-badge">
              <div className="duration-text">5D / 4N</div>
            </div>
          </div>
        </div>
        <div className="packagedetails">
          <div className="packagedetailsleft">
            <div className="component-containerpackages">
              <div className="icon-containerpackagess">
                <div className="icon-backgroundpackess">
                  <div className="iconpackess">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="39"
                      viewBox="0 0 34 39"
                      fill="none"
                    >
                      <path
                        opacity="0.6"
                        d="M28.314 28.3347L19.828 36.8273C19.4569 37.1991 19.0162 37.494 18.5311 37.6952C18.046 37.8964 17.5261 38 17.001 38C16.4759 38 15.956 37.8964 15.4709 37.6952C14.9858 37.494 14.5451 37.1991 14.174 36.8273L5.68601 28.3347C3.44845 26.0953 1.92468 23.2421 1.30738 20.136C0.690086 17.0299 1.00699 13.8104 2.21801 10.8846C3.42904 7.95872 5.4798 5.45796 8.11097 3.69853C10.7421 1.93909 13.8355 1 17 1C20.1645 1 23.2579 1.93909 25.889 3.69853C28.5202 5.45796 30.571 7.95872 31.782 10.8846C32.993 13.8104 33.3099 17.0299 32.6926 20.136C32.0753 23.2421 30.5516 26.0953 28.314 28.3347Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        left="10"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M14.6452 8.0859C14.6452 9.89734 13.9511 11.6346 12.7156 12.9155C11.48 14.1963 9.80429 14.9159 8.05699 14.9159C6.30968 14.9159 4.63393 14.1963 3.3984 12.9155C2.16286 11.6346 1.46875 9.89734 1.46875 8.0859C1.46875 6.27446 2.16286 4.53721 3.3984 3.25633C4.63393 1.97545 6.30968 1.25586 8.05699 1.25586C9.80429 1.25586 11.48 1.97545 12.7156 3.25633C13.9511 4.53721 14.6452 6.27446 14.6452 8.0859Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </svg>
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>
              <div className="text-containerpackess">
                <div className="titlepackess">Dubai Marina</div>
                <div className="subtitlepackess">(Dubai)</div>
              </div>
            </div>
            <div className="main-container">
              <div className="title">Discover the best of Dubai</div>
              <div className="image-container">
                <div className="image-item lavish-cruise">
                  <img
                    className="main-imagepackage"
                    src="https://via.placeholder.com/142x142"
                    alt="Lavish Cruise"
                  />
                  <div className="overlay">
                    <img
                      className="icon"
                      src="https://via.placeholder.com/68x68"
                      alt="Icon"
                    />
                  </div>
                  <div className="circle"></div>
                  <div className="text">Lavish Cruise</div>
                </div>
                <div className="image-item best-sightseeing">
                  <img
                    className="main-imagepackage"
                    src="https://via.placeholder.com/142x142"
                    alt="Best Sightseeing"
                  />
                  <div className="overlay">
                    <img
                      className="icon"
                      src="https://via.placeholder.com/68x68"
                      alt="Icon"
                    />
                  </div>
                  <div className="circle"></div>
                  <div className="text">Best Sightseeing</div>
                </div>
                <div className="image-item fun-activities">
                  <img
                    className="main-imagepackage"
                    src="https://via.placeholder.com/142x142"
                    alt="15+ Fun Activities"
                  />
                  <div className="overlay">
                    <img
                      className="icon"
                      src="https://via.placeholder.com/68x68"
                      alt="Icon"
                    />
                  </div>
                  <div className="circle"></div>
                  <div className="text">15+ Fun Activities</div>
                </div>
              </div>
            </div>
            <div className="main-containerpackage1">
              <div className="content-container">
                <div className="category-container">
                  <div className="category">
                    <div className="icon-containerpackage">
                      <div className="icon-background"></div>
                      <div className="icon"></div>
                    </div>
                    <div className="textholiday">Best Sightseeing</div>
                  </div>
                  <div className="category">
                    <div className="icon-containerpackage">
                      <div className="icon-background"></div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <mask
                            id="mask0_646_13638"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="25"
                          >
                            <rect
                              y="0.5"
                              width="24"
                              height="24"
                              fill="#D9D9D9"
                            />
                          </mask>
                          <g mask="url(#mask0_646_13638)">
                            <path
                              d="M11.4 9.5H19.4C18.95 8.35 18.2625 7.3625 17.3375 6.5375C16.4125 5.7125 15.35 5.13333 14.15 4.8L11.4 9.5ZM9.1 11.5L13.1 4.6C12.9167 4.56667 12.7333 4.54167 12.55 4.525C12.3667 4.50833 12.1833 4.5 12 4.5C10.9 4.5 9.875 4.70833 8.925 5.125C7.975 5.54167 7.13333 6.1 6.4 6.8L9.1 11.5ZM4.25 14.5H9.7L5.7 7.6C5.16667 8.28333 4.75 9.0375 4.45 9.8625C4.15 10.6875 4 11.5667 4 12.5C4 12.85 4.02083 13.1875 4.0625 13.5125C4.10417 13.8375 4.16667 14.1667 4.25 14.5ZM9.85 20.2L12.55 15.5H4.6C5.05 16.65 5.7375 17.6375 6.6625 18.4625C7.5875 19.2875 8.65 19.8667 9.85 20.2ZM12 20.5C13.1 20.5 14.125 20.2917 15.075 19.875C16.025 19.4583 16.8667 18.9 17.6 18.2L14.9 13.5L10.9 20.4C11.0833 20.4333 11.2625 20.4583 11.4375 20.475C11.6125 20.4917 11.8 20.5 12 20.5ZM18.3 17.4C18.8333 16.7167 19.25 15.9625 19.55 15.1375C19.85 14.3125 20 13.4333 20 12.5C20 12.15 19.9792 11.8125 19.9375 11.4875C19.8958 11.1625 19.8333 10.8333 19.75 10.5H14.3L18.3 17.4ZM12 22.5C10.6333 22.5 9.34167 22.2375 8.125 21.7125C6.90833 21.1875 5.84583 20.4708 4.9375 19.5625C4.02917 18.6542 3.3125 17.5917 2.7875 16.375C2.2625 15.1583 2 13.8667 2 12.5C2 11.1167 2.2625 9.82083 2.7875 8.6125C3.3125 7.40417 4.02917 6.34583 4.9375 5.4375C5.84583 4.52917 6.90833 3.8125 8.125 3.2875C9.34167 2.7625 10.6333 2.5 12 2.5C13.3833 2.5 14.6792 2.7625 15.8875 3.2875C17.0958 3.8125 18.1542 4.52917 19.0625 5.4375C19.9708 6.34583 20.6875 7.40417 21.2125 8.6125C21.7375 9.82083 22 11.1167 22 12.5C22 13.8667 21.7375 15.1583 21.2125 16.375C20.6875 17.5917 19.9708 18.6542 19.0625 19.5625C18.1542 20.4708 17.0958 21.1875 15.8875 21.7125C14.6792 22.2375 13.3833 22.5 12 22.5Z"
                              fill="#071C2C"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="textholiday">Safe to Travel</div>
                  </div>
                  <div className="category">
                    <div className="icon-containerpackage">
                      <div className="icon-background"></div>
                      <div className="icon"></div>
                    </div>
                    <div className="textholiday">World Famous Beaches</div>
                  </div>
                  <div className="category">
                    <div className="icon-containerpackage">
                      <div className="icon-background"></div>
                      <div className="icon"></div>
                    </div>
                    <div className="textholiday">
                      Special Dubai Food Cuisine
                    </div>
                  </div>
                </div>
                <div className="category-container">
                  <div className="category">
                    <div className="icon-containerpackage">
                      <div className="icon-background"></div>
                      <div className="icon"></div>
                    </div>
                    <div className="textholiday">
                      Certified Experienced Guide
                    </div>
                  </div>
                  <div className="category">
                    <div className="icon-containerpackage">
                      <div className="icon-background"></div>
                      <div className="icon"></div>
                    </div>
                    <div className="textholiday">Luxurious Cruise</div>
                  </div>
                  <div className="category">
                    <div className="icon-containerpackage">
                      <div className="icon-background"></div>
                      <div className="icon"></div>
                    </div>
                    <div className="textholiday">Free Cab Services</div>
                  </div>
                  <div className="category">
                    <div className="icon-containerpackage">
                      <div className="icon-background"></div>
                      <div className="icon"></div>
                    </div>
                    <div className="textholiday">Top Hotels for Stay</div>
                  </div>
                </div>
              </div>
              <div className="view-all-container">
                <div className="view-all-text">VIEW ALL HIGHLIGHTS</div>
              </div>
            </div>
            <div className="main-containeroveriew">
              <div className="overview-containerover">
                <div className="titleover">Overview</div>
                <div className="descriptionoveriew">
                  Welcome to Dubai, the land of amazing and modern skyscrapers,
                  the Arabian desert, adrenaline rush experiences, shopping at
                  the Dubai Mall, the Palm Jumeirah, Burj Al Arab, and of
                  course, the Burj Khalifa. We take you on an enthralling tour
                  giving you an experience of sand dunes, cultural shows,
                  underwater encounters, musical fountains, and last but not
                  least, the view of the majestic Dubai skyline from the 24th
                  floor of Burj Khalifa, an experience of a lifetime.
                </div>
              </div>
            </div>
          </div>
          <div className="packagedetailsright">
            <div className="main-containerprice">
              <img
                src="https://via.placeholder.com/304x163"
                alt="Package"
                className="package-imageprice"
              />
              <div className="content-containerprice">
                <div className="titleprice">Luxurious Dubai Solo Trip</div>
                <div className="featuresprice">
                  <div className="featureprice">
                    <div className="icon non-refundable"></div>
                    <div className="textprice">Non-Refundable</div>
                    <div className="icon free-breakfast"></div>
                    <div className="textprice">Free Breakfast</div>
                  </div>
                </div>
                <div className="price-containerprice">
                  <div className="discounted-prices">&#8377; 50,450</div>
                  <div className="original-priceses">&#8377; 42,250</div>
                  <div className="price-per-person">Per Person</div>
                </div>
              </div>
              <div className="action-containerprice">
                <div className="view-other-packages">VIEW OTHER PACKAGES</div>
                <div className="arrow-iconprice"></div>
              </div>
              <div className="confirm-button">CONFIRM THIS PACKAGE NOW</div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />

            <label>
              Full Name:
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
              />
            </label>
            <br />

            <label>
              Contact Number:
              <input
                type="text"
                name="contact_number"
                value={formData.contact_number}
                onChange={handleInputChange}
              />
            </label>
            <br />

            <label>
              Departure City:
              <input
                type="text"
                name="departure_city"
                value={formData.departure_city}
                onChange={handleInputChange}
              />
            </label>
            <br />

            <label>
              Number of People:
              <input
                type="number"
                name="number_of_people"
                value={formData.number_of_people}
                onChange={handleInputChange}
              />
            </label>
            <br />

            <label>
              Departure Date:
              <input
                type="date"
                name="departure_date"
                value={formData.departure_date}
                onChange={handleInputChange}
              />
            </label>
            <br />

            <button type="submit">Submit</button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Holidayinfo;
