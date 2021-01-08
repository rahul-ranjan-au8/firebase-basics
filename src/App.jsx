import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { auth, db } from "./firebase";

import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  function getUserData(id) {
    db.collection("users")
      .doc(id)
      .get()
      .then((doc) => {
        setUserData(doc.data());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        getUserData(user.uid);
      } else {
        setUser(null);
        setUserData(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar user={user} />

      <div className="MainPage d-flex flex-column align-items-center py-4">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Profile {...props} user={user} userData={userData} getUserData={getUserData} />}
          />
          <Route exact path="/login" render={(props) => <Login {...props} user={user} />} />
          <Route exact path="/register" render={(props) => <Register {...props} user={user} />} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
