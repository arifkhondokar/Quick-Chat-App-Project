import { Box, Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.css'


const RootLayout = () => {
  return (
    <>
    <Box>
        <Grid container spacing={0}>
            <Grid item xs={2}>
                <div className='sidebar'>
                    <h1>sidebar</h1>
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