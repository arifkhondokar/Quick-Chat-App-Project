import { Alert, Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import '../login/login.css'
import SectionHeading from '../../components/SectionHeading'
import MuiInput from '../../components/MuiInput'
import CustomButton from '../../components/CustomButton'
import AuthNavigate from '../../components/AuthNavigate'
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa6"
import {TextField, IconButton, InputAdornment } from '@mui/material';
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
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

// ------------validation------

let [password, setPassword] = useState("");

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/

  let handlerRegPassword = (e) => {
    setPassword(e.target.value);
  };

// --------------------error messages-------------------
let [regError, setRegError] = useState("")

  let handlerRegSubmit = () => {
      if (!fulName) {
        setRegError({ fulName: "Enter your name" });
      } else if (!email) {
        setRegError({ email: "Enter your email address" });
      } else if (!email.match(emailregex)) {
        setRegError({ email: "Please enter a valid email address" });
      } else if (!password) {
        setRegError({ password: "Enter your password" });
      } else if (!password.match(passwordRegex)) {
        setRegError({ password: "Please enter a strong password" });
      } else {
        setRegError({fulName: "", email: "", password: "" });
        console.log({fulName, email, password});
        setFulName("")
        setEmail("")
        setPassword("")
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
                        <MuiInput onChange={handlerFulName} value={fulName} style="inputStyle" variant="outlined" labeltext="Ful Name"  type="text" name="ful name" />
                        {
                          regError.fulName &&
                          <Alert className='errorText' severity="error">{regError.fulName}</Alert>
                        }
                      </div>
                      <div>
                        <MuiInput onChange={handlerRegEmail} value={email} style="inputStyle" variant="outlined" labeltext="Email Address"  type="email" name="email" />
                        {
                          regError.email &&
                          <Alert className='errorText' severity="error">{regError.email}</Alert>
                        }
                      </div>
                      <div>
                        <TextField
                          type={showPassword ? 'text' : 'password'} value={password} label="Password" variant="outlined" fullWidth
                          // onChange={(e) => setPassword(e.target.value)}
                          onChange={handlerRegPassword}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton onClick={toggleShowPassword} edge="end">
                                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                        />
                        {
                        regError.password &&
                        <Alert className='errorText' variant="filled" severity="error">{regError.password}</Alert>
                        }
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
};
export default Registration

