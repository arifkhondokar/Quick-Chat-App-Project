import React from 'react'
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/Image'

const Friends = () => {
  return (
    <>
    <GroupCard cardtitle="Friends">
        <div className='userMainBox'>
        {[0,1,2,3,4,5,6].map((item,index)=>(
            <div key={index} className='userItem'>
            <div className='userImgBox'>
              <Image source='' alt='propic'/>
            </div>
            <div className='userInfoBox'>
              <div>
                <h3>Arif</h3>
                <p>MERN Dev</p>
              </div>
              <button className='addBtn'>Block</button>
            </div>
          </div>
        ))}
          
        </div>
    </GroupCard>
    </>
  )
}

export default Friends