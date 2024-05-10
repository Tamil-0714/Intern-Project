import React, { useState } from "react";
import "../style/userProfile.css";
import Files from "./Files";
const UserProfile = ({ profile, name, index, time,isSelected ,isActive, handleClick,userId }) => {

    // const [selected, setSelected] = useState(false)
    // const handleUserClick = () => {
    //   setSelected(!selected)
    // }

  return (
    <div
      className={isSelected? "user-profile-container selected-user":"user-profile-container"}
      onClick={() => {
        // handleUserOnClick[0](handleUserOnClick[1]);
        // console.log(userId);
        handleClick(index)
      }}
    >
      {/* <Files/> */}
      {isSelected && <Files userId={userId}/>}
      <div className="user-profile-pic">
        <img src={profile} alt="" />
      </div>
      <div className="user-name-time-container">
        <div className="user-name">{name}</div>
        <div className="user-time">{time}</div>
      </div>
      <div className="read-unread-tag">
        <div
          className={isActive ? "active-inactive active" : "active-inactive"}
        ></div>
      </div>
    </div>
  );
};

export default UserProfile;
