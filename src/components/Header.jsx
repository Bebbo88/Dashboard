import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();

  return (
    <Box mb={3}>
      {/* العنوان الأساسي */}
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>

      {/* العنوان الفرعي */}
      <Typography variant="body1" sx={{ opacity: 0.8 }}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
