import React from "react";
import { Box, Typography, Button } from "@mui/material";

function Doctor({ preview }) {
  const doctors = [
   {
  image: "/doctor/dr1.png",
  name: "Dr. S. Prem Kumar",
  department: "Senior Most Physiotherapist",
  description:
    "Expert in clinical assessment, posture alignment, and comprehensive custom recovery care.",
},
{
  image: "/doctor/dr2.png",
  name: "Dr. M. Jennethnisha",
  department: "Senior Most Physiotherapist",
  description:
    "Specialist in athlete injury rehabilitation, joint agility training, and dynamic performance therapy.",
}
  ];

  const displayDoctors = preview ? doctors.slice(0, 2) : doctors;

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: "60px", md: "110px" },
        background: "linear-gradient(160deg, #f0f6ff 0%, #e6f4f9 60%, #d6edf8 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob — cyan tint */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          background: "rgba(0,180,216,0.12)",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />
      {/* Decorative blob — blue tint bottom left */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(26,63,160,0.10)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* Main glassmorphic container */}
      <Box
        sx={{
          borderRadius: { xs: "24px", md: "42px" },
          p: { xs: 3, sm: 4, md: "55px" },
          mx: { xs: 2, sm: 3, md: 5 },
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.30), rgba(209,238,252,0.22))",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1.5px solid rgba(0,180,216,0.22)",
          boxShadow: `
            0 20px 50px rgba(26,63,160,0.10),
            0 0 35px rgba(0,180,216,0.10),
            inset 0 1px 0 rgba(255,255,255,0.60),
            inset 0 -8px 20px rgba(0,180,216,0.06)
          `,
          position: "relative",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 7 } }}>
          {/* Eyebrow */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2.5,
              py: 0.8,
              borderRadius: "50px",
              background: "linear-gradient(90deg, rgba(0,180,216,0.12), rgba(26,63,160,0.10))",
              border: "1px solid rgba(0,180,216,0.25)",
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00b4d8, #1a3fa0)",
              }}
            />
            <Typography
              sx={{
                color: "#1a3fa0",
                fontWeight: 700,
                letterSpacing: "2px",
                fontSize: { xs: "12px", sm: "14px" },
                textTransform: "uppercase",
              }}
            >
              OUR SPECIALISTS
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "38px", md: "52px" },
              fontWeight: 800,
              color: "#0d1f5c",
              lineHeight: 1.15,
            }}
          >
            எங்கள் {" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #1a3fa0, #00b4d8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              சிறப்பு நிபுணர்கள்
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#4a5f8a",
              fontSize: { xs: "14px", md: "17px" },
              maxWidth: "680px",
              mx: "auto",
              lineHeight: { xs: "24px", md: "30px" },
            }}
          >
            எங்கள் அனுபவமிக்க பிசியோதெரபி நிபுணர்கள், நவீன தொழில்நுட்பங்கள் மற்றும் மேம்பட்ட மறுவாழ்வு சிகிச்சை முறைகள் மூலம், நோயாளிகளின் உடல் இயக்கத்தை மேம்படுத்தி வசதியான மற்றும் சிறந்த பராமரிப்பை வழங்குகின்றனர்.
          </Typography>

          {/* Cyan underline accent */}
          <Box
            sx={{
              mt: 3,
              mx: "auto",
              width: "60px",
              height: "4px",
              borderRadius: "4px",
              background: "linear-gradient(90deg, #1a3fa0, #00b4d8)",
            }}
          />
        </Box>

        {/* Cards flex wrapper */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "stretch",
            gap: { xs: 3, md: 4 },
          }}
        >
          {displayDoctors.map((doctor, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "28px",
                overflow: "hidden",
                position: "relative",
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1.5px solid rgba(0,180,216,0.20)",
                boxShadow: `
                  0 12px 30px rgba(26,63,160,0.08),
                  0 0 20px rgba(0,180,216,0.06)
                `,
                transition: "0.35s ease",
                flex: {
                  xs: "1 1 100%",
                  sm: "0 1 calc(50% - 16px)",
                  md: "0 1 380px",
                },
                width: {
                  xs: "100%",
                  sm: "calc(50% - 16px)",
                  md: "380px",
                },
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `
                    0 22px 50px rgba(26,63,160,0.13),
                    0 0 30px rgba(0,180,216,0.12)
                  `,
                  border: "1.5px solid rgba(0,180,216,0.40)",
                },
              }}
            >
              {/* Top gradient overlay on image */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "180px",
                  background:
                    "linear-gradient(to bottom, rgba(26,63,160,0.18), transparent)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />

              {/* Specialty badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  zIndex: 3,
                  px: 1.8,
                  py: 0.6,
                  borderRadius: "50px",
                  background: "linear-gradient(135deg, #1a3fa0, #00b4d8)",
                  boxShadow: "0 4px 14px rgba(0,180,216,0.35)",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  SPECIALIST
                </Typography>
              </Box>

              <Box
                component="img"
                src={doctor.image}
                alt={doctor.name}
                sx={{
                  width: "100%",
                  height: { xs: "250px", sm: "300px", md: "340px" },
                  objectFit: "contain",
                  objectPosition: "top",
                  display: "block",
                }}
              />

              {/* Cyan divider line between image and content */}
              <Box
                sx={{
                  height: "3px",
                  background: "linear-gradient(90deg, #1a3fa0, #00b4d8, #1a3fa0)",
                }}
              />

              <Box
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  position: "relative",
                  zIndex: 2,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    fontWeight: 800,
                    color: "#0d1f5c",
                  }}
                >
                  {doctor.name}
                </Typography>

                <Typography
                  sx={{
                    mt: "8px",
                    color: "#00b4d8",
                    fontWeight: 700,
                    fontSize: { xs: "13px", md: "15px" },
                    letterSpacing: "0.3px",
                  }}
                >
                  {doctor.department}
                </Typography>

                <Typography
                  sx={{
                    mt: "14px",
                    color: "#4a5f8a",
                    fontSize: { xs: "14px", md: "15px" },
                    lineHeight: { xs: "24px", md: "27px" },
                    flexGrow: 1,
                  }}
                >
                  {doctor.description}
                </Typography>

                <Button
                  fullWidth
                  sx={{
                    mt: 3,
                    textTransform: "none",
                    borderRadius: "14px",
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: "15px",
                    background: "linear-gradient(135deg, #1a3fa0, #00b4d8)",
                    color: "#fff",
                    boxShadow: "0 8px 22px rgba(0,180,216,0.25)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #0d2d80, #009abc)",
                      boxShadow: "0 10px 28px rgba(0,180,216,0.35)",
                    },
                  }}
                >
                  View Profile
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Doctor;
