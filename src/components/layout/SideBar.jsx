import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './layout.css'
import { getAuth, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { IoMdHome } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import Image from '../../utilities/Image'


const SideBar = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    let handlerLogout = () => {
        signOut(auth).then(()=> {
            console.log("logout done");
            navigate("/");
        })
    }

    const userInfo = auth.currentUser;
    console.log();

  return (
    <>
    <div className='navbar'>
        <div className='sideNavbar'>
            <div >
                <div className='proImg'>
                    <Image source={userInfo && userInfo.photoURL} alt='img'/>
                </div>
                <h3 className='userName'>{userInfo && userInfo.displayName}</h3>
            </div>
            <div>
                <ul className='navbarItems'>
                    <li>
                        <NavLink to='/home'><IoMdHome /></NavLink>
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
                <button onClick={handlerLogout} className='logoutBtn'><HiOutlineLogout /></button>
            </div>
        </div>
    </div> 
    </>
  )
}

export default SideBar