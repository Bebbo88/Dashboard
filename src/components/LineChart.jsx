import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";

const lineData = [
  {
    id: "Spain",
    data: [
      { x: "2020", y: -10 },
      { x: "2021", y: 5 },
      { x: "2022", y: 4.7 },
      { x: "2023", y: 2.5 },
    ],
  },
  {
    id: "France",
    data: [
      { x: "2020", y: -8 },
      { x: "2021", y: 6.8 },
      { x: "2022", y: 2.5 },
      { x: "2023", y: 1 },
    ],
  },
  {
    id: "Germany",
    data: [
      { x: "2020", y: -4.6 },
      { x: "2021", y: 2.9 },
      { x: "2022", y: 1.8 },
      { x: "2023", y: -0.3 },
    ],
  },
  {
    id: "Italy",
    data: [
      { x: "2020", y: -8.9 },
      { x: "2021", y: 6.6 },
      { x: "2022", y: 3.7 },
      { x: "2023", y: 0.7 },
    ],
  },

  // 🇬🇧 United Kingdom
  {
    id: "United Kingdom",
    data: [
      { x: "2020", y: -9.3 },
      { x: "2021", y: 7.5 },
      { x: "2022", y: 4.3 },
      { x: "2023", y: 0.5 },
    ],
  },

  // 🇳🇱 Netherlands
  {
    id: "Netherlands",
    data: [
      { x: "2020", y: -3.8 },
      { x: "2021", y: 4.9 },
      { x: "2022", y: 4.5 },
      { x: "2023", y: 0.7 },
    ],
  },

  // 🇧🇪 Belgium
  {
    id: "Belgium",
    data: [
      { x: "2020", y: -5.4 },
      { x: "2021", y: 6.2 },
      { x: "2022", y: 3.1 },
      { x: "2023", y: 1.1 },
    ],
  },

  // 🇵🇹 Portugal
  {
    id: "Portugal",
    data: [
      { x: "2020", y: -8.3 },
      { x: "2021", y: 5.8 },
      { x: "2022", y: 6.7 },
      { x: "2023", y: 2.2 },
    ],
  },
];

export default function LineChart({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <div style={{ height: isDashboard ? "380px" : "80vh" }}>
      <ResponsiveLine
        data={lineData}
        curve="natural"
        margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto" }}
        colors={{ scheme: theme.palette.mode === "dark" ? "set1" : "paired" }}
        axisBottom={{ legend: isDashboard ? null : "Year", legendOffset: 36 }}
        axisLeft={{
          legend: isDashboard ? null : "GDP Growth %",
          legendOffset: -45,
        }}
        pointSize={10}
        pointBorderWidth={2}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 12,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.text.primary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
              strokeDasharray: "3 3",
            },
          },
          legends: {
            text: {
              fill: theme.palette.text.primary,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              borderRadius: "4px",
              boxShadow: theme.shadows[3],
            },
          },
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}
