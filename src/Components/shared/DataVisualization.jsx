import React, { Fragment } from "react";
import ChildrenWrapper from "../shared/ChildrenWrapper";
import UserGrowthChart from "../shared/UserGrowthChart";
import RevenueDistribution from "../shared/RevenueDistribution";
import TopStreamedSongs from "../shared/TopStreamedSongs";

const DataVisualization = () => {
  return (
    <Fragment>
      <ChildrenWrapper title="User Growth Chart">
        <UserGrowthChart />
      </ChildrenWrapper>
      <ChildrenWrapper title={"Revenue Distribution"}>
        <RevenueDistribution />
      </ChildrenWrapper>
      <ChildrenWrapper title={"Top Streamed Songs"}>
        <TopStreamedSongs />
      </ChildrenWrapper>
    </Fragment>
  );
};

export default DataVisualization;
