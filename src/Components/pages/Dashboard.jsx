import React from "react";
import ComponentContainer from "../shared/ComponentContainer";
import KeyMetrices from "../shared/KeyMetrices";
import DataVisualization from "../shared/DataVisualization";

const Dashboard = () => {
  return (
    <ComponentContainer title={"Streamify Dashboard"}>
      <div>
        <KeyMetrices />
        <DataVisualization />
      </div>
    </ComponentContainer>
  );
};

export default Dashboard;
