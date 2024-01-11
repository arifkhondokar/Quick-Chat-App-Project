import { Box, Grid } from '@mui/material'
import React from 'react'
import '../login/login.css'
import SectionHeading from '../../components/SectionHeading'
import MuiInput from '../../components/MuiInput'
import CustomButton from '../../components/CustomButton'
import AuthNavigate from '../../components/AuthNavigate'
import RegImg from '../../assets/images/REGISTRATION.png'
import Image from '../../utilities/Image'

const Registration = () => {
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
                        <MuiInput style="inputStyle" variant="outlined" labeltext="Email Address"  type="email" name="email" />
                      </div>
                      <div>
                        <MuiInput style="inputStyle" variant="outlined" labeltext="Ful Name"  type="text" name="ful name" />
                      </div>
                      <div>
                        <MuiInput style="inputStyle" variant="outlined" labeltext="Password"  type="password" name="password" />
                      </div>
                      <CustomButton styling="regBtn" variant="contained" text="Sign up" />
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