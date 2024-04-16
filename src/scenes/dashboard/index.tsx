import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import DashboardBox from "@/components/DashboardBox";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const gridTemplateLarge = `
 "a b c"
 "a b c"
 "a b c"
 "a b d"
 "e f d"
 "e f d"
 "e g h"
 "i g h"
 "i g j"
 "i g j"
`;

const gridTemplateSmall = `
 "a"
 "a"
 "a"
 "a"
 "b"
 "b"
 "b"
 "b"
 "c"
 "c"
 "c"
 "d"
 "d"
 "d"
 "e"
 "e"
 "e"
 "f"
 "f"
 "g"
 "g"
 "g"
 "g"
 "h"
 "h"
 "i"
 "i"
 "i"
 "j"
 "j"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLarge,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmall,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
