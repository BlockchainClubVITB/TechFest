import React from "react";

const ButtonG = ({ 
  label = "PLAY", 
  onClick, 
  disabled = false,
  fontSize = "17px",
  padding = "20px 50px" 
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      style={{ padding, fontSize }}
      className="relative inline-flex items-center justify-center font-bold tracking-widest
                 bg-black text-[#CBFC58] border-2 border-[#CBFC58] transition-all duration-300 
                 hover:bg-[#CBFC58] hover:text-black group
                 disabled:opacity-50 disabled:cursor-not-allowed
                 before:absolute before:inset-0 before:bg-[#CBFC58] before:blur-lg before:opacity-0 before:transition-opacity
                 hover:before:opacity-20 before:-z-10"
    >
      {label}
      {/* Corners */}
      <div className="absolute inset-0">
        {/* Top Left Corner */}
        <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-[#CBFC58] 
                      transition-all duration-300 group-hover:h-4 group-hover:w-4
                      group-hover:shadow-[0_0_15px_rgba(203,252,88,0.5)]"></div>
        {/* Top Right Corner */}
        <div className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-[#CBFC58] 
                      transition-all duration-300 group-hover:h-4 group-hover:w-4
                      group-hover:shadow-[0_0_15px_rgba(203,252,88,0.5)]"></div>
        {/* Bottom Left Corner */}
        <div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-[#CBFC58] 
                      transition-all duration-300 group-hover:h-4 group-hover:w-4
                      group-hover:shadow-[0_0_15px_rgba(203,252,88,0.5)]"></div>
        {/* Bottom Right Corner */}
        <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-[#CBFC58] 
                      transition-all duration-300 group-hover:h-4 group-hover:w-4
                      group-hover:shadow-[0_0_15px_rgba(203,252,88,0.5)]"></div>
      </div>
      
      {/* Arrows */}
      <div className="absolute left-2 opacity-0 transition-all duration-300 
                    group-hover:opacity-100 group-hover:-translate-x-2
                    group-hover:shadow-[0_0_10px_rgba(203,252,88,0.5)]">
        <span className="block h-2 w-2 rotate-45 border-b-2 border-l-2 border-[#CBFC58]"></span>
      </div>
      <div className="absolute right-2 opacity-0 transition-all duration-300 
                    group-hover:opacity-100 group-hover:translate-x-2
                    group-hover:shadow-[0_0_10px_rgba(203,252,88,0.5)]">
        <span className="block h-2 w-2 rotate-45 border-r-2 border-t-2 border-[#CBFC58]"></span>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300
                    group-hover:opacity-100 pointer-events-none">
        <div className="absolute inset-0 bg-[#CBFC58] blur-xl opacity-20"></div>
      </div>
    </button>
  );
};

export default ButtonG;
