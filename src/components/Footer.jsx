import React from "react";
import { Box, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GroupsIcon from "@mui/icons-material/Groups";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "300px" },
        background:
          "linear-gradient(to right,#dbeafe,#bfdbfe,#93c5fd)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 0 20px rgba(59,130,246,0.3)",
        borderRadius: {
          xs: 0,
          md: "20px",
        },
        mt: 5,
        py: {
          xs: 5,
          md: 4,
        },
        
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        gap: {
          xs: 4,
          md: 20, // Adjusted layout gap to avoid component overflow
        },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glow */}
      <Box
        sx={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          position: "absolute",
          top: -40,
          right: -40,
          background:
            "radial-gradient(circle,rgba(59,130,246,0.3),transparent)",
          filter: "blur(35px)",
        }}
      />

      {/* Left Section */}
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "250px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ml: { xs: 0, md: 25 }
        }}
      >
        {/* Single Logo Component (Animations Completely Removed) */}
        <Box
          sx={{
            width: {
              xs: 90,
              md: 120,
            },
            height: {
              xs: 90,
              md: 120,
            },
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
          sx={{
           
            fontSize: {
              xs: "22px",
              md: "24px",
            },
            fontWeight: "bold",
            color: "#1E3A8A",
            textAlign: "center",
          }}
        >
         PHYSIO Clinic
        </Typography>

        <Typography
          sx={{
            color: "#475569",
            mt: 0.5,
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          Restore Mobility. Live Pain-Free.
        </Typography>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          display: "flex",
          gap: {
            xs: 5,
            md: 8,
          },
          flexWrap: "wrap",

          justifyContent: {
            xs: "center",
            md: "flex-start",
          },

          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {/* Quick Links */}
        <Box sx={{ minWidth: "160px" }}>
          <Typography sx={headingStyle}>
            Quick Links
          </Typography>

          <Typography sx={textStyle}>
            <HomeIcon sx={iconStyle} />
            Home
          </Typography>

          <Typography sx={textStyle}>
            <InfoIcon sx={iconStyle} />
            About Us
          </Typography>

          <Typography sx={textStyle}>
            <MedicalServicesIcon sx={iconStyle} />
            Treatments
          </Typography>

          <Typography sx={textStyle}>
            <GroupsIcon sx={iconStyle} />
            Our Therapists
          </Typography>

          <Typography sx={textStyle}>
            <EventAvailableIcon sx={iconStyle} />
            Book Session
          </Typography>
        </Box>

        {/* Services */}
        <Box sx={{ minWidth: "200px" }}>
          <Typography sx={headingStyle}>
            Our Expertise
          </Typography>

          <Typography sx={textStyle}>
            Orthopedic Physiotherapy
          </Typography>

          <Typography sx={textStyle}>
            Sports Injury Rehab
          </Typography>

          <Typography sx={textStyle}>
            Neurological Rehab
          </Typography>

          <Typography sx={textStyle}>
            Post-Surgical Recovery
          </Typography>

          <Typography sx={textStyle}>
            Pediatric Physiotherapy
          </Typography>

          <Typography sx={textStyle}>
            Chronic Pain Management
          </Typography>
        </Box>

        {/* Contact */}
        <Box sx={{ minWidth: "200px" }}>
          <Typography sx={headingStyle}>
            Contact Us
          </Typography>

          <Typography sx={textStyle}>
            <ContactPhoneIcon sx={iconStyle} />
            +91 98765 43210
          </Typography>

          <Typography sx={textStyle}>
            <EmailIcon sx={iconStyle} />
            abiphysio@gmail.com
          </Typography>

          <Typography sx={textStyle}>
            <LocationOnIcon sx={iconStyle} />
            Madurai, Tamil Nadu
          </Typography>

          <Typography sx={textStyle}>
            <AccessTimeIcon sx={iconStyle} />
            Mon - Sat: 9AM - 8PM
          </Typography>

          <Typography sx={textStyle}>
            <AccessTimeIcon sx={iconStyle} />
            Sunday: 10AM - 2PM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const headingStyle = {
  fontSize: {
    xs: "18px",
    md: "20px",
  },
  fontWeight: "bold",
  color: "#1E3A8A",
  mb: 1.5,
  textAlign: "left",
};

const textStyle = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  color: "#334155",
  fontSize: {
    xs: "14px",
    md: "15px",
  },
  mb: 1,
  cursor: "pointer",
  justifyContent: "flex-start",
  transition: "0.3s",
  "&:hover": {
    color: "#2563EB",
    transform: "translateX(5px)",
  },
};

const iconStyle = {
  color: "#2563EB",
  fontSize: "18px",
};

export default Footer;