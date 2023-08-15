import React from 'react';
import ProfileSide from '../../components/LeftSide/profileSide/profileSide';
import './Home.css'
import PostSide from '../../components/Center/PostSide/PostSide';
import RightSide from '../../components/Right/RightSide/RightSide';

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <PostSide />
        <RightSide />
    </div>
  )
}

export default Home