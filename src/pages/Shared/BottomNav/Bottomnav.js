import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import ClassIcon from "@mui/icons-material/Class";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <Box
        sx={{
          zIndex: 100,
          width: "100%",
          borderTop: "2px solid #2d313a",
          paddingTop: "3px",
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {/* <BottomNavigationAction
            component={Link}
            to="/Home"
            label="Home"
            icon={<ClassIcon />}
          /> */}

          <BottomNavigationAction
            component={Link}
            to="/Classes"
            label="Classes"
            icon={<HomeMaxIcon />}
          />

          <BottomNavigationAction
            component={Link}
            to="/Notice"
            label="Notice"
            icon={<ChromeReaderModeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/Profile"
            label="Profile"
            icon={<DashboardIcon />}
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
}
