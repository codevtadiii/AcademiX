import React, { useState } from "react";

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    username: "",
    bio: "",
    profilePic: null, // For storing the uploaded profile picture
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, profilePic: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>

      {/* Profile Picture Upload */}
      <div className="mb-4 text-center">
        <label className="block font-semibold mb-1">Profile Picture:</label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-blue-600 hover:file:bg-gray-100"
        />
        {profile.profilePic && (
          <img
            src={URL.createObjectURL(profile.profilePic)}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full mt-2 mx-auto"
          />
        )}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter your email"
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter your username"
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label htmlFor="bio" className="block font-semibold">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-full border p-2 rounded h-20"
            placeholder="Tell something about yourself"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
