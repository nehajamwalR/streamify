import React from "react";

const ChildrenWrapper = ({ title, children }) => {
  return (
    <div className="w-full">
      {title && <h1 className="text-left text-xl font-medium">{title}</h1>}

      <div>{children}</div>
    </div>
  );
};

export default ChildrenWrapper;
