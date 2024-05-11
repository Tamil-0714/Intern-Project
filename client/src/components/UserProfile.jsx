import React, { useState } from "react";
import "../style/userProfile.css";
import Files from "./Files";
import axios from "axios";
import { BASE_API_URL } from "../assests";
const UserProfile = ({
  profile,
  name,
  index,
  time,
  isSelected,
  isActive,
  handleClick,
  userId,
}) => {
  // const [selected, setSelected] = useState(false)
  // const handleUserClick = () => {
  //   setSelected(!selected)
  // }
  const [fileData, setFileData] = useState([]);
  const fetchUserFiles = async (userId) => {
    const formData = {
      userId: userId,
      sessionId: localStorage.getItem("sessionId"),
    };

    const file = await axios.post(`${BASE_API_URL}/files`, formData);
    setFileData(file.data);
  };
  return (
    <div
      className={
        isSelected
          ? "user-profile-container selected-user"
          : "user-profile-container"
      }
      onClick={async () => {
        // handleUserOnClick[0](handleUserOnClick[1]);
        console.log(userId);
        await fetchUserFiles(userId);
        handleClick(index);
      }}
    >
      {/* <Files/> */}
      {isSelected && fileData.length > 0 && (
        <Files userId={userId} fileData={fileData} />
      )}
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
