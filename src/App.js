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
import AddContent from "./pages/AddContent";
import ContentEpisode from "./pages/ContentEpisodes";
import ListContent from "./pages/ListContent";
import FormAddContent from "./pages/FormAddContent";
import EditContent from "./pages/EditContent";
import AddSchedule from "./pages/AddSchedule";
import DayScheduleList from "./pages/DayScheduleList";
import ComicInfo from "./pages/ComicInfo";

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
          <Route path="/add-content" component={AddContent} />
          <Route path="/content-episodes/:id" component={ContentEpisode} />
          <Route path="/list-content/:id" component={ListContent} />
          <Route path="/form-add-content/:id" component={FormAddContent} />
          <Route path="/edit-content/:id" component={EditContent} />
          <Route path="/add-schedule" component={AddSchedule} />
          <Route path="/comic-schedule/:id" component={DayScheduleList} />
          <Route path="/comic-info/:id" component={ComicInfo} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
