// import LoginC from "../../components/Login";
import logo from "../../assets/logo/logo.png";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterC from "../../components/Register";

const Register = () => {
  return (
    <>
      <div className="auth-container">
        <div className="auth-wrapper">
          <img src={logo} alt="" />
          <RegisterC />
          {/* <BrowserRouter>
            <Switch>
              <Route path="/login" component={LoginC} />
              <Route path="/register" component={Register} />
            </Switch>
          </BrowserRouter> */}
        </div>
      </div>
    </>
  );
};

export default Register;
