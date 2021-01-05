import React, { useState } from "react";
import { db, auth } from "../firebase";

function Register() {
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
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res.user.uid);

        db.collection("users")
          .doc(res.user.uid)
          .set({ name: "RR", hobbies: ["A", "B"] })
          .then(() => {
            console.log("user data is created");
          })
          .catch((err) => {
            console.log(err);
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
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}

export default Register;
