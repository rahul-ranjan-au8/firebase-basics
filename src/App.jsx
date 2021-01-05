import React from "react";

import Register from "./components/Register";
import Login from "./components/Login";

import { auth } from "./firebase";

function App() {
  const handleLogout = () => {
    auth
      .signOut()
      .then((res) => {
        alert("logged out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App d-flex flex-column align-items-center" style={{ height: "100vh", width: "100%" }}>
      <div className="w-100 d-flex align-items-center justify-content-around flex-wrap my-5">
        <Register />
        <Login />
      </div>

      <button onClick={handleLogout} className="btn btn-danger">
        Log OUT
      </button>
    </div>
  );
}

export default App;
