import React from "react";
import Card from "./Card";
import { keyMetrices } from "../../assets/constants";

const KeyMetrices = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 py-4">
      {Object.keys(keyMetrices).map((item, index) => (
        <Card
          key={`${keyMetrices[item].value}_index_${index + 1}`}
          label={keyMetrices[item].label}
          value={keyMetrices[item].value}
        />
      ))}
    </div>
  );
};

export default KeyMetrices;
