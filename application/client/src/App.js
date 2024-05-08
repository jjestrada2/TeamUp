import { Routes, Route } from "react-router-dom";
import React from "react";

import Landing from './pages/Landing';
import About from './pages/About';
import AboutMember from './pages/AboutMember';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Preferences from "./pages/Preferences";
import DetailedGame from "./pages/DetailedGame";
import CreateGame from "./pages/CreateGame";
import Profile from "./pages/Profile";
import EditPreferences from "./pages/EditPreferences";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:member" element={<AboutMember />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/detailed-game/:gameId" element={<DetailedGame />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-preferences" element={<EditPreferences />} />
      </Routes>
    </div>
  );
}

export default App;