import React from "react";
// Import your logo - add this file to your assets
import Logo from "../../assets/techfest-logo.jpg"; // Add your logo file

const Footer = () => {
  return (
    <footer className="w-full bg-black/95 text-white py-16">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand Section */}
          <div className="w-full flex flex-col items-center md:items-start space-y-8">
            {/* Logo and Title Container */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <img src={Logo} alt="Tech Fest Logo" className="h-24 w-auto mb-4" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#CBFC58] to-white bg-clip-text text-transparent">
                Tech Fest
                <span className="block text-3xl md:text-4xl text-white/90 font-medium mt-2">2025</span>
              </h1>
            </div>
            <p className="w-full md:max-w-md text-xl md:text-2xl text-gray-300 text-center md:text-left leading-relaxed">
              One of the largest technical festivals at VIT Bhopal. Join us to explore innovation and technology.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center justify-center md:justify-start gap-8">
              <a href="#" className="text-[#CBFC58] hover:text-white transition-all duration-300 transform hover:scale-110">
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                  {/* Facebook SVG path */}
                </svg>
              </a>
              <a href="#" className="text-[#CBFC58] hover:text-white transition-all duration-300 transform hover:scale-110">
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                  {/* Twitter SVG path */}
                </svg>
              </a>
              <a href="#" className="text-[#CBFC58] hover:text-white transition-all duration-300 transform hover:scale-110">
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                  {/* Instagram SVG path */}
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full flex flex-col items-center md:items-start space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#CBFC58]">
              Quick Links
            </h2>
            <ul className="w-full flex flex-col items-center md:items-start space-y-6">
              {['Events', 'Schedule', 'Sponsors', 'About Us'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-2xl md:text-3xl text-gray-300 hover:text-[#CBFC58] transition-all duration-300 
                             hover:translate-x-2 inline-block hover:font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full flex flex-col items-center md:items-start space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#CBFC58]">
              Contact Us
            </h2>
            <div className="w-full flex flex-col items-center md:items-start space-y-6">
              <p className="flex items-center text-xl md:text-2xl text-gray-300 group hover:bg-[#CBFC58]/10 p-4 rounded-lg transition-all duration-300">
                <svg className="w-8 h-8 md:w-10 md:h-10 mr-4 text-[#CBFC58] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Location SVG path */}
                </svg>
                <span className="group-hover:text-white transition-colors">VIT Bhopal University, MP</span>
              </p>
              <p className="flex items-center text-xl md:text-2xl text-gray-300 group hover:bg-[#CBFC58]/10 p-4 rounded-lg transition-all duration-300">
                <svg className="w-8 h-8 md:w-10 md:h-10 mr-4 text-[#CBFC58] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Phone SVG path */}
                </svg>
                <span className="group-hover:text-white transition-colors">+91 1234567890</span>
              </p>
              <p className="flex items-center text-xl md:text-2xl text-gray-300 group hover:bg-[#CBFC58]/10 p-4 rounded-lg transition-all duration-300">
                <svg className="w-8 h-8 md:w-10 md:h-10 mr-4 text-[#CBFC58] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Email SVG path */}
                </svg>
                <span className="group-hover:text-white transition-colors">techfestvitbhopal@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full border-t border-gray-800 mt-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-8">
          <p className="text-center text-xl md:text-2xl text-gray-400">
            Website designed and created by{" "}
            <span className="text-[#CBFC58] font-semibold hover:text-white transition-all duration-300 cursor-pointer">
              BlockChain Club VIT B
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
