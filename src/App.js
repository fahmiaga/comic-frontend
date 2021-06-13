import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UpdateProfie from "./pages/UpdateProfile";
import Schedules from "./pages/Schedules";
import Genres from "./pages/Genres";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/update-profile" component={UpdateProfie} />
          <Route path="/schedules" component={Schedules} />
          <Route path="/genres" component={Genres} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
