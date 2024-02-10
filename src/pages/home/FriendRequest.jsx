import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/Image'
import ReactToastify from '../../components/Toastify/ReactToastify';
import { toast } from 'react-toastify';
import { Blocks } from 'react-loader-spinner'

const FriendRequest  = () => {

    const data = useSelector((state) => state.loginUserData.value)
    const database = getDatabase();
    const [fRequest, setfRequest] = useState([])
    const [loader, setLoader] = useState(false)

// read operation------------------------------------
    useEffect(() => {
    const userfrequestRef = ref(database, 'frequestInfo');
    onValue(userfrequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
          if (data.uid == item.val().receiverid){
            arr.push({...item.val(), id:item.key})
          }
      })
      setfRequest(arr)
    });
  },[]);

// delete operation-------------------- 
  let handlerCancelRequest = (cancelInfo) => {
    remove(ref(database, "frequestInfo/" + cancelInfo.id))
    .then(()=>{
        toast.success('Friend Request Cancel Successfully!')
    })
  }

  
  setTimeout(()=>{
    setLoader(false)
  },100)



  return (
    <>
    <ReactToastify/>

    <GroupCard cardtitle="Friend Request">
        <div className='userMainBox'>
        {
            fRequest && fRequest.length > 0
            ?
            fRequest.map((item, index)=>(
                <div key={index} className='userItem'>
                    <div className='userImgBox'>
                        <Image source={item.senderimg} alt="img"/>
                    </div>
                    <div className='userInfoBox'>
                        <div>
                            <h3>{item.sendername}</h3>
                            <p>MERN Developer</p>
                        </div>
                        <div className='btngroup'>
                            <button className='addBtn'>accept</button>
                            <button
                            onClick={()=>handlerCancelRequest(item)} className='addBtn'>cancel</button>
                        </div>
                        
                    </div>
                </div>
            ))
            :
            <Blocks
            height="80"
            width="300"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
            className="loader"
          />
        }
            
        </div>
    </GroupCard>
    </>
  )
}

export default FriendRequest 