import React from "react";

const Activity = () => {
  return (
    <div className="activity bg-white p-4 rounded-lg shadow-md flex-1">
      <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
      <div className="activity-item flex items-center gap-4 p-2 border-b">
        <span className="activity-icon text-xl">👥</span>
        <div>
          <p><strong>New collaboration request</strong></p>
          <p className="text-sm text-gray-600">From Alex for Data Structures project</p>
        </div>
        <span className="new-badge bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
      </div>
    </div>
  );
};

export default Activity;
