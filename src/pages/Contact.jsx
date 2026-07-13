import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

import {
  Call,
  Email,
  LocationOn,
  SendRounded,
} from "@mui/icons-material";

function Contact() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",

        display: "flex",
        alignItems: "center",

        py: { xs: 8, md: 0 },

        backgroundImage:
          "url('contactbg.png')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(7,15,35,0.35),rgba(7,15,35,0.25))", // Contrast adjusted for clear reading
        }}
      />

      {/* Glow Effects */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.22)",
          filter: "blur(120px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(96,165,250,0.18)",
          filter: "blur(120px)",
        }}
      />

      {/* Main Content */}
      <Grid
        container
        spacing={{ xs: 6, md: 15 }}
        sx={{
          position: "relative",
          zIndex: 2,

          alignItems: "center",
          justifyContent: "center",

          width: "100%",

          px: {
            xs: 2.5, // Slightly optimized touch spacing
            sm: 4,
            md: 6,
          },
        }}
      >
        {/* Left Side: Contact Information */}
        <Grid item xs={12} md={5}>
          <Box>
            <Typography
              sx={{
                color: "#2866f8",
                fontFamily:"fangsong",
                fontWeight: "bold",
                mb: 2,
                mt: 4,

                fontSize: {
                  xs: "28px",
                  sm: "24px",
                  md: "43px",
                },
                 textShadow:
                  "1px 1px 1px rgba(43, 42, 42, 0.9), 0px 0px 1px rgb(0, 0, 0)",
              }}
            >
              CONTACT US
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontWeight: "bold",
                lineHeight: 1.2,
                mb: 3,

                fontSize: {
                  xs: "36px",
                  sm: "42px",
                  md: "50px",
                },
                textShadow:
                  "1px 1px 1px rgba(43, 42, 42, 0.9), 0px 0px 1px rgb(0, 0, 0)",
              }}
            >
              Restore Mobility.
              <br />
              Live Pain-Free.
            </Typography>

            <Typography
              sx={{
                color: "rgb(254, 254, 254)",
                lineHeight: "28px",
                mb: 5,
                maxWidth: "450px",

                fontSize: {
                  xs: "17px",
                  md: "16px",
                },
                textShadow:
                  "1px 1px 1px rgba(43, 42, 42, 0.9), 0px 0px 1px rgb(0, 0, 0)",
              }}
            >
              Our experienced physiotherapy specialists are here to help you recover
              from injuries, manage chronic pain, and regain your active physical lifestyle.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={iconBox}>
                  <Call sx={{ color: "#2563eb" }} />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      textShadow:
                  "1px 1px 1px rgba(43, 42, 42, 0.9), 0px 0px 1px rgb(0, 0, 0)",
                    }}
                  >
                    Phone
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgb(255, 255, 255)",
                      textShadow:
                  "1px 1px 1px rgba(43, 42, 42, 0.9), 0px 0px 1px rgb(0, 0, 0)",
                    }}
                  >
                    +91 7010936234
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={iconBox}>
                  <Email sx={{ color: "#2563eb" }} />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      textShadow:
                  "1px 1px 1px rgba(43, 42, 42, 0.9), 0px 0px 1px rgb(0, 0, 0)",
                    }}
                  >
                    Email
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgb(255, 255, 255)",
                      textShadow:
                  "1px 1px 1px rgba(43, 42, 42, 0.9), 0px 0px 1px rgb(0, 0, 0)",
                    }}
                  >
                    prejen8283@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={iconBox}>
                  <LocationOn sx={{ color: "#2563eb" }} />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      textShadow:
                  "1px 1px 1px rgba(43, 42, 42, 0.9), 0px 0px 1px rgb(0, 0, 0)",
                    }}
                  >
                    Location
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgb(255, 255, 255)",
                      textShadow:
                  "1px 1px 1px rgba(43, 42, 42, 0.9), 0px 0px 1px rgb(0, 0, 0)",
                    }}
                  >
                    58/32 Mahadhana street<br/>
                    opposite abirami mahal<br/>
                    near Arun scan centre<br/>
                    Mayiladuthurai-609 001

                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Form Handling Container */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              borderRadius: "30px",

              p: {
                xs: 3,
                sm: 4,
                md: 4,
              },

              width: "100%",

              maxWidth: {
                xs: "100%", // Mobile width scale fixed (repaired from 81% constraint clip)
                md: "520px",
              },

              background: "rgba(9, 50, 251, 0.08)",
              backdropFilter: "blur(3px)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.22)",

              mt: {
                xs: 0,
                md: 9,
              },
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "bold",
                mb: 1,

                fontSize: {
                  xs: "24px",
                  sm: "32px",
                  md: "40px",
                },
                textShadow:
                  "1.5px 1.5px 1.5px rgba(43, 42, 42, 0.9), 0px 0px 2px rgb(0, 0, 0)",
              }}
            >
              Request Consultation
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.72)",
                mb: 4,
                textShadow:
                  "1px 1px 1px rgba(43, 42, 42, 0.9), 0px 0px 1px rgb(0, 0, 0)",
              }}
            >
              Share your details, and our care experts will reach out to schedule your assessment.
            </Typography>

            <Box
              component="form"
              action="https://formsubmit.co/prejen8283@gmail.com"
              method="POST"

            >
              {/* Added native name tracking parameters to ensure backend form validation catches data fields */}
              <TextField
                fullWidth
                name="name"
                label="Full Name"
                required
                sx={inputStyle}
              />

              <TextField
                fullWidth
                name="phone"
                label="Phone Number"
                required
                sx={inputStyle}
              />

              <TextField
                fullWidth
                name="email"
                type="email"
                label="Email Address"
                required
                sx={inputStyle}
              />

              <TextField
                fullWidth
                name="message"
                multiline
                rows={4}
                label="Describe Your Condition / Pain Area"
                sx={inputStyle}
              />

              <Button
                type="submit"
                endIcon={<SendRounded />}
                sx={{
                  width: "100%",
                  py: 1.8,
                  borderRadius: "14px",
                  fontWeight: "bold",
                  color: "#fff",
                  background: "linear-gradient(135deg,#2563eb,#60a5fa)",
                  "&:hover": {
                    background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                  },
                }}
              >
                Book Consultation
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const iconBox = {
  width: 50,
  height: 50,
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(10px)",
};

const inputStyle = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.08)",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.15)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255,255,255,0.25)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#60a5fa",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#dbeafe",
  },
};

export default Contact;