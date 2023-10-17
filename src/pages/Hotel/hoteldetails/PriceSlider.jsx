import React, { useState, useEffect } from "react";
import { Stack, Typography, Slider, TextField } from "@mui/material";

export default function PriceSlider() {
  const [minNum, setMinNum] = useState(0);
  const [maxNum, setMaxNum] = useState(10000);
  const minmin = 0;
  const maxmax = 10000;
  const [priceRangeValue, setPriceRangeValue] = useState([0, 10000]);

  const handlePriceRangeChange = (event, newValue) => {
    setMinNum(newValue[0]);
    setMaxNum(newValue[1]);
    setPriceRangeValue(newValue);
  };

  console.log(priceRangeValue);

  return (
    <>
      <Slider style ={{color:"#FF8900"}}
        getAriaLabel={() => "Price range"}
        value={priceRangeValue}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={minmin}
        max={maxmax}
      />
      <Stack direction="row" justifyContent="space-evenly" alignItems="center">
        <TextField
          type="number"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ width: "90px"  }}
          value={minNum}
          onChange={(e) => {
            setMinNum(Number(e.target.value));
            setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]);
          }}
        />
        <TextField
          type="number"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ width: "90px" }}
          value={maxNum}
          onChange={(e) => {
            setMaxNum(Number(e.target.value));
            setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]);
          }}
        />
      </Stack>
    </>
  );
}


