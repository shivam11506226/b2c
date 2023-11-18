import ticket from "../../images/ticket.png";
import scan from "../../images/scan.png";
import React from "react";
import { Paper, Box } from "@mui/material";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./download.css";
import "../../components/card.css";
import app from "../../images/app.png";
import google from "../../images/google.png"
const Download = () => {
  return (
    <React.Fragment>
      <section>
        <div className="container homeform_container" >
          <Box pt={3}>
            <Paper elevation={3} py={2} sx={{ borderRadius: "15px"}} >
              {/* <div className="download_header">
                                    <h3>Download App Now !</h3>
                                  
                                </div> */}
              <div
                className="download_info"
                style={{gap:"60px",paddingTop:"20px",paddingBottom:"20px"}}
              >
                <div className="tickets" >
                  <img src={ticket}  className="ticketimg" alt="download App" />
                </div>
                <div className="down">
                  <h3 className="header">Download App Now !</h3>
                  <p className="paragraph">
                    Use code <span style={{color:"#E73C33"}}>WELCOMESKY</span> and get Up to <span style={{color:"#E73C33"}}>Rs.5000 OFF</span>  on your first
                    domestic hotel booking
                  </p>
                  <div
                    className="lastimg"
                    style={{
                    
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <div >
                      {/* Content for the first inner div */}
                      <img
                        src={google}
                        alt=""
                        style={{ width: "140px", height: "65px" }}
                      />
                    </div>
                    <div style={{ paddingTop:"10px" }}>
                      {/* Content for the second inner div */}
                      <img
                        src={app}
                        alt=""
                        style={{ width: "140px", height: "47px" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="scan_wrapper"
                 
                >
                 
                 
                    <img src={scan} className="scan-logo" alt="scan logo" />
                  </div>
                  
              
              </div>
            </Paper>
          </Box>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Download;
