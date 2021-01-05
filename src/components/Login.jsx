import React, { useState } from "react";
import { db, auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        db.collection("users")
          .doc(res.user.uid)
          .get()
          .then((res) => {
            console.log(res.data());
          });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center p-5 border">
      <input type="text" value={email} onChange={handleEmailChange} className="form-control" placeholder="email" />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className="form-control my-4"
        placeholder="password"
      />
      <button type="submit" className="btn btn-success">
        Login
      </button>
    </form>
  );
}

export default Login;
