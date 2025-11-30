import { Box, Stack, Typography, Paper, useTheme } from "@mui/material";

import Geography from "./Geography";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

export default function Row3() {
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      gap={2}
      sx={{ width: "100%", mt: 2 }}
    >
      {/* ------------------- Campaign ------------------- */}
      <Paper
        sx={{
          flex: 1,
          // border: `2px solid ${theme.palette.secondary.main}`,
          p: 2,
          minHeight: 420,
          maxWidth: { lg: "400px" },
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 1, color: theme.palette.secondary.main }}
        >
          Campaign
        </Typography>

        <Box sx={{ height: 200 }}>
          <PieChart isDashboard />
        </Box>

        {/* <Typography sx={{ mt: 1, fontWeight: 600, fontSize: "14px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography sx={{ fontSize: "13px", opacity: 0.7 }}>
          Includes extra misc expenditures and costs
        </Typography> */}
      </Paper>

      {/* ------------------- Sales Quantity ------------------- */}
      <Paper
        sx={{
          flex: 1,
          // border: `2px solid ${theme.palette.secondary.main}`,
          p: 2,
          minHeight: 420,
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 1, color: theme.palette.secondary.main }}
        >
          Sales Quantity
        </Typography>

        <Box sx={{ height: 250 }}>
          <BarChart isDashboard />
        </Box>
      </Paper>

      {/* ------------------- Geography Map ------------------- */}
      <Paper
        sx={{
          flex: 1,
          // border: `2px solid ${theme.palette.secondary.main}`,
          p: 2,
          minHeight: 420,
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 1, color: theme.palette.secondary.main }}
        >
          Geography Based Traffic
        </Typography>
        <Box>
          <Geography isDashboard />
        </Box>
      </Paper>
    </Stack>
  );
}
