import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing necessary components
import Activity from "./dashboard/Activity"; // Ensure Activity component is used
import Peers from "./dashboard/Peers"; // Ensure Peers component is used

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false); // To control sidebar visibility

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="header bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
        <h2 className="text-xl font-bold">PeerCollab</h2>

        {/* Profile Icon */}
        <div className="profile-icon">
          <button onClick={toggleSidebar} className="bg-blue-600 text-white p-4 rounded-full shadow-md hover:bg-blue-700 transition">
            <span className="text-2xl">👤</span> {/* Profile Icon */}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {sidebarVisible && (
        <div className="sidebar fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => navigate("/profile-settings")}
                className="w-full p-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Profile Settings
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/account-management")}
                className="w-full p-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Account Management
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/authentication")}
                className="w-full p-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Authentication
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/signout")}
                className="w-full p-2 bg-red-600 rounded-md hover:bg-red-700 transition"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Stats Section */}
      <div className="stats grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {/* Active Collaborations Button */}
        <button
          onClick={() => navigate("/collaborations")}
          className="flex flex-col items-center justify-center bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <span className="text-2xl">👥</span>
          <span className="font-semibold">Active Collaborations</span>
          <span className="text-lg">3</span>
        </button>

        {/* Study Groups Button */}
        <button
          onClick={() => navigate("/studygroup")}
          className="flex flex-col items-center justify-center bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <span className="text-2xl">📖</span>
          <span className="font-semibold">Study Groups</span>
          <span className="text-lg">2</span>
        </button>

        {/* Projects Button */}
        <button
          onClick={() => navigate("/project")}
          className="flex flex-col items-center justify-center bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <span className="text-2xl">🎯</span>
          <span className="font-semibold">Projects</span>
          <span className="text-lg">4</span>
        </button>

        {/* Queries Written Button */}
        <button
          onClick={() => navigate("/queries-written")}
          className="flex flex-col items-center justify-center bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <span className="text-2xl">📅</span>
          <span className="font-semibold">Queries Written</span>
          <span className="text-lg">5</span>
        </button>
      </div>

      {/* Main Section */}
      <div className="main-section flex flex-col md:flex-row gap-4 p-4">
        <Activity />
        <Peers />
      </div>
    </div>
  );
};

export default Dashboard;
