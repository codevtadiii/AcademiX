import React, { useState } from "react";

const StudyGroupPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prerequisites: "",
    skills: "",
    level: "",
    duration: "",
    mode: "",
    contactEmail: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [studyGroups, setStudyGroups] = useState([
    {
      id: 1,
      title: "JavaScript Study Group",
      description: "Study JavaScript fundamentals and advanced topics together.",
      prerequisites: "Basic understanding of programming",
      skills: "JavaScript, Web Development",
      level: "Beginner",
      duration: "4 weeks",
      mode: "Online",
      contactEmail: "owner1@example.com",
    },
    {
      id: 2,
      title: "Data Science Bootcamp",
      description: "Collaborate on projects and learn data science concepts.",
      prerequisites: "Python, Statistics knowledge",
      skills: "Python, Machine Learning, Data Analysis",
      level: "Moderate",
      duration: "2 months",
      mode: "Offline",
      contactEmail: "owner2@example.com",
    },
  ]);

  const [filters, setFilters] = useState({
    skill: "",
    level: "",
    duration: "",
    mode: "",
  });

  // Handle input changes for form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new study group object
    const newStudyGroup = {
      id: studyGroups.length + 1, // Generate unique ID
      ...formData,
    };

    // Update study groups state
    setStudyGroups([...studyGroups, newStudyGroup]);

    // Show success message
    alert("Study Group posted successfully! 🎉");

    // Reset form
    setFormData({
      title: "",
      description: "",
      prerequisites: "",
      skills: "",
      level: "",
      duration: "",
      mode: "",
      contactEmail: "",
    });

    setIsFormVisible(false); // Hide form after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header with Post Button */}
      <div className="w-full max-w-3xl flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800">Study Groups</h2>
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Post a Study Group 🚀
        </button>
      </div>

      {/* Display Study Groups */}
      <div className="w-full max-w-3xl mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Available Study Groups</h3>
        <ul>
          {studyGroups.map((studyGroup) => (
            <li key={studyGroup.id} className="border-b py-4">
              <h4 className="font-semibold">{studyGroup.title}</h4>
              <p>{studyGroup.description}</p>
              <p><strong>Skills:</strong> {studyGroup.skills}</p>
              <p><strong>Level:</strong> {studyGroup.level}</p>
              <p><strong>Duration:</strong> {studyGroup.duration}</p>
              <p><strong>Mode:</strong> {studyGroup.mode}</p>
              <button
                onClick={() => alert(`Form sent to ${studyGroup.contactEmail}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2"
              >
                Connect with this group
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Study Group Form */}
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white p-6 mt-4 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Study Group Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:border-blue-500"
              placeholder="Enter study group title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:border-blue-500"
              placeholder="Briefly describe your study group"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Prerequisites</label>
            <input
              type="text"
              name="prerequisites"
              value={formData.prerequisites}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:border-blue-500"
              placeholder="Any required knowledge before joining?"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Required Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:border-blue-500"
              placeholder="E.g., JavaScript, Python, Data Science"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Level</label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Moderate">Moderate</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Duration</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Duration</option>
              <option value="4 weeks">4 weeks</option>
              <option value="2 months">2 months</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Mode</label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit Study Group
          </button>
        </form>
      )}
    </div>
  );
};

export default StudyGroupPage;
