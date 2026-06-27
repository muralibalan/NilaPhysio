import React from "react";
import { Box, Typography, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CallIcon from "@mui/icons-material/Call"; // Added Call Icon
import GroupsIcon from "@mui/icons-material/Groups";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <>
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
            md: 20,
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
            +91 7010936234
          </Typography>

          <Typography sx={textStyle}>
            <WhatsAppIcon sx={iconStyle} />
            +91 9842492982
          </Typography>

          <Typography sx={textStyle}>
            <EmailIcon sx={iconStyle} />
            prejen8283@gmail.com
          </Typography>

          <Typography sx={textStyle}>
            <LocationOnIcon sx={iconStyle} />
            58/32 Mahadhana street <br/>
            opposite abirami mahal<br/>
            near Arun scan centre<br/>
            Mayiladuthurai
          </Typography>

          <Typography sx={textStyle}>
            <AccessTimeIcon sx={iconStyle} />
            Morning: 10AM - 2PM <br/>
            Evening : 05PM - 09PM
          </Typography>
        </Box>
      </Box>
    </Box>

    {/* Floating Actions Container (Fixed Position Buttons) */}
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 20, md: 30 },
        right: { xs: 20, md: 30 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 9999, // Screen-க்கு மேலே இருக்குமாறு உறுதி செய்கிறது
      }}
    >
      {/* Call Floating Button */}
      <IconButton
        component="a"
        href="tel:+917010936234"
        sx={{
          backgroundColor: "#1E3A8A",
          color: "#fff",
          width: { xs: 50, md: 60 },
          height: { xs: 50, md: 60 },
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#172554",
            transform: "scale(1.1)",
          },
        }}
      >
        <CallIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
      </IconButton>

      {/* WhatsApp Floating Button with Blink/Pulse Animation */}
      <IconButton
        component="a"
        href="https://wa.me/919842492982"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: "#25D366",
          color: "#fff",
          width: { xs: 50, md: 60 },
          height: { xs: 50, md: 60 },
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          
          // Blinking / Glowing Keyframe Animation
          "@keyframes pulseBlink": {
            "0%": {
              transform: "scale(1)",
              boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)",
            },
            "70%": {
              transform: "scale(1.1)",
              boxShadow: "0 0 0 15px rgba(37, 211, 102, 0)",
            },
            "100%": {
              transform: "scale(1)",
              boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)",
            },
          },
          animation: "pulseBlink 2s infinite ease-in-out",
          
          "&:hover": {
            backgroundColor: "#128C7E",
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: { xs: 26, md: 32 } }} />
      </IconButton>
    </Box>
  </>
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