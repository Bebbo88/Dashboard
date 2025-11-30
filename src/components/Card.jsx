import { Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import React from "react";

export default function Card({
  icon,
  title,
  subtitle,
  data,
  scheme,
  pecentage,
}) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        width: 330,
        flexGrow: 1,
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack direction={"column"} gap={1}>
        {icon}
        <Typography>{title}</Typography>
        <Typography>{subtitle}</Typography>
      </Stack>
      <Stack
        sx={{
          height: 100,
          width: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
        spacing={0.5}
      >
        <div style={{ height: 70, width: 70 }}>
          <ResponsivePie
            data={data}
            innerRadius={0.6}
            padAngle={0.6}
            cornerRadius={2}
            colors={{ scheme: scheme }}
            enableArcLinkLabels={false}
            enableArcLabels={false}
            theme={{
              background: "transparent",
              textColor: theme.palette.text.primary,
              fontSize: 12,
              axis: {
                domain: { line: { stroke: "none" } },
                ticks: { line: { stroke: "none" } },
              },
              grid: { line: { stroke: "none" } },
              legends: { text: { fill: theme.palette.text.primary } },
              tooltip: {
                container: {
                  background: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  borderRadius: "4px",
                  boxShadow: theme.shadows[3],
                },
              },
            }}
          />
        </div>

        <Typography sx={{ fontSize: 14, textAlign: "center" }}>
          {pecentage}
        </Typography>
      </Stack>
    </Paper>
  );
}
