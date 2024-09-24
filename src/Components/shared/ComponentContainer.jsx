import React from "react";

const ComponentContainer = ({ title, children }) => {
  return (
    <div className="w-full p-8">
      <h2 className="text-3xl font-bold pb-6 mb-4 border-b-2 text-center sm:text-start">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default ComponentContainer;
