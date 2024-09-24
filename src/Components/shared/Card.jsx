import React from "react";

const Card = ({ label, value }) => {
  return (
    <div className="flex flex-col text-left gap-4 border-2 shadow-gray-200 p-4 rounded-xl">
      <h1 className="text-2xl font-semibold">{label}</h1>
      <p>{value}</p>
    </div>
  );
};

export default Card;
