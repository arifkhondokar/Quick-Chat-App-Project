import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/Image'
import { FaPlusCircle } from "react-icons/fa";
import { Blocks } from 'react-loader-spinner'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import ReactToastify from '../../components/Toastify/ReactToastify';



const UserList = () => {

  const data = useSelector((state) => state.loginUserData.value)
  const database = getDatabase();
  const [userList, setUserList] = useState([])
  const [loader, setLoader] = useState(false)


// read operation------------------------------------
  useEffect(() => {
    const userRef = ref(database, 'users');
    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
          if (data.uid != item.key){
            arr.push({...item.val(), id:item.key})
          }
      })
      setUserList(arr)
    });
  },[]);

//  write operation--------------------------
  let handlerFRequest = (frequestInfo) => {
    console.log(frequestInfo);
    set(push(ref(database, 'frequestInfo')), {
      senderid: data.uid,
      sendername: data.displayName,
      senderimg: data.photoURL,
      senderemail: data.email,

      receiverid: frequestInfo.id,
      receivername: frequestInfo.username,
      receiverimg: frequestInfo.profile_picture,
      receiveremail: frequestInfo.email,
    })
    .then(()=>{
      toast.success("Friend Request Send Successfully")
     
    })
  }


  setTimeout(()=>{
    setLoader(false)
  },100)


  return (
    <>
  <ReactToastify/>

    <GroupCard cardtitle="User List">
        <div className='userMainBox'>
        {userList && userList.length > 0 
        ?
        userList.map((item,index)=>(
          <div key={index} className='userItem'>
          <div className='userImgBox'>
            <Image source={item.profile_picture} alt='propic'/>
          </div>
          <div className='userInfoBox'>
            <div>
              <h3>{item.username}</h3>
              <p>MERN Dev</p>
            </div>
            <button onClick={ () => handlerFRequest(item) } className='addBtn'><FaPlusCircle /></button>
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

export default UserList