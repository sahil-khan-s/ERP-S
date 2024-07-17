"use client";

import React from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ title, data }: { title: string; data: any }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        align: "start" as const,
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
};

const ActivityCharts = () => {
  const perWeekData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Activity",
        data: [3, 2, 2, 3, 3, 2, 3],
        backgroundColor: ["#6BA10F", "#FFC107"],
        borderRadius: 50,
        borderSkipped: false,
        barThickness: 25,
      },
    ],
  };

  const perMonthData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Activity",
        data: [12, 15, 13, 10, 12, 15, 13, 10],
        backgroundColor: ["#6BA10F", "#FFC107"],
        borderRadius: 50,
        borderSkipped: false,
        barThickness: 20,
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="w-full h-0 pb-[56.25%] relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <BarChart title="Per Week" data={perWeekData} />
          </div>
        </div>
        <div className="w-full h-0 pb-[56.25%] relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <BarChart title="Per Month" data={perMonthData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityCharts;
