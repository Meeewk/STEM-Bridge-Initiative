import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import "./index.css";

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#E0E0E0"];

export default function DonationProgressPie({ goal, categories }) {
  const totalRaised = categories.reduce((sum, cat) => sum + cat.amount, 0);

  const data = [
    ...categories.map((cat) => ({
      name: cat.name,
      value: cat.amount,
    })),
  ];

  if (totalRaised < goal) {
    data.push({
      name: "Remaining",
      value: goal - totalRaised,
    });
  }

  return (
    <motion.div
      className="donation-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{marginTop: "-2vh"}}
    >
      <h2 className="donation-title">Donation Progress</h2>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="clamp(120px, 20vw, 250px)"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.name === "Remaining"
                      ? "#00000010"
                      : COLORS[index % COLORS.length]
                  }
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="center-text">
          <span className="percent">
            {((totalRaised / goal) * 100).toFixed(0)}%
          </span>
          <span className="goal">of ${goal.toLocaleString()}</span>
        </div>
      </div>

      <div className="legend-wrapper">
        {data.map((entry, index) => (
          <div key={index} className="legend-item">
            <div
              className="legend-color"
              style={{
                backgroundColor:
                  entry.name === "Remaining"
                    ? "#00000010"
                    : COLORS[index % COLORS.length],
              }}
            ></div>
            <span className="legend-label">
              {entry.name}{" "}
              {entry.name !== "Remaining" &&
                `(${((entry.value / goal) * 100).toFixed(1)}%)`}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
