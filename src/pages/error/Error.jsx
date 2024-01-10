import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <section className='error_section'>
        <div className='error container'>
            <h1>404 ERROR PAGE</h1>
            <button>
                <NavLink className="errorLink" to='/'>Back to Home Page</NavLink>
            </button>
        </div>
    </section>
    </>
  )
}

export default Error