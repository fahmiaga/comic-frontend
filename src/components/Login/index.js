import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../redux/actions/authAction";
import { useState } from "react";
import loading from "../../assets/logo/loading.gif";

const LoginC = () => {
  const history = useHistory();
  useEffect(() => {
    document.title = `Login`;
  }, []);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [bool, setBool] = useState(true);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBool(false);
    dispatch(postLogin(userData));
  };

  const message = useSelector((state) => state.user.message);
  const status = message.status;

  useEffect(() => {
    if (status === 401 || status === 422) {
      setBool(true);
    }

    if (status === 200) {
      history.push("/");
    }
  }, [status, history]);

  return (
    <>
      <div className="login-container">
        <h1>Login</h1>
        <hr />

        {status === 401 ? (
          <div className="login-message-error">
            <p>{message.message.message}</p>
          </div>
        ) : (
          ""
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="email"
              placeholder="Your email..."
              onChange={handleChange}
            />
            {status === 422 ? (
              <p className="message-error ">
                {message.message.errors.email[0]}
              </p>
            ) : (
              ""
            )}
            <input
              type="password"
              name="password"
              placeholder="Your password..."
              onChange={handleChange}
            />
            {status === 422 ? (
              <p className="message-error">
                {message.message.errors.password[0]}
              </p>
            ) : (
              ""
            )}
            <button>
              {bool === true ? "Submit" : <img src={loading} alt="loading" />}
            </button>
          </div>
        </form>
        <p>
          Don't have an account? Click
          <span onClick={() => history.push("/register")}> here</span> to
          register
        </p>
      </div>
    </>
  );
};

export default LoginC;
