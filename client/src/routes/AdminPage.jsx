import React, { useEffect } from "react";

const AdminPage = () => {
  useEffect(() => {
    const localSessionId = localStorage.getItem("sessionId");
    console.log(localSessionId);
    if (
      !localSessionId ||
      localSessionId == "false" ||
      localSessionId === null
    ) {
      location.href = "/admin";
    }
  }, []);
  return (
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
    </div>
  );
};

export default AdminPage;
