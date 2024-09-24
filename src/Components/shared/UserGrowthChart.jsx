import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { userGrowth } from "../../assets/constants";

const UserGrowthChart = () => {
  return (
    <div className="flex justify-center items-center p-4 border-2 shadow-gray-200 rounded-xl my-4 overflow-hidden">
      <LineChart
        width={500}
        height={300}
        data={userGrowth}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip
          formatter={(value, name) => [
            value,
            name === "totalUsers" ? "Total users" : "Active users",
          ]}
        />
        <Legend
          formatter={(value) =>
            value === "totalUsers" ? "Total users" : "Active users"
          }
        />
        <Line
          type="monotone"
          dataKey="totalUsers"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default UserGrowthChart;
