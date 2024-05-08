import React from 'react'
import UserProfile from './UserProfile'
import test_profile from "../assets/img/test_profile.jpeg"
import "../style/usersProfile.css"

const UsersProfile = () => {
  return (
    <div className='users-container'>
      <UserProfile  profile={test_profile} name={"Tamil N"} time={"Yesterdat"} isActive={true}/>
      <UserProfile  profile={test_profile} name={"something K"} time={"Two week ago"} isActive={true}/>
      <UserProfile  profile={test_profile} name={"NOthing L"} time={"today"} isActive={true}/>
      <UserProfile  profile={test_profile} name={"ANything I"} time={"3 day ago"} isActive={false}/>
      <UserProfile  profile={test_profile} name={"Manything O"} time={"Yesterdat"} isActive={false}/>
    </div>
  )
}

export default UsersProfile
