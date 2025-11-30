import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";

import AppBarCustom from "./components/AppBar";
import DrawerCustom from "./components/Drawer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const DrawerHeader = ({ children }) => (
  <div style={{ minHeight: "64px" }}>{children}</div>
);

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(
    localStorage.getItem("mode") || "light"
  );
  const darkTheme = createTheme({
    palette: {
      mode: localStorage.getItem("mode") || "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBarCustom
          open={open}
          handleDrawerOpen={() => setOpen(true)}
          mode={mode}
          setMode={setMode}
        />

        <DrawerCustom
          open={open}
          handleDrawerClose={() => setOpen(false)}
          theme={theme}
        />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div style={{ minHeight: "64px" }} />

          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
