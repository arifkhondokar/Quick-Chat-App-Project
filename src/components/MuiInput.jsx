import { TextField } from '@mui/material'
import React from 'react'

const MuiInput = ({variant, labeltext, style, type, name, onChange, required}) => {
  return (
    <>
    <TextField onChange={onChange} className={style} variant={variant} label={labeltext}  type={type} name={name} required= {required} />
    </>
  )
}

export default MuiInput