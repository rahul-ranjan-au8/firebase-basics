import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { db, auth } from "../firebase";

function Register({ user, history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
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
        db.collection("users")
          .doc(res.user.uid)
          .set({ name: name })
          .then(() => {
            history.push("/");
          })
          .catch((err) => {
            alert(err);
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
      <h1>Register</h1>
      <div className="row w-100 d-flex justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center p-5 border shadow-lg">
            <p className="text-center">
              Aleady have an account?
              <Link to="/login"> Login Here</Link>
            </p>
            <input type="text" value={name} onChange={handleNameChange} className="form-control mb-4" placeholder="name" />
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
        </div>
      </div>
    </div>
  );
}

export default Register;
