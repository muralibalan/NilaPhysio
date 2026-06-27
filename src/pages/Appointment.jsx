import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
  Paper,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

function Appointment() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    doctor: "",
    service: "",
    date: "",
    time: "",
  });

  const doctors = ["Dr. PremKumar", "Dr. Shalini"];

  const services = [
    "Orthopedic Physiotherapy",
    "Sports Injury Rehabilitation",
    "Neurological Physiotherapy",
    "Post-Surgical Rehabilitation",
    "Pain Management Therapy",
    "Pediatric Physiotherapy",
    "Geriatric Physiotherapy",
  ];

  const timeSlots = ["Morning: 10AM - 2PM", "Evening: 05PM - 09PM"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    const token = "APT-" + Math.floor(10000 + Math.random() * 90000);
    const updatedData = { ...form, token };

    setData(updatedData);
    setOpen(true);

    // WhatsApp Message Integration
    const whatsappNumber = "+919842492982";
    const message = `*New Appointment Confirmed* 🗓️\n\n` +
                    `*Token:* ${token}\n` +
                    `*Name:* ${updatedData.name}\n` +
                    `*Phone:* ${updatedData.phone}\n` +
                    `*Area:* ${updatedData.area}\n` +
                    `*Doctor:* ${updatedData.doctor}\n` +
                    `*Service:* ${updatedData.service}\n` +
                    `*Date:* ${updatedData.date}\n` +
                    `*Time Slot:* ${updatedData.time}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    
    // Opens WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#eef3ff",
        px: { xs: 2, sm: 3 },
        py: { xs: 3, sm: 4 },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "95%", md: "70%", lg: "55%" },
        }}
      >
        {/* TITLE */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            mt: { xs: 2, md: 5 },
            mb: 3,
            textAlign: "center",
          }}
        >
          <LocalHospitalIcon sx={{ color: "#3b82f6", fontSize: 28 }} />

          <Typography
            sx={{
              fontSize: { xs: 24, sm: 30, md: 40 },
              fontWeight: "bold",
            }}
          >
            Appointment Booking
          </Typography>
        </Box>

        {/* FORM CARD */}
        <Box
          sx={{
            borderRadius: { xs: "24px", md: "42px" },
            p: { xs: 2, sm: 3, md: "55px" },
            mx: { xs: 0, sm: 2, md: 5 },

            background:
              "linear-gradient(135deg, rgba(255,255,255,0.28), rgba(219,234,254,0.22))",

            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",

            border: "5px solid rgba(147,197,253,0.25)",

            boxShadow: `
              0 20px 45px rgba(59,130,246,0.10),
              0 0 35px rgba(96,165,250,0.10),
              inset 0 1px 0 rgba(255,255,255,0.55),
              inset 0 -8px 20px rgba(147,197,253,0.08)
            `,

            position: "relative",
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          {/* NAME + PHONE */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              mb: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: 14, mb: 0.7, fontWeight: 500 }}>
                Patient Name
              </Typography>

              <TextField
                fullWidth
                placeholder="Enter Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                sx={{
                  background: "#f5f7ff",
                  "& .MuiInputBase-root": {
                    height: "42px",
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: 14, mb: 0.7, fontWeight: 500 }}>
                Phone Number
              </Typography>

              <TextField
                fullWidth
                placeholder="Enter Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                sx={{
                  background: "#f5f7ff",
                  "& .MuiInputBase-root": {
                    height: "42px",
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>
          </Box>

          {/* AREA */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: 14, mb: 0.7, fontWeight: 500 }}>
              Area
            </Typography>

            <TextField
              fullWidth
              placeholder="Enter Area"
              name="area"
              value={form.area}
              onChange={handleChange}
              sx={{
                background: "#f5f7ff",
                "& .MuiInputBase-root": {
                  height: "42px",
                  borderRadius: "10px",
                },
              }}
            />
          </Box>

          {/* DOCTOR + SERVICE */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              mb: 2,
            }}
          >
            <FormControl fullWidth>
              <Typography sx={{ fontSize: 14, mb: 0.7, fontWeight: 500 }}>
                Select Doctor
              </Typography>

              <Select name="doctor" value={form.doctor} onChange={handleChange}>
                <MenuItem value="">Select Doctor</MenuItem>
                {doctors.map((d, i) => (
                  <MenuItem key={i} value={d}>
                    {d}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <Typography sx={{ fontSize: 14, mb: 0.7, fontWeight: 500 }}>
                Select Service
              </Typography>

              <Select name="service" value={form.service} onChange={handleChange}>
                <MenuItem value="">Select Service</MenuItem>
                {services.map((s, i) => (
                  <MenuItem key={i} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* DATE + TIME */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              mb: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: 14, mb: 0.7, fontWeight: 500 }}>
                Select Date
              </Typography>
              <TextField
                type="date"
                fullWidth
                name="date"
                value={form.date}
                onChange={handleChange}
                sx={{
                  background: "#f5f7ff",
                  "& .MuiInputBase-root": {
                    height: "42px",
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>

            <FormControl fullWidth>
              <Typography sx={{ fontSize: 14, mb: 0.7, fontWeight: 500 }}>
                Select Time Slot
              </Typography>
              <Select name="time" value={form.time} onChange={handleChange}>
                <MenuItem value="">Select Time</MenuItem>
                {timeSlots.map((t, i) => (
                  <MenuItem key={i} value={t}>
                    {t}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* BUTTON */}
          <Button
            fullWidth
            onClick={handleConfirm}
            sx={{
              background: "#3b82f6",
              color: "#fff",
              py: 1.2,
              borderRadius: "10px",
              fontWeight: "bold",
              "&:hover": { background: "#2563eb" },
            }}
          >
            Confirm Appointment
          </Button>
        </Box>
      </Box>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper
          sx={{
            width: { xs: "80%", sm: 430 },
            p: 2,
            borderRadius: 4,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#2ecc71",
              textAlign: "center",
            }}
          >
            Appointment Confirmed
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography><b>Token:</b> {data?.token}</Typography>
            <Typography><b>Name:</b> {data?.name}</Typography>
            <Typography><b>Phone:</b> {data?.phone}</Typography>
            <Typography><b>Area:</b> {data?.area}</Typography>
            <Typography><b>Doctor:</b> {data?.doctor}</Typography>
            <Typography><b>Service:</b> {data?.service}</Typography>
            <Typography><b>Date:</b> {data?.date}</Typography>
            <Typography><b>Time:</b> {data?.time}</Typography>
          </Box>

          <Button fullWidth sx={{ mt: 2 }} onClick={() => setOpen(false)}>
            Close
          </Button>
        </Paper>
      </Modal>
    </Box>
  );
}

export default Appointment;