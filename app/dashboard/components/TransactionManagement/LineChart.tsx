"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const Options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        align: "start" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += context.raw + "M";
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#A8A8A8",
        },
      },
      y: {
        grid: {
          display: true,
          color: "#E5E5E5",
        },
        ticks: {
          color: "#A8A8A8",
          callback: function (value: any) {
            return value + "M";
          },
          stepSize: 20,
          min: 80,
          max: 140,
        },
      },
    },
  };

  const LineChartData = {
    labels: [
      "20 Jun",
      "21 Jun",
      "22 Jun",
      "23 Jun",
      "24 Jun",
      "25 Jun",
      "26 Jun",
      "27 Jun",
      "28 Jun",
      "29 Jun",
      "30 Jun",
    ],
    datasets: [
      {
        label: "Salary",
        data: [120, 100, 90, 110, 120, 130, 90, 130, 120, 110, 100],
        borderColor: "rgba(107, 161, 15, 1)",
        backgroundColor: "rgba(107, 161, 15, 1)",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "Cash bond",
        data: [100, 90, 110, 110, 100, 100, 130, 120, 120, 90, 125],
        borderColor: "rgba(255, 193, 7, 1)",
        backgroundColor: "rgba(255, 193, 7, 1)",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  return <Line options={Options} data={LineChartData} className="w-full" />;
};

export default LineChart;
