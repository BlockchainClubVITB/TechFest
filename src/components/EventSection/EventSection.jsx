import React from "react";
import Button from "../common/Button/Button";
import event from "./event.svg";

const EventSection = () => {
  return (
    <section id="events" className="min-h-screen py-12 px-6 backdrop-blur-md">
      <div className="w-full flex flex-col md:flex-row-reverse gap-8 md:gap-16 
                    mx-auto bg-black/40 p-8 md:p-20 rounded-xl
                    border border-[#CBFC58]/20">
        {/* Text Content */}
        <div className="flex-1 text-white order-2 md:order-1">
          {/* Main Title with stroke and glow effect */}
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase 
                       mb-8 md:mb-12 tracking-wider whitespace-normal
                       text-transparent bg-clip-text
                       [text-shadow:_2px_2px_0_#CBFC58]
                       relative">
            TECH FEST<br />
            VIT BHOPAL
            {/* Glow overlay */}
            <span className="absolute -inset-2 bg-[#CBFC58]/5 blur-2xl rounded-lg"></span>
          </h2>

          {/* Description with gradient text */}
          <p className="text-lg md:text-xl leading-relaxed 
                     text-white/90 mb-8
                     [text-shadow:_0_0_30px_rgba(203,252,88,0.1)]">
            Tech Fest VIT Bhopal is a celebration of innovation, creativity, and technology. 
            It provides a platform for students to showcase their technical prowess, 
            collaborate on groundbreaking ideas, and compete in a variety of events. 
            From coding challenges to robotics competitions, the fest is designed to inspire 
            and empower participants to push the boundaries of what's possible. 
            Join us to experience the perfect blend of learning, fun, and innovation.
          </p>

          {/* Button Section */}
          <div className="mb-10">
            <Button 
              link="/events" 
              label="Explore Events" 
              padding="px-8 py-4"
              fontSize="text-xl"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-xl">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-[#CBFC58]/10 blur-3xl rounded-full"></div>
            
            {/* Main image with hover effect */}
            <img 
              src={event} 
              alt="Tech Fest VIT Bhopal" 
              className="relative w-full h-auto rounded-lg 
                       transition-all duration-300 hover:scale-105
                       shadow-[0_0_30px_rgba(203,252,88,0.2)]
                       hover:shadow-[0_0_40px_rgba(203,252,88,0.3)]"
            />

            {/* Decorative elements */}
            <div className="absolute -inset-1 border border-[#CBFC58]/20 rounded-lg
                          blur-sm opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
