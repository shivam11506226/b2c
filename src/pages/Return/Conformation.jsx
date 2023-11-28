import React from "react";
import "./conformation.css";
import FlightSummary from "./FlightSummary";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Conformation() {
  const navigate = useNavigate();
  function handleButtonClick() {
    navigate("/paymentReturn");
  }
  return (
    <div>
      <div className="booking-header-container">
        <div className="booking-title">
          <div>Complete your Booking</div>
        </div>
      </div>
      <div className="containercon">
        <div className="flightsummary">
          <div class="left">
            <FlightSummary />
            <div className="travellerDetailsContainer">
              <div className="travellerInfoContainer">
                <div className="titleText">Traveller Details</div>
                <div className="travellerName">ADITYA SINGH KANWAL</div>
              </div>
              <div className="detailsContainer">
                {/* <div className="iconContainer">
          <div className="iconBackground"></div>
          <div className="icon"></div>
        </div> */}
              </div>
            </div>
            <div className="agreementTextContainer">
              <span className="text">
                By continuing to pay, I understand and agree with the{" "}
              </span>
              <span className="policyLink">privacy policy</span>
              <span className="text">, the </span>
              <span className="agreementLink">user agreement</span>
              <span className="text"> and </span>
              <span className="termsLink">terms of service</span>
              <span className="text"> of TheSkytrails.</span>
            </div>
           
          </div>
          <div class="right">
            <div className="fare-summary-container">
              <div className="fare-summary-title">Fare Summary</div>
              <div className="fare-details">
                <div className="fare-details-row">
                  <div className="fare-details-label">Base Fare</div>
                  <div className="fare-details-value">₹69,500</div>
                </div>
                <div className="fare-details-row">
                  <div className="fare-details-label">Taxes & Surcharges</div>
                  <div className="fare-details-value">₹12,510</div>
                </div>
                <div className="fare-details-total">
                  <div className="fare-details-label">
                    Total Amount to be paid
                  </div>
                  <div className="fare-details-value">₹82,015</div>
                </div>
              </div>
            </div>
          
          </div>
          
        </div>
        <div className="proceedToPayButtonContainer">
              <div className="buttonText">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#E73C33",

                    borderRadius: "16px",
                    marginTop: "16px",
                    boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.30)",
                  }}
                  onClick={handleButtonClick}
                >
                  Proceed To PAY
                </Button>
              </div>
            </div>
        {/* Add other components as needed */}
      </div>
    </div>
  );
}

export default Conformation;
