import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";

const data = [
  { year: 2020, Spain: 900, France: 1400, Germany: 1700 },
  { year: 2021, Spain: 1000, France: 1500, Germany: 1800 },
  { year: 2022, Spain: 1100, France: 1600, Germany: 1900 },
  { year: 2023, Spain: 1260, France: 1709, Germany: 2080 },
];

export default function BarChart({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <div style={{ height: isDashboard ? "380px" : "80vh" }}>
      <ResponsiveBar
        data={data}
        keys={["Spain", "France", "Germany"]}
        indexBy="year"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={[
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.success.main,
        ]}
        colorBy="id"
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
        axisBottom={{
          legend: isDashboard ? null : "Year",
          legendOffset: 32,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: isDashboard ? null : "Salary (€)",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            translateX: 120,
            itemsSpacing: 5,
            itemWidth: 100,
            itemHeight: 20,
          },
        ]}
      />
    </div>
  );
}
