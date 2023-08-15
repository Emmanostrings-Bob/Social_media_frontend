import React from 'react'
import FollowersCard from '../../LeftSide/FollowersCard/FollowersCard'
import LogoSearch from '../../LeftSide/LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch />
        <InfoCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft