import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  Stack,
  Container,
} from "@mui/material";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined"

// திசைகளுக்கு ஏற்ப (Left, Right, Bottom) கன்டென்ட்களை அனிமேட் செய்யும் ஸ்மார்ட் காம்போனென்ட்
function ScrollReveal({ children, delay = 0, direction = "bottom" }) {
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
        rootMargin: "0px 0px -40px 0px"
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  // திசையை தீர்மானிக்கும் லாஜிக்
  const getTranslateValue = () => {
    if (isVisible) return "translate(0, 0)";
    if (direction === "left") return "translateX(-60px)";
    if (direction === "right") return "translateX(60px)";
    return "translateY(60px)"; // default bottom
  };

  return (
    <Box
      ref={elementRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: getTranslateValue(),
        transition: `opacity 0.8s ease, transform 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
}

function AboutUs() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          width: "100%",
          background: "linear-gradient(180deg, #ffffff 0%, #eef8ff 100%)",
          pt: { xs: 10, md: 12 },
          pb: { xs: 8, md: 10 },
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth={false}
          sx={{ maxWidth: "1400px", mx: "auto", px: { xs: 2, sm: 3, md: 5, lg: 6 } }}
        >
          {/* Hero Flex Row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* LEFT CONTENT (Left to Right Animation) */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Stack spacing={3}>
                <ScrollReveal direction="left" delay={0.1}>
                  <Typography sx={{ color: "#06b6d4", fontWeight: 700, fontSize: "15px", letterSpacing: "0.8px" }}>
                    ABOUT NILA SPINE & JOINT CLINIC
                  </Typography>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.2}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1.15,
                      color: "#111827",
                      fontSize: { xs: "32px", sm: "42px", md: "52px", lg: "60px" },
                    }}
                  >
                    Restoring Mobility
                    <br />
                    <Box component="span" sx={{ color: "#2563eb" }}>
                      & Healthy Living
                    </Box>
                  </Typography>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.3}>
                  <Box sx={{ width: 70, height: 4, bgcolor: "#06b6d4", borderRadius: 20 }} />
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.4}>
                  <Typography sx={{ color: "#475569", maxWidth: 520, lineHeight: 1.9, fontSize: { xs: "15px", md: "16px" } }}>
                    We are committed to providing advanced physiotherapy treatments
                    with personalized care to help you move better, feel better, and
                    live a pain-free life.
                  </Typography>
                </ScrollReveal>

                {/* Feature Icons */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                  {[
                    { icon: <PeopleAltOutlinedIcon />, label1: "Expert", label2: "Therapists" },
                    { icon: <VerifiedUserOutlinedIcon />, label1: "Advanced", label2: "Care" },
                    { icon: <FavoriteBorderOutlinedIcon />, label1: "Patient", label2: "Focused" },
                  ].map((item, i) => (
                    <ScrollReveal key={i} direction="left" delay={0.5 + i * 0.1}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 50, height: 50, borderRadius: "50%",
                            border: "2px solid #22c7e8",
                            display: "flex", justifyContent: "center", alignItems: "center",
                            color: "#22c7e8", flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography fontWeight={600} sx={{ lineHeight: 1.3 }}>
                          {item.label1}<br />{item.label2}
                        </Typography>
                      </Box>
                    </ScrollReveal>
                  ))}
                </Box>
              </Stack>
            </Box>

            {/* RIGHT IMAGE (Right to Left Animation) */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <ScrollReveal direction="right" delay={0.2}>
                <Box
                  component="img"
                  src="/pic1.png"
                  alt="NILA Spine Clinic"
                  sx={{
                    width: { xs: "100%", sm: "90%", md: "100%", lg: "110%" },
                    maxWidth: "700px",
                    height: { xs: "260px", sm: "340px", md: "440px" },
                    borderRadius: "20px",
                    objectFit: "cover",
                    boxShadow: "0 15px 35px rgba(0,0,0,.12)",
                    display: "block",
                  }}
                />
              </ScrollReveal>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= WHO WE ARE (Bottom to Top) ================= */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: "#fff", overflow: "hidden" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* LEFT IMAGE */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <ScrollReveal direction="bottom" delay={0.1}>
                <Box
                  component="img"
                  src="/aboutpic.png"
                  alt="Doctor"
                  sx={{
                    width: { xs: "100%", sm: "90%", md: "100%" },
                    maxWidth: "580px",
                    height: { xs: "300px", md: "440px" },
                    borderRadius: "25px",
                    boxShadow: "0 15px 35px rgba(0,0,0,.12)",
                    objectFit: "cover",
                    display: "block",
                    mx: "auto",
                  }}
                />
              </ScrollReveal>
            </Box>

            {/* RIGHT CONTENT */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <ScrollReveal direction="bottom" delay={0.1}>
                <Typography sx={{ color: "#06b6d4", fontWeight: 700, letterSpacing: "1px", mb: 2, fontSize: "14px" }}>
                  WHO WE ARE
                </Typography>
              </ScrollReveal>

              <ScrollReveal direction="bottom" delay={0.2}>
                <Typography
                  sx={{
                    fontWeight: 800, color: "#111827", lineHeight: 1.15, mb: 3,
                    fontSize: { xs: "34px", sm: "44px", md: "50px" },
                  }}
                >
                  உங்கள் நலமே <br />எங்கள் பயணம்
                </Typography>
              </ScrollReveal>

              <ScrollReveal direction="bottom" delay={0.3}>
                <Typography sx={{ color: "#3f4b5b", lineHeight: 2, fontSize: { xs: "15px", md: "16px" }, mb: 4,fontWeight:"bold",fontFamily:"revert-layer" }}>
                  NILA முதுகுத்தண்டு மற்றும் மூட்டு சிகிச்சை மையத்தில், அனைத்து வயதினருக்கும் முழுமையான பிசியோதெரபி மற்றும் மறுவாழ்வு சிகிச்சைகளை வழங்குகிறோம். அனுபவமிக்க நிபுணர்கள், நவீன உபகரணங்கள் மற்றும் மேம்பட்ட சிகிச்சை முறைகள் மூலம் வலியைக் குறைத்து, உடல் இயக்கத்தை மீட்டெடுத்து, சிறந்த வாழ்க்கைத் தரத்தை மேம்படுத்த உதவுகிறோம்.
                </Typography>
              </ScrollReveal>

              <Stack spacing={2}>
                {[
                  "ஒவ்வொரு நோயாளிக்கும் தனிப்பட்ட சிகிச்சை திட்டம்",
                  "நவீன தொழில்நுட்பம் மற்றும் மேம்பட்ட உபகரணங்கள்",
                  "பாதுகாப்பான மற்றும் பயனுள்ள சிகிச்சை முறைகள்",
                  "அக்கறையான பராமரிப்பு மற்றும் தொடர்ச்சியான ஆதரவு",
                ].map((text, i) => (
                  <ScrollReveal key={i} direction="bottom" delay={0.4 + i * 0.1}>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <VerifiedUserOutlinedIcon sx={{ color: "#06b6d4", flexShrink: 0 }} />
                      <Typography sx={{ color: "#374151", fontSize: "14px",fontWeight:"bold" }}>{text}</Typography>
                    </Box>
                  </ScrollReveal>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= WE TREAT (Bottom to Top) ================= */}
      <Box sx={{ py: { xs: 8, md: 10 }, background: "#f8fbff", overflow: "hidden" }}>
        <Container maxWidth="xl">
          <ScrollReveal direction="bottom">
            <Typography sx={{ color: "#06b6d4", textAlign: "center", fontWeight: 700, letterSpacing: "1px", mb: 1, fontSize: "14px" }}>
              WE TREAT
            </Typography>
          </ScrollReveal>

          <ScrollReveal direction="bottom" delay={0.1}>
            <Typography sx={{ textAlign: "center", fontWeight: 800, color: "#111827", fontSize: { xs: "30px", md: "48px" }, mb: 6 }}>
              Relief for Every Pain
            </Typography>
          </ScrollReveal>

          {/* Cards Flex Row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {[
              { src: "/pic1.png", label: "முதுகு வலி சிகிச்சைகள்" },
              { src: "/pic2.png", label: "தோள்பட்டை • கழுத்து வலி" },
              { src: "/pic3.png", label: "முழு உடல் வலி சிகிச்சைகள்" },
              { src: "/pic4.png", label: "மூட்டு • முதுகு வலி" },
            ].map((card, i) => {
              // கார்டுகள் ஒன்றன்பின் ஒன்றாக வர தலா 0.15s கேப் லாஜிக்
              const cardDelay = (i % 4) * 0.15;

              return (
                <Box
                  key={i}
                  sx={{
                    flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 12px)", md: "1 1 calc(25% - 15px)" },
                    minWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(25% - 15px)" },
                    maxWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(25% - 15px)" },
                  }}
                >
                  <ScrollReveal direction="bottom" delay={cardDelay}>
                    <Box
                      sx={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        border: "3px solid #16c5db",
                        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                        display: "flex",
                        flexDirection: "column",
                        background: "#fff",
                        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
                        "&:hover": {
                          transform: { xs: "none", md: "translateY(-8px)" },
                          boxShadow: "0 16px 32px rgba(6, 182, 212, 0.16)",
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={card.src}
                        sx={{
                          width: "100%",
                          height: { xs: "240px", sm: "280px", md: "360px" },
                          objectFit: "cover",
                          display: "block",
                          flexShrink: 0,
                        }}
                      />
                      <Box sx={{ bgcolor: "#487ceb", py: 2.5, px: 1 }}>
                        <Typography align="center" sx={{ color: "#fff", fontWeight: 700, fontSize: "15px", lineHeight: 1.4 }}>
                          {card.label}
                        </Typography>
                      </Box>
                    </Box>
                  </ScrollReveal>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* ================= COUNTER SECTION (Bottom to Top) ================= */}
      <Box sx={{ py: { xs: 8, md: 10 }, background: "#f5f9ff", overflow: "hidden" }}>
        <Container
          maxWidth={false}
          sx={{ maxWidth: "1400px", mx: "auto", px: { xs: 2, sm: 3, md: 5, lg: 6 } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            {[
              {
                icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 36 }} />,
                value: "19+",
                label: "Years of Experience"
              },
              { icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 36 }} />, value: "15000+", label: "Recovered Patients" },
              { icon: <AccessTimeOutlinedIcon sx={{ fontSize: 36 }} />, value: "24/7", label: "Emergency Support" },
              { icon: <MedicalServicesOutlinedIcon sx={{ fontSize: 36 }} />, value: "Modern", label: "Rehab Equipment" },
            ].map((item, i) => {
              const counterDelay = (i % 4) * 0.15;

              return (
                <Box
                  key={i}
                  sx={{
                    flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 12px)", md: "1 1 calc(25% - 18px)" },
                    minWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(25% - 18px)" },
                    maxWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(25% - 18px)" },
                  }}
                >
                  <ScrollReveal direction="bottom" delay={counterDelay}>
                    <Box
                      sx={{
                        bgcolor: "#fff",
                        borderRadius: "20px",
                        p: 4,
                        textAlign: "center",
                        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 14px 28px rgba(0,0,0,.12)",
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: 72, height: 72, mx: "auto", mb: 2,
                          borderRadius: "50%", bgcolor: "#e0f7ff", color: "#06b6d4",
                          display: "flex", justifyContent: "center", alignItems: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography sx={{ fontWeight: 800, color: "#06b6d4", fontSize: "40px", lineHeight: 1.1, mb: 0.5 }}>
                        {item.value}
                      </Typography>
                      <Typography fontWeight={600} sx={{ color: "#374151" }}>
                        {item.label}
                      </Typography>
                    </Box>
                  </ScrollReveal>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AboutUs;