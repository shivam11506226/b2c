import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper, Radio, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./popularfilter.css"
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Priceslider from "./Priceslider";
import Searchtab from "./Searchtab";
import Selectflight from "./Selectflight";
import Rangeslide from "./Rangeslide";
import Viewpricebtn from "./Viewpricebtn";
import "./searchresult.css";
function valuetext(value) {
  return `${value}°C`;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Popularfilter = (props) => {
  const [value, setValue] = React.useState("1");

  return (
    <section>
      <div style={{ width: "95%", margin: "5px auto" }}>
        <div className="row popular_content">
          <div className="col-12">
            <div className="row" style={{ display: "flex" }}>
              <div className="col-md-3 fixed_row">
                <div className="leftsection" >
                  
                  <Typography pt={1} px={5} className="filter">
                  Select Filters
                  </Typography>
                  <Typography pt={1} px={5} className="suggest" >
                    Suggested for you
                  </Typography>
                  <Box pl={3} display="block">
                    <form action="">
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                      Non Stop
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                         Prenoon Departure
                      </div>

                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                      indiGo
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                      Vistara
                      </div>
                     
                    
                      
                     
                    </form>
                  </Box>
                 
                
                 
                 
                  {/* <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginY: "15px",
                      marginX: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      href="#contained-buttons"
                      size="large"
                      className="Bton_filter"
                      sx={{
                        background: "white",
                        color: "gray",
                        boxShadow: "2px 2px 8px gray",
                        borderRadius: "20px",
                        fontSize: "9px",
                      }}
                      mt={5}
                    >
                      Direct
                    </Button>
                    <Button
                      variant="contained"
                      href="#contained-buttons"
                      size="large"
                      className="Bton_filter"
                      sx={{
                        background: "white",
                        color: "gray",
                        boxShadow: "2px 2px 8px gray",
                        borderRadius: "20px",
                        fontSize: "9px",
                      }}
                      mt={5}
                    >
                      1 Stop
                    </Button>
                  </Box> */}
                  {/* <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginY: "15px",
                      marginX: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      href="#contained-buttons"
                      size="large"
                      className="Bton_filter"
                      sx={{
                        background: "white",
                        color: "gray",
                        boxShadow: "2px 2px 8px gray",
                        borderRadius: "20px",
                        fontSize: "9px",
                      }}
                      mt={5}
                    >
                      2+ Stops
                    </Button>
                  </Box> */}
                  <Divider sx={{ backgroundColor: "gray" }} />
                  <Typography pt={1} px={5}>
                    One Way Price
                  </Typography>
                  <Box sx={{ width: 300 }} px={3}>
                    <Rangeslide />
                  </Box>
                  <Divider sx={{ backgroundColor: "gray" }} />
                  <Typography pt={1} px={5}>
                    Departure from New Delhi
                  </Typography>
                  <Box pl={3} display="block" >
                    <form action="">
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Before 6AM
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                         6 AM-12 PM
                      </div>

                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                       12 PM-6 PM
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                       After 6 PM
                      </div>
                     
                    
                      
                     
                    </form>
                  </Box>
                  <Typography pt={1} px={5}>
                     Airlines
                  </Typography>
                  <Box pl={3} display="block">
                    <form action="">
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Air India (9)
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                       Air India Express (1)
                      </div>

                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Air Asia (7)
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                      AKasa Air (3)
                      </div>
                     
                      
                     
                     
                    </form>
                  </Box>
                </div>
              </div>
              <div className="col-md-9 scroll_item">
                <Box className="rightslide">
                  <Priceslider />
                </Box>
                {/* <Box sx={{ backgroundColor: "white" }} my={3}>
                  <Searchtab />
                </Box> */}
                <Box my={3}>
                  <Selectflight />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popularfilter;
