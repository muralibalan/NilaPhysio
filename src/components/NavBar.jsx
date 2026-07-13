import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 300,
        height: "100%",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderLeft: "1px solid rgba(255,255,255,0.3)",
        p: 3,
      }}
    >
      {/* Mobile Drawer Logo Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 5,
        }}
      >
        <Box
          sx={{
            width: 55,
            height: 55,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(0px 0px 10px rgba(33, 150, 243, 0.5))",
          }}
        >
          <Box
            component="img"
            src="nilalogo.png"
            alt="Physio Clinic Logo"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            color: "#1565c0",
            letterSpacing: "1px",
            fontFamily: "'Poppins', 'Roboto', sans-serif",
          }}
        >
          Nila <br /><Typography sx={{fontSize:"16px",fontWeight:"800"}}>Spine & Joint clinic</Typography>
        </Typography>
      </Box>

      {/* Menu */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: "12px",
                mb: 1,
                "&.active": {
                  background: "rgba(33,150,243,0.12)",
                  color: "#1565c0",
                },
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Login */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 4,
          borderRadius: "30px",
          py: 1,
          background: "linear-gradient(135deg,#1e88e5,#42a5f5)",
          textTransform: "none",
          fontWeight: 600,
          boxShadow: "0 4px 20px rgba(33,150,243,0.4)",
        }}
      >
        Login
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(174, 202, 254, 0.18)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.4)",
          boxShadow: "0 4px 30px rgba(59,130,246,0.04)",
          px: {
            xs: 1,
            sm: 2,
            md: 3,
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "70px !important", // Reduced height for sleeker design
            height: "70px",
          }}
        >
          {/* Main Logo Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            {/* Logo Container slightly overflowing for a modern, sleek aesthetic */}
            <Box
              sx={{
                width: {
                  xs: 55,
                  sm: 60,
                  md: 68,
                },
                height: {
                  xs: 55,
                  sm: 60,
                  md: 68,
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                filter: "drop-shadow(0px 0px 8px rgba(33, 150, 243, 0.45))",
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                mt: 0.5, // Subtle push to look centered with decreased height

                "&:hover": {
                  transform: "scale(1.08) rotate(2deg)",
                }
              }}
            >
              <Box
                component="img"
                src="nilalogo.png"
                alt="Physio Clinic Logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Premium Styled Typography */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: "#1565c0",
                textTransform: "uppercase", // Clean premium clinic style
                letterSpacing: "1px", // Spaced letters for high-end look
                fontFamily: "'Poppins', 'Montserrat', sans-serif",
                fontSize: {
                  xs: "1.1rem",
                  md: "1.35rem",
                },
                background: "linear-gradient(45deg, #0d47a1 30%, #1976d2 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent", // Creates subtle luxury text gradient
              }}
            >
             Nila  <br /><Typography sx={{fontSize:"16px",fontWeight:"800"}}>Spine & Joint clinic</Typography>
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#1565c0" : "#444",
                  fontWeight: isActive ? 700 : 600,
                  fontSize: "16px", // Adjusted slightly to sit nicely in 70px bar
                  letterSpacing: "0.3px",
                  transition: "0.2s ease",
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexShrink: 0,
            }}
          >
            {/* Desktop Login */}
            <Button
              variant="contained"
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                borderRadius: "20px",
                px: 3.5,
                py: 0.8,
                background: "linear-gradient(135deg,#1e88e5,#42a5f5)",
                textTransform: "none",
                fontWeight: 600,
                boxShadow: "0 4px 14px rgba(33,150,243,0.3)",
                "&:hover": {
                  background: "linear-gradient(135deg,#1976d2,#2196f3)",
                  boxShadow: "0 6px 20px rgba(33,150,243,0.4)",
                },
              }}
            >
              Login
            </Button>

            {/* Mobile Menu Icon */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                color: "#1565c0",
              }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            background: "transparent",
            boxShadow: "none",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;