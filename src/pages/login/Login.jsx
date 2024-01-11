import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import './login.css'
import SectionHeading from '../../components/SectionHeading'
import AuthNavigate from '../../components/AuthNavigate'
import CustomButton from '../../components/CustomButton'
import MuiInput from '../../components/MuiInput'
import GoogleSvg from '../../assets/images/google.svg'
import Image from '../../utilities/Image'
import LogImg from '../../assets/images/LOGIN.png'
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa6";



const Login = () => {

  const [password, setPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


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
                        <MuiInput style="inputStyle" variant="standard" labeltext="Email Addres"  type="email" name="email" />
                      </div>
                      <div className='passIcon'>
                        <MuiInput style="inputStyle" variant="standard" labeltext="Password"  type={showPassword ? 'text' : 'password'} name="password" onChange={handlePasswordChange} />
                        <span onClick={toggleShowPassword}>
                          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </span>
                      </div>
                      <CustomButton styling="loginBtn" variant="contained" text="Login to Continue" />
                    </div>
                    <div>
                      <AuthNavigate style="loginAuth" text="Don’t have an account ?" link="/registration" linkText="Sign up"/>
                    </div>
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
    </>
  )
}

export default Login