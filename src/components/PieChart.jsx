import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material";

const pieData = [
  { id: "Spain", label: "Spain", value: 47 },
  { id: "France", label: "France", value: 65 },
  { id: "Germany", label: "Germany", value: 84 },
  { id: "Italy", label: "Italy", value: 59 },
];

export default function PieChart({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <div style={{ height: isDashboard ? "380px" : "80vh" }}>
      <ResponsivePie
        data={pieData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: theme.palette.mode === "dark" ? "dark2" : "paired" }}
        borderWidth={2}
        borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
        arcLabelsTextColor={theme.palette.text.primary}
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
            anchor: "bottom",
            direction: "row",
            translateY: 50,
            itemWidth: 80,
            itemHeight: 20,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}
