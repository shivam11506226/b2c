// FlightSummary.jsx

import React from "react";
import "./FlightSummary.css"; // Import the external CSS file

const FlightSummary = () => {
  return (
    <div className="flightSummaryContainer">
      <div className="titleContainer">
        <div>
          <div className="titleText1">Flight Summary</div>
        </div>
        <div className="titleSeparator"></div>
      </div>
      <div className="summaryDetails">
      
          <div className="flightDetailsItem">
            <div className="locationContainer">
              <div className="cityName">New Delhi</div>
              <div className="iconContainer">
                <div className="iconBackground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <mask
                      id="mask0_389_44155"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="28"
                      height="28"
                    >
                      <rect width="28" height="28" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_389_44155)">
                      <path
                        d="M16.3307 21L14.6974 19.3083L18.8391 15.1667H4.66406V12.8333H18.8391L14.6974 8.69167L16.3307 7L23.3307 14L16.3307 21Z"
                        fill="#071C2C"
                      />
                    </g>
                  </svg>
                </div>
                <div className="icon"></div>
              </div>
              <div className="cityName">Bengaluru</div>
            </div>
            <div className="flightInfoContainer">
              <div className="infoText">Thursday, Oct20</div>
              <div className="infoSeparator"></div>
              <div className="infoText">1 Stop</div>
              <div className="infoSeparator"></div>
              <div className="infoText">7h 25m</div>
            </div>
        
        </div>

        {/* Add more flight details as needed */}
      </div>
      <div className="summaryDetails">
        <div className="flightDetailsContainer">
          <div className="flightDetailsItem">
            <div className="locationContainer">
              <div className="cityName">Bengaluru</div>
              <div className="iconContainer">
                <div className="iconBackground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <mask
                      id="mask0_389_44155"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="28"
                      height="28"
                    >
                      <rect width="28" height="28" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_389_44155)">
                      <path
                        d="M16.3307 21L14.6974 19.3083L18.8391 15.1667H4.66406V12.8333H18.8391L14.6974 8.69167L16.3307 7L23.3307 14L16.3307 21Z"
                        fill="#071C2C"
                      />
                    </g>
                  </svg>
                </div>
                <div className="icon"></div>
              </div>
              <div className="cityName">New Delhi</div>
            </div>
            <div className="flightInfoContainer">
              <div className="infoText">Friday, Nov13</div>
              <div className="infoSeparator"></div>
              <div className="infoText">1 Stop</div>
              <div className="infoSeparator"></div>
              <div className="infoText">3h 25m</div>
            </div>
          </div>
        </div>

        {/* Add more flight details as needed */}
      </div>
      
    </div>
  );
};

export default FlightSummary;
