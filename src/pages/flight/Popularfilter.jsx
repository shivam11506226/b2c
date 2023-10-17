import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper, Radio, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

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
                <div className="leftsection">
                  <Typography justifyContent="center" display="flex" pt={3}>
                    Popular Filter
                  </Typography>
                  <Divider sx={{ backgroundColor: "gray", marginY: "5px" }} />
                  <Typography pt={1} px={5}>
                    Popular Filter
                  </Typography>
                  <Box
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
                      Before 6AM
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
                      6AM-12PM
                    </Button>
                  </Box>
                  <Box
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
                      12PM-6PM
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
                      After 6PM
                    </Button>
                  </Box>
                  <Divider sx={{ backgroundColor: "gray" }} />
                  <Typography pt={1} px={5}>
                    Price
                  </Typography>
                  <Box sx={{ width: 300 }} px={3}>
                    <Rangeslide />
                  </Box>

                  <Divider sx={{ backgroundColor: "gray" }} />
                  <Typography pt={1} px={5}>
                    Stops
                  </Typography>
                  <Box
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
                  </Box>
                  <Box
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
                  </Box>
                  <Divider sx={{ backgroundColor: "gray" }} />
                  <Typography pt={1} px={5}>
                    Onward Duration
                  </Typography>
                  <Box sx={{ width: 300 }} px={3}>
                    <Rangeslide />
                  </Box>
                  <Divider sx={{ backgroundColor: "gray" }} />
                  <Typography pt={1} px={5}>
                    Preferred Airlines
                  </Typography>
                  <Box p={3} display="block">
                    <form action="">
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Akasa Air
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        IndiGo
                      </div>

                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Air India
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Spice Jet
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Vistara
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Go First
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        Alliance Air
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          sx={{
                            borderRadius: "20px",
                            boxShadow: "1px 1px 5px gray",
                            padding: "12px",
                          }}
                        >
                          View All
                        </Button>
                      </div>
                    </form>
                  </Box>
                </div>
              </div>
              <div className="col-md-9 scroll_item">
                <Box className="rightslide">
                  <Priceslider />
                </Box>
                <Box sx={{ backgroundColor: "white" }} my={3}>
                  <Searchtab />
                </Box>
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
