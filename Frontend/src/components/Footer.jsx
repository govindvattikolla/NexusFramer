import React from "react"

const Footer = () => {
  return (
    <footer className="bg-[#870000] text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#FFD801] mb-4">
              Let’s Build Confident People and High-Performing Organizations
            </h2>

            <p className="mt-4 text-gray-200 leading-relaxed">
              Designing people-centric learning that delivers performance,
              purpose, and progress.
            </p>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#FFD801]">📧 Email</h3>
              <p className="text-gray-200">contact@nexusframer.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#FFD801]">📞 Phone</h3>
              <p className="text-gray-200">Sri Aalekhya Puja: 9133193535</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Nexusframer. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer