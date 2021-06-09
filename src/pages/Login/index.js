// import React, { useEffect } from "react";
import LoginC from "../../components/Login";
import logo from "../../assets/logo/logo.png";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "../../components/Register";

const Login = () => {
  return (
    <>
      <div className="auth-container">
        <div className="auth-wrapper">
          <img src={logo} alt="" />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LoginC} />
              <Route path="/register" component={Register} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default Login;
