import React from 'react'
import Button from "../common/Button/Button"

const WinnerInput = ({ position, number }) => (
  <div className="w-full flex flex-col gap-4 bg-black/40 backdrop-blur-md 
                  border border-[#CBFC58]/20 p-6 rounded-xl
                  hover:border-[#CBFC58]/40 hover:shadow-[0_0_30px_rgba(203,252,88,0.15)]
                  transition-all duration-300 ease-in-out
                  animate-[fadeIn_0.5s_ease-in]"
       style={{ animationDelay: `${number * 150}ms` }}>
    <span className="text-xl md:text-2xl font-semibold text-[#CBFC58]
                    border-b-2 border-[#CBFC58]/20 pb-2 inline-block">
      {position} Winner
    </span>
    
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="flex-1 space-y-2">
        <label className="text-white/90 text-lg font-medium block">
          Name
          <span className="text-[#CBFC58] ml-1">*</span>
        </label>
        <input 
          className="w-full bg-black/30 border border-[#CBFC58]/30 rounded-xl
                     px-4 py-3 text-white placeholder-white/50
                     focus:outline-none focus:border-[#CBFC58]
                     focus:shadow-[0_0_20px_rgba(203,252,88,0.2)]
                     transition-all duration-300"
          placeholder="Enter name"
        />
      </div>

      <div className="flex-1 space-y-2">
        <label className="text-white/90 text-lg font-medium block">
          Email
          <span className="text-[#CBFC58] ml-1">*</span>
        </label>
        <input 
          className="w-full bg-black/30 border border-[#CBFC58]/30 rounded-xl
                     px-4 py-3 text-white placeholder-white/50
                     focus:outline-none focus:border-[#CBFC58]
                     focus:shadow-[0_0_20px_rgba(203,252,88,0.2)]
                     transition-all duration-300"
          placeholder="Enter email"
          type="email"
        />
      </div>
    </div>
  </div>
);

const Hidden = () => {
  return (
    <div className="min-h-screen w-full py-24 px-4 md:px-6
                    bg-black/40 backdrop-blur-lg">
      <div className="max-w-4xl mx-auto transform hover:-translate-y-2
                    transition-all duration-500 ease-in-out">
        {/* Main Card */}
        <div className="relative">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#CBFC58] to-[#CBFC58]/50 
                         rounded-2xl blur-xl opacity-20 animate-pulse"></div>
          
          {/* Content Container */}
          <div className="relative bg-black/60 backdrop-blur-md rounded-2xl 
                         border border-[#CBFC58]/30 p-6 md:p-8">
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12
                         bg-gradient-to-r from-white to-[#CBFC58] bg-clip-text text-transparent
                         hover:from-[#CBFC58] hover:to-white transition-all duration-500">
              Winners
            </h1>

            {/* Winners Form */}
            <div className="space-y-6">
              <WinnerInput position="1st" number={1} />
              <WinnerInput position="2nd" number={2} />
              <WinnerInput position="3rd" number={3} />
              <WinnerInput position="4th" number={4} />
              <WinnerInput position="5th" number={5} />
            </div>

            {/* Submit Button */}
            <div className="mt-10 flex justify-center">
              <Button 
                label="Submit Winners" 
                padding="px-8 py-4"
                fontSize="text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hidden;