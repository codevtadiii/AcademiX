import React from "react";

const Peers = () => {
  return (
    <div className="peers bg-white p-4 rounded-lg shadow-md flex-1">
      <h3 className="text-lg font-bold mb-4">Recommended Peers</h3>
      <div className="peer-card flex items-center gap-4 border-b p-2">
        <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full" />
        <div className="peer-info">
          <p><strong>Sarah Chen</strong></p>
          <p className="text-sm text-gray-600">Machine Learning, Python</p>
        </div>
        <button className="connect-btn bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Peers;
