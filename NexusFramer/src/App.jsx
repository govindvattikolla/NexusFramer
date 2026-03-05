import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"

import Home from "./pages/Home"
import About from "./pages/About"
import AboutFounder from "./pages/AboutFounder"
import ContactUS from "./pages/ContactUS"
import Gallery from "./pages/Gallery"
import IndustriesServed from "./pages/Industriesserved"
import Programs from "./pages/Programs"
import Services from "./pages/Services"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutfounder" element={<AboutFounder />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/industriesserved" element={<IndustriesServed />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </>
  )
}