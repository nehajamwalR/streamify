import React from "react";

const TableHeader = ({ text }) => {
  return (
    <th className="px-2 py-5 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
      {text}
    </th>
  );
};

export default TableHeader;
