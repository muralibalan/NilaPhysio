import React, { useEffect, useState, useRef } from "react";
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
      { name: "Back Pain Treatment", img: "/backpain.png" },
      { name: "Neck Pain Treatment", img: "/Neckpained.png" },
      { name: "Knee Pain Treatment", img: "/neepain.png" },
      { name: "Joint Pain Management", img: "/jointpain.png" },
      { name: "Muscle Pain Relief", img: "/musclepain.png" },
      { name: "Sciatica Pain Treatment", img: "/sciaticapain.png" },
      { name: "Effective Stroke Recovery & Pain Relief Physiotherapy", img: "/stroke2.png" },
    ],
  },
  {
    category: "Orthopedic Physiotherapy",
    description:
      "Orthopedic Physiotherapy helps relieve pain, improve movement, and restore function in bones, joints, and muscles. Our personalized treatment plans support faster recovery and long-term physical well-being.",
    items: [
      { name: "Arthritis Treatment", img: "/arthritis.png" },
      { name: "Cervical Spondylosis", img: "/Cervical.png" },
      { name: "planter fasciitis", img: "/planter fasciitis.png" },
      { name: "Frozen Shoulder", img: "/Frozen-Shoulder-and-Physiotherapy.png" },
      { name: "Tennis Elbow", img: "/Tennis-Elbow-Treatment.png" },
      { name: "Ligament Injury", img: "/ligament.png" },
    ],
  },
  {
    category: "Sports Injury Rehabilitation",
    description:
      "Recover faster and perform better with our Sports Injury Rehabilitation programs. We help restore strength, mobility, and confidence after sports injuries, ensuring a safe return to your active lifestyle.",
    items: [
      { name: "Sports Injury Recovery", img: "/sports.png" },
      { name: "Muscle Tear Rehab", img: "/muscle-therapy.png" },
      { name: "ACL Rehab", img: "/acl.png" },
      { name: "Ankle Sprain Recovery", img: "/ankle.png" },
      { name: "Fracture Recovery", img: "/FractureTreatmentBangalor.png" },
      { name: "Strength Training", img: "/srength.png" },
    ],
  },
  {
    category: "Neuro Rehabilitation Therapy",
    description:
      "Specialized rehabilitation care designed to improve movement, muscle control, balance, coordination, and functional independence in individuals with neurological conditions.",
    items: [
      { name: "Bell’s Palsy", img: "/bell'spalsy.png" },
      { name: "Stroke Paralysis", img: "/StrokeParalysis.png" },
      { name: "Parkinsonism", img: "/Parkinsonism.png" },
      { name: "Cerebral Palsy", img: "/Cerebral.png" },
      {name:"Multiple Sclerosis",img:"/MultipleSclerosis.png"},
      {name:"Muscular Dystrophy",img:"/MuscularDystrophy.png"}
    ],
  },
  {
    category: "Neurological Physiotherapy",
    description:
      "Neurological Physiotherapy helps individuals regain movement, balance, and independence after neurological conditions. Our personalized rehabilitation programs support recovery, improve function, and enhance everyday living.",
    items: [
      { name: "Stroke Rehabilitation", img: "/stroke.png" },
      { name: "Paralysis Therapy", img: "/paralysis.png" },
      { name: "Spinal Cord Injury", img: "/spaincord.png" },
      { name: "Balance Training", img: "/balnce.png" },
      { name: "Nerve Injury Treatment", img: "/nerve.png" },
      { name: "Muscle Weakness Therapy", img: "/muscles.png" },
    ],
  },
];

function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <Box
      ref={elementRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transition: `opacity 0.8s ease, transform 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) ${delay}s`,
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
}

function Services({ home = false }) {
  const navigate = useNavigate();
  const sections = home ? [serviceCategories[0]] : serviceCategories;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, sm: 4, md: 6 },
        background: "linear-gradient(180deg, #f4f8fe 0%, #edf3fc 100%)",
        overflow: "hidden",
      }}
    >
      {/* MAIN HEADER TITLE */}
      <ScrollReveal>
        <Typography
          sx={{
            color: "#2563eb",
            fontWeight: "bold",
            letterSpacing: "2px",
            textAlign: "center",
            mb: 1,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            textShadow: "0.5px 0.5px 0.6px rgba(29, 29, 29, 0.9), 0px 0px 2px rgb(255, 255, 255)",
          }}
        >
          OUR SERVICES
        </Typography>
      </ScrollReveal>

      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: { xs: 8, md: 10 } }}>

          {/* CATEGORY TITLE */}
          <ScrollReveal delay={0.1}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                color: "#0f172a",
                mb: 2,
                fontFamily: "sans-serif",
                fontSize: { xs: "24px", sm: "32px", md: "48px" },
                lineHeight: { xs: "32px", md: "48px" },
                fontWeight: "bold",
                textShadow: "3px 3px 3px rgba(255, 255, 255, 0.9), 0px 0px 2px rgb(0, 0, 0)",
              }}
            >
              {section.category}
            </Typography>
          </ScrollReveal>

          {/* DESCRIPTION */}
          <ScrollReveal delay={0.2}>
            <Typography
              align="center"
              sx={{
                color: "#64748b",
                maxWidth: 720,
                mx: "auto",
                mb: { xs: 4, md: 6 },
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: 1.6,
              }}
            >
              {section.description}
            </Typography>
          </ScrollReveal>

          {/* GRID CONTAINER */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 3, md: 4 },
              maxWidth: "1400px",
              mx: "auto",
            }}
          >
            {section.items.map((item, i) => {

              const staggerDelay = (i % 3) * 0.15;

              return (
                <ScrollReveal key={i} delay={staggerDelay}>
                  <Card
                    sx={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.7)",
                      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
                      "&:hover": {
                        transform: { xs: "none", md: "translateY(-8px)" },
                        boxShadow: "0 16px 36px rgba(37, 99, 235, 0.16)",
                      },
                    }}
                  >
                    {/* IMAGE */}
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.name}
                      sx={{
                        width: "100%",
                        height: { xs: 240, sm: 240, md: 260 },
                        objectFit: "100% 100%",
                        display: "block",
                      }}
                    />

                    {/* CARD CONTENT */}
                    <CardContent
                      sx={{
                        p: { xs: 3, md: 3.5 },
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{ color: "#0f172a", fontSize: { xs: "18px", md: "20px" },fontWeight:"bolder",fontFamily:"sans-serif" }}
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
                          flexGrow: 1,
                        }}
                      >
                        Expert physiotherapy treatment designed for recovery and mobility improvement.
                      </Typography>

                      <Button
                        variant="contained"
                        fullWidth
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
                          },
                        }}
                      >
                        Book Appointment
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Services;