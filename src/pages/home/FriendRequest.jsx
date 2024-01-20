import React from 'react'
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/Image'

const FriendRequest  = () => {
  return (
    <>
    <GroupCard cardtitle="Friend Request">
        <div className='userMainBox'>
        <div className='userItem'>
            <div className='userImgBox'>
                <Image source="" alt="img"/>
            </div>
            <div className='userInfoBox'>
                <div>
                    <h3>anik</h3>
                    <p>MERN Developer</p>
                </div>
                <button className='addBtn'>
                accept
                </button>
            </div>
        </div>
        </div>
    </GroupCard>
    </>
  )
}

export default FriendRequest 