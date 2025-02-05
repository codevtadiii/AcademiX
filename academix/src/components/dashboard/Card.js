import React from "react";

const Card = ({ title, count, icon }) => {
  return (
    <div className="card bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
      <span className="card-icon text-2xl">{icon}</span>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{count}</p>
      </div>
    </div>
  );
};

export default Card;
