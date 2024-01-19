import { Box, Grid } from '@mui/material'
import React from 'react'
import  {Outlet} from 'react-router-dom'
import './layout.css'
import SideBar from './SideBar'


const RootLayout = () => {
  return (
    <>
    <Box>
        <Grid container spacing={0}>
            <Grid item xs={2}>
                <SideBar/>
            </Grid>

            <Grid item xs={10}>
                <div className='outletBox'>
                    <Outlet/>
                </div>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default RootLayout