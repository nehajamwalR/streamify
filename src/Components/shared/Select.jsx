import React from "react";

const Select = ({ value, onChange, options }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border-2 p-2 mr-2 rounded-lg"
    >
      {options?.map((option, index) => (
        <option key={`${option.value}_index${index + 1}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
