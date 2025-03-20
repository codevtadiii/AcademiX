import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ActiveCollaborations = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Sample data for Study Groups and Projects (You may fetch this from an API)
  const [studyGroups, setStudyGroups] = useState([
    {
      id: 1,
      title: "Math Study Group",
      description: "Collaborate with peers to solve math problems.",
      level: "Beginner",
      contactEmail: "mathgroup@example.com",
    },
    {
      id: 2,
      title: "Science Study Group",
      description: "Learn and discuss scientific concepts.",
      level: "Intermediate",
      contactEmail: "sciencegroup@example.com",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: 3,
      title: "React App Development",
      description: "Develop a simple web app using React.",
      prerequisites: "Basic HTML, CSS, and JavaScript",
      skills: "React, JavaScript",
      level: "Beginner",
      contactEmail: "reactproject@example.com",
    },
    {
      id: 4,
      title: "Data Science Project",
      description: "Analyze data and build machine learning models.",
      prerequisites: "Python, Statistics",
      skills: "Python, Machine Learning",
      level: "Hard",
      contactEmail: "datascienceproject@example.com",
    },
  ]);

  // Handle delete collaboration (both from Study Groups and Projects)
  const handleDelete = (id) => {
    setStudyGroups((prev) => prev.filter((group) => group.id !== id));
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Collaborations</h2>

      {/* Active Collaborations List */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Collaboration List</h3>
        <ul>
          {studyGroups.length + projects.length > 0 ? (
            [...studyGroups, ...projects].map((collaboration) => (
              <li key={collaboration.id} className="border-b py-4">
                <h4 className="font-semibold">{collaboration.title}</h4>
                <p>{collaboration.description}</p>
                <p><strong>Level:</strong> {collaboration.level}</p>
                <p><strong>Email:</strong> {collaboration.contactEmail}</p>
                <button
                  onClick={() => handleDelete(collaboration.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-700"
                >
                  Delete Collaboration
                </button>
              </li>
            ))
          ) : (
            <p>No active collaborations available at the moment.</p>
          )}
        </ul>
      </div>

      {/* Button to add new collaboration (optional) */}
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-6 hover:bg-blue-700"
      >
        Go Back to Dashboard
      </button>
    </div>
  );
};

export default ActiveCollaborations;
