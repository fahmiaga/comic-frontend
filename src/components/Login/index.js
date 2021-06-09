import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoginC = () => {
  let history = useHistory();
  useEffect(() => {
    document.title = `Login`;
  }, []);

  return (
    <>
      <div className="login-container">
        <h1>Login</h1>
        <hr />
        <form>
          <div className="input-wrapper">
            <input type="text" name="email" placeholder="Your email..." />
            <input
              type="password"
              name="password"
              placeholder="Your password..."
            />
            <button>Submit</button>
          </div>
        </form>
        <p>
          Don't have account? Click
          <span onClick={() => history.push("/register")}> here</span> to
          register
        </p>
      </div>
    </>
  );
};

export default LoginC;
