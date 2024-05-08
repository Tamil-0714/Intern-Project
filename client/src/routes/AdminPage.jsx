import React, { useEffect, useState } from "react";
import ErrorRoute from "./ErrorRoute"

const AdminPage = () => {
  const [sessionId, setSessionId] = useState(false);
  useEffect(() => {
    const localSessionId = localStorage.getItem("sessionId");
    console.log(localSessionId);
    if (
      !localSessionId ||
      localSessionId == "false" ||
      localSessionId === null
    ) {
      location.href = "/admin";
    } else {
      setSessionId(localSessionId);
    }
  }, []);
  return (
    !sessionId? <ErrorRoute/>: <div>
      <h2>admin acces page</h2>
      <button
        onClick={() => {
          localStorage.removeItem("sessionId");
          location.href = "/admin";
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default AdminPage;
