import React, { useState } from 'react'
import Box from "@mui/material/Box";
import "./HotelDetailsInfo.css";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles'
import { CiLocationOn } from "react-icons/ci";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const StyledStaticDatePicker = styled(StaticDatePicker)({
  '.MuiPickersToolbar-root': {
    color: '#bbdefb',
    borderRadius: 3,
    borderWidth: 0,
    borderColor: '#2196f3',
    border: '0px solid',
    backgroundColor: '#0d47a1',
    width: '300px !important',
  }
})




const HotelDetailsInfo = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingState, setIsLoadingState] = useState(0)
  const [MonthDayInEnglish1, setMonthDayInEnglish1] = useState("NOV Saturday")
  const [MonthDayInEnglish2, setMonthDayInEnglish2] = useState("NOV Saturday")
  const [date, setDate] = React.useState("2023-11-22");
  const [oldDate, setOldDate] = React.useState("2023-11-22");
  // const date = new Date()
  async function handleMonthDayInEnglish1(e) {
    // await setDate(e.target.value)
    await setDate(`${e.$y}-${e.$M + 1}-${e.$D}`)
    const new1 = await getMonthDayInEnglish(date)
    await setMonthDayInEnglish1(new1)
    console.log(e, date, new1, "////////////////////////////////////////////////////////////////////////")
    // setDate({ e }); // Update the departure date


  }
  function getMonthDayInEnglish(dateString) {
    // Parse the input date string
    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    // Create a Date object
    const date = new Date(year, month - 1, day);

    // Get the month and day names
    const monthNames = [
      'JAN', 'FEB', 'MAR', 'APR', 'MRY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // const d = new Date();
    let day1 = weekday[date.getDay()];
    const monthName = monthNames[date.getMonth()];
    const dayName = date.getDate();

    // Return the result
    return `${monthName} ${day1}`;
  }

  return (
    <div id='container' >
      <div className='container-left' >
        <div onMouseEnter={() => {
          setIsLoading(true)

          setIsLoadingState(1)
          // handleOpen1()
        }}
          onMouseLeave={() => {
            setIsLoading(false)
            setIsLoadingState(0)
          }}>
          <h4>City, Property Name Or Location</h4>
          <h1>Delhi</h1>
        </div>
        <div className='loading' onMouseEnter={() => {
          setIsLoading(true)

          setIsLoadingState(2)
          // handleOpen1()
        }}
          onMouseLeave={() => {
            setIsLoading(false)
            setIsLoadingState(0)
          }}>
          <h1>
            Check-In
          </h1>
          <div
            className="loading1 loading-inner"
          >
            {isLoading && isLoadingState === 2 && <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  'DatePicker',
                  'MobileDatePicker',
                  'DesktopDatePicker',
                  'StaticDatePicker',
                ]}
              >


                <StaticDatePicker sx={{
                  '.MuiPickersToolbar-root': {
                    color: '#bbdefb',
                    borderRadius: 3,
                    borderWidth: 0,
                    borderColor: '#2196f3',
                    border: '0px solid',
                    backgroundColor: '#0d47a1',

                  },
                }}
                  defaultValue={dayjs(date)}
                // selected={dayjs(date)}
                // onChange={handleMonthDayInEnglish1}
                // min={disablePastDate()}
                // minDate={new Date()} 
                />

              </DemoContainer>
            </LocalizationProvider>}
            {/* {isLoading && isLoadingState === 2 && <input
                      type="Date"
                      name="departure"
                      id="departure1"
                      className="deaprture_input"
                      value={date}
                      onChange={handleMonthDayInEnglish1}
                      min={disablePastDate()}

                    />} */}
          </div>
        </div>
        <div className='loading' onMouseEnter={() => {
          setIsLoading(true)

          setIsLoadingState(3)
          // handleOpen1()
        }}
          onMouseLeave={() => {
            setIsLoading(false)
            setIsLoadingState(0)
          }}>
          <h1>

            Check-Out
          </h1>
          <div
            className="loading1 loading-inner"
          >
            {isLoading && isLoadingState === 3 && <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  'DatePicker',
                  'MobileDatePicker',
                  'DesktopDatePicker',
                  'StaticDatePicker',
                ]}
              >


                <StaticDatePicker sx={{
                  '.MuiPickersToolbar-root': {
                    color: '#bbdefb',
                    borderRadius: 3,
                    borderWidth: 0,
                    borderColor: '#2196f3',
                    border: '0px solid',
                    backgroundColor: '#0d47a1',

                  },
                }}
                  defaultValue={dayjs(date)}
                // selected={dayjs(date)}
                // onChange={handleMonthDayInEnglish1}
                // min={disablePastDate()}
                // minDate={new Date()} 
                />

              </DemoContainer>
            </LocalizationProvider>}
            {/* {isLoading && isLoadingState === 2 && <input
                      type="Date"
                      name="departure"
                      id="departure1"
                      className="deaprture_input"
                      value={date}
                      onChange={handleMonthDayInEnglish1}
                      min={disablePastDate()}

                    />} */}
          </div>
        </div>
        <div onMouseEnter={() => {
          setIsLoading(true)

          setIsLoadingState(4)
          // handleOpen1()
        }}
          onMouseLeave={() => {
            setIsLoading(false)
            setIsLoadingState(0)
          }}>
          <h1>

            Rooms & Guests
          </h1>
        </div>
      </div>
      <div className='btn-search'>
        <Button id="btn-ht-search"
        // type="submit"
        // onClick={()=>console.log(values,"%%%%%%%%%%%5")}

        >
          Search
        </Button>
      </div>





      {/* <div
       className="container "
       >
        <div className="row">
          <Box style={{}}>
            <div className="col-md-12">

              <Box
                sx={{ backgroundColor: "white", borderRadius: "20px", padding: "10px 55px" }}
              >
                <form action="">
                  <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "40px" }} className="row">
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
                        <button style={{ fontSize: "18px", marginTop: "10px" }} path="" className="search">
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
      </div> */}
    </div>
  )
}

export default HotelDetailsInfo
