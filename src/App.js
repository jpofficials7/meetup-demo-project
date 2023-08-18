import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";

function App() {
  //Domain: localhost:3000/
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />} />
        <Route exact path="/new-meetup" element={<NewMeetupPage />} />
        <Route exact path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
