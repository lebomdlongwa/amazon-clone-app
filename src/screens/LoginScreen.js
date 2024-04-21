import React from "react";
import "./LoginScreen.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

function LoginScreen() {
  return (
    <div className="login__screen">
      <div className="login__header">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
            alt="amazon__logo"
            className="login__header__logo"
          />
        </Link>
      </div>
      <div className="login__signIn">
        <h2 className="signIn__title">Sign-in</h2>
        <div className="user__email">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="user__password">
          <label>Password</label>
          <input type="text" />
        </div>
        <button className="signIn__button">Sign In</button>
        <div className="signIn__conditions">
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based
            Aids Notice
          </p>
        </div>
        <button className="createAmazon__button">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
