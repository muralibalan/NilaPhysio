import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const serviceCategories = [
  {
    category: "Pain Management",
    description:
      "Our pain management services focus on reducing pain, improving mobility, and helping patients return to daily activities comfortably.",
    items: [
      { name: "Back Pain Treatment", img: "/backpain.jpg" },
      { name: "Neck Pain Treatment", img: "/neckpain.jpg" },
      { name: "Knee Pain Treatment", img: "/neepain.jpg" },
      { name: "Joint Pain Management", img: "/jointpain.jpg" },
      { name: "Muscle Pain Relief", img: "/musclepain.jpg" },
      { name: "Sciatica Pain Treatment", img: "/sciaticapain.png" },
    ],
  },
  {
    category: "Orthopedic Physiotherapy",
    description:
      "Orthopedic Physiotherapy helps relieve pain, improve movement, and restore function in bones, joints, and muscles. Our personalized treatment plans support faster recovery and long-term physical well-being.",
    items: [
      { name: "Arthritis Treatment", img: "/arthritis.jpg" },
      { name: "Cervical Spondylosis", img: "/Cervical.jpg" },
      { name: "Slip Disc Therapy", img: "/slipped-disc1.jpg" },
      { name: "Frozen Shoulder", img: "/Frozen-Shoulder-and-Physiotherapy.jpg" },
      { name: "Tennis Elbow", img: "/Tennis-Elbow-Treatment.jpg" },
      { name: "Ligament Injury", img: "/ligament.webp" },
    ],
  },
  {
    category: "Sports Injury Rehabilitation",
    description:
      "Recover faster and perform better with our Sports Injury Rehabilitation programs. We help restore strength, mobility, and confidence after sports injuries, ensuring a safe return to your active lifestyle.",
    items: [
      { name: "Sports Injury Recovery", img: "/sports.jpg" },
      { name: "Muscle Tear Rehab", img: "/muscle-therapy.jpg" },
      { name: "ACL Rehab", img: "/acl.jpg" },
      { name: "Ankle Sprain Recovery", img: "/ankle.png" },
      { name: "Fracture Recovery", img: "/FractureTreatmentBangalor.jpeg" },
      { name: "Strength Training", img: "/srength.jpg" },
    ],
  },
  {
    category: "Neurological Physiotherapy",
    description:
      "Neurological Physiotherapy helps individuals regain movement, balance, and independence after neurological conditions. Our personalized rehabilitation programs support recovery, improve function, and enhance everyday living.",
    items: [
      { name: "Stroke Rehabilitation", img: "/stroke-treatment-and-recovery-alt-1440x810.webp" },
      { name: "Paralysis Therapy", img: "/paralysis.jpg" },
      { name: "Spinal Cord Injury", img: "/spaincord.jpg" },
      { name: "Balance Training", img: "/balnce.jpg" },
      { name: "Nerve Injury Treatment", img: "/nerve.jpg" },
      { name: "Muscle Weakness Therapy", img: "/Muscle Weakness Therapy.webp" },
    ],
  },
];

function Services({ home = false }) {
  const navigate = useNavigate();
  const sections = home ? [serviceCategories[0]] : serviceCategories;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 }, // Mobile view adjustments to spacing
        px: { xs: 2.5, sm: 4, md: 6 },
        background: "linear-gradient(180deg, #f4f8fe 0%, #edf3fc 100%)",
      }}
    >
      {/* SECTION MAIN HEADER TITLE */}
      <Typography
        sx={{
          color: "#2563eb",
          fontWeight: "bold",
          letterSpacing: "2px",
          textAlign: "center",
          mb: 1,
          fontSize: {
            xs: "14px",
            sm: "16px",
            md: "18px",
          },
        }}
      >
        OUR SERVICES
      </Typography>

      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: { xs: 8, md: 10 } }}>
          
          <Typography
            variant="h4"
            fontWeight="800"
            align="center"
            sx={{
              color: "#0f172a",
              mb: 2,
              fontFamily: "sans-serif",
              fontSize: { xs: "24px", sm: "32px", md: "40px" },
              lineHeight: { xs: "32px", md: "48px" },
               fontWeight: "bold",
            }}
          >
            {section.category}
          </Typography>

          <Typography
            align="center"
            sx={{
              color: "#64748b",
              maxWidth: 720,
              mx: "auto",
              mb: { xs: 4, md: 6 },
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: 1.6,
            }}
          >
            {section.description}
          </Typography>

          {/* FLUID MOBILE-FRIENDLY CSS GRID SYSTEM */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",             // Single full column on Mobile Screen Layouts
                sm: "repeat(2, 1fr)",   // Split layout adjustments
                md: "repeat(3, 1fr)",   // Stable desktop layout structures
              },
              gap: { xs: 3, md: 4 },
              maxWidth: "1400px",
              mx: "auto",
            }}
          >
            {section.items.map((item, i) => (
              <Card
                key={i}
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column", // Mobile configuration logic tracking text setups underneath images 
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: { xs: "none", md: "translateY(-6px)" },
                    boxShadow: "0 12px 30px rgba(37, 99, 235, 0.12)",
                  }
                }}
              >
                {/* IMAGE TOP DISPATCH CONTAINER */}
                <Box
                  component="img"
                  src={item.img}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    height: { xs: 220, sm: 240, md: 260 },
                    objectFit: "cover",
                    display: "block"
                  }}
                />

                {/* TEXT METRICS BLOCK DISPLAY BELOW IMAGE CARD ON MOBILE STRUCTURES */}
                <CardContent 
                  sx={{ 
                    p: { xs: 3, md: 3.5 }, 
                    flexGrow: 1, 
                    display: "flex", 
                    flexDirection: "column" 
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ color: "#0f172a", fontSize: { xs: "18px", md: "20px" } }}
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      color: "#64748b",
                      fontSize: "13.5px",
                      lineHeight: 1.5,
                      flexGrow: 1 // Extends baseline profiles cleanly across structural rows
                    }}
                  >
                    Expert physiotherapy treatment designed for recovery and mobility improvement.
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth // Better responsive layout interaction footprint patterns on Mobile Tap Views
                    onClick={() => navigate("/Appointment")}
                    sx={{
                      mt: 3,
                      borderRadius: "40px",
                      py: 1.2,
                      textTransform: "none",
                      fontWeight: "bold",
                      background: "linear-gradient(to right, #2563eb, #3b82f6)",
                      boxShadow: "0 6px 15px rgba(37, 99, 235, 0.15)",
                      "&:hover": {
                        background: "linear-gradient(to right, #1d4ed8, #2563eb)",
                      }
                    }}
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Services;