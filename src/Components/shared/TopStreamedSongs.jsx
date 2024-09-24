import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { topStreamedSongs } from "../../assets/constants";

const TopStreamedSongs = () => {
  return (
    <div className="p-4 border-2 shadow-gray-200 rounded-xl my-4 h-80">
      <ResponsiveContainer>
        <BarChart
          data={topStreamedSongs}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          style={{ wordBreak: "break-all" }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="songName.value" />
          <YAxis />
          <Tooltip formatter={(value) => [value, "Streams"]} />
          <Legend formatter={() => "Streams"} margin={{ top: 20 }} />
          <Bar dataKey={"streams.value"} label={false} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopStreamedSongs;
