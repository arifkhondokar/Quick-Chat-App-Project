import { Box, Grid } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './layout.css'
import ProPic from '../../assets/images/proPic1.png'
import { IoMdHome } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";


const RootLayout = () => {
  return (
    <>
    <Box>
        <Grid container spacing={0}>
            <Grid item xs={2}>
                <div className='navbar'>
                    <div className='sideNavbar'>
                        <div className='proImg'>
                            <img src={ProPic} alt="proPicture" />
                        </div>
                        <div className='navbar'>
                            <ul>
                                <li>
                                    <NavLink to='home'><IoMdHome /></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/messages'><AiFillMessage /></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/notification'><IoMdNotifications /></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/settings'><IoSettingsSharp /></NavLink>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h5>icon</h5>
                        </div>
                    </div>
                </div>
                
            </Grid>
            <Grid item xs={10}>
                <Outlet/>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default RootLayout