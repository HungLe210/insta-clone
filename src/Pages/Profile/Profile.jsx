import React from 'react'
import { ProfileUserDetails } from '../../Component/Sidebar/ProfileComponents/ProfileUserDetails'
import ReqUserPostPart from '../../Component/Sidebar/ProfileComponents/ReqUserPostPart'

const Profile = () => {
  return (
    <div className='px-20'>
      <div>
        <ProfileUserDetails/>
      </div>
      <div>
        <ReqUserPostPart/>
      </div>
      
    </div>
  )
}

export default Profile