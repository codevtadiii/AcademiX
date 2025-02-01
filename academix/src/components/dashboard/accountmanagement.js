import React from "react";

const AccountManagement = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Account Management</h2>
      {/* Add form or other content for account management */}
      <div>
        <label htmlFor="password" className="block">New Password:</label>
        <input type="password" id="password" className="border p-2 rounded" />
      </div>
    </div>
  );
};

export default AccountManagement;
