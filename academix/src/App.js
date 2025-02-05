import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";  // ✅ Correct import
import LoginPage from "./components/loginpage";
import SignupPage from "./components/SignupPage";
import Dashboard from "./components/Dashboard";
import Project from "./components/dashboard/project";
import ActiveCollaborations from "./components/dashboard/activecollabrations";
import StudyGroup from "./components/dashboard/studygroup";
import QueriesWritten from "./components/dashboard/QueriesWritten";
import ProfileSettings from "./components/dashboard/profilesettings";
import AccountManagement from "./components/dashboard/accountmanagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />  {/* ✅ Using LandingPage component correctly */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/collaborations" element={<ActiveCollaborations />} />
        <Route path="/studygroup" element={<StudyGroup />} />
        <Route path="/queries-written" element={<QueriesWritten />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/account-management" element={<AccountManagement />} />
        <Route path="/signout" element={<LandingPage />} />  {/* ✅ Redirecting signout to landing page */}
      </Routes>
    </Router>
  );
}

export default App;
