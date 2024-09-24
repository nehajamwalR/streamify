import React, { Fragment } from "react";
import ChildrenWrapper from "../shared/ChildrenWrapper";
import UserGrowthChart from "../shared/UserGrowthChart";
import RevenueDistribution from "../shared/RevenueDistribution";
import TopStreamedSongs from "../shared/TopStreamedSongs";

const DataVisualization = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-none lg:grid-cols-2 lg:gap-8">
        <ChildrenWrapper title="User Growth Chart">
          <UserGrowthChart />
        </ChildrenWrapper>
        <ChildrenWrapper title={"Revenue Distribution"}>
          <RevenueDistribution />
        </ChildrenWrapper>
      </div>
      <ChildrenWrapper title={"Top Streamed Songs"}>
        <TopStreamedSongs />
      </ChildrenWrapper>
    </Fragment>
  );
};

export default DataVisualization;
