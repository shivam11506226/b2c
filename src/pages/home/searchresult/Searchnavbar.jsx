import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Typograph,
  useMediaQuery,
  useTheme,
  Typography,
  Avatar,
} from "@mui/material";
import tra from "../../../images/tra.png";
import STLogo from "../../../images/ST-Main-Logo.png";
import flights from "../../../images/flights.png";
import homestays from "../../../images/homestays.png";
import hotelpackages from "../../../images/hotelpackages.png";
import bus from "../../../images/bus.png";
import trains from "../../../images/trains.png";
import hotel from "../../../images/hotel.png";
import taxi from "../../../images/taxi.png";
import activites from "../../../images/activites.png";
import pradeep from "../../../images/pradeep.png";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const PAGES = ["Home", "About Us", "Contact Us", "Products"];
const Searchnavbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar
        sx={{
          backgroundColor: "white",
          height: "100px",
          display:'none'
        }}
      >
        <Toolbar
        sx={{
            display: "flex",
            justifyItems: "space-between",
            marginTop:'20px'  
        }}
        >
          <img src={STLogo} width={200} />
          <Stack
            direction="row"
            spacing={2}
            margin="auto"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              className="bton_nav"
              onClick={() => navigate("/")}
              href="#contained-buttons"
              sx={{
                background: "white",
                color: "black",
                boxShadow: "2px 2px 8px gray",
                borderRadius: "20px",
              }}
              mt={5}
            >
              <Avatar alt="Remy Sharp" src={flights} />
              Flight
            </Button>
            <Button
              variant="contained"
              className="bton_nav"
              onClick={() => navigate("/Hotel")}
              href="#contained-buttons"
              sx={{
                background: "white",
                color: "black",
                boxShadow: "2px 2px 8px gray",
                borderRadius: "20px",
              }}
              mt={5}
            >
              <Avatar alt="Remy Sharp" src={hotel} />
              Hotels
            </Button>
          
            <Button
              variant="contained"
              className="bton_nav"
              onClick={() => navigate("/HomeStays")}
              href="#contained-buttons"
              sx={{
                background: "white",
                color: "black",
                boxShadow: "2px 2px 8px gray",
                borderRadius: "20px",
              }}
              mt={5}
            >
              <Avatar alt="Remy Sharp" src={hotelpackages} />
              Holiday Package
            </Button>
          
            <Button
              variant="contained"
              className="bton_nav"
              href="#contained-buttons"
              sx={{
                background: "white",
                color: "black",
                boxShadow: "2px 2px 8px gray",
                borderRadius: "20px",
              }}
              mt={5}
            >
              <Avatar alt="Remy Sharp" src={bus} />
              Bus
            </Button>
         
          </Stack>
          <Stack sx={{ marginLeft: "auto" }}>
            <Button sx={{ color: "#0061A8" }}>
              <Avatar alt="pradeep" src={pradeep} />
              Hii Sir/Mam
            </Button>
          </Stack>
          {/* {
                        isMatch ? (
                            <>
                                <DrawerComp />
                            </>
                        ) : (
                            <>


                                <Tabs sx={{ marginLeft: "auto" }}><Countrypicker /></Tabs>

                            </>
                        )
                    } */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Searchnavbar;
