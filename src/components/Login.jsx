import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import "./Login.css"
import loginImg from "../images/login.png"
import Link from "@mui/material/Link";
import { LoginButton } from "../utility/CSS/Button/Button";
import CloseIcon from '@mui/icons-material/Close';
import KeyIcon from '@mui/icons-material/Key';
import { loginAction } from "../Redux/Auth/logIn/actionLogin";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MailIcon from '@mui/icons-material/Mail';
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
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

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
  zIndex: "99999999999",
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
  zIndex: "99999999999",
};

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginForm({ isModalOpen, setIsModalOpen }) {
  const dispatch = useDispatch();
  const [newReg, setNewReg] = useState(false);
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
  console.error(reducerState);
  const userName = reducerState?.logIn?.loginData?.data?.username;
  console.error("login", reducerState?.logIn);
  const authenticUser = reducerState?.logIn?.loginData?.status;
  const notAuthenticUser = reducerState?.logIn?.loginData?.userNotFound;
  console.error("check user auth", notAuthenticUser);
  const fromData = (data, event) => {
    event.preventDefault();
    const { email, password } = data;
    console.error(email + password);
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
    } else if (notAuthenticUser === true) {
      alert("else if part");

      console.error("non auth user");
      setNewReg(true);
    } else {
      setOpen(false);
    }


  };

  return (
    <div>
      <LoginButton onClick={handleOpen}>
        <Typography variant="subtitle3" color="#fff" >
          {/* <span style={{background:'white',color:'black',padding:'10px 13px',borderRadius:'50%'}} >{userName.slice(0,1)}</span>   */}
          {authenticUser === 200 ? (
            <LogoutIcon sx={{ color: "#fff", marginRight: "8px" }} />
          ) : (
            <AccountCircleIcon sx={{ color: "white", marginRight: "8px" }} />
          )}
          {authenticUser === 200 ? (
            <>
              {userName}{" "}
            </>
          ) : (
            "Login / Signup"
          )}{" "}
        </Typography>
      </LoginButton>

      <Modal
        open={isModalOpen || open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ zIndex: "999999" }}
      >

        <div class="login-page">
          <div class="container ">
            {notAuthenticUser ? (
              <div class="row">
                <div class="col-lg-10 offset-lg-1">
                  <div class="bg-white shadow rounded">
                    <div class="row">
                      <div class="col-md-7 pe-0">
                        <div class="form-left h-100 py-5 px-5">
                          <form action="" class="row g-4">
                            <div class="col-12">
                              <label>Username<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                <input type="text" class="form-control" placeholder="Enter Username" />
                              </div>
                            </div>

                            <div class="col-12">
                              <label>Email<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                <input type="email" class="form-control" placeholder="Enter Email" />
                              </div>
                            </div>

                            <div class="col-12">
                              <label>Password<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                <input type="text" class="form-control" placeholder="Enter Password" />
                              </div>
                            </div>

                            <div class="col-sm-6">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                                <label class="form-check-label" for="inlineFormCheck">Remember
                                  me</label>
                              </div>
                            </div>

                            <div class="col-sm-6">
                              <a href="#" class="float-end text-primary">Forgot Password?</a>
                            </div>

                            <div class="col-12">
                              <button type="submit" class="btn btn-primary px-4 float-end mt-4">login</button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="col-md-5 ps-0 d-none d-md-block">
                        <div class="form-right h-100 bg-primary text-white text-center pt-5">
                          <h2 class="fs-1">Sign Up</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div class="row">
                <div class="col-lg-10 offset-lg-1">
                  <div class="bg-white shadow rounded">
                    <div class="row">
                      <div class="col-md-7 pe-0">
                        <div class="form-left h-100 py-5 px-5">
                          <Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
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
                              }
                              // else if (notAuthenticUser == true) {
                              //   alert("else if part");
                              //   console.error("non auth user");
                              //   setNewReg(true);
                              // } else {
                              //   alert("else part");
                              // }

                              setSubmitting(false);
                            }}
                          >
                            {({ isSubmitting }) => (
                              <Form class="row g-4">
                                <div class="col-12">
                                  <label>Email<span class="text-danger">*</span></label>
                                  <div class="input-group">
                                    <div class="input-group-text"><i><MailIcon /></i></div>
                                    <Field type="email" name="email" class="form-control"
                                      placeholder="Enter Email" />
                                  </div>
                                </div>

                                <div class="col-12">
                                  <label>Password<span class="text-danger">*</span></label>
                                  <div class="input-group">
                                    <div class="input-group-text"><i><KeyIcon /></i></div>
                                    <Field type="text" name="password" class="form-control"
                                      placeholder="Enter Password" />
                                  </div>
                                </div>

                                <div class="col-sm-6">
                                  <div class="form-check">
                                    <Field class="form-check-input" type="checkbox" id="inlineFormCheck" />
                                    <label class="form-check-label" for="inlineFormCheck">Remember
                                      me</label>
                                  </div>
                                </div>

                                <div class="col-sm-6">
                                  <Link to="#" class="float-end text-primary">Forgot Password?</Link>
                                </div>

                                <div class="col-12">
                                  <button type="submit" disabled={isSubmitting}
                                    class="btn btn-primaryLogin px-4 float-end mt-4">login</button>
                                </div>


                              </Form>
                            )}
                          </Formik>
                        </div>
                      </div>
                      <div class="col-md-5 ps-0 d-none d-md-block">

                        <div class="form-right leftLogin h-100 text-white text-center pt-5">
                          <h2 class="fs-1">Login</h2>
                          <CloseIcon className="closeIncon" onClick={handleClose} />
                          <div className="loginImg">
                            <img src={loginImg} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>



      </Modal >

      {/* Register form */}

      {
        newReg && (
          <Modal
            open={regOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="background_login ">
              <Grid
                style={{ marginTop: "-25px" }}
                container
                spacing={2}
                alignItems="center"
              >
                <Grid xs={6} md={6}></Grid>
              </Grid>
            </Box>
          </Modal>
        )
      }


    </div >
  );
}
