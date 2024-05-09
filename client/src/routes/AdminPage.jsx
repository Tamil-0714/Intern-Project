import React, { useEffect, useState } from "react";
import ErrorRoute from "./ErrorRoute";
import axios from "axios";
import { BASE_API_URL } from "../assests";
import UsersProfile from "../components/UsersProfile";

const AdminPage = () => {
  const [sessionId, setSessionId] = useState(false);
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function verifySession() {
      const localSessionId = localStorage.getItem("sessionId");
      if (
        !localSessionId ||
        localSessionId == "false" ||
        localSessionId === null
      ) {
        location.href = "/admin";
      } else {
        const result = await validateSession(localSessionId);
        if (!result) {
          setSessionId(false);
          localStorage.removeItem("sessionId");
          location.href = "/admin";
        } else {
          setSessionId(localSessionId);
          const users = await  gatherUsersData(localSessionId)
          setUsers(users)
        }
      }
    }
    verifySession();
  }, []);

  async function validateSession(s) {
    const formData = {
      userName: false,
      password: false,
      sessionId: s,
    };
    console.log(formData);
    const res = await axios.post(`${BASE_API_URL}/adminCred`, formData);
    return res.data.isOk;
  }
  async function gatherUsersData(s){
    const formData = {sessionId:s}
    const res = await axios.post(`${BASE_API_URL}/users`, formData)
    return res.data
  }
  return !sessionId ? (
    <ErrorRoute />
  ) : (
    <div>
      <h2>admin acces page</h2>
      <button
        onClick={() => {
          localStorage.removeItem("sessionId");
          location.href = "/admin";
        }}
      >
        Log out
      </button>
      <UsersProfile users={users}/>
    </div>
  );
};

export default AdminPage;
