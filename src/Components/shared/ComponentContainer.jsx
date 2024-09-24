import React from "react";

const ComponentContainer = ({ title, children }) => {
  return (
    <div className="w-full h-screen mx-auto">
      <div className="border-b-2 fixed bg-white z-10 w-svw">
        <h2 className="text-3xl font-bold py-6 px-4 md:px-10 text-center md:text-start">
          {title}
        </h2>
      </div>
      <div className="py-28 px-4 md:px-10">{children}</div>
    </div>
  );
};

export default ComponentContainer;
