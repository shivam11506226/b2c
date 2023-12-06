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


            <Button  >
                <Popup />
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