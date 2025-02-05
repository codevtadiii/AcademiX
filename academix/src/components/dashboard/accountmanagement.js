import React, { useState } from "react";

const AccountManagement = () => {
  const [twoStepVerification, setTwoStepVerification] = useState(false);
  const [multiStepVerification, setMultiStepVerification] = useState(false);
  
  // Mock login sessions
  const [loginSessions, setLoginSessions] = useState([
    { id: 1, device: "Windows PC", location: "New York, USA", lastLogin: "2025-02-01 10:30 AM" },
    { id: 2, device: "Android Phone", location: "Los Angeles, USA", lastLogin: "2025-02-03 8:15 PM" },
    { id: 3, device: "MacBook Pro", location: "London, UK", lastLogin: "2025-02-02 5:00 PM" },
  ]);

  // Handle logout from a specific device
  const handleLogout = (id) => {
    setLoginSessions(loginSessions.filter(session => session.id !== id));
    alert("Logged out from the selected device.");
  };

  // Handle logout from all devices except the current one
  const handleLogoutAll = () => {
    setLoginSessions([]); // In real implementation, call backend to revoke tokens
    alert("Logged out from all other devices.");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Account Management</h2>

      {/* Login Sessions */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-2">Active Login Sessions</h3>
        <ul>
          {loginSessions.length > 0 ? (
            loginSessions.map((session) => (
              <li key={session.id} className="border-b py-3 flex justify-between items-center">
                <div>
                  <p><strong>Device:</strong> {session.device}</p>
                  <p><strong>Location:</strong> {session.location}</p>
                  <p><strong>Last Login:</strong> {session.lastLogin}</p>
                </div>
                <button 
                  onClick={() => handleLogout(session.id)} 
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No active sessions.</p>
          )}
        </ul>
        {loginSessions.length > 1 && (
          <button 
            onClick={handleLogoutAll} 
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Logout from All Devices
          </button>
        )}
      </div>

      {/* Security Settings */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Security Settings</h3>

        {/* Two-Step Verification Toggle */}
        <div className="flex justify-between items-center border-b py-3">
          <p>Enable 2-Step Verification</p>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={twoStepVerification} 
              onChange={() => setTwoStepVerification(!twoStepVerification)} 
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Multi-Step Verification Toggle */}
        <div className="flex justify-between items-center border-b py-3">
          <p>Enable Multi-Step Verification</p>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={multiStepVerification} 
              onChange={() => setMultiStepVerification(!multiStepVerification)} 
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      {/* Toggle Switch Styles */}
      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 20px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 20px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 14px;
          width: 14px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: #4CAF50;
        }
        input:checked + .slider:before {
          transform: translateX(20px);
        }
      `}</style>
    </div>
  );
};

export default AccountManagement;
