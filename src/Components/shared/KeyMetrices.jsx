import React from "react";
import data from "../../data.json";
import Card from "./Card";

const KeyMetrices = () => {
  return (
    <div className="flex flex-wrap gap-8 py-4">
      {Object.keys(data?.keyMetrics).map((item) => (
        <Card
          label={data?.keyMetrics[item].label}
          value={data?.keyMetrics[item].value}
        />
      ))}
    </div>
  );
};

export default KeyMetrices;
