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
import MyGames from "./pages/MyGames";
import CreateGame from "./pages/CreateGame";
import Profile from "./pages/Profile";
import EditPreferences from "./pages/EditPreferences";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";

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
        <Route path="/mygames" element={<MyGames />} />
        <Route path="/detailed-game/:gameId" element={<DetailedGame />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-preferences" element={<EditPreferences />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail/>} />
      </Routes>
    </div>
  );
}

export default App;