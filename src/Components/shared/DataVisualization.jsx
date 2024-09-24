import React from "react";
import data from "../../data.json";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const mappedData = data.userGrowth
  .map((item) => ({
    month: item.month.value,
    totalUsers: item.totalUsers.value,
    activeUsers: item.activeUsers.value,
  }))
  .sort((a, b) => new Date(a.month) - new Date(b.month));

const DataVisualization = () => {
  return (
    <div>
      <div className="p-4 border-2 shadow-gray-200 rounded-xl my-4">
        <LineChart
          width={500}
          height={300}
          data={mappedData}
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
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="totalUsers"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default DataVisualization;
