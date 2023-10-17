import React from 'react'
import Box from "@mui/material/Box";


const HotelDetailsInfo = () => {
  return (
    <div>
    <div className="container ">
      <div className="row">
      <Box style={{}}>
      <div className="col-md-12">
    
                  <Box
                    sx={{ backgroundColor: "white", borderRadius: "20px",padding:"10px 55px" }}
                  >
                    <form action="">
                      <div style={{marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"center",paddingRight:"40px"}} className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                          <div className="form_input">
                            <label for="from" className="form_lable">
                              City, Property Name Or Location
                            </label>
                            <select
                              name=""
                              id=""
                              style={{
                                width: "100%",
                                borderRadius: "20PX",
                                height: "5rem",
                                border: "3px solid #70707069",
                                paddingLeft: "25px",
                              }}
                            >
                              <option mx={5}>Enter City or airport </option>
                              <option
                                px={5}
                                sx={{ fontSize: "9px", fontWeight: "bold" }}
                              >
                                hello1
                              </option>
                              <option px={5}>hello2</option>
                              <option px={5}>hello3</option>
                              <option mx={5}>hello4</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                            <label for="departure" className="form_lable">
                              CHECK-IN
                            </label>

                            <input
                              type="date"
                              name="departure"
                              id="departure"
                              className="deaprture_input"
                              placeholder="Enter city or airport"
                            ></input>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                            <label className="form_lable">CHECK-OUT</label>
                            <input
                              type="date"
                              name="departure"
                              id="departure"
                              className="deaprture_input"
                              placeholder="Enter city or airport"
                            ></input>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                          <div className="form_input">
                            <label for="to" className="form_lable">
                              Room & Guest
                            </label>
                            <input type="text" placeholder="1 Room 2 Adults" />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                          <div className="form_input">
                          <button style={{fontSize:"18px",marginTop:"10px"}} path="" className="search">
                          Update Search
                          </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Box>
                 
              
      </div>
      </Box>
    </div>
    </div>
    </div>
  )
}

export default HotelDetailsInfo
