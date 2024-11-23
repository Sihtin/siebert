import * as React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const AreaChartUI = () => {
  const createGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    gradient.addColorStop(0, "rgba(225, 251, 240, 1)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 1)");
    return gradient;
  };
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekDaysTwo = ["Mon", "Tue", "Wed"];

  const data = Array.from({ length: 31 }, (_, index) => {
    const dayOfMonth = index + 1;
    const date = new Date(2024, 0, dayOfMonth);
    date.setDate(date.getDate() + 2);

    const week = weekDaysTwo[dayOfMonth % 3];

    return { day: dayOfMonth, week };
  });

  const chartData = {
    datasets: [
      {
        label: "Weekdays",
        data: data.map((entry) => entry.week),
        borderColor: "rgba(225, 251, 240, 1)",
        borderWidth: 0,
        pointRadius: 0,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          return createGradient(ctx);
        },
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
        title: {
          display: false,
          text: "Day of the Month",
        },
        labels: data.map((entry) => entry.day),
      },
      y: {
        grid: {
          display: false,
        },

        title: {
          display: false,
          text: "Weekdays",
        },
        type: "category",
        labels: weekDays,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "450px" }}>
      <h2>Dashboard</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default AreaChartUI;
