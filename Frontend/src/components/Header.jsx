import React, { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-3 flex justify-between lg:justify-around items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-[#DE080A]">
        <img src="/Nexus-Framer-Logo.png" alt="logo" width={200} height={200}  />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/"
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#DE080A] after:transition-all after:duration-300 hover:after:w-full"
          > Home  </Link>
          <Link to="/about"
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#DE080A] after:transition-all after:duration-300 hover:after:w-full"
          > About Us  </Link>
          <Link to="/whoweserve"
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#DE080A] after:transition-all after:duration-300 hover:after:w-full"
          > Who We Serve </Link>
            <Link to="/programs"
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#DE080A] after:transition-all after:duration-300 hover:after:w-full"
          > Programs </Link>
          <Link to="/services"
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#DE080A] after:transition-all after:duration-300 hover:after:w-full"
          > Courses(Enroll) </Link>
            <Link to="/industriesserved"
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#DE080A] after:transition-all after:duration-300 hover:after:w-full"
          > Trainings </Link>
          <Link to="/gallery"
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#DE080A] after:transition-all after:duration-300 hover:after:w-full"
          > Gallery  </Link>
           <Link to="/founder"
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#DE080A] after:transition-all after:duration-300 hover:after:w-full"
          > Founder  </Link>
          <Link to="/partner"
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#DE080A] after:transition-all after:duration-300 hover:after:w-full"
          > Partner with us  </Link>
          <Link to="/contactus"
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#DE080A] after:transition-all after:duration-300 hover:after:w-full"
          > Contact </Link>
         
        </div>

        {/* Mobile Button */}
        <button 
          className="text-3xl md:hidden text-[#DE080A]"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#DE080A] text-white flex flex-col space-y-4 px-6 py-4 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/whoweserve" onClick={() => setIsOpen(false)}>Who we Serve</Link>
          <Link to="/contactus" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/industriesserved" onClick={() => setIsOpen(false)}>Industries</Link>
          <Link to="/programs" onClick={() => setIsOpen(false)}>Programs</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        </div>
      )}
    </nav>
  )
}

export default Header