import React from "react";
import { Box, Typography } from "@mui/material";

import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

function WhyChooseUs() {
  const features = [
    {
      icon: <AccessibilityNewIcon />,
      number: "01",
      title: "இயக்கத் திறன் மீட்பு",
      description:
        "ஆழமான திசுக்களின் மீட்பு மற்றும் மூட்டுகளின் சுறுசுறுப்பான இயக்கத்தை மேம்படுத்தும் வகையில் தனிப்பயனாக்கப்பட்ட உடற்பயிற்சி திட்டங்கள்.",
    },
    {
      icon: <LocalHospitalIcon />,
      number: "02",
      title: "நிபுணர் சிகிச்சையாளர்கள்",
      description:
        "மேம்பட்ட அறிவியல் ஆதாரபூர்வமான சிகிச்சை முறைகளைப் பயன்படுத்தும், உயர்தர சான்றிதழ் பெற்ற மருத்துவ மறுவாழ்வு நிபுணர்கள்.",
    },
    {
      icon: <FitnessCenterIcon />,
      number: "03",
      title: "மேம்பட்ட மறுவாழ்வு சிகிச்சை",
      description:
        "தசை மற்றும் எலும்பு சார்ந்த வலிகளை துல்லியமாகக் கட்டுப்படுத்த நவீன சிகிச்சை முறைகள் மற்றும் மேம்பட்ட மருத்துவ உபகரணங்களுடன் கூடிய சிகிச்சை.",
    },
    {
      icon: <CalendarMonthIcon />,
      number: "04",
      title: "எளிய முன்பதிவு",
      description:
        "வசதியான நேரத் தேர்வு விருப்பங்களுடன், விரைவாக மருத்துவ சந்திப்பை முன்பதிவு செய்யும் வசதி.",
    },
    {
      icon: <SentimentSatisfiedIcon />,
      number: "05",
      title: "வலியில்லா வாழ்க்கை",
      description:
        "நீண்டகால உடல்நல நிவாரணம் மற்றும் உடல் கட்டமைப்பு ஆதரவிற்காக, குணமடைந்து வரும் ஆயிரக்கணக்கான நோயாளிகளின் நம்பிக்கையைப் பெற்றது.",
    },
    {
      icon: <HealthAndSafetyIcon />,
      number: "06",
      title: "வசதி மற்றும் பாதுகாப்பு",
      description:
        "ஒவ்வொரு சிகிச்சை அமர்விலும் அதிகபட்ச வசதி மற்றும் பாதுகாப்பை உறுதி செய்யும் வகையில், மென்மையாகவும் நன்கு கண்காணிக்கப்பட்டும் வழங்கப்படும் சிகிச்சைப் பயிற்சிகள்.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: {
          xs: 7,
          md: 12,
        },
        px: {
          xs: 2,
          sm: 3,
          md: 5,
        },
        background: "#f8fbff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SOFT BACKGROUND DECORATION */}

      <Box
        sx={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.10), transparent 68%)",
          top: "-180px",
          right: "-150px",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.08), transparent 68%)",
          bottom: "-170px",
          left: "-140px",
        }}
      />

      {/* MAIN WRAPPER */}

      <Box
        sx={{
          maxWidth: "1550px",
          mx: "auto",

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            lg: "0.78fr 1.22fr",
          },

          gap: {
            xs: 5,
            lg: 6,
          },

          alignItems: "stretch",

          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ================================= */}
        {/* LEFT PREMIUM TITLE PANEL */}
        {/* ================================= */}

        <Box
          sx={{
            minHeight: {
              xs: "auto",
              lg: "650px",
            },

            borderRadius: {
              xs: "28px",
              md: "38px",
            },

            p: {
              xs: 3.5,
              sm: 4,
              md: 5,
            },
            background:
              "linear-gradient(145deg, #0b4fd8 0%, #1468e8 52%, #0ea5e9 100%)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow:
              "0 28px 60px rgba(37,99,235,0.22)",
          }}
        >
          {/* TOP DECORATIVE CIRCLE */}

          <Box
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.18)",
              top: "-120px",
              right: "-100px",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: "190px",
              height: "190px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.14)",
              top: "-65px",
              right: "-45px",
            }}
          />

          {/* WAVE DECORATION */}

          <Box
            sx={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background:
                "rgba(255,255,255,0.06)",
              bottom: "-250px",
              left: "-120px",
            }}
          />

          {/* LEFT TOP CONTENT */}

          <Box
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,

                px: 2,
                py: 1,

                borderRadius: "50px",

                background:
                  "rgba(255,255,255,0.15)",

                border:
                  "1px solid rgba(255,255,255,0.20)",

                mb: {
                  xs: 3,
                  md: 4,
                },
              }}
            >
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  boxShadow:
                    "0 0 12px rgba(255,255,255,0.8)",
                }}
              />

              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },
                  fontWeight: 800,
                  letterSpacing: "2px",
                }}
              >
                WHY CHOOSE US
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#ffffff",

                fontSize: {
                  xs: "30px",
                  sm: "48px",
                  md: "45px",
                },

                lineHeight: {
                  xs: 1.12,
                  md: 1.05,
                },

                fontWeight: 900,

                letterSpacing: "-2px",

                maxWidth: "520px",
              }}
            >
            உங்கள் இயக்கம், எங்கள் அக்கறை
              
            
            </Typography>

            <Typography
              sx={{
                mt: 3,

                maxWidth: "470px",
                fontWeight:"bold",
                color:
                  "rgba(255,255,255,0.82)",

                fontSize: {
                  xs: "13.5px",
                  md: "14px",
                },

                lineHeight: {
                  xs: "20px",
                  md: "30px",
                },
              }}
            >
              ஒவ்வொரு நபரின் உடல்நிலை, வலியின் தன்மை மற்றும் இயக்கத் தேவைகளை கவனமாக மதிப்பீடு செய்து, அவர்களுக்கு ஏற்றவாறு தனிப்பயனாக்கப்பட்ட பிசியோதெரபி சிகிச்சைகள் வழங்கப்படுகின்றன. உடல் இயக்கத் திறனை மீட்டெடுக்கவும், தசை மற்றும் மூட்டு வலிகளை குறைக்கவும், உடல் வலிமை மற்றும் நெகிழ்வுத்தன்மையை மேம்படுத்தவும் நவீன மற்றும் பயனுள்ள சிகிச்சை முறைகள் பயன்படுத்தப்படுகின்றன. அன்றாட செயல்பாடுகளை எளிதாக மேற்கொள்ள உதவுவதுடன், மீண்டும் சுறுசுறுப்பான, ஆரோக்கியமான மற்றும் தன்னம்பிக்கை நிறைந்த வாழ்க்கைக்கு திரும்புவதே எங்கள் முக்கிய நோக்கமாகும்.

            </Typography>
          </Box>

          {/* LEFT BOTTOM STATS */}

          <Box
            sx={{
              position: "relative",
              zIndex: 2,

              mt: {
                xs: 4,
                lg: 0,
              },

              display: "grid",

              gridTemplateColumns: "repeat(2,1fr)",

              gap: 2,
            }}
          >
            <Box
              sx={{
                p: 2.5,
                borderRadius: "20px",

                background:
                  "rgba(255,255,255,0.13)",

                border:
                  "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: {
                    xs: "20px",
                    md: "34px",
                  },
                  fontWeight: 900,
                }}
              >
                100%
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  color:
                    "rgba(255,255,255,0.75)",
                  fontSize: "13.5px",
                }}
              >
                Patient Focused
              </Typography>
            </Box>

            <Box
              sx={{
                p: 2.5,
                borderRadius: "20px",

                background:
                  "rgba(255,255,255,0.13)",

                border:
                  "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: {
                    xs: "20px",
                    md: "34px",
                  },
                  fontWeight: 900,
                }}
              >
                6+
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  color:
                    "rgba(255,255,255,0.75)",
                  fontSize: "13.5px",
                }}
              >
                Care Benefits
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ================================= */}
        {/* RIGHT FEATURE CARDS */}
        {/* ================================= */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
            },

            gap: {
              xs: 2,
              md: 2.5,
            },
          }}
        >
          {features.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",

                p: {
                  xs: 2.5,
                  md: 3,
                },

                minHeight: {
                  xs: "210px",
                  md: "200px",
                },

                borderRadius: {
                  xs: "22px",
                  md: "28px",
                },

                background: "#ffffff",

                border:
                  "1px solid #e3edfb",

                boxShadow:
                  "0 12px 35px rgba(29,78,216,0.07)",

                overflow: "hidden",

                transition:
                  "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",

                "&::before": {
                  content: '""',

                  position: "absolute",

                  top: 0,
                  left: 0,

                  width: "5px",
                  height: "100%",

                  background:
                    "linear-gradient(180deg,#2563eb,#06b6d4)",

                  transition: "0.35s ease",
                },

                "&::after": {
                  content: '""',

                  position: "absolute",

                  width: "130px",
                  height: "130px",

                  borderRadius: "50%",

                  right: "-75px",
                  top: "-75px",

                  background:
                    "rgba(37,99,235,0.055)",

                  transition: "0.4s ease",
                },

                "&:hover": {
                  transform:
                    "translateY(-7px)",

                  borderColor:
                    "rgba(37,99,235,0.30)",

                  boxShadow:
                    "0 22px 45px rgba(37,99,235,0.14)",

                  "&::before": {
                    width: "8px",
                  },

                  "&::after": {
                    transform:
                      "scale(1.45)",
                  },

                  "& .featureArrow": {
                    background: "#2563eb",
                    color: "#ffffff",
                    transform:
                      "translateX(4px)",
                  },

                  "& .featureIcon": {
                    transform:
                      "rotate(-6deg) scale(1.08)",
                  },
                },
              }}
            >
              {/* TOP */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "space-between",
                  mb: 2.5,
                }}
              >
                {/* ICON */}

                <Box
                  className="featureIcon"
                  sx={{
                    width: "50px",
                    height: "50px",

                    borderRadius: "18px",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "#ffffff",

                    background:
                      "linear-gradient(135deg,#2563eb,#0ea5e9)",

                    boxShadow:
                      "0 10px 25px rgba(37,99,235,0.25)",

                    transition:
                      "0.35s ease",

                    "& svg": {
                      fontSize: "31px",
                    },
                  }}
                >
                  {item.icon}
                </Box>

                {/* NUMBER */}

                <Typography
                  sx={{
                    color: "#dbe7f7",

                    fontSize: {
                      xs: "27px",
                      md: "30px",
                    },

                    fontWeight: 900,
                  }}
                >
                  {item.number}
                </Typography>
              </Box>

              {/* TITLE */}

              <Typography
                sx={{
                  color: "#10244a",

                  fontSize: {
                    xs: "18px",
                    md: "20px",
                  },

                  fontWeight: 800,

                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {/* DESCRIPTION */}

              <Typography
                sx={{
                  color: "#495667",

                  fontSize: {
                    xs: "13.5px",
                    md: "13px",
                  },

                  lineHeight: {
                    xs: "23px",
                    md: "23px",
                  },
                  fontWeight:"bold",
                  pr: 2,
                }}
              >
                {item.description}
              </Typography>

            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
export default WhyChooseUs;