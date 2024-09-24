import React from "react";
import ComponentContainer from "../shared/ComponentContainer";
import StreamsTable from "../shared/StreamsTable";

const RecentStreams = () => {
  return (
    <ComponentContainer title={"Recent Streams"}>
      <StreamsTable />
    </ComponentContainer>
  );
};

export default RecentStreams;
