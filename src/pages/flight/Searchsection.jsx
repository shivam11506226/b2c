import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Typography } from "@mui/material";

import Classselect from "./Classselect";

import Addanothercity from "./Addanothercity";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./searchresult.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Homeform = (props) => {
  const [value, setValue] = React.useState("1");

  const [selectedOption, setSelectedOption] = React.useState("option1");
  console.log(selectedOption);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section>
      <div className="container homeform_container">
        <p className="header_row">
          <h5>{props.header}</h5>
        </p>

      </div>
    </section>
  );
};

export default Homeform;
