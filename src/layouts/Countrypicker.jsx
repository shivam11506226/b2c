import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import indianflag from "../images/indianflag.png";
import { Avatar, Tab, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import pradeep from "../images/pradeep.png";
import support from '../images/support.png';
import discount from '../images/discount.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Popup from '../components/Login';
export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button variant='white'>
                <img src={discount} style={{ margin: "10px", width: "26px" }} /> <Typography>Supper Offers<Typography sx={{ fontSize: "9px" }} >Explore Greate Deals & Offers</Typography></Typography>

            </Button>
            <Button variant='white' >
                <img src={support} style={{ margin: "10px", width: "26px" }} /> Support
            </Button>
            {/* <Button variant="contained"  sx={{ backgroundColor: "white", borderRadius:'20px' }} >
                <IconButton sx={{ color:'#254B70' }} aria-label="Login / Signup">
                    <AccountCircleIcon />
                </IconButton> <Typography color='#254B70'>Login / Signup</Typography>
            </Button> */}

            <Button variant='white' >
            <Popup />
            </Button>
            


            <Button variant='white' id='manu' aria-controls={open ? 'menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} >
                <img src={indianflag} style={{ margin: "10px", width: "26px" }} /> Rs.<ArrowDropDownIcon color='white' />
            </Button>

            <Menu
                id="manu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>India</MenuItem>
                <MenuItem onClick={handleClose}>USA</MenuItem>
                <MenuItem onClick={handleClose}>Germony</MenuItem>
            </Menu>
        </div>
    );
}