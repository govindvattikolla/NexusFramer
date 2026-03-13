import React, { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [programOpen, setProgramOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md relative">

      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-3 flex justify-between lg:justify-around items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-[#DE080A]">
          <img src="/Nexus-Framer-Logo.png" alt="logo" width={200} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium items-center">

          <Link to="/" className="nav-link">Home</Link>

          <Link to="/about" className="nav-link">About Us</Link>

          <Link to="/whoweserve" className="nav-link">Who We Serve</Link>

          {/* Programs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgramOpen(true)}
            onMouseLeave={() => setProgramOpen(false)}
          >

            <button className="flex items-center gap-1 nav-link">
              Programs
              <span
                className={`text-sm transition-transform duration-300 ml-1  ${
                  programOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {programOpen && (
              <div className="absolute left-0 top-8 bg-white shadow-xl rounded-md border-t-3 border-[#DE080A] p-6 grid grid-cols-2 gap-10 w-[420px] z-50">

                {/* Online Programs */}
                <div>
                   <ul className="space-y-2">
                    <li><Link to="/programs/online" className="dropdown-item">Online programs</Link></li>
                    </ul>

                 
                </div>

                {/* Offline Programs */}
                <div>
                  <h3 className="text-md text-[#DE080A] mb-3">
                    Offline Programs
                  </h3>

                  <ul className="space-y-2">
                    <li><Link to="/programs/schools" className="dropdown-item">School Progrmas</Link></li>
                    <li><Link to="/programs/colleges" className="dropdown-item">College Programs</Link></li>
                    <li><Link to="/programs/corporate" className="dropdown-item">Corporate Programs</Link></li>
                    
                  </ul>
                </div>

              </div>
            )}
          </div>

          <Link to="/services" className="nav-link">Courses(Enroll)</Link>

          <Link to="/industriesserved" className="nav-link">Trainings</Link>

          <Link to="/gallery" className="nav-link">Gallery</Link>

          <Link to="/founder" className="nav-link">Founder</Link>

          <Link to="/partner" className="nav-link">Partner with us</Link>

          <Link to="/contactus" className="nav-link">Contact</Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl md:hidden text-[#DE080A]"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#DE080A] text-white flex flex-col space-y-3 px-6 py-4 font-medium">

          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>

          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>

          <Link to="/whoweserve" onClick={() => setIsOpen(false)}>Who we Serve</Link>

          {/* Mobile Programs Dropdown */}
          <div>

            <button
              className="flex justify-between w-full"
              onClick={() => setProgramOpen(!programOpen)}
            >
              Programs
              <span className={`${programOpen ? "rotate-180" : ""} transition`}>
                ▼
              </span>
            </button>

            {programOpen && (
              <div className="mt-2 ml-3 space-y-2">

                <p className="text-gray-200 text-sm mt-2"></p>

                <Link to="/programs/online">online Programs</Link>

                <p className="text-gray-200 text-sm mt-3">Offline Programs</p>

                <Link to="/programs/schools">School Programs</Link> <br />
                <Link to="/programs/colleges">College Programs</Link> <br />
                <Link to="/programs/corporate">Corporate Programs</Link>
                

              </div>
            )}

          </div>

          <Link to="/services" className="nav-link">Courses(Enroll)</Link>

          <Link to="/industriesserved" className="nav-link">Trainings</Link>

          <Link to="/gallery" className="nav-link">Gallery</Link>

          <Link to="/founder" className="nav-link">Founder</Link>

          <Link to="/partner" className="nav-link">Partner with us</Link>

          <Link to="/contactus" className="nav-link">Contact</Link>

        </div>
      )}

      {/* Shared styles */}
      <style>
        {`
        .nav-link{
          position:relative;
          display:inline-block;
        }

        .nav-link::after{
          content:'';
          position:absolute;
          left:0;
          bottom:-4px;
          height:2px;
          width:0;
          background:#DE080A;
          transition:0.3s;
        }

        .nav-link:hover::after{
          width:100%;
        }

        .dropdown-item:hover{
          color:#DE080A;
        }
        `}
      </style>

    </nav>
  )
}

export default Header