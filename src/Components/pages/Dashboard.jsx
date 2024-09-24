import React from "react";
import ComponentContainer from "../shared/ComponentContainer";
import KeyMetrices from "../shared/KeyMetrices";
import DataVisualization from "../shared/DataVisualization";
import StreamsTable from "../shared/StreamsTable";
import ChildrenWrapper from "../shared/ChildrenWrapper";

const Dashboard = () => {
  return (
    <ComponentContainer title={"Streamify Dashboard"}>
      <div>
        <KeyMetrices />
        <div className="flex flex-col gap-8 pt-6">
          <DataVisualization />
          <ChildrenWrapper title={"Recent Streams Table"}>
            <StreamsTable />
          </ChildrenWrapper>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default Dashboard;
