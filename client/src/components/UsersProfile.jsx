import React, { useState } from "react";
import UserProfile from "./UserProfile";
import "../style/usersProfile.css";
const UsersProfile = ({ users }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleUserOnclick = (user) => {
    console.log(user);
  };

  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <div className="users-container">
      {users.map((user,index) => {
        return (
          <UserProfile
            key={user.userId}
            userId={user.userId}
            index={index}
            isSelected={selectedIndex === index}
            handleClick={handleClick}
            profile={user.profileLink}
            name={user.userName}
            time={user.activeTime}
            isActive={JSON.parse(user.isActive)}
          />
        );
      })}
    </div>
  );
};

export default UsersProfile;

/**
 [
    {
        "userId": "firstUser",
        "userName": "Tamil",
        "password": "$2a$12$zl/FkHELp6jf.z62warYxuo6MEz4Zfjb5U8a3BmSi33lOBdxVnery",
        "profileLink": "no link",
        "activeTime": "5 hours ago",
        "isActive": "false"
    },
    {
        "userId": "nice",
        "userName": "password",
        "password": "$2a$12$Zt2hqU2bvovlQM5XTO1xMexHBB3JaHz6a4ZvzOy0gltRiOfLE9nzq",
        "profileLink": "no link 7",
        "activeTime": "Yesterday",
        "isActive": "true"
    },
    {
        "userId": "someUser",
        "userName": "Enn peru",
        "password": "$2a$12$mFSmHNKwUbYAQ..sr7m6T.VXae.0de5my864JCgWJxnMXBhiA2H/a",
        "profileLink": "no link 1",
        "activeTime": "9 hours ago",
        "isActive": "true"
    }
]
 */
