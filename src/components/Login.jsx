import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { auth } from "../firebase";

function Login({ user, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setIsLoading(false);
      });
  };

  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
      <h1>Login</h1>
      <div className="row w-100 d-flex justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center p-5 border shadow-lg">
            <p className="text-center">
              New User?
              <Link to="/register"> Register Here</Link>
            </p>
            <input type="text" value={email} onChange={handleEmailChange} className="form-control" placeholder="email" />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control my-4"
              placeholder="password"
            />
            {isLoading ? (
              <div className="spinner-border" role="status"></div>
            ) : (
              <button type="submit" className="btn btn-success">
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
