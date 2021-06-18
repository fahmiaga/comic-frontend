import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UpdateProfie from "./pages/UpdateProfile";
import Schedules from "./pages/Schedules";
import Genres from "./pages/Genres";
import AddComic from "./pages/AddComic";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import FormAddComic from "./pages/FormAddComic";
import AddGenre from "./pages/AddGenre";
import EditComic from "./pages/EditComic";
import AddEpisodes from "./pages/addEpisodes";
import ListEpisodes from "./pages/ListEpisodes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/update-profile" component={UpdateProfie} />
          <Route path="/schedules" component={Schedules} />
          <Route path="/genres" component={Genres} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/add-comic" component={AddComic} />
          <Route path="/form-add-comic" component={FormAddComic} />
          <Route path="/add-genre" component={AddGenre} />
          <Route path="/comic-edit-form/:id" component={EditComic} />
          <Route path="/add-episodes" component={AddEpisodes} />
          <Route path="/list-episodes/:id" component={ListEpisodes} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
