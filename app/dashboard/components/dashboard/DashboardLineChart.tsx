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

const DashboardLineChart = () => {
  const gradientFill = (ctx: any, chartArea: any) => {
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top
    );
    gradient.addColorStop(1, "rgba(201, 252, 85, 0.4)");
    gradient.addColorStop(0, "rgba(221, 255, 143, 0)");
    return gradient;
  };

  const Options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += context.raw + "%";
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
            return value + "%";
          },
          stepSize: 20,
          min: 0,
          max: 100,
        },
        beginAtZero: true,
      },
    },
  };

  const LineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [40, 40, 40, 50, 60, 70, 60, 80, 80, 80, 90, 100],
        borderColor: "rgba(107, 161, 15, 1)",
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          return gradientFill(ctx, chartArea);
        },
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 5,
      },
    ],
  };

  return <Line options={Options} data={LineChartData} className="w-full" />;
};

export default DashboardLineChart;
