import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();

  useEffect(() => {
    document.title = `Register`;
  }, []);

  return (
    <>
      <div className="login-container">
        <h1>Register</h1>
        <hr />
        <form>
          <div className="input-wrapper">
            <input type="text" name="name" placeholder="Your name..." />
            <input type="text" name="email" placeholder="Your email..." />
            <input
              type="password"
              name="password"
              placeholder="Your password..."
            />
            <input
              type="password"
              name="password_confirmation"
              placeholder="Your password confirmation..."
            />
            <button>Submit</button>
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
