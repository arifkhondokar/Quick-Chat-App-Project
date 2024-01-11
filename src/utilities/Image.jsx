import React from 'react'

const Image = ({source, alt, style}) => {
  return (
    <>
    <img src={source} alt={alt} className={style} />
    </>
  )
}

export default Image