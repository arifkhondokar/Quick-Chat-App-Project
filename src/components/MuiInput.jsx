import { TextField } from '@mui/material'
import React from 'react'

const MuiInput = ({variant, labeltext, style, type, name}) => {
  return (
    <>
    <TextField className={style} variant={variant} label={labeltext}  type={type} name={name}  />
    </>
  )
}

export default MuiInput