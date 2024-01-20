import { TextField } from '@mui/material'
import React from 'react'

const MuiInput = ({variant, labeltext, value, style, type, name, onChange, required}) => {
  return (
    <>
    <TextField onChange={onChange} value={value} className={style} variant={variant} label={labeltext}  type={type} name={name} required= {required} />
    </>
  )
}

export default MuiInput