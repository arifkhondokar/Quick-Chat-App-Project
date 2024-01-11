import { Box, Button, Grid, Modal, Typography } from '@mui/material'
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
import { FaRegWindowClose } from "react-icons/fa";
import { NavLink } from 'react-router-dom'



const Login = () => {

  const [password, setPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


// -----------------------forgot passwors-----------
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    // For simplicity, just close the modal in this example
    handleCloseModal();
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
                        <MuiInput style="inputStyle" variant="standard" labeltext="Email Address" type="email" name="email" />
                      </div>
                      <div className='passIcon'>
                        <MuiInput style="inputStyle" variant="standard" labeltext="Password" type={showPassword ? 'text' : 'password'} name="password" onChange={handlePasswordChange} />
                        <span onClick={toggleShowPassword}>
                          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </span>
                      </div>
                      <CustomButton styling="loginBtn" variant="contained" text="Login to Continue" />
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
          <div onClick={handleForgotPassword}>
            <MuiInput style="inputStyle" variant="standard" labeltext="Email Address"  type="email" name="email" />
            <CustomButton styling="resetBtn" variant="outlined" text="Request password reset"/>
          </div>
          <div className='closeIcon'>
            <Button onClick={handleCloseModal}><FaRegWindowClose /></Button>
          </div>
          <NavLink to='/registration'>Back to Registration</NavLink>
        </Box>
    </Modal>
    </>
  )
}

export default Login