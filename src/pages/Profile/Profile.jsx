import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeftSide/ProfileLeft/ProfileLeft'
import PostSide from '../../components/Center/PostSide/PostSide'
import ProfileCard from '../../components/LeftSide/ProfileCard/ProfileCard'
import RightSide from '../../components/Right/RightSide/RightSide'

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />

      <div className="Profile-center">
        <ProfileCard />
        <PostSide />
      </div>

      <RightSide />
    </div>
  )
}

export default Profile