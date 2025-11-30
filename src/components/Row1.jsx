import { Box, Button, Stack, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import { data1, data2, data3, data4 } from "./data";

export default function Row1() {
  const theme = useTheme();

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="contained"
          startIcon={<DownloadOutlinedIcon />}
          sx={{
            backgroundColor: "#4cceac",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            px: 3,
            py: 1,
            borderRadius: "8px",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#3da58a",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
            },
          }}
        >
          Download Reports
        </Button>
      </Box>
      <Stack direction="row" gap={2} flexWrap="wrap">
        <Card
          icon={
            <EmailOutlinedIcon
              sx={{ color: theme.palette.secondary.main, fontSize: "26px" }}
            />
          }
          title="12,361"
          subtitle="Emails Sent"
          pecentage="+14%"
          data={data1}
          scheme="paired"
        />

        <Card
          icon={
            <PointOfSaleOutlinedIcon
              sx={{ color: theme.palette.secondary.main, fontSize: "26px" }}
            />
          }
          title="431,225"
          subtitle="Sales Obtained"
          pecentage="+21%"
          data={data2}
          scheme="dark2"
        />

        <Card
          icon={
            <PersonAddOutlinedIcon
              sx={{ color: theme.palette.secondary.main, fontSize: "26px" }}
            />
          }
          title="32,441"
          subtitle="New Clients"
          pecentage="+5%"
          data={data3}
          scheme="set1"
        />

        <Card
          icon={
            <TrafficOutlinedIcon
              sx={{ color: theme.palette.secondary.main, fontSize: "26px" }}
            />
          }
          title="1,325,134"
          subtitle="Traffic Received"
          pecentage="+43%"
          data={data4}
          scheme="category10"
        />
      </Stack>
    </Box>
  );
}
