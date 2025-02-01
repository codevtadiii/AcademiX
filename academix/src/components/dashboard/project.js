import React, { useState } from "react";

const ProjectPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prerequisites: "",
    skills: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "React App Development",
      description: "Develop a simple web app using React.",
      prerequisites: "Basic HTML, CSS, and JavaScript",
      skills: "React, JavaScript",
      level: "Beginner",
      duration: "2 weeks",
      mode: "Online",
      contactEmail: "owner1@example.com",
    },
    {
      id: 2,
      title: "Data Science Project",
      description: "Analyze data and build machine learning models.",
      prerequisites: "Python, Statistics",
      skills: "Python, Machine Learning",
      level: "Hard",
      duration: "1 month",
      mode: "Offline",
      contactEmail: "owner2@example.com",
    },
    // Add more project data here
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

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Handle form submission (you can implement email logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully! 🎉");

    // After form submission, reset form data
    setFormData({ title: "", description: "", prerequisites: "", skills: "" });
    setIsFormVisible(false); // Hide form after submission
  };

  // Filter projects based on filters state
  const filteredProjects = projects.filter((project) => {
    return (
      (filters.skill ? project.skills.toLowerCase().includes(filters.skill.toLowerCase()) : true) &&
      (filters.level ? project.level === filters.level : true) &&
      (filters.duration ? project.duration === filters.duration : true) &&
      (filters.mode ? project.mode === filters.mode : true)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header with Post Button */}
      <div className="w-full max-w-3xl flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800">Projects</h2>
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Post a Project 🚀
        </button>
      </div>

      {/* Filters */}
      <div className="w-full max-w-3xl mt-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">Filter Projects</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="skill"
            value={filters.skill}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Filter by Skill"
          />
          <select
            name="level"
            value={filters.level}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            name="duration"
            value={filters.duration}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Duration</option>
            <option value="2 weeks">2 weeks</option>
            <option value="1 month">1 month</option>
          </select>
          <select
            name="mode"
            value={filters.mode}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
      </div>

      {/* Display Projects */}
      <div className="w-full max-w-3xl mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Available Projects</h3>
        <ul>
          {filteredProjects.map((project) => (
            <li key={project.id} className="border-b py-4">
              <h4 className="font-semibold">{project.title}</h4>
              <p>{project.description}</p>
              <p><strong>Skills:</strong> {project.skills}</p>
              <p><strong>Level:</strong> {project.level}</p>
              <p><strong>Duration:</strong> {project.duration}</p>
              <p><strong>Mode:</strong> {project.mode}</p>
              <button
                onClick={() => alert(`Form sent to ${project.contactEmail}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2"
              >
                Connect with this project
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Project Form */}
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white p-6 mt-4 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Project Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:border-blue-500"
              placeholder="Enter project title"
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
              placeholder="Briefly describe your project"
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
              placeholder="E.g., React, Python, Data Science"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit Project
          </button>
        </form>
      )}
    </div>
  );
};

export default ProjectPage;
