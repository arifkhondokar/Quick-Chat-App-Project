import React from 'react'
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/Image'
import { FaPlusCircle } from "react-icons/fa";


const UserList = () => {
  return (
    <>
    <GroupCard cardtitle="User List">
        <div className='userMainBox'>
          <div className='userItem'>
            <div className='userImgBox'>
              <Image source='' alt='propic'/>
            </div>
            <div className='userInfoBox'>
              <div>
                <h3>Anni</h3>
                <p>MERN Dev</p>
              </div>
              <button className='addBtn'><FaPlusCircle /></button>
            </div>
          </div>

          <div className='userItem'>
            <div className='userImgBox'>
              <Image source='' alt='propic'/>
            </div>
            <div className='userInfoBox'>
              <div>
                <h3>Anni</h3>
                <p>MERN Dev</p>
              </div>
              <button className='addBtn'><FaPlusCircle /></button>
            </div>
          </div>

          <div className='userItem'>
            <div className='userImgBox'>
              <Image source='' alt='propic'/>
            </div>
            <div className='userInfoBox'>
              <div>
                <h3>Anni</h3>
                <p>MERN Dev</p>
              </div>
              <button className='addBtn'><FaPlusCircle /></button>
            </div>
          </div>

          <div className='userItem'>
            <div className='userImgBox'>
              <Image source='' alt='propic'/>
            </div>
            <div className='userInfoBox'>
              <div>
                <h3>Anni</h3>
                <p>MERN Dev</p>
              </div>
              <button className='addBtn'><FaPlusCircle /></button>
            </div>
          </div>

          <div className='userItem'>
            <div className='userImgBox'>
              <Image source='' alt='propic'/>
            </div>
            <div className='userInfoBox'>
              <div>
                <h3>Anni</h3>
                <p>MERN Dev</p>
              </div>
              <button className='addBtn'><FaPlusCircle /></button>
            </div>
          </div>

          <div className='userItem'>
            <div className='userImgBox'>
              <Image source='' alt='propic'/>
            </div>
            <div className='userInfoBox'>
              <div>
                <h3>Anni</h3>
                <p>MERN Dev</p>
              </div>
              <button className='addBtn'><FaPlusCircle /></button>
            </div>
          </div>
        </div>
    </GroupCard>
    </>
  )
}

export default UserList