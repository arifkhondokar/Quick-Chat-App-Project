import { Alert, Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import '../login/login.css'
import SectionHeading from '../../components/SectionHeading'
import MuiInput from '../../components/MuiInput'
import CustomButton from '../../components/CustomButton'
import AuthNavigate from '../../components/AuthNavigate'
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa6"
import RegImg from '../../assets/images/sign up.png'
import Image from '../../utilities/Image'



const Registration = () => {
// -------------------------ful name--------------------------
let [fulName, setFulName] = useState("")

let handlerFulName = (e) => {
  setFulName(e.target.value)
}

// ---------------------------------email------------------------------
let [email, setEmail] = useState("")

const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let handlerRegEmail = (e) => {
    setEmail(e.target.value)
    }

// -------------------------------password------------------------------
// -------toggle icon--------------
let [showPassword, setShowPassword] = useState(false);

  let toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
// ------------validation------

let [password, setPassword] = useState();

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/

  let handlerRegPassword = (e) => {
    setPassword(e.target.value);
  };

// --------------------error messages-------------------
let [emailError, setEmailError] = useState("")

  let handlerRegSubmit = () => {
      if (!fulName) {
        setEmailError({ fulName: "Enter your name" });
      } else if (!email) {
        setEmailError({ email: "Enter your email address" });
      } else if (!email.match(emailregex)) {
        setEmailError({ email: "Please enter a valid email address" });
      } else if (!password) {
        setEmailError({ password: "Enter your password" });
      } else if (!password.match(passwordRegex)) {
        setEmailError({ password: "Please enter a strong password" });
      } else {
        setEmailError({ email: "", password: "" });
        console.log({fulName, email, password});
      }
    };


  return (
    <>
    <Box>
        <Grid container spacing={0}>
            <Grid item xs={6}>
            <div className='loginBox'>
                  <div className='loginBoxInner'>
                    <SectionHeading style="authHeading" text="Get started with easily register"/>
                    <span>Free register and you can enjoy it</span>
                    <div className='formMain'>
                      <div>
                        <MuiInput onChange={handlerFulName} style="inputStyle" variant="outlined" labeltext="Ful Name"  type="text" name="ful name" />
                        {
                          emailError.fulName &&
                          <Alert className='errorText' severity="error">{emailError.fulName}</Alert>
                        }
                      </div>
                      <div>
                        <MuiInput onChange={handlerRegEmail} style="inputStyle" variant="outlined" labeltext="Email Address"  type="email" name="email" />
                        {
                          emailError.email &&
                          <Alert className='errorText' severity="error">{emailError.email}</Alert>
                        }
                      </div>
                      <div className='passIcon'>
                        <MuiInput onChange={handlerRegPassword} style="inputStyle" variant="outlined" labeltext="Password"  type={showPassword ? 'text' : 'password'} name="password" />
                        <div className='passIconError'>
                        {
                          emailError.password &&
                          <Alert className='errorText' severity="error">{emailError.password}</Alert>
                        }
                        </div>
                        <span onClick={toggleShowPassword}>
                          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </span>
                      </div>
                      <CustomButton onClick={handlerRegSubmit} styling="regBtn" variant="contained" text="Sign up" />
                    </div>
                    <div>
                      <AuthNavigate style="loginAuth" text="Already  have an account ?" link="/" linkText="Sign In" />
                    </div>
                  </div>
                </div>
            </Grid>
            <Grid item xs={6}>
              <div className='loginImg'>
                <Image source={RegImg} alt="reg img"/>
              </div>
            </Grid>
        </Grid>
    </Box>

    </>
  )
}

export default Registration