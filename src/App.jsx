import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Doctor from "./pages/Doctor";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/services" element={<Services />} />

          <Route path="/doctors" element={<Doctor />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/Appointment" element={<Appointment />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;