// File: C:\Users\Admin\React\3-2 app dev\AcademiX-1\academix\src\components\dashboard\QueriesWritten.js

import React, { useState } from 'react';

const QueriesWritten = () => {
  // State to store the list of queries and the current query being typed
  const [queries, setQueries] = useState([]); 
  const [newQuery, setNewQuery] = useState('');

  // Function to handle adding a new query
  const handleAddQuery = (e) => {
    e.preventDefault(); // Prevent page reload
    if (newQuery.trim() !== '') {
      setQueries([...queries, newQuery]);
      setNewQuery(''); // Clear input after adding the query
    }
  };

  return (
    <div className="queries-written p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-center">Queries Written</h2>
      <p className="text-center text-gray-600">Submit your queries and track them below!</p>
      
      {/* Form for submitting new query */}
      <form onSubmit={handleAddQuery} className="flex flex-col items-center space-y-4">
        <input
          type="text"
          value={newQuery}
          onChange={(e) => setNewQuery(e.target.value)}
          placeholder="Write your query here..."
          className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Post Query
        </button>
      </form>

      {/* Display the list of queries */}
      <div className="queries-list space-y-4">
        {queries.length > 0 ? (
          queries.map((query, index) => (
            <div
              key={index}
              className="query-item p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <p className="text-gray-800">{query}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No queries posted yet.</p>
        )}
      </div>
    </div>
  );
};

export default QueriesWritten;
