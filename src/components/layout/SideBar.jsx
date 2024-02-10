import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './layout.css'
import { getAuth, signOut  } from "firebase/auth";
import { IoMdHome } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import Image from '../../utilities/Image'
import ReactToastify from '../Toastify/ReactToastify';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../features/userSlice';

const SideBar = () => {

    const data = useSelector((state) => state.loginUserData.value)
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!data){
            navigate("/");
        }
    },[]);

    let handlerLogout = () => {
        signOut(auth).then(()=> {
            setTimeout(()=>{
                localStorage.removeItem("user");
                dispatch(loginUser(null))
                toast.success("Sign out successfully!", {
                  position: "top-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });
              },400)
              navigate("/");
        })
    }

    const userInfo = auth.currentUser;

  return (
    <>

    <ReactToastify/>

    <div className='navbar'>
        <div className='sideNavbar'>
            <div >
                <div className='proImg'>
                    <Image source={data && data.photoURL} alt='img'/>
                </div>
                <h3 className='userName'>{ data && data.displayName}</h3>
                <p className='userEmail'>{data && data.email}</p>
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