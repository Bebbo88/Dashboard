import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import LineChart from "./LineChart";
import { transactions } from "./data";

export default function Row2() {
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={2}
      sx={{ width: "100%", mt: 4 }}
    >
      {/* LEFT BIG BOX — Revenue Chart */}
      <Paper
        sx={{
          flex: 2,
          padding: 2,
          minHeight: 430,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              color: theme.palette.secondary.main,
            }}
          >
            Revenue Generated
          </Typography>
          <Typography sx={{ opacity: 0.7 }}>$59,342.32</Typography>
        </Box>

        <Box>
          <LineChart isDashboard />
        </Box>
      </Paper>

      {/* RIGHT SMALL BOX — Recent Transactions */}
      <Paper
        sx={{
          flex: 1,
          padding: 2,
          minHeight: 330,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            color: theme.palette.secondary.main,
          }}
        >
          Recent Transactions
        </Typography>

        <Box
          sx={{
            overflowY: "auto",
            minHeight: 330,
            maxHeight: 430,
            paddingRight: 1,
          }}
        >
          {/* ==== Transaction Item ==== */}
          {transactions.map((item) => (
            <Stack
              key={item}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                padding: "12px 0",
                borderBottom: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box>
                <Typography fontWeight={600}>{item.name}</Typography>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                  {item.sub}
                </Typography>
              </Box>

              <Typography sx={{ opacity: 0.7 }}> {item.sub}</Typography>

              <Box
                sx={{
                  background: theme.palette.error.main,
                  color: "#fff",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "6px",
                  fontWeight: 600,
                }}
              >
                ${item.cost}
              </Box>
            </Stack>
          ))}
        </Box>
      </Paper>
    </Stack>
  );
}
