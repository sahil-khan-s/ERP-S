"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardDoughnutChart = () => {
  const data = {
    labels: ["Contract Value", "Resources"],
    datasets: [
      {
        label: "Total Cont.",
        data: [42, 79],
        backgroundColor: ["#000002", "#DDFF8F"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            label += context.raw;
            return label;
          },
        },
      },
    },
    rotation: 0, // Start angle for the chart
    circumference: 360, // Draw only half circle
  };

  return (
    <div className="relative flex justify-center">
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h2 className="text-2xl font-bold">121</h2>
        <p>Total Cont.</p>
      </div>
    </div>
  );
};

export default DashboardDoughnutChart;
