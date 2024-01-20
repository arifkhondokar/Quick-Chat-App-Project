import React from 'react'
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/Image'

const BlockList = () => {
  return (
    <>
    <GroupCard cardtitle="Block List">
        <div className='userMainBox'>
        {[0,1,2,3,4,5,6].map((item,index)=>(
            <div key={index} className='userItem'>
                <div className='userImgBox'>
                <Image source="" alt="img"/>
                </div>
                <div className='userInfoBox'>
                <div>
                    <h3>anika</h3>
                    <p>MERN Developer</p>
                </div>
                <button className='addBtn'>
                    Unblock
                </button>
                </div>
            </div>
        ))
        }
        </div>
    </GroupCard>
    </>
  )
}

export default BlockList