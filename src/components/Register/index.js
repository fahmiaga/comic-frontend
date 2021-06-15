import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postRegister } from "../../redux/actions/authAction";
import loading from "../../assets/logo/loading.gif";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [bool, setBool] = useState(true);

  useEffect(() => {
    document.title = `Register`;
  }, []);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBool(false);
    dispatch(postRegister(userData));
  };

  const message = useSelector((state) => state.user.message);

  const status = message.status;

  useEffect(() => {
    if (status === 401 || status === 422) {
      setBool(true);
    }

    if (status === 200) {
      history.push("/login");
      window.location.reload(true);
    }
  }, [status, history]);

  return (
    <>
      <div className="login-container">
        <h1>Register</h1>
        <hr />

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              placeholder="Your name..."
              onChange={handleChange}
            />
            {status === 422 ? (
              <p className="message-error ">
                {message.message.errors.name === undefined
                  ? ""
                  : message.message.errors.name[0]}
              </p>
            ) : (
              ""
            )}
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
            {status === 422 || undefined ? (
              <p className="message-error ">
                {message.message.errors.password === undefined
                  ? ""
                  : message.message.errors.password[0]}
              </p>
            ) : (
              ""
            )}
            <input
              type="password"
              name="password_confirmation"
              placeholder="Your password confirmation..."
              onChange={handleChange}
            />
            <button>
              {" "}
              {bool === true ? "Submit" : <img src={loading} alt="loading" />}
            </button>
          </div>
        </form>
        <p>
          Already have an account? Click
          <span onClick={() => history.push("/login")}> here</span> to login
        </p>
      </div>
    </>
  );
};

export default Register;
