import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

interface IBoxHeaderProps {
  icon?: React.ReactNode;
  subtitle?: string;
  title: string;
  sideText: string;
}

const BoxHeader = ({ icon, subtitle, title, sideText }: IBoxHeaderProps) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin="1rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
