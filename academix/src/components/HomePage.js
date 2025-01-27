import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-xl font-semibold text-gray-800">
            <span className="text-blue-700 font-bold">PeerCollab</span>
          </div>
          <div>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md mr-4 hover:bg-gray-100">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white text-center py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Find Your Perfect <span className="text-blue-700">Academic Partner</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Connect with like-minded students, collaborate on projects, and excel in your
            academic journey through intelligent peer matching.
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 bg-blue-700 text-white rounded-md text-lg mr-4 hover:bg-blue-800">
              Get Started Now
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-md text-lg hover:bg-gray-200">
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Why Choose PeerCollab?
          </h2>
          <p className="text-gray-600 text-center mt-4 mb-10">
            Discover the features that make our platform unique and effective.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Cards */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-blue-700 text-4xl mb-4">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Smart Matching
              </h3>
              <p className="text-gray-600 mt-2">
                Our AI-powered system connects you with peers who complement your skills and learning style.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-blue-700 text-4xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Study Groups
              </h3>
              <p className="text-gray-600 mt-2">
                Form or join study groups based on your courses and academic interests.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-blue-700 text-4xl mb-4">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Project Collaboration
              </h3>
              <p className="text-gray-600 mt-2">
                Find teammates for academic projects and research initiatives.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-blue-700 text-4xl mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Skill Enhancement
              </h3>
              <p className="text-gray-600 mt-2">
                Learn from peers and share your knowledge in a collaborative environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
