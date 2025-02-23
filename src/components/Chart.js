import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const data = [
  { month: "Jan", value: 60 },
  { month: "Feb", value: 80 },
  { month: "Mar", value: 40 },
  { month: "Apr", value: 75 },
  { month: "May", value: 60 },
  { month: "Jun", value: 90 },
  { month: "Jul", value: 50 },
  { month: "Aug", value: 100 },
  { month: "Sept", value: 80 },
  { month: "Oct", value: 95 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#3498db" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
