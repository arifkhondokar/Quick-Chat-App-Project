import { Alert, Box, Button, Grid, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import './login.css'
import SectionHeading from '../../components/SectionHeading'
import AuthNavigate from '../../components/AuthNavigate'
import CustomButton from '../../components/CustomButton'
import MuiInput from '../../components/MuiInput'
import GoogleSvg from '../../assets/images/google.svg'
import Image from '../../utilities/Image'
import LogImg from '../../assets/images/login picture.png'
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import { NavLink } from 'react-router-dom'


const Login = () => {

// ---------------------------------email------------------------------
let [email, setEmail] = useState('')

const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let handlerLoginEmail = (e) => {
    setEmail(e.target.value)
    }

// -------------------------------password------------------------------
// -------toggle icon--------------
let [showPassword, setShowPassword] = useState(false);

  let toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
// ------------validation------

let [password, setPassword] = useState('');

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/

  let handlerLoginPassword = (e) => {
    setPassword(e.target.value)
  };

// --------------------error messages-------------------
let [loginError, setLoginError] = useState("")

  let handlerLoginSubmit = () => {
      if (!email) {
        setLoginError({ email: "Enter your email address" });
      } else if (!email.match(emailregex)) {
        setLoginError({ email: "Please enter a valid email address" });
      } else if (!password) {
        setLoginError({ password: "Enter your password" });
      } else if (!password.match(passwordRegex)) {
        setLoginError({ password: "Please enter a strong password" });
      } else {
        setLoginError({ email: "", password: "" });
        console.log({email, password});
      }
    };

// -----------------------forgot passwors------------------
// ------modal box-----------
let [openModal, setOpenModal] = useState(false);

  let handleOpenModal = () => {
    setOpenModal(true);
    };

  let handleCloseModal = () => {
    setOpenModal(false);
    };
// -------forgot email validation------------------------

let [formData, setFormData] = useState("")
 
  let handlerForgot = (e) => {
    setFormData(e.target.value)
  }

let [error, setError] = useState("")

  let handlerForgotSubmit =() => {
    if(!formData){
      setError({email: "Enter your email address"}); 
    }else if(!formData.match(emailregex)){
      setError({email: "please enter a valid email address"});
    }else{
      setError({email: ""})
      console.log(formData);
    }
  }

  return (
    <>
    <Box>
        <Grid container spacing={0}>
            <Grid item xs={6}>
                <div className='loginBox'>
                  <div className='loginBoxInner'>
                    <SectionHeading style="authHeading" text="Login to your account!"/>
                    <div className='providerLogin'>
                      <img src={GoogleSvg} alt="goole icon" />
                      <span>Login with Google</span>  
                    </div>
                    <div className='formMain'>
                      <div>
                        <MuiInput onChange={handlerLoginEmail} style="inputStyle" variant="standard" labeltext="Email Address" type="email" name="email" />
                        {
                          loginError.email &&
                          <Alert className='errorText' variant="filled" severity="error">{loginError.email}</Alert>
                        }
                      </div>
                      <div className='passIcon'>
                        <MuiInput onChange={handlerLoginPassword} style="inputStyle" variant="standard" labeltext="Password" type={showPassword ? 'text' : 'password'} name="password" />
                        <div className='passIconError'>
                        {
                          loginError.password &&
                          <Alert className='errorText' variant="filled" severity="error">{loginError.password}</Alert>
                        }
                        </div>
                        <span onClick={toggleShowPassword}>
                          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </span>
                       
                      </div>
                      <CustomButton onClick={handlerLoginSubmit} styling="loginBtn" variant="contained" text="Login to Continue" />
                    </div>
                    <div>
                      <AuthNavigate style="loginAuth" text="Don’t have an account ?" link="/registration" linkText="Sign up"/>
                    </div>
                    <Button onClick={handleOpenModal}>Forgot Password?</Button>
                  </div>
                </div>
            </Grid>
            <Grid item xs={6}>
              <div className='loginImg'>
                <Image source={LogImg} alt="login img"/>
              </div>
            </Grid>
        </Grid>
    </Box>

    <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="forgot-password-modal"
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: 700,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            borderRadius: '15px',
            boxShadow: (theme) => theme.shadows[5],
            p: 15,
          }}
        >
          <Typography id="forgot-password-modal" variant="h6" component="h2">
          Forgot Password
          </Typography>
          <div>
            <div>
              <MuiInput onChange={handlerForgot} style="inputStyle" variant="standard" labeltext="Email Address"  type="email" name="email" />
            {
              error.email &&
              <Alert className='errorText' severity="warning" >{error.email}</Alert>
            }
            </div>
            <CustomButton onClick={handlerForgotSubmit} styling="resetBtn" variant="outlined" text="Request password reset"/>
          </div>
          <div className='closeIcon'>
            <Button onClick={handleCloseModal}><IoClose /></Button>
          </div>
          <NavLink to='/registration'>Back to Registration</NavLink>
        </Box>
    </Modal>
    </>
  )
}

export default Login