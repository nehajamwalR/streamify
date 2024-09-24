import React from "react";

const ComponentContainer = ({ title, children }) => {
  return (
    <div className="w-full h-screen px-8 mx-auto box-border">
      <h2 className="text-3xl font-bold py-6 border-b-2 text-center sm:text-start fixed z-10 bg-white w-full">
        {title}
      </h2>
      <div className="py-28">{children}</div>
    </div>
  );
};

export default ComponentContainer;
