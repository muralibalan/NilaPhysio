import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Button
} from "@mui/material";

import Services from "./Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Doctor from "./Doctor";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "100vh" },
          backgroundImage: "url('home6.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(240,248,255,0.55) 100%)",
            zIndex: 1
          }}
        />

        {/* AMBIENT GLOW */}
        <Box
          sx={{
            width: { xs: "140px", sm: "220px", md: "350px" },
            height: { xs: "140px", sm: "220px", md: "350px" },
            borderRadius: "50%",
            background: "#159273",
            filter: "blur(90px)",
            position: "absolute",
            top: "-50px",
            left: "-50px",
            opacity: 0.25,
            zIndex: 2
          }}
        />

        {/* HERO MAIN CONTAINER */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            width: "100%",
            maxWidth: "1440px",
            minHeight: { xs: "auto", md: "100vh" },
            display: "flex",
            // Mobile-il Image Top, Text Bottom. Laptop-il side-by-side row-view.
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 4, sm: 5, md: 3, lg: 5 },
            px: { xs: 2.5, sm: 5, md: 6, lg: 10 },
            pt: { xs: 12, sm: 14, md: 0 }, 
            pb: { xs: 8, sm: 10, md: 4 }
          }}
        >
          {/* [IMAGE TOP ON MOBILE] - VISUAL CARD */}
          <Box
            sx={{
              width: { xs: "100%", md: "45%", lg: "45%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: { xs: 1, md: 2 }, // Mobile-il ithu muthalil (Top) display aagum
              mt: { xs: "10px", sm: "20px", md: 0 },
              mb: { xs: 1, md: 0 }
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "360px", md: "380px", lg: "450px" },
                height: { xs: "240px", sm: "320px", md: "440px", lg: "520px" },
                borderRadius: { xs: "14px", sm: "24px", md: "32px" },
                overflow: "hidden",
                position: "relative",
                
                background: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "2px solid rgba(255, 255, 255, 0.9)",
                
                boxShadow: `
                  0 15px 35px rgba(0, 0, 0, 0.15),
                  0 0 25px rgba(37, 99, 235, 0.1),
                  inset 0 0 10px rgba(255, 255, 255, 0.2)
                `,
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: { xs: "none", md: "translateY(-6px)" }
                }
              }}
            >
              <Box
                component="img"
                src="home7.jpg"
                alt="physiotherapist"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </Box>
          </Box>

          {/* [CONTENT BOTTOM ON MOBILE] - TEXT COLUMN */}
          <Box
            sx={{
              width: { xs: "100%", md: "52%", lg: "50%" },
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              order: { xs: 2, md: 1 } // Mobile-il ithu irandavathaaga (Bottom) display aagum
            }}
          >
            {/* TAGLINE */}
            <Typography
              sx={{
                color: "#2563eb",
                fontWeight: "bold",
                letterSpacing: "1px",
                fontSize: { xs: "11px", sm: "13px", md: "15px", lg: "18px" },
                animation: "fadeText 1s ease",
                "@keyframes fadeText": {
                  from: { opacity: 0, transform: "translateY(15px)" },
                  to: { opacity: 1, transform: "translateY(0px)" }
                }
              }}
            >
              ADVANCED PHYSIOTHERAPY & REHAB
            </Typography>

            {/* MAIN TITLE */}
            <Typography
              sx={{
                mt: { xs: "8px", sm: "12px", md: "15px" },
                fontSize: { xs: "28px", sm: "42px", md: "56px", lg: "72px" },
                lineHeight: { xs: "36px", sm: "52px", md: "68px", lg: "84px" },
                fontWeight: "bold",
                color: "#111",
                animation: "slideLeft 1.2s ease",
                "@keyframes slideLeft": {
                  from: { opacity: 0, transform: "translateX(-30px)" },
                  to: { opacity: 1, transform: "translateX(0px)" }
                }
              }}
            >
              Your Recovery
            </Typography>

            {/* GRADIENT TITLE WITH HEART */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                flexWrap: "wrap",
                gap: { xs: 0.8, sm: 1.5 }
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "28px", sm: "42px", md: "56px", lg: "72px" },
                  lineHeight: { xs: "36px", sm: "52px", md: "68px", lg: "84px" },
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #2563eb, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
               Our Commitment
              </Typography>

              
            </Box>

            {/* SUB DESCRIPTION */}
            <Typography
              sx={{
                mt: "12px",
                color: "#444",
                fontSize: { xs: "13.5px", sm: "15px", md: "16px", lg: "19px" },
                lineHeight: { xs: "20px", sm: "24px", md: "28px", lg: "34px" },
                width: { xs: "100%", sm: "85%", md: "95%" },
                animation: "fadePara 1.5s ease",
                "@keyframes fadePara": {
                  from: { opacity: 0 },
                  to: { opacity: 1 }
                }
              }}
            >
              Experience advanced clinical movement rehabilitation with expert 
              physiotherapists and targeted treatment procedures for a pain-free, 
              healthier, and completely active lifestyle.
            </Typography>

            {/* ACTION BUTTONS */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "10px", sm: "16px" },
                mt: { xs: "20px", sm: "30px", md: "35px" },
                width: { xs: "100%", sm: "auto" },
                justifyContent: { xs: "center", md: "flex-start" }
              }}
            >
              <Button
                sx={{
                  width: { xs: "100%", sm: "210px" },
                  background: "linear-gradient(to right,#2563eb,#3b82f6)",
                  color: "white",
                  px: "30px",
                  py: "12px",
                  borderRadius: "40px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: "bold",
                  transition: "0.4s",
                  boxShadow: "0 10px 25px rgba(37,99,235,0.25)",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 14px 30px rgba(37,99,235,0.45)",
                    background: "linear-gradient(to right,#1d4ed8,#2563eb)"
                  }
                }}
                onClick={() => navigate("/Appointment")}
              >
                Book Appointment
              </Button>

              <Button
                sx={{
                  width: { xs: "100%", sm: "170px" },
                  background: "rgba(255,255,255,0.9)",
                  color: "#2563eb",
                  px: "30px",
                  py: "12px",
                  borderRadius: "40px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: "bold",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(37,99,235,0.2)",
                  transition: "0.4s",
                  "&:hover": {
                    background: "white",
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.06)"
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Services home />
      <WhyChooseUs />
      <Doctor preview={true} />
    </>
  );
}

export default Home;