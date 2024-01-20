import React from 'react'

import UserList from './UserList';
import Friends from './Friends';
import FriendRequest from './FriendRequest';
import BlockList from './BlockList.JSX';

const Home = () => {
  return (
    <>
    <div className='homeWrapper'>
      <UserList/>
      <Friends/>
      <FriendRequest/>
      <BlockList/>
    </div>
    </>
  )
}

export default Home