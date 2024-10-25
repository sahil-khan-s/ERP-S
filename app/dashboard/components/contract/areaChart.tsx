"use client";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import React from "react";
export interface DataPoint {
  month: string;
  percent: number;
}
const StateChart = ({ data }: { data: DataPoint[] }) => {
  const toPercent = (decimal: number) => `${decimal}%`;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="0" vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis
          tickFormatter={toPercent}
          domain={[0, 100]}
          type={"number"}
          tickLine={false}
          axisLine={false}
          interval={undefined}
        />
        <Area
          type="linear"
          isAnimationActive={false}
          dataKey="percent"
          stroke="#bcff21"
          fill="#faffee"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StateChart;
