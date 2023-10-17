import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button, Typograph, useMediaQuery, useTheme, Typography, Avatar } from '@mui/material';
import tra from '../images/tra.png';
import DrawerComp from './DrawerComp';
import Countrypicker from "./Countrypicker";
import { StickyHeader } from './Header';
import { Link, NavLink } from "react-router-dom";
import STLogo from '../images/ST-Main-Logo.png';

const PAGES = ["Home", "About Us", "Contact Us", "Products"];
const Header = () => {

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    return (
        <React.Fragment>
            <StickyHeader  />
            <AppBar sx={{ backgroundColor: "#1c1a1aa5" }}>
                <Toolbar>

                    {/* <img src={STLogo} width="250px" height="100px"/> */}
                    <div >
          <Link to="/">
            <img src={STLogo} alt="Logo" width="200px" />
          </Link>
        </div>

                    {
                        isMatch ? (
                            <>
                                <DrawerComp />
                            </>
                        ) : (
                            <>


                                <Tabs sx={{ marginLeft: "auto" }}><Countrypicker /></Tabs>

                            </>
                        )
                    }
                </Toolbar>

            </AppBar>
        </React.Fragment>
    );
};

export default Header;