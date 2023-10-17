import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from '@mui/material/Checkbox';
import SquareIcon from '@mui/icons-material/Square';
import "./selectseatmodal.css";
import { Grid } from "@mui/material";
import Clickablebutton from "./Clickablebutton";
import flight from "../../../Images/flight.jpeg";


import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <> 
    <Grid
    container
    sx={{
      marginTop: '20px',
      display: "flex",
      alignContent: "start",
      textAlign: "center",
      paddingY: "15px",
    }}
    className="booknowp"
  >
    <Grid md={3} px={6} my={10}>
      <div
        py={5}
        style={{
          boxShadow: "0px 0px 6px gray",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "10px",
          padding: "5px",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          color="#F5F5F5"
          px={1}
          my={2}
        >
          <Checkbox {...label}
            icon={<SquareIcon style={{ color: "#fff", fontSize: "17px" }} />}
            checkedIcon={<SquareIcon style={{ color: "#FF8901", border: "none", fontSize: "17px" }} />} />
          <Box mx={5}>

            <Typography
              fontSize="14px"
              letter-spacing="0px"
              color=" #252525"
            >
              Free
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          color="#F5F5F5"
          px={1}
          my={2}
        >
          <Checkbox {...label}
            icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
            checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
          <Box mx={3}>

            <Typography
              fontSize="14px"
              letter-spacing="0px"
              color=" #252525"
            >
              ₹200 - ₹350
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          color="#F5F5F5"
          px={1}
          my={2}
        >
          <Checkbox {...label}
            icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
            checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
          <Box mx={3}>

            <Typography
              fontSize="14px"
              letter-spacing="0px"
              color=" #252525"
            >
              ₹1200 - ₹1350
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          color="#F5F5F5"
          px={1}
          my={2}
        >
          <Checkbox {...label}
            icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
            checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
          <Box mx={3}>

            <Typography
              fontSize="14px"
              letter-spacing="0px"
              color=" #252525"
            >
              Exit Row Seats
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          color="#F5F5F5"
          px={1}
          my={2}
        >
          <Checkbox {...label}
            icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
            checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
          <Box mx={3}>

            <Typography
              fontSize="14px"
              letter-spacing="0px"
              color=" #252525"
            >
              Non Reclining
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          color="#F5F5F5"
          px={1}
          my={2}
        >
          <Checkbox {...label}
            icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
            checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
          <Box mx={3}>

            <Typography fontSize="14px" color=" #252525">
              Occupied
            </Typography>
          </Box>
        </Box>
      </div>
    </Grid>

    <Grid md={6} >
      <Box overflow="scroll">
        <img src={flight} className="bgimg" />
        <Grid container className="sheetbook" px={22}>
          <Grid md={6}>
            <Box display="flex"
              fontSize="14px"
              paddingRight="20px"
              paddingLeft="25px"
              justifyContent="space-around" >
              <Box>A</Box>
              <Box>B</Box>
              <Box>C</Box>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>1</Typography>

              <Box className="cart" >
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart" >
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart" >
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box display="flex" justifyContent="space-around"
              fontSize="14px"
              paddingRight="25px"
              paddingLeft="10px">
              <Box>D</Box>
              <Box>E</Box>
              <Box>F</Box>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart" >
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart" >
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart" >
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>1</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>2</Typography>
              <Box className="cart" >
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart" >
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart" >
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>2</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>3</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>3</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>4</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>4</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>5</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>5</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>6</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>6</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>7</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>7</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>8</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>8</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>9</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>9</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>10</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>10</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>11</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>11</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>12</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>12</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>13</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>13</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>14</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>14</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>15</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>15</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>16</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>16</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>17</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>17</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>18</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>18</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>19</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>19</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>20</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>20</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>21</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>21</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>22</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>22</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>23</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>23</Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>24</Typography>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Box className="cart">
                <Checkbox {...label}
                  icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                  checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
              </Box>
              <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>24</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>

    <Grid md={3} px={6} my={10}>
      <div
        py={5}
        style={{
          boxShadow: "0px 0px 6px gray",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Box mx={5}>

          <Typography fontSize="14px" color=" #666666">
            Seat Details
          </Typography>
        </Box>
        <Box mx={2} mt={1}>

          <Typography fontSize="14px" color=" #0052D0">
            BOM-DEL(6E-2172)
          </Typography>
        </Box>

        <Box mx={2} display="flex"
          justifyContent="space-between">
          Total
          <Box>
            <Typography fontSize="14px" color=" #FF8900">
              ₹322
            </Typography>
          </Box>
        </Box>
      </div>

      <Box my={2}>
        <Button variant="contained"
          my={1}
          type="submit">
          Continue
        </Button>
      </Box>
    </Grid>
  </Grid>
    </>

  );
}













