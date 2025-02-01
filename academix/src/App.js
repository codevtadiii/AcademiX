import React from "react";

import LandingPage from "./components/LandingPage";  


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/loginpage";
import SignupPage from "./components/SignupPage";
import Dashboard from "./components/Dashboard";
import Project from "./components/dashboard/project";
import ActiveCollaborations from "./components/dashboard/activecollabrations"; // Corrected import path
import StudyGroup from "./components/dashboard/studygroup"; // Corrected import path
import QueriesWritten from "./components/dashboard/QueriesWritten"; // Added import for QueriesWritten
import ProfileSettings from "./components/dashboard/profilesettings"; // Added import for ProfileSettings
import AccountManagement from "./components/dashboard/accountmanagement"; // Added import for AccountManagement

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/collaborations" element={<ActiveCollaborations />} /> {/* New route for active collaborations */}
        <Route path="/studygroup" element={<StudyGroup />} /> {/* New route for study group */}
        <Route path="/queries-written" element={<QueriesWritten />} />  {/* New route for QueriesWritten */}
        <Route path="/profile-settings" element={<ProfileSettings />} />  {/* New route for ProfileSettings */}
        <Route path="/account-management" element={<AccountManagement />} />  {/* New route for AccountManagement */}
      </Routes>
    </Router>

  );
}

export default App;
