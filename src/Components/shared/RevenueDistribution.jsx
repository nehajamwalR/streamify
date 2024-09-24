import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { barChartColors, revenueDistribution } from "../../assets/constants";

const RevenueDistribution = () => {
  return (
    <div className="flex justify-center items-center p-4 border-2 shadow-gray-200 rounded-xl my-4 overflow-hidden">
      <PieChart width={500} height={300}>
        <Pie
          data={revenueDistribution}
          dataKey="amount.value"
          nameKey="source.value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {revenueDistribution.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={barChartColors[index % barChartColors.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default RevenueDistribution;
