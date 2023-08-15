import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './profileSide.css'
import FollowersCard from '../FollowersCard/FollowersCard'

const profileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch / >
        <ProfileCard />
        <FollowersCard />
    </div>
  )
}

export default profileSide
