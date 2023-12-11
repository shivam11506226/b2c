
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper, Radio, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./popularfilter.css"
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Priceslider from "./SwipeToSlide";
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
    <section className="mx-5">
      <div className="contaier-xxl">
        <div className="row">
          <div className="col-lg-3">
            <div className="flightFilterBox">
              <div className="filterTitle">
                <p>Select Filters</p>
              </div>
              <div className="innerFilter">
                <p>Suggested for you</p>
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

                <p>
                  One Way Price
                </p>
                <div>
                  <Rangeslide />
                </div>
                <Divider sx={{ backgroundColor: "gray" }} />
                <p>
                  Departure from New Delhi
                </p>

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

                <p>
                  Airlines
                </p>
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
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            {/* <Box className="rightslide">
              <Priceslider />
            </Box> */}

            <Selectflight />

          </div>
        </div>
      </div>

    </section>
  );
};

export default Popularfilter;
