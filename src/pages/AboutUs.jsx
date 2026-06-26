import React from "react";

import {
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useNavigate } from "react-router-dom";

function AboutUs() {

  const navigate = useNavigate();

  // Content updated to Physiotherapy themes
  const features = [
    "Advanced Rehabilitation Technology",
    "Experienced Physiotherapy Specialists",
    "Compassionate Patient Recovery Care",
    "Emergency Musculoskeletal Support",
  ];

  // Content updated to Physiotherapy themes
  const stats = [
    {
      number: "10+",
      title: "Expert Therapists",
    },

    {
      number: "5000+",
      title: "Recovered Patients",
    },

    {
      number: "24/7",
      title: "Emergency Support",
    },

    {
      number: "Modern",
      title: "Rehab Equipment",
    },
  ];

  return (

    <Box
      sx={{

        width: "100%",

        minHeight: "100vh",

        overflow: "hidden",

        position: "relative",

        background:
          "linear-gradient(to bottom,#f8fbff,#edf6ff)",

        py: {
          xs: "90px",
          md: "120px",
        },
      }}
    >

      {/* ================= WATER EFFECT ================= */}

      <Box
        sx={{

          position: "absolute",

          top: "-100px",

          left: "-100px",

          width: "280px",

          height: "280px",

          borderRadius: "50%",

          background:
            "rgba(59,130,246,0.15)",

          filter:
            "blur(120px)",

          animation:
            "waterMove 8s ease-in-out infinite",
        }}
      />

      <Box
        sx={{

          position: "absolute",

          bottom: "-120px",

          right: "-100px",

          width: "320px",

          height: "320px",

          borderRadius: "50%",

          background:
            "rgba(96,165,250,0.15)",

          filter:
            "blur(130px)",

          animation:
            "waterMove2 10s ease-in-out infinite",
        }}
      />

      {/* ================= ANIMATION ================= */}

      <Box
        sx={{

          "@keyframes waterMove": {

            "0%": {
              transform: "translateY(0px)"
            },

            "50%": {
              transform: "translateY(40px)"
            },

            "100%": {
              transform: "translateY(0px)"
            }
          },

          "@keyframes waterMove2": {

            "0%": {
              transform: "translateX(0px)"
            },

            "50%": {
              transform: "translateX(-40px)"
            },

            "100%": {
              transform: "translateX(0px)"
            }
          },

          "@keyframes fadeUp": {

            from: {
              opacity: 0,
              transform: "translateY(40px)"
            },

            to: {
              opacity: 1,
              transform: "translateY(0px)"
            }
          },

          "@keyframes fadeRight": {

            from: {
              opacity: 0,
              transform: "translateX(40px)"
            },

            to: {
              opacity: 1,
              transform: "translateX(0px)"
            }
          },

          "@keyframes zoomIn": {

            from: {
              opacity: 0,
              transform: "scale(0.9)"
            },

            to: {
              opacity: 1,
              transform: "scale(1)"
            }
          }
        }}
      />

      {/* ================= ABOUT TITLE ================= */}

      <Box
        sx={{

          textAlign: "center",

          mb: {
            xs: 5,
            md: 8,
          },

          animation:
            "fadeUp 1s ease",
        }}
      >

        <Typography
          sx={{

            color: "#2563eb",

            fontWeight: "bold",

            letterSpacing: "3px",

            fontSize: {
              xs: "15px",
              md: "40px",
            },

            mb: 2,
          }}
        >
          ABOUT US
        </Typography>

        <Typography
          sx={{

            fontWeight: "bold",

            color: "#0f172a",

            lineHeight: 1.1,

            fontSize: {
              xs: "25px",
              sm: "42px",
              md: "55px",
                },
              }}
            >
              Restoring Mobility
              <br />
              & Healthy Living
            </Typography>

      </Box>

      {/* ================= IMAGE + CONTENT ================= */}

      <Grid
        container

        spacing={{
          xs: 5,
          md: 7,
        }}

        alignItems="center"
      >

        {/* ================= LEFT IMAGE ================= */}

        <Grid item xs={12} md={7}>

          <Box
            sx={{
              width: {xs:"93%",md:"100%"},

              maxWidth: "630px",

              mx: "auto",

              position: "relative",

              overflow: "hidden",

              borderRadius: {
                xs: "24px",
                md: "40px",
              },

              height: {
                xs: "300px",
                sm: "380px",
                md: "520px",
              },

              ml:{xs:1,md:10},

              boxShadow:
                "0 25px 60px rgba(59,130,246,0.18)",

              animation:
                "zoomIn 1.2s ease",
            }}
          >

            {/* IMAGE SOURCE PATH REMAINS SAME FOR ASSET INTEGRITY */}

            <Box
              component="img"

              src="group Doctors.jpg"

              alt="Physiotherapy Team"

              sx={{

                width: "100%",

                height: "100%",

                objectFit: "cover",

                objectPosition: "center",

                transition: "0.6s",

                "&:hover": {

                  transform: "scale(1.04)",
                }
              }}
            />

            {/* OVERLAY */}

            <Box
              sx={{

                position: "absolute",

                inset: 0,

                background:
                  "linear-gradient(to top, rgba(15,23,42,0.28), transparent)",
              }}
            />

            {/* IMAGE TEXT */}

            <Box
              sx={{

                position: "absolute",

                left: {
                  xs: 18,
                  md: 40,
                },

                bottom: {
                  xs: 18,
                  md: 40,
                },

                color: "#fff",

                animation:
                  "fadeUp 1.5s ease",
              }}
            >

              <Typography
                sx={{

                  letterSpacing: "3px",

                  fontWeight: 600,

                  mb: 1,

                  fontSize: {
                    xs: "12px",
                    md: "16px",
                  },
                }}
              >
                WELCOME TO
              </Typography>

              <Typography
                sx={{

                  fontWeight: "bold",

                  lineHeight: 1.05,

                  fontSize: {
                    xs: "20px",
                    sm: "46px",
                    md: "50px",
                  },
                }}
              >
               
                PHYSIO
                <br />
                CLINIC
              </Typography>

            </Box>

          </Box>

        </Grid>

        {/* ================= RIGHT CONTENT ================= */}

        <Grid item xs={12} md={5}>

          <Box
            sx={{
              animation:
                "fadeRight 1.2s ease",
              mr:{xs:3,md:5},
              ml:{xs:3,md:5},

              maxWidth:600
            }}
          >

            <Typography
              sx={{

                color: "#475569",

                lineHeight: {
                  xs: "30px",
                  md: "36px",
                },

                fontSize: {
                  xs: "15px",
                  md: "17px",
                },

                mb: 4,
              }}
            >
              At Abi Physiotherapy Clinic, we provide modern
              rehabilitation care with advanced technology and
              experienced specialists. Our mission is to
              restore pain-free movement, active strength in a safe
              and comfortable environment.

              <br /><br />

              We specialize in orthopedic rehab,
              sports therapy, post-surgical recovery, joint treatments 
              and neurological rehabilitation sessions with personalized attention
              for every patient.
            </Typography>

            {/* FEATURES */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.2,
                mb: 5,
                
              }}
            >

              {features.map((item, index) => (

                <Box
                  key={index}

                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >

                  <KeyboardDoubleArrowRightIcon
                    sx={{
                      color: "#2563eb",
                    }}
                  />

                  <Typography
                    sx={{

                      fontWeight: 600,

                      color: "#334155",

                      fontSize: {
                        xs: "14px",
                        md: "16px",
                      },
                    }}
                  >
                    {item}
                  </Typography>

                </Box>

              ))}

            </Box>

            {/* BUTTON */}

            <Button
              variant="contained"

              endIcon={<ArrowForwardIcon />}

              onClick={() => navigate("/services")}

              sx={{

                px: 5,

                py: 1.5,

                borderRadius: "40px",

                textTransform: "none",

                fontWeight: "bold",

                fontSize: "15px",

                background:
                  "linear-gradient(135deg,#60a5fa,#2563eb)",

                boxShadow:
                  "0 10px 25px rgba(59,130,246,0.20)",

                transition: "0.4s",

                "&:hover": {

                  transform:
                    "translateY(-5px)",

                  background:
                    "linear-gradient(135deg,#3b82f6,#1d4ed8)",
                }
              }}
            >
              Learn More
            </Button>

          </Box>

        </Grid>

      </Grid>

      {/* ================= BIG CONTENT BOX ================= */}

      <Box
        sx={{

          m: {
            xs: 3,
            md: 10,
          },

          p: {
            xs: 3,
            sm: 4,
            md: 6,
          },

          borderRadius: {
            xs: "24px",
            md: "40px",
          },

          background:
            "rgba(255,255,255,0.58)",

          backdropFilter:
            "blur(16px)",

          border:
            "1px solid rgba(255,255,255,0.4)",

          boxShadow:
            "0 15px 35px rgba(59,130,246,0.10)",

          textAlign: "center",

          animation:
            "fadeUp 1.4s ease",
        }}
      >

        <Typography
          sx={{

            color: "#2563eb",

            fontWeight: "bold",

            mb: 3,

            fontSize: {
              xs: "24px",
              md: "44px",
            },
          }}
        >
          Trusted Clinical Excellence
        </Typography>

        <Typography
          sx={{

            maxWidth: "950px",

            mx: "auto",

            color: "#475569",

            lineHeight: {
              xs: "30px",
              md: "38px",
            },

            fontSize: {
              xs: "14px",
              md: "18px",
            },
          }}
        >
          Our clinic combines advanced treatment systems,
          compassionate physical therapy and highly experienced
          medical specialists to deliver exceptional rehabilitation
          experiences for patients of all ages. We focus on
          providing safe, customized physical training and modern pain management
          solutions for long-term health and dynamic performance recovery.
        </Typography>

      </Box>

      {/* ================= CARDS ================= */}

      <Grid
        container

        spacing={{xs:10,md:4}}

        sx={{
          mt: {
            xs: 2,
            md: 5,
          },

          ml:{xs:8,md:35},
        }}
      >

        {stats.map((item, index) => (

          <Grid
            item

            xs={12}

            sm={6}

            md={3}

            key={index}
          >

            <Box
              sx={{

                height: "100%",

                p: {
                  xs: 3,
                  md: 4,
                },

                borderRadius: "28px",

                textAlign: "center",

                background:
                  "rgba(255,255,255,0.58)",

                backdropFilter:
                  "blur(14px)",

                border:
                  "1px solid rgba(255,255,255,0.35)",

                boxShadow:
                  "0 12px 30px rgba(59,130,246,0.08)",

                transition: "0.4s",

                animation:
                  `fadeUp ${1.5 + index * 0.2}s ease`,

                "&:hover": {

                  transform:
                    "translateY(-10px)",
                }
              }}
            >

              <Typography
                sx={{

                  color: "#2563eb",

                  fontWeight: "bold",

                  mb: 1,

                  fontSize: {
                    xs: "25px",
                    md: "36px",
                  },
                }}
              >
                {item.number}
              </Typography>

              <Typography
                sx={{

                  color: "#334155",

                  fontWeight: 600,

                  fontSize: {
                    xs: "15px",
                    md: "17px",
                  },
                }}
              >
                {item.title}
              </Typography>

            </Box>

          </Grid>

        ))}

      </Grid>

    </Box>
  );
}

export default AboutUs;