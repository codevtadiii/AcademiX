import React from "react";

const ProfileSettings = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Profile Settings</h2>
      {/* Add form or other content for profile settings */}
      <div>
        <label htmlFor="name" className="block">Full Name:</label>
        <input type="text" id="name" className="border p-2 rounded" />
      </div>
    </div>
  );
};

export default ProfileSettings;
