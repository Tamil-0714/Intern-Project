import React, { useState } from "react";
import UserProfile from "./UserProfile";
import "../style/usersProfile.css";
import Files from "./Files";
const UsersProfile = ({ users }) => {
  const [fileData, setFileData] = useState([]);

  return (
    <div className="users-container">
      {/* <div className="search-container">
        <div className="serach-icon"></div>
        <div className="search-bar">
          <input type="search" name="search-bar" id="" />
        </div>
        <div className="clear-icon"></div>
      </div> */}
      <div className="user-indu-data">
        {users.map((user, index) => {
          return (
            <>
              <UserProfile
                key={user.userId}
                userId={user.userId}
                setFileData={setFileData}
                profile={user.profileLink}
                name={user.userName}
                time={user.activeTime}
                isActive={JSON.parse(user.isActive)}
              />
              {/* <UserProfile
                key={user.userId}
                userId={user.userId}
                setFileData={setFileData}
                profile={user.profileLink}
                name={user.userName}
                time={user.activeTime}
                isActive={JSON.parse(user.isActive)}
              /> */}
            </>
          );
        })}
      </div>
      <div className="files-component-container">{ fileData.length > 0 && (
        <Files userId={users.userId} fileData={fileData} />
      )}</div>
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
