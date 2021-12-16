import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../../hooks/useAuth";
import { Avatar } from "@mui/material";

import { Link as ProfileLink } from "react-router-dom";
import Link from "@mui/material/Link";
const Header = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Edu Bot
          </Typography>
          <Link underline="none" component={ProfileLink} to="/Profile">
            <div className="d-flex align-items-center rounded-pill bg-dark py-1 px-1 p-1 text-white">
              <Avatar
                alt={user.displayName}
                src={user.photoURL}
                sx={{ width: 30, mx: "2px", height: 30 }}
              />
              {user.displayName?.split(" ")[0]}
            </div>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
