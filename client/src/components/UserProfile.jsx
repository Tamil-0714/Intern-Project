import React from 'react'
import "../style/userProfile.css"
const UserProfile = ({profile, name, time, isActive}) => {
    
  return (
    <div className='user-profile-container'>
      <div className="user-profile-pic">
        <img src={profile} alt="" />
      </div>
      <div className="user-name-time-container">
        <div className="user-name">{name}</div>
        <div className="user-time">{time}</div>
      </div>
      <div className="read-unread-tag">
        <div className={isActive?"active-inactive active":"active-inactive"}></div>
      </div>
    </div>
  )
}

export default UserProfile
