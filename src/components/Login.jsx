import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import {LoginButton} from '../utility/CSS/Button/Button'

import { loginAction } from "../Redux/Auth/logIn/actionLogin";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  Form as StyledForms,
  Header,
  Inputs,
  Input,
  Checkbox_Container,
  Input_Checkbox,
  CheckboxText,
  Sign_in_Btn,
} from "../utility/CSS/FormStyle";
import "./card.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1043,
  height: 498,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  zIndex:'99999999999'
};

const signUpStyle = {
  position: "absolute",
  top: "50%",
  transform: "translate(-2%, -50%)",
  left: "50%",
  // bgcolor: "background.paper",
  backdropFilter: "blur(3px)",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  zIndex:'99999999999'
};

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginForm({ isModalOpen, setIsModalOpen }) {
  const dispatch = useDispatch(); 
  const [newReg,setNewReg] = useState(false);
  console.log(isModalOpen )
  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  const [open, setOpen] = React.useState(false);
  const [regOpen, setRegOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // const handleRegOpen = () => setRegOpen(true);
  const handleClose = () => setOpen(false);
  const reducerState = useSelector((state) => state);
  console.error(reducerState)
  const userName = reducerState?.logIn?.loginData?.data?.username
  console.error("login",reducerState?.logIn )
  const authenticUser = reducerState?.logIn?.loginData?.status
  const notAuthenticUser = reducerState?.logIn?.loginData?.userNotFound
  console.error("check user auth",notAuthenticUser);
  const fromData = (data,event) =>{
   
    event.preventDefault();
    const {email,password} = data;
   console.error(email+password);
 const payload = {
    "username": email,
    "password": password
}
   dispatch(loginAction(payload));
   setIsModalOpen(false);
   setOpen(false)

   if(authenticUser === 200){
    setIsModalOpen(false); 
    setOpen(false)
   }else if(notAuthenticUser === true){
     alert("else if part")
    
    console.error("non auth user")
    setNewReg(true)
   }else{
    setOpen(false);
   }
  }
  

  return (
    <div>
      
        <LoginButton
          variant="contained"
          onClick={handleOpen}
        >
           
          <Typography variant="subtitle3" color="#fff"> 
          {/* <span style={{background:'white',color:'black',padding:'10px 13px',borderRadius:'50%'}} >{userName.slice(0,1)}</span>   */}
          {authenticUser === 200 ? <LogoutIcon  sx={{color:'red',marginRight:'8px'}} /> : <AccountCircleIcon sx={{color:'white',marginRight:'8px'}} /> } 

          {authenticUser === 200 ? <>Hi {userName} <p style={{fontSize:'10px',margin:'0',color:'black'}} >Log me out</p> </> : "Login / Signup" }  </Typography>
        </LoginButton>
      
      <Modal
        open={isModalOpen || open }
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{zIndex:'999999'}}
      >
        <Box sx={style} className="background_login ">
          <Grid container spacing={2} alignItems="center">
           
            {
              notAuthenticUser ? (
                <Box display='flex' justifyContent='space-around'>
                  <span>Sign Up</span>
                  <Grid
                xs={6}
                md={6}
                display="flex"
                justifyContent="center"
                textAlign="center"
                alignItem="center"
                sx={signUpStyle} 
              > 
              
                {/* <Form class="form"> */}
               
                  <Inputs class="inputs">
                    <Input placeholder="User Name" class="input" type="text" />
                    <Input placeholder="Your Email" class="input" type="email" />
                    <Input placeholder="Password" class="input" type="password" />
                    <Input placeholder="mobile" class="input" type="text" />
                    
                    <Sign_in_Btn class="sigin-btn">Sign up</Sign_in_Btn>
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold",marginTop:"8px"  }} >Already have Account / <Link href="#" onClick={handleOpen}>Signup</Link></Typography>
   
                    <Typography color='black' fontSize='10px' >By proceeding, you agree to Travvolt <Link href="#" underline="always" color="#FF5733">
                                          {'Privacy Policy'}
                                      </Link> , <Link href="#" underline="always" color="#FF5733">
                                              {'User Agreement'}
                                          </Link> and <Link href="#" underline="always" color="#FF5733">
                                              {'Terms of Service'}
                                          </Link>
                                      </Typography>
                  </Inputs>
                {/* </Form> */}
              </Grid>
                </Box>
             
              ) : (
                <Grid
                xs={6}
                md={6}
                display="flex"
                justifyContent="center"
                textAlign="center"
                alignItem="center"
              >
                <StyledForms>
                <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  // Your form submission logic here
                  // You can access form values via the 'values' parameter
                  const { email, password } = values;
                  console.log(email, password);
  
                  const payload = {
                    username: email,
                    password: password,
                  };
  
                  dispatch(loginAction(payload));
                  setIsModalOpen(false);
                  setOpen(false);
  
                  if (authenticUser === 200) {
                    setIsModalOpen(false);
                    setOpen(false);
                  } else if (notAuthenticUser == true) {
                    alert("else if part");
                    console.error("non auth user");
                    setNewReg(true);
                  } else {
                    alert("else part");
                  }
  
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="form">
                    <Header className="header">Sign In</Header>
                    <Inputs className="inputs">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                       
                        className="error-message"
                      />
  
                      <Field
                        type="password"
                        name="password"
                       
                        placeholder="Password"
                        className="input"
                      />
  
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error-message"
                       
                      />
  
                      <Checkbox_Container className="checkbox-container">
                        {/* ... */}
                      </Checkbox_Container>
  
                      <Sign_in_Btn
                        className="sigin-btn"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Submit
                      </Sign_in_Btn>
                      <a className="forget" href="#">
                        Forget password ?
                      </a>
                      <p className="signup-link">
                        Don't have an account?{" "}
                        <Link navigate="">Sign up</Link>
                      </p>
                    </Inputs>
                  </Form>
                )}
              </Formik>
                </StyledForms>
                
              </Grid>
              )
            }
           
          </Grid>
         
        </Box>

       

      </Modal>

      {/* Register form */}
      {
       newReg && <Modal
       open={regOpen}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
       <Box sx={style} className="background_login ">
         <Grid style={{    marginTop: '-25px'}} container spacing={2} alignItems="center">
           <Grid xs={6} md={6}></Grid>
          
         </Grid>
       </Box>
     </Modal>
      }

    </div>
  );
}
