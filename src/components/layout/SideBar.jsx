import React from 'react'
import { NavLink } from 'react-router-dom'
import './layout.css'
import { IoMdHome } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import Image from '../../utilities/Image'

const SideBar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='sideNavbar'>
            <div >
                <div className='proImg'>
                    <Image source='' alt='img'/>
                </div>
                <h3 className='userName'>Anni</h3>
            </div>
            <div>
                <ul className='navbarItems'>
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
                <button className='logoutBtn'><HiOutlineLogout /></button>
            </div>
        </div>
    </div> 
    </>
  )
}

export default SideBar