import React from "react";

import {
  Box,
  Typography,
  Button
} from "@mui/material";


function Doctor({preview}){
const doctors = [

  {
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",

    name:
      "Dr. Sarah Johnson",

    department:
      "Lead Physiotherapist",

    description:
      "Expert in clinical assessment, posture alignment, and comprehensive custom recovery care."
  },

  {
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",

    name:
      "Dr. Michael Lee",

    department:
      "Sports Physical Therapist",

    description:
      "Specialist in athlete injury rehabilitation, joint agility training, and dynamic performance therapy."
  },

  {
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",

    name:
      "Dr. Emily Carter",

    department:
      "Orthopedic Rehab Specialist",

    description:
      "Provides clinical post-surgical rehabilitation and advanced joint mobility restoration protocols."
  },

  {
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",

    name:
      "Dr. David Brown",

    department:
      "Neuro-Physiotherapist",

    description:
      "Experienced in stroke recovery, neuromuscular training, and motor function balance treatments."
  },

  {
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=80",

    name:
      "Dr. Olivia White",

    department:
      "Pediatric Physiotherapist",

    description:
      "Friendly motor milestone improvement and physical development care specialist for children."
  },

  {
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=80",

    name:
      "Dr. James Wilson",

    department:
      "Geriatric Rehab Expert",

    description:
      "Specialized in age-related mobility restoration, arthritis management, and fall prevention training."
  },

  {
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",

    name:
      "Dr. Sophia Miller",

    department:
      "Musculoskeletal Therapist",

    description:
      "Expert in chronic back pain management, sciatica relief, and advanced spine decompression."
  },

  {
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",

    name:
      "Dr. Ethan Clark",

    department:
      "Manual Therapy Practitioner",

    description:
      "Performs deep tissue manipulation, myofascial release, and joint mobilization safety techniques."
  },

  {
    image:
      "public/pexels-kooldark-27666709.jpg",

    name:
      "Dr. Isabella King",

    department:
      "Cardiopulmonary Therapist",

    description:
      "Specialist in breathing mechanics optimization, endurance training, and post-illness endurance."
  },

  {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",

    name:
      "Dr. Noah Taylor",

    department:
      "Trauma Rehabilitation Specialist",

    description:
      "Provides post-accident physical therapy and immediate pain mitigation exercise sessions."
  },

  {
    image:
      "public/pexels-kooldark-29995617.jpg",

    name:
      "Dr. Daniel Harris",

    department:
      "Kinesiology & Movement Expert",

    description:
      "Specialist in dynamic muscle tracking, gait analysis, and proactive ergonomics guidance training."
  },

  {
    image:
      "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=900&q=80",

    name:
      "Dr. Amelia Scott",

    department:
      "Ergonomic Recovery Therapist",

    description:
      "Expert in repetitive strain injuries, workplace postural correction, and lifestyle physical rehab."
  },

];

const displayDoctors =
    preview
      ? doctors.slice(0, 3)
      : doctors;

/* =========================
   COMPONENT
========================= */
  
return (
  <Box
    sx={{
      width: "100%",
      py: { xs: "60px", md: "110px" },
      background:
        "linear-gradient(to bottom,#f8fbff,#eef6ff)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: "-120px",
        right: "-120px",
        width: "320px",
        height: "320px",
        borderRadius: "50%",
        background: "rgba(59,130,246,0.14)",
        filter: "blur(120px)",
      }}
    />

    <Box
      sx={{
        borderRadius: { xs: "24px", md: "42px" },

        p: { xs: 3, sm: 4, md: "55px" },

        mx: { xs: 2, sm: 3, md: 5 },

        background:
          "linear-gradient(135deg, rgba(255,255,255,0.28), rgba(219,234,254,0.22))",

        backdropFilter: "blur(28px)",

        WebkitBackdropFilter: "blur(28px)",

        border:
          "5px solid rgba(147,197,253,0.25)",

        boxShadow: `
          0 20px 45px rgba(59,130,246,0.10),
          0 0 35px rgba(96,165,250,0.10),
          inset 0 1px 0 rgba(255,255,255,0.55),
          inset 0 -8px 20px rgba(147,197,253,0.08)
        `,

        position: "relative",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background:
            "rgba(147,197,253,0.18)",
          filter: "blur(80px)",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background:
            "rgba(59,130,246,0.14)",
          filter: "blur(90px)",
        },

        zIndex: 2,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 4, md: 7 },
        }}
      >
        <Typography
          sx={{
            color: "#2563eb",
            fontWeight: "bold",
            letterSpacing: "2px",
            fontSize: {
              xs: "18px",
              sm: "24px",
              md: "40px",
            },
          }}
        >
          OUR SPECIALISTS
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: {
              xs: "30px",
              sm: "38px",
              md: "52px",
            },
            fontWeight: "bold",
            color: "#111",
          }}
        >
          Meet Our Experts
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#666",
            fontSize: {
              xs: "14px",
              md: "17px",
            },
            width: {
              xs: "100%",
              md: "700px",
            },
            mx: "auto",
            lineHeight: {
              xs: "24px",
              md: "30px",
          },
          }}
        >
          Our experienced physiotherapy specialists provide advanced
          rehabilitation treatments with modern technology and comfortable
          patient movement care.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          },

          gap: {
            xs: 3,
            md: 4,
          },
        }}
      >
        {displayDoctors.map((doctor, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "30px",
              overflow: "hidden",
              position: "relative",

              background:
                "rgba(255,255,255,0.78)",

              backdropFilter: "blur(18px)",

              border:
                "1px solid rgba(255,255,255,0.7)",

              boxShadow: `
                0 15px 35px rgba(59,130,246,0.08),
                0 0 25px rgba(59,130,246,0.06)
              `,

              transition: "0.35s",

              "&:hover": {
                transform: "translateY(-8px)",

                boxShadow: `
                  0 20px 45px rgba(59,130,246,0.12),
                  0 0 35px rgba(59,130,246,0.10)
                `,
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "160px",
                background:
                  "linear-gradient(to bottom, rgba(59,130,246,0.18), transparent)",
                zIndex: 1,
              }}
            />

            <Box
              component="img"
              src={doctor.image}
              alt={doctor.name}
              sx={{
                width: "100%",

                height: {
                  xs: "250px",
                  sm: "300px",
                  md: "340px",
                },

                objectFit: "cover",
                objectPosition: "top",
              }}
            />

            <Box
              sx={{
                p: {
                  xs: 2.5,
                  md: 3.5,
                },

                position: "relative",
                zIndex: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    md: "25px",
                  },

                  fontWeight: "bold",
                  color: "#111",
                }}
              >
                {doctor.name}
              </Typography>

              <Typography
                sx={{
                  mt: "10px",
                  color: "#2563eb",
                  fontWeight: "600",

                  fontSize: {
                    xs: "14px",
                    md: "16px",
                  },
                }}
              >
                {doctor.department}
              </Typography>

              <Typography
                sx={{
                  mt: "16px",
                  color: "#666",

                  fontSize: {
                    xs: "14px",
                    md: "15px",
                  },

                  lineHeight: {
                    xs: "24px",
                    md: "28px",
                  },
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

                  background:
                    "linear-gradient(135deg,#3b82f6,#2563eb)",

                  color: "#fff",

                  fontWeight: "bold",

                  boxShadow:
                    "0 10px 20px rgba(59,130,246,0.18)",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg,#2563eb,#1d4ed8)",
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